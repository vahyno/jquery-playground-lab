//// DO NOT MODIFY ///
//// DO NOT MODIFY ///
//// DO NOT MODIFY ///

if (!window.problem_set) {
  alert("You broke the lab!")
}

var output = [];

for (var k in problem_set) {
  let problem = problem_set[k]

  if (!problem instanceof Question) {
    console.warn(
      `Woops! Looks like you overwrote the question instead of answering it!
      Fix your code to say: \`problem_set.${k} = \"YOUR ANSWER HERE\";\``
    );
    continue;
  }

  output.push({
    prompt: k.replace(/_/g, " "),
    "is my answer correct?": problem.check_answer() ? "yes" : "no"
  })
}

console.table(output);
