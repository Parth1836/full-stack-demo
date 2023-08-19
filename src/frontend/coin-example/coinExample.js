
// need to give minimum coins from bank to customers for exchange of 20.47 Rs ?
const bankCoins = {
    paise: 12,
    dasiyu: 10,
    quarter: 12,
    rupee: 30,
  };
  
  const value = {
    paise: 1,
    dasiyu: 10,
    quarter: 25,
    rupee: 100,
  };
  
  // first we need to calculate rupees
  let total = 20.47 * 100; // 2047 paise
  let remainingPaiseAfterRupees = total % 100; // 2047%100 = 47
  
  // coins for rupee to be paid
  let rupeeCoins = Math.floor(total / 100); // 20 coins = 20 Rs
  console.log("rupeeCoins", rupeeCoins);
  
  // coins for quarter to be paid
  let quarterCoins = Math.floor(remainingPaiseAfterRupees / 25); // 1 coin = 25 Paise
  console.log("quarterCoins", quarterCoins);
  
  let remPasAfterRsAndQuar = remainingPaiseAfterRupees - quarterCoins * 25; // 47 - (1*25) = 22
  // now after 20Rs + 1 qua, 22 Paise is left
  
  // coins for dasiyu to be paid
  let dasiyuCoins = Math.floor(remPasAfterRsAndQuar / 10); // 2 coin = 20 Paise, now 2 paise is remaining
  console.log("dasiyuCoins", dasiyuCoins);
  
  let remPasAfterRsAndQuarAndDasiyu = remPasAfterRsAndQuar - dasiyuCoins * 10; // 22 - (2*10) = 2
  // now after 20Rs + 1 qua + 2 dasiyu, 2 Paise is left
  
  // coins for dasiyu to be paid
  let paiseCoins = remPasAfterRsAndQuar; // 2 coin = 2 Paise, now total amount is paid
  console.log("paiseCoins", paiseCoins);
  
  console.log(`The Minimum Coins paid to customer in exchange of 20.47 Rs is/nRupee Coins: ${rupeeCoins},/n
  /nQuarter Coins: ${quarterCoins}/nDasiyu Coins: ${dasiyuCoins}/nPaise Coins: ${rupeeCoins}`);
  