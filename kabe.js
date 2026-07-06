function kabeCheck() {
  if(!isPointerDown) return;

  highlightTile = getTileFromXY(pointerX, pointerY);
}
