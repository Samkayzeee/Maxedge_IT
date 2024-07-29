const Results = () => {
    return ( 
        <div className="flex items-center justify-between">
            <div className="w-1/2">
                <h2 className="text-4xl text-gray-700 font-medium my-8 leading-[56px]">
                    The results of our first users speak for themselves. <br /> Investments just got even better.
                </h2>

                <p className="text-gray-500 my-8 text-lg leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
                Duis cursus, mi quis viverra ornare, eros dolor interdum.
                </p>
            </div>

            <div>
                <div className="p-5 border border-white border-l-gray-200 mb-10">
                    <h1 className="text-6xl my-4 text-gray-700">60%</h1>
                    <h2 className="text-xl text-gray-700 font-medium my-4">Higher chance of success</h2>
                    <p className="text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
                    </p>
                </div>

                <div className="p-5 border border-white border-l-gray-200">
                    <h1 className="text-6xl my-4 text-gray-700">100+</h1>
                    <h2 className="text-xl text-gray-700 font-medium my-4">Top investment options</h2>
                    <p className="text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default Results;