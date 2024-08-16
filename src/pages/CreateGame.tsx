import { useFieldArray, useForm } from "react-hook-form";
import React, { useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export const CreateGame: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const [playerName, setPlayerName] = useState("");
  const { handleSubmit, register, control, watch } = useForm<{
    name: string;
    date: string;
    participants: { name: string }[];
    time: string;
  }>({
    defaultValues: {
      name: "",
      date: "",
      participants: [],
      time: "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "participants",
  });
  const values = watch();

  const onCreateGame = () => {
    console.log("Creating game");
  };

  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      <p className="text-center text-xl">Create a New Game</p>
      <div className="flex flex-col justify-center items-center gap-8">
        <Input
          title="Game Name"
          placeholder="Usually the event's name"
          {...register("name", { required: true })}
        />
        <div>
          <div className="flex flex-col justify-censtter items-start gap-2">
            <Input
              title="Players"
              placeholder="Who will be playing?"
              value={playerName}
              onChange={({ target }) => setPlayerName(target.value)}
              onSubmit={() => {
                append({ name: playerName });
                setPlayerName("");
              }}
            />

            <div className="flex flex-col gap-2">
              {fields.map((field, index) => (
                <div className="flex justify-between gap-2">
                  <p key={field.id}>
                    {`${index + 1})`}
                    {field.name}
                  </p>
                  <Button
                    className="w-8 h-8 flex justify-center items-center"
                    text="X"
                    onClick={() => remove(index)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <Input
            title="Date"
            type="date"
            {...register("date", { required: true })}
          />
          <Input
            title="Event time"
            type="time"
            {...register("time", { required: true })}
          />
        </div>
      </div>
      <Button
        onClick={handleSubmit(onCreateGame, (e) => console.log(e))}
        loading={loading}
        text={"Create"}
      />
    </div>
  );
};
