import axios from "axios";

export function requestGetTrending() {
  return axios.request({
    method: "get",
    url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h"
  });
}
