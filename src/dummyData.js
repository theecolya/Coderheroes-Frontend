export const dummyData = {
  selectedCourse: {
    id: 100000,
    course_id: 1000000,
    size: 12,
    description: 'Welcome to Python!',
    subject: 'Please select a course!',
    start_time: '',
    start_date: 'more - info',
    end_date: '11-19-2021',
    end_time: 'here',
    location: 'https://zoom.us/my/haleyh',
  },
  own_programs: [
    {
      id: '1',
      subject: 'Python',
      other: '',
      description: '',
      prerequisite: '',
      classSize: '',
      age: '',
      session: '',
      duration: '',
      date: 'Monday',
      time: '17:00:00',
      status: 'Pending',
    },
    {
      id: '2',
      subject: 'Java',
      other: '',
      description: '',
      prerequisite: '',
      classSize: '',
      age: '',
      session: '',
      duration: '',
      date: 'Sunday',
      time: '17:00:00',
      status: 'Approved',
    },
  ],
  errorMessage: '',
  instructor_id: 3,
  user_id: 9,
  rating: 3,
  approved: true,
  approved_by: 1,
  instructor_bio: 'I love making content for people to enjoy!',
  inbox: [],
  course_id: [3],
  course_schedule: [
    {
      session_id: 0,
      course_id: 3,
      size: 1,
      description: 'Welcome to Python!',
      subject: 'Intro to Python',
      start_time: '15:00:00',
      start_date: '2021-12-15T07:00:00.000Z',
      end_date: '2021-12-16T07:00:00.000Z',
      end_time: '17:00:00',
      location: 'https://zoom.us/my/haleyh', // host by coderheros
      prereq: 'None',
      // after the instructor apply to teach the course,
      // we will post instructor id to backend
    },
    {
      session_id: 0,
      course_id: 0,
      size: 12,
      description: 'Welcome to JavaScript!',
      subject: 'Intro to JavaScript',
      start_time: '17:00:00',
      start_date: '2022-10-10T07:00:00.000Z',
      end_date: '2022-10-10T07:00:00.000Z',
      end_time: '17:00:00',
      location: 'https://zoom.us/my/haleyh',
      prereq: 'JS 101',
    },
    {
      session_id: 0,
      course_id: 1,
      size: 1,
      description: 'Welcome to CSS!',
      subject: 'Intro to CSS',
      start_time: '17:00:00',
      start_date: '2022-10-10T07:00:00.000Z',
      end_date: '2022-10-10T07:00:00.000Z',
      end_time: '17:00:00',
      location: 'https://zoom.us/my/haleyh',
      prereq: 'None',
    },
  ],
  newsfeed: [],
};
