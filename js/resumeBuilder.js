var bio = {
	name : "Feras Bin Hussain",
	role :"Web Developer", 
	contacts: {
    mobile: '966545820593',
    email: 'FerasBinHhussain@gmail.com',
    github: 'FerasBinHhussain',
    location: 'Riyadh'
    },
    welcomeMessage: "King Saud Uni Data Science student and android Developer certificied at udacity",
    skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL',
           'User Interface','Algorithms', 'Front-end Development',
           ],
	biopic: 'images/feras.jpg',

 display: function() {
    var formattedName = HTMLheaderName.replace('%data%', bio.name);
    var formattedRole = HTMLheaderRole.replace('%data%', bio.role);

    
    var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
    var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
    var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
   

    var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

    $('#header').prepend(formattedName + formattedRole);
    $('#topContacts, #footerContacts').append(formattedEmail + formattedGithub );
    $('#header').append(formattedBioPic);
    $('#header').append(formattedWelcomeMessage);

    if (bio.skills.length > 0) {
      $('#header').append(HTMLskillsStart);

      for (var i = 0, len = bio.skills.length; i < len; i++) {
        var formattedSkills = HTMLskills.replace('%data%', bio.skills[i]);

        $('#skills').append(formattedSkills);
      }
    }
  }
};

bio.display();

var education = {
  schools: [
    {
      'name': 'KSU - King Saud univectiy',
      'location': 'almuzahmyah, Riyadh',
      'degree': 'Bachelor of Computer, Data Science',
      'majors': ['Data Science'],
      'dates': '2013 - Until now',
      'url': 'http://ksu.edu.sa/'
    }
  ],
  onlineCourses: [
   {
     'title': 'Junior Android Developer',
     'school': 'Udacity',
     'dates': 'july 2017',
     'url': 'https://printer.udacity.com/certificate/nd803'
   }
  ],
  display: function() {
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
      for (var i = 0; i < education.schools.length; i++) {
        var formattedName = HTMLschoolName.replace('%data%', education.schools[i].name);
        var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree);
        var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[i].dates);
        var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);
        var formattedNameDegree = formattedName + formattedDegree;

        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(formattedNameDegree);
        $('.education-entry:last').append(formattedSchoolDates);
        $('.education-entry:last').append(formattedLocation);

        for (var j = 0; j < education.schools[i].majors.length; j++) {
          var formattedMajor = HTMLschoolMajor.replace('%data%', education.schools[i].majors[j]);

          $('.education-entry:last').append(formattedMajor);
        }
      }

      $('#education').append(HTMLonlineClasses);

      for (var k = 0; k < education.onlineCourses.length; k++) {
        var formattedTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[k].title).replace('#', education.onlineCourses[k].url);
        var formattedSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[k].school);
        var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[k].dates);
        var formattedUrl = HTMLonlineURL.replace('%data%', education.onlineCourses[k].url);
        var formattedTitleSchool = formattedTitle + formattedSchool;

        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(formattedTitleSchool);
        $('.education-entry:last').append(formattedOnlineDates);
        $('.education-entry:last').append(formattedUrl);
      }
    }
  }
};

education.display();

var work = {
  jobs: [
    {
      employer: 'King Saud Uni',
      title: 'Computer Data Science',
      location: 'Riyadh',
      dates: 'September 2013 - Until now',
      description: "Data science is a 'concept to unify statistics, data analysis and their related methods' in order to 'understand and analyze actual phenomena' with data. It employs techniques and theories drawn from many fields within the broad areas of mathematics, statistics, information science, and computer science, in particular from the subdomains of machine learning, classification, cluster analysis, data mining, databases, and visualization."
    },
    {
      employer: 'King Saud Uni',
      title: 'Student Console',
      location: 'Riyadh',
      dates: 'September 2015 - Until now',
      description: "like making student live in the univectiy easer"
          }
  ],
 
  display: function() {
    if (work.jobs.length > 0) {
      for (var i = 0, len = work.jobs.length; i < len; i++) {
        var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[i].title);
        var formattedDates = HTMLworkDates.replace('%data%', work.jobs[i].dates);
        var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[i].location);
        var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[i].description);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $('#workExperience').append(HTMLworkStart);
        $('.work-entry:last').append(formattedEmployerTitle);
        $('.work-entry:last').append(formattedDates);
        $('.work-entry:last').append(formattedLocation);
        $('.work-entry:last').append(formattedDescription);
      }
    }
  }
};

work.display();

var projects = {
  projects: [
    {
      'title': 'Udacity Portfolio Site',
      'dates': 'Jone 2017',
      'description': 'This project is the first project of the Udacity Front-end Nonodegree Program. It is a simple one page portfolio featuring responsive design using the bootstrap framework.',
      'images': ['images/rsz_portfolio1.png', 'images/rsz_portfolio2.png']
    },
    
    {
      'title': 'QuizApp - android app',
      'dates': 'march 2017',
      'description': 'It was the third app in Android Application Development by udacity',
      'images': ['images/rsz_quizapp.png']
    },
    {
      'title': 'Tour Guide - android app',
      'dates': 'April 2017',
      'description': 'It was the sixth app in Android Application Development by udacity.',
      'images': ['images/rsz_guidetour.png']
    }
  ],
  display: function() {
    if (projects.projects.length > 0) {
      for (var i = 0; i < projects.projects.length; i++) {
        var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title);
        var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
        var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description);

        $('#projects').append(HTMLprojectStart);
        $('.project-entry:last').append(formattedTitle);
        $('.project-entry:last').append(formattedDates);
        $('.project-entry:last').append(formattedDescription);

        for (var j = 0; j < projects.projects[i].images.length; j++) {
          var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[i].images[j]);

          $('.project-entry:last').append(formattedImage);
        }
      }
    }
  }
};
  
projects.display();

$('#mapDiv').append(googleMap);

