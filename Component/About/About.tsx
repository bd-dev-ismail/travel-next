import Link from "next/link";
import animate from '../../assets/81450-team.json'
import Lottie from 'lottie-react'

const About = () => {
    return (
        <div className='bg-[#fff] text-black my-10 px-10'>
        <h2 className='text-2xl text-center font-bold '>About Us</h2>
         <div className=" ">
         <div className="flex flex-col lg:flex-row-reverse">
           {/* <img src="about.png" className="w-1/2  rounded-lg shadow-2xl" /> */}
           <div className="w-1/2">
           <Lottie animationData={animate} />
            
           </div>
            <div className="w-1/2">
            <h1 className="text-5xl font-bold text-gray-800">Explore all tour of the <br /> world with us.!</h1>
            <p className="py-6 text-gray-800">Lorem Ipsum available, but the majority have suffered  alteration in some form, <br /> by injected humour, or randomised   words which don't look even slightly believable.</p>

            <div>
             <h3 className='text-3xl font-bold text-gray-500'>Friendly price</h3>
             <p>Lorem Ipsum available, but the majority have <br /> suffered alteration in some.</p>
            </div>

            <div  className='my-5'>
             <h3 className='text-3xl font-bold text-gray-500'>Reliable tour</h3>
             <p>Lorem Ipsum available, but the majority have <br /> suffered alteration in some.</p>
            </div>

            <div>
             <h3 className='text-3xl font-bold text-gray-500'>Tour guide</h3>
             <p>Lorem Ipsum available, but the majority have <br /> suffered alteration in some.</p>
            </div>

            <Link href='/booking'><button className="btn btn-primary mt-6">Booking Now</button></Link>
            </div>
          </div>
         </div>
    </div>
    );
};

export default About;