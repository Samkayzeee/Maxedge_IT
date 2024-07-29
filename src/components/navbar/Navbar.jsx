
const link = [
    {
        name:"Home",
        url:"#home"
    },
    {
        name:"Results",
        url:"#results"
    },
    {
        name:"Safety",
        url:"#safety"
    }
]

const Navbar = () => {
    return ( 
    
            <div className="navbar fixed top-10 w-5/6 rounded-md bg-gray-500/30 backdrop-blur-xl">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Logo.</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      {
        link.map((link, index) => {
            return(
                <li key={index}> <a href={link.url} className="text-gray-800"> { link.name } </a> </li>
            )
        })
      }
    </ul>
  </div>
</div>
        
     );
}
 
export default Navbar;