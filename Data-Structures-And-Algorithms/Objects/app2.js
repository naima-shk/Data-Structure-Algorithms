//Now, using the same object, change the userName to your name, fatherName to your father’s name, and className to your class.


let userObject = {
	userName: 'Philip',
	fatherName: 'Norman',
	className: 'four',
};
let renmeObjectKey = (userObject) => {
    userObject.yourName = userObject.userName;
    userObject.fathersName = userObject.fatherName;
    userObject.class = userObject.className;
    delete userObject.userName;
    delete userObject.fatherName;
    delete userObject.className;
  };
  renmeObjectKey(userObject);
  console.log(userObject);



