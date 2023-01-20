import { Editor } from '@tinymce/tinymce-react';
import React, { useEffect, useState } from 'react';

export default function MyEditor({ initContent = "", onEditorChange, type = "html" }) {
    const [content, setContent] = useState("");

    useEffect(() => {
        setContent(initContent);
    }, [initContent]);

    return (
        <>
            <Editor
                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                onEditorChange={
                    (content, editor) => onEditorChange(type === "html" ? {
                        content: content,
                        wordCount: editor.plugins.wordcount.getCount()
                    } :
                        editor.getContent({ format: 'text' }))}
                initialValue={content ? content : ""}
                init={{
                    selector: 'textarea',
                    height: 300,
                    max_height: 500,
                    menubar: false,
                    branding: false,
                    // skin: "oxide-dark",
                    // content_css: "dark",
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