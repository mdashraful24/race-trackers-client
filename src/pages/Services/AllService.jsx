import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const AllService = () => {
    const axiosPublic = useAxiosPublic();

    const { data: services = [], isLoading, isError } = useQuery({
        queryKey: ["services"],
        queryFn: async () => {
            const res = await axiosPublic.get("/services");
            return res.data;
        },
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching data</div>;
    }

    return (
        <div className="container mx-auto px-4 pt-12 pb-20">
            {/* Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="shadow-lg rounded-xl overflow-hidden border"
                    >
                        {/* Image with zoom on hover */}
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full md:h-72 md:object-cover mb-4 transition-transform duration-300 transform hover:scale-105"
                        />

                        <div className='px-5 pb-5 space-y-2'>
                            {/* Title */}
                            <h3 className="text-xl font-bold">{service.title}</h3>

                            {/* Description */}
                            <p>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllService;




// import React from 'react';
// import useAxiosPublic from '../../hooks/useAxiosPublic';
// import { useQuery } from '@tanstack/react-query';

// const AllService = () => {
//     const axiosPublic = useAxiosPublic();

//     const { data: services = [], isLoading, isError } = useQuery({
//         queryKey: ["services"],
//         queryFn: async () => {
//             const res = await axiosPublic.get("/services");
//             return res.data;
//         },
//     });

//     if (isLoading) {
//         return <div>Loading...</div>;
//     }

//     if (isError) {
//         return <div>Error fetching data</div>;
//     }

//     return (
//         <div className="container mx-auto px-4 pt-12 pb-20">
//             {/* Title */}
//             <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-5">
//                 Services
//             </h2>
//             {/* Border */}
//             <div className="mb-10 h-1 w-36 bg-[#591a6a] mx-auto"></div>

//             <h2 className="text-base font-bold mb-3">
//                 Our Features
//             </h2>
//             <h2 className="text-2xl md:text-3xl font-extrabold mb-5">
//                 Program & Services
//             </h2>
//             <div className="mb-10 h-1 w-36 bg-[#591a6a]"></div>

//             {/* Service Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {services.map((service) => (
//                     <div key={service.id} className="relative overflow-hidden rounded-lg shadow-lg group">
//                         <img
//                             src={service.image}
//                             alt={service.title}
//                             className="w-full h-full transition-transform duration-300 group-hover:scale-110"
//                         />
//                         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 md:via-black/70 lg:via-black/100 to-transparent p-4">
//                             <h3 className="text-xl font-semibold text-white">{service.title}</h3>
//                             <p className="text-white">{service.description}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default AllService;

