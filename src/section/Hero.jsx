import { MoveRight } from "lucide-react"
import "../App.scss"

const Hero = () => {
  return (
    <section className="hero h-[100vh]">
        <div className="flex flex-col md:max-w-7xl mx-auto px-3.5  py-20">
            <div className="py-10">
            <h1 className="nevada text-[54px] font-bold">Unleash Your <span className="text-custom-yellow">Creativity</span> – Empowering <br/> Writers, Inspiring Readers.</h1>
            <p className="font-dm-sans">
            Your destination for self-publishing, storytelling, and connecting with <br/> a global community of readers and writers.
            </p>
            </div>
            
            <div>
                {/* call to action button's */}
                <button className="button-52 flex items-center font-dm-sans" role="button">Explore <MoveRight className="ml-2 move-right-icon"/></button>
            </div>
        </div>
    </section>
  )
}

export default Hero