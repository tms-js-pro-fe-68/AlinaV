

export default function TailwindCss({title}){
    return(
        <div className="flex flex-row justify-center mt-3.5 basis-full">
            <input className="basis-1/12 mt-1.5" type="checkbox"/>
            <div className="basis-10/12 rotate-2">{title}</div>
            <button className="basis-1/12 bg-[#bada55] rounded-l-lg rounded-r-lg"></button>
        </div>
    )
}