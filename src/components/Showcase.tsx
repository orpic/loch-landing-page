import { useRef, useState } from "react";
import { images } from "../assets";

const Showcase = () => {
  return (
    <div className="overflow-y-auto h-screen">
      <div className="flex flex-row  lg900:flex-col">
        {/* BLOCK 1 */}
        <div className="w-[22rem] lg900:w-3/4 text-[#F2F2F2] font-medium ml-32 xl:ml-16 mt-10 md630:mx-auto md630:w-11/12">
          <img
            src={images.bell}
            alt="notification bell"
            className="mb-4 lg900:mb-2"
          />
          <p className=" text-3xl mb-4 shadow-custom ">
            Get notified when a highly correlated whale makes a move
          </p>
          <p className=" text-gray-300 text-lg">
            Find out when a certain whale moves more than any preset amount
            on-chain or when a dormant whale you care about becomes active.
          </p>
        </div>
        {/* BLOCK 2 */}
        <div className="ml-auto lg900:mx-auto lg900:-mt-6 h-44 ">
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
      <div className=" flex justify-between items-center mt-12 lg900:flex-col-reverse lg900:items-start ">
        <div className="w-full">
          <img
            src={images.cohort2x}
            alt="cohort"
            className="ml-32 xl:ml-16  w-[24rem] aspect-auto lg900:mx-auto md630:p-2"
          />
        </div>
        <div className="flex flex-col w-full lg900:w-3/4 items-end mr-24 xl:mr-16 lg900:items-start lg900:ml-16 md630:mx-auto md630:w-11/12">
          <img
            src={images.eye}
            alt="eye"
            className="w-fit mb-4 -mt-2 lg900:mt-10 lg900:mb-2"
          />
          <p className="text-3xl text-[#F2F2F2] text-right w-64 lg900:w-full mb-6 lg900:text-left lg900:mb-2">
            Watch what the whales are doing
          </p>
          <div className=" text-right text-[#F2F2F2] text-lg lg900:text-left">
            <p className="hidden lg900:block lg900:mb-4">
              All whales are not equal. Know exactly what the whales impacting
              YOUR portfolio are doing.
            </p>

            <p className="lg900:hidden">
              All whales are not equal. Know exactly
            </p>
            <p className="lg900:hidden">what the whales impacting YOUR</p>
            <p className="lg900:hidden">portfolio are doing.</p>
          </div>
        </div>
      </div>
      {/* ROW 3 */}
      <div className="mt-2 ">
        <p className="text-[#F2F2F2] font-medium text-2xl text-right mr-24 xl:mr-16 mb-2 lg900:text-left lg900:ml-16 md630:mx-auto md630:w-11/12">
          Testimonials
        </p>
        <hr className="mx-24 xl:mx-16 md630:mx-auto md630:w-11/12" />
        <div className="flex ml-24 xl:ml-16 lg900:flex-col-reverse md630:mx-auto md630:w-11/12 xl:mb-12">
          <div className="mt-auto lg900:my-8 ">
            <img src={images.lochLogo} alt="loch" className="w-16 mr-4" />
          </div>
          <Testimonials />
        </div>
      </div>
    </div>
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
        <div className="bg-white ring-1 ring-[#D4D4D4] p-1.5 mx-3 rounded-md text-[#19191A] text-sm pl-2">
          hello@gmail.com
        </div>
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
        <img
          src={images.triangleDown}
          alt="down arrow triangle"
          className="mt-[1px]"
        />
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
        <img
          src={images.triangleDown}
          alt="down arrow triangle"
          className="mt-[1px]"
        />
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
  // @ts-expect-error: Ignore TypeScript error for next line
  const handleDragStart = (e) => {
    if (!ourRef.current) return;
    // @ts-expect-error: Ignore TypeScript error for next line
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
  // @ts-expect-error: Ignore TypeScript error for next line
  const handleDrag = (e) => {
    if (!isMouseDown || !ourRef.current) return;
    e.preventDefault();
    // @ts-expect-error: Ignore TypeScript error for next line
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
      className="w-[750px]  mt-4 ml-auto mr-24 xl:mr-16 overflow-x-auto  no-scrollbar lg900:w-full lg900:mx-0 md630:pointer-events-none"
    >
      <div className="w-[750px] overflow-x-auto no-scrollbar lg900:w-screen lg900:mx-0">
        <div className=" flex gap-x-4 md630:flex-col md630:gap-4">
          {/* Each testimonial */}
          <div className="w-80 p-3 bg-white rounded-xl flex-shrink-0 md630:w-11/12">
            <p className="text-[#19191A] font-bold mb-4 ">
              <span>Jack F</span>&nbsp;
              <span className="font-normal  text-xs  text-[#96979A]">
                Ex Blackrock PM
              </span>
            </p>
            <p className="line-clamp-3 md630:line-clamp-6">
              “Love how Loch integrates portfolio analytics and whale watching
              into one unified app.”
            </p>
          </div>
          {/* Each testimonial */}
          <div className="w-[22rem] p-3 bg-white rounded-xl flex-shrink-0 md630:w-11/12">
            <p className="text-[#19191A] font-bold mb-4 ">
              <span>Yash P</span>&nbsp;
              <span className="font-normal  text-xs  text-[#96979A]">
                Research, 3poch Crypto Hedge Fund
              </span>
            </p>
            <p className="line-clamp-3 md630:line-clamp-6">
              <span>“</span>I use Loch everyday now. I don't think I could
              analyze crypto whale trends markets without it. I'm addicted!.
              <span>”</span>
            </p>
          </div>
          {/* Each testimonial */}
          <div className="w-[32rem] p-3 bg-white rounded-xl flex-shrink-0 md630:w-11/12">
            <p className="text-[#19191A] font-bold mb-4 ">
              <span>Shiv S</span>&nbsp;
              <span className="font-normal  text-xs  text-[#96979A]">
                Co-Founder Magik Labs
              </span>
            </p>
            <p className="line-clamp-3 md630:line-clamp-6">
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
