// let tabs = document.querySelectorAll('.tabs1');
//     contents = document.querySelectorAll('.tabs_content');

//     tabs.forEach((tab, index) => {
//         tab.addEventListener('click', () => {
//             contents.forEach((content) => {
//                 content.classList.remove('is-active');
//             });
//             tabs.forEach((tab) =>{
//                 tab.classList.remove('is-active');
//             });
//             contents[index].classList.add('is-active');
//             tabs[index].classList.add('is-active');
//         });
//     });
let nam = prompt('What is your name');
let surname = prompt('What is your surname');
let age = prompt('How old are you');
let job = prompt('What is you job');

console.log('Name: ' + nam + ' Surname: ' + surname + ' Age: ' + age + ' Job: ' + job);


