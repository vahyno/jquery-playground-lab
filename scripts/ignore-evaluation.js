// evaluate answers
var output = [];

for (var k in problem_set) {
  output.push({
    prompt: k.replace(/_/g, " "),
    "is my answer correct?": problem_set[k].check_answer() ? "yes" : "no"
  })
}

console.table(output);
