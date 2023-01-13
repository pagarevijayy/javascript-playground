
// get input from "./india_states_with_duplicates.geojson"

function removeDuplicatesFromArray (data) {
  let set = new Set();
  
  let cleaned_array = data.features.filter(element => {
    if(!set.has(element.properties.name)){
       set.add(element.properties.name)
       return element
    }

  })

  
  data.features = cleaned_array

  return data
}