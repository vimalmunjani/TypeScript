var FbAbout = /** @class */ (function () {
    function FbAbout(name, email, phoneNo, DOB, gender) {
        var _this = this;
        this.setName = function (name) {
            _this.name = name;
        };
        this.getName = function () {
            return _this.name;
        };
        this.setEmail = function (email) {
            _this.emails.push(email);
        };
        this.getEmail = function () {
            return _this.emails;
        };
        this.setPhoneNo = function (num) {
            _this.phoneNos.push(num);
        };
        this.getPhoneNos = function () {
            return _this.phoneNos;
        };
        this.setDOB = function (dob) {
            _this.DOB = dob;
        };
        this.getDOB = function () {
            return _this.DOB;
        };
        this.setGender = function (gender) {
            _this.gender = gender;
        };
        this.getGender = function () {
            return _this.gender;
        };
        this.setWork = function (Work) {
            _this.work.push(Work);
        };
        this.getWork = function () {
            return _this.work;
        };
        this.setprofessionalSkills = function () {
            var skill = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                skill[_i] = arguments[_i];
            }
            (_a = _this.professionalSkills).push.apply(_a, skill);
            var _a;
        };
        this.getprofessionalSkills = function () {
            return _this.professionalSkills;
        };
        this.setuniversity = function (university) {
            _this.university.push(university);
        };
        this.getuniversity = function () {
            return _this.university;
        };
        this.setSchool = function (school) {
            _this.school.push(school);
        };
        this.getSchool = function () {
            return _this.school;
        };
        this.setPlace = function (place) {
            _this.placesLived.push(place);
        };
        this.getPlace = function () {
            return _this.placesLived;
        };
        this.setLanguage = function () {
            var language = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                language[_i] = arguments[_i];
            }
            (_a = _this.languagesKnown).push.apply(_a, language);
            var _a;
        };
        this.getlanguagesKnown = function () {
            return _this.languagesKnown;
        };
        this.setReligiousView = function (view) {
            _this.religiousViews.push(view);
        };
        this.getRelgiousView = function () {
            return _this.religiousViews;
        };
        this.setPoliticalViews = function (view) {
            _this.politicalViews.push(view);
        };
        this.getPoliticalViews = function () {
            return _this.politicalViews;
        };
        this.setRelation = function (relation) {
            _this.relation.push(relation);
        };
        this.getRelations = function () {
            return _this.relation;
        };
        this.setRelationShipStatus = function (status) {
            _this.relationShipStatus = status;
        };
        this.getRelationShipStatus = function () {
            return _this.relationShipStatus;
        };
        this.setAboutSelf = function (about) {
            _this.aboutSelf = about;
        };
        this.getAboutSelf = function () {
            return _this.aboutSelf;
        };
        this.setNickName = function () {
            var name = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                name[_i] = arguments[_i];
            }
            (_a = _this.nicknames).push.apply(_a, name);
            var _a;
        };
        this.getNickNames = function () {
            return _this.nicknames;
        };
        this.setFavQuote = function (quote) {
            _this.favQuote = quote;
        };
        this.getFavQuote = function () {
            return _this.favQuote;
        };
        this.setLifeEvent = function () {
            var event = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                event[_i] = arguments[_i];
            }
            (_a = _this.lifeEvents).push.apply(_a, event);
            var _a;
        };
        this.getLifeEvents = function () {
            return _this.lifeEvents;
        };
        this.emails = [];
        this.phoneNos = [];
        this.emails.push(email);
        this.phoneNos.push(phoneNo);
        this.DOB = DOB;
        this.gender = gender;
        this.name = name;
        this.work = [];
        this.professionalSkills = [];
        this.university = [];
        this.school = [];
        this.placesLived = [];
        this.languagesKnown = [];
        this.religiousViews = [];
        this.politicalViews = [];
        this.relation = [];
        this.nicknames = [];
        this.lifeEvents = [];
    }
    return FbAbout;
}());
var tempName = 'Vimal Munjani';
var tempNo = 9167456998;
var tempEmail = 'vimalmunjani94@gmail.com';
var tempDOB = '30-Aug-1994';
var tempGender = 'male';
var fbAbout = new FbAbout(tempName, tempEmail, tempNo, tempDOB, tempGender);
var tempWork = {
    company: 'Accenture',
    designation: 'ASE',
    startYear: 2016,
    endYear: 'Present'
};
var tempUniversity = {
    universityname: 'Mumbai University',
    startYear: 2012,
    endYear: 2016,
    course: 'IT Engineering',
    miscDetails: 'Accredited by NAAC'
};
var tempSchool = {
    schoolName: 'BMHS',
    startYear: 1996,
    endYear: 20110
};
var tempPlaceLived = {
    location: 'Mumbai',
    fromYear: 1994,
    toYear: 'Present',
    isHomeTown: true,
    isCurrent: true
};
var tempReligiousView = "Science without religion is lame, religion without science is blind";
var tempPoliticalView = "We need to reject any politics that targets people because of race or religion";
var tempRelation = {
    name: "kajal Munjani",
    relation: "sister"
};
var tempLifeEvent1 = {
    eventName: "Graduated from Atharva College of Engineering",
    date: "May 2016"
};
var tempLifeEvent2 = {
    eventName: "started working at Accenture",
    date: "Nov 2016"
};
fbAbout.setWork(tempWork);
fbAbout.setprofessionalSkills('Java', 'SQL', 'Mongo DB');
fbAbout.setuniversity(tempUniversity);
fbAbout.setSchool(tempSchool);
fbAbout.setPlace(tempPlaceLived);
fbAbout.setLanguage('English', 'Hindi', 'Gujarati', 'Marathi');
fbAbout.setReligiousView(tempReligiousView);
fbAbout.setPoliticalViews(tempPoliticalView);
fbAbout.setRelation(tempRelation);
fbAbout.setRelationShipStatus("single");
fbAbout.setAboutSelf("Excited to unbox surprises of life ");
fbAbout.setNickName('vimi', 'x', 'y');
fbAbout.setFavQuote("Success is not final; failure is not fatal: It is the courage to continue that counts");
fbAbout.setLifeEvent(tempLifeEvent1, tempLifeEvent2);
console.log(fbAbout.getLifeEvents());
console.log("---------------------------------FB About----------------------------------------\n\nName : " + fbAbout.getName() + "\nDOB : " + fbAbout.getDOB() + "\nGender : " + fbAbout.getGender() + "\nEmails : " + fbAbout.getEmail() + "\nPhone Nos : " + fbAbout.getPhoneNos() + "\nWork : " + fbAbout.getWork() + "\nProfessional Skills : " + fbAbout.getprofessionalSkills() + "\nUniversity : " + fbAbout.getuniversity() + "\nSchool : " + fbAbout.getSchool() + "\nPlaces Lived : " + fbAbout.getPlace() + "\nLanguages Known : " + fbAbout.getlanguagesKnown() + "\nReligious Views : " + fbAbout.getRelgiousView() + "\nPolitical Views : " + fbAbout.getPoliticalViews() + "\nRelations : " + fbAbout.getRelations() + "\nRelationShip Status : " + fbAbout.getRelationShipStatus() + "\nAbout YourSelf : " + fbAbout.getAboutSelf() + "\nNick Names : " + fbAbout.getNickNames() + "\nFavourite Quotes : " + fbAbout.getFavQuote() + "\nLife Events : " + fbAbout.getLifeEvents() + "\n\n");
console.log("Work :");
console.log(fbAbout.getWork());
console.log("University :");
console.log(fbAbout.getuniversity());
console.log("School :");
console.log(fbAbout.getSchool());
console.log("Places Lived :");
console.log(fbAbout.getPlace());
console.log("Relations :");
console.log(fbAbout.getLifeEvents());
var displayDetails = "\n\nName : " + fbAbout.getName() + "\nDOB : " + fbAbout.getDOB() + "\nGender : " + fbAbout.getGender() + "\nEmails : " + fbAbout.getEmail() + "\nPhone Nos : " + fbAbout.getPhoneNos() + "\nWork : " + console.log(fbAbout.getWork()) + "\nProfessional Skills : " + fbAbout.getprofessionalSkills() + "\nUniversity : " + fbAbout.getuniversity() + "\nSchool : " + fbAbout.getSchool() + "\nPlaces Lived : " + fbAbout.getPlace() + "\nLanguages Known : " + fbAbout.getlanguagesKnown() + "\nReligious Views : " + fbAbout.getRelgiousView() + "\nPolitical Views : " + fbAbout.getPoliticalViews() + "\nRelations : " + fbAbout.getRelations() + "\nRelationShip Status : " + fbAbout.getRelationShipStatus() + "\nAbout YourSelf : " + fbAbout.getAboutSelf() + "\nNick Names : " + fbAbout.getNickNames() + "\nFavourite Quotes : " + fbAbout.getFavQuote() + "\nLife Events : " + fbAbout.getLifeEvents() + "\n\n";
document.getElementById("id1").innerText = "The fields Work , University , School , Places Lived , Relations and \nLife Events are not diaplayed on the HTML page as I have used inferface for that. The above field can be found in console.\n\nDisplay Details -\n" + displayDetails + "\n";
