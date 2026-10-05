# Bài 2: Tái cấu trúc lịch sử commit bằng Interactive Rebase

## 1. Mục tiêu

Thực hành sử dụng Interactive Rebase để:

* Gộp nhiều commit nhỏ thành một commit duy nhất.
* Thay đổi thông điệp commit bằng squash/reword.
* Xóa commit không cần thiết bằng drop.
* Làm sạch lịch sử commit trước khi đưa lên remote.

## 2. Các commit ban đầu

Đã tạo 4 commit:

```text
feat: khoi tao module auth
fix typo
adds utility functions
add temp file for debug
```

Trong đó `temp.txt` là file thử nghiệm không cần thiết.

## 3. Thực hiện Interactive Rebase

Sử dụng lệnh:

```bash
git rebase -i HEAD~4
```

Cấu hình Interactive Rebase:

```text
pick <commit-1> feat: khoi tao module auth
squash <commit-2> fix typo
squash <commit-3> adds utility functions
drop <commit-4> add temp file for debug
```

Ảnh chụp màn hình Interactive Rebase:

> Chèn ảnh chụp màn hình tại đây.

## 4. Thông điệp commit sau khi gộp

Sau khi squash các commit, thay đổi thông điệp thành:

```text
feat: hoan thien module authentication
```

## 5. Kiểm tra lịch sử

Sử dụng:

```bash
git log --oneline
```

Kết quả:

```text
<commit-id> feat: hoan thien module authentication
```

Commit `temp.txt` đã được loại bỏ khỏi lịch sử.

## 6. Kiểm tra file

Sau khi rebase, thư mục bài chỉ còn các file cần thiết và không còn:

```text
temp.txt
```

## 7. Kết luận

Đã hoàn thành việc tái cấu trúc lịch sử commit bằng Interactive Rebase:

* Gộp 3 commit nhỏ thành 1 commit.
* Đổi message thành `feat: hoan thien module authentication`.
* Xóa commit chứa `temp.txt` bằng `drop`.
* Lịch sử commit sau cùng sạch và rõ ràng.
