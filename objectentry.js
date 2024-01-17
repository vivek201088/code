const user={
    username:"vivek",
    password:"admin123",
    age:35,
    sex:'M'
}

//convert object to array
/*it return an nested array 
[
  [ 'username', 'vivek' ],
  [ 'password', 'admin123' ],
  [ 'age', 35 ],
  [ 'sex', 'M' ]
]
*/

const newArr=Object.entries(user)
console.log(newArr);