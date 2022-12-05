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
    // });
// let nam = prompt('What is your name');
// let surname = prompt('What is your surname');
// let age = prompt('How old are you');
// let job = prompt('What is you job');

// console.log('Name: ' + nam + ' Surname: ' + surname + ' Age: ' + age + ' Job: ' + job);


// let week = prompt(' HAFTA KUNINI YOZING ')
// switch (week)
// {
//      case 'MONDAY' , '2':
//         console.log('TUESDAY');
//         break;
//      case 'TUESDAY' , '3':
//         console.log('WEDNESDAY');
//         break;
//     case 'WEDNESDAY' , '4':
//         console.log('THURSDAY');
//         break;
//     case 'THURSDAY' , '5':
//         console.log('FRIDAY');
//         break;
//     case 'FRIDAY' , '6':
//         console.log('SATURDAY');
//         break;
//     case 'SATURDAY' , '7':
//         console.log('SUNDAY');
//         break;
//     case 'SUNDAY' , '1':
//         console.log('MONDAY');
//         break;
//         default:
//             alert('hafta uni emas');
// }



// let name = 'Islombek';
// let surname = 'Mustofakhulov';
// let age = '16';
// let school = '41-maktab';
// let clas = '10';
// let job = 'pupil';

// console.log('My name is ' + name + ' ;    My surname is ' + surname + ' ;    I am ' + age + ' ;    My school is ' + school + ' ;    I am ' + clas + ' class ' + ' ;    I am ' + job );












// let num = 0;
// do{
//     console.log('hello' , num);
//     num++;
// }while(num < 30);




// let str = Number(prompt('Yoshingizni kiriting'));

// switch (str){
//   case 22:
//         alertb ('o`quvchi');
//     break;
//     default:
//         alert('bunday yosh yoq');
// }



// let num2 = 0;
// while (num2 < 3){
//     let num = +prompt('your code');
//     switch(num){
//         case 1234:
//             num2 = 3;
//             break;
//             default:
//                 console.log('error');
//     }
//     num2++;
// }
 

// let age = prompt('jfvn');
// if(age > 16){
//     console.log('bbs');
// }else if(age < 16){
//    console.log('sj');
// }else if(age = 16){
//     console.log('erer');
// }else{
//     console.log('d');
// }





// var str = prompt('Ismingizni kiriting');
 

// if(str == 'islombek' || str == 'Islombek'){
//     console.log('Islombek');
// }else{
//     console.log('ERROR');
// }



// var age = prompt('Yoshingizni kiriting');

// if( age >= 30 && age <= 50){
//     console.log('Siz 30 va 50 ortasidagi yoshdasiz');
// }



let numberOfFilms = +prompt('Qancha film ko`rgansiz?');


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}


let sawFilm = prompt('Oxirgi ko`rgan filimlaringizdan biri?');
let priceFilm = +prompt('Uni qancha baholagan bo`lardingiz?');

 console.log(personalMovieDB.movies + sawFilm + ' : ' + priceFilm);


