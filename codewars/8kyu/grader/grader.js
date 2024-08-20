const getGrades = function grader(score) {
  switch(true) {
      case (score >= 0.9):
        return "A";
      case(score  >= 0.8):
        return "B";
      case (score >= 0.7):
        return "C";
      case(score >= 0.6):
        return "D";
      case(score > 1):
        return "F";
      default:
        return "F";
  }
}

export {getGrades}