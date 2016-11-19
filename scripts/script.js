/**
 * @brief rende visibile il form di inserimento Employee con i campi tutti vuoti se il form era nascosto, lo nasconde se era visibile
 * @return null
 */
function show_hide(){
    //recupero l'oggetto
    var table = document.getElementById("formTable");
    if (table.style.visibility == "hidden"){
        //rendo visibile quando é nascosto
        table.style.visibility = "visible"; 
    }else{
        //rendo nascosto se era visibile
        table.style.visibility = "hidden";
    }
}

/**
 * @brief svuota il contenuto degli input
 * @return null
 */
function clear(){
    //recupero gli input e imposto che siano vuoti
        var input1 = document.getElementById("modifyId");
        var input2 = document.getElementById("modifyName");
        var input3 = document.getElementById("modifySurname");
        var input4 = document.getElementById("modifySalary");
        var input5 = document.getElementById("modifyLevel");
        input1.value = "";
        input2.value = "";
        input3.value = "";
        input4.value = "";
        input5.value = "";
}