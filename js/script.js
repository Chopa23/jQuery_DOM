$(function () {
  const myTitle = $(".myTitle");
  const text = myTitle.text("«Я абсолютно новый заголовок»");

  console.log(text);

  const myParagraph = $("p");
  myParagraph.hide(5000, function () {
    console.log("paragraph hidden");
  });

  myParagraph.show(5000, function () {
    console.log("paragraph shown");
  });
});
