function fitsInOneBox(boxes) {
  return boxes
    .sort((box1, box2) => {
      return box1.l * box1.w * box1.h > box2.l * box2.w * box2.l ? 1 : -1
    })
    .every((box, i) => {
      const nextBox = boxes[i + 1]
      if (!nextBox) return true
      return box.l < nextBox.l && box.w < nextBox.w && box.h < nextBox.h
    })
}
