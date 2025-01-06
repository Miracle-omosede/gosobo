import "../App.scss"
import logo from "../assets/images/logo.svg"
const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center my-40 z-[999] gap-5">
      <img src={logo} className="md:w-[6rem] w-[2rem]" alt="gosbologo" />
      <p className="md:text-[7vw] text-4xl nevada uppercase text-center max-w-[50vw] text-custom-yellow leading-none">
      Why We’re Here.</p>
      <div>
      <p className="md:text-[1.3vw]  md:max-w-[50vw] text-lg px-5 text-center font-dm-sans text-raisin-black md:leading-[2.4rem]">
      Our mission is to connect the global writing and reading community. From budding authors to seasoned storytellers, we provide the tools and opportunities to turn creativity into reality. Whether you’re publishing your first book, competing in writing challenges, or exploring new reads, we’re here to support your journey</p>
      </div>
    </div>
  );
};

export default Services;
