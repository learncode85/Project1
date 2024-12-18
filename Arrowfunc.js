function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
  );
  

//As arrow function

function ask(question, yes, no) {
    if (confirm(question)) yes();
        else no();
}

ask(
   "Do you agree?",
   () => alert("You agree."),
   () => alert("You canceled the execution."),
);



