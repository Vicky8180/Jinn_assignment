
import React, { useState } from "react";
import "./chatBox.css";
import { useSelector } from "react-redux";

export default function ChatBox() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { send: true, message: "Hello from user" },
    { send: false, message: "Hello from bot Hello from bot " },
  ]);

  const colors = useSelector((state) => state.UpdateColor) || [];
  const fontText = useSelector((state) => state.UpdateFont) || [];

  function addMessages() {
    if (input !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { send: true, message: input },
      ]);
      setInput("");
    } else {
      alert("Please type your query");
    }
  }

  return (
    <div
      className="chatbox_container"
      style={{ border: `1px solid ${colors[0]?.color_up || "#000"}` }}
    >
      <div
        className="chatbox_header"
        style={{ backgroundColor: colors[1]?.color_up || "#f0f0f0" }}
      >
        <div className="chat_icon">
          <img
            alt="icon"
            src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
          />
        </div>
        <div className="chat_name">
          <div className="c_n_1">Jinn Live</div>
          <div className="c_n_2">Demo Bot</div>
        </div>
        <div className="chat_cross">
          <img
            alt="cross"
            width="20vh"
            height="20vh"
            src="https://img.icons8.com/ios11/512w/FFFFFF/multiply.png"
          />
        </div>
      </div>
      <div className="chatbox_message_area">
        {messages.map((item, index) => (
          <div
            key={index}
            className={item.send ? "user_message_bubble" : "bot_message_bubble"}
          >
            <div
              className={item.send ? "u_m_b_box" : "b_m_b_box"}
              style={{
                backgroundColor: colors[item.send ? 4 : 2]?.color_up || "#fff",
                color: colors[item.send ? 5 : 3]?.color_up || "#000",
                fontFamily: fontText[3]?.fontStyle || "inherit",
                fontWeight: fontText[0]?.bold ? "bold" : "normal",
                fontStyle: fontText[1]?.italic ? "italic" : "normal",
                textDecoration: fontText[2]?.underline ? "underline" : "none",
                fontSize: fontText[4]?.fontSize
                  ? `${fontText[4].fontSize / 10}vh`
                  : "inherit",
              }}
            >
              {item.message}
            </div>
          </div>
        ))}
      </div>
      <div className="chatbox_footer">
        <div className="c_f_input">
          <input
            value={input}
            type="text"
            placeholder="Ask us anything..."
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="c_f_button">
          <img
            alt="sendbtn"
            onClick={addMessages}
            src="https://cdn.icon-icons.com/icons2/1509/PNG/512/documentsend_104490.png"
          />
        </div>
      </div>
    </div>
  );
}
