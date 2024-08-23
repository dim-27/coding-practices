function getGrade (s1, s2, s3) {
  // Code here
  let avg = (s1+s2+s3)/3;
  
  switch(true) {
      case(avg >= 90 && avg<= 100):
      return "A";
      case(avg >= 80 && avg< 90):
      return "B";
      case(avg >= 70 && avg< 80):
      return "C";
      case(avg >= 60 && avg< 70):
      return "D";
      case(avg >= 0 && avg< 60):
      return "F";
  }
}