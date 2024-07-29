const links = [
    {
        name:"Home",
        url:"#home"
    },
    {
        name:"Style Guide",
        url:"#home"
    },
    {
        name:"Licenses",
        url:"#home"
    },
    {
        name:"ChangeLog",
        url:"#home"
    }
]

const logos = [
    {
        class:"bx bxl-facebook-circle"
    },
    {
        class:"bx bxl-instagram"
    },
    {
        class:"bx bxl-linkedin-square"
    },
    {
        class:"bx bxl-youtube"
    }
]



const Footer = () => {
    return ( 
        <footer>
            <div className="flex justify-between items-center pb-12 border border-white border-b-gray-400">
                <div className="text-gray-800">
                    Logo.
                </div>

                <div>
                    <ul>
                        {
                            links.map((link, index) => {
                                return(
                                    <li key={index} className="inline-block me-4"> <a href={link.url} className="text-gray-800 transition-all ease-in-out duration-150 hover:text-purple-500"> {link.name} </a> </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div>
                    <ul>
                        {
                            logos.map((logo, index) => {
                                return(
                                    <li key={index} className="inline-block ms-3 text-gray-800"> <i className={`${logo.class} text-2xl`}></i> </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>

            <div className="text-center py-8 text-gray-600">
                &copy; 2024 Designed 
            </div>

        </footer>
     );
}
 
export default Footer;