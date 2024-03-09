import { FC } from "react"

interface InputType {
    title: string;
    content: string;
    id: string;
}

const InputBox:FC<InputType> = ({title, content, id}) => {
    return (
        <div className="flex flex-col w-full gap-[16px]">
            <p className="text-[16px] font-medium text-white">{title}</p>
            <div className="flex rounded-[12px] px-[16px] py-[10px] bg-black border-[1px] border-[#363A3D]">
                <input id={id} type="text" className="flex w-full bg-transparent outline-none text-white" placeholder={content}></input>
            </div>
        </div>
    )
}

export default InputBox