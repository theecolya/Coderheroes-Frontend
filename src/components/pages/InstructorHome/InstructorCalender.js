import React, { useState } from 'react';
import { Calendar, Badge } from 'antd';
import '../../../styles/InstructorStyles/index.less';
import { connect } from 'react-redux';
const InstructorCalender = props => {
  const { instructor } = props;
  const [course, setCourse] = useState('');

  function getListData(value) {
    const values = instructor.course_schedule.map(itemz => {
      setCourse(itemz.subject);
    });
    let listData;
    switch (value.date()) {
      case 8:
        listData = [{ type: 'success', course }];
        break;
      case 10:
        listData = [{ type: 'success', course }];
        break;
      case 15:
        listData = [{ type: 'success' }, { type: 'success', course }];
        break;
      default:
    }
    return listData || [];
  }

  function dateCellRender(value) {
    const listData = getListData(value);

    return (
      <ul className="events">
        {listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type} text={item.course} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <>
      <section className="site-calendar-demo-card">
        <Calendar dateCellRender={dateCellRender} />
      </section>
    </>
  );
};

const mapStateToProps = state => {
  return { instructor: state.instructorReducer };
};
export default connect(mapStateToProps)(InstructorCalender);
