// evaluate answers
var output = [];

for (var k in problem_set) {
  output.push({
    prompt: k.replace(/_/g, " "),
    "correct answer?": problem_set[k].check_answer()
  })
}

console.table(output);
