const price = document.getElementById("price");
const taxes = document.getElementById("taxes");
const ads = document.getElementById("ads");
const discount = document.getElementById("discount");
const Total = document.getElementById("Total");
const title = document.getElementById("title");
const count = document.getElementById("count");
const category = document.getElementById("category");
const create = document.getElementById("create");
const delet = document.getElementById("delete");
const table = document.getElementById("table");
const tbody = document.createElement("tbody");
const search = document.getElementById("search");
const sbt = document.getElementById("sbt");
const sbc = document.getElementById("sbc");

table.appendChild(tbody);

const tr = document.createElement("tr");

Total.addEventListener("click",function () { 
    if(taxes.value.trim()!=0 && price.value.trim()!=0 && ads.value.trim()!=0 && discount.value.trim()!=0  ) {
        Total.textContent = (price.value-taxes.value-discount.value-ads.value);}
    });
create.addEventListener("click", function () {
    if (title.value.trim()!=0 && price.value.trim()!=0 &&ads.value.trim()!=0 &&discount.value.trim()!=0 && count.value.trim()!=0 && category.value.trim()!=0 )
        {
           const car = { t:title.value,
                     p:price.value,
                     ta:taxes.value,
                     a:ads.value,
                     d:discount.value,
                     T:Total.textContent,
                     c:count.value,
                     C:category.value};
        addnewrrow(car)
        emptyinput()
        const existData = loadDataFromLocalStorage();
            existData.push(car);
            setTableTostorage(existData);
        }});
delet.addEventListener("click",function () {
    tr.textContent="";
    tbody.removeChild(tr);
    localStorage.clear();
});
function emptyinput() {
    title.value="";
    price.value="";
    taxes.value="";
    ads.value="";
    discount.value="";
    Total.textContent="Total";
    count.value="";
    category.value="";
}
function addnewrrow(car) {
    const tdtitle = document.createElement("td");
    const tdprice = document.createElement("td");
    const tdtaxes = document.createElement("td");
    const tdads = document.createElement("td");
    const tddiscount = document.createElement("td");
    const tdtotal = document.createElement("td");
    const tdcount = document.createElement("td");
    const tdcategory = document.createElement("td");

    tdtitle.textContent = car.t;
    tdprice.textContent = car.p;
    tdtaxes.textContent = car.ta;
    tdads.textContent = car.a;
    tddiscount.textContent = car.d;
    tdtotal.textContent = car.T;
    tdcount.textContent = car.c;
    tdcategory.textContent = car.C; 
            tbody.appendChild(tr);
            tr.appendChild(tdtitle);
            tr.appendChild(tdprice);
            tr.appendChild(tdtaxes);
            tr.appendChild(tdads);
            tr.appendChild(tddiscount);
            tr.appendChild(tdtotal);
            tr.appendChild(tdcount);
            tr.appendChild(tdcategory);
            
}
function setTableTostorage(data){
    localStorage.setItem('tableData',JSON.stringify(data));
}
function loadDataFromLocalStorage () {
    const data = localStorage.getItem('tableData');
    return data ? JSON.parse(data) : [];
}
window.addEventListener("load",function(){
    const data = loadDataFromLocalStorage();
    data.forEach(element => { 
        addnewrrow(element);
        
    });
})