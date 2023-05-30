import { getAllFertilzers } from "@/api";
import {
  Button,
  Divider,
  Flex,
  Image,
  Modal,
  NumberInput,
  Select,
  Text,
  Textarea,
  TextInput,
  Timeline,
} from "@mantine/core";
import { useEffect, useState } from "react";

export default function TimelineModal({ opened, onClose, title, plantid }) {
  const [timeline, setTimeline] = useState([]);
  const [fertilizer, setFertilizer] = useState([]);
  const [selectedfertilizer, setSelectedFertilizer] = useState([{}]);
  console.log(plantid);
  useEffect(() => {
    getAllFertilzers().then((response) => {
      setFertilizer(response.data.data);
    });
  }, []);
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={title}
      size="100vw"
      h="100vh"
    >
      <Flex direction="column">
        {timeline.length > 0 && (
          <Timeline active={1} bulletSize={24} lineWidth={2}>
            {timeline.map((timeline) => (
              <Timeline.Item
                bullet={<Image src="/assets/images/leaves.png" width={15} />}
                title="New branch"
                color="green"
              >
                <Text color="dimmed" size="sm">
                  You&apos;ve created new branch{" "}
                  <Text variant="link" component="span" inherit>
                    fix-notifications
                  </Text>{" "}
                  from master
                </Text>
                <Text size="xs" mt={4}>
                  2 hours ago
                </Text>
              </Timeline.Item>
            ))}
          </Timeline>
        )}
        <Flex direction="column" style={{ flex: 1 }}>
          <TextInput label="Title" placeholder="Enter the title" />
          <Textarea label="Description" placeholder="Enter the description" />
          <Flex style={{ flex: 1 }} gap={10}>
            <NumberInput label="Start number" />
            <NumberInput label="End number" />
          </Flex>
          <Flex align={"flex-end"} justify="center" gap={20}>
            <Select
              label="Select your fertilizer"
              itemComponent={({ _id, price, name }) => (
                <Flex direction="column">
                  <Text>{_id}</Text>
                  <Text>{name}</Text>
                  <Text>{price}</Text>
                  <Divider />
                </Flex>
              )}
              // onChange={(e) => console.log(e.target.value)}
              data={fertilizer}
            />
            <NumberInput label="Enter the quantity in kg" />
            <Button>Add more fertilizer</Button>
          </Flex>
        </Flex>
      </Flex>
    </Modal>
  );
}
