

import React from "react";
import "./others.css";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import { useSelector, useDispatch } from "react-redux";
import { changeColor } from "../store/slices/updateColor";

const ColorPicker = ({ title, id, defaultColor }) => {
  const dispatch = useDispatch();

  const color = useSelector((state) =>
    state.UpdateColor.find((item) => item.id === id)?.color_up || defaultColor
  );

  const handleColorChange = (event) => {
    const newColor = event.target.value;
    dispatch(changeColor({ id: id, color_up: newColor }));
  };

  return (
    <>
      <div className="color_picker_container">
        <div className="color_heading">{title}</div>
        <div className="color_body">
          <div
            className="display_color"
            style={{
              backgroundColor: color,
            }}
          ></div>

          <div className="display_color_code">{color}</div>

          <div className="color_picker"  onClick={() => document.getElementById(id).click()} >
            <FormatColorFillIcon
             
              style={{ color: color }}
            />
            <input
              type="color"
              id={id}
              value={color}
              onChange={handleColorChange}
              style={{
                position: "absolute",
                visibility: "hidden",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ColorPicker;
