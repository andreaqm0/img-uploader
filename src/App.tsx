import { useState } from 'react'
import './App.css'
import ImgForm from './modules/ImgForm'
import LoadingContainer from './modules/LoadingContainer'
import UploadedImg from './modules/UploadedImg'

function App() {
  const [file, setFile] = useState<File|null>()
  const [loading, setLoading] = useState<boolean>(false)
  const [url, setUrl] = useState('')
  
  return (
    <div className="w-full h-screen bg-cost-white flex">
      {
        !file 
          ? <ImgForm setFile={setFile} setLoading={setLoading} />
          : loading && !url
            ? <LoadingContainer file={file} setUrl={setUrl} />
            : <UploadedImg url={url} />
      }
    </div>
  )
}

export default App
