import React, { FC } from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import Head from "next/head";
import teamMembers from "./teamMembers.json";

const AboutPage: FC = () => {
  return (
    <div className="bg-[#808080]">
      <Head>
        <title>Project Medical Codex | About</title>
        <meta
          name="description"
          content="About the Project Medical Codex team."
        />
      </Head>
      <div className="relative w-full h-auto">
        <div className="relative w-full h-auto">
          <div className="absolute text-4xl font-extrabold text-center text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            About Us
          </div>
          <img
            src="/images/assets/child.png"
            className="block w-full h-auto"
            alt="child in classroom"
          />
        </div>
      </div>

      <div className="flex flex-col mt-12 bg-[#808080]">
        <div className="text-4xl font-extrabold mb-12 text-left pl-10 text-[#ffffff]">
          Meet <br /> Our Team
        </div>

        <div className="flex flex-wrap items-center justify-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-[280px] h-[384px] m-5 p-5 bg-white shadow-md text-center transition-transform duration-300 ease-in-out rounded-2xl hover:translate-y-[-5px]"
            >
              <img
                className="w-[253px] h-[195px] mb-5 object-cover"
                src={member.img}
                alt={`team-member${index + 1}`}
              />
              <h3 className="mb-2 text-xl font-extrabold">{member.name}</h3>
              <p className="mb-5 text-lg font-light">{member.title}</p>
              <div className="flex justify-center">
                {member.link ? (
                  <Link
                    href={member.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="mx-2 text-2xl text-blue-500 transition-colors duration-300 ease-in-out" />
                  </Link>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
