const containerElement=document.getElementById("container");
const btnAdd=document.getElementsByClassName("btn-add")[0];

function getAppStorage() //to store the values of stickies
{
return JSON.parse(localStorage.getItem('stickies') || "[]"); 
}
getAppStorage().forEach(element => {
 const textElement=createTextElement(element.id,element.content);
 containerElement.insertBefore(textElement,btnAdd); 
});
function createTextElement(id,content)
{
const textElement=document.createElement
('textarea');
textElement.classList.add('sticky'); 
textElement.value=content;

    textElement.addEventListener("change",()=>{
    updateNote(id,textElement.value);
    });
    textElement.addEventListener("dblclick",()=>{
     const check=confirm("Are you sure You want to delete?");
     if(check)
     {
        deleteNotes(id,element);
     }
 });
return textElement;
}
//id 
function addSticky()
{
    const notes=getAppStorage();
    const noteObject={
        id:Math.floor(Math.random()*100),
        content:""
    }
  const  textElement= createTextElement(noteObject.id,noteObject.content);
    containerElement.insertBefore(textElement,btnAdd); 
    notes.push(noteObject);
    saveNotes(notes);
}
btnAdd.addEventListener('click',()=>addSticky());


function saveNotes(notes)
{
    localStorage.setItem("stickies",JSON.stringify(notes));
}

//update sticky notes
function updateNote(id,content)
{
    const notes=getAppStorage();
    const updateElement=notes.filter((note)=> note.id==id)[0];
    updateElement.content=content;
    saveNotes(notes);
    containerElement.removeChild(textElement);
}
function deleteNotes(id,textElement)
{
    const notes=getAppStorage().filter((note)=> note.id!=id);
    saveNotes(notes);
    containerElement.removeChild(textElement);
}