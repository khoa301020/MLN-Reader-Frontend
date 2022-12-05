import { Editor } from '@tinymce/tinymce-react';
import parse, { domToReact, Element, htmlToDOM } from 'html-react-parser';
import React, { useRef } from 'react';

console.log(domToReact);
console.log(htmlToDOM);

const html = `
      \n<p id=\"1\">Tôi đang chạy</p><p id=\"2\">Tôi đang chạy bằng tất cả sức lực để thoát khỏi móng vuốt của con quái thú.</p><p id=\"3\">Tôi tập trung hết sức để chạy thoát, với trái tim tràn ngập sự sợ hãi.</p><p id=\"4\">Bên trên cầu thang. Nhảy qua sân. Đôi khi sử dụng phép thuật để bám vào nóc nhà. Đôi khi lại rơi xuống đất.</p><p id=\"5\">[Mi đâu rồi hả?!]</p><p id=\"6\">Kẻ đó đang gầm lên 1 tiếng rồi đuổi theo tôi.</p><p id=\"7\">Bất kể tôi có chạy đi đến đâu.</p><p id=\"8\">Tôi khá tự tin vào sức bền của tôi.</p><p id=\"9\">Dù sao thì tôi đã tập chạy khi tôi còn mới 2 3 tuổi, luyện tập với kiếm.</p><p id=\"10\">Nhưng chút tự tin này đã sớm bị phá tan rồi.</p><p id=\"11\">Kẻ đó, đang chế nhạo mọi cố gắng của tôi, đuổi theo tôi mà ứ cần thở lấy một hơi, với mái tóc đỏ tung bay trong làn gió.</p><p id=\"12\">Trong từ điển của kẻ đó không có khái niệm gọi là \"bỏ cuộc\". Bất kể tôi chạy bao xa, chỉ nghỉ trong 1 khoảnh khắc thôi, sẽ là lúc mà kẻ đó rút ngắn khoảng cách từng chút một.</p><p id=\"13\">[Haaa....... Haaa......]</p><p id=\"14\">Tôi bắt đầu hết hơi rồi.</p><p id=\"15\">Tôi không thể tiếp tục chạy được nữa. Tôi không thể chạy trốn được.</p><p id=\"16\">Tôi sẽ ẩn náu. Chỉ còn cách đó thôi.</p><p id=\"17\">[Ực....]</p><p id=\"18\">Tôi hòa mình vào bóng của cầu thang, nấp ở khu vực có thể quan sát được khu thực vật, nơi mà tôi có thể nghe thấy con quái thú đang gầm lên từ giữa lâu đài.</p><p id=\"19\">[Ta sẽ không bỏ qua cho ngươi!]</p><p id=\"20\">Tiếng gầm đó khiến đôi chân tôi run rẩy.</p><p id=\"21\">Tôi là Rudeus Greyrat. 7 tuổi.</p><p id=\"22\">Tôi có mái tóc màu trà xanh tươi sáng. Tôi là một Bishounen (Trai trẻ đẹp) khỏe mạnh, và từng là 1 tên NEET 34 tuổi.</p><p id=\"23\">Bởi vì tôi không đến lễ tang của bố mẹ tôi mà tôi đã bị đuổi ra khỏi nhà bởi gia đình họ hàng, tôi đã bị tông chết bởi 1 chiếc xe tải. Nhưng nhờ cái trò đùa tệ hại của định mệnh, mà tôi đã giữ lại được ký ức của mình và đầu thai thành một đứa trẻ sơ sinh.</p><p id=\"24\">Tôi đã luôn suy nghĩ về kiếp trước của tôi khi còn là một con người tệ hại, và trong 7 năm qua, tôi đã nỗ lực chăm chỉ để sống hết mình.</p><p id=\"25\">Học cách nói và viết, học phép thuật, luyện kiếm thuật, thiết lập mối quan hệ tốt với bố mẹ mới của tôi, và lại còn được gặp gỡ một người bạn dễ thương tên Sylphy. Để có thể đi học cùng với Sylphy, tôi phải tuân thủ yêu cầu của công việc, giúp tôi có đủ tiền trang trải học phí cho 2 người, tôi đã tới Thành Roa.</p><p id=\"26\">Nếu tôi làm tròn công việc dạy tiểu thư, bên thuê tôi sẽ lo chuyện đóng học phí ở trường ----------- Mặc dù chuyện lẽ ra phải là như thế.</p><p id=\"27\">[Ra khỏi nơi ngươi trốn ngay! Ta sẽ khiến ngươi ra bã!]</p><p id=\"28\">Tôi nhìn ra ngoài từ khu vực quan sát, và rùng mình từ tiếng ồn của con quái thú.</p><p id=\"29\">Run rẩy trước hiện thân của sự tàn ác trong hình hài một cô gái trẻ.</p><p id=\"30\">------ Tại sao chuyện lại trở thành thế này?</p><p id=\"31\">Hãy quay lại thời điểm 1 giờ trước đó.</p>\n
      `;

const parser = input =>
    parse(input, {
        replace: domNode => {
            if (domNode instanceof Element && domNode.attribs.class === 'remove') {
                return <></>;
            }
        }
    });

export default function TinyMCE() {
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };

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
            < button onClick={log} > Log editor content</button >
            {parser(html)}
        </>
    );
}