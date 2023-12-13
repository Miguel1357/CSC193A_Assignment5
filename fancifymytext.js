function bigger() {
  alert("Hello, world!");
  document.getElementById("inputBox").style.fontSize = "24pt";
}

function setTextStyle(style) {
  if (style === "FancyShmancy") {
    alert("Fancify!");
    document.getElementById("inputBox").style.fontWeight = "bold";
    document.getElementById("inputBox").style.color = "blue";
    document.getElementById("inputBox").style.textDecoration = "underline";
  } else if (style === "BoringBetty") {
    alert("Lamify...");
    document.getElementById("inputBox").style.fontWeight = "normal";
    document.getElementById("inputBox").style.color = "black";
    document.getElementById("inputBox").style.textDecoration = "none";
  }
}

function moo() {
  var textBox = document.getElementById("inputBox");
  var text = textBox.value;
  var sentences = text.split(".");

  if (sentences[sentences.length - 1].trim() === "") {
    sentences.pop();
  }

  for (var i = 0; i < sentences.length; i++) {
    var sentence = sentences[i].trim();
    if (sentence !== "") {
      var uppercaseSentence = sentence.toUpperCase();

      uppercaseSentence = uppercaseSentence.replace(/\s/g, "_");

      var words = uppercaseSentence.split(" ");

      var lastWord = words[words.length - 1];

      words[words.length - 1] = lastWord + "-Moo";

      sentences[i] = words.join(" ");
    }
  }

  textBox.value = sentences.join(".") + ".";
}
