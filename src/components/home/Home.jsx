import phone_pic from '../../assets/Phone_pic.png';



const Home = () => {
    return ( 
        <div className='flex items-center justify-between'>
            <div className='w-1/2'>
            <h1 className="text-6xl text-gray-700 font-medium my-8">
                Grow Your Money In A Few Taps
            </h1>

            <p className='text-gray-500 my-8 text-lg leading-10'>
                Invest money in good assests for a better future with just a few taps.Faster.Easier.
            </p>


            <div className='my-8 flex items-center'>
                <input type="text" placeholder="Enter Your Email Here" className="input input-bordered w-full bg-transparent max-w-xs" />
                <button className='btn text-white ms-4 bg-gradient-to-t from-black to-gray-300 border-none'>Join Wishlist</button>
            </div>

            <p className='text-sm text-gray-600'>
                By clicking Join Waitlist you're confirming that you agree with our Terms and Condition
            </p>
            </div>

            <div>
                <img src={phone_pic} alt="Phone Pic" className='w-80 h-full'/>
            </div>
        </div>
     );
}
 
export default Home;