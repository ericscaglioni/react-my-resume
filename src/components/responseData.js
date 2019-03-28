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
        "experiences": [
            {
                "company": "empresa",
                "jobDescription": "eruehreh riheirheihreh riuehrhe iuhrieuhr",
                "jobTitle": "Teste",
                "beginingDate": "Março, 2018",
                "endingDate": "Setembro, 2018"
            }
        ],
        "urls": {
            "linkedIn": "https://www.linkedin.com/in/eric-ferreira-700900a3/",
            "github": "https://www.github.com/ericscaglioni"
        },
        "aboutPt": "Desenvolvedor Web Full Stack com mais de 3 anos de experiência em ASP.NET MVC, C#, CSS, JavaScript, JQuery, HTML e bancos de " +
                    "dados Oracle e SQL Server. Possuo também experiência de 4 anos desenvolvendo aplicações Desktop em VB.NET e C#. " + 
                    "Por ser dedicado e ter muita vontade aprender, busco desafios profissionais. " + 
                    "Sou extrovertido, tenho facilidade pra trabalhar em equipe e também gosto de me envolver e ajudar meus colegas a encontrarem a melhor solução para um determinado problema. " +
                    "Busco uma vaga de Full Stack que envolva bastante Front End com React ou Angular!",
        "aboutEn": "Full Stack Developer with more than 3 years of experience in ASP.NET MVC, C#, CSS, JavaScript, JQuery, HTML, PLSQL (Oracle) and SQL Server. " +
                    "I also have 4 years of experience developing desktop applications both in VB.NET and C#. " +
                    "As a committed person who has a strong will to learn, I've always looked for professional challenges. " +
                    "I'm outgoing and because of that I've no troubles working on a team and I love getting involved and helping my colleagues to find out the best solution for a problem. " +
                    "I look for a position of Full Stack Developer that involves Front End with React or Angular!"
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