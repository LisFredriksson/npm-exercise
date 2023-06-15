import dayjs from 'dayjs'
import 'dayjs/locale/en-gb.js'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter.js'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore.js'
import advancedFormat from 'dayjs/plugin/advancedFormat.js'
import weekOfYear from 'dayjs/plugin/weekOfYear.js'

dayjs.extend(isSameOrAfter)
dayjs.extend(isSameOrBefore)
dayjs.extend(advancedFormat)
dayjs.extend(weekOfYear)

dayjs.locale('en-gb')

const yyyymmdd = 'YYYY-MM-DD'

const timeHelper = ({startDate, endDate}) => {
  const start = dayjs(startDate, yyyymmdd)
  const end = dayjs(endDate, yyyymmdd)

  if (start.isSame(end, 'year')) {
    if (start.isSame(end, 'month') && start.date() === 1 && end.date() === end.endOf('month').date()) {
      return start.format('MMMM')
    } else if (start.isSame(start.startOf('year'), 'day') && end.isSame(end.endOf('year'), 'day')) {
      return start.format('YYYY')
    }
  }
  return 'No valid period'
}
