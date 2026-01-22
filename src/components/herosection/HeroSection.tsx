import type { FC } from "react";
import type { HeroSectionWithImagesProps } from "../types";
import { Button } from "../Button";
import { HeroImageSlideshow } from "./HeroImageSlideshow";

export const HeroSection: FC<HeroSectionWithImagesProps> = ({
  floatingElements=[
  {
    src: "images/spark.png",
    size: 1920,
    top: "20%",
    left: "-800%",
    transform: "rotate(40deg)",
  },
],
  rotatingCircleSrc,
  rotatingCircleSize = "1000px",
  circleFilter = "brightness(0) saturate(100%) invert(94%) sepia(11%) saturate(6779%) hue-rotate(348deg) brightness(103%) contrast(104%)",
}) => {
  return (
    <section className="relative w-full text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('images/The_Royal_City_of_Arcadia.webp')`,
          filter: "brightness(40%)",
        }}
      />

      {/* Rotating Circle */}
      {rotatingCircleSrc && (
        <img
          src={rotatingCircleSrc}
          alt="Rotating Circle"
          className="absolute -translate-y-1/2 rounded-full spin-slow pointer-events-none opacity-40 z-10"
          style={{
            top: "90%",
            left: "-30%",
            width: rotatingCircleSize,
            height: rotatingCircleSize,
            filter: circleFilter,
            objectFit: "contain",
          }}
        />
      )}
{floatingElements.map((el, idx) => (
  <img
    key={idx}
    src={el.src}
    alt={`Floating Element ${idx}`}
    className="absolute animate-floating pointer-events-none rounded-full z-10"
    style={{
      width: el.size,
      height: el.size,
      opacity: el.opacity ?? 0.7,
      top: el.top ?? `${15 + idx * 12}%`,
      left: el.left ?? `${10 + idx * 14}%`,
      animationDelay: `${idx * 0.1}s`,
      transform: el.transform ?? "none",
    }}
  />
))}




      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 py-20 flex xl:flex lg:gap-8 md:block justify-between flex-wrap">
        {/* Left */}
        <div className="flex-1 text-center lg:text-left space-y-6 w-full lg:w-auto">
          <h4 className="text-yellow-400 font-cinzel font-semibold text-[clamp(1rem,2vw,1.5rem)]">
            Hardcore MMORPG • INTERNATIONAL
          </h4>

          <h1 className="font-cinzel font-bold text-white text-[clamp(2rem,4vw,4rem)] leading-tight">
            Conquer the Throne and Rule the Four Realms
          </h1>

          <p className="text-gray-300 text-[clamp(0.9rem,1.5vw,1.25rem)]">
            Squad up, clash in nation wars, and carve your legend across the battlefield.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start">
            <Button>Play Now</Button>
            <Button>Download Client</Button>
          </div>
        </div>

        {/* Right */}
        <div className="flex-1 relative">
          <HeroImageSlideshow
            images={[
              "images/Berserker.webp",
              "images/Cleric.webp",
              "images/Dragonknight.webp",
              "images/Gunslinger.webp",
              "images/Hunter.webp",
              "images/Mage.webp",
              "images/Occultist.webp",
              "images/Paladin.webp",
              "images/Rogue.webp",
              "images/Swordmaster.webp",
            ]}
            interval={3000}
            className="hero-float hero-animate"
          />
        </div>
      </div>
    </section>
  );
};
