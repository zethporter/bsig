import clsx from "clsx";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";
import { pacifico } from "../fonts";

const Hero = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://bsig.s3.us-east-2.amazonaws.com/default/mainBackground.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mx-auto w-2/3 font-serif text-5xl text-white sm:text-[5rem]">
              Brayden Singley is{" "}
              <span className={clsx("text-accent", pacifico.className)}>G</span>
              <span className={clsx("text-secondary", pacifico.className)}>
                A
              </span>
              <span className={clsx("text-primary", pacifico.className)}>
                Y
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="mx-auto h-screen w-3/4 py-72 text-center">
        <p className="inline-block font-serif text-lg text-white sm:text-3xl">
          Brayden is a gay dancer. Currently Living in New York City. Born and
          raised in Utah he moved to the big apple to follow his dream of being
          a professional performer. He loves to Express himself through dance.
          He is most passionate about contemporary and gaga. He is a proud gay
          boy and loves exploring the diverse and vibrant culture of New York
          city. Bayden is a friendly, outgoing and creative person who always
          has a smile on his face.
        </p>
      </div>
    </>
  );
};

export default Hero;
