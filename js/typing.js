const $text = document.querySelector(".right_ani");

// 글자 모음
const letters = [
  "블랙 카카오 샷과 블랙 카카오 크림을 통해 색다른 매력을 선사하는 몽중카페만의 블랙라떼입니다. 16% 할인 된 가격으로 한 달에 8잔의 블랙라떼를 즐겨보세요.",
  "블랙 카카오 샷과 블랙 카카오 크림을 통해 색다른 매력을 선사하는 몽중카페만의 블랙라떼입니다. 16% 할인 된 가격으로 한 달에 8잔의 블랙라떼를 즐겨보세요.",
  "블랙 카카오 샷과 블랙 카카오 크림을 통해 색다른 매력을 선사하는 몽중카페만의 블랙라떼입니다. 16% 할인 된 가격으로 한 달에 8잔의 블랙라떼를 즐겨보세요.",
  "블랙 카카오 샷과 블랙 카카오 크림을 통해 색다른 매력을 선사하는 몽중카페만의 블랙라떼입니다. 16% 할인 된 가격으로 한 달에 8잔의 블랙라떼를 즐겨보세요.",
  "블랙 카카오 샷과 블랙 카카오 크림을 통해 색다른 매력을 선사하는 몽중카페만의 블랙라떼입니다. 16% 할인 된 가격으로 한 달에 8잔의 블랙라떼를 즐겨보세요.",
  "블랙 카카오 샷과 블랙 카카오 크림을 통해 색다른 매력을 선사하는 몽중카페만의 블랙라떼입니다. 16% 할인 된 가격으로 한 달에 8잔의 블랙라떼를 즐겨보세요.",
  "블랙 카카오 샷과 블랙 카카오 크림을 통해 색다른 매력을 선사하는 몽중카페만의 블랙라떼입니다. 16% 할인 된 가격으로 한 달에 8잔의 블랙라떼를 즐겨보세요.",
  "블랙 카카오 샷과 블랙 카카오 크림을 통해 색다른 매력을 선사하는 몽중카페만의 블랙라떼입니다. 16% 할인 된 가격으로 한 달에 8잔의 블랙라떼를 즐겨보세요.",
  "블랙 카카오 샷과 블랙 카카오 크림을 통해 색다른 매력을 선사하는 몽중카페만의 블랙라떼입니다. 16% 할인 된 가격으로 한 달에 8잔의 블랙라떼를 즐겨보세요.",
  "블랙 카카오 샷과 블랙 카카오 크림을 통해 색다른 매력을 선사하는 몽중카페만의 블랙라떼입니다. 16% 할인 된 가격으로 한 달에 8잔의 블랙라떼를 즐겨보세요.",
  "블랙 카카오 샷과 블랙 카카오 크림을 통해 색다른 매력을 선사하는 몽중카페만의 블랙라떼입니다. 16% 할인 된 가격으로 한 달에 8잔의 블랙라떼를 즐겨보세요.",
  "블랙 카카오 샷과 블랙 카카오 크림을 통해 색다른 매력을 선사하는 몽중카페만의 블랙라떼입니다. 16% 할인 된 가격으로 한 달에 8잔의 블랙라떼를 즐겨보세요.",
  "블랙 카카오 샷과 블랙 카카오 크림을 통해 색다른 매력을 선사하는 몽중카페만의 블랙라떼입니다. 16% 할인 된 가격으로 한 달에 8잔의 블랙라떼를 즐겨보세요.",
  "블랙 카카오 샷과 블랙 카카오 크림을 통해 색다른 매력을 선사하는 몽중카페만의 블랙라떼입니다. 16% 할인 된 가격으로 한 달에 8잔의 블랙라떼를 즐겨보세요.",
  "블랙 카카오 샷과 블랙 카카오 크림을 통해 색다른 매력을 선사하는 몽중카페만의 블랙라떼입니다. 16% 할인 된 가격으로 한 달에 8잔의 블랙라떼를 즐겨보세요.",
];

// 글자 입력 속도
const speed = 100;
let i = 0;

// 줄바꿈을 위한 <br> 치환
const lineBreakParser = (letter) => {
  return letter.map((text) => (text === "\n" ? "<br>" : text));
};

// 타이핑 효과
const typing = async () => {
  const letter = lineBreakParser(letters[i].split(""));

  while (letter.length) {
    await wait(speed);
    $text.innerHTML += letter.shift();
  }

  // 잠시 대기
  await wait(1000);

  // 지우는 효과
  remove();
};

// 글자 지우는 효과
const remove = async () => {
  const letter = lineBreakParser(letters[i].split(""));

  while (letter.length) {
    await wait(speed);

    letter.pop();
    $text.innerHTML = letter.join("");
  }

  // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
  //   i = !letters[i] ? 0 : i + 1;
  i++;
  typing();
};

// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

// 초기 실행
setTimeout(typing, 2700);