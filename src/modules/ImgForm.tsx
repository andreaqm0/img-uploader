import { ChangeEvent, useRef } from 'react'
import img from '../assets/image.svg'

const ImgForm = ({setFile, setLoading} : any) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const drop = useRef<HTMLInputElement>(null)
    
    const handleDragOver = (e : any) => {
        e.preventDefault();
        e.stopPropagation();
    };
    
    const handleDrop = (e : any) => {
        e.preventDefault();
        e.stopPropagation();
        const files = e.dataTransfer?.files
        if (files && files.length > -1) {
            const fileType = files.item(0)?.type
            const isImage = fileType?.includes('image')
            
            if (isImage) {
                setFile(files.item(0))
                setLoading(true)
            }            
        }
    };

    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files && e.target.files.item(0)
        if (files) {
            setFile(files)  
            setLoading(true)          
        }

    }

    const clickHandler = () => inputRef.current?.click()

    return (
        <>
            <input ref={inputRef}  type='file' accept="image/*" className='hidden' onChange={handleChange} />
            <div className='flex flex-col justify-between align-middle text-center text-gray-600 py-10 px-8 m-auto w-1/3 h-2/3 bg-white rounded-xl shadow-lg shadow-gray-300/75'>
                <div className='flex flex-col gap-5'>
                <h1 className='text-xl font-semibold'>Upload your image</h1>
                <h4 className='text-xs'>File should be Jpeg, Png...</h4>
                </div>
                <div className='grow flex flex-col justify-between mt-8'>
                <div onDragOver={handleDragOver} onDrop={handleDrop} ref={drop} className='flex flex-col justify-evenly w-full h-2/3 rounded-xl border-2 border-dashed border-blue-300 bg-cost-blue'>
                    <img src={img} className='w-1/3 mx-auto' />
                    <h4 className='text-sm font-semibold text-gray-400/50'>Drag & Dropg your image here</h4>
                </div>
                <h4 className='font-semibold text-gray-400/50'>Or</h4>
                <button onClick={clickHandler} className='rounded-lg w-fit mx-auto px-5 py-2 text-white bg-blue-500 hover:bg-blue-500/75 transition-all duration-200'>Choose a File</button>
                </div>
            </div>
        </>
    )
}

export default ImgForm