import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'id.verification.next': {
    id: 'id.verification.next',
    defaultMessage: 'Tiếp',
    description: 'Next button.',
  },
  'id.verification.support': {
    id: 'id.verification.support',
    defaultMessage: 'hỗ trợ',
    description: 'Website support.',
  },
  'id.verification.example.card.alt': {
    id: 'id.verification.example.card.alt',
    defaultMessage: 'Ví dụ thẻ định danh hợp lệ có họ tên và ảnh.',
    description: 'Alt text for an example identification card.',
  },
  'id.verification.requirements.title': {
    id: 'id.verification.requirements.title',
    defaultMessage: 'Yêu cầu xác minh bằng ảnh',
    description: 'Title for the Photo Verification Requirements page.',
  },
  'id.verification.requirements.description': {
    id: 'id.verification.requirements.description',
    defaultMessage: 'Để hoàn tất xác minh bằng ảnh, bạn cần:',
    description: 'Description for the Photo Verification Requirements page.',
  },
  'id.verification.requirements.card.device.title': {
    id: 'id.verification.requirements.card.device.title',
    defaultMessage: 'Thiết bị có camera',
    description: 'Title for the Device with Camera card.',
  },
  'id.verification.requirements.card.device.allow': {
    id: 'id.verification.requirements.card.device.allow',
    defaultMessage: 'Cho phép',
    description: 'Bold text emphasizing that the user needs to click "allow" in order to enable the camera.',
  },
  'id.verification.requirements.card.id.title': {
    id: 'id.verification.requirements.card.id.title',
    defaultMessage: 'Thẻ định danh có ảnh',
    description: 'Title for the Photo Identification requirement card.',
  },
  'id.verification.requirements.card.id.text': {
    id: 'id.verification.requirements.card.id.text',
    defaultMessage: 'Bạn cần thẻ định danh hợp lệ có họ tên và ảnh, như bằng lái xe hoặc hộ chiếu.',
    description: 'Text that explains that the user needs a photo ID.',
  },
  'id.verification.privacy.modal.close.button': {
    id: 'id.verification.privacy.modal.close.button',
    defaultMessage: 'Đóng',
    description: 'Label on button to close privacy information dialog.',
  },
  'id.verification.privacy.title': {
    id: 'id.verification.privacy.title',
    defaultMessage: 'Thông tin quyền riêng tư',
    description: 'Title for Privacy Information.',
  },
  'id.verification.privacy.need.photo.question': {
    id: 'id.verification.privacy.need.photo.question',
    defaultMessage: 'Vì sao {siteName} cần ảnh của tôi?',
    description: 'Question about why the platform needs a verification photo.',
  },
  'id.verification.privacy.need.photo.answer': {
    id: 'id.verification.privacy.need.photo.answer',
    defaultMessage: 'Chúng tôi dùng ảnh xác minh để xác nhận danh tính của bạn và đảm bảo tính hợp lệ cho chứng chỉ.',
    description: 'Answering why the platform needs a verification photo.',
  },
  'id.verification.privacy.do.with.photo.question': {
    id: 'id.verification.privacy.do.with.photo.question',
    defaultMessage: '{siteName} làm gì với ảnh này?',
    description: 'Question about what the platform does with the verification photo.',
  },
  'id.verification.privacy.do.with.photo.answer': {
    id: 'id.verification.privacy.do.with.photo.answer',
    defaultMessage: 'Chúng tôi mã hóa an toàn ảnh của bạn và gửi đến dịch vụ xác thực để xem xét. Sau khi hoàn tất xác minh, ảnh và thông tin của bạn không được lưu hoặc hiển thị ở bất kỳ đâu trên {siteName}.',
    description: 'Answering what the platform does with the verification photo.',
  },
  'id.verification.access.blocked.title': {
    id: 'id.verification.access.blocked.title',
    defaultMessage: 'Xác minh danh tính',
    description: 'Title for text that displays when a user is blocked from ID verification.',
  },
  'id.verification.access.blocked.enrollment': {
    id: 'id.verification.access.blocked.enrollment',
    defaultMessage: 'Bạn hiện không ghi danh vào khóa học nào yêu cầu xác minh danh tính.',
    description: 'Text that displays when user is trying to verify while not enrolled in a course that requires ID verification.',
  },
  'id.verification.access.blocked.pending': {
    id: 'id.verification.access.blocked.pending',
    defaultMessage: 'Bạn đã gửi thông tin xác minh. Bạn sẽ thấy thông báo trên bảng điều khiển khi quá trình hoàn tất (thường trong 5 ngày).',
    description: 'Text that displays when user has a pending or approved request.',
  },
  'id.verification.photo.take': {
    id: 'id.verification.photo.take',
    defaultMessage: 'Chụp ảnh',
    description: 'Button to take photo.',
  },
  'id.verification.photo.retake': {
    id: 'id.verification.photo.retake',
    defaultMessage: 'Chụp lại ảnh?',
    description: 'Button to retake photo.',
  },
  'id.verification.photo.enable.detection': {
    id: 'id.verification.photo.enable.detection',
    defaultMessage: 'Bật nhận diện khuôn mặt',
    description: 'Text label for the checkbox to enable face detection.',
  },
  'id.verification.photo.enable.detection.portrait.help.text': {
    id: 'id.verification.photo.enable.detection.portrait.help.text',
    defaultMessage: 'Nếu chọn, một khung sẽ xuất hiện quanh khuôn mặt của bạn. Khuôn mặt được thấy rõ khi khung màu xanh. Nếu vị trí chưa tốt hoặc không nhận diện được, khung sẽ màu đỏ.',
    description: 'Help text that appears for enabling face detection on the portrait photo panel.',
  },
  'id.verification.photo.enable.detection.id.help.text': {
    id: 'id.verification.photo.enable.detection.id.help.text',
    defaultMessage: 'Nếu chọn, một khung sẽ xuất hiện quanh khuôn mặt trên thẻ của bạn. Khuôn mặt được thấy rõ khi khung màu xanh. Nếu vị trí chưa tốt hoặc không nhận diện được, khung sẽ màu đỏ.',
    description: 'Help text that appears for enabling face detection on the portrait photo panel.',
  },
  'id.verification.photo.feedback.correct': {
    id: 'id.verification.photo.feedback.correct',
    defaultMessage: 'Khuôn mặt ở vị trí tốt.',
    description: 'Text for screen reader when user\'s face is in a good position.',
  },
  'id.verification.photo.feedback.two.faces': {
    id: 'id.verification.photo.feedback.two.faces',
    defaultMessage: 'Phát hiện nhiều hơn một khuôn mặt.',
    description: 'Text for screen reader when more than one face detected.',
  },
  'id.verification.photo.feedback.no.faces': {
    id: 'id.verification.photo.feedback.no.faces',
    defaultMessage: 'Không phát hiện khuôn mặt.',
    description: 'Text for screen reader when no face detected.',
  },
  'id.verification.photo.feedback.top.left': {
    id: 'id.verification.photo.feedback.top.left',
    defaultMessage: 'Vị trí chưa đúng. Trên trái.',
    description: 'Text for screen reader when face is in a bad position.',
  },
  'id.verification.photo.feedback.top.center': {
    id: 'id.verification.photo.feedback.top.center',
    defaultMessage: 'Vị trí chưa đúng. Trên giữa.',
    description: 'Text for screen reader when face is in a bad position.',
  },
  'id.verification.photo.feedback.top.right': {
    id: 'id.verification.photo.feedback.top.right',
    defaultMessage: 'Vị trí chưa đúng. Trên phải.',
    description: 'Text for screen reader when face is in a bad position.',
  },
  'id.verification.photo.feedback.center.left': {
    id: 'id.verification.photo.feedback.center.left',
    defaultMessage: 'Vị trí chưa đúng. Giữa trái.',
    description: 'Text for screen reader when face is in a bad position.',
  },
  'id.verification.photo.feedback.center.center': {
    id: 'id.verification.photo.feedback.center.center',
    defaultMessage: 'Vị trí chưa đúng. Quá gần camera.',
    description: 'Text for screen reader when face is in a bad position.',
  },
  'id.verification.photo.feedback.center.right': {
    id: 'id.verification.photo.feedback.center.right',
    defaultMessage: 'Vị trí chưa đúng. Giữa phải.',
    description: 'Text for screen reader when face is in a bad position.',
  },
  'id.verification.photo.feedback.bottom.left': {
    id: 'id.verification.photo.feedback.bottom.left',
    defaultMessage: 'Vị trí chưa đúng. Dưới trái.',
    description: 'Text for screen reader when face is in a bad position.',
  },
  'id.verification.photo.feedback.bottom.center': {
    id: 'id.verification.photo.feedback.bottom.center',
    defaultMessage: 'Vị trí chưa đúng. Dưới giữa.',
    description: 'Text for screen reader when face is in a bad position.',
  },
  'id.verification.photo.feedback.bottom.right': {
    id: 'id.verification.photo.feedback.bottom.right',
    defaultMessage: 'Vị trí chưa đúng. Dưới phải.',
    description: 'Text for screen reader when face is in a bad position.',
  },
  'id.verification.camera.access.title': {
    id: 'id.verification.camera.access.title',
    defaultMessage: 'Quyền truy cập camera',
    description: 'Title for the Camera Access page.',
  },
  'id.verification.camera.access.title.success': {
    id: 'id.verification.camera.access.title.success',
    defaultMessage: 'Đã bật truy cập camera',
    description: 'Title for the Camera Access page when camera is enabled.',
  },
  'id.verification.camera.access.title.failed': {
    id: 'id.verification.camera.access.title.failed',
    defaultMessage: 'Không thể truy cập camera',
    description: 'Title for the Camera Access page when camera access is denied or unavailable.',
  },
  'id.verification.camera.access.click.allow': {
    id: 'id.verification.camera.access.click.allow',
    defaultMessage: 'Hãy bảo đảm bấm "Cho phép"',
    description: 'Instruction to allow camera access.',
  },
  'id.verification.camera.access.enable': {
    id: 'id.verification.camera.access.enable',
    defaultMessage: 'Bật camera',
    description: 'Text to enable camera.',
  },
  'id.verification.camera.access.problems': {
    id: 'id.verification.camera.access.problems',
    defaultMessage: 'Gặp sự cố?',
    description: 'Text for when the user is having problems enabling camera access.',
  },
  'id.verification.camera.access.skip': {
    id: 'id.verification.camera.access.skip',
    defaultMessage: 'Bỏ qua và tải ảnh lên',
    description: 'Text to skip camera access and enable image uploading.',
  },
  'id.verification.camera.access.success': {
    id: 'id.verification.camera.access.success',
    defaultMessage: 'Có vẻ camera của bạn hoạt động và sẵn sàng.',
    description: 'Text to confirm that camera is working.',
  },
  'id.verification.camera.access.failure': {
    id: 'id.verification.camera.access.failure',
    defaultMessage: 'Có vẻ không thể truy cập camera của bạn. Bạn sẽ cần tải lên ảnh chân dung và ảnh thẻ.',
    description: 'Text indicating that the camera could not be accessed and image upload will be enabled.',
  },
  'id.verification.camera.access.failure.temporary': {
    id: 'id.verification.camera.access.failure.temporary',
    defaultMessage: 'Có vẻ không thể truy cập camera của bạn. Hãy kiểm tra webcam đã kết nối và trình duyệt đã được cấp quyền.',
    description: 'Text indicating that the camera could not be accessed.',
  },
  'id.verification.camera.access.failure.temporary.chrome': {
    id: 'id.verification.camera.access.failure.temporary.chrome',
    defaultMessage: 'Cách bật quyền truy cập camera trên Chrome:',
    description: 'Description for the directions on enabling camera access.',
  },
  'id.verification.camera.access.failure.temporary.chrome.step1': {
    id: 'id.verification.camera.access.failure.temporary.chrome.step1',
    defaultMessage: 'Mở Chrome.',
    description: 'Text for step one of enabling camera access.',
  },
  'id.verification.camera.access.failure.temporary.chrome.step2': {
    id: 'id.verification.camera.access.failure.temporary.chrome.step2',
    defaultMessage: 'Đi tới Thêm > Cài đặt.',
    description: 'Text for step two of enabling camera access.',
  },
  'id.verification.camera.access.failure.temporary.chrome.step2.windows': {
    id: 'id.verification.camera.access.failure.temporary.chrome.step2.windows',
    defaultMessage: 'Windows: Alt+F, Alt+E, hoặc F10 rồi nhấn phím cách',
    description: 'Text for Windows keyboard shortcut in chrome.',
  },
  'id.verification.camera.access.failure.temporary.chrome.step2.mac': {
    id: 'id.verification.camera.access.failure.temporary.chrome.step2.mac',
    defaultMessage: 'Mac: Command+,',
    description: 'Text for Mac keyboard shortcut in chrome.',
  },
  'id.verification.camera.access.failure.temporary.chrome.step3': {
    id: 'id.verification.camera.access.failure.temporary.chrome.step3',
    defaultMessage: 'Trong "Quyền riêng tư và bảo mật", chọn "Cài đặt trang web" rồi "Camera".',
    description: 'Text for step three of enabling camera access.',
  },
  'id.verification.camera.access.failure.temporary.chrome.step4': {
    id: 'id.verification.camera.access.failure.temporary.chrome.step4',
    defaultMessage: 'Trong "Đã chặn", tìm "edx.org" và chọn.',
    description: 'Text for step four of enabling camera access.',
  },
  'id.verification.camera.access.failure.temporary.chrome.step5': {
    id: 'id.verification.camera.access.failure.temporary.chrome.step5',
    defaultMessage: 'Ở mục "Quyền", đổi quyền camera thành "Cho phép".',
    description: 'Text for step five of enabling camera access.',
  },
  'id.verification.camera.access.failure.temporary.ie11': {
    id: 'id.verification.camera.access.failure.temporary.ie11',
    defaultMessage: 'Cách bật quyền truy cập camera trên Internet Explorer:',
    description: 'Description for the directions on enabling camera access.',
  },
  'id.verification.camera.access.failure.temporary.ie11.step1': {
    id: 'id.verification.camera.access.failure.temporary.ie11.step1',
    defaultMessage: 'Mở Trình quản lý cài đặt Flash: Cài đặt Windows > Bảng điều khiển > Flash Player.',
    description: 'Text for step one of enabling camera access.',
  },
  'id.verification.camera.access.failure.temporary.ie11.step2': {
    id: 'id.verification.camera.access.failure.temporary.ie11.step2',
    defaultMessage: 'Chọn tab "Camera và Mic", rồi chọn nút "Cài đặt Camera và Micro cho từng trang".',
    description: 'Text for step two of enabling camera access.',
  },
  'id.verification.camera.access.failure.temporary.ie11.step3': {
    id: 'id.verification.camera.access.failure.temporary.ie11.step3',
    defaultMessage: 'Chọn "edx.org" trong danh sách và đổi quyền thành "Cho phép".',
    description: 'Text for step three of enabling camera access.',
  },
  'id.verification.camera.access.failure.temporary.firefox': {
    id: 'id.verification.camera.access.failure.temporary.firefox',
    defaultMessage: 'Cách bật quyền truy cập camera trên Firefox:',
    description: 'Description for the directions on enabling camera access.',
  },
  'id.verification.camera.access.failure.temporary.firefox.step1': {
    id: 'id.verification.camera.access.failure.temporary.firefox.step1',
    defaultMessage: 'Mở Firefox.',
    description: 'Text for step one of enabling camera access.',
  },
  'id.verification.camera.access.failure.temporary.firefox.step2': {
    id: 'id.verification.camera.access.failure.temporary.firefox.step2',
    defaultMessage: 'Nhập "about:preferences" vào thanh địa chỉ.',
    description: 'Text for step two of enabling camera access.',
  },
  'id.verification.camera.access.failure.temporary.firefox.step3': {
    id: 'id.verification.camera.access.failure.temporary.firefox.step3',
    defaultMessage: 'Chọn tab "Quyền riêng tư & Bảo mật", rồi tới phần "Quyền".',
    description: 'Text for step three of enabling camera access.',
  },
  'id.verification.camera.access.failure.temporary.firefox.step4': {
    id: 'id.verification.camera.access.failure.temporary.firefox.step4',
    defaultMessage: 'Bên cạnh "Camera", chọn nút "Cài đặt…".',
    description: 'Text for step four of enabling camera access.',
  },
  'id.verification.camera.access.failure.temporary.firefox.step5': {
    id: 'id.verification.camera.access.failure.temporary.firefox.step5',
    defaultMessage: 'Trong ô tìm kiếm, nhập "edx.org".',
    description: 'Text for step five of enabling camera access.',
  },
  'id.verification.camera.access.failure.temporary.firefox.step6': {
    id: 'id.verification.camera.access.failure.temporary.firefox.step6',
    defaultMessage: 'Ở cột trạng thái của "edx.org", chọn "Cho phép" từ danh sách.',
    description: 'Text for step six of enabling camera access.',
  },
  'id.verification.camera.access.failure.temporary.firefox.step7': {
    id: 'id.verification.camera.access.failure.temporary.firefox.step7',
    defaultMessage: 'Chọn "Lưu thay đổi".',
    description: 'Text for step seven of enabling camera access.',
  },
  'id.verification.camera.access.failure.temporary.safari': {
    id: 'id.verification.camera.access.failure.temporary.safari',
    defaultMessage: 'Cách bật quyền truy cập camera trên Safari:',
    description: 'Description for the directions on enabling camera access.',
  },
  'id.verification.camera.access.failure.temporary.safari.step1': {
    id: 'id.verification.camera.access.failure.temporary.safari.step1',
    defaultMessage: 'Mở Safari.',
    description: 'Text for step one of enabling camera access.',
  },
  'id.verification.camera.access.failure.temporary.safari.step2': {
    id: 'id.verification.camera.access.failure.temporary.safari.step2',
    defaultMessage: 'Nhấn menu Safari, chọn "Tùy chọn". Có thể dùng phím tắt Command+,',
    description: 'Text for step two of enabling camera access.',
  },
  'id.verification.camera.access.failure.temporary.safari.step3': {
    id: 'id.verification.camera.access.failure.temporary.safari.step3',
    defaultMessage: 'Chọn tab "Trang web", rồi chọn "Camera".',
    description: 'Text for step three of enabling camera access.',
  },
  'id.verification.camera.access.failure.temporary.safari.step4': {
    id: 'id.verification.camera.access.failure.temporary.safari.step4',
    defaultMessage: 'Chọn "edx.org" và đổi quyền camera thành "Cho phép".',
    description: 'Text for step four of enabling camera access.',
  },
  'id.verification.camera.access.failure.unsupported': {
    id: 'id.verification.camera.access.failure.unsupported',
    defaultMessage: 'Trình duyệt của bạn không hỗ trợ truy cập camera.',
    description: 'Text indicating that the user\'s browser does not support camera access.',
  },
  'id.verification.camera.access.failure.unsupported.chrome.explanation': {
    id: 'id.verification.camera.access.failure.unsupported.chrome.explanation',
    defaultMessage: 'Trình duyệt Chrome hiện không hỗ trợ truy cập camera trên thiết bị iOS (iPhone, iPad).',
    description: 'Explanation for why certain web browsers, like Chrome, do not support accessing the user\'s camera.',
  },
  'id.verification.camera.access.failure.unsupported.instructions': {
    id: 'id.verification.camera.access.failure.unsupported.instructions',
    defaultMessage: 'Vui lòng dùng trình duyệt khác để hoàn tất xác minh danh tính.',
    description: 'Instructions for the user to user another web browser to complete the process.',
  },
  'id.verification.photo.tips.title': {
    id: 'id.verification.photo.tips.title',
    defaultMessage: 'Mẹo chụp ảnh hữu ích',
    description: 'Title for the Photo Tips page.',
  },
  'id.verification.photo.tips.description': {
    id: 'id.verification.photo.tips.description',
    defaultMessage: 'Tiếp theo, chúng tôi cần bạn chụp ảnh khuôn mặt. Hãy xem các mẹo dưới đây.',
    description: 'Description for the photo tips page.',
  },
  'id.verification.photo.tips.list.title': {
    id: 'id.verification.photo.tips.list.title',
    defaultMessage: 'Mẹo chụp ảnh',
    description: 'Title for the list of photo tips.',
  },
  'id.verification.photo.tips.list.description': {
    id: 'id.verification.photo.tips.list.description',
    defaultMessage: 'Để chụp ảnh đạt yêu cầu, hãy đảm bảo:',
    description: 'Description for the list of photo tips.',
  },
  'id.verification.photo.tips.list.well.lit': {
    id: 'id.verification.photo.tips.list.well.lit',
    defaultMessage: 'Khuôn mặt được chiếu sáng tốt.',
    description: 'Tip to make sure the user\'s face is well lit.',
  },
  'id.verification.photo.tips.list.inside.frame': {
    id: 'id.verification.photo.tips.list.inside.frame',
    defaultMessage: 'Toàn bộ khuôn mặt nằm trong khung.',
    description: 'Tip to make sure the user\'s face fits inside the frame.',
  },
  'id.verification.portrait.photo.title.camera': {
    id: 'id.verification.portrait.photo.title.camera',
    defaultMessage: 'Chụp ảnh chân dung của bạn',
    description: 'Title for the Portrait Photo page if camera access is enabled.',
  },
  'id.verification.portrait.photo.instructions.camera': {
    id: 'id.verification.portrait.photo.instructions.camera',
    defaultMessage: 'Khi khuôn mặt ở đúng vị trí, hãy dùng nút Chụp ảnh bên dưới để chụp.',
    description: 'Instructions to use the camera to take a portrait photo..',
  },
  'id.verification.camera.help.sight.question': {
    id: 'id.verification.camera.help.sight.question',
    defaultMessage: 'Nếu tôi không thấy hình từ camera hoặc không thấy ảnh để biết mặt nào đang hiển thị thì sao?',
    description: 'Question on what to do if the user cannot see the camera image or photo during verification.',
  },
  'id.verification.camera.help.sight.answer.portrait': {
    id: 'id.verification.camera.help.sight.answer.portrait',
    defaultMessage: 'Bạn có thể tự hoàn tất chụp ảnh, nhưng có thể cần thử gửi vài lần để đặt camera chuẩn. Vị trí tối ưu thay đổi theo từng máy; thường ảnh chân dung đẹp nhất ở khoảng cách 30–45 cm so với camera, đầu ở vị trí giữa so với màn hình. Nếu ảnh bị từ chối, hãy đổi vị trí máy tính/camera để thay góc sáng.',
    description: 'Confirming what to do if the camera image of the portrait cannot be seen during verification.',
  },
  'id.verification.camera.help.sight.answer.id': {
    id: 'id.verification.camera.help.sight.answer.id',
    defaultMessage: 'Bạn có thể tự hoàn tất chụp ảnh, nhưng có thể cần thử gửi vài lần để đặt camera chuẩn. Thường ảnh thẻ rõ nhất ở khoảng cách 20–30 cm, thẻ nằm giữa khung hình. Nếu bị từ chối, hãy đổi vị trí máy tính/camera để thay góc sáng. Lý do hay gặp nhất là không đọc được chữ trên thẻ.',
    description: 'Confirming what to do if the camera image of the ID cannot be seen during verification.',
  },
  'id.verification.camera.help.difficulty.question.portrait': {
    id: 'id.verification.camera.help.difficulty.question.portrait',
    defaultMessage: 'Nếu tôi khó giữ đầu đúng vị trí so với camera thì sao?',
    description: 'Question on what to do if the user has difficulty holding their head relative to the camera.',
  },
  'id.verification.camera.help.difficulty.question.id': {
    id: 'id.verification.camera.help.difficulty.question.id',
    defaultMessage: 'Nếu tôi khó giữ thẻ đúng vị trí so với camera thì sao?',
    description: 'Question on what to do if the user has difficulty holding their ID relative to the camera.',
  },
  'id.verification.camera.help.difficulty.answer': {
    id: 'id.verification.camera.help.difficulty.answer',
    defaultMessage: 'Nếu cần hỗ trợ khi chụp ảnh để gửi, hãy liên hệ bộ phận hỗ trợ {siteName} để nhận thêm gợi ý.',
    description: 'Confirming what to do if the user has difficult holding their head relative to the camera.',
  },
  'id.verification.id.photo.unclear.question': {
    id: 'id.verification.id.photo.unclear.question',
    defaultMessage: 'Ảnh thẻ của bạn không rõ hoặc bị mờ?',
    description: 'Question on what to do if the user\'s ID image is unclear',
  },
  'id.verification.id.tips.title': {
    id: 'id.verification.id.tips.title',
    defaultMessage: 'Mẹo chụp ảnh thẻ định danh',
    description: 'Title for the ID Tips page.',
  },
  'id.verification.id.tips.description': {
    id: 'id.verification.id.tips.description',
    defaultMessage: 'Tiếp theo, chúng tôi cần bạn chụp ảnh thẻ định danh hợp lệ có họ tên và ảnh (như hộ chiếu, bằng lái xe). Hãy chuẩn bị sẵn thẻ.',
    description: 'Description for the ID Tips page.',
  },
  'id.verification.id.tips.list.well.lit': {
    id: 'id.verification.id.tips.list.well.lit',
    defaultMessage: 'Thẻ được chiếu sáng tốt.',
    description: 'Tip to ensure ID is well lit.',
  },
  'id.verification.id.tips.list.clear': {
    id: 'id.verification.id.tips.list.clear',
    defaultMessage: 'Đảm bảo thấy rõ ảnh và đọc rõ họ tên của bạn.',
    description: 'Tip to ensure ID and name can be seen clearly.',
  },
  'id.verification.id.photo.title.camera': {
    id: 'id.verification.id.photo.title.camera',
    defaultMessage: 'Chụp ảnh thẻ định danh của bạn',
    description: 'Title for the ID Photo page if camera access is enabled.',
  },
  'id.verification.id.photo.title.upload': {
    id: 'id.verification.id.photo.title.upload',
    defaultMessage: 'Tải ảnh thẻ định danh của bạn',
    description: 'Title for the ID Photo page if camera access is disabled.',
  },
  'id.verification.id.photo.preview.alt': {
    id: 'id.verification.id.photo.preview.alt',
    defaultMessage: 'Xem trước ảnh thẻ.',
    description: 'Alt text for the ID photo preview.',
  },
  'id.verification.id.photo.instructions.camera': {
    id: 'id.verification.id.photo.instructions.camera',
    defaultMessage: 'Khi thẻ ở đúng vị trí, hãy dùng nút Chụp ảnh bên dưới để chụp. Vui lòng dùng hộ chiếu, bằng lái xe, hoặc thẻ định danh khác có họ tên và ảnh khuôn mặt.',
    description: 'Instructions to use the camera to take an ID photo.',
  },
  'id.verification.id.photo.instructions.upload': {
    id: 'id.verification.id.photo.instructions.upload',
    defaultMessage: 'Vui lòng tải ảnh thẻ định danh. Đảm bảo toàn bộ thẻ nằm trong khung và đủ sáng. Kích thước tệp phải dưới 10 MB. Định dạng hỗ trợ: ',
    description: 'Instructions for ID photo upload.',
  },
  'id.verification.id.photo.instructions.upload.error.invalidFileType': {
    id: 'id.verification.id.photo.instructions.upload.error.invalidFileType',
    defaultMessage: 'Tệp bạn chọn không phải ảnh được hỗ trợ. Vui lòng chọn một trong các định dạng: ',
    description: 'Error message for file upload that is not a supported image type.',
  },
  'id.verification.id.photo.instructions.upload.error.fileTooLarge': {
    id: 'id.verification.id.photo.instructions.upload.error.fileTooLarge',
    defaultMessage: 'Tệp bạn chọn quá lớn. Vui lòng thử lại với tệp nhỏ hơn 10 MB.',
    description: 'Error message for file upload that is larger than 10MB.',
  },
  'id.verification.name.check.title': {
    id: 'id.verification.name.check.title',
    defaultMessage: 'Kiểm tra lại họ tên của bạn',
    description: 'Title for the page where a user double-checks that their name is correct.',
  },
  'id.verification.name.check.instructions': {
    id: 'id.verification.name.check.instructions',
    defaultMessage: 'Tên bên dưới có khớp tên trên thẻ của bạn không? Nếu không, hãy cập nhật để trùng khớp.',
    description: 'Text to instruct the user to check that the name displayed on the page matches what is on their photo ID.',
  },
  'id.verification.name.check.mismatch.information': {
    id: 'id.verification.name.check.mismatch.information',
    defaultMessage: 'Nếu tên bên dưới không khớp thẻ, yêu cầu xác minh sẽ bị từ chối.',
    description: 'Text to inform the user that if the name displayed on the page does not match what is on their photo ID, identity verification will be denied.',
  },
  'id.verification.name.error': {
    id: 'id.verification.name.error',
    defaultMessage: 'Vui lòng nhập họ tên đúng như trên thẻ.',
    description: 'Error that shows when the user needs to update their name to match the name on their ID.',
  },
  'id.verification.account.name.warning.prefix': {
    id: 'id.verification.account.name.warning.prefix',
    defaultMessage: 'Lưu ý:',
    description: 'Prefix to the warning that any change to the account name will be saved to the account.',
  },
  'id.verification.account.name.settings': {
    id: 'id.verification.account.name.settings',
    defaultMessage: 'Thiết lập tài khoản',
    description: 'Link to Account Settings.',
  },
  'id.verification.name.label': {
    id: 'id.verification.name.label',
    defaultMessage: 'Tên',
    description: 'Label for name input.',
  },
  'id.verification.account.name.photo.alt': {
    id: 'id.verification.account.name.photo.alt',
    defaultMessage: 'Ảnh thẻ của bạn sẽ được gửi.',
    description: 'Alt text for the photo of the user\'s ID.',
  },
  'id.verification.review.title': {
    id: 'id.verification.review.title',
    defaultMessage: 'Kiểm tra ảnh của bạn',
    description: 'Title for the review your photos page.',
  },
  'id.verification.review.description': {
    id: 'id.verification.review.description',
    defaultMessage: 'Hãy đảm bảo chúng tôi có thể xác minh danh tính bằng ảnh và thông tin bạn đã cung cấp.',
    description: 'Description for the review your photos page.',
  },
  'id.verification.review.portrait.label': {
    id: 'id.verification.review.portrait.label',
    defaultMessage: 'Ảnh chân dung của bạn',
    description: 'Label for the portrait card.',
  },
  'id.verification.review.portrait.alt': {
    id: 'id.verification.review.portrait.alt',
    defaultMessage: 'Ảnh khuôn mặt của bạn sẽ được gửi.',
    description: 'Alt text for the portrait photo.',
  },
  'id.verification.review.portrait.retake': {
    id: 'id.verification.review.portrait.retake',
    defaultMessage: 'Chụp lại ảnh chân dung',
    description: 'Button to retake the portrait photo.',
  },
  'id.verification.review.id.label': {
    id: 'id.verification.review.id.label',
    defaultMessage: 'Thẻ định danh của bạn',
    description: 'Label for the Photo ID card.',
  },
  'id.verification.review.id.alt': {
    id: 'id.verification.review.id.alt',
    defaultMessage: 'Ảnh thẻ định danh sẽ được gửi.',
    description: 'Alt text for the ID photo.',
  },
  'id.verification.review.id.retake': {
    id: 'id.verification.review.id.retake',
    defaultMessage: 'Chụp lại ảnh thẻ',
    description: 'Button to retake the ID photo.',
  },
  'id.verification.review.confirm': {
    id: 'id.verification.review.confirm',
    defaultMessage: 'Gửi',
    description: 'Button to confirm all information is correct and submit.',
  },
  'id.verification.submission.alert.error.face': {
    id: 'id.verification.submission.alert.error.face',
    defaultMessage: 'Cần có ảnh khuôn mặt. Vui lòng chụp lại ảnh chân dung.',
    description: 'Error message displayed when the user\'s portrait photo is missing.',
  },
  'id.verification.submission.alert.error.id': {
    id: 'id.verification.submission.alert.error.id',
    defaultMessage: 'Cần có ảnh thẻ. Vui lòng chụp lại ảnh thẻ.',
    description: 'Error message displayed when the user\'s ID photo is missing.',
  },
  'id.verification.submission.alert.error.name': {
    id: 'id.verification.submission.alert.error.name',
    defaultMessage: 'Cần có họ tên hợp lệ. Vui lòng cập nhật họ tên giống trên thẻ.',
    description: 'Error message displayed when the user\'s account name is missing.',
  },
  'id.verification.submission.alert.error.unsupported': {
    id: 'id.verification.submission.alert.error.unsupported',
    defaultMessage: 'Một hoặc nhiều tệp bạn tải lên có định dạng không được hỗ trợ. Vui lòng chọn một trong các định dạng sau: ',
    description: 'Error message displayed when the user uploads an unsupported file type.',
  },
  'id.verification.review.error': {
    id: 'id.verification.review.error',
    defaultMessage: 'Trang hỗ trợ {siteName}',
    description: 'Text linking to the platform support page.',
  },
  'id.verification.submitted.title': {
    id: 'id.verification.submitted.title',
    defaultMessage: 'Đang xử lý xác minh danh tính',
    description: 'Title for the submitted page.',
  },
  'id.verification.submitted.text': {
    id: 'id.verification.submitted.text',
    defaultMessage: 'Chúng tôi đã nhận thông tin và đang xác minh danh tính của bạn. Bạn sẽ được thông báo khi hoàn tất (thường trong 5 ngày). Trong lúc chờ, bạn vẫn có thể truy cập tất cả nội dung khóa học khả dụng.',
    description: 'Text confirming that ID verification request has been received.',
  },
  'id.verification.return.dashboard': {
    id: 'id.verification.return.dashboard',
    defaultMessage: 'Về Bảng điều khiển',
    description: 'Button to return to the dashboard.',
  },
  'id.verification.return.course': {
    id: 'id.verification.return.course',
    defaultMessage: 'Về khóa học',
    description: 'Return to the course which ID verification was accessed from.',
  },
  'id.verification.return.generic': {
    id: 'id.verification.return.generic',
    defaultMessage: 'Quay lại',
    description: 'Button to return to the user\'s original location.',
  },
  'id.verification.photo.upload.help.title': {
    id: 'id.verification.photo.upload.help.title',
    defaultMessage: 'Thay vào đó, tải ảnh lên',
    description: 'Title for section that allows switching to photo upload mode.',
  },
  'id.verification.photo.camera.help.title': {
    id: 'id.verification.photo.camera.help.title',
    defaultMessage: 'Thay vào đó, dùng camera',
    description: 'Title for section that allows switching to camera mode.',
  },
  'id.verification.photo.upload.help.text': {
    id: 'id.verification.photo.upload.help.text',
    defaultMessage: 'Nếu gặp khó khăn khi chụp ảnh, bạn có thể chuyển sang tải ảnh lên. Nhấn nút bên dưới để tải ảnh.',
    description: 'Help text for switching to upload mode.',
  },
  'id.verification.photo.camera.help.text': {
    id: 'id.verification.photo.camera.help.text',
    defaultMessage: 'Nếu gặp khó khăn khi tải ảnh, bạn có thể chuyển sang dùng camera. Nhấn nút bên dưới để dùng camera.',
    description: 'Help text for switching to camera mode.',
  },
  'id.verification.photo.upload.help.button': {
    id: 'id.verification.photo.upload.help.button',
    defaultMessage: 'Chuyển sang chế độ Tải ảnh',
    description: 'Button used to switch to upload mode.',
  },
  'id.verification.photo.camera.help.button': {
    id: 'id.verification.photo.camera.help.button',
    defaultMessage: 'Chuyển sang chế độ Camera',
    description: 'Button used to switch to camera mode.',
  },
  'id.verification.context.loading.state': {
    id: 'id.verification.context.loading.state',
    defaultMessage: 'Đang tải trạng thái xác minh',
    description: 'Message shown for screen readers when a user\'s identification verification is in the loading state',
  },
});

export default messages;
