import ClientProfile from "../components/ClientProfile";
import Proposition from "../components/Proposition";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function SalesPage() {
    const {id} = useParams()
    const [profile, setProfile] = useState({})

    useEffect(() => {
        async function fetchSales() {
            if (!id) return
        
            const response = await fetch(`/sales/${id}`, {
                method: "GET"
            })
            const json = await response.json()

            if (response.ok) {
                setProfile(json)
            }            
        }

        fetchSales()
    }, [])

    return (
        <div className="flex p-20 flex-col gap-20">
            <ClientProfile profile={profile}/>
            <Proposition profile={profile}/>
        </div>
    )
}

export default SalesPage