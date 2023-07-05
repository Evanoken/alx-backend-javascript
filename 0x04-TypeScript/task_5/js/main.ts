interface MajorCredits {
  brand: "MajorCredits";
  credits: number;
}

interface MinorCredits {
  brand: "MinorCredits";
  credits: number;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    brand: "MajorCredits",
    credits: subject1.credits + subject2.credits,
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    brand: "MinorCredits",
    credits: subject1.credits + subject2.credits,
  };
}

// Test the functions
const majorSubject1: MajorCredits = {
  brand: "MajorCredits",
  credits: 3,
};

const majorSubject2: MajorCredits = {
  brand: "MajorCredits",
  credits: 4,
};

const minorSubject1: MinorCredits = {
  brand: "MinorCredits",
  credits: 2,
};

const minorSubject2: MinorCredits = {
  brand: "MinorCredits",
  credits: 1,
};

const sumMajor = sumMajorCredits(majorSubject1, majorSubject2);
console.log("Sum of major credits:", sumMajor);

const sumMinor = sumMinorCredits(minorSubject1, minorSubject2);
console.log("Sum of minor credits:", sumMinor);
