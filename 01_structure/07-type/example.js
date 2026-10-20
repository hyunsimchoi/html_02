var integer = 10;
var float = 3.14;
var negative = 5;

console.log(integer, float, negative);
console.log(typeof integer, typeof float, typeof negative);

console.log(10 /3);
console.log(10 /0);
console.log("abc" * 2);
console.log(typeof Nan);

// 문자열 타입

var single = '작은 따옴표';
var double = "큰 따옴표";
var backtick = '백틱';

console.log(single, double, backtick);
console.log("줄바꿈을 하고 싶으면\n이렇게 하면 됩니다.");
conslol.log(single.lengh); // string의 글자 수

// 템플릿 리터럴

var userName = "홍길동";
var age = 20;
var user = {
    id: 40,
    name: "김철수";
    phoneNumber: "010-1234-5678"
};

console.log(`${userName}님의 나이는 ${age}입니다.`);
console.log(`${user.Name}님의 전화번호는 ${user.phoneNumbur}입니다.`);
console.log(`${userName}님은 내년에 ${age = 1}살이 됩니다.`);

// 템플릿 리터럴은 "밧"을 string 안에 출력해주는 것
// age + 1 이라는 '평가'된 '값'을 출력하는데 무리가 없음



//블리언(Boolean)

var isStudent = true;
var hasCar = false;


//이 화면이 관리자인가요 => isAdmin = true

console.log(10 > 5);

