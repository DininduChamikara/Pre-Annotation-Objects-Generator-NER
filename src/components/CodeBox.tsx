import Editor from "@monaco-editor/react";

interface CodeBoxProps {
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
}

function CodeBox({ code, setCode }: CodeBoxProps) {
  
  const handleOnChange = (event: any) => {
    setCode(event);
  };

  return (
    <div>
      <Editor
        height="500px"
        language="json"
        theme="vs-dark"
        value={code}
        onChange={handleOnChange}
        options={{
          formatOnType: true,
          minimap: { scale: 10 },
        }}
      />
    </div>
  );
}

export default CodeBox;
