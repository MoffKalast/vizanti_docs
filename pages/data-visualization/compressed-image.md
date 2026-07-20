# <img src="assets/image.svg" width="34"/> Compressed Image

**Message type:** `sensor_msgs/CompressedImage`

Display a CompressedImage in a movable box anywhere on the screen. Drag to reposition it, and set rotation (0/90/180/270°), opacity, box width (screen %) and the socket throttle (default 500 ms). Being image data over the shared socket, it's throttled by default, see the [Tips & FAQ](../faq.md) for guidance on bandwidth and socket throttling.

Point it at the compressed sub-topic published by `image_transport`, e.g. `/camera/image_raw/compressed`, not the raw `sensor_msgs/Image` topic. Those are way too large to send over wifi in any kind of realistic way, even the compresed kind are kinda borderline already unless you're on Ethernet.

## Supported formats

The image is handed straight to the browser to decode, so it works with whatever the browser can natively render, in practice **JPEG and PNG**. The format is read from the message's `format` field: anything containing "png" is treated as PNG, everything else as JPEG.

## rosbridge vs RWS transport

The two backends deliver the image bytes differently, and the widget detects which one it's talking to from the first message:

- **rosbridge** base64-encodes the data into a JSON string.
- **RWS** sends the raw bytes as binary (CBOR), which the widget converts to base64 itself before handing it to the browser.

A big red X on the visualizer instead of your image means that the image failed to decode.

## Depth images

Only PNG is currently supported for `compressedDepth` topics (e.g. `/camera/depth/image_raw/compressedDepth`). The raw 16-bit depth PNG carries a small config header ahead of the actual image, which the widget strips by seeking to the PNG signature. It then applies a fixed brightness boost so the otherwise near-black depth data is visible. This is a quick-look aid rather than a calibrated depth view, values aren't colormapped or scaled to a range. 
