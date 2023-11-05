import { isNumber } from "./validate";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = this.#validate(numbers);
  }

  #validate(numbers) {
    const unverifiedArray = numbers.replace(/(\s*)/g, "").split(",");

    if (unverifiedArray.length !== 6) throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");

    const numberArr = unverifiedArray.map((item) => {
      isNumber(item);

      const number = Number(item);
      if (number < 0 || number > 45) throw new Error("[ERROR] 1부터 45까지의 숫자를 입력해주세요.");
      return number;
    });

    const setNumbers = [...new Set(numberArr)];
    if (setNumbers.length != numberArr.length) throw new Error("[ERROR] 중복되지않게 입력해주세요");

    return numberArr;
  }

  // TODO: 추가 기능 구현

  validateBonusNumber(bonusNumber) {
    isNumber(bonusNumber);
    const isDupliCateValue = this.#numbers.indexOf(bonusNumber) >= 0;
    if (isDupliCateValue) throw new Error("[ERROR] 당첨 번호와 중복되지 않게 입력해주세요");
  }
}

export default Lotto;
