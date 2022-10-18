import React, { useState } from "react";
import { TextInput, Button } from "@mantine/core";
import { useCreateTrip } from "../../hooks/useCreateTrip";

export const CreateTrip = () => {
  const [title, setTitle] = useState("");
  const [path, setPath] = useState("");
  const [src, setSrc] = useState("");
  const { isLoading, createTrip, trip } = useCreateTrip();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createTrip({
      title,
      path,
      src,
    });
    setTitle("");
    setPath("");
    setSrc("");
  };

  return (
    <div>
      {trip && <div>You created the trip {trip.title}</div>}
      <form onSubmit={handleSubmit}>
        <TextInput
          onChange={(e) => setTitle(e.target.value)}
          mb="20px"
          placeholder="Title"
          value={title}
        />
        <TextInput
          onChange={(e) => setPath(e.target.value)}
          mb="20px"
          placeholder="Path"
          value={path}
        />
        <TextInput
          onChange={(e) => setSrc(e.target.value)}
          placeholder="Source of the image"
          value={src}
        />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button loading={isLoading} type="submit" mt={20}>
            Create
          </Button>
        </div>
      </form>
    </div>
  );
};
