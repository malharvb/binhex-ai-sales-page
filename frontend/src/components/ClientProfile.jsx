import companyLogo from '../assets/company-logo.jpg'

function ClientProfile() {
  return (
    <div className="flex justify-center items-center text-xl group">
      <img src={companyLogo} alt="Company Logo" className='w-30 h-28'></img>
      <div className="absolute scale-0 transition-all duration-100 group-hover:scale-100 shadow-md shadow-blue-900 bg-slate-400 p-5 rounded-lg text-slate-50">
        <div className="font-bold p-1">Client Name</div>
        <div className='p-1'>POC name</div>
        <div className='p-1'>Designation of POC</div>
      </div>
    </div>
  );
}

export default ClientProfile;
