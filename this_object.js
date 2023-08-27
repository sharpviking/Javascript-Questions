this.a = 5;
function getParam() {
    console.log(this.a)
}


getParam();

let user = +{
    name: "Anand",
    age: 33,
    childObj: {
        newName: "kalahal",
        getDetails() {
            console.log(this.newName, "and", this.name);
        }
    }
}
user.thisObj.getDetails();