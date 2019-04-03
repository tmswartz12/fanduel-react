export function ordinalHelper(num) {
  let ordinal
  switch (num) {
    case 1:
      ordinal = 'st'
      break
    case 2:
      ordinal = 'nd'
      break
    case 3:
      ordinal = 'rd'
      break
    case 4:
      ordinal = 'th'
      break
    default:
      ordinal = ''
  }
  return ordinal
}
