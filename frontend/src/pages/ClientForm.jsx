function ClientForm() {
    return (
        <div className="flex flex-col items-center p-10 border-2 border-gray-800 rounded-lg w-1/2 m-auto mt-10">
            <div className="text-3xl font-bold">Client Form</div>
            <form className="p-10">
                <div className="form-sub">
                    <label>Company Name</label>
                    <input type='text' className="p-2"></input>
                </div>
                <div className="form-sub">
                    <label>POC name</label>
                    <input type='text' className="p-2"></input>
                </div>
                <div className="form-sub">
                    <label>Designation of POC</label>
                    <input type='text' className="p-2"></input>
                </div>
                <div className="form-sub">
                    <label>Company Logo URL</label>
                    <input type='text' className="p-2" placeholder="Only enter URL of image"></input>
                </div>
            </form>
        </div>
    ) 
}

export default ClientForm