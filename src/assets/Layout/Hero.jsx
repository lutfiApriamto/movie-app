import image from "./../../Img/Home1.jpg"

const Hero = () => {
    return (
        <section id="Hero" className="w-full bg-slate-900 pt-32 h-[75vh] bg-cover bg-top bg-no-repeat bg-fixed flex justify-center " style={{ backgroundImage: `url(${image})` }}>
        <div className="flex flex-col gap-y-2">
          <h1 className="text-red-600 font-black text-4xl font-mono sm:text-5xl text-center w-full">Lucha Movies</h1>
          <div className="flex justify-center">
            <span className="italic text-white font-thin text-sm font-serif">Search for your favorite movie</span>
          </div>
        </div>
      </section>

    )
}

export default Hero