import React, { useRef, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDispatch } from "react-redux";
import { composeMail } from "../../store/compose/compose-actions";
import Button from "../UI/Button";
import classes from "./ComposeMail.module.css";
const ComposeMail = () => {
  const dispatch = useDispatch()
  const [editorInput, setEditorInput] = useState("");
  const emailInputRef = useRef();

  const onEditorStateChange = (contentState) => {
    let text = "";
    contentState.blocks.forEach((e) => {
      text += ` ${e.text}`;
    });
    setEditorInput(text);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    // enteredEditor = editorInputRef.current.value;

    dispatch(composeMail(enteredEmail, editorInput))
    event.target.reset();
    setEditorInput("");
  };

  return (
    <section className={classes.compose}>
      <form onSubmit={onSubmitHandler}>
        <input autoComplete="on" type="email" ref={emailInputRef} />
        <Editor
          //editorState={contentState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          editorStyle={{ border: "1px solid black", height: "10rem" }}
          onContentStateChange={onEditorStateChange}
          //ref={editorInputRef}
        />
        <Button>Send</Button>
      </form>
    </section>
  );
};

export default ComposeMail;
