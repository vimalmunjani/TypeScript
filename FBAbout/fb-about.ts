interface work{
    company :string,
    designation:string,
    startYear:number,
    endYear:any
}

interface university{
    universityname : string,
    startYear : number,
    endYear : any,
    course:string,
    miscDetails?:string
}

interface school{
    schoolName : string,
    startYear : number,
    endYear : any
}

interface placesLived{
    location : string,
    fromYear : number,
    toYear : any,
    isHomeTown? : boolean,
    isCurrent? : boolean
}

interface relation{
    name:string,
    relation:string
}

interface lifeEvent{
    date:string,
    eventName:string;
}

class FbAbout{

    private work:work[];
    private professionalSkills :string[];
    private university:university[];
    private school:school[];
    private placesLived:placesLived[];
    private emails:string[];
    private phoneNos:number[];
    private website:string[];
    private DOB:string;
    private gender:string;
    private name: string;
    private languagesKnown:string[];
    private religiousViews:string[];
    private politicalViews:string[];
    private relation:relation[];
    private relationShipStatus : string;
    private aboutSelf : string;
    private nicknames:string[];
    private favQuote:string;
    private lifeEvents :lifeEvent[];

    constructor(name:string,email:string,phoneNo:number,DOB:string,gender:string){

        this.emails =[];
        this.phoneNos=[];
        this.emails.push(email);
        this.phoneNos.push(phoneNo);
        this.DOB = DOB;
        this.gender = gender;
        this.name = name ;

        this.work = [];
        this.professionalSkills = [];
        this.university=[];
        this.school=[];
        this.placesLived=[];
        this.languagesKnown = [];
        this.religiousViews = [];
        this.politicalViews = [];
        this.relation=[];
        this.nicknames =[];
        this.lifeEvents =[];
    }

    setName = (name:string):void =>{
        this.name = name;
    }

    getName = ():string =>{
        return this.name;
    }
   
    setEmail = (email:string) =>{
        this.emails.push(email);
    }

    getEmail = ():string[] =>{
        return this.emails;
    }

    setPhoneNo = (num:number):void =>{
        this.phoneNos.push(num);
    }

    getPhoneNos = ():number[] =>{
        return this.phoneNos;
    }

    setDOB = (dob:string):void =>{
        this.DOB = dob;
    }

    getDOB = ():string =>{
        return this.DOB;
    }

    setGender = (gender:string):void =>{
        this.gender =gender;
    }

    getGender = ():string =>{
        return this.gender;
    }

    setWork = (Work : work):void =>{
        this.work.push(Work);
    }

    getWork = ():work[]=>{
        return this.work;
    }

    setprofessionalSkills = (...skill:string[]):void=>{
        this.professionalSkills.push(...skill);
    }

    getprofessionalSkills=():string[]=>{
        return this.professionalSkills;
    }

    setuniversity=(university:university):void =>{
        this.university.push(university);
    }

    getuniversity=():university[]=>{
        return this.university;
    }

    setSchool =(school : school):void=>{
        this.school.push(school);
    }

    getSchool=():school[]=>{
        return this.school;
    }   

    setPlace = (place:placesLived):void=>{
        this.placesLived.push(place);
    }

    getPlace = ():placesLived[]=>{
        return this.placesLived;
    }

    setLanguage = (...language:string[]):void =>{
        this.languagesKnown.push(...language);
    }

    getlanguagesKnown = ():string[]=>{
        return this.languagesKnown;
    }

    setReligiousView = (view:string):void=>{
        this.religiousViews.push(view);
    }

    getRelgiousView = ():string[] =>{
        return this.religiousViews;
    }

    setPoliticalViews = (view:string):void=>{
        this.politicalViews.push(view);
    }

    getPoliticalViews = ():string[]=>{
        return this.politicalViews;
    }

    setRelation = (relation:relation):void=>{
        this.relation.push(relation);
    }

    getRelations = ():relation[]=>{
        return this.relation;
    }

    setRelationShipStatus = (status:string):void =>{
        this.relationShipStatus = status;
    }

    getRelationShipStatus = ():string =>{
        return this.relationShipStatus;
    }

    setAboutSelf = (about:string):void =>{
        this.aboutSelf = about;
    }

    getAboutSelf = ():string =>{
        return this.aboutSelf;
    }

    setNickName = (...name:string[]):void =>{
        this.nicknames.push(...name);
    }

    getNickNames = ():string[] =>{
        return this.nicknames;
    }

    setFavQuote =(quote:string):void=>{
        this.favQuote = quote;
    }

    getFavQuote = ():string =>{
        return this.favQuote;
    }

    setLifeEvent = (...event:lifeEvent[]):void =>{
        this.lifeEvents.push(...event);
    }

    getLifeEvents = ():lifeEvent[] =>{
        return this.lifeEvents;
    }
}


