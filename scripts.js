$(document).ready(function () {
  $("button#hello").click(function () {
    $("ul#dogo").prepend("<li>woof!</li>");
    $("ul#dogo")
      .children("li")
      .first()
      .click(function () {
        $(this).remove();
      });
  });

  $("button#hello").click(function () {
    $("body").addClass("green-background");
  });

  // $("button#goodbye").click(function () {
  //   $("ul#user").prepend("<li>Goodbye!</li>");
  // });

  // $("button#stop").click(function () {
  //   $("ul#user").prepend("<li>Stop copying me!</li>");
  //   $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
  // });
});
