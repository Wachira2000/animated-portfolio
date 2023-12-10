import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Web Development</h2>
          <p>
            I'm a MERN (MongoDB, Express.js, React, Node.js) Stack Developer, 
            passionate about building seamless web experiences. 
            From crafting dynamic front-end interfaces with React to developing 
            robust server-side applications with Node.js, I bring a holistic
            approach to web development.Let's turn ideas into reality together.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>iOS & Android App Development</h2>
          <p>
            I'm a dedicated Flutter developer ready to bring your mobile app ideas
            to life. With expertise in Dart programming and Flutter framework, I specialize
            in creating cross-platform applications that are not just functional but also 
            beautifully designed.From crafting engaging user interfaces to ensuring smooth
            performance across both iOS and Android platforms, I thrive on the versatility and 
            efficiency that Flutter offers. I'm passionate about turning concepts into intuitive,
            user-friendly experiences that captivate audiences.Let's collaborate and build something
            extraordinary for your mobile app needs.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Salesforce Development</h2>
          <p>
          I'm a seasoned Salesforce developer ready to elevate your 
          business processes. Specializing in customizing Salesforce 
          solutions, I streamline workflows, enhance user experiences, 
          and ensure your CRM aligns seamlessly with your goals.
          Let's optimize your Salesforce journey together!
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding & Digital Marketing</h2>
          <p>
          I'm your go-to expert for all things branding and digital marketing.
          With a passion for crafting compelling brand stories and leveraging 
          the power of digital channels, I help businesses leave a lasting impression 
          in the digital landscape.
          Let's elevate your brand and boost your online presence together!
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;