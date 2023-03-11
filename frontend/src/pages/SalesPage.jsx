import ClientProfile from "../components/ClientProfile";
import Proposition from "../components/Proposition";
import { useState } from "react";

function SalesPage() {
    const [profile, setProfile] = useState({})

    return (
        <div className="flex p-20 flex-col gap-20">
            <ClientProfile profile={profile}/>
            <Proposition profile={profile}/>
        </div>
    )
}

export default SalesPage