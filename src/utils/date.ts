export function isCurrentYear(date: string): boolean {
  return new Date(date).getFullYear() === new Date().getFullYear()
}

export function isToday(date: string): boolean {
  return new Date(date).toDateString() === new Date().toDateString()
}

export function checkTheSameDays(date1: string, date2: string): boolean {
  return new Date(date1).getDate() === new Date(date2).getDate()
}

export function getLocalTimeFromDatetime(date: string): string {
  return new Date(date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
}

export function getLocaleDateFromString(date: string, withYear = false): string {
  const localDate = new Date(date)

  const options = {
    month: 'long',
    day: 'numeric',
    ...(withYear && {
      year: 'numeric'
    })
  }

  return localDate.toLocaleDateString(
    'en-US',
    // @ts-ignore
    options
  )
}
