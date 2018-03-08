import * as THREE from 'three.min'
let ctx = canvas.getContext('webgl')


/**
 * 游戏主函数
 */
export default class Main {
  constructor() {
    this.start()

  }

  start() {
    let HEIGHT = window.innerHeight;
    let WIDTH = window.innerWidth;
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({ context: ctx });
    this.camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000);
    this.renderer.setSize(WIDTH, HEIGHT);

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);

    this.camera.position.z = 5;

    // 开始循环
    this.loop()
  }

  // 全局碰撞检测
  collisionDetection() {

  }

  // 游戏结束后的触摸事件处理逻辑
  touchEventHandler(e) {

  }

  /**
   * canvas重绘函数
   * 每一帧重新绘制所有的需要展示的元素
   */
  render() {
    // ... 渲染代码块 ...
    this.renderer.render(this.scene, this.camera);
  }

  // 游戏逻辑更新主函数
  update() {
    // ... 数据更新代码块 ...
    this.cube.rotation.x += 0.1;
    this.cube.rotation.y += 0.1;
  }

  // 实现游戏帧循环
  loop() {
    this.update()
    this.render()

    window.requestAnimationFrame(
      this.loop.bind(this),
      canvas
    )
  }
}
