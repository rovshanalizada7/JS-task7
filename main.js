const arr = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
            }
        },
        "phone": "493-170-9623 156",
        "website": "kale.biz",
        "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
        }
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
            }
        },
        "phone": "254954-1289",
        "website": "demarco.info",
        "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        }
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
                "lat": "-71.4197",
                "lng": "71.7478"
            }
        },
        "phone": "1-477-935-8478 6430",
        "website": "ola.org",
        "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
        }
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
                "lat": "24.8918",
                "lng": "21.8984"
            }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
        }
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
                "lat": "-14.3990",
                "lng": "-120.7677"
            }
        },
        "phone": "586.493.6943 140",
        "website": "jacynthe.com",
        "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
        }
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
                "lat": "24.6463",
                "lng": "-168.8889"
            }
        },
        "phone": "775976-679441206",
        "website": "conrad.com",
        "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
        }
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            }
        },
        "phone": "0246483804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    }
]


// Task 1 burda phone nomreleri olduğu kimi qalacaq herbiri necedirse ele lakin o rəqəmlərin herbiri random olacaq məsələn
// Phone:987654321 dirse
// Bu reqem herbiri random reqemlerle evez olunacaq
// Meselen :610373930Daha sonra o reqemler icinde min maxdan istifade edib en boyuk ve en kiçik reqemi tapacaqsiz 

// 1 ci helli 


// const getNewFunc = (arr) => {
//     arr.forEach((item) => {
//         let phoneArr = item.phone.split('');
//         let newNumber = phoneArr.filter((item) => item>=0 && item.trim())
//         let newPhone = [];
//         for (let i =0; i<newNumber.length;i++) i % 3 == 1 &&  i !== newNumber.length - 1 ? newPhone.push ("-") : newPhone.push(randomNumber())
//         item.phoneMinumumNumber = Math.min(...newPhone.filter((item) => item >=0 ))
//         item.phoneMaxumumNumber = Math.max(...newPhone.filter((item) => item >=0 ))
//         item.phone = newPhone.join('');
//         console.log(item);  
//     })
// }

// getNewFunc(arr);




// 2ci hell

// const findPhone = (array) => {
//     const random = Math.floor(Math.random() * array.length);
//     let phoneNumber = array[random].phone;
//     const digits = phoneNumber.replace(/\D/g, '');
//     const shuffledDigits = digits.split('').sort(() => 0.5 - Math.random()).join('');
//     const formattedPhoneNumber = formatPhoneNumber(shuffledDigits);
//     const minDigit = Math.min(...shuffledDigits);
//     const maxDigit = Math.max(...shuffledDigits);
//     return {
//         phoneNumber: formattedPhoneNumber,
//         minDigit,
//         maxDigit
//     };
// }
// console.log(findPhone(arr));

// function formatPhoneNumber(digits) {
//     let formatted = '';
//     for (let i = 0; i < digits.length; i += 3) {
//         formatted += digits.slice(i, i + 3) + (i + 3 < digits.length ? '-' : '');
//     }
//     return formatted;
// }




//----------------------------------------------------------------------------------------

// Task 2
// Adresleri random cixaran Array qaytaran bir function qurun


// const getRandomAddress = (array) =>{
//     const random = Math.floor(Math.random() * array.length);
//     return arr[random].address;
// }

// console.log(getRandomAddress(arr));


//-----------------------------------------------------------------------------------------


// Task 3
// Email ları random cixaran Array şəklində qaytaran bir function qurun


// const getRandomEmails = (array) => {
//     let result = [];
//     const random = Math.floor(Math.random() * array.length);
//     result.push(array[random].email);
//     return result;
// }

// console.log(getRandomEmails(arr));



// 2ci hell

// const random = Math.floor(Math.random() * arr.length);

// const result = (array) =>{ array.find(item => item.id == random ? console.log(item.email) : console.log("no email")) }

// console.log(result(arr));












