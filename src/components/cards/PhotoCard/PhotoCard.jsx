import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

export default function PhotoCard({
  image,
  name,
  seedrate,
  defaultph,
  onCLick,
}) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={image} height={160} alt={name + " " + "image"} />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{name}</Text>
      </Group>
      <Group position="apart">
        <Badge color="pink" variant="light">
          "Seed rate : " Rs {seedrate}
        </Badge>
        <Badge color="green" variant="light">
          "Default pH : "{defaultph}
        </Badge>
      </Group>

      <Button
        variant="light"
        color="blue"
        fullWidth
        mt="md"
        radius="md"
        onClick={onCLick}
      >
        View Timeline
      </Button>
    </Card>
  );
}
