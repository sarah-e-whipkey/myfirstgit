$(function(){
  $(".checkbox").change(function(){
    $(".list1").toggleClass("important", this.checked)
  }).change();
})
