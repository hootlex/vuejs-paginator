const mergeObjects = (obj1, obj2) => {
  let obj3 = {}
  for (let attrname in obj1) { obj3[attrname] = obj1[attrname] }
  for (let attrname in obj2) { obj3[attrname] = obj2[attrname] }
  return obj3
}

const getNestedValue = (obj, path) => {
  let originalPath = path
  path = path.split('.')
  let res = obj
  for (let i = 0; i < path.length; i++) {
    res = res[path[i]]
  }
  if (typeof res === 'undefined') console.log(`[VuePaginator] Response doesn't contain key ${originalPath}!`)
  return res
}

const createPageNumbers = (currentPage, resourceUrl, lastPage, maxButtons) => {
  let ext = resourceUrl.match(/\.\D*$/) ? resourceUrl.match(/\.\D*$/)[0] : ''
  let rootUrl = resourceUrl.replace(new RegExp(`${ext}$`), '').replace(/\d*$/, '')
  let allPages = generatePagesArray(currentPage, lastPage, maxButtons, rootUrl, ext)
  return allPages
}

function generatePagesArray (currentPage, totalPages, maxButtons, rootUrl, ext) {
  let pages = []
  let halfWay = Math.ceil(maxButtons / 2)
  let position

  if (currentPage <= halfWay) {
    position = 'start'
  } else if (totalPages - halfWay < currentPage) {
    position = 'end'
  } else {
    position = 'middle'
  }

  let ellipsesNeeded = maxButtons < totalPages
  let i = 1
  while (i <= totalPages && i <= maxButtons) {
    let openingEllipsesNeeded = (i === 2 && (position === 'middle' || position === 'end'))
    let closingEllipsesNeeded = (i === maxButtons - 1 && (position === 'middle' || position === 'start'))
    if (ellipsesNeeded && openingEllipsesNeeded) {
      pages.push({ value: '...', url: `${rootUrl}${2}${ext}` })
    } else if (ellipsesNeeded && closingEllipsesNeeded) {
      pages.push({ value: '...', url: `${rootUrl}${totalPages - 1}${ext}` })
    } else {
      let pageNumber = calculatePageNumber(i, currentPage, maxButtons, totalPages)
      pages.push({ value: pageNumber, url: `${rootUrl}${pageNumber}${ext}` })
    }
    i++
  }
  return pages
}

function calculatePageNumber (i, currentPage, maxButtons, totalPages) {
  let halfWay = Math.ceil(maxButtons / 2)
  if (i === maxButtons) {
    return totalPages
  } else if (i === 1) {
    return i
  } else if (maxButtons < totalPages) {
    if (totalPages - halfWay < currentPage) {
      return totalPages - maxButtons + i
    } else if (halfWay < currentPage) {
      return currentPage - halfWay + i
    } else {
      return i
    }
  } else {
    return i
  }
}

export const utils = { mergeObjects, getNestedValue, createPageNumbers }
