import { motion, useCycle } from "framer-motion";
import Link from "next/link";
import React from "react";
const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="lightgrey"
    strokeLinecap="round"
    {...props}
  />
);

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
  exit: {
    opacity: 0,
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
  exit: {
    opacity: 0,
    y: 10,
  },
};

function Menu({ isOpen, toggleOpen }) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: "-100vw",
        },
        show: {
          //   clipPath: "circle(0% at 100% 0%)",
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
          },
        },
        exit: {
          //   clipPath: "circle(0% at 100% 0%)",
          opacity: 0,

          transition: {
            type: "spring",

            stiffness: 100,
            damping: 20,
          },
        },
      }}
      initial="hidden"
      animate="show"
      exit="exit"
      className="bg-black z-40 flex flex-col py-4 px-4 fixed top-0 left-0 right-0 bottom-0"
    >
      <button className="sm:hidden self-end " onClick={toggleOpen}>
        <svg className="h-7" viewBox="0 0 23 23">
          <Path
            animate={isOpen ? "open" : "closed"}
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
          />
          <Path
            d="M 2 9.423 L 20 9.423"
            animate={isOpen ? "open" : "closed"}
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            animate={isOpen ? "open" : "closed"}
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
          />
        </svg>
      </button>

      <motion.ul
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
        className="flex self-center flex-col gap-5 justify-center h-full"
      >
        <motion.li variants={item} className="text-2xl hover:underline">
          <Link href="/">Home</Link>
        </motion.li>

        <motion.li variants={item} className="text-2xl hover:underline">
          <Link href="/search">Search</Link>
        </motion.li>

        <motion.li variants={item} className="text-2xl hover:underline">
          <Link href="/">Library</Link>
        </motion.li>
      </motion.ul>
    </motion.div>
  );
}

export default Menu;
