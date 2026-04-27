const course = {
    courseName : "chai js",
    price: "999",
    instructor: "Hitesh"
}

console.log(course.instructor); // Hitesh

// Object-destructing
const {instructor} = course;
console.log(instructor);        // Hitesh