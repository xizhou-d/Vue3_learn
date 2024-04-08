import { ref, reactive, computed, readonly } from 'vue'

const state = reactive({
    firstName: "Xu Ming", lastName: "Deng",
})
const fullName = computed (() => {
    console.log ("changed");
    return `${state.lastName}, ${state. firstName}`;
})

console.log ("state ready");
console.log ("fullname is", fullName.value);
console.log("fullname is", fullName.value);
const imState = readonly(state) ;
console.log (imState === state);
const stateRef = ref(state);
console.log (stateRef.value === state);
state.firstName = "Cheng";
state.lastName = "Ji";
console.log (imState.firstName, imState.lastName); 
console.log ("fullname is", fullName.value); 
console.log ("fullname is", fullName.value);
const imState2 = readonly(stateRef);
console.log('imState2', imState2)
console.log (imState2.value === stateRef.value);

// state ready
// fullname is Xu Ming Deng
// fullname is Xu Ming Deng
// false
// true
// changed
// changed
// Xu Ming Deng
// Cheng Ji
// Cheng Ji
// true
