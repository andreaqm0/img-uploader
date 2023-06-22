interface promps {
    url : string
}

const UploadedImg = ({url} : promps) => {

  return (
    <div className="flex flex-col gap-6 text-center text-gray-600 py-10 px-8 m-auto w-1/3 h-2/3 bg-white rounded-xl shadow-lg shadow-gray-300/75">
        <div className="mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-green-700">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
            </svg>
        </div>
        <h2 className="text-2xl font-semibold">Uploaded Successfully!</h2>
        <div
          className="rounded-xl w-full h-1/2 bg-gray-200"
          style={{
            backgroundImage : `url('${url}')`,
            backgroundPosition : 'center',
            backgroundSize : 'cover',
            backgroundRepeat : 'no-repeat'
          }}
        >
          <img src={url} className="opacity-0 m-0 p-0 w-full h-full" />
        </div>
        <div className="flex gap-2">
              <div className="block select-none	 w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 truncate">
                {url}
              </div>
              <button onClick={() => navigator.clipboard.writeText(url)} type="button" className="text-white whitespace-nowrap bg-blue-600 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Copy Link</button>
        </div>
    </div>
  )
}

export default UploadedImg