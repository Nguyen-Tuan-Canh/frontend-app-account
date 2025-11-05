import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  notificationHeading: {
    id: 'notification.preference.heading',
    defaultMessage: 'Thông báo',
    description: 'Notification title',
  },
  notificationAppTitle: {
    id: 'notification.preference.app.title',
    defaultMessage: `{
      key, select,
      discussion {Thảo luận}
      coursework {Bài tập khóa học}
      updates {Cập nhật}
      grading {Chấm điểm}
      other {{key}}
    }`,
    description: 'Display text for Notification Types',
  },
  notificationTitle: {
    id: 'notification.preference.title',
    defaultMessage: `{
      text, select,
      core {Thông báo hoạt động}
      newDiscussionPost {Bài đăng thảo luận mới}
      newQuestionPost {Bài đăng câu hỏi mới}
      contentReported {Nội dung bị báo cáo}
      courseUpdates {Cập nhật khóa học}
      oraStaffNotifications {Bài nộp ORA mới cho giảng viên chấm}
      oraGradeAssigned {Đã nhận điểm bài luận ORA}
      newInstructorAllLearnersPost {Bài đăng mới từ giảng viên}
      other {{text}}
    }`,
    description: 'Display text for Notification Types',
  },
  notificationChannel: {
    id: 'notification.preference.channel',
    defaultMessage: `{
      text, select,
      web {Web}
      email {Email}
      push {Đẩy}
      other {{text}}
    }`,
    description: 'Display text for Notification Channel',
  },
  emailCadence: {
    id: 'notification.preference.emailCadence',
    defaultMessage: `{
      text, select,
      Daily {Hằng ngày}
      Weekly {Hằng tuần}
      Immediately {Ngay lập tức}
      other {{text}}
    }`,
    description: 'Display text for Email Cadence',
  },
  typeLabel: {
    id: 'notification.preference.type.label',
    defaultMessage: 'Loại',
    description: 'Display text for type',
  },
  webLabel: {
    id: 'notification.preference.web.label',
    defaultMessage: 'Web',
    description: 'Display text for web',
  },
  notificationHelpEmail: {
    id: 'notification.preference.help.email',
    defaultMessage: 'Email',
    description: 'Display text for email',
  },
  notificationHelpPush: {
    id: 'notification.preference.help.push',
    defaultMessage: 'Đẩy',
    description: 'Display text for push',
  },
  loadMoreCourses: {
    id: 'notification.preference.load.more.courses',
    defaultMessage: 'Tải thêm khóa học',
    description: 'Load more button to load more courses',
  },
  notificationPreferenceGuideLink: {
    id: 'notification.preference.guide.link',
    defaultMessage: 'như hướng dẫn tại đây',
    description: 'Link of the notification preference for learner guide',
  },
  notificationPreferenceGuideBody: {
    id: 'notification.preference.guide.body',
    defaultMessage: 'Thông báo cho một số hoạt động được bật theo mặc định,',
    description: 'Body of the notification preferences for learner guide',
  },
  notificationCadenceDescription: {
    id: 'notification.cadence.description',
    defaultMessage: 'Email thông báo hằng ngày được gửi lúc {dailyTime}. Email hằng tuần được gửi mỗi Chủ Nhật lúc {weeklyTime}.',
    description: 'Notification cadence description',
  },
  notificationDefaultInfo: {
    id: 'notification.default.info',
    defaultMessage: 'Thông báo cho một số hoạt động được bật theo mặc định, như hướng dẫn tại đây',
    description: 'Default notification info',
  },
  notificationDropdownlabel: {
    id: 'notification.dropdown.label',
    defaultMessage: 'Chọn thông báo cho',
    description: 'Dropdown label',
  },
  notificationDropdownApplies: {
    id: 'notification.dropdown.applies',
    defaultMessage: 'Áp dụng cho tất cả các khóa học',
    description: 'Dropdown applies to all courses',
  },
  notificationCourseDropdownApplies: {
    id: 'notification.dropdown.course.applies',
    defaultMessage: 'Ghi đè cài đặt toàn tài khoản',
    description: 'Dropdown applies to specific course',
  },
});

export default messages;
