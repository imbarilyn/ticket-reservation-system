import moment from 'moment'

export function formatDate(date: string, type: 'date' | 'time'): string {
    switch (type) {
        case 'date':
            return moment(date).format('MMM DD').toLocaleUpperCase()
        case 'time':
            return moment(date).format('h:mm A')
        default:
            return date
    }
}