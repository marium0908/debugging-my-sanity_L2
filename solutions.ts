function multiplyValue(value: number, multiplier?: number): number {
  if (multiplier === undefined) {
    let doubledValue: number = value * 2;
    return doubledValue;
  }
   else {
    let multipliedValue: number = value * multiplier;
    return multipliedValue;
  }
}

function processInput(value: string | number | boolean): string | number {
  if (typeof value === "string") {
    let cleanedString: string = value.trim().toLowerCase();
    return cleanedString; 
   }
  else if (typeof value === "number") {
    let multipliedResult: number = value * 10;
    return multipliedResult;
   } 
  else {
    if (value === true) {
      return "Active";
    } 
    else {
      return "Inactive";
    }
  }
}

function formatCoordinate(
  coordinate: readonly [number, number, string]
): string {
  let latitude: number = coordinate[0];
  let longitude: number = coordinate[1];
  let locationName: string = coordinate[2];
  let finalLocationString: string = `Location: ${locationName} (${latitude}, ${longitude})`;
  return finalLocationString;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  let combinedResultArray: T[] = [];
  for (let i = 0; i < arrays.length; i++) {
    let currentSubArray: T[] = arrays[i];
    for (let j = 0; j < currentSubArray.length; j++) {
      let singleItem: T = currentSubArray[j];
      combinedResultArray.push(singleItem);
    }
  }
  return combinedResultArray;
}

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(
  courses: Course[],
  minStudents: number
): Course[] {
  let safePopularCoursesList: Course[] = [];
  for (let i = 0; i < courses.length; i++) {
    let course: Course = courses[i];
    if (course.isPublished === true) {
      if (course.students >= minStudents) {
        safePopularCoursesList.push(course);
      }
    }
  }
  return safePopularCoursesList;
}

function pluckValues<T, K extends keyof T>(
  items: T[],
  key: K
): T[K][] {
  let extractedValuesArray: T[K][] = [];
  for (let i = 0; i < items.length; i++) {
    let currentObject: T = items[i];
    let singleValue: T[K] = currentObject[key];
    extractedValuesArray.push(singleValue);
  }
  return extractedValuesArray;
}

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    let detailsString: string = `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    return detailsString;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    let roleString: string = `Manager of ${this.department}: ${this.name}`;
    return roleString;
  }
}

function validateAgeAsync(age: number): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    } 
    else {
      let ageValidationError: Error = new Error("Access Denied: Must be 18 or older");
      reject(ageValidationError);
    }
  });
}

function getUniqueNumbers(numbers: number[]): number[] {
  let uniqueNumbers: number[] = [];
  for (let i = 0; i < numbers.length; i++) {
    let currentNumber: number = numbers[i];
    if (uniqueNumbers.includes(currentNumber) === false) {
      uniqueNumbers.push(currentNumber);
    }
  }
  return uniqueNumbers;
}

interface Product {
  id: number;
  name: string;
  price: number;
}

function updateProductPrice(
  product: Product,
  newPrice: number
): Product {
  let updatedProduct: Product = {
    ...product,
    price: newPrice
  };
  return updatedProduct;
}
