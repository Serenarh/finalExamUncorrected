export const getTdsFromData = (data, keys = Object.keys(data)) => keys.map(k => `<td>${data[k]}</td>`)
