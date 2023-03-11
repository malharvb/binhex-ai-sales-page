
import VideoTile from "./VideoTile"

function Proposition({profile}) {

    return (
        <div className="flex flex-col items-center justify-center gap-5">
            <div className="text-4xl">{profile.header || "Lorem ipsum"}</div>
            <div className="text-2xl">{profile.subHeader || "Sub Lorem"}</div>
            <div className=" w-3/4 border-2 border-gray-800 p-8 rounded-lg">
                {profile.desc ||
                `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ad unde distinctio fugit ullam nostrum, suscipit voluptatum, 
                excepturi quibusdam cum exercitationem non explicabo Labore expedita 
                inventore dolores omnis? Natus, repellendus voluptas` }
            </div>
            <div className="text-xl">Video Display</div>

            {profile.urls ?
            (<div className="flex flex-wrap w-3/4 justify-center gap-8">
                {profile.urls.length !== 0 && profile.urls.map((url) => <VideoTile image={profile.logo} url={url}/>)}
            </div>) : <VideoTile />
            }

            <div className="underline text-2xl">
                Schedule an appointment
            </div>
            <div className="flex flex-col items-center gap-1">
                <div className="form-sub items-center">
                    <label>Enter date of appointment</label>
                    <input type="date"/>
                </div>
                <div className="form-sub items-center">
                    <label>Email</label>
                    <input type="email"/>
                </div>
                <div className="form-sub items-center">
                    <label>Contact Number</label>
                    <input type="text"/>
                </div>
                <button className="form-btn">Schedule Appointment</button>
            </div>
        </div>
    )
}

export default Proposition