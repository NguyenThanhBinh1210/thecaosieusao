export function formatNumberWithDots(value: number | string) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

export function validateEmail(email: string) {
  if (email !== '') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  } else {
    return true
  }
}

export function validatePhoneNumber(phoneNumber: string) {
  if (phoneNumber !== '') {
    const phoneRegex = /^(?:\+?(\d{1,3}))?[-.\s]?((?:\d{10,11}))$/
    return phoneRegex.test(phoneNumber)
  } else {
    return true
  }
}
