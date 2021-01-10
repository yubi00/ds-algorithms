function markdownParser(markdown) {
  let count = 0
  let elBody = []

  for (let i = 0; i < markdown.length; i++) {
    if (markdown.charAt(i) === '#') {
      count++
    } else {
      elBody.push(markdown.charAt(i))
    }
  }

  let str = elBody.join('').trim(' ')
  if (!markdown.includes('header')) return `#${str}`
  return `<h${count}>${str}</h${count}>`
}

console.log(markdownParser('###header'))
