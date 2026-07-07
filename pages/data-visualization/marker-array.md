# <img src="assets/markerarray.svg" width="34"/> Marker Array

**Message type:** `visualization_msgs/MarkerArray`

Visualize a MarkerArray. Currently supported types are ARROW, CUBE, SPHERE, CYLINDER, LINE_STRIP and TEXT_VIEW_FACING. Since each of these widgets adds another canvas layer, it makes more sense to aggregate regular Marker messages into a Marker Array to avoid some of that overhead.

Rviz parity test:

![Render](assets/screenshots/markerarray.jpg)

Octomap test:

![Render](assets/screenshots/octomap.jpg)

TRIANGLE_LIST test:

<video controls width="800">
  <source src="https://private-user-images.githubusercontent.com/9977799/578543983-cdf148c0-f46a-43d1-bafa-5616b5a932f7.mp4?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODM0NDg2MzQsIm5iZiI6MTc4MzQ0ODMzNCwicGF0aCI6Ii85OTc3Nzk5LzU3ODU0Mzk4My1jZGYxNDhjMC1mNDZhLTQzZDEtYmFmYS01NjE2YjVhOTMyZjcubXA0P1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI2MDcwNyUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNjA3MDdUMTgxODU0WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9MjY0NzY0OTZhZDIxNTE3MmVjMzU4MmU2OGMwYjkzODQ4YjM0NWUzOTc2OWMxOGQ4NjFkNjljYTZhMGEyZWI5ZSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmcmVzcG9uc2UtY29udGVudC10eXBlPXZpZGVvJTJGbXA0In0.yIhUyAVllLBPjBzD2hmMu7HArNj-ZLh5zwtCT0pB4ow" type="video/mp4">
  Your browser does not support the video tag.
</video>

As in rviz, namespacing can be used to separate and toggle marker types:

![Render](assets/screenshots/markerarray_ui.jpg)