import BannerWrapper from "../BannerWrapper/BannerWrapper.jsx";
import Gexagedron from "../Banner/Gexagedron.jsx";
import errow from "../../assets/icons/errow.svg"
import Banner from "../Banner/Banner.jsx";
import { useEffect, useState } from "react";
import classNames from "classnames";

export const AboutSection = ({ scrollToProjects }) => {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 1200);
    }, []);
  return (
    <div className="relative h-[550px]">
      <div className=" relative flex flex-col justify-center">
        <div className="absolute top-0">
        <BannerWrapper sketch={Banner} />
        </div>
        <div className={classNames(
          " flex flex-col relative justify-center items-center top-10 md:top-20 h-[400px] transition-transform duration-1000",
          {
            "-translate-y-6": !loading, 
            "translate-y-0": loading,
          }
        )}>
          <BannerWrapper sketch={Gexagedron} />
        </div>

        <button
          onClick={scrollToProjects}
          className='relative flex flex-col gap-2 items-center top-10'>
          <div className='text-lg text-gray-100 pb-1 hover:border-b-1 transition-border duration-100'>
            Discover my Projects
          </div>
          <img className='w-7 h-7' src={errow} alt="errow"/>
        </button>
      </div>
    </div>
  )
}