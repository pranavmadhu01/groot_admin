"use client";
import { HomeHeader } from "@/components/sections/Homeheader/Homeheader";
import { BackgroundImage, Flex, Image } from "@mantine/core";
import { homeStyles } from "./home.styles";
import { About } from "@/components/sections/About/About";
import { Features } from "@/components/sections/Features/Features";
import { Contact } from "@/components/sections/Contact/Contact";
import { Footer } from "@/components/sections/Footer/Footer";

export default function Home() {
  const { classes, cx } = homeStyles();

  return (
    <div className={classes.pageContainer}>
      <BackgroundImage
        src="/assets/images/landingbg.png"
        className={classes.landingBg}
      >
        <HomeHeader />
        <Flex style={{position:'absolute', right: '20%'}}>
          <Image
            src="/assets/images/mockup.png"
            height={500}
            fit="contain"
          />
        </Flex>
      </BackgroundImage>

      <About />

      <Features />

      <Contact />

      <Footer />
    </div>
  );
}
