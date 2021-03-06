const THREE = require('three')

class Turtle {
  constructor () {
    this.stack = []
    this.lineWidth = 1
    this.position = [0, 0, 0]
    this.rotX = 0
    this.rotY = 0
    this.rotZ = 0
    this.lines = []
  }

  moveTo (length) {
    let geometry = new THREE.Geometry()
    geometry.vertices.push(this.position.clone())
    geometry.vertices.push(new THREE.Vector3(this.position.x + length, this.position.y, this.position.z))
    geometry.rotateX(this.rotX)
    geometry.rotateY(this.rotY)
    geometry.rotateZ(this.rotZ)
    let line = new THREE.Line(geometry)
    this.position = line.geometry.vertices[1].clone()
  }

  drawTo (length, width) {
    let material = new THREE.LineBasicMaterial({
      color: 0x1565C0,
      linewidth: width,
    })
    let geometry = new THREE.BufferGeometry()
    let vertices = new Float32Array([
      0, 0, 0,
      0, length, 0
    ])

    geometry.addAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
    geometry.rotateX(this.rotX)
    geometry.rotateY(this.rotY)
    geometry.rotateZ(this.rotZ)
    geometry.translate(this.position[0], this.position[1], this.position[2])
    geometry.computeBoundingSphere()

    let line = new THREE.Line(geometry, material)
    this.lines.push(line)
    this.position = [
      line.geometry.attributes.position.array[3],
      line.geometry.attributes.position.array[4],
      line.geometry.attributes.position.array[5]
    ]

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


function drawSystem (actions) {
  let turtle = new Turtle()
  for (let action of actions) {
    if (action[0] === 'DRAW') {
      turtle.drawTo(action[1].length, action[1].width)
    } else if (action[0] === 'MOVE') {
      turtle.moveTo(action[1].length)
    } else if (action[0] === 'ROTX') {
      turtle.rotateX(action[1].angle)
    } else if (action[0] === 'ROTY') {
      turtle.rotateY(action[1].angle)
    } else if (action[0] === 'ROTZ') {
      turtle.rotateZ(action[1].angle)
    } else if (action[0] === 'PUSH') {
      turtle.pushState()
    } else {
      turtle.popState()
    }
  }
  return turtle.lines
}

export default {
  Turtle,
  drawSystem
}
