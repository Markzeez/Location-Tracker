
import MapPage from '../Component/MapPage';
import { FaMapMarkerAlt } from "react-icons/fa";
import Sidebar from '../Component/Sidebar';

function TrackPage() {
  
  return (
    <div className="w-full h-screen flex flex-row justify-between align-center bg-[#fdfdfd]">
      <Sidebar />
      {/* <div className="pl-10 space-y-5 w-[350px]">  
        <div>
        <h1 className='text-4xl text-center pt-8 font-semibold '>Tracking</h1>
        <form className='mt-8 space-y-4 items-center '>
            <div>
            <input type="text" className='bg-slate-200 h-8 w-60' placeholder='ID number' />
            </div>
            <div>
            <input type="text" className='bg-slate-200 h-8 w-60 items-center' placeholder='2GC678S' />
            </div>
        </form>
        <button className='bg-red-600 text-white rounded-md  h-8 ml-20 mt-5 p-6 pt-1 pb-2 '>Track</button>
        <div>
            <div className='flex justify-start text-left pb-5 '><h4>Current Location</h4></div>
          <div className='flex flex-row justify-between items-center text-base space-x-4'>
          <p>Chevron 15, Lekki Lagos <br />Nigeria 10124</p>
        <button className='bg-red-500 text-white rounded-md  h-8 ml-20 mt-5 p-6 pt-1 pb-2 w-40 '>Get Direction</button>
                
          </div>
        </div>
        </div>
        <h3 className='text-left'>Route</h3>
        <p className='pl-5'>0.3 km <br />Turned left onto Bath Str</p>
        <p className='pl-5'>1.2 km <br />Turned right onto Mitchell Str</p>
        <p className='pl-5'>0.1 km <br />Kept right on Valley Rd</p>
        <p className='pl-5'>0.1 km <br />Turned right onto Rd</p>
        <div>

        </div>

    
      </div> */}
      <div className="w-[900px] ">
        <MapPage  />
      </div>
    </div>
  );
}

export default TrackPage;
