var $$ = mdui.JQ;
if (window.self !== window.top) {
  $('body').addClass('iframe');
  $('head').append('<base target="_blank">');
}
$.get("https://api.github.com/repos/dragon-fish/inpageedit-v2/contributors").then(function(contribdata){
  var contribdata = contribdata || [];
  for (var i = 0; i < contribdata.length & i < 6; i++){
    $(".avatar-stack").append(`<img src=\"${contribdata[i]["avatar_url"]}\" width="64px" class=\"mdui-img-circle\" mdui-tooltip=\"\{\'content\':\'${contribdata[i]["login"]}\'\}\">`)
  };
  if (contribdata.length > 6){
    var mousrno = contribdata.length - 6
    $(".avatar-stack").prepend(`<a href=\"https://github.com/Dragon-Fish/InPageEdit-v2/graphs/contributors\"><div class=\"avatar-stack-overflow\">+${mousrno}</div></a>`)
  }
  mdui.mutation()
})