const users = [{
    name: 'Bob',
    age: 27,
    address: {
        country: 'USA',
        city: 'LA'
    },
    marks: [2, 3, 5, 4, 2, 3, 1, 5]
},

{
    name: 'July',
    age: 21,
    address: {
        country: 'Ukraine',
        city: 'Kiev'
    },
    marks: [4, 4, 5, 4, 3, 4, 3, 5]
},

{
    name: 'Monya',
    age: 15,
    address: {
        country: 'Ukraine',
        city: 'Odessa'
    },
    marks: [5, 1, 5, 1, 5, 1, 5, 1]
},

{
    name: 'Vsevolod',
    age: 19,
    address: {
        country: 'Ukraine',
        city: 'Lviv'
    },
    marks: [3, 4, 5, 3, 1, 2, 4, 6]
},
];

// 1
const isNotAdult = users.filter(user => user.age < 18);
console.log(isNotAdult);

// 2
const foreignStudent = users.filter(user => user.address.country !== 'Ukraine');
console.log(foreignStudent);

// 3
const isAdultNew = users.map((user) => ({...user,
    isAdult: user.age >= 18,
    averageMark: user.marks.reduce((sum, marks) => sum + marks, 0) / user.marks.length
}));
console.log(isAdultNew);

// 4
const averageMark = users.reduce((acc, user) => {
    return (acc += user.marks.reduce((marks, mark) =>
        (marks += mark), 0) / user.marks.length);
}, 0) / users.length;
console.log(averageMark);

// 5
const address = users.reduce((acc, user, ) => {
    acc.countries.push(user.address.country),
        acc.citys.push(user.address.city);
    return acc;
}, {
    countries: [],
    citys: []
})
console.log(address.countries + "\n" + address.citys)