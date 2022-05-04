import React from 'react';

function bannerContent(title, content) {
  return (
    <div className="dashboard-banner">
      <div className="banner-content">
        <div>
          <h1>{title}</h1>
        </div>
        <div className="welcome-content">
          <h2>{content}</h2>
        </div>
      </div>
    </div>
  );
}

export default function Banner() {
  const path = window.location.pathname;
  switch (path) {
    case '/instructor':
      return bannerContent('Dashboard', 'welcome back!');
    case '/instructor-booking':
      return bannerContent('Apply to Course', 'Select Courses');
    case '/instructor-add-course':
      return bannerContent('Create', 'your own course');
    case '/instructor-news-feed' || '/parent-news-feed':
      return bannerContent('News Feed');
    case '/parent':
      return bannerContent('Mission Control', '');
    case '/parent-progress':
      return bannerContent('Progress', "view your children's progress");
    case '/parent/calendar':
      return bannerContent('Calendar', '');
    case '/parent/booking':
      return bannerContent('Courses', '');
    case '/parent/newsfeed':
      return bannerContent('News Feed', '');
    case '/parent/family':
      return bannerContent('CHOOSE A PROFILE');
    case '/parent/cart':
      return bannerContent('Cart');
    case '/parent/messages':
      return bannerContent('Messages');
    case '/parent/tasks':
      return bannerContent('TASKS');
    case '/parent/resources':
      return bannerContent('RESOURCES');
    case '/student':
      return bannerContent('Student Dashboard');
    case '/classroom':
      return bannerContent('Classroom');
    default: {
      bannerContent('Dashboard', 'Welcome back!');
    }
  }
}
