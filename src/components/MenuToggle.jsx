import { motion } from 'framer-motion';

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle, isOpen }) => (
  <button
    onClick={toggle}
    className="focus:outline-none p-2 rounded-md"
    aria-label="Toggle menu"
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      {/* The color of the lines will change based on the header's text color */}
      <Path
        stroke="currentColor"
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
      />
      <Path
        stroke="currentColor"
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
      />
      <Path
        stroke="currentColor"
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
      />
    </svg>
  </button>
);

export default MenuToggle;