var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yaho.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov2313@mail.ru"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov.prohor123@yahoo.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov213333333331@yahoo.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@yandex.ru"
    },
];

var regex = /^[a-z0-9]+(\.[a-z0-9]+)?@(gmail|yahoo)\.com$/i;

var trustedEmails = arr.filter(obj => regex.test(obj.email));

console.log(trustedEmails);