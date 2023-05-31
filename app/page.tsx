"use client"
import { useEffect,  } from 'react';
import { NextPage } from 'next';
import { Typography, Spin } from 'antd';
import Footer from "@/components/Footer";
import { motion, useAnimate, stagger, usePresence, AnimatePresence, useInView } from "framer-motion";
import Head from 'next/head';
import HeroSection from '@/Sections/HeroSection';
import Community from '@/Sections/Community';
import Expore2 from '@/Sections/Expore2';
import Explore3 from '@/Sections/Explore3';
import Explore4 from '@/Sections/Explore4';
import Explore6 from '@/Sections/Explore6';
import styles from '@/styles';
import { Header } from "@/components/site-header"

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

      {/* <div className='relative'> 
      </div>  */}

     <div className=" mt-40 mb-16">
     <Community/>
     </div>

      <div className="relative"> 
     <Expore2/>
     <Explore3/>
     </div>

     <div className=" relative">  
     <Explore4/>
     <Footer />
     </div>


    </div>
  );
};

export default Home;
