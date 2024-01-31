type user={
name:string,
age:number,
email:string
}

type newuser=Omit<user,"eamil">
type antype=Pick<user, 'name'|'age'>
