export function TitleSection({subtitle, title}) {
    return (
       <div className="px-3 @desktop:px-0 mb-12 @desktop:mb-14 space-y-1">
           <span className="text-sm @desktop:text-xl font-semibold text-white text-opacity-70">{subtitle}</span>
           <h2 className="font-poppins text-3xl @desktop:text-5xl/tight">{title}</h2> 
       </div> 
    )
}