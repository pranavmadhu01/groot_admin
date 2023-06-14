import { Flex, Image, Text } from "@mantine/core";
import { aboutStyles } from "./about.styles";
import globalStyles from "../global.styles";

export function About() {
  const { classes, cx } = aboutStyles();
  const { classes: globalClasses } = globalStyles();

  return (
    <Flex className={classes.aboutContainer}>
      <Flex className={classes.textGroup}>
        <Text className={globalClasses.title}>About Us</Text>
        <Text className={globalClasses.description} style={{ whiteSpace: "nowrap" }}>Groot provides free facilities to farmers and help them to<Text ff={'Gilroy-SemiBold'} style={{ whiteSpace: "normal", display: "inline" }}> cultivate easier and efficiently</Text>. Groot also help them keep track of their farm so they can work easier.</Text>
      </Flex>
      
      <Text className={classes.heading} style={{whiteSpace: "nowrap" }}>Introducing <Text className={classes.heading} style={{ whiteSpace: "normal", display: "inline", color: '#588C19' }}> Groot</Text>,</Text>

      <Flex className={classes.introContainer}>
        <Image
            src="/assets/images/openers.png"
          height={500}
            fit="contain"
          />
        <Text className={classes.subheading}>Your<Text className={classes.subheading} style={{ whiteSpace: "normal", display: "inline", color: '#588C19' }}> Cultivation Companion</Text>, a cutting-edge app designed to revolutionize the way new and aspiring farmers cultivate their dreams.</Text>
      </Flex>
    </Flex>
  );
}
