export default function Button({children,title}){
    return(
        <button className={'p-4 bg-green-300 hover:bg-green-500 rounded-xl'} title={title}>
            {children}
        </button>
    )
}