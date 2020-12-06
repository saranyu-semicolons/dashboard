export const barTransformation = (data) => {
  let res = data;
  let transfData = [];
  const len = res.AWS.length;
  for (let i = 0; i < len; i++) {
    transfData.push({
      category: res.AWS[i].month,
      first: res.AWS[i].totalPrice,
      second: res.GCP[i].totalPrice,
      // third: res.AZURE[i].totalPrice,
    });
  }
  return transfData;
};