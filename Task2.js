//функция добавления формы
function addForm() {
    var parent = document.getElementById('ho');
    var elem = parent.querySelector('.elem');
    var clone = elem.cloneNode(true);
    parent.appendChild(clone);
}

// функция появления блоков при выборе элемента из выпадающего списка
function showFirst(n,in1,in2) {
	
    if (n==0) {
        //при начальном состоянии блоки невидимы
        in1.style.display = 'none';	
        in2.style.display = 'none';							
    }
    //при выборе первых трех элементов появляется первый блок
    if ((n<3) && (n>0)) {
        in1.style.display = 'block';	
        in2.style.display = 'none';		
    
    }
    //при выборе последних двух элементов появляется второй блок
    if (n>2) {
        in1.style.display = 'none';	
        in2.style.display = 'block';		
        }

}















