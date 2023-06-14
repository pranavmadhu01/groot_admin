import { Flex, Image, Text } from "@mantine/core";
import { contactStyles } from "./contact.styles";
import { Phone } from "@/components/icons";

export function Contact() {
  const { classes, cx } = contactStyles();

  return (
    <Flex className={classes.contactContainer}>
      <Flex className={classes.contactWrapper}>
        <Image
            src="/assets/images/mockup.png"
            height={500}
            fit="contain"
        />
        
        <Flex className={classes.contactDetails}>
          <Text className={classes.heading}>Connect with us</Text>
          <Flex style={{alignItems: 'center', gap: '10px'}}>
            <Phone size={36} />
            <Text className={classes.phone}>+91 9726834531</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
