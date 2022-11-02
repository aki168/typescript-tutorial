interface Link {
  description?: string
  id?: number
  url: string
}

const testObj: Link = { url: "test.com" }
const fineObj: Link = { url: "fine.com" }
const typeEorrorObj = { id: 123 }
const testArr: Array<Link> = [testObj, fineObj]

const testTerm: string = "java"

function filterByTerm(input: Array<Link>, searchTerm: string) {
  if (!searchTerm) throw Error("searchTerm cannot be empty");
  if (!input.length) throw Error("inputArr cannot be empty");
  const regex = new RegExp(searchTerm, "i");
  return input.filter(function (arrayElement) {
    return arrayElement.url.match(regex);
  });
}

filterByTerm( testArr, testTerm )