import { EditorContent, useEditor, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";
import styled from "styled-components";

const EditorWrapper = styled.div`
  width: 100%;
  border: 2px solid #0a0b0bff;
  border-radius: 6px;
  padding: 10px;
  min-height: 180px;
  background: white;

  .ProseMirror {
    outline: none;
  }
`;

function RichTextEditor({ value, onChange }) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({ openOnClick: false }),
      Placeholder.configure({
        placeholder: "Type / to choose a block",
      }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  if (!editor) return null;

  return (
    <EditorWrapper>
      <BubbleMenu editor={editor}>
        <button onClick={() => editor.chain().focus().toggleBold().run()}>B</button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()}>I</button>
        <button onClick={() => editor.chain().focus().toggleBulletList().run()}>• List</button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
          H2
        </button>
      </BubbleMenu>

      <EditorContent editor={editor} />
    </EditorWrapper>
  );
}

export default RichTextEditor;
