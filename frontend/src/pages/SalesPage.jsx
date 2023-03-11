import ClientProfile from "../components/ClientProfile";
import Proposition from "../components/Proposition";

function SalesPage() {
    return (
        <div className="flex p-20 flex-col gap-20">
            <ClientProfile/>
            <Proposition/>
        </div>
    )
}

export default SalesPage