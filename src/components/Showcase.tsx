import { MouseEvent, useRef, useState } from "react";
import { images } from "../assets";

const Showcase = () => {
  return (
    <section className="basis-7/12  h-screen custom-gradient flex flex-col font-newInterFont">
      <div className="flex flex-row">
        {/* BLOCK 1 */}
        <div className="w-[22rem] text-[#F2F2F2] font-medium ml-32 mt-10">
          <img src={images.bell} alt="notification bell" className="mb-4" />
          <p className=" text-3xl mb-4 shadow-custom ">
            Get notified when a highly correlated whale makes a move
          </p>
          <p className=" text-gray-300 text-lg">
            Find out when a certain whale moves more than any preset amount
            on-chain or when a dormant whale you care about becomes active.
          </p>
        </div>
        {/* BLOCK 2 */}
        <div className="ml-auto h-44">
          <div className="w-96 h-full carousel-container ">
            <div className="w-full flex  gap-12 no-scrollbar carousel-track">
              <NotificationSettingOne />
              <NotificationSettingTwo />
              <NotificationSettingThree />
              <NotificationSettingOne />
              <NotificationSettingTwo />
              <NotificationSettingThree />
              <NotificationSettingOne />
              <NotificationSettingTwo />
              <NotificationSettingThree />
            </div>
          </div>
        </div>
      </div>
      {/* ROW 2 */}
      <div className=" flex justify-between items-center mt-12">
        <div>
          <img
            src={images.cohort2x}
            alt="cohort"
            className="ml-32 w-[24rem] aspect-auto"
          />
        </div>
        <div className="flex flex-col w-96 items-end mr-24">
          <img src={images.eye} alt="eye" className="w-fit mb-4 -mt-2" />
          <p className="text-3xl text-[#F2F2F2] text-right w-64 mb-6">
            Watch what the whales are doing
          </p>
          <div className=" text-right text-[#F2F2F2] text-lg">
            <p className="">All whales are not equal. Know exactly</p>
            <p className="">what the whales impacting YOUR</p>
            <p className="">portfolio are doing.</p>
          </div>
        </div>
      </div>
      {/* ROW 3 */}
      <div className="mt-2">
        <p className="text-[#F2F2F2] font-medium text-2xl text-right mr-24 mb-2">
          Testimonials
        </p>
        <hr className="mx-24" />
        <div className="flex ml-24">
          <div className="mt-auto">
            <img src={images.lochLogo} alt="loch" className="w-16 " />
          </div>
          <Testimonials />
        </div>
      </div>
    </section>
  );
};

export default Showcase;

const NotificationSettingOne = () => {
  return (
    <div className="w-48 h-44 rounded-lg custom-linear-gradient flex-shrink-0 carousel-card">
      <div className="flex flex-row justify-between px-3 pt-3 items-start">
        <img src={images.bellSetting} alt="bell" />
        <button className="text-xs  mr-1 ">Save</button>
      </div>
      <div className="px-3 mt-4">
        <p className="">We'll be sending notifications to you here</p>
      </div>
      <div className="">
        <div className="bg-white ring-1 ring-[#D4D4D4] p-4 mx-3 rounded-md"></div>
      </div>
    </div>
  );
};

const NotificationSettingTwo = () => {
  return (
    <div className="w-48 h-44 rounded-lg bg-white flex-shrink-0 carousel-card">
      <div className="flex flex-row justify-between px-3 pt-3 items-start">
        <img src={images.barChart} alt="bell" />
        <img src={images.checkMark} alt="bell" />
      </div>
      <div className="px-3 mt-10">
        <p className="text-xs">Notify me when any wallets move more than</p>
      </div>
      <div className="bg-[#E5E5E6] w-fit flex items-center justify-center p-1 rounded-sm ml-3 mt-4">
        <p className="text-[#313233] text-xs">$1,000.00</p>
        <img src={images.triangleDown} alt="bell" />
      </div>
    </div>
  );
};

