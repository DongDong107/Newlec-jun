import aaa,{test1,test2,Exam as Exam, exam2 as to} from "./module1.js";
import bbb,{test1 as test3} from "./module2.js";

console.log(aaa);
test1();
test2();
bbb();
test3();
let exam = new Exam();
console.log(exam);
