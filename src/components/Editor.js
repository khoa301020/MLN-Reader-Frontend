import { Editor } from '@tinymce/tinymce-react';
import React from 'react';

export default function MyEditor({ initContent = "", onEditorChange, type = "html" }) {
    return (
        <>
            <Editor
                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                onEditorChange={(content, editor) => onEditorChange(type === "html" ? content : editor.getContent({ format: 'text' }))}
                initialValue={initContent}
                init={{
                    height: 300,
                    menubar: false,
                    branding: false,
                    plugins: [
                        'autolink', 'link', 'image', 'charmap',
                        'searchreplace', 'fullscreen', 'emoticons', 'wordcount'
                    ],
                    toolbar: 'emoticons undo redo |' +
                        'bold italic underline strikethrough forecolor |' +
                        'link image | removeformat | fullscreen',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
            />
        </>
    );
}