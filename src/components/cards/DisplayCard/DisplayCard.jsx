import {
  Text,
  Card,
} from "@mantine/core";
import { displayCardStyle } from "./displaycard.styles";

export default function DisplayCard({ title, subtitle, isPrice }) {
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
              {subtitle}
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
