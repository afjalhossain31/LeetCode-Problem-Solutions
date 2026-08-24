// scope
{
  let age = 21; // age ভ্যারিয়েবলটি শুধু এই { }-এর ভেতরেই কাজ করবে
}

function sayAge() {
  age = 22;
}

sayAge();

console.log(age);