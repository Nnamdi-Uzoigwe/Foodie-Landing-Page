import { ReactNode } from "react"

export default function Button({ children }: { children: ReactNode }) {
    return (
        <div className="cursor-pointer bg-[#F03328] transition duration-200 active:bg-red-700 hover:bg-red-700 px-6 py-2 text-white w-fit rounded-[38px]">
            {children}
        </div>
    )
}

