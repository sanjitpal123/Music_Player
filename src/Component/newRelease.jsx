import { useQuery } from "react-query";
import fetchNewRelease from "../Services/FetchHomeData";


function NewRelease() {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["NewRelease"],
        queryFn: () => fetchNewRelease(),
    });

    // Loading State
    if (isLoading) {
        return <div className="text-center mt-10">Loading...</div>;
    }

    // Error State
    if (isError) {
        return <div className="text-center mt-10">Error fetching data.</div>;
    }
    console.log(data)

    return (
        <div className="w-full mt-10">
            <h2 className="text-2xl font-bold text-center mb-5">New Releases</h2>
            <div className="flex web overflow-x-auto space-x-4 p-4 " >
                {data && data.length > 0 ? (
                    data.map((item) => (
                        <div key={item.id} className="flex-none w-[200px] relative cursor-pointer">
                            <img
                                src={item.images[0]?.url}
                                alt={item.name}
                                className="object-cover w-full h-[250px] rounded-lg shadow-lg transition-transform duration-200 transform hover:scale-105"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent rounded-b-lg p-2">
                                <p className="text-white text-sm font-semibold">{item.name}</p>
                                <p className="text-gray-300 text-xs">{item.artists[0].name|| 'Unknown Artist'}</p>
                               
                            </div>
                        </div>
                    ))
                ) : (
                    <div>No new releases available.</div>
                )}
            </div>
        </div>
    );
}

export default NewRelease;
