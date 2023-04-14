 let message = "ES6 Modules";    // Using Variable

 function user(name)             // Using Func^
{
    console.log(`Hello ${name}`);
}

 class test 
{
    constructor()
    {
        console.log("Constructor Method");    // Using Class
    }
}

// How to Export all (Variable, Function and Class) in one line

export { message , user , test};

// another function (default)

export default function()
{
    console.log("Hello");
}