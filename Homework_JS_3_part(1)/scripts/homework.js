// JavaScript function which accepts a parameter and returns its type and prints it in the console.
function parameterType(parameter) {
  // The type of parameter
  let type = typeof parameter;
  console.log(`The parametar is: ${parameter},  and its type is: ${type}`);
  // Return the type of the parameter.
  return type;
}

parameterType({}); 
parameterType(false);
parameterType(-5);
parameterType("Marija");
parameterType(undefined);
