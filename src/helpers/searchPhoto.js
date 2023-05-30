import * as cheerio from "cheerio";
import axios from "axios";

const URL = "https://vk.com/album-23396463_292086434";

export const searchPhoto = async (url = URL) => {
  let res;
  await axios.get(URL).then((data) => {
    const $ = cheerio.load(data.data);
    const photos = $("#photos_container_photos").find(".photos_row").toArray();
    res = photos;
    console.log(res);
  });
  return res;
};
