import { Card, Image, Text, Badge, Button, Group, Flex } from "@mantine/core";

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
      <Flex gap={5}>
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
        <Button
          variant="light"
          color="green"
          fullWidth
          mt="md"
          radius="md"
          onClick={onCLick}
        >
          Edit
        </Button>
        <Button
          variant="light"
          color="red"
          fullWidth
          mt="md"
          radius="md"
          onClick={onCLick}
        >
          Delete
        </Button>
      </Flex>
    </Card>
  );
}
