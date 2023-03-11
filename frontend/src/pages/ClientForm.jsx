import { useState } from "react"
import { useNavigate } from "react-router-dom"

function ClientForm() {
    const [companyName, setCompanyName] = useState('')
    const [pocName, setPocName] = useState('')
    const [designation, setDesignation] = useState('')
    const [logo, setLogo] = useState('')
    const [header, setHeader] = useState('')
    const [subHeader, setSubHeader] = useState('')
    const [desc, setDesc] = useState('')
    const [urls, setUrls] = useState('')

    const navigate = useNavigate()

    async function handleClick(e) {
        e.preventDefault()

        if (!companyName || !pocName || !designation || !logo) {
            return
        }

        let temp = urls.split(',')
        temp = temp.map((el) => el.trim())
        console.log(temp)
        
        const response = await fetch('/sales', {
            method: 'POST',
            body: JSON.stringify({companyName, pocName, designation, logo, header, subHeader, desc, urls: temp}),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()
    
        navigate(`/${json._id}`)
    }


    return (
        <div className="flex flex-col items-center p-6 border-2 border-gray-800 rounded-lg w-1/2 mx-auto my-10">
            <div className="text-3xl font-bold">Client Form</div>
            <form className="p-10 flex flex-col items-center">
                <div className="form-sub">
                    <label>Company Name</label>
                    <input type='text' className="p-2" onChange={(e) => {setCompanyName(e.target.value)}}></input>
                </div>
                <div className="form-sub">
                    <label>POC name</label>
                    <input type='text' className="p-2" onChange={(e) => {setPocName(e.target.value)}}></input>
                </div>
                <div className="form-sub">
                    <label>Designation of POC</label>
                    <input type='text' className="p-2" onChange={(e) => {setDesignation(e.target.value)}}></input>
                </div>
                <div className="form-sub">
                    <label>Company Logo URL</label>
                    <input type='text' className="p-2" placeholder="Only enter URL of image" onChange={(e) => {setLogo(e.target.value)}}></input>
                </div>
                <div className="form-sub">
                    <label>Header</label>
                    <input type='text' className="p-2" onChange={(e) => {setHeader(e.target.value)}}></input>
                </div>
                <div className="form-sub">
                    <label>Subheader</label>
                    <input type='text' className="p-2" onChange={(e) => {setSubHeader(e.target.value)}}></input>
                </div>
                <div className="form-sub">
                    <label>Description Text</label>
                    <textarea rows={10} cols={40} onChange={(e) => {setDesc(e.target.value)}}></textarea>
                </div>
                <div className="form-sub">
                    <label>Video Links</label>
                    <textarea rows={10} cols={40} placeholder="Enter comma separated urls" onChange={(e) => {setUrls(e.target.value)}}></textarea>
                </div>
                <button className="form-btn" onClick={handleClick}>Add sales page</button>
            </form>
        </div>
    ) 
}

export default ClientForm