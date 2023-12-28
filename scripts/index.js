document.addEventListener('DOMContentLoaded', function() {
  const topButton = document.getElementById('topButton');

  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 100) {
      topButton.style.display = 'block';
    } else {
      topButton.style.display = 'none';
    }
  });

  topButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  if (window.pageYOffset > 100) {
    topButton.style.display = 'block';
  } else {
    topButton.style.display = 'none';
  }
});

function Submit() {
  $('#messageModalBody').text('');

  var name = $('#name').val();
  var email = $('#email').val();
  var message = $('#message').val();

  if(name.length == 0) {
    $('#messageModalBody').text('請輸入您的姓名。');
    $('#messageModal').modal('show');
    return;
  }

  if(email.length == 0) {
    $('#messageModalBody').text('請輸入您的電子郵件。');
    $('#messageModal').modal('show');
    return;
  }

  if(message.length == 0) {
    $('#messageModalBody').text('請輸入留言內容。');
    $('#messageModal').modal('show');
    return;
  }

  var body =
    '留言對象：' + name + '（' + email + '）\r\n'
    + '留言內容：\r\n' + message;

  $('#body').val(body);

  $('#form').submit();
}