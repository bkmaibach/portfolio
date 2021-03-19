export const cn = (...classNames) => {
  return classNames.reduce((acc, name) => {
    return `${acc}${acc === '' ? '' : ' '}${name}`
  }, '')
}