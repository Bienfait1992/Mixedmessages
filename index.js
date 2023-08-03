//hello Georges
const subjects = ["petit", "Je", "L'homme", "L'argent"];
const verbs = ["sois", "peut", "doit", "donne"];
const actions = ["poli", "tapper", "créer", "santé"];
function generateRandomMessage() {
  const subjects = subjects[Math.floor(Math.random() * subjects.length)];
  const verbs = verbs[Math.floor(Math.random() * verbs.length)];
  const actions = actions[Math.floor(Math.random() * actions.length)];
  return message;
}
console.log(generateRandomMessage());



