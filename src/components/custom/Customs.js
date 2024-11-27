
import React, { useEffect, useState } from "react";
import ColorPicker from "../others/chooseColor";
import "./Customs.css";
import { useSelector } from "react-redux";

export default function Customs() {
  const colors = useSelector((state) => state.UpdateColor);
  const TriggerRender = useSelector((state) => state.TriggerRender);
  const [renderTrigger, setRenderTrigger] = useState(false);

  
  useEffect(() => {
    setRenderTrigger((prev) => !prev);
  }, [TriggerRender]);

  return (
    <>
      <div className="custom_container">
        {colors.map((item) => (
          <ColorPicker
            key={item.id}
            title={getTitleById(item.id)}
            id={item.id}
            defaultColor={item.color_up}
          />
        ))}
      </div>
    </>
  );
}

function getTitleById(id) {
  const titles = {
    cb1: "Border Color",
    cb2: "Chat Title Background color",
    cb3: "Bot Bubble Background Chat",
    cb4: "Bot Text Color",
    cb5: "User Bubble Background Chat",
    cb6: "User Text Color",
  };
  return titles[id] || "Unknown Title";
}
