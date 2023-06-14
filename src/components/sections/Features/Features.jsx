import { Flex, Image, Text } from "@mantine/core";
import globalStyles from "../global.styles";
import { featuresStyles } from "./features.styles";
import { Feature } from "@/components/display/Feature/Feature";

export function Features() {
  const { classes, cx } = featuresStyles();
  const { classes: globalClasses } = globalStyles();

  return (
    <Flex className={classes.featuresContainer}>
      <Flex className={classes.textGroup}>
        <Text className={globalClasses.title}>Features</Text>
        <Text className={globalClasses.description}>Groot provides a wide range of in-app features like adding farms, building timelines, estimating costs and identifying diseases.</Text>
      </Flex>
      
      <Flex className={classes.featuresWrapper}>
        <Feature heading={'Personalised Dashboard'} subheading={'Get your personal dashboard with all your farms and farm statistics.'} description={'Maintain all your farms and make a complete farm analysis through the all new personalised dashboard.'} imgSrc={'/assets/images/dashboard.png'} mode={0} />
        <Feature heading={'Add Farms'} subheading={'Have multiple farms? Don’t worry. We take care of it for you.'} description={'Add each of your farms and manage each one of them easily.'} imgSrc={'/assets/images/addfarms.png'} mode={1} />
        <Feature heading={'Estimate Costs'} subheading={'Having trouble handling budgets? Just relax. We calculate it for you.'} description={'Estimate the cost for farming, considering the farm area and fertilizers used. '} imgSrc={'/assets/images/costestimator.png'} mode={0} />
        <Feature heading={'Generate Timeline'} subheading={'Having trouble scheduling farm operations? We make the flow for you.'} description={'Build timeline for each of your crops, which provides necessary details and operations to be done on the farm each day.'} imgSrc={'/assets/images/timelinegenerator.png'} mode={1} />
        <Feature heading={'Scan a Disease'} subheading={'Worried above crop diseases? Use Groot Scan to scan for diseases.'} description={'Scan for diseases in crops and get detailed information about the disease (if infected).'} imgSrc={'/assets/images/scandisease.png'} mode={0} />
      </Flex>
    </Flex>
  );
}
