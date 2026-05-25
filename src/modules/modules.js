// export const linkPrefix = ["localhost", "192.168.1.4"].includes(
//   location.hostname,
// )
//   ? ""
//   : "/Portfolio";
export const linkPrefix = ""

export const parseLS = (key) => JSON.parse(localStorage.getItem(key));

export const stringifyLS = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data));

export const langFile = fetch(`${linkPrefix}/lang.json`).then((res) =>
  res.json(),
);

export const getLangData = async (lang) => {
  let result = {};
  await langFile.then((res) => res[lang]).then((data) => (result = data));
  return result;
};

// export const resolveLangArr = (data) => {
//   let result = [];
//   data.forEach((item) =>
//     item[1] ? result.push(`<span>${item[0]}</span>`) : result.push(item[0]),
//   );
//   return result;
// };
