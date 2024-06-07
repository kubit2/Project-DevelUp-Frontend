import React, { useRef, useEffect } from "react";
import "./PostEditor.css";
import backButtonImage from "../assets/back-button.png";
import leafIconImage from "../assets/leaf-icon.png";

function PostEditor() {
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    const adjustHeight = () => {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    };

    textarea.addEventListener("input", adjustHeight);
    return () => {
      textarea.removeEventListener("input", adjustHeight);
    };
  }, []);

  return (
    <div className="editor-container">
      <div className="editor-header">
        <button className="back-button">
          <img src={backButtonImage} alt="Back" />
        </button>
        <div className="header-logo">
          <img src={leafIconImage} alt="Logo" />
        </div>
        <button className="save-button">저장</button>
      </div>
      <input type="text" placeholder="제목" className="title-input" />
      <textarea
        ref={textareaRef}
        className="content-textarea"
        placeholder="내용을 여기에 작성하세요"
      ></textarea>
    </div>
  );
}

export default PostEditor;
