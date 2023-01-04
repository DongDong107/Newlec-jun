let year = 2023;
let month = 01;
let day = 4;

let regdate = year + "-" + month + "-" + day;
console.log(regdate);

let template = `${year}-${month}-${day}`;
console.log(template);

let className = 'p=elect';
let title = '스마트 폰';

let product = String.raw`<section class=${className}">\n\n\n
                <h1>${title}</h1>
                </section>`;

console.log(product);

let attName = "kor";

let exam = {
    [attName]: 10,
    eng: 20,
    math: 30,
    student:{
        name: 'newlec',
        phone: '010-2222-3333'
    }

};

console.log(`kor:${exam.kor}`);

let {kor,eng:english, ma=0, student:{name, phone}} = exam;

console.log(english);
console.log(phone);




