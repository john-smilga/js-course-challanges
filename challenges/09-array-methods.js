// have access to students from data.js
const updatedStudents = students.map(function (student) {
  student.role = 'student';
  return student;
});

// console.log(updatedStudents);

const highScores = students.filter(function (student) {
  //  a value that coerces to true - MDN Docs
  // if (student.score >= 80) {
  //   return student;
  // }
  // if (student.score >= 80) return student;
  return student.score >= 80;
});

// console.log(highScores);

const specificId = students.find(function (student) {
  return student.id === 1;
});

// console.log(specificId);

const averageScore =
  students.reduce(function (scoresTotal, student) {
    return scoresTotal + student.score;
  }, 0) / students.length;

// console.log(averageScore);

const survey = students.reduce(function (survey, student) {
  const favSubject = student.favoriteSubject;
  // console.log(favSubject);
  if (survey[favSubject]) {
    survey[favSubject] = survey[favSubject] + 1;
  } else {
    survey[favSubject] = 1;
  }
  return survey;
}, {});

// console.log(survey);
