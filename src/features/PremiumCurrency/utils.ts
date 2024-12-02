export const getLocaDiamondsValue = (email: string): number => {
  const localDiamondsAmount = localStorage.getItem(`${email}_currency`);

  return localDiamondsAmount ? Number.parseInt(localDiamondsAmount) : 0;
};

export const setLocaDiamondsValue = (email: string, value: number): number => {
  const updatedValue = getLocaDiamondsValue(email) + value;

  localStorage.setItem(`${email}_currency`, String(updatedValue));

  return updatedValue;
};