const NotificationSettingThree = () => {
  return (
    <div className="w-48 h-44 rounded-lg bg-white flex-shrink-0 carousel-card">
      <div className="flex flex-row justify-between px-3 pt-3 items-start">
        <img src={images.clock} alt="bell" />
        <img src={images.checkMark} alt="bell" />
      </div>
      <div className="px-3 mt-8">
        <p className="text-xs">Notify me when any wallet dormant for</p>
      </div>
      <div className="bg-[#E5E5E6] w-fit flex items-center justify-center p-1 rounded-sm ml-3 mt-1">
        <p className="text-[#313233] text-xs">&#62; 30 days</p>
        <img src={images.triangleDown} alt="bell" />
      </div>
      <div className="px-3 mt-1">
        <p className="text-xs">becomes active</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const ourRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const mouseCoords = useRef({
    startX: 0,
    startY: 0,
    scrollLeft: 0,
    scrollTop: 0,
  });
  const handleDragStart = (e) => {
    if (!ourRef.current) return;
    const slider = ourRef.current.children[0];
    const startX = e.pageX - slider.offsetLeft;
    const startY = e.pageY - slider.offsetTop;
    const scrollLeft = slider.scrollLeft;
    const scrollTop = slider.scrollTop;
    mouseCoords.current = { startX, startY, scrollLeft, scrollTop };
    setIsMouseDown(true);
    document.body.style.cursor = "grabbing";
  };
  const handleDragEnd = () => {
    setIsMouseDown(false);
    if (!ourRef.current) return;
    document.body.style.cursor = "default";
  };
  const handleDrag = (e) => {
    if (!isMouseDown || !ourRef.current) return;
    e.preventDefault();
    const slider = ourRef.current.children[0];
    const x = e.pageX - slider.offsetLeft;
    const y = e.pageY - slider.offsetTop;
    const walkX = (x - mouseCoords.current.startX) * 1.5;
    const walkY = (y - mouseCoords.current.startY) * 1.5;
    slider.scrollLeft = mouseCoords.current.scrollLeft - walkX;
    slider.scrollTop = mouseCoords.current.scrollTop - walkY;
    console.log(walkX, walkY);
  };

  return (
    <div
      ref={ourRef}
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onMouseMove={handleDrag}
      className="w-[750px] overflow-hidden mt-4 ml-auto mr-24 overflow-x-auto"
    >
      <div className="w-[750px] overflow-x-auto no-scrollbar">
        <div className=" flex gap-x-4 ">
          {/* Each testimonial */}
          <div className="w-80 p-3 bg-white rounded-xl flex-shrink-0">
            <p className="text-[#19191A] font-bold mb-4 ">
              <span>Jack F</span>&nbsp;
              <span className="font-normal  text-xs  text-[#96979A]">
                Ex Blackrock PM
              </span>
            </p>
            <p className="line-clamp-3">
              “Love how Loch integrates portfolio analytics and whale watching
              into one unified app.”
            </p>
          </div>
          {/* Each testimonial */}
          <div className="w-[22rem] p-3 bg-white rounded-xl flex-shrink-0">
            <p className="text-[#19191A] font-bold mb-4 ">
              <span>Yash P</span>&nbsp;
              <span className="font-normal  text-xs  text-[#96979A]">
                Research, 3poch Crypto Hedge Fund
              </span>
            </p>
            <p className="line-clamp-3">
              <span>“</span>I use Loch everyday now. I don't think I could
              analyze crypto whale trends markets without it. I'm addicted!.
              <span>”</span>
            </p>
          </div>
          {/* Each testimonial */}
          <div className="w-[32rem] p-3 bg-white rounded-xl flex-shrink-0">
            <p className="text-[#19191A] font-bold mb-4 ">
              <span>Shiv S</span>&nbsp;
              <span className="font-normal  text-xs  text-[#96979A]">
                Co-Founder Magik Labs
              </span>
            </p>
            <p className="line-clamp-3">
              <span>“</span>Managing my own portfolio is helpful and well
              designed. What's really interesting is watching the whales though.
              No one else has made whale tracking so simple.
              <span>”</span>
            </p>
          </div>
          {/* Each testimonial */}
        </div>
      </div>
    </div>
  );
};
