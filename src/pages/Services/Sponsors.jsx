import Marquee from 'react-fast-marquee';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const Sponsors = () => {
    const axiosPublic = useAxiosPublic();

    const { data: sponsors = [], isLoading, isError } = useQuery({
        queryKey: ['sponsors'],
        queryFn: async () => {
            const res = await axiosPublic.get('/sponsors');
            return res.data;
        },
    });

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 mt-10">
            {/* <h2 className="text-base text-center font-bold mb-3">
                Our Features
            </h2> */}
            <h2 className="text-2xl md:text-4xl text-center font-extrabold mb-5">
                Services & Sponsors
            </h2>
            <div className="mb-10 h-1 w-36 mx-auto bg-[#591a6a]"></div>

            {/* Marquee for Sponsors */}
            <div className="flex items-center gap-3 bg-base-200 p-2">
                <p className="bg-purple-600 text-white px-3 py-1">Sponsors</p>
                <Marquee pauseOnHover={true} speed={100} className="space-x-10">
                    {sponsors.map((sponsor) => (
                        <div key={sponsor._id} className="flex-shrink-0 mx-4">
                            <h1 className='text-md font-bold cursor-pointer'>{sponsor.name}</h1>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default Sponsors;
