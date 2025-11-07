import React from 'react'
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useForm, SubmitHandler } from "react-hook-form"
import { firebaseFireStore } from '@/utils/firebaseClient';
import { toast } from 'react-toastify';
import PrimaryButton from './button/PrimaryButton';
import { IoIosWarning } from 'react-icons/io';

type Inputs = {
    name: string
    email: string
    phone: string
    message: string
}
const rules = {
    name: {
        required: "Vui lòng Nhập Tên !!",
        minLength: { value: 2, message: "Tên Ít nhất phải có 2 ký tự" },
        validate: (v: string) =>
            !/^\d+$/.test(v.trim()) || "Tên không thể chỉ là số",
    },
    phone: {
        required: "Vui lòng nhập số điện thoại !!",
        // VN numbers: 0xxxxxxxxx or +84xxxxxxxxx, prefixes 3/5/7/8/9
        pattern: {
            value: /^(?:\+?84|0)(?:3|5|7|8|9)\d{8}$/,
            message: "Vui lòng nhập đúng Số điện thoại !!",
        },
    },
    email: {
        pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
            message: "email Không đúng định dạng !!",
        },
    },
} as const;

const ContactForm = () => {
    const [isLoading, setIsLoading] = React.useState(false)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
        try {
            setIsLoading(true)
            await addDoc(collection(firebaseFireStore, "contacts"), {
                ...data,
                createdDate: serverTimestamp(),
                message: "user data"
            })
            toast.success("Thành Công, Chúng Tôi Sẽ Sớm Liên Hệ Với Bạn!!")
            setIsLoading(false)
            reset()
        } catch (error) {
            setIsLoading(false)
            toast.info("Hãy Thử Liên Hệ Với Chúng Tôi Bằng Phương Thức Khác!!")
            console.log(error)
        }
    }
    return (
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} >
            <input
                {...register("name", rules.name)}
                type="text"
                placeholder="Họ và Tên"
                className="w-full px-4 py-3 rounded-md bg-white text-black focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
            {
                errors.name && <div className='flex justify-start items-center gap-1 text-sm text-red-500 mx-1 capitalize'>
                    <IoIosWarning /> {errors.name.message}
                </div>
            }
            <input
                {...register("phone", rules.phone)}
                type="tel"
                placeholder="Số điện thoại"
                className="w-full px-4 py-3 rounded-md bg-white text-black focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
            {
                errors.phone && <div className='flex justify-start items-center gap-1 text-sm text-red-500 mx-1 capitalize'>
                    <IoIosWarning /> {errors.phone.message}
                </div>
            }
            <input
                {...register("email", rules.email)}
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md bg-white text-black focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
            {
                errors.email && <div className='flex justify-start items-center gap-1 text-sm text-red-500 mx-1 capitalize'>
                    <IoIosWarning /> {errors.email.message}
                </div>
            }
            <div className='smoothly-scale'>
                <PrimaryButton isLoading={isLoading} type='submit'  >
                    Đăng ký tham gia ngay!
                </PrimaryButton>
            </div>
        </form>
    )
}

export default ContactForm