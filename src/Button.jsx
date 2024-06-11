export default function Button({children}){
    return(
        <button className='p-4 bg-green-300 hover:bg-green-500 rounded-xl'>
            {children}
        </button>
    )
}