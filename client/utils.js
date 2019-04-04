export function ordinalHelper(quarter) {
  let ordinal
  switch (quarter) {
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

export function scoringPlayerHelper(name) {
  if (name.length === 0) {
    return name
  }
  let nameArr = name.split('_')
  for (let i = 0; i < nameArr.length; i++) {
    nameArr[i] = nameArr[i].charAt(0).toUpperCase() + nameArr[i].substring(1)
  }
  return nameArr.join(' ')
}

export function descriptionHelper(description) {
  if (description.length === 0) {
    return ['']
  }
  let descriptionArr = description.split(' ')
  let updatedDescriptionArr = []
  let temp = []
  for (let i = 2; i < descriptionArr.length; i++) {
    temp.push(descriptionArr[i])
    if (descriptionArr[i].endsWith('.')) {
      updatedDescriptionArr.push(temp.join(' '))
      temp = []
    }
  }
  return updatedDescriptionArr
}

export function inPlaceSwap(dataArr, idx) {
  let temp = dataArr[0]
  dataArr[0] = dataArr[idx]
  dataArr[idx] = temp
  return dataArr
}
