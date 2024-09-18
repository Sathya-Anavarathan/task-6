class Person {
    constructor(
      personName = "joel",
      age = "21",
      email = "example@gmail.com",
      mobileNo = "9990103482",
      streetName = "northstreet",
      area = "semiya Nagar",
      city = "nalumavadi",
      district = "Thoothukudi",
      highestQualification = "B.E",
      schoolName = "James memorial matriculation school",
      sslcMark = "467/500",
      sslcYearOfCompletion = "2017",
      hscMark = "450/600",
      placeOfSchool = "nazreth",
      hscYearOfCompletion = "2020",
      collegeName = "Engineering College",
      department = "Computer Science",
      batch = "2021-2-24",
      cgpa = "6.86",
      university = "Anna University",
      placeOfCollege = "Chennai",
      technicalSkills = "JavaScript",
      companyName = "IBM",
      job = "software Developer",
      workExperience = "2 years"
    ) {
      this.personName = personName;
      this.age = age;
      this.email = email;
      this.mobileNo = mobileNo;
      this.streetName = streetName;
      this.area = area;
      this.city = city;
      this.district = district;
      this.highestQualification = highestQualification;
      this.schoolName = schoolName;
      this.placeOfSchool = placeOfSchool;
      this.sslcMark = sslcMark;
      this.sslcYearOfCompletion = sslcYearOfCompletion;
      this.hscMark = hscMark;
      this.hscYearOfCompletion = hscYearOfCompletion;
      this.collegeName = collegeName;
      this.placeOfCollege = placeOfCollege;
      this.batch = batch;
      this.department = department;
      this.cgpa = cgpa;
      this.university = university;
      this.technicalSkills = technicalSkills;
      this.companyName = companyName;
      this.job = job;
      this.workExperience = workExperience;
    }
    displayPersonalInfo() {
      console.log(
        `:::::: PERSONAL DETAILS :::::
  
        Name => ${this.personName},
        Age => ${this.age},
        email => ${this.email},
        Mobile Number => ${this.mobileNo}.`
      );
      console.log(
        `      Address :
          Street Name => ${this.streetName},
           Area => ${this.area},
            City => ${this.city},
             District => ${this.district}.`
      );
    }
    displaySchoolDetails() {
      console.log(
        `::::::: SCHOOL DETAILS :::::::
  
        School Name => ${this.schoolName},
        City => ${this.placeOfSchool},
        10th MARK => ${this.sslcMark} ,
        10th year of Completion => ${this.sslcYearOfCompletion},
        12th MARK: ${this.hscMark} ,
        12th year of Completion: ${this.hscYearOfCompletion}.
        `
      );
    }
    displayCollegeDetails() {
      console.log(
        `:::::: COLLEGE DETAILS ::::::
        
        College Name => ${this.collegeName},
        city => ${this.placeOfCollege},
        Batch => ${this.batch},
        Department => ${this.department},
        CGPA or grade => ${this.cgpa},
        University => ${this.university}.
        `
      );
    }
    displayWorkDetails() {
      console.log(
        `:::::: WORK DETAILS ::::::
        
        Company Name => ${this.companyName},
        job => ${this.job},
        Working Experience => ${this.workExperience}.
        `
      );
    }
  }
  
  const person1Details = new Person(
    "mano",
    "24",
    "mano@gmail.com",
    "9898976767",
    "B.E",
    "Government Higher Secondary School",
    "467/500",
    "1123/1200",
    "College of Engineering",
    "2016-2020",
    "Electronics and Instrumentation Engineering",
    "6.86",
    "HTML5,CSS3,JavaScript,nodejs",
    "MERN stack developer",
    "3 years"
  );
  
  // console.log(person1Details);
  // console.log(new Person());
  
  const person2details = new Person();
  // person2details.displaySchoolDetails();
  // person2details.displayPersonalInfo();
  // person2details.displayCollegeDetails();
  person2details.displayWorkDetails();