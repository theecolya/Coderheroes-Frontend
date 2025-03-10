import React, { useState } from 'react';

import { connect } from 'react-redux';
import { useOktaAuth } from '@okta/okta-react';
import { useDispatch } from 'react-redux';
import { addCourse } from '../../../redux/actions/coursesActions';
import '../../../styles/AdminAddCoursesStyles/AdminAddCoursesPage.less';

import AdminAddCoursesForm from './AdminAddCoursesForm';
import { Button } from 'antd';

const initialFormValues = {
  course_id: '',
  course_name: '',
  course_description: '',
  course_days: [],
  course_capacity: '',
  course_max_age: '',
  course_min_age: '',
  course_start_date: '',
  course_end_date: '',
  course_start_time: '',
  course_end_time: '',
  course_location: '',
  course_num_sessions: '',
  instructor_id: '',
  program_id: '',
};

function AdminAddCoursesPage(props) {
  const dispatch = useDispatch();
  const { authState } = useOktaAuth();
  const { idToken } = authState;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = course => {
    if (!course.course_id) {
      dispatch(addCourse(idToken, course));
    }
    if (course.course_id) {
      // this will eventually be used for editing existing courses
      // dispatch(editCourse(idToken, course));
    }

    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="admin-add-courses-page">
      <div className="admin-add-courses-left">
        <Button
          type="primary"
          onClick={showModal}
          style={{ width: '140px', textAlign: 'center' }}
        >
          Add New Course
        </Button>
        <AdminAddCoursesForm
          handleOk={handleOk}
          handleCancel={handleCancel}
          isModalVisible={isModalVisible}
          initialFormValues={initialFormValues}
        />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    program_list: state.adminReducers.class,
  };
};

export default connect(mapStateToProps)(AdminAddCoursesPage);
