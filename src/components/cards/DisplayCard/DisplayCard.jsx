import {
  createStyles,
  Text,
  Card,
  RingProgress,
  Group,
  rem,
} from "@mantine/core";
import { displayCardStyle } from "./displaycard.styles";

export default function DisplayCard({ title, price }) {
  const { classes, theme } = displayCardStyle();

  return (
    <Card withBorder p="xl" radius="md" className={classes.card}>
      <div className={classes.inner}>
        <div>
          <Text fz="xl" className={classes.label}>
            {title}
          </Text>
          <div>
            <Text className={classes.lead} mt={30}>
              {price}
            </Text>
            <Text fz="xs" color="dimmed">
              Price
            </Text>
          </div>
        </div>
      </div>
    </Card>
  );
}
