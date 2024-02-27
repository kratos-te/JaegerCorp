import { FC } from "react"

interface InputType {
    title: string;
    content: string;
}

const InputBox:FC<InputType> = ({title, content}) => {
    return (
        <div className="flex flex-col w-full gap-[16px]">
            <p className="text-[16px] font-medium text-white">{title}</p>
            <div className="flex rounded-[12px] px-[16px] py-[10px] bg-black border-[1px] border-[#363A3D]">
                <input type="text" className="flex w-full bg-transparent outline-none text-white" placeholder={content}></input>
            </div>
        </div>
    )
}

export default InputBox