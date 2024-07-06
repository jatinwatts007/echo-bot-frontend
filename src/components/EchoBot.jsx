import React, { useState } from "react";
import { instance } from "../utils/AxiosInstance";

const EchoBot = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const chatMessage = async (body) => {
    try {
      setError(false);
      const response = await instance.post("/echo/bot/", body);
      setData([...data, body.message]);
    } catch (e) {
      setError("Something Went Wrong");
    }
  };

  const onClickSubmit = () => {
    const name = document.getElementById("name-input").value;
    const email = document.getElementById("email-input").value;
    const message = document.getElementById("chat-input").value;
    const timestamp = Date.now();
    if (!(name && email && message)) {
      setError("Please Enter Details");
      return;
    }
    const body = {
      name: name,
      email: email,
      message: message,
      timestamp: timestamp,
    };
    chatMessage(body);
  };
  return (
    <div className="flex flex-col w-[20REM] gap-y-4 p-5 border-2 border-black ml-5 rounded-md">
      <div>Echo Bot</div>
      <div className="border-2 border-black rounded-md p-2 min-h-44">
        {data.map((value, index) => {
          return (
            <div className="flex flex-col">
              <div className="w-fit overflow-auto">you - {value} </div>
              <div className="w-fit self-end  px-1 border-2 rounded-lg border-black overflow-auto">
                echo - {value}
              </div>
            </div>
          );
        })}
      </div>
      <input
        id="chat-input"
        placeholder="Enter Text"
        className="outline-none border-2 p-1 border-black rounded-md"
        required
      />
      <button
        className="border-2 p-1 border-black rounded-md"
        onClick={onClickSubmit}
      >
        Submit
      </button>
      {error ? <div className="text-red-400">{error}</div> : ""}
    </div>
  );
};

export default EchoBot;
