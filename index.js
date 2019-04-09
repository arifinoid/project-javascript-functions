const result = () => {
  const getName = document.getElementById("name").value;
  const getPartner = document.getElementById("partner").value;
  const calculate = Math.floor(Math.random() * 100) + 1;
  const output =
    calculate > 75
      ? "You are the ideal partner for her/him"
      : "Find another one. There are still many boys/girls out there";

  console.log(`${getName} and ${getPartner} get ${calculate}% probability`);
  console.log(output);
  alert(`${output}. go to chrome DevTools Console for more info.`);
};
