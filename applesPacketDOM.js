//References to input data
const boxCost = document.querySelector(".boxCost");
const numOfApples = document.querySelector(".numOfApples");
const numPerPacket = document.querySelector(".numPerPacket");
const percentProfit = document.querySelector(".percentProfit");
const calculateBtn = document.querySelector(".calculate");

//References to output data
const packetsNum = document.querySelector(".packetsNum");
const appleCost = document.querySelector(".appleCost");
const packCost = document.querySelector(".packCost");
const priceRecommend = document.querySelector(".priceRecommend");

//INSTANCE FOR FACTORY FUNCTION
const applePacket = ApplePacket();

//DOM EVENT
calculateBtn.addEventListener("click", function () {
  //GET INPUTS
  applePacket.setBoxPrice(boxCost.value);
  applePacket.setQuantityInBox(numOfApples.value);
  applePacket.setNumberPerPacket(numPerPacket.value);
  applePacket.setPercentProfit(percentProfit.value);

  //Outputs
  packetsNum.innerHTML = applePacket.calcNumOfPackets();
  appleCost.innerHTML = applePacket.calcCostPerApple();
  packCost.innerHTML = applePacket.calcCostPerPacket();
  priceRecommend.innerHTML = applePacket.calcPricePerPacket();
});
