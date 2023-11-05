export function isNumber(value) {
  const check = /^[0-9]+$/;
  if (!check.test(value)) throw new Error("[ERROR] 숫자만 입력해주세요.");
}
