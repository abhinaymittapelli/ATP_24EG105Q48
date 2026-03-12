function validateTitle(title)
{
    if(title.length<=3){
        return "Min 3 characters Required"
    }
    if(!title){
        return "Title Required";
    }
    return true
}
function validatePriority(priority){
    const priorities=["HIGH","LOW","MEDIUM"];
    let result=priorities.includes(priority)
    if(result=priorities){
        return true
    }
   return false
}

function validateDueDate(duedate){
    return true
}

export {validateTitle,validatePriority,validateDueDate}