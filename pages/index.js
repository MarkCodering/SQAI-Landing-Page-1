import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FaLinkedinIn } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Head>
        <title>SQAI 2023</title>
        <meta name="description" content="SQAI - 2023" />
        <link rel="icon" href="/Group 8665.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/*Add preview image*/}
        <meta property="og:image" content="/Hero-1.jpg" />
      </Head>

      <div className={styles.hero}>
        <header className="text-white text-sm mt-[5px] flex flex-col items-center justify-center">
          <div>
            <div className="relative">
              <h1 className="md:text-8xl text-center mt-[160px] z-5 text-5xl">
                2023 Symposium for
                <br />
                Quantum AI
              </h1>
              <p className="text-2xl mt-[30px] text-center ">
                The 2023 Symposium for Quantum AI (SQAI) is a conference
                <br /> for quantum computing and AI researchers, developers, and
                advocates.
              </p>
            </div>
          </div>
        </header>
      </div>

      <div className="mt-[130px]" id="about">
        <div className="">
          <h2 className="px-[155px] mb-[20px]">
            Shared the latest development on Quantum AI
          </h2>
          <div className="flex justify-between flex-col md:flex-row">
            <div className="relative">
              <div className="absolute top-[40px] md:left-[150px] md:w-[500px]  px-4 md:px-0">
                <h1 className="md:text-6xl  md:w-[500px] leading-[70px] mb-[40px] text-5xl">
                  Enter the state
                  <br />
                  Quantum and
                  <br />
                  Quantum AI
                </h1>
                <p className="md:w-[400px]">
                  SQAI is an annual conference for quantum computing and AI
                  technologies. The conference is organized by the Society for
                  Quantum AI (SQAI) and the Taiwan Artificial Intelligence
                  Association (TAIA) in collaboration with the National Taiwan
                  University (NTU) IBM Quantum Hub.
                </p>
                <div className="md:mt-[80px] mt-[50px]">
                  <Image
                    src="/Frame 22.png"
                    width={200}
                    height={250}
                    alt="icon"
                    className=" z-5"
                  ></Image>
                </div>
              </div>
            </div>

            <div className="mr-[200px] flex flex-col gap-[100px] mt-[150px] md:mt-0 px-3 md:px-0">
              <div>
                <h1 className="text-8xl">150+</h1>
                <p>Event Attendees</p>
              </div>

              <div>
                <h1 className="text-8xl">3+</h1>
                <p>Organizations</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[300px]">
        <div className="flex flex-col items-center justify-center">
          <div className="relative px-4 md:px-0">
            <Image
              src="/Thorus 3.png"
              width={600}
              height={750}
              alt="icon"
              className=" z-5"
            ></Image>

            <div className="absolute md:top-[160px] md:left-[50px] md:w-[500px] w-[300px] top-[30px] flex flex-col items-center justify-center   md:px-0">
              <h3 className="text-center mb-[40px]">
                ENTER THE STATE OF QUANTUM
              </h3>
              <h1 className="text-5xl  md:w-[500px] leading-[50px] mb-[40px] text-center">
                Learn and Share
                <br />
                Quantum AI
              </h1>
              <p className="md:w-[500px] text-center text-sm ml-[50px] w-[350px]">
                The conference consists of invited talks, oral presentations,
                and some tutorial session led by researchers in the field of
                quantum computing and AI. The conference will be held in Taipei,
                Taiwan, in 2023 with online session available.
              </p>
            </div>
          </div>

          <div className="text-5xl mt-[100px]">Speakers</div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-[40px] mt-[130px] md:mt-[30px]"
            id="speakers"
          >
            {" "}
            <div className="flex flex-col items-center justify-center">
              <Image
                src="https://media.licdn.com/dms/image/D5603AQFzMxubFMiimg/profile-displayphoto-shrink_400_400/0/1672993453009?e=1686182400&v=beta&t=hgTI1TNC3trrn9hk7xTt60F-gxMsGBffrVbS9rMzuFk"
                width={300}
                height={750}
                alt="icon"
                className=" z-5"
              ></Image>

              <div className="md:w-[400px] md:ml-[70px] px-2">
                <h2 className="text-3xl">Yen-Jui Chang</h2>
                <p>
                  NTU IBM Quantum Hub Researcher, Ph.D. Candidate in Physics at
                  NTU
                </p>
                <a href="https://www.linkedin.com/in/%E6%99%8F%E7%91%9E-%E5%BC%B5-7a5941134/">
                  {" "}
                  <FaLinkedinIn className="text-2xl mt-[20px]" />
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                src="https://media.licdn.com/dms/image/D4E03AQFGKf3uwyrS0g/profile-displayphoto-shrink_400_400/0/1666063022056?e=1686182400&v=beta&t=u6Tn3MsD68B90xs0dGd1Qk5naIIj4oj0VwjihL1PwkQ"
                width={300}
                height={750}
                alt="icon"
                className=" z-5"
              ></Image>
              <div className="md:w-[400px] md:ml-[70px] px-2">
                <h2 className="text-3xl">Hao-Yuan Chen</h2>
                <p>Undergraduate researcher at NTU Quantum Research Program</p>
                <a href="https://www.linkedin.com/in/mark-chen-next/">
                  {" "}
                  <FaLinkedinIn className="text-2xl mt-[20px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Agenda Section with timeline*/}
      <div className="mt-[200px]" id="agenda">
        <div className="flex flex-col items-center justify-center">
          <div className="text-5xl mb-[60px]">Agenda</div>
          <ol class="relative border-l border-gray-200 dark:border-gray-700">
            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                2023/May/7th 21:30-22:30
              </time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                量子計算應用 & Qiskit 簡介
              </h3>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                本場Talk將解釋量子計算的重要性及其潛在應用，介紹Qiskit開源軟件及其主要組件簡要並概述量子計算概念，如量子比特、疊加和糾纏。
              </p>
              <a href="https://zoom.us/j/98408319576">Join the event</a>
            </li>
            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                2023/May/21st 21:30-22:30
              </time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                量子計算應用 & Qiskit 操作
              </h3>
              <p class="text-base mb-4 font-normal text-gray-500 dark:text-gray-400">
                本場Talk將介紹量子計算的數學工具，例如 linear algebra、tensor
                products 和 complex numbers。
              </p>
              <a href="https://zoom.us/j/93661672711">Join the event</a>
            </li>
            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                2023/May/28th 21:30-22:30
              </time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                量子電路設計實踐
              </h3>
              <p class="text-base mb-4 font-normal text-gray-500 dark:text-gray-400">
                本場Talk將介紹量子電路設計原理及創建第一個量子電路—加法器和糾纏。
              </p>
              <a href="https://zoom.us/j/96449957885">Join the event</a>
            </li>
            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                2023/June/4th 21:30-22:30
              </time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                手把手建立第一個量子演算法
              </h3>
              <p class="text-base mb-4 font-normal text-gray-500 dark:text-gray-400">
                本本場Talk將介紹Grover
                algorithm及其在量子運算中的意義及解釋Grover
                algorithm背後的關鍵概念。
              </p>
              <a href="https://zoom.us/j/94829807892">Join the event</a>
            </li>
            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                2023/June/11th 21:30-22:30
              </time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                量子計算深度學習挑戰與前景
              </h3>
              <p class="text-base mb-4 font-normal text-gray-500 dark:text-gray-400">
                Mark
                還將分享他在開發量子深度神經網絡以解決經典強化學習問題、量子編程框架、Qiskit
                和 Microsoft Azure ML Studio
              </p>
              <a href="https://zoom.us/j/97101832427">Join the event</a>
            </li>
          </ol>
        </div>
      </div>

      <div
        className="mt-[200px] flex items-center justify-center"
        id="organizers"
      >
        <div className="flex items-center gap-[50px] flex-col md:flex-row">
          <div>
            <h1 className="text-6xl leading-[70px] mb-[30px]">
              Organized with <br />
              Taiwan Artificial Intelligence Association
            </h1>
            <p className="md:w-[400px] px-2">
              Work with Taiwan AI Association to promote the development of AI
              and Quantum AI in Taiwan.
            </p>
            <a href="https://www.aiatw.org" alt="Taiwan Artificial Intelligence Association">
              <div className="flex items-center gap-[20px] mt-[20px] ml-[10px] font-bold">
                Learn More
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-[100px]" id="join-us">
        <div className="flex justify-between flex-col md:flex-row">
          <div className="relative">
            <Image
              src="/Sphere.png"
              width={350}
              height={750}
              alt="icon"
              className=" z-5"
            ></Image>
            <div className="absolute top-[50px] md:left-[140px] px-3">
              <h1 className="text-5xl leading-[60px] mb-[40px]">
                Meet the worldwide community
              </h1>
              <p>
                Join the fast-growing community of developers and innovators
                connected all over the world building the future of quantum AI
              </p>
            </div>
          </div>

          <div className="md:mr-[200px] w-[350px] flex flex-col gap-[100px] px-3">
            <div>
              <h3 className="font-bold text-2xl mb-[15px]">
                Discord Community {`>>>`}
              </h3>
              <p className="text-sm">
                Ask general questions and chat with the worldwide community on
                Discord
              </p>
              <a href="https://discord.com/invite/yDch3gkW2T?fbclid=IwAR3RIvtrrJBWznGTv2jR0H1kQpjaQyyAWu2eYYizTYbcuOYP9tHx8mjn2VI">
                <div className="mt-[10px] text-1xl font-bold flex gap-[15px]">
                  Join here
                </div>
              </a>
            </div>

            <div>
              <h3 className="font-bold text-2xl mb-[15px]">Facebook {`>>>`}</h3>
              <p className="text-sm">
                Join our Facebook group to stay up to date with the latest news
                at SQAI
              </p>
              <a href="https://www.facebook.com/SQAIConference">
                <div className="mt-[10px] text-1xl font-bold flex gap-[15px]">
                  Join here
                </div>
              </a>
            </div>

            <div>
              <h3 className="font-bold text-2xl mb-[15px]">LinkedIn {`>>>`}</h3>
              <p className="text-sm">
                Follow us on LinkedIn to stay up to date with the latest news at
                SQAI
              </p>
              <a href="https://www.linkedin.com/company/sqai">
                <div className="mt-[10px] text-1xl font-bold flex gap-[15px]">
                  Follow here
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[150px] flex items-center justify-center">
        <div className="flex gap-[50px] flex-col md:flex-row">
          <div>
            <h1 className="font-bold text-2xl">Register for the conference</h1>
            <p className="text-sm">
              Join the fast-growing community of developers and innovators in
              SQAI 2023
            </p>
            <a href="">
              <div className="mt-[10px] text-1xl font-bold flex gap-[15px]">
                Register here
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-[100px]">
        <hr />
      </div>
    </>
  );
}
