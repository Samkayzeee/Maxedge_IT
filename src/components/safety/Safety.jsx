

const contents = [
    {
        type:"Secure",
        lorem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: "bx bx-check-shield"
    },
    {
        type:"24/7 Support",
        lorem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: "bx bx-message-dots"
    },
    {
        type:"Open Source",
        lorem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: "bx bx-code-alt"
    }
]


const Safety = () => {
    return ( 
        <div>
            <h1 className="text-center text-5xl text-gray-800 font-medium my-6">Your Safety is our top priority</h1>
            <p className="text-center text-lg text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <div className="flex justify-between my-12">
                {
                    contents.map((content, index) => {
                        return(
                            <div key={index} className="p-8 bg-gray-100 rounded-xl w-[30%]">
                                <i className={`${content.icon} text-purple-500 text-5xl font-thin`}></i>
                                <h2 className="text-3xl my-4 text-gray-700 font-semibold"> {content.type} </h2>
                                <p className="text-base text-gray-800">{ content.lorem }</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
     );
}
 
export default Safety;