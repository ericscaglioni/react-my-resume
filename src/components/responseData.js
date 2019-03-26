import profilePic from '../img/profile.jpg';

const responseData = 
{
    "profile": {
        "firstName": "Eric",
        "lastName": "Scaglioni",
        "img": profilePic,
        "email": "ericsf34@gmail.com",
        "phoneNumber": "+55 16 98857-8140",
        "address": {
            "zipCode": "14090-102",
            "street": "Guarujá",
            "number": "730",
            "district": "Jd. Paulista",
            "city": "Ribeirão Preto",
            "state": "SP",
            "country": "Brasil"
        },
        "urls": {
            "linkedIn": "https://www.linkedin.com/in/eric-ferreira-700900a3/",
            "github": "https://www.github.com/ericscaglioni"
        },
        "aboutPt": "Desenvolver Web Full Stack com mais de 3 anos de experiência em ASP.NET MVC, C#, CSS, JavaScript, JQuery, HTML e bancos de " +
                    "dados Oracle e SQL Server. Experiência também de 4 anos desenvolvendo aplicações Desktop em VB.NET e C#. " + 
                    "Por ser dedicado e ter muita vontade aprender, busco desafios profissionais. " + 
                    "Sou extrovertido e tenho facilidade pra trabalhar em equipe e também gosto de me envolver e ajudar meus colegas a encontrarem a melhor solução para um determinado problema. " +
                    "Busco uma vaga de Full Stack que envolva bastante Front End com React ou Angular!",
        "aboutEn": "Full Stack Web Developer"
    },
    "links": [
        {
            "id": "about",
            "key": "menu.about"
        },
        {
            "id": "experience",
            "key": "menu.experiences"
        },
        {
            "id": "education",
            "key": "menu.education"
        },
        {
            "id": "skills",
            "key": "menu.skills"
        },
        {
            "id": "interests",
            "key": "menu.interests"
        }
    ]
};

export default responseData;