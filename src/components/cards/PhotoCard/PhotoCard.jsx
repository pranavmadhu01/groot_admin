import { deletePlant } from "@/api";
import { Card, Image, Text, Badge, Button, Group, Flex } from "@mantine/core";
import { useState } from "react";

export default function PhotoCard({
  image,
  name,
  seedrate,
  defaultph,
  handleDelete,
  handleEdit,
}) {
  const [showTimeline, setShowTimeline] = useState(false);

  const handleViewTimeline = () => {
    setShowTimeline(true);
    onClick();
  };

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={image} height={160} alt={name + " " + "image"} />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text pl={10} weight={500}>{name}</Text>
      </Group>
      <Group position="apart">
        <Badge color="pink" variant="light">
          Seed rate : Rs. {seedrate}
        </Badge>
        <Badge color="green" variant="light">
          Default pH : {defaultph}
        </Badge>
      </Group>
      <Flex gap={5}>
        <Button
          variant="light"
          color="blue"
          fullWidth
          mt="md"
          radius="md"
          onClick={handleViewTimeline}
        >
          View Timeline
        </Button>
        <Button
          variant="light"
          color="green"
          fullWidth
          mt="md"
          radius="md"
          onClick={handleEdit}
        >
          Edit
        </Button>
        <Button
          variant="light"
          color="red"
          fullWidth
          mt="md"
          radius="md"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </Flex>
    </Card>
  );
}