let tempName:string='Vimal Munjani';
let tempNo:number = 9167456998;
let tempEmail:string = 'vimalmunjani94@gmail.com';
let tempDOB:string = '30-Aug-1994';
let tempGender = 'male';
let fbAbout = new FbAbout(tempName,tempEmail,tempNo,tempDOB,tempGender);

let tempWork:work={
    company:'Accenture',
    designation:'ASE',
    startYear:2016,
    endYear:'Present'
}

let tempUniversity:university={
    universityname:'Mumbai University',
    startYear:2012,
    endYear:2016,
    course:'IT Engineering',
    miscDetails : 'Accredited by NAAC'
}

let tempSchool:school={
    schoolName:'BMHS',
    startYear: 1996,
    endYear:20110
}

let tempPlaceLived: placesLived = {
    location:'Mumbai',
    fromYear:1994,
    toYear:'Present',
    isHomeTown : true,
    isCurrent : true
}

let tempReligiousView:string= "Science without religion is lame, religion without science is blind";

let tempPoliticalView:string = "We need to reject any politics that targets people because of race or religion";

let tempRelation :relation ={
    name:"kajal Munjani",
    relation:"sister"
}

let tempLifeEvent1:lifeEvent={
    eventName : "Graduated from Atharva College of Engineering",
    date : "May 2016"
}

let tempLifeEvent2:lifeEvent={
    eventName:"started working at Accenture",
    date: "Nov 2016"
}

fbAbout.setWork(tempWork);
fbAbout.setprofessionalSkills('Java','SQL','Mongo DB');
fbAbout.setuniversity(tempUniversity);
fbAbout.setSchool(tempSchool);
fbAbout.setPlace(tempPlaceLived);
fbAbout.setLanguage('English','Hindi','Gujarati','Marathi');
fbAbout.setReligiousView(tempReligiousView);
fbAbout.setPoliticalViews(tempPoliticalView);
fbAbout.setRelation(tempRelation);
fbAbout.setRelationShipStatus("single");
fbAbout.setAboutSelf("Excited to unbox surprises of life ");
fbAbout.setNickName('vimi','x','y');
fbAbout.setFavQuote("Success is not final; failure is not fatal: It is the courage to continue that counts");
fbAbout.setLifeEvent(tempLifeEvent1,tempLifeEvent2);

console.log(fbAbout.getLifeEvents());

console.log(`---------------------------------FB About----------------------------------------

Name : ${fbAbout.getName()}
DOB : ${fbAbout.getDOB()}
Gender : ${fbAbout.getGender()}
Emails : ${fbAbout.getEmail()}
Phone Nos : ${fbAbout.getPhoneNos()}
Work : ${fbAbout.getWork()}
Professional Skills : ${fbAbout.getprofessionalSkills()}
University : ${fbAbout.getuniversity()}
School : ${fbAbout.getSchool()}
Places Lived : ${fbAbout.getPlace()}
Languages Known : ${fbAbout.getlanguagesKnown()}
Religious Views : ${fbAbout.getRelgiousView()}
Political Views : ${fbAbout.getPoliticalViews()}
Relations : ${fbAbout.getRelations()}
RelationShip Status : ${fbAbout.getRelationShipStatus()}
About YourSelf : ${fbAbout.getAboutSelf()}
Nick Names : ${fbAbout.getNickNames()}
Favourite Quotes : ${fbAbout.getFavQuote()}
Life Events : ${fbAbout.getLifeEvents()}

`);
console.log("Work :");
console.log(fbAbout.getWork());
console.log("University :")
console.log(fbAbout.getuniversity());
console.log("School :")
console.log(fbAbout.getSchool());
console.log("Places Lived :");
console.log(fbAbout.getPlace());
console.log("Relations :");
console.log(fbAbout.getLifeEvents());

let displayDetails = `
Name : ${fbAbout.getName()}
DOB : ${fbAbout.getDOB()}
Gender : ${fbAbout.getGender()}
Emails : ${fbAbout.getEmail()}
Phone Nos : ${fbAbout.getPhoneNos()}
Work : ${console.log(fbAbout.getWork())}
Professional Skills : ${fbAbout.getprofessionalSkills()}
University : ${fbAbout.getuniversity()}
School : ${fbAbout.getSchool()}
Places Lived : ${fbAbout.getPlace()}
Languages Known : ${fbAbout.getlanguagesKnown()}
Religious Views : ${fbAbout.getRelgiousView()}
Political Views : ${fbAbout.getPoliticalViews()}
Relations : ${fbAbout.getRelations()}
RelationShip Status : ${fbAbout.getRelationShipStatus()}
About YourSelf : ${fbAbout.getAboutSelf()}
Nick Names : ${fbAbout.getNickNames()}
Favourite Quotes : ${fbAbout.getFavQuote()}
Life Events : ${fbAbout.getLifeEvents()}
`;

document.getElementById("id1").innerText = `The fields Work , University , School , Places Lived , Relations and 
Life Events are not diaplayed on the HTML page as I have used inferface for that. The above field can be found in console.

Display Details -
${displayDetails}
`;