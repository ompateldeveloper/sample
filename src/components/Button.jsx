export default function Button({children}){
    return(
        <div className={'p-4 max-h-10 flex items-center justify-center bg-green-300 hover:bg-green-500 rounded-xl'} >
            {children}
        </div>
    )
}