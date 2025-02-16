<script setup>
// const message = "There";
const message = {name: "Kim", age: 20};
const page = "history";
let loading = true;

const parent = "fruits";
const child = "item";

// 클래스명에 여러개를 입력할 때 문자열을 공백으로 구분하거나 배열을 생성한다
// class가 아닌 title이나 alt등에 사용하면 공백이아닌 쉼표로 구분된다
// 개발자 도구에서 엘리먼트를 보면서 확인할 수 있다
const fruits = "apple avocado"
const fruitArr = ["banana", "blueberry"]

// 클래스 속성은 객체로도 지정할 수 있다
const visible = {fruit: true}
const hidden = {fruit: false}

// css스타일도 문자열로 입력해서 반환이 가능하다
// 하지만 객체로 입력하는 편이 더 직관적이다.
// const rect = "background:red;width:200px;height:100px"
const rect = {
  background: "red",
  width: "200px",
  height: "100px"
}

const carArr = ["car1", "car2", "car3"];

// 많은 양의 데이터 반복 출력하기
const members = [
  {id: 1, name: "김유신"},
  {id: 2, name: "강감찬"},
  {id: 3, name: "이순신"},
  {id: 4, name: "권율"},
]

const pop = (message) => {
  window.alert(message);
}

const run = () => {
  window.alert("run");
};

</script>

<template>
<!--  <div>Hello {{message}}</div>-->

  <div>
    <span>Hello </span>
<!--    <span v-text="message"></span>-->
    <span v-text="JSON.stringify(message)"></span> <!-- 객체를 출력할때는 JSON으로 변환해야한다 -->
  </div>
  <br/>
<!--  <div v-bind:id="page">HISTORY PAGE</div> v-bind는 :으로 생략할 수 있다-->
  <div :id="page">HISTORY PAGE</div>
  <br/>
  <input type="text" placeholder="아이디" :readonly="loading"/>
  <input type="password" placeholder="비밀번호" :readonly="loading">
  <button :disabled="loading">로그인</button>
  <br/>

  <ul :class="parent">
    <li :class="child">사과</li>
    <li :class="child">바나나</li>
    <li :class="child">딸기</li>
    <li :class="child">배</li>
  </ul>

  <br/>
  <div :class="fruits">사과 / 아보카도</div>
  <div :class="fruitArr">바나나 / 블루베리</div>
  <div :title="fruitArr">바나나 / 블루베리</div>

  <br/>
  <!-- 객체의 값이 참일때만 키를 클래스에 반영한다 -->
  <div :class="visible">사과</div>
  <div :class="hidden">오이</div>
  <div :class="{fruit: true}">배</div>
  <div :style="rect"></div>

<!-- v-if 와 v-else 조건 디렉티브를 사용하여 조건에 따라 출력 여부를 결정할 수 있다-->
  <br/>
  <div v-if="loading">로딩 중</div>
  <div v-else>로딩 성공</div>

<!--  템플릿 태그는 특수한 태그로 개발자도구의 엘리먼트에서 별도의 태그없이 텍스트만 출력할 수 있게 해준다-->
  <br/>
  <template v-if="loading">로딩 중</template>
  <template v-else>로딩 성공</template>

<!--  v-show는 v-if와 동작하는 방식은 같지만 값이 false인 경우에도 소스코드 상에 표시된다
      하지만 화면에는 display: none으로 표시되지 않는다-->
  <br/>
  <div v-show="loading">로딩 중</div>
  <div v-show="!loading">로딩 성공</div>

<!--  v-show는 display: 의 값에 따라 화면에 표시여부를 결정하기 때문에 템플릿 태그를 사용하여
      태그가 없이 문자열만 출력하면 화면에는 표시되지 않는다-->
  <template v-show="loading">로딩 중</template>

<!--  반복 디렉티브-->
  <br/>
  <div v-for="f in carArr">{{f}}</div>

<!--  아래와 같이 배열의 인덱스를 받아올 수도 있다-->
  <br/>
  <div v-for="(f, idx) in carArr">{{idx}} {{f}}</div>

  <template v-for="f in carArr">{{f}}</template>

<!--  많은 양의 데이터를 반복 출력할때 성능을 고려한 코드
      각 항목의 고유한 값 여기서는 id를 key 속성의 값으로 지정하여 vue가 항목을 고유하게 구별할 수 있게한다-->
  <li v-for="m in members" :key="m.id">{{m.name}}</li>

  <br/>
<!--  <button v-on:click="pop('hello')">Hello</button> v-on은 @으로 대체할 수 있다-->
  <button @:click="pop('hello')">Hello</button>

<!--  메서드에 인수가 없는 경우에는 메서드 이름만 입력해도 호출할 수 있다-->
  <button @:click="run">Run</button>
</template>