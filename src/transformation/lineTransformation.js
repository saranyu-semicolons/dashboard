export const lineTransformation = (data) => {
  let res = data;
  let transfData = [];
  if (res) {
    const len = res.AWS.length;
    for (let i = 0; i < len; i++) {
      // console.log("line transform",res.AWS[i].month);

      transfData.push({
        category: "Month " + res.AWS[i].month,
        gcp: res.AWS[i].totalPrice,
        aws: res.GCP[i].totalPrice,
        azure: res.AZURE[i].totalPrice,
      });
    }
  }

  console.log("transfData..", transfData);
  return transfData;
};
