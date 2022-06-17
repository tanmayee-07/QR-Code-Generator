# QR-Code-Generator

- QR Code stands for Quick Response code. It is a two-dimensional version of the barcode, typically made up of black and white pixel patterns.
- In this project, Google Chart API has been used for QR Code generation.
- The QR code that will be created can store upto 4000 alphanumeric characters of arbitrary text.
- This text can be anything - URL, phone number, short story, etc.

*URL of Google Chart API: https://chart.googleapis.com/chart?

- We need to add query parameters to the url:

1. cht=qr is for the QR code
2. chs=<width>*<height> for image size
3. chl=data for data to encode. It can be digits, alphanumeric characters or binary bytes.

- eg: https://chart.googleapis.com/chart?cht=qr&chs=150x150&chl=Hello

- The user will specify the text to be encoded along with the height and width.

