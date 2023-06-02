import { addPlantTimeline, getAllFertilzers, getPlantTimeline } from "@/api";
import {
  Badge,
  Button,
  Card,
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
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useEffect, useState } from "react";

export default function TimelineModal({ opened, onClose, title, plantid }) {
  const [timeline, setTimeline] = useState([]);
  const [fertilizer, setFertilizer] = useState([]);
  const [error, setError] = useState("");
  const [reload, setReload] = useState(false);
  const [selectedfertilizer, setSelectedFertilizer] = useState({
    fertilizer_id: "",
    per_cent: 0,
  });

  const form = useForm({
    initialValues: {
      title: "",
      start_date_num: 0,
      end_date_num: 0,
      description: "",
      fertilizer: [],
    },
    validate: {},
  });

  const fertilizerDataHelper = () => {
    form.setFieldValue("fertilizer", [
      ...form.values.fertilizer,
      selectedfertilizer,
    ]);
    setSelectedFertilizer({
      fertilizer_id: "",
      per_cent: 0,
    });
  };
  const timelineAdderHelper = () => {
    addPlantTimeline(plantid, timeline)
      .then((response) => {
        notifications.show({
          title: "SUCCESS",
          message: response.data.message,
        });
        setTimeline([]);
        setReload(!reload);
        onClose();
      })
      .catch((error) => {
        notifications.show({
          title: "ERROR",
          message: error.response.data.message,
        });
      });
  };
  useEffect(() => {
    getAllFertilzers().then((response) => {
      setFertilizer(response.data.data);
    });
  }, []);
  useEffect(() => {
    getPlantTimeline(plantid)
      .then((response) => {
        setTimeline(response.data.data);
      })
      .catch((error) => {
        setError(error.response.data.message);
        console.log(error.response.data.message);
      });
  }, [reload]);
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
          <Timeline active={timeline.length} bulletSize={24} lineWidth={2}>
            {timeline.map((timeline, index) => (
              <Timeline.Item
                bullet={<Image src="/assets/images/leaves.png" width={15} />}
                title={timeline.title}
                color="green"
                key={index}
              >
                <Text color="dimmed" size="sm">
                  <Text variant="link" component="span" inherit>
                    {timeline.description}
                  </Text>
                </Text>
                {/* //TODO : elaborate for understandability */}

                {/* <Text size="xs" mt={4}>
                  <Badge></Badge>
                </Text> */}
              </Timeline.Item>
            ))}
          </Timeline>
        )}
        {error.length > 0 && <Badge color={"red"}>{error}</Badge>}

        <form
          style={{
            flex: 1,
            gap: 5,
            display: "flex",
            flexDirection: "column",
            position: "sticky",
            bottom: 20,
            background: "#fff",
          }}
        >
          <TextInput
            label="Title"
            placeholder="Enter the title"
            {...form.getInputProps("title")}
          />
          <Textarea
            label="Description"
            placeholder="Enter the description"
            {...form.getInputProps("description")}
          />
          <Flex style={{ flex: 1 }} gap={10}>
            <NumberInput
              label="Start number"
              style={{ flex: 1 }}
              {...form.getInputProps("start_date_num")}
            />
            <NumberInput
              label="End number"
              style={{ flex: 1 }}
              {...form.getInputProps("end_date_num")}
            />
          </Flex>
          {form.values.fertilizer.length > 0 && <Divider />}
          <Flex
            direction={"row"}
            gap={10}
            wrap={"wrap"}
            p={10}
            justify={"space-around"}
          >
            {form.values.fertilizer.map(({ fertilizer_id, per_cent }) => (
              <SmallFertilizerCard
                name={
                  fertilizer.filter(
                    (fertilizer) => fertilizer._id === fertilizer_id
                  )[0].name
                }
                per_cent={per_cent}
              />
            ))}
          </Flex>
          {form.values.fertilizer.length > 0 && <Divider />}
          <Flex align={"flex-end"} justify="center" gap={20}>
            <Select
              label="Select your fertilizer"
              data={fertilizer.map(({ _id, name }) => ({
                label: name,
                value: _id,
              }))}
              value={selectedfertilizer.fertilizer_id}
              onChange={(value) =>
                setSelectedFertilizer({
                  ...selectedfertilizer,
                  fertilizer_id: value,
                })
              }
            />
            <NumberInput
              label="Enter per cent quantity (in kg)"
              value={selectedfertilizer.per_cent}
              precision={4}
              onChange={(value) =>
                setSelectedFertilizer({
                  ...selectedfertilizer,
                  per_cent: value,
                })
              }
            />
            <Button onClick={fertilizerDataHelper}>Add more fertilizer</Button>
          </Flex>
          <Button
            onClick={() => {
              setTimeline([...timeline, form.values]);
              form.reset();
            }}
          >
            Add Next Event
          </Button>
          <Button onClick={timelineAdderHelper}>Save timeline</Button>
        </form>
      </Flex>
    </Modal>
  );
}
const SmallFertilizerCard = ({ name, per_cent }) => {
  return (
    <Card padding="xs" withBorder w={200} maw={200}>
      <Text weight={500} size="sm" mt="xs">
        Name : {name}
      </Text>
      <Text mt="xs" color="dimmed" size="xs">
        per-cent value <Badge color={"green"}>{per_cent}</Badge> kg
      </Text>
    </Card>
  );
};
