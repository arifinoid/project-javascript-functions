const result = () => {
  const getName = document.getElementById("name").value;
  const getPartner = document.getElementById("partner").value;
  const calculate = Math.random();
  const output =
    calculate > 0.5 ? "you are the ideal partner" : "better get divorced";

  console.log(`${getName} and ${getPartner} get ${calculate} probability`);
  console.log(output);
  alert(`${output}. go to chrome DevTools Console for more info.`);
};
