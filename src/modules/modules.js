export const linkPrefix = ["localhost", "192.168.1.4"].includes(
  location.hostname,
)
  ? ""
  : "/Portfolio";

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
