const THREE = require('three')

class Turtle {
  constructor () {
    this.stack = []
    this.lineWidth = 1
    this.position = new THREE.Vector3(0, 0, 0)
    this.rotX = 0
    this.rotY = 0
    this.rotZ = Math.PI / 2
    this.lines = []
    // additional params
  }

  moveTo (length) {
    let geometry = new THREE.Geometry()
    geometry.vertices.push(this.position)
    geometry.vertices.push(new THREE.Vector3(this.position.x + length, this.position.y, this.position.z))
    geometry.rotateX(this.rotX)
    geometry.rotateY(this.rotY)
    geometry.rotateZ(this.rotZ)
    let line = new THREE.Line(geometry)
    this.position = line.geometry.vertices[1]
  }

  drawTo (length) {
    let material = new THREE.LineBasicMaterial({color: 0x0000ff})
    let geometry = new THREE.Geometry()
    geometry.vertices.push(this.position)
    geometry.vertices.push(new THREE.Vector3(this.position.x + length, this.position.y, this.position.z))
    geometry.rotateX(this.rotX)
    geometry.rotateY(this.rotY)
    geometry.rotateZ(this.rotZ)
    let line = new THREE.Line(geometry, material)
    this.lines.push(line)
    this.position = line.geometry.vertices[1]
  }

  rotateX (angle) {
    this.rotX += Math.PI / 180 * angle
  }

  rotateY (angle) {
    this.rotY += Math.PI / 180 * angle
  }

  rotateZ (angle) {
    this.rotZ += Math.PI / 180 * angle
  }

  pushState () {
    this.stack.push({
      lineWidth: this.lineWidth,
      position: this.position,
      rotX: this.rotX,
      rotY: this.rotY,
      rotZ: this.rotZ
    })
  }

  popState () {
    let state = this.stack.pop()
    this.lineWidth = state.lineWidth
    this.position = state.position
    this.rotX = state.rotX
    this.rotY = state.rotY
    this.rotZ = state.rotZ
  }
}

export default {
  Turtle
}
