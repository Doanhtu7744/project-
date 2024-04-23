document.addEventListener('DOMContentLoaded', function () {
  const editor = document.getElementById('editor');
  const preview = document.getElementById('preview');

  function updatePreview() {
    const markdownText = editor.value; //lấy gtri hiện tại 
    const htmlText = marked(markdownText); //chuyển đổi văn bản thành html
    preview.innerHTML = htmlText;
  }

  editor.addEventListener('input', updatePreview);// cập nhật thông tin xem trước khi người dùng nhập hoặc thay đổi
  editor.value = defaultMarkdown.trim();
  updatePreview();
});
