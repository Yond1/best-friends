import * as cheerio from "cheerio";
import axios from "axios";

const URL = "https://vk.com/photo";

export const filterImgModal = async (imageId) => {
  let res;
  await axios.get(`${URL + imageId}`).then((data) => {
    const $ = cheerio.load(data.data);
    const photo = $("#pv_photo").find("img");
    res = photo;
  });
  return res;
};
