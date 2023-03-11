import companyLogo from '../assets/company-logo.jpg'

function VideoTile() {
    return (
        <div className="flex justify-center items-center group w-[18rem] h-[16rem]"> 
            <img src={companyLogo} alt="Video Link" className='group-hover:opacity-30'/>
            <div onClick={() => {window.open('https://www.google.com')}} className='absolute scale-0 transition-all duration-100 group-hover:scale-100 bg-slate-400 p-5 text-slate-50 opacity-90'>
                Click to watch video
            </div>
        </div>
    )
}

export default VideoTile