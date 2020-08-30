import React from "react";
import Editor from "react-markdown-editor-lite";
import {Button} from 'grommet';
import ReactMarkdown from "react-markdown";
import "react-markdown-editor-lite/lib/index.css";

export default function Markdown() {
  const mdEditor = React.useRef(null);
  const [value, setValue] = React.useState("## Inspiration\n\n## What it does\n\n## How we built it\n\n## Challenges we ran into\n\n## Accomplishments that we're proud of\n\n## What we learned\n\n## What's next\n");

  const handleClick = () => {
    if (mdEditor.current) {
      alert(mdEditor.current.getMdValue());
    }
  };

  const handleEditorChange = ({ html, text }) => {
    const newValue = text.replace(/\d/g, "");
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <div className="App">
      
      <Editor
        ref={mdEditor}
        value={value}
        style={{
          height: "500px",
          width: "100%"
        }}
        onChange={handleEditorChange}
        renderHTML={text => <ReactMarkdown source={text} />}
      />
      <br/>
      <Button primary onClick={handleClick}label="Get Markdown"/>
    </div>
  );
}