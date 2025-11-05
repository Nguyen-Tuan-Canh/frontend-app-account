import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'account.settings.page.heading': {
    id: 'account.settings.page.heading',
    defaultMessage: 'Thiết lập tài khoản',
    description: 'The page heading for the account settings page.',
  },
  'account.settings.loading.message': {
    id: 'account.settings.loading.message',
    defaultMessage: 'Đang tải...',
    description: 'Message when data is being loaded',
  },
  'account.settings.loading.error': {
    id: 'account.settings.loading.error',
    defaultMessage: 'Lỗi: {error}',
    description: 'Message when data failed to load',
  },
  'account.settings.banner.beta.language': {
    id: 'account.settings.banner.beta.language',
    defaultMessage: 'Bạn đang đặt ngôn ngữ là {beta_language}, hiện chưa được dịch đầy đủ. Bạn có thể giúp dịch hoàn chỉnh bằng cách tham gia cộng đồng Transifex và bổ sung bản dịch từ tiếng Anh cho người học dùng {beta_language}.',
    description: 'Message when the user selects a beta language this is not yet fully translated.',
  },
  'account.settings.banner.beta.language.action.switch.back': {
    id: 'account.settings.banner.beta.language.action.switch.back',
    defaultMessage: 'Chuyển lại sang {previous_language}',
    description: 'Button on the beta language message to switch back to the previous language.',
  },
  'account.settings.banner.beta.language.action.help.translate': {
    id: 'account.settings.banner.beta.language.action.help.translate',
    defaultMessage: 'Hỗ trợ dịch sang {beta_language}',
    description: 'Button on the beta language message to help translate the beta language.',
  },
  'account.settings.section.account.information': {
    id: 'account.settings.section.account.information',
    defaultMessage: 'Thông tin tài khoản',
    description: 'The basic account information section heading.',
  },
  'account.settings.section.account.information.description': {
    id: 'account.settings.section.account.information.description',
    defaultMessage: 'Các cài đặt này bao gồm thông tin cơ bản về tài khoản của bạn.',
    description: 'The basic account information section heading description.',
  },
  'account.settings.section.profile.information': {
    id: 'account.settings.section.profile.information',
    defaultMessage: 'Thông tin hồ sơ',
    description: 'The profile information section heading.',
  },
  'account.settings.section.site.preferences': {
    id: 'account.settings.section.site.preferences',
    defaultMessage: 'Tùy chọn trang',
    description: 'The site preferences section heading.',
  },
  'account.settings.section.linked.accounts': {
    id: 'account.settings.section.linked.accounts',
    defaultMessage: 'Tài khoản liên kết',
    description: 'The linked accounts section heading.',
  },
  'account.settings.section.linked.accounts.description': {
    id: 'account.settings.section.linked.accounts.description',
    defaultMessage: 'Bạn có thể liên kết các tài khoản định danh để đăng nhập {siteName} thuận tiện hơn.',
    description: 'The linked accounts section heading description.',
  },
  'account.settings.field.username': {
    id: 'account.settings.field.username',
    defaultMessage: 'Tên đăng nhập',
    description: 'Label for account settings username field.',
  },
  'account.settings.field.username.help.text': {
    id: 'account.settings.field.username.help.text',
    defaultMessage: 'Tên nhận diện của bạn trên {siteName}. Bạn không thể đổi tên đăng nhập.',
    description: 'Help text for the account settings username field.',
  },
  'account.settings.field.full.name': {
    id: 'account.settings.field.full.name',
    defaultMessage: 'Họ và tên',
    description: 'Label for account settings name field.',
  },
  'account.settings.field.full.name.empty': {
    id: 'account.settings.field.full.name.empty',
    defaultMessage: 'Thêm họ và tên',
    description: 'Placeholder for empty account settings name field.',
  },
  'account.settings.field.full.name.help.text': {
    id: 'account.settings.field.full.name.help.text',
    defaultMessage: 'Họ và tên dùng cho xác minh danh tính và sẽ hiển thị trên chứng chỉ của bạn.',
    description: 'Help text for the account settings name field.',
  },
  'account.settings.field.full.name.help.text.default': {
    id: 'account.settings.field.full.name.help.text.default',
    defaultMessage: 'Tên hiển thị trên hồ sơ công khai của bạn.',
    description: 'Help text for the account settings name field.',
  },
  'account.settings.field.full.name.help.text.default.certificate': {
    id: 'account.settings.field.full.name.help.text.default.certificate',
    defaultMessage: 'Tên này được chọn để hiển thị trên chứng chỉ và các bản ghi công khai.',
    description: 'Help text for the account settings name field.',
  },
  'account.settings.field.name.verified': {
    id: 'account.settings.field.name.verified',
    defaultMessage: 'Tên đã xác minh',
    description: 'Label for account settings verified name field.',
  },
  'account.settings.field.name.verified.help.text.verified': {
    id: 'account.settings.field.name.verified.help.text.verified',
    defaultMessage: 'Tên này đã được xác minh bằng ảnh thẻ.',
    description: 'Help text for the account settings verified name field when the name is verified.',
  },
  'account.settings.field.name.verified.help.text.verified.proctored': {
    id: 'account.settings.field.name.verified.help.text.verified.proctored',
    defaultMessage: 'Tên này đã được xác minh qua kỳ thi có giám sát.',
    description: 'Help text for the account settings verified name field when the name is verified through proctoring.',
  },
  'account.settings.field.name.verified.help.text.verified.certificate': {
    id: 'account.settings.field.name.verified.help.text.verified.certificate',
    defaultMessage: 'Tên này đã được xác minh bằng ảnh thẻ và được chọn để hiển thị trên chứng chỉ và các bản ghi công khai.',
    description: 'Help text for the account settings verified name field when the name is selected for certificates.',
  },
  'account.settings.field.name.verified.help.text.verified.proctored.certificate': {
    id: 'account.settings.field.name.verified.help.text.verified.proctored.certificate',
    defaultMessage: 'Tên này đã được xác minh qua kỳ thi có giám sát và được chọn để hiển thị trên chứng chỉ và các bản ghi công khai.',
    description: 'Help text for the account settings verified name field when the name is selected for certificates, and the name is verified through proctoring.',
  },
  'account.settings.field.name.verified.help.text.submitted': {
    id: 'account.settings.field.name.verified.help.text.submitted',
    defaultMessage: 'Yêu cầu xác minh đã được gửi. Thường xử lý trong 48 giờ hoặc ít hơn. Hiện không thể đổi tên đã xác minh.',
    description: 'Help text for the account settings verified name field when a verified name has been submitted.',
  },
  'account.settings.field.name.verified.help.text.submitted.proctored': {
    id: 'account.settings.field.name.verified.help.text.submitted.proctored',
    defaultMessage: 'Bài thi có giám sát của bạn đã được nộp. Hiện không thể đổi tên đã xác minh. Vui lòng kiểm tra lại sau 2–5 ngày.',
    description: 'Help text for the account settings verified name field when a verified name has been submitted through proctoring.',
  },
  'account.settings.field.name.verified.help.text.submitted.certificate': {
    id: 'account.settings.field.name.verified.help.text.submitted.certificate',
    defaultMessage: 'Khi xác minh danh tính thành công, tên này sẽ hiển thị trên chứng chỉ và các bản ghi công khai. Hiện không thể đổi tên đã xác minh.',
    description: 'Help text for the account settings verified name field when a verified name has been submitted and will appear on certificates.',
  },
  'account.settings.field.name.verified.help.text.submitted.proctored.certificate': {
    id: 'account.settings.field.name.verified.help.text.submitted.proctored.certificate',
    defaultMessage: 'Khi bài thi có giám sát được duyệt, tên này sẽ hiển thị trên chứng chỉ và các bản ghi công khai. Hiện không thể đổi Tên đã xác minh.',
    description: 'Help text for the account settings verified name field when a verified name has been submitted through proctoring and will appear on certificates.',
  },
  'account.settings.field.full.name.help.text.submitted': {
    id: 'account.settings.field.full.name.help.text.submitted',
    defaultMessage: 'Yêu cầu xác minh đã được gửi. Thường xử lý trong 48 giờ hoặc ít hơn. Hiện không thể đổi Họ và tên.',
    description: 'Help text for the account settings full name field when a verified name has been submitted.',
  },
  'account.settings.field.full.name.help.text.submitted.proctored': {
    id: 'account.settings.field.full.name.help.text.submitted.proctored',
    defaultMessage: 'Bài thi có giám sát của bạn đã được nộp. Hiện không thể đổi Họ và tên. Vui lòng kiểm tra lại sau 2–5 ngày.',
    description: 'Help text for the account settings full name field when a verified name has been submitted through proctoring.',
  },
  'account.settings.field.full.name.help.text.submitted.certificate': {
    id: 'account.settings.field.full.name.help.text.submitted.certificate',
    defaultMessage: 'Khi xác minh danh tính thành công, tên này sẽ hiển thị trên chứng chỉ và các bản ghi công khai. Hiện không thể đổi Họ và tên.',
    description: 'Help text for the account settings full name field when a full name has been submitted and will appear on certificates.',
  },
  'account.settings.field.full.name.help.text.submitted.proctored.certificate': {
    id: 'account.settings.field.full.name.help.text.submitted.proctored.certificate',
    defaultMessage: 'Khi bài thi có giám sát được duyệt, tên này sẽ hiển thị trên chứng chỉ và các bản ghi công khai. Hiện không thể đổi Họ và tên.',
    description: 'Help text for the account settings full name field when a full name has been submitted and will appear on certificates.',
  },
  'account.settings.field.name.verified.success.message': {
    id: 'account.settings.field.name.verified.success.message',
    defaultMessage: 'Yêu cầu xác minh danh tính của bạn đã hoàn tất. Giờ bạn có thể chọn tên muốn hiển thị trên chứng chỉ và các bản ghi công khai.',
    description: 'The body of the success alert indicating that a user\'s name has been verified',
  },
  'account.settings.field.name.verified.success.message.header': {
    id: 'account.settings.field.name.verified.success.message.header',
    defaultMessage: 'Yêu cầu đổi tên của bạn đã hoàn tất!',
    description: 'The header of the success alert indicating that a user\'s name has been verified',
  },
  'account.settings.field.name.verified.failure.message': {
    id: 'account.settings.field.name.verified.failure.message',
    defaultMessage: 'Lần xác minh danh tính gần nhất của bạn không đạt. Các cài đặt liên quan đã được khôi phục.',
    description: 'The body of the failure alert indicating that a user\'s name was not able to be verified',
  },
  'account.settings.field.name.verified.failure.message.header': {
    id: 'account.settings.field.name.verified.failure.message.header',
    defaultMessage: 'Chúng tôi chưa thể xác minh danh tính của bạn.',
    description: 'The header of the failure alert indicating that a user\'s name was not able to be verified',
  },
  'account.settings.field.name.verified.failure.message.help.link': {
    id: 'account.settings.field.name.verified.failure.message.help.link',
    defaultMessage: 'Tìm hiểu thêm về xác minh danh tính',
    description: 'The text of the button displayed when a user\'s name was not able to be verified, intended to direct the user to a help article about ID verification.',
  },
  'account.settings.field.name.verified.submitted.message': {
    id: 'account.settings.field.name.verified.submitted.message',
    defaultMessage: 'Yêu cầu xác minh danh tính của bạn đã được gửi và thường mất 24–48 giờ để hoàn tất.',
    description: 'The body of the submitted alert indicating that a user\'s name has been submitted for verification',
  },
  'account.settings.field.name.verified.submitted.message.certificate': {
    id: 'account.settings.field.name.verified.submitted.message.certificate',
    defaultMessage: 'Khi được duyệt, tên cập nhật của bạn sẽ xuất hiện trên mọi chứng chỉ và các bản ghi công khai liên quan.',
    description: 'The body of the submitted alert indicating that a user\'s name will be updated on certificates.',
  },
  'account.settings.field.name.verified.submitted.message.header': {
    id: 'account.settings.field.name.verified.submitted.message.header',
    defaultMessage: 'Bạn sắp hoàn tất đổi tên!',
    description: 'The header of the submitted alert indicating that a user\'s name has been submitted for verification',
  },
  'account.settings.field.email': {
    id: 'account.settings.field.email',
    defaultMessage: 'Địa chỉ email (Đăng nhập)',
    description: 'Label for account settings email field.',
  },
  'account.settings.field.email.empty': {
    id: 'account.settings.field.email.empty',
    defaultMessage: 'Thêm địa chỉ email',
    description: 'Placeholder for empty account settings email field.',
  },
  'account.settings.field.email.confirmation': {
    id: 'account.settings.field.email.confirmation',
    defaultMessage: 'Chúng tôi đã gửi email xác nhận tới {value}. Hãy nhấn vào liên kết trong email để cập nhật địa chỉ.',
    description: 'Confirmation message for saving the account settings email field.',
  },
  'account.settings.field.email.help.text': {
    id: 'account.settings.field.email.help.text',
    defaultMessage: 'Bạn sẽ nhận thông báo từ {siteName} và đội ngũ khóa học tại địa chỉ này.',
    description: 'Help text for the account settings email field.',
  },
  'account.settings.field.secondary.email': {
    id: 'account.settings.field.secondary.email',
    defaultMessage: 'Email khôi phục',
    description: 'Label for account settings recovery email field.',
  },
  'account.settings.field.secondary.email.empty': {
    id: 'account.settings.field.secondary.email.empty',
    defaultMessage: 'Thêm email khôi phục',
    description: 'Placeholder for empty account settings recovery email field.',
  },
  'account.settings.field.secondary.email.confirmation': {
    id: 'account.settings.field.secondary.email.confirmation',
    defaultMessage: 'Chúng tôi đã gửi email xác nhận tới {value}. Hãy nhấn liên kết trong email để cập nhật email khôi phục.',
    description: 'Confirmation message for saving the account settings recovery email field.',
  },
  'account.settings.email.field.confirmation.header': {
    id: 'account.settings.email.field.confirmation.header',
    defaultMessage: 'Còn một bước nữa!',
    description: 'The header of the confirmation alert saying we\'ve sent a confirmation email',
  },
  'account.settings.field.dob': {
    id: 'account.settings.field.dob',
    defaultMessage: 'Năm sinh',
    description: 'Label for account settings year of birth field.',
  },
  'account.settings.field.dob.empty': {
    id: 'account.settings.field.dob.empty',
    defaultMessage: 'Thêm năm sinh',
    description: 'Placeholder for empty account settings year of birth field.',
  },
  'account.settings.field.year_of_birth.options.empty': {
    id: 'account.settings.field.year_of_birth.options.empty',
    defaultMessage: 'Chọn năm sinh',
    description: 'Option for empty value on account settings year of birth field.',
  },
  'account.settings.field.dob.month': {
    id: 'account.settings.field.dob.month',
    defaultMessage: 'Tháng',
    description: 'Label for account settings month of birth field.',
  },
  'account.settings.field.dob.year': {
    id: 'account.settings.field.dob.year',
    defaultMessage: 'Năm',
    description: 'Label for account settings year of birth field.',
  },
  'account.settings.field.dob.month.default': {
    id: 'account.settings.field.dob.month.default',
    defaultMessage: 'Chọn tháng',
    description: 'Default label for account settings month of birth field.',
  },
  'account.settings.field.dob.year.default': {
    id: 'account.settings.field.dob.year.default',
    defaultMessage: 'Chọn năm',
    description: 'Default label for account settings year of birth field.',
  },
  'account.settings.field.dob.form.button': {
    id: 'account.settings.field.dob.form.button',
    defaultMessage: 'Vui lòng xác nhận ngày sinh của bạn',
    description: 'Message to prompt user to enter dob',
  },
  'account.settings.field.dob.form.title': {
    id: 'account.settings.field.dob.form.title',
    defaultMessage: 'Nhập tháng và năm sinh của bạn',
    description: 'Title of DOB form',
  },
  'account.settings.field.dob.form.help.text': {
    id: 'account.settings.field.dob.form.help.text',
    defaultMessage: 'Chúng tôi hỏi tháng/năm sinh để tuân thủ nghĩa vụ pháp lý.',
    description: 'Help text for DOB form',
  },
  'account.settings.field.dob.form.success': {
    id: 'account.settings.field.dob.form.success',
    defaultMessage: 'Cảm ơn bạn đã cung cấp thông tin.',
    description: 'Title of banner when date of birth is successfully entered',
  },
  'account.settings.field.month_of_birth.options.empty': {
    id: 'account.settings.field.month_of_birth.options.empty',
    defaultMessage: 'Chọn tháng sinh',
    description: 'Option for empty value on account settings month of birth field.',
  },
  'account.settings.field.dob.error.general': {
    id: 'account.settings.field.dob.error.general',
    defaultMessage: 'Đã xảy ra lỗi kỹ thuật. Vui lòng thử lại.',
    description: 'Generic error message.',
  },
  'account.settings.field.country': {
    id: 'account.settings.field.country',
    defaultMessage: 'Quốc gia',
    description: 'Label for account settings country field.',
  },
  'account.settings.field.country.empty': {
    id: 'account.settings.field.country.empty',
    defaultMessage: 'Thêm quốc gia',
    description: 'Placeholder for empty account settings country field.',
  },
  'account.settings.field.country.options.empty': {
    id: 'account.settings.field.country.options.empty',
    defaultMessage: 'Chọn quốc gia',
    description: 'Option for empty value on account settings country field.',
  },
  'account.settings.field.state': {
    id: 'account.settings.field.state',
    defaultMessage: 'Tỉnh/tiểu bang',
    description: 'Label for account settings state field.',
  },
  'account.settings.field.state.empty': {
    id: 'account.settings.field.state.empty',
    defaultMessage: 'Thêm tỉnh/tiểu bang',
    description: 'Placeholder for empty account settings state field.',
  },
  'account.settings.field.state.options.empty': {
    id: 'account.settings.field.state.options.empty',
    defaultMessage: 'Chọn tỉnh/tiểu bang',
    description: 'Option for empty value on account settings state field.',
  },
  'account.settings.field.site.language': {
    id: 'account.settings.field.site.language',
    defaultMessage: 'Ngôn ngữ của trang',
    description: 'Label for account settings site language field.',
  },
  'account.settings.field.site.language.help.text': {
    id: 'account.settings.field.site.language.help.text',
    defaultMessage: 'Ngôn ngữ sử dụng trên toàn trang. Trang hiện chỉ hỗ trợ một số ngôn ngữ nhất định.',
    description: 'Help text for the site language field.',
  },
  'account.settings.field.education': {
    id: 'account.settings.field.education',
    defaultMessage: 'Học vấn',
    description: 'Label for account settings education field.',
  },
  'account.settings.field.education.empty': {
    id: 'account.settings.field.education.empty',
    defaultMessage: 'Thêm trình độ học vấn',
    description: 'Placeholder for empty account settings education field.',
  },
  'account.settings.field.education.levels.empty': {
    id: 'account.settings.field.education.levels.empty',
    defaultMessage: 'Chọn trình độ học vấn',
    description: 'Placeholder for the education levels dropdown.',
  },
  'account.settings.field.education.levels.p': {
    id: 'account.settings.field.education.levels.p',
    defaultMessage: 'Tiến sĩ',
    description: 'Selected by the user if their highest level of education is a doctorate degree.',
  },
  'account.settings.field.education.levels.m': {
    id: 'account.settings.field.education.levels.m',
    defaultMessage: 'Thạc sĩ/Chuyên môn',
    description: "Master's or professional degree",
  },
  'account.settings.field.education.levels.b': {
    id: 'account.settings.field.education.levels.b',
    defaultMessage: 'Cử nhân',
    description: "Bachelor's Degree",
  },
  'account.settings.field.education.levels.a': {
    id: 'account.settings.field.education.levels.a',
    defaultMessage: 'Cao đẳng',
    description: "Associate's degree",
  },
  'account.settings.field.education.levels.hs': {
    id: 'account.settings.field.education.levels.hs',
    defaultMessage: 'Trung học phổ thông',
    description: 'Secondary/high school',
  },
  'account.settings.field.education.levels.jhs': {
    id: 'account.settings.field.education.levels.jhs',
    defaultMessage: 'Trung học cơ sở',
    description: 'Junior/middle school',
  },
  'account.settings.field.education.levels.el': {
    id: 'account.settings.field.education.levels.el',
    defaultMessage: 'Tiểu học',
    description: 'Elementary/primary school',
  },
  'account.settings.field.education.levels.none': {
    id: 'account.settings.field.education.levels.none',
    defaultMessage: 'Không có giáo dục chính quy',
    description: 'No formal education',
  },
  'account.settings.field.education.levels.other': {
    id: 'account.settings.field.education.levels.other',
    defaultMessage: 'Khác',
    description: 'Other education',
  },

  'account.settings.field.gender': {
    id: 'account.settings.field.gender',
    defaultMessage: 'Giới tính',
    description: 'Label for account settings gender field.',
  },
  'account.settings.field.gender.empty': {
    id: 'account.settings.field.gender.empty',
    defaultMessage: 'Thêm giới tính',
    description: 'Placeholder for empty account settings gender field.',
  },
  'account.settings.field.gender.options.empty': {
    id: 'account.settings.field.gender.options.empty',
    defaultMessage: 'Chọn giới tính',
    description: 'Placeholder for the gender options dropdown.',
  },
  'account.settings.field.gender.options.f': {
    id: 'account.settings.field.gender.options.f',
    defaultMessage: 'Nữ',
    description: 'The label for the female gender option.',
  },
  'account.settings.field.gender.options.m': {
    id: 'account.settings.field.gender.options.m',
    defaultMessage: 'Nam',
    description: 'The label for the male gender option.',
  },
  'account.settings.field.gender.options.o': {
    id: 'account.settings.field.gender.options.o',
    defaultMessage: 'Khác',
    description: 'The label for catch-all gender option.',
  },
  'account.settings.field.language.proficiencies': {
    id: 'account.settings.field.language.proficiencies',
    defaultMessage: 'Ngôn ngữ nói',
    description: 'Label for account settings spoken language field.',
  },
  'account.settings.field.language.proficiencies.empty': {
    id: 'account.settings.field.language.proficiencies.empty',
    defaultMessage: 'Thêm ngôn ngữ nói',
    description: 'Placeholder for empty account settings spoken language field.',
  },
  'account.settings.field.language_proficiencies.options.empty': {
    id: 'account.settings.field.language_proficiencies.options.empty',
    defaultMessage: 'Chọn ngôn ngữ',
    description: 'Option for an empty value on account settings spoken language field.',
  },

  'account.settings.field.time.zone': {
    id: 'account.settings.field.time.zone',
    defaultMessage: 'Múi giờ',
    description: 'Label for time zone settings field.',
  },
  'account.settings.field.time.zone.empty': {
    id: 'account.settings.field.time.zone.empty',
    defaultMessage: 'Đặt múi giờ',
    description: 'Placeholder for empty for time zone settings field.',
  },
  'account.settings.field.time.zone.description': {
    id: 'account.settings.field.time.zone.description',
    defaultMessage: 'Chọn múi giờ để hiển thị ngày giờ khóa học. Nếu không chọn, ngày giờ (kể cả hạn nộp) sẽ hiển thị theo múi giờ cục bộ của trình duyệt.',
    description: 'Description for time zone settings field.',
  },
  'account.settings.field.time.zone.default': {
    id: 'account.settings.field.time.zone.default',
    defaultMessage: 'Mặc định (Múi giờ cục bộ)',
    description: 'The default option for a time zone.',
  },
  'account.settings.field.time.zone.all': {
    id: 'account.settings.field.time.zone.all',
    defaultMessage: 'Tất cả múi giờ',
    description: 'The label for the group of options for all time zones.',
  },
  'account.settings.field.time.zone.country': {
    id: 'account.settings.field.time.zone.country',
    defaultMessage: 'Múi giờ theo quốc gia',
    description: 'The group of time zone options for a country.',
  },

  'account.settings.section.social.media': {
    id: 'account.settings.section.social.media',
    defaultMessage: 'Liên kết mạng xã hội',
    description: 'Section header for social media links settings',
  },
  'account.settings.section.social.media.description': {
    id: 'account.settings.section.social.media.description',
    defaultMessage: 'Bạn có thể (tùy chọn) liên kết tài khoản cá nhân với biểu tượng mạng xã hội trên hồ sơ {siteName}.',
    description: 'Section subheader for social media links settings',
  },
  'account.settings.field.social.platform.name.linkedin': {
    id: 'account.settings.field.social.platform.name.linkedin',
    defaultMessage: 'LinkedIn',
    description: 'Label for LinkedIn',
  },
  'account.settings.field.social.platform.name.linkedin.empty': {
    id: 'account.settings.field.social.platform.name.linkedin.empty',
    defaultMessage: 'Thêm hồ sơ LinkedIn',
    description: 'Placeholder for an empty LinkedIn field',
  },
  'account.settings.jump.nav.delete.account': {
    id: 'account.settings.jump.nav.delete.account',
    defaultMessage: 'Xóa tài khoản của tôi',
    description: 'Header for the user account deletion area',
  },
  'account.settings.field.social.platform.name.twitter': {
    id: 'account.settings.field.social.platform.name.twitter',
    defaultMessage: 'Twitter',
    description: 'Label for Twitter',
  },
  'account.settings.field.social.platform.name.twitter.empty': {
    id: 'account.settings.field.social.platform.name.twitter.empty',
    defaultMessage: 'Thêm hồ sơ Twitter',
    description: 'Placeholder for an empty Twitter field',
  },

  'account.settings.field.social.platform.name.facebook': {
    id: 'account.settings.field.social.platform.name.facebook',
    defaultMessage: 'Facebook',
    description: 'Label for Facebook',
  },
  'account.settings.field.social.platform.name.facebook.empty': {
    id: 'account.settings.field.social.platform.name.facebook.empty',
    defaultMessage: 'Thêm hồ sơ Facebook',
    description: 'Placeholder for an empty Facebook field',
  },
  'account.settings.editable.field.action.save': {
    id: 'account.settings.editable.field.action.save',
    defaultMessage: 'Lưu',
    description: 'The save button on an editable field',
  },
  'account.settings.editable.field.action.cancel': {
    id: 'account.settings.editable.field.action.cancel',
    defaultMessage: 'Hủy',
    description: 'The cancel button on an editable field',
  },
  'account.settings.editable.field.action.edit': {
    id: 'account.settings.editable.field.action.edit',
    defaultMessage: 'Chỉnh sửa',
    description: 'The edit button on an editable field',
  },
  'account.settings.static.field.empty': {
    id: 'account.settings.static.field.empty',
    defaultMessage: 'Chưa có giá trị. Hãy liên hệ quản trị viên {enterprise} để thay đổi.',
    description: 'The placeholder for an empty but uneditable field',
  },
  'account.settings.static.field.empty.no.admin': {
    id: 'account.settings.static.field.empty.no.admin',
    defaultMessage: 'Chưa có giá trị.',
    description: 'The placeholder for an empty but uneditable field when there is no administrator',
  },
  'notification.preferences.notifications.label': {
    id: 'notification.preferences.notifications.label',
    defaultMessage: 'Thông báo',
    description: 'Label for Notifications',
  },
  'account.settings.field.work.experience': {
    id: 'account.settings.field.work.experience',
    defaultMessage: 'Kinh nghiệm làm việc',
    description: 'Label for account settings Work experience field.',
  },
  'account.settings.field.work.experience.empty': {
    id: 'account.settings.field.work.experience.empty',
    defaultMessage: 'Thêm kinh nghiệm làm việc',
    description: 'Placeholder for empty account settings work experience field.',
  },
  'account.settings.field.work.experience.options.empty': {
    id: 'account.settings.field.work.experience.options.empty',
    defaultMessage: 'Chọn kinh nghiệm làm việc',
    description: 'Placeholder for the work experience levels dropdown.',
  },
});

export default messages;
