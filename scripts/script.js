$(document).ready(function () {
  console.log("doc is ready");

  //let revName;

  $("#btnGetFacts").click(function () {
    $("#coolNameFactsOutput").html();
    // handle it if input is blank

    let userName = $("#userName").val();
    console.log("user name = ", userName);
    //let coolFacts = generateCoolNameFacts(userName);

    console.log("vowel count = ", countVowels(userName));

    console.log("you clicked the button");
    //console.log("from ln 12", generateCoolNameFacts(userName));

    $("#coolNameFactsOutput").html(countVowels(userName));

    
  });
});

function generateCoolNameFacts(userName) {
  let coolFacts = "";

  coolFacts = countVowels(userName);
  coolFacts += " <br> " + nameStart(userName);
  coolFacts += "<h3> " + nameEnd(userName) + "</h3>";
  coolFacts += "<h2>" + reverseName(userName) + "</h2>";

  console.log("coolFacts var: " + coolFacts);

  return coolFacts;
}

function countVowels(name) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = 0; i < name.length; i++) {
    if (vowels.includes(name[i].toLowerCase())) {
      count++;
    }
  }

  return "Your name has " + count + " vowels!";
}





 




