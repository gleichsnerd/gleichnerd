import Ember from 'ember';

const {
  A: emberA,
  computed,
  Component,
  get
} = Ember

export default Component.extend({

  classNames: ["margin-largest flex-center"],

  usedLanguages: emberA([
    "Bash",
    "C",
    "C++",
    "C#",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Matlab",
    "MIPS",
    "Objective C",
    "PIC Assembly",
    "Python",
    "QuickBasic",
    "Ruby",
    "Scheme",
    "Verilog",
    "Visual Basic"
   ]),

  usedLanguagesSorted: computed("usedLanguages", function() {
    return get(this, "usedLanguages").sort();
  })

});
