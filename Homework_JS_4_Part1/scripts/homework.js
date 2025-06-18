// This is function that accepts an array of 3 strings as an argument: name, mood, activity. They are all strings.
function tellStory(arrayOf3Strings, gender) {
  // The arrat
  let [name,mood,activity] = arrayOf3Strings;
  // Declaring a variable for gender
  let girlOrBoy;
  // Based on the gender input determine if the person is male or female
  if (gender === 'female') {
    girlOrBoy = 'she';
  } else
    girlOrBoy = 'he';
  
// This is the story
  let storyPerson = `This is ${name}. ${name} is a nice person. Today ${girlOrBoy} is ${mood}. ${girlOrBoy} is ${activity} all day. The end.`;
  // Return the story
  return storyPerson;
}
// The story for Marija
console.log(tellStory(["Marija", "happy", "listening to music"], "female")); 
// The story for Ivana
console.log(tellStory(["Ivana", "excited", "hiking"], "female")); 
// The story for Davor
console.log(tellStory(["Davor", "optimistic", "photography"], "male")); 

