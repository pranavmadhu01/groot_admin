import { Flex, Image, Text } from "@mantine/core";
import { featureStyles } from "./feature.styles";

export function Feature({heading, subheading, description, mode, imgSrc}) {
  const { classes, cx } = featureStyles();

  return (
    <Flex className={classes.featureWrapper}>
      {mode===0 && (<Image
            src={imgSrc}
            height={500}
            fit="contain"
      />)}
      
      <Flex className={classes.featureInfo}>
        <Text className={classes.heading}>{heading}</Text>
        <Text className={classes.subheading}>{subheading}</Text>
        <Text className={classes.description}>{description}</Text>
      </Flex>

      {mode===1 && (<Image
            src={imgSrc}
            height={500}
            fit="contain"
      />)}
    </Flex>
  );
}
