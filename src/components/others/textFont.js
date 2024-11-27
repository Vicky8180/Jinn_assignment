

import React from "react";
import "./others.css";
import { useSelector, useDispatch } from "react-redux";
import { changeFont } from "../store/slices/updateText";

export default function TextFont() {
  const dispatch = useDispatch();

  
  const fontSettings = useSelector((state) => state.UpdateFont);
//  console.log(fontSettings)
  const handleFontSizeChange = (event) => {
    const newSize = event.target.value;
    dispatch(changeFont({ key: "fontSize", value: newSize }));
  };

  const handleButtonClick = (style) => {
    var tempValue=''
    if(style==="bold"){
      tempValue=!fontSettings[0].bold
    }
    if(style==="italic"){
      tempValue=!fontSettings[1].italic
    }
    if(style==="underline"){
      tempValue=!fontSettings[2].underline
    }
    
    dispatch(changeFont({ key: style, value: tempValue}));
  };

  const handleFontChange = (event) => {
    const selectedFont = event.target.value;
    dispatch(changeFont({ key: "fontStyle", value: selectedFont }));
  };

  return (
    <>
      <div className="textfont-container">
        <div className="font-other">
          <div className="font-other-heading">Text Style</div>

          <div className="font-options">
            <button
              className={`bold ${fontSettings[0].bold ? "selected" : ""}`}
              style={{ fontWeight: "bold" }}
              onClick={() => handleButtonClick("bold")}
            >
              B
            </button>

            <button
              className={`italic ${fontSettings[1].italic ? "selected" : ""}`}
              style={{ fontStyle: "italic" }}
              onClick={() => handleButtonClick("italic")}
            >
              I
            </button>

            <button
              className={`underline ${
                fontSettings[2].underline ? "selected" : ""
              }`}
              style={{ textDecoration: "underline" }}
              onClick={() => handleButtonClick("underline")}
            >
              U
            </button>
          </div>
        </div>

        <div className="font-style">
          <div className="font-style-heading">Font Style</div>
          <select
            className="font-style-select"
            value={fontSettings[3].fontStyle}
            onChange={handleFontChange}
          >
            <option value="auto">Auto</option>
            <option value="Arial, Helvetica, sans-serif">Arial</option>
            <option value="cursive">Cursive</option>
            <option value="monospace">Monospace</option>
          </select>
        </div>

        <div className="font-size">
          <div className="font-size-heading">Font Size</div>
          <input
            type="range"
            min="10"
            max="40"
            value={fontSettings[4].fontSize}
            onChange={handleFontSizeChange}
            className="font-size-slider"
          />
          <div className="font-size-value">
            Current Size: {fontSettings[4].fontSize}px
          </div>
        </div>
      </div>
    </>
  );
}
