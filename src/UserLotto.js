import { Console, Random } from "@woowacourse/mission-utils";

class UserLotto {
  numbers;
  constructor() {
    this.numbers = this.#makeNumbers();
    this.#printNumbers();
  }

  #makeNumbers() {
    const numbers = [];
    while (numbers.length < 6) {
      const number = Random.pickNumberInRange(1, 45);
      if (!numbers.includes(number)) numbers.push(number);
    }
    return numbers;
  }

  #printNumbers() {
    Console.print(this.numbers);
  }
}

export default UserLotto;
