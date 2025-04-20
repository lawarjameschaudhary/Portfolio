import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Animation Variants
const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const scaleFadeVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeOut' } },
};

const Home = () => {
  const roles = ["A Front End Developer", "Graphics Designer"];
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[index];
    const typingSpeed = isDeleting ? 40 : 100;

    let timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && displayText === '') {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }, 500);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.slice(0, displayText.length - 1)
            : currentRole.slice(0, displayText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={containerVariant}
      className="relative bg-[url('https://img.freepik.com/free-vector/abstract-blue-circle-black-background-technology_1142-12714.jpg?ga=GA1.1.255780563.1737648427&semt=ais_hybrid')] md:bg-cover bg-transparent bg-center text-white font-Fanta leading-9 pl-12 pr-12 pt-24 xl:pt-36 md:pt-40 border-b-[0.1px] border-blue-300 pb-20 before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/50 before:to-black/20 before:z-0"
    >
      <motion.div
        variants={containerVariant}
        className="relative z-10 flex flex-col items-center justify-center h-full gap-8 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
      >
        {/* Title Section */}
        <motion.h1
          variants={fadeInUpVariant}
          className="text-3xl sm:text-4xl md:text-5xl text-center font-bold"
        >
          Hello, I am{' '}
          <span className="bg-gradient-to-r from-blue-300 via-blue-600 to-blue-900 text-transparent bg-clip-text drop-shadow-lg">
            Lawar James Chaudhary
          </span>
        </motion.h1>

        {/* Typewriter Effect */}
        <motion.h6
          variants={fadeInUpVariant}
          className="font-bold text-lg sm:text-xl md:text-3xl bg-gradient-to-r from-blue-300 via-blue-600 to-blue-900 text-transparent bg-clip-text text-center h-[2.5rem] sm:h-[3rem] md:h-[3.5rem]"
          style={{ whiteSpace: 'pre-wrap' }}
        >
          {displayText}
          <span className="animate-pulse">|</span>
        </motion.h6>

        {/* Hire Button */}
        <motion.button
          variants={scaleFadeVariant}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          aria-label="Hire Lawar James Chaudhary"
          className="bg-transparent border border-blue-500 text-white p-3 px-8 shadow-md shadow-blue-500 rounded-full hover:shadow-lg hover:shadow-blue-500 hover:scale-105 duration-700 focus:outline-none hover:-translate-y-1"
        >
          <a href="https://lh3.googleusercontent.com/a/ACg8ocJq5BfZoZH-Qbs_FDCrHavshXm9-LTvVPSrPvHwQTvbu7hVdY0I=s576-c-no" className="text-white">
            Hire Me
          </a>
        </motion.button>

        {/* Image and Icons Section */}
        <motion.div
          variants={scaleFadeVariant}
          className="relative"
        >
          <motion.img
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            src="https://lh3.googleusercontent.com/a/ACg8ocJq5BfZoZH-Qbs_FDCrHavshXm9-LTvVPSrPvHwQTvbu7hVdY0I=s576-c-no"
            alt="Developer-image"
            className="w-full max-w-[675px] mx-auto transition-transform duration-700 ease-in-out"
          />

          {/* Tech Icons */}
          {[
            { icon: 'https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo-thumbnail.png', label: 'Tailwind CSS', style: 'top-[20%] right-[1%] xl:-right-[10%]' },
            { icon: 'https://w7.pngwing.com/pngs/548/34/png-transparent-adobe-photoshop-macos-bigsur-icon-thumbnail.png', label: 'Photoshop', style: 'top-[50%] md:top-[45%] -left-[10%] md:-left-[15%] lg:-left-[20%] xl:-left-[35%]' },
            { icon: 'https://e7.pngegg.com/pngimages/780/934/png-clipart-html-logo-html5-logo-icons-logos-emojis-tech-companies-thumbnail.png', label: 'Html', style: 'top-[75%] sm:top-[70%] md:top-[75%] md:-left-[5%] lg:-left-[15%] xl:-left-[25%]' },
            { icon: 'https://w7.pngwing.com/pngs/452/495/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry-thumbnail.png', label: 'ReactJS', style: 'top-[25%] -left-[7%] md:top-[20%] sm:left-4 md:-left-0 xl:-left-[15%]' },
            { icon: 'https://w7.pngwing.com/pngs/640/199/png-transparent-javascript-logo-html-javascript-logo-angle-text-rectangle-thumbnail.png', label: 'JavaScript', style: 'top-[45%] -right-[5%] md:-right-[10%] lg:-right-[20%] xl:-right-[35%]' },
            { icon: 'https://w7.pngwing.com/pngs/393/49/png-transparent-css-logo.png', label: 'CSS', style: 'top-[70%] md:top-[75%] right-[10%] md:-right-0 lg:-right-[16%]' },
          ].map(({ icon, label, style }, index) => (
            <motion.div
              key={index}
              variants={fadeInUpVariant}
              whileHover={{ y: -5, rotate: 5 }}
              transition={{ delay: 1.2 + index * 0.2, duration: 0.8 }}
              className={`border-2 p-1 md:p-4 rounded-full text-center text-black bg-white flex items-center gap-1 md:gap-5 px-1 md:px-6 absolute ${style}`}
            >
              <div className="Logo">
                <img src={icon} alt={label} className="w-6 md:w-9" />
              </div>
              <div className="text-sm md:text-3xl">{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
