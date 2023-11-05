import { Console } from "@woowacourse/mission-utils";
import UserLotto from "./UserLotto.js";

const UNIT = 1000;
class App {
  numberOfPurchases;
  lottos;
  constructor() {
    this.lottos = [];
  }
  async play() {
    this.numberOfPurchases = await this.setPurchaseAmount();
    Console.print(`\n${this.numberOfPurchases}개를 구매했습니다.`);

    this.issueLottos();
  }

  async setPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    if (purchaseAmount % UNIT) throw new Error("1000 단위로 입력해주세요.");

    return parseInt(purchaseAmount / UNIT);
  }

  issueLottos() {
    while (this.lottos.length != this.numberOfPurchases) {
      const lotto = new UserLotto();
      this.lottos.push(lotto.numbers);
    }
  }
}

export default App;
