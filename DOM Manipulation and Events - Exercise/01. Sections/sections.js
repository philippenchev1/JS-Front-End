document.addEventListener('DOMContentLoaded', solve);

function solve() {
   const formEl = document.querySelector('#task-input');
   const contentEl = document.querySelector('#content');

   formEl.addEventListener('submit', (e) => {
       e.preventDefault();
       const sections = formEl.querySelector('input[type="text"]').value.split(',').map(task => task.trim());
       console.log(sections);

       sections.forEach(el => {
           const newDivEL = document.createElement('div');
           const newPEL = document.createElement('p');

           newPEL.textContent = el;
           newPEL.style.display = 'none';

           newDivEL.append(newPEL);
           newDivEL.addEventListener('click', (e) => {
               e.currentTarget.querySelector('p').style.display = 'block';
           });

           contentEl.append(newDivEL);
       });
   });
}
