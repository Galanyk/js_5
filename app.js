const users = [{
        firstName: 'Bob',
        lastName: 'Smith',
        age: 27,
        address: {
            country: 'USA',
            city: 'LA'
        },
        marks: [2, 3, 5, 4, 2, 3, 1, 5]
    },

    {
        firstName: 'July',
        age: 21,
        address: {
            country: 'Ukraine',
            city: 'Kiev'
        },
        marks: [4, 4, 5, 4, 3, 4, 3, 5]
    },

    {
        firstName: 'Monya',
        lastName: 'Pulman',
        age: 15,
        address: {
            country: 'Ukraine',
            city: 'Lviv'
        },
        marks: [3, 4, 5, 3, 1, 2, 4, 6]
    },

    {
        firstName: 'Vsevolod',
        age: 19,
        address: {
            country: 'Ukraine',
            city: 'Lviv'
        },
        marks: [3, 4, 5, 3, 1, 2, 4, 6]
    },

    {
        firstName: 'July',
        age: 54,
        address: {
            country: 'Ukraine',
            city: 'Kiev'
        },
        marks: [4, 4, 5, 4, 3, 4, 3, 5]
    },
];

// 4.1
const isNotAdult = users.filter(user => user.age < 18);
console.log(isNotAdult);

// 4.2
const foreignStudent = users.filter(({ address }) => address.country !== 'Ukraine');
console.log(foreignStudent);

// 4.3
const isAdultNew = users.map((user) => ({...user,
    isAdult: user.age >= 18,
    averageMark: user.marks.reduce((sum, marks) => sum + marks, 0) / user.marks.length
}));
console.log(isAdultNew);

// 4.4
const averageMark = users.reduce((acc, user) => {
    return (acc += user.marks.reduce((marks, mark) =>
        (marks += mark), 0) / user.marks.length);
}, 0) / users.length;
console.log(averageMark);

// 4.5
const address = users.reduce((acc, { address }, ) => {
    acc.countries.push(address.country),
        acc.citys.push(address.city);
    return acc;
}, {
    countries: [],
    citys: []
});
console.log(address.countries + "\n" + address.citys);

// 5.1
function copyFirstLastName(listUsers) {
    if (listUsers.length < 1 || listUsers.constructor.name !== 'Array') {
        alert("Collection is empty")
        return listUsers;
    }

    return listUsers.map((user) => {
        const tempUser = {
            firstName: user.firstName ? user.firstName : 'Dou',
            lastName: user.lastName ? user.lastName : 'Dou'
        };
        return tempUser;
    });
}
const user = 6;
const objectNew1 = copyFirstLastName(user);
console.log(objectNew1);

// 5.2 

function returnObjectKeys(users) {
    if (users.length < 1 || users.constructor.name !== 'Array') {
        alert("Collection is empty")
        return users;
    }

    return users.filter(user => Object.keys(user).length > 3);

}

const objectNew2 = returnObjectKeys(users);
console.log(objectNew2);

// 5.3
function filterObjectByType(collectionUsers) {
    if (collectionUsers.length < 1 || collectionUsers.constructor.name !== 'Array') {
        alert("Collection is empty")
        return users;
    }
    return collectionUsers.filter(user => {
        const tempUser = Object.values(user);
        return (
            tempUser.some((val) => typeof val === "number") &&
            tempUser.some((val) => typeof val === "string")
        );
    });
}

const newUsers = filterObjectByType(users);
console.log(newUsers);