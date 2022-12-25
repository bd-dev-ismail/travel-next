import animate from '../assets/91188-contact-blue.json'
import Lottie from 'lottie-react'

const contact = () => {
    return (
        <div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-14 my-5">
                 <div className="card bg-[#A4CECC] text-black">
                  <div className="card-body ">
                   <h2 className="card-title font-bold">Email:</h2>
                   <p>
                    next@gmail.com <br />
                    travelNext@gmail.com
                   </p>
                    </div>
                 </div>

                 <div className="card bg-[#A4CECC] text-black">
               <div className="card-body ">
                   <h2 className="card-title font-bold">Phone:</h2>
                   <p>
                     +932823070863
                     <br />
                     +8801723798236
                   </p>
                     
                    </div>
                 </div>
            </div>

            <div className="my-5 ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-full lg:w-1/2 ">

                    <Lottie animationData={animate} />
                    </div>
                   <div className="w-full lg:w-1/2 bg-[#A4CECC] p-5 rounded">
                   <input type="text" placeholder="Enter your name" className="input mt-8 input-bordered w-full" /> 
                   <br />
                   <input type="email" placeholder="Enter email address" className="input my-8 input-bordered w-full " />
                   <br />
                   <textarea className="textarea w-full mb-8 py-4" placeholder="Type your keyword"></textarea>
                   <br />

                   <button className="btn bg-[#029E9D] hover:bg-[#029E9D] border-[#029E9D] hover:border-[#029E9D]  mb-7">Send Message</button>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default contact;