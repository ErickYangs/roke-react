import moment from 'moment'
export default {
  formateDate(date) {
    moment.locale('en')
    return date
      ? moment
          .utc(date)
          .toString()
          .slice(0, -5)
      : ''
  }
}
