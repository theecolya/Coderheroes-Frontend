/* eslint-disable */

import React from 'react';

import { createRoot } from 'react-dom/client';
import { Layout } from 'antd';
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from 'react-router-dom';
import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';

import './styles/index.less';
import 'antd/dist/antd.less';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducers from './redux/reducers/index';
import thunk from 'redux-thunk';
import InstructorBooking from './components/pages/InstructorBooking';
import { NotFoundPage } from './components/pages/NotFound';
import { ExampleListPage } from './components/pages/ExampleList';
import { ProfileListPage } from './components/pages/ProfileList';
import { LoginPage } from './components/pages/Login/index';
import { HomePage } from './components/pages/Home';
import { LandingPage } from './components/pages/Landing';
import { ExampleDataViz } from './components/pages/ExampleDataViz';
import config from './utils/oktaConfig';
import { LoadingComponent } from './components/common';
import InstructorHome from './components/pages/InstructorHome';
import ParentFamilyHome from './components/pages/ParentFamily/ParentFamilyHome';
import AdminHome from './components/pages/AdminHome/index';
import AdminAddCourses from './components/pages/AdminAddCourse';
import AdminCourses from './components/pages/AdminHome/AdminCourses';
import AdminPurchases from './components/pages/AdminHome/AdminPurchases';
import AdminInstructors from './components/pages/AdminHome/AdminInstructors';
import ParentBooking from './components/pages/ParentBooking';
import StudentHome from './components/pages/StudentHome/index';
import Footer from './components/common/Footer/index';
import InstructorApplyConfirm from './components/pages/InstructorBooking/InstructorApplyConfirm';
import InstructorAddCourse from './components/pages/InstructorAddCourse';
import NewsfeedPutModal from './components/pages/InstructorNewsFeed/NewsFeedPutModal';
import InstructorNewsFeed from './components/pages/InstructorNewsFeed';
import NewsFeedPutModal from './components/pages/InstructorNewsFeed/NewsFeedPutModal';
import ParentHome from './components/pages/ParentHome/ParentHome';
import ParentNewsFeed from './components/pages/ParentNewsFeed';
import ParentMessages from './components/pages/ParentHome/Messages/MessagesContainer';
import ParentCalendar from './components/pages/ParentHome/ParentCalendar';
import ParentAchievements from './components/pages/ParentHome/ParentAchievements';
import ParentTasks from './components/pages/ParentHome/ParentTasks';
import ParentResources from './components/pages/ParentHome/ParentResources';
import ParentProgress from './components/pages/ParentHome/Progress';
import NavBar from './components/common/Navbars/NavBar';
import PaymentSuccess from './components/pages/ParentHome/PaymentSuccess';
import Cart from './components/pages/ParentHome/Cart';
import SingleCourseBooking from './components/pages/SingleCourseBooking';
import CourseDescription from './components/pages/CourseDescriptions';
// eslint-disable-next-line
import InstructorNavBar from './components/common/Navbars/InstructorNavBar';
import AllClasses from './components/pages/InstructorHome/AllClassesView';
import Progress from './components/pages/ParentHome/Progress';
import Messages from './components/pages/Messages';
import Classroom from './components/pages/Classroom';
import FeedbackBadgePage from './components/pages/Classroom/FeedbackBadgePage';
import LandingInstructor from './components/pages/LandingInstructor';
import LandingPrograms from './components/pages/LandingPrograms';
import RegisterStep1 from './components/pages/Registration/RegisterStep1';
import RegisterStep2 from './components/pages/Registration/RegisterStep2';
import RegisterStep3 from './components/pages/Registration/RegisterStep3';
import RegisterStep4 from './components/pages/Registration/RegisterStep4';
import ConfirmEmail from './components/pages/Registration/ConfirmEmail';
import SuccessfulSubmission from './components/pages/Registration/InstructorRegistration/SuccessfulSubmission';
import InstructorWelcome from './components/pages/Registration/InstructorRegistration/InstructorWelcome';
import InstructorFlow_Step2 from './components/pages/Registration/InstructorRegistration/InstructorFlow_Step2';
import Dashboard from './components/pages/Dashboard/index';
import AdminApplications from './components/pages/AdminApplications';
import StudentTasks from './components/pages/StudentHome/StudentTasks';
import StudentResourcesPage from './components/pages/StudentHome/StudentResources';
import StudentAchievements from './components/pages/StudentHome/StudentAchievements';
import StudentPortfolio from './components/pages/StudentHome/StudentPortfolio';
import StudentProgress from './components/pages/StudentHome/StudentProgress/StudentProgress';
import AboutCoderHeroes from './components/pages/About/AboutCoderHeroes';
import PrivacyPolicy from './components/pages/About/PrivacyPolicy';
import TermsAndConditions from './components/pages/About/TermsAndConditions';
import PressInquiries from './components/pages/About/PressInquiries';
import Faq from './components/pages/Services/Faq';
import SiteMap from './components/pages/Services/SiteMap';
import CourseDetails from './components/pages/AdminHome/CourseDetails';
import AdminEditCourse from './components/pages/AdminDispCourse/index';

import StudentMessages from './components/pages/StudentHome/messages/MessagesContainer';

const store = createStore(rootReducers, applyMiddleware(thunk));
window.store = store; // Remove before full deployment. In here for development purposes.

const app = document.getElementById('root');
const root = createRoot(app);

root.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <Layout
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <NavBar />
          <App />
          <Footer />
        </Layout>
      </React.StrictMode>
    </Router>
  </Provider>
);

