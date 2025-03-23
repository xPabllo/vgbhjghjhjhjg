import { Calendar as BigCalendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const locales = {
  'en-US': enUS
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

// Get next Monday at 13:00
const getNextMonday = () => {
  const today = new Date()
  const nextMonday = new Date(today)
  nextMonday.setDate(today.getDate() + ((7 - today.getDay() + 1) % 7 || 7))
  nextMonday.setHours(13, 0, 0, 0)
  return nextMonday
}

const nextMonday = getNextMonday()
const endTime = new Date(nextMonday)
endTime.setHours(15, 0, 0, 0) // 2-hour lesson

const events = [
  {
    title: 'Basic Camping Skills',
    start: nextMonday,
    end: endTime,
    description: 'Learn fundamental camping skills and safety basics'
  },
  {
    title: 'Advanced Survival Techniques',
    start: new Date(2023, 6, 18, 14, 0),
    end: new Date(2023, 6, 18, 16, 0),
  },
]

function Calendar() {
  const eventStyleGetter = (event) => {
    return {
      style: {
        backgroundColor: '#2B5C3B',
        borderRadius: '5px',
        opacity: 0.8,
        color: 'white',
        border: '0px',
        display: 'block'
      }
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8">Class Schedule</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Upcoming Classes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {events.map((event, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-md">
                <h4 className="font-semibold text-primary">{event.title}</h4>
                <p className="text-gray-600">
                  {format(event.start, 'EEEE, MMMM do')} at {format(event.start, 'h:mm a')}
                </p>
                {event.description && (
                  <p className="text-sm text-gray-500 mt-2">{event.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="calendar-container bg-white rounded-lg">
          <BigCalendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 600 }}
            eventPropGetter={eventStyleGetter}
            views={['month', 'week', 'day']}
            defaultView="month"
          />
        </div>
      </div>
    </div>
  )
}

export default Calendar
