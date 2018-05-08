const fibonacci = (l, b = 0, c = 1) => {
  console.log('hello')
  if (l > 1) {
    return c + fibonacci(l - 1, c, b + c)
  }
  return c
}

export default fibonacci
