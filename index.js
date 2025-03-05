const bank = [];
const odds =[];
const evens =[];

function addNumberToBank ( n ){
    if (typeof n !== "number") return;

bank.push (n);
render ();
}

function moveNumberFromBank(){
    if (bank.length <=0 {
        return;
    })
    const n = bank.shift ();
    if (n % 2 === 0){
        evens.push(n);
    } else {
        odds.push (n);
    }
    render ();
}
function NumberForm (){
    const $form = document.createElement ("form");


    $form.innerHTML = `
    <label>
        add number to the bank
        <input name="number" type="number" />
        </label>
        <button id="add" type="button"> Add number </button>
        <button id="sort1"> Sort 1 </button>
        <button id=sortall">Sort All</button>
       ` ;

       const $add = $form.querySelector("#add")
       const $sort1 = $form.querySelector ("#sort1")
       const $sortall = $form.querySelector("#sortall");

       $add.addEventListener("click", ()=> {
        const data = new FormData ($form);
        const number = data.get("number");
        addNumberToBank(Number(number));
       });
       const $sort1 = $form.querySelector("#sort1");
       
       $sort1.addEventListener("click", moveNumberFromBank);
     
       const $sortAll = $form.querySelector("#sortAll");
       $sortAll.addEventListener("click", () => {
         while (bank.length > 0) {
           moveNumberFromBank();
         }})

    return $form
}

function NumberList (title, numbers){
    const $section = document.createElement("section")
    $section.innerHTML = `

    <h2>${title}</h2>
    <p>${numbers.join(",")}</p>
    `;
    return $section
}

function render () {
    const $app = document.querySelector ("app");
    $app.innerHTML=`
    <h1> Odds and Events</h1>
    <NumbersForm></NumberForm>
    <NumberList> id="bank" </NumberList>
    <NumberList> id="odds" </NumberList>
    <NumberList> id="evens" </NumberList>
    `;
    $app.querySelector ("NumberForm").replaceWith(NumberForm());
    $app.querySelector ("NumberList").replaceWith(NumberList("Bank", bank));
    $app.querySelector ("NumberList").replaceWith(NumberList("Odds", odds));
    $app.querySelector ("NumberList").replaceWith(NumberList("Evans", evens));

}
render();
