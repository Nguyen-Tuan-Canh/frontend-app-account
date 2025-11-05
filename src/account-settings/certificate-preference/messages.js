import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'account.settings.field.name.checkbox.certificate.select': {
    id: 'account.settings.field.name.checkbox.certificate.select',
    defaultMessage: 'Nếu chọn, tên này sẽ hiển thị trên chứng chỉ và các bản ghi công khai.',
    description: 'Nhãn checkbox: tên đã chọn sẽ xuất hiện trên chứng chỉ và các bản ghi công khai.',
  },
  'account.settings.field.name.modal.certificate.title': {
    id: 'account.settings.field.name.modal.certificate.title',
    defaultMessage: 'Chọn tên ưu tiên cho chứng chỉ và các bản ghi công khai',
    description: 'Tiêu đề hướng dẫn người dùng chọn tên ưu tiên.',
  },
  'account.settings.field.name.modal.certificate.select': {
    id: 'account.settings.field.name.modal.certificate.select',
    defaultMessage: 'Chọn tên',
    description: 'Nhãn hướng dẫn người dùng chọn một tên.',
  },
  'account.settings.field.name.modal.certificate.option.full': {
    id: 'account.settings.field.name.modal.certificate.option.full',
    defaultMessage: 'Họ và tên',
    description: 'Tùy chọn đại diện cho họ và tên đầy đủ của người dùng.',
  },
  'account.settings.field.name.modal.certificate.option.verified': {
    id: 'account.settings.field.name.modal.certificate.option.verified',
    defaultMessage: 'Tên đã xác minh',
    description: 'Tùy chọn đại diện cho tên đã được xác minh của người dùng.',
  },
  'account.settings.field.name.modal.certificate.button.choose': {
    id: 'account.settings.field.name.modal.certificate.button.choose',
    defaultMessage: 'Chọn tên',
    description: 'Nút xác nhận lựa chọn tên của người dùng.',
  },
});

export default messages;
