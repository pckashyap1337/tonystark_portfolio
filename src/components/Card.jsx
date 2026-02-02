const Card = ({title, items, description=""}) => {
    return (
        <div className="card flex justify-center items-center w-95 h-80 gap-5
         md:gap-7 flex-col p-2 border-2 border-blue-400 rounded-2xl my-3 md:my-10
         hover:-translate-y-1 transition-all duration-300">
            {
                <h2 className="text-xl md:text-2xl font-semibold text-blue-600 text-center">{title}</h2>
            }
            {
                description?<p className="text-sm md:text-base text-center">{description}</p>:""
            }
            
            <ul className="flex flex-col gap-2 text-sm md:text-base">
                {
                    items.map((skill, index) => (
                        <li 
                        className="
                        flex items-start gap-2
                        before:content-['⚡']
                        before:text-blue-400
                        before:text-sm
                        group-hover:before:scale-110
                        transition-transform" 
                        key={index}>{skill}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Card;