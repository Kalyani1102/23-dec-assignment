//Check from the objects.js file g_class. Give the list of students which have greater than or equal to 85 marks.


alert("This program will check That which student get more than 85 marks")

var f_class = {
    name: "Dec21WebFundamentals",
    instructor: {
      name: "Kalyani",
      subject: "MERN",
    },
    students: [
      {
        name: "Anu",
        marks: 82,
      },
      {
        name: "Subham",
        marks: 80,
      },
      {
        name: "Ankit",
        marks: 67,
      },
      {
        name: "Ruma",
        marks: 79,
      },
      {
        name: "Manshi",
        marks: 90,
      },
      {
        name: "Vineet",
        marks: 85,
      },
      {
        name: "Geeta",
        marks: 89,
      },
    ],
  };
  for (var i = 0; i < g_class.students.length; i = i + 1) {
    if (f_class.students[i].marks >= 85) {
      alert(f_class.students[i].name);
      console.log(f_class.students[i].name);
    }
  }