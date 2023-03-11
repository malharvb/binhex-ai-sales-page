import VideoTile from "./VideoTile"

function Proposition() {
    return (
        <div className="flex flex-col items-center justify-center gap-5">
            <div className="text-4xl">Lorem ipsum</div>
            <div className="text-2xl">Sub Lorem</div>
            <div className=" w-3/4 border-2 border-gray-800 p-8 rounded-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ad unde distinctio fugit ullam nostrum, suscipit voluptatum, 
                excepturi quibusdam cum exercitationem non explicabo Labore expedita 
                inventore dolores omnis? Natus, repellendus voluptas
            </div>
            <div className="text-xl">Video Display</div>

            <div className="flex flex-wrap w-3/4 justify-center gap-8">
                <VideoTile />
                <VideoTile />
                <VideoTile />
                <VideoTile />
                <VideoTile />
                <VideoTile />
                <VideoTile />
            </div>

            <div className="underline text-2xl">
                Schedule an appointment
            </div>
        </div>
    )
}

export default Proposition