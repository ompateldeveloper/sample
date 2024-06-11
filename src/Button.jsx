import './css/button.css'
export default function Button({children}){
    return(
        <button className='text-xl'>
            {children}
        </button>
    )
}