"use client"
import { useEffect,  } from 'react';
import { NextPage } from 'next';
import { Typography, Spin } from 'antd';
import Footer from "@/components/Footer";
import Head from 'next/head';
import HeroSection from '@/Sections/HeroSection';
import HeroTextSection from '@/Sections/RunWorldSection';
import Community from '@/Sections/Community';

import styles from '@/styles';
import { Header } from "@/components/site-header"
import Navbar from '@/components/menunav';
import RunWorldSection from '@/Sections/RunWorldSection';
import BetterTogetherSection from '@/Sections/BetterTogetherSection';
import AbovetheCloud from '@/Sections/AbovetheCloud';
import MIniFooter from '@/Sections/MIniFooter';

const logos = [
   "/Logo/brandIcons/white/logo1.svg",
   "/Logo/brandIcons/white/logo2.svg",
   "/Logo/brandIcons/white/logo3.svg",
   "/Logo/brandIcons/white/logo4.svg",
   "/Logo/brandIcons/white/logo5.svg",
]

const { Title } = Typography;

const Home: NextPage = () => {
  
  return (
    <div>
      <Head>
        <title>Wasmer | Homepage.</title>
      </Head>
       <Header/>
   
      <HeroSection />
     <div className=" communitymarginTop mb-16">
     <Community/>
     </div>
   <div className="relative mt-40 mb-16"> 
     <RunWorldSection/>
     </div>
      <div className="relative mt-20 mb-16"> 
     <BetterTogetherSection/>
     </div>

       <div className=" relative">  
     <AbovetheCloud/>
     </div>

       <div className="  herosection relative mt-40 mb-16"> 
     <MIniFooter/>
     <Footer /> 
     </div>
    
    


    </div>
  );
};

export default Home;
