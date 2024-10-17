import { AuroraBackground } from "@/components/ui/aurora-background";
import MainLayout from "layouts/MainLayout";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const HomePage = () => {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-8 items-center justify-center px-6 py-12 text-center"
      >
        {/* Title */}
        <div className="text-4xl md:text-9xl font-bold text-white">
          Lounge
        </div>

        {/* Tagline */}
        <div className="font-extralight text-lg md:text-3xl text-neutral-200  ">
          Streamline your programming workflow with everything you need in one app.
        </div>

        {/* Description */}
        <div className="font-light text-base md:text-2xl text-neutral-300 ">
          Unleash your creativity, access valuable resources, and enhance your problem-solving efficiency with our powerful tools.
        </div>

        {/* Get Started Button */}
        <HoverBorderGradient
          containerClassName="rounded-full mt-6"
          as="button"
          className="bg-black text-white text-lg md:text-xl px-6 py-3 flex items-center space-x-2 transition hover:bg-gray-800"
        >
          Get Started
        </HoverBorderGradient>
      </motion.div>
    </AuroraBackground>
  );
};

HomePage.getLayout = (page: ReactNode) => <MainLayout>{page}</MainLayout>;

export default HomePage;
