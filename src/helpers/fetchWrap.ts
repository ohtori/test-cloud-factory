export default function fetchWrap<T>(url: string, options?: RequestInit | undefined) {
  return new Promise<T>((res, rej) => {
    fetch(url, options)
      .then((response) => res(response.json()))
      .catch((e) => rej(e));
  });
}