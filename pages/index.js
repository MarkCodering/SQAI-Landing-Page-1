import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FaLinkedinIn } from "react-icons/fa";
import { Scrollbars } from "react-custom-scrollbars";
import YouTube from "react-youtube";

export default function Home() {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <Scrollbars style={{ height: 1000 }} autoHide universal>
      <Head>
        <title>SQAI 2023</title>
        <meta name="description" content="SQAI - 2023" />
        <link rel="icon" href="/Group 8665.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/*Add preview image*/}
        <meta
          property="og:image"
          content="https://ia.media-imdb.com/images/rock.jpg"
        />
      </Head>

      <div className={styles.hero}>
        <header className="text-white text-sm mt-[5px] flex flex-col items-center justify-center">
          <div>
            <div className="relative">
              <h3 className="md:text-6xl text-center mt-[120px] ">2023</h3>

              <h1 className="md:text-8xl text-center mt-[10px] z-5 text-5xl">
                Symposium for
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
          <div className="flex justify-between flex-col md:flex-row">
            <div className="relative">
              <div className="absolute top-[40px] md:left-[150px] md:w-[500px]  px-4 md:px-0">
                <h1 className="md:text-6xl  md:w-[500px] leading-[40px] mb-[40px] text-5xl">
                  Enter the state of Quantum AI
                </h1>
                <p className="md:w-[400px]">
                  SQAI is an annual conference for quantum computing and AI
                  technologies. The conference is organized by the Society for
                  Quantum AI (SQAI) and the Taiwan Artificial Intelligence
                  Association (TAIA) in collaboration with the National Taiwan
                  University (NTU) IBM Quantum Hub.
                </p>
                <div className="md:mt-[80px] mt-[50px]"></div>
              </div>
            </div>

            <div className="mr-[200px] flex flex-col gap-[100px] mt-[400px] md:mt-0 px-3 md:px-0">
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

      <div className="mt-[100px]">
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
          <ol className="relative border-l border-gray-200 dark:border-gray-700 max-w-4xl">
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                2023/May/7th 21:30-22:30
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                量子計算應用 & Qiskit 簡介
                <br />
                Introduction to Quantum Computing and Qiskit
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                本場Talk將解釋量子計算的重要性及其潛在應用，介紹Qiskit開源軟件及其主要組件簡要並概述量子計算概念，如量子比特、疊加和糾纏。
                <br />
                This talk will explain the importance of quantum computing and
                its potential applications, introduce the Qiskit open source
                software and its main components briefly, and summarize the
                concept of quantum computing, such as quantum bits,
                superposition, and entanglement.
              </p>
              <a href="https://zoom.us/webinar/register/1816816282019/WN_nrKjK9J-QSaogFOaFuLrFw">
                Register the webinar
              </a>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                2023/May/21st 21:30-22:30
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                量子計算應用 & Qiskit 操作
                <br />
                Quantum Computing Applications & Qiskit Operations
              </h3>
              <p className="text-base mb-4 font-normal text-gray-500 dark:text-gray-400">
                本場Talk將介紹量子計算的數學工具，例如 linear algebra、tensor
                products 和 complex numbers。
                <br />
                This talk will introduce the mathematical tools of quantum
                computing, such as linear algebra, tensor products, and complex
                numbers.
              </p>
              <a href="https://zoom.us/webinar/register/7416816229380/WN_rjhCFRHARLSiEypI2Qs3oA">
                Register the webinar
              </a>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                2023/May/28th 21:30-22:30
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                量子電路設計實踐
                <br />
                Quantum Circuit Design Practice
              </h3>
              <p className="text-base mb-4 font-normal text-gray-500 dark:text-gray-400">
                本場Talk將介紹量子電路設計原理及創建第一個量子電路—加法器和糾纏。
                <br />
                This talk will introduce the principles of quantum circuit
                design and create the first quantum circuit - adder and
                entanglement.
              </p>
              <a href="https://zoom.us/webinar/register/5516816234406/WN_F0kDLy1GSVCt_R-Nhyc8Aw">
                Register the webinar
              </a>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                2023/June/4th 21:30-22:30
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                手把手建立第一個量子演算法
                <br />
                Hands-on Build Your First Quantum Algorithm
              </h3>
              <p className="text-base mb-4 font-normal text-gray-500 dark:text-gray-400">
                本本場Talk將介紹Grover
                algorithm及其在量子運算中的意義及解釋Grover
                algorithm背後的關鍵概念。
                <br />
                This talk will introduce Grover algorithm and its meaning in
                quantum computing and explain the key concepts behind Grover
                algorithm.
              </p>
              <a href="https://zoom.us/webinar/register/8016816238571/WN_EDcSND9nTd-y1k_BJgSfWA">
                Register the webinar
              </a>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                2023/June/11th 21:30-22:30
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                量子計算深度學習挑戰與前景
                <br />
                Quantum Deep Learning Challenges and Prospects
              </h3>
              <p className="text-base mb-4 font-normal text-gray-500 dark:text-gray-400">
                Mark
                還將分享他在開發量子深度神經網絡以解決經典強化學習問題、量子編程框架、Qiskit
                和 Microsoft Azure ML Studio 等領域的經驗。
                <br />
                Mark will also share his experience in developing quantum deep
                neural networks to solve classical reinforcement learning
                problems, quantum programming frameworks, Qiskit and Microsoft
                Azure ML Studio, etc.
              </p>
              <a href="https://zoom.us/webinar/register/8816816242325/WN_98lm-frhRgWkHI_JIS3zuA">
                Register the webinar
              </a>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                2023/June/18th 21:30-22:30
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                How to join IBM Quantum Awards Competitiond || 粘育瑋
              </h3>
              <p className="text-base mb-4 font-normal text-gray-500 dark:text-gray-400">
                1. Motivation : Machine Learning to Quantum Computing. <br /> 2.
                Contest Topic : Calculate Lattice Ground State. <br /> 3.
                Contest Rule. <br /> 4. Contest Result : Ansatz. <br /> 5.
                Conclusion.
              </p>
              <a href="https://zoom.us/webinar/register/7016816247428/WN_Gi6RunXIR62v4P6dg7b1JA">
                Register the webinar
              </a>
            </li>
          </ol>
        </div>
      </div>

      <div className="container my-20 px-6 mx-auto" id="organizers">
        <section className="mb-32 text-white text-center">
          <h2 className="text-3xl font-bold mb-12 ">Organizers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 px-6">
            <div className="mb-12 lg:mb-0 mx-auto">
              <div class="flex flex-col items-center">
                <div class="w40 h-20">
                  Taiwan Artificial Intelligence Association
                </div>

                <Image
                  src="/taia_logo.png"
                  width={400}
                  height={200}
                  alt="icon"
                ></Image>
              </div>
            </div>

            <div className="mb-12 lg:mb-0 mx-auto">
              <div className="flex flex-col items-center">
                <div className="w-70 h-20 shadow-lg">
                  National Taiwan University IBM Quantum Hub
                </div>

                <Image
                  src="https://quantum.ntu.edu.tw/wp-content/uploads/elementor/thumbs/NTU-IBMQ_LOGO1-p9ym8ap0ujw64l3clhzokyfcks6gk8jqq8h148kjk6.png"
                  width={300}
                  height={400}
                  alt="icon"
                ></Image>
              </div>
            </div>
          </div>
        </section>
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
                Meet the community
              </h1>
              <p>
                Join the fast-growing community of developers and innovators
                connected all over the world building the future of quantum AI
              </p>
            </div>
          </div>

          <div
            className="md:mr-[200px] w-[350px] flex flex-col gap-[100px] px-3"
            id="contact"
          >
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

      {/* Create a video block to show the SQAI 2021 videos*/}

      <section className="bg-black dark:black mt-[150px]">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-4xl tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              SQAI 2021:
              <br />
              <span className="text-blue-700">Day 1</span>
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              The first day of SQAI 2021 was a great success! We had more than
              100 online attendees from all the Taiwan. The speakers were from
              various expertise and backgrounds, and they shared their knowledge
              on the development of quantum related technologies
            </p>
          </div>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Ba4BuGCNrm0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>

      <section className="bg-black dark:black mt-[60px]">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/5w1HDaM4dHg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-4xl tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              SQAI 2021:
              <br />
              <span className="text-blue-700">Day 2</span>
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              The first day of SQAI 2021 was a great success! We had more than
              100 online attendees from all the Taiwan. The speakers were from
              various expertise and backgrounds, and they shared their knowledge
              on the development of quantum related technologies
            </p>
          </div>
        </div>
      </section>

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
    </Scrollbars>
  );
}