function App() {
  // The reason to declare App this way is so that we can use any helper functions we'd need for business logic, in our case auth.
  // React Router has a nifty useHistory hook we can use at this level to ensure we have security around our routes.
  const history = useHistory();

  const authHandler = () => {
    // We pass this to our <Security /> component that wraps our routes.
    // It'll automatically check if userToken is available and push back to login if not :)
    const previousAuthState = oktaAuth.authStateManager.getPreviousAuthState();
    if (!previousAuthState || !previousAuthState.isAuthenticated) {
      // App initialization stage
      history.push('/login');
    }
  };

  const oktaAuth = new OktaAuth(config);

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
  };

  return (
    <Security
      oktaAuth={oktaAuth}
      restoreOriginalUri={restoreOriginalUri}
      onAuthRequired={authHandler}
    >
      <Layout.Content style={{ display: 'flex', justifyContent: 'center' }}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={LoginPage} />;
          <Route path="/register" component={RegisterStep1} />
          <Route path="/confirm" component={ConfirmEmail} />
          <Route path="/register-1" component={RegisterStep1} />
          <Route path="/register-2" component={RegisterStep2} />
          <Route path="/register-3" component={RegisterStep3} />
          <Route path="/register-4" component={RegisterStep4} />
          <Route path="/instructor-register-1" component={InstructorWelcome} />
          <Route path="/about-coderheroes" component={AboutCoderHeroes} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms-and-conditions" component={TermsAndConditions} />
          <Route path="/press-inquiries" component={PressInquiries} />
          <Route path="/faq" component={Faq} />
          <Route path="/site-map" component={SiteMap} />
          <Route
            path="/instructor-register-2"
            component={InstructorFlow_Step2}
          />
          <Route
            path="/instructor-register-success"
            component={SuccessfulSubmission}
          />
          <SecureRoute
            path="/parent/achievements"
            component={ParentAchievements}
          />
          <SecureRoute exact path="/parent" component={ParentHome} />
          <SecureRoute path="/parent/booking" component={ParentBooking} />
          <SecureRoute path="/parent/calendar" component={ParentCalendar} />
          <SecureRoute path="/parent/family" component={ParentFamilyHome} />
          <SecureRoute path="/parent/newsfeed" component={ParentNewsFeed} />
          <SecureRoute path="/parent/messages" component={ParentMessages} />
          <SecureRoute path="/parent/tasks" component={ParentTasks} />
          <SecureRoute path="/parent/resources" component={ParentResources} />
          <SecureRoute path="/parent" component={ParentHome} />
          <SecureRoute path="/parent/progress" component={ParentProgress} />
          <SecureRoute
            path="/parent-book-now"
            component={SingleCourseBooking}
          />
          <Route path="/implicit/callback" component={LoginCallback} />
          <Route path="/instructor" component={InstructorHome} />
          <Route path="/student" component={StudentHome} />
          <Route path="/student-tasks" component={StudentTasks} />
          <Route path="/student-resources" component={StudentResourcesPage} />
          <Route path="/student-messages" component={StudentMessages} />
          <Route path="/student-achievements" component={StudentAchievements} />
          <Route path="/student-portfolio" component={StudentPortfolio} />
          <Route path="/student-progress" component={StudentProgress} />
          <Route path="/admin" component={AdminHome} />
          <Route path="/instructor-booking" component={InstructorBooking} />
          <Route
            path="/instructor-booking-confirm"
            component={InstructorApplyConfirm}
          />
          <Route
            path="/instructor-add-course"
            component={InstructorAddCourse}
          />
          <Route path="/payment-success" component={PaymentSuccess} />
          <Route path="/browse-instructors" component={LandingInstructor} />
          <Route path="/browse-programs" component={LandingPrograms} />
          <Route path="/classroom" component={Classroom} />
          <Route path="/feedback-badges" component={FeedbackBadgePage} />
          {/* any of the routes you need secured should be registered as SecureRoutes */}
          <SecureRoute
            path="/dev"
            component={() => <HomePage LoadingComponent={LoadingComponent} />}
          />
          {/* The above route exists for developmental purposes, but the "/" path will be for the home page ("/landing") in the deployed version */}
          <SecureRoute path="/admin-add-course" component={AdminAddCourses} />
          <SecureRoute path="/admin-courses" component={AdminCourses} />
          <Route path="/admin-edit-course" component={AdminEditCourse} />
          <SecureRoute path="/admin-instructors" component={AdminInstructors} />
          <SecureRoute path="/admin-course-details" component={CourseDetails} />
          {/* The above route exists for developmental purposes, The dashboard should be determined by the role logging in */}
          <SecureRoute path="/admin-purchases" component={AdminPurchases} />
          <SecureRoute
            path="/admin-applications"
            component={AdminApplications}
          />
          {/* The above route exists for developmental purposes, the admin applications route will be for the page leading to the instructor application */}
          <SecureRoute path="/messages" component={Messages} />
          <SecureRoute path="/edit-news" component={NewsfeedPutModal} />
          <SecureRoute
            path="/instructor-news-feed"
            component={InstructorNewsFeed}
          />
          <SecureRoute path="/edit-news" component={NewsFeedPutModal} />
          <SecureRoute path="/parent-news-feed" component={ParentNewsFeed} />
          <SecureRoute path="/example-list" component={ExampleListPage} />
          <SecureRoute path="/profile-list" component={ProfileListPage} />
          <SecureRoute path="/datavis" component={ExampleDataViz} />
          <SecureRoute path="/instructor-all-classes" component={AllClasses} />
          <SecureRoute path="/dashboard" component={Dashboard} />
          <Route component={NotFoundPage} />
        </Switch>
      </Layout.Content>
    </Security>
  );
}
