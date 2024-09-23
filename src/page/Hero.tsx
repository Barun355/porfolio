import { Link } from "react-router-dom";
import Button from "../components/ui/button";
import { TypeAnimation } from "react-type-animation";
import HeroImage from "../../public/hero.png";

function Hero() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col gap-4 w-[58%]">
        <h1 className="text-5xl font-bold">
          I'm a <b className="text-blue-400">Student</b>. But not a kid.
        </h1>
        <h1 className="text-3xl font-bold">
          <span>Experience in </span>
          <TypeAnimation
            sequence={["Static website.", 1000, "Dynamic webapp.", 1000, "Teaching", 1000]}
            wrapper="b"
            style={{ color: "#38bdf8" }}
            speed={10}
            repeat={Infinity}
          />
        </h1>
        <p className="text-lg">
          Unfortunately, I'm a student. Exploring new things, Learning new
          things, but more over focusing on <b>Software Engineering</b> and{" "}
          <b>Teaching</b>. I have taught on great platforms like institutes,
          school and company as a Web Dev trainer and obviously private classes
          also. Currently focusing on learning new things and doing freelance
          work.
        </p>
        <div className="flex flex-col gap-8">
          <p>
            Want to see my skills?{" "}
            <Link to="/projects" className="">
              My work
            </Link>{" "}
          </p>
          <Button variants="outline-primary" size="md">
            <a href="https://www.linkedin.com/posts/barun-tiwary_recently-i-created-a-community-called-codefirst-activity-7243986727164379136-0Zum?utm_source=share&utm_medium=member_desktop" target="_blank">Client Reviews</a>
          </Button>
        </div>
      </div>
      <div className="flex flex-col w-[42%] h-full justify-center items-center gap-4">
        <img
          src={HeroImage}
          alt="Barun Tiwary"
          className="h-[20rem] w-[20rem] rounded-full"
        />
        <div className="flex gap-4 justify-center items-center">
          <a
            className="h-8 w-8 rounded-full flex justify-center items-center"
            href="https://linkedin.com/in/barun-tiwary"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              stroke-width="2.5"
              stroke="#CACBD2"
              fill="none"
              className="duration-150 transform transition-all hover:stroke-blue-400"
            >
              <path
                d="M34.34 24.1h-8.69v31.43h9v-14.4c0-3.82.72-7.49 5.43-7.49s4.72 4.34 4.72 7.73v14.16h9V39.46c0-7.76-1.65-14.92-10.81-14.92-3.38-.13-6.65.49-8.47 3.25a.11.11 0 01-.21-.06zM10.92 24.1H20v31.43h-9.08zM15.44 8.47a5.27 5.27 0 105.25 5.29v0a5.25 5.25 0 00-5.25-5.29z"
                stroke-linecap="round"
              ></path>
            </svg>
          </a>
          <a
            className="h-8 w-8 rounded-full flex justify-center items-center"
            href="https://github.com/Barun355"
            target="_blank"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              className="duration-150 transform transition-all hover:text-blue-400"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
