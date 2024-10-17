import { ReactNode } from "react";
import { motion } from "framer-motion";
import MainLayout from "layouts/MainLayout";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const Chat = () => {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="relative flex flex-col gap-8 items-center justify-center px-6 py-12 text-center"
    >
      {/* Chat Title */}
      <div className="text-4xl md:text-9xl font-bold text-white">
        Lounge Chat
      </div>

      {/* Chat Description */}
      <div className="font-extralight text-lg md:text-4xl text-neutral-200">
        Utilize our sophisticated chatbot tool for code generation and learning
      </div>

      {/* Chat Content Placeholder */}
      <div className="font-light text-base md:text-2xl text-neutral-300">
        {/* This is where the chat interface would go */}
        <HoverBorderGradient
          containerClassName="rounded-full mt-6"
          as="button"
          className="bg-black text-white text-lg md:text-xl px-6 py-3 flex items-center space-x-2 transition hover:bg-gray-800"
        >
          Start Chatting
        </HoverBorderGradient>
      </div>
    </motion.div>
  );
};

Chat.getLayout = (page: ReactNode) => <MainLayout>{page}</MainLayout>;

export default Chat;
