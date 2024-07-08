var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


// $('#caro').carousel({
//     interval: false, // disable auto-scrolling
//     wrap: true // enable infinite scrolling
// });


$(document).ready(function () {
  if (localStorage.getItem('isLoggedIn') === 'true') {
    const username = localStorage.getItem('username');
    $('#user').text(`${username}`);

    $('#liveToast').addClass('show')
    $('#welUser').append(`${username}`)
  }
});
$.ajax({
  url: 'https://retoolapi.dev/cjCYBL/posts/',
  method: 'GET',
  dataType: 'json',
  success: function (data) {
    $.each(data, function (index, post) {
      const likes = post.numbers
      var html = `
          <div class="d-flex flex-column justify-content-around postcontainer" id="${post.id}">
            <div class="d-flex  flex-row justify-content-between" id="maincontent">
              <div class="d-flex justify-content-start fcontent">
                <img src="${post.userImage}" alt="" width="50px" height="50px" style="border-radius:50%;">
                <div class="d-flex flex-column" id="nameandtime">
                  <b>${post.userName}</b>
                  <p>${post.date} <i class="fa-solid fa-earth-americas"></i></p>
                </div>
              </div>
              <div class="d-flex dropdown dropstart">
                 <button class="btn manu dropdown-toggle-split" id="dropmanue" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fa-solid fa-ellipsis" style="font-size:30px"></i>
                 </button> 

                  <ul class="dropdown-menu " aria-labelledby="dropmanue">
                      <li><button class="btn btn-sm btn-primary dropdown-item" id="hide"><i class="fa-solid fa-eye-slash"></i> Hide</button></li>
                     <li><button class="btn btn-sm btn-danger dropdown-item" id="delete"><i class="fa-solid fa-trash"></i> Delete</button></li>
                     <li> <button class="btn btn-sm btn-secondary dropdown-item" id="repor" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><i class="fa-solid fa-flag"></i> Report</button></li>
                  </ul>
               </div>
            </div>
            <p>${post.description}</p>
            <img src="${post.userImage}" alt="" width="100%" height="150px">
            <p><i class="fa-solid fa-thumbs-up" style="color: #284ee6;"></i> <i class="fa-solid fa-heart" style="color: #f80d0d;"></i><span id="numoflikes${post.id}" data-likes="${likes}">${likes}</span></p>

            <hr>
            <div class="d-flex flex-row justify-content-end" id="footr">
              <button class="btn " id="lik${post.id}" ><i class="fa-solid fa-thumbs-up"></i></button>
              <button class="btn "><i class="fa-solid fa-comment"></i></button>
              <button class="btn "><i class="fa-solid fa-paper-plane"></i></button>
            </div>
          </div>
        `;
      $('#posts').append(html);
      $('.manu').css("border", "none")
      $(document).on('click', "#lik"+post.id, function () {
        $(this).css("color", "#306fed")
        const currentLikes = parseInt($("#numoflikes"+post.id).data('likes'));
        const newLikes = currentLikes + 1;
        $("#numoflikes"+post.id).data('likes', newLikes);
        $("#numoflikes"+post.id).text(newLikes);
      })



      $('#posts').on('click', '.manu', function (event) {
        const postId = $(this).attr('id');
        console.log(postId);
      });
    });


    $("#posts").on('click', '[id^="hide"], [id^="delete"], [id^="report"]', function (event) {
      const postId = $(this).closest('.postcontainer').attr('id');
      const action = $(this).attr('id');
      console.log(`Post ID: ${postId}, Action: ${action}`);
      if (action == "hide") {
        // $(`#${postId}`).remove();
        //$(`#${postId}`).css("display","none")
        $(this).parents('.postcontainer').fadeOut(1000);
        $(`#${postId}`).addClass('hidden')
      }
      else if (action == "delete") {
        {
          $(`#${postId}`).remove();
        }
      }

      
    })
  },

});
//var txt=$("#opinion").val()
$("#postAdd").on('click', function () {
  var txt = $("#opinion").val();
  $.fn.addPost(txt);
});

$.fn.addPost = function (txt) {
  const username = localStorage.getItem('username');

  var postId = new Date().getTime();
  let now = new Date();
  let currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  var add = `
  <div id="${postId}" class="d-flex flex-column justify-content-around postcontainer creatpost">
        <div class="d-flex  flex-row justify-content-between" id="maincontent">
            <div class="d-flex justify-content-start fcontent">
                <img src="../assets/logo.png" alt="" width="50px" height="50px">
                <div class="d-flex flex-column" id="nameandtime">
                    <b >${username}</b>
                    <p>${currentTime} <i class="fa-solid fa-earth-americas"></i></p>
                </div>

            </div>
            <div class="d-flex dropdown dropstart">
                 <button class="btn manu dropdown-toggle-split" id="dropmanue" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fa-solid fa-ellipsis"></i>
                 </button> 

                  <ul class="dropdown-menu " aria-labelledby="dropmanue">
                      <li><button class="btn btn-sm btn-primary dropdown-item" id="hide"><i class="fa-solid fa-eye-slash"></i> Hide</button></li>
                     <li><button class="btn btn-sm btn-danger dropdown-item" id="delete"><i class="fa-solid fa-trash"></i> Delete</button></li>
                     <li> <button class="btn btn-sm btn-secondary dropdown-item" id="repor" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><i class="fa-solid fa-flag"></i> Report</button></li>
                  </ul>
               </div>
        </div>
        <p id="opinionCon${postId}"></p>
            <p><i class="fa-solid fa-thumbs-up" style="color: #284ee6;"></i> <i class="fa-solid fa-heart" style="color: #f80d0d;"></i><span></span></p>

            <hr>
            <div class="d-flex flex-row justify-content-end" id="footr">
              <button class="btn "><i class="fa-solid fa-thumbs-up"></i></button>
              <button class="btn "><i class="fa-solid fa-comment"></i></button>
              <button class="btn "><i class="fa-solid fa-paper-plane"></i></button>
            </div>
    </div>
  `
  $('#newPost').prepend(add);
  $('#opinionCon' + postId).text(txt);
  $("#newPost").on('click', '[id^="hide"], [id^="delete"], [id^="report"]', function (event) {
    const postId = $(this).closest('.postcontainer').attr('id');
    const action = $(this).attr('id');
    console.log(`Post ID: ${postId}, Action: ${action}`);
    if (action == "hide") {
      // $(`#${postId}`).remove();
      //$(`#${postId}`).css("display","none")
      $(this).parents('.postcontainer').fadeOut(1000);
      $(this).addClass('hidden')
    }
    else if (action == "delete") {
      {
        $(`#${postId}`).remove();
      }
    }

    
  })
}

