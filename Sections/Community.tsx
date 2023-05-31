import React from "react";
import dynamic from 'next/dynamic';

import { TypingText } from "@/components/CustomTexts";
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from "@/utils/motion";
import styles from "@/styles";
import { PrimaryButton } from "../components/Buttons";

export default function Community() {
  return (
    <div className="container flex">
      <div className="font-semibold  text-black max-w-3xl mx-auto pt-10">
        <div className="flex flex-col text-center items-center gap-6 flex-wrap">

          <div className="flex gap-8  baseline ">  
          <span className="font-semibold font-48 text-center leading-5 ">Create apps that</span>
          <PrimaryButton
            text="Run"
            icon={<img src="/Logo/register.png" width="35" />}
            size="large"
            className="  "
          />
          <TypingText title="everywhere." textStyles="leading-5 font-48" />
          </div>

          <div className="flex gap-8 baseline justify-center">  
            <PrimaryButton
            text="Registry"
            icon={<img src="/Logo/register.png" width="35" />}
            size="large"
          />
          <span className="font-48 leading-5 ">and share with the community</span>
          </div>

          <div className="flex gap-8 baseline">  
          <span className="font-48 ">and</span>
                  <PrimaryButton
                    text="Edge"
                    icon={<img src="/Logo/edge.png" width="35" />}
                    size="large"
                    />
                  <TypingText title="to the edge, globally." textStyles="text-normal leading-5  font-48" />

          </div>

        </div>
      </div>
    </div>
  );
}
