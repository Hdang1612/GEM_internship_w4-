export interface Product {
  id: String;
  name: String;
  description?: String;
  price: number;
}

export const products = [
  {
    id: 'sdf1',
    name: 'Bút Gel Nhật Sakura',
    description:
      'Bút gel mực trơn, nét mảnh, thích hợp để viết chữ Nhật hoặc vẽ nét tinh tế.',
    price: 3000,
  },
  {
    id: 'sdf2',
    name: 'Sách Ngữ Pháp N3 - Shinkanzen Master',
    description:
      'Cuốn sách hệ thống kiến thức ngữ pháp N3 đầy đủ, có bài luyện tập và đề thi thử.',
    price: 3000,
  },
  {
    id: 'sdf3',
    name: 'Bảng Hiragana Treo Tường',
    price: 300,
  },
  {
    id: 'sdf4',
    name: 'Flashcard Kanji N3',
    description:
      'Bộ flashcard học Kanji trình độ N3, thiết kế nhỏ gọn dễ mang theo.',
    price: 3000,
  },
  {
    id: 'sdf5',
    name: 'Bàn Phím Dán Chữ Nhật',
    description:
      'Miếng dán bàn phím có ký tự Hiragana/Katakana giúp bạn gõ tiếng Nhật dễ dàng hơn.',
    price: 300,
  },
];
