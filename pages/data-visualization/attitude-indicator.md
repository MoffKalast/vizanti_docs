# <img src="assets/navball_icon.svg" width="34"/> Attitude Indicator

**Message types:** `tf2_msgs/TFMessage`, `sensor_msgs/Imu`

A three axis navball for showing orientation from TF links and Imu messages. Shows the quaternion if given, otherwise fuses accelerometer and gyro data with a basic complementary filter.

<video controls width="800">
  <source src="https://private-user-images.githubusercontent.com/9977799/500301325-4c1a3c43-f19d-4c18-b098-2ad844fb00b3.mp4?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODM0NDk1NzYsIm5iZiI6MTc4MzQ0OTI3NiwicGF0aCI6Ii85OTc3Nzk5LzUwMDMwMTMyNS00YzFhM2M0My1mMTlkLTRjMTgtYjA5OC0yYWQ4NDRmYjAwYjMubXA0P1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI2MDcwNyUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNjA3MDdUMTgzNDM2WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9MTVkOTQzY2UyOGZkNDBkMzM1OTQzZDI5ZTljOGQ3YWQ5ZmJkNzM3YTlhNTIyMGIzZjM5YzY0MDQ3MTBmMmYwYyZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmcmVzcG9uc2UtY29udGVudC10eXBlPXZpZGVvJTJGbXA0In0.DvX4XC_vA-jgB-C-ATehRBePhb-ScwQ7TbKBmQY91J4" type="video/mp4">
  Your browser does not support the video tag.
</video>
