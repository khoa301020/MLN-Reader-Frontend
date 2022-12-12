import { Editor } from '@tinymce/tinymce-react';
import { domToReact, htmlToDOM } from 'html-react-parser';
import React, { useRef } from 'react';

console.log(domToReact);
console.log(htmlToDOM);

const html = `\n
      <p>Tôi đang chạy</p>
      <p>Tôi đang chạy bằng tất cả sức lực để thoát khỏi móng vuốt của con quái thú.</p>\n
      `;

// const parser = input =>
//     parse(input, {
//         replace: domNode => {
//             if (domNode instanceof Element && domNode.attribs.class === 'remove') {
//                 return <></>;
//             }
//         }
//     });

export default function TinyMCE() {
    const editorRef = useRef(null);
    // const log = () => {
    //     if (editorRef.current) {
    //         console.log(editorRef.current.getContent());
    //     }
    // };

    return (
        <>
            <Editor
                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue={html}
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }
                }
            />
        </>
    );
}