$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="main__messagebox">
          <div class="main__messageinfo">
            <div class="main__username">
              ${message.user_name}
            </div>
            <div class="main__date">
              ${message.created_at}
            </div>
          </div>
          <div class="main__message">
            <p class="Message__content">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="main__messagebox">
        <div class="main__messageinfo">
          <div class="main__username">
            ${message.user_name}
          </div>
          <div class="main__date">
            ${message.created_at}
          </div>
        </div>
        <div class="main__message">
          <p class="Message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }
  
  $('.main__form').on('submit', function(e){
    e.preventDefault()
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,  //同期通信でいう『パス』
      type: "POST",  //同期通信でいう『HTTPメソッド』
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.main__messagelist').append(html);      
      $('form')[0].reset();
      $('.main__messagelist').animate({ scrollTop: $('.main__messagelist')[0].scrollHeight});
      $('.main__send').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });
});