import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'account.settings.cannot.delete.account.text': {
    id: 'account.settings.cannot.delete.account.text',
    defaultMessage: 'Lưu ý: Vì mục đích tuân thủ pháp lý và quy định, hiện không thể xóa tài khoản.',
    description: 'This text is visible when user is not allowed to delete account',
  },
  'account.settings.delete.account.header': {
    id: 'account.settings.delete.account.header',
    defaultMessage: 'Xóa tài khoản của tôi',
    description: 'Header for the user account deletion area',
  },
  'account.settings.delete.account.subheader': {
    id: 'account.settings.delete.account.subheader',
    defaultMessage: 'Rất tiếc khi phải chia tay bạn!',
    description: 'A message in the user account deletion area',
  },
  'account.settings.delete.account.text.1': {
    id: 'account.settings.delete.account.text.1',
    defaultMessage: 'Lưu ý: Việc xóa tài khoản và dữ liệu cá nhân là vĩnh viễn và không thể hoàn tác. {siteName} sẽ không thể khôi phục tài khoản hoặc dữ liệu đã bị xóa.',
    description: 'A message in the user account deletion area',
  },
  'account.settings.delete.account.text.2': {
    id: 'account.settings.delete.account.text.2',
    defaultMessage: 'Sau khi tài khoản bị xóa, bạn sẽ không thể dùng tài khoản này để học các khóa trên {siteName}.',
    description: 'A message in the user account deletion area',
  },
  'account.settings.delete.account.text.2.edX': {
    id: 'account.settings.delete.account.text.2.edX',
    defaultMessage: 'Sau khi tài khoản bị xóa, bạn sẽ không thể dùng tài khoản này để học trên ứng dụng edX, edx.org hoặc bất kỳ trang nào do edX lưu trữ. Điều này bao gồm quyền truy cập edx.org từ hệ thống của cơ quan/trường đại học của bạn, và các trang riêng do MIT Open Learning, Wharton Executive Education, và Harvard Medical School cung cấp.',
    description: 'A message in the user account deletion area',
  },
  'account.settings.delete.account.text.3.link': {
    id: 'account.settings.delete.account.text.3.link',
    defaultMessage: 'Xem hướng dẫn in hoặc tải chứng chỉ',
    description: 'This text is a link to a technical support page where users can learn how to print or download their certificates.',
  },
  'account.settings.delete.account.text.warning': {
    id: 'account.settings.delete.account.text.warning',
    defaultMessage: 'Cảnh báo: Xóa tài khoản là vĩnh viễn. Vui lòng đọc kỹ nội dung trên trước khi tiếp tục. Hành động này không thể đảo ngược và bạn sẽ không thể dùng lại cùng địa chỉ email trên {siteName}.',
    description: 'A message in the user account deletion area',
  },
  'account.settings.delete.account.text.change.instead': {
    id: 'account.settings.delete.account.text.change.instead',
    defaultMessage: 'Bạn muốn đổi email, tên hoặc mật khẩu thay vì xóa?',
    description: 'A message in the user account deletion area',
  },
  'account.settings.delete.account.button': {
    id: 'account.settings.delete.account.button',
    defaultMessage: 'Xóa tài khoản của tôi',
    description: 'Button label to permanently delete your platform account',
  },
  'account.settings.delete.account.please.activate': {
    id: 'account.settings.delete.account.please.activate',
    defaultMessage: 'kích hoạt tài khoản của bạn',
    description: 'This is the text on a link that goes to the support page.  It is part of this sentence: Before proceeding, please activate your account.',
  },
  'account.settings.delete.account.please.confirm': {
    id: 'account.settings.delete.account.please.confirm',
    defaultMessage: 'xác nhận tài khoản của bạn',
    description: 'This is the text on a link that goes to the support page.  It is part of this sentence: Before proceeding, please confirm your account.',
  },
  'account.settings.delete.account.please.unlink': {
    id: 'account.settings.delete.account.please.unlink',
    defaultMessage: 'hủy liên kết tất cả tài khoản mạng xã hội',
    description: 'This is the text on a link that goes to the support page.  It is part of this sentence: Before proceeding, please unlink all social media accounts.',
  },
  'account.settings.delete.account.modal.header': {
    id: 'account.settings.delete.account.modal.header',
    defaultMessage: 'Bạn có chắc không?',
    description: 'Title of the dialog asking user to confirm that they want to delete their entire account',
  },
  'account.settings.delete.account.modal.text.1': {
    id: 'account.settings.delete.account.modal.text.1',
    defaultMessage: 'Bạn đã chọn “Xóa tài khoản của tôi”. Việc xóa tài khoản và dữ liệu cá nhân là vĩnh viễn và không thể hoàn tác. {siteName} sẽ không thể khôi phục tài khoản hoặc dữ liệu đã bị xóa.',
    description: 'Messaging in the dialog asking user to confirm that they want to delete their entire account',
  },
  'account.settings.delete.account.modal.text.2': {
    id: 'account.settings.delete.account.modal.text.2',
    defaultMessage: 'Nếu tiếp tục, bạn sẽ không thể dùng tài khoản này để học các khóa trên {siteName}.',
    description: 'Messaging in the dialog asking user to confirm that they want to delete their entire account',
  },
  'account.settings.delete.account.modal.text.2.edX': {
    id: 'account.settings.delete.account.modal.text.2.edX',
    defaultMessage: 'Nếu tiếp tục, bạn sẽ không thể dùng tài khoản này để học trên ứng dụng edX, edx.org hoặc bất kỳ trang nào do edX lưu trữ. Điều này bao gồm quyền truy cập edx.org từ hệ thống của cơ quan/trường đại học của bạn, và các trang riêng do MIT Open Learning, Wharton Executive Education, và Harvard Medical School cung cấp.',
    description: 'Messaging in the dialog asking user to confirm that they want to delete their entire account',
  },
  'account.settings.delete.account.modal.enter.password': {
    id: 'account.settings.delete.account.modal.enter.password',
    defaultMessage: 'Nếu bạn vẫn muốn tiếp tục xóa tài khoản, vui lòng nhập mật khẩu tài khoản của bạn:',
    description: 'Asking for the user\'s account password',
  },
  'account.settings.delete.account.modal.confirm.delete': {
    id: 'account.settings.delete.account.modal.confirm.delete',
    defaultMessage: 'Đồng ý xóa',
    description: 'Button label for user to confirm it is okay to delete their account',
  },
  'account.settings.delete.account.modal.confirm.cancel': {
    id: 'account.settings.delete.account.modal.confirm.cancel',
    defaultMessage: 'Hủy',
    description: 'The cancel button on the delete my account modal confirmation',
  },
  'account.settings.delete.account.error.unable.to.delete': {
    id: 'account.settings.delete.account.error.unable.to.delete',
    defaultMessage: 'Không thể xóa tài khoản',
    description: 'Error message when account deletion failed',
  },
  'account.settings.delete.account.error.no.password': {
    id: 'account.settings.delete.account.error.no.password',
    defaultMessage: 'Yêu cầu nhập mật khẩu',
    description: 'Error message when user has not entered their password',
  },
  'account.settings.delete.account.error.invalid.password': {
    id: 'account.settings.delete.account.error.invalid.password',
    defaultMessage: 'Mật khẩu không đúng',
    description: 'Error message when user has entered incorrect password',
  },
  'account.settings.delete.account.error.unable.to.delete.details': {
    id: 'account.settings.delete.account.error.unable.to.delete.details',
    defaultMessage: 'Rất tiếc, đã xảy ra lỗi khi xử lý yêu cầu của bạn. Vui lòng thử lại sau.',
    description: 'Error message when account deletion failed',
  },
  'account.settings.delete.account.modal.after.header': {
    id: 'account.settings.delete.account.modal.after.header',
    defaultMessage: 'Rất tiếc khi phải chia tay bạn! Tài khoản của bạn sẽ được xóa trong thời gian ngắn.',
    description: 'Title displayed after user account is deleted',
  },
  'account.settings.delete.account.modal.after.text': {
    id: 'account.settings.delete.account.modal.after.text',
    defaultMessage: 'Quá trình xóa tài khoản, bao gồm loại khỏi danh sách email, có thể mất vài tuần để xử lý hoàn tất trong hệ thống của chúng tôi. Nếu muốn ngừng nhận email ngay, vui lòng hủy đăng ký ở phần chân (footer) của bất kỳ email nào.',
    description: 'Text displayed after user account is deleted',
  },
  'account.settings.delete.account.modal.after.button': {
    id: 'account.settings.delete.account.modal.after.button',
    defaultMessage: 'Đóng',
    description: 'Label on button to close a dialog',
  },
});

export default messages;
