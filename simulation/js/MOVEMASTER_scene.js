/**
 * 
 *  Document     : MOVEMASTER_scene.js
 *  Created on   : 13 April, 2016, 4:45:25 PM
 *  Author       : Ujjal Dey
 *  Organization : IIT Khatagpur
 *  
 */
var RM501 = {
    scene: null,
    camera: null,
    container: null,
    stats: null,
    controls: null,
    renderer: null,
    CONTAINER_WIDTH: null,
    CONTAINER_HEIGHT: null,
    Link2Mesh: null,
    Link3Mesh: null,
    Link4Mesh: null,
    CylinderL2: null,
    Cylinder6L5: null,
    CylinderL6: null,
    Cylinder4L5: null,
    Cylinder3L5: null,
    Box3L6: null,
    Box4L6: null,
    Cylinder2L1: null,
    Cylinder2L3: null,
    init: function ()
    {
// create main scene
        this.scene = new THREE.Scene();
        window.scene = this.scene;
        this.container = document.getElementById("canvas3d-view");
        this.scene.position.set(0, -400, 0);
        this.CONTAINER_WIDTH = this.container.offsetWidth;
        this.CONTAINER_HEIGHT = this.container.offsetHeight;
//  renderer
        this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: false});
        this.renderer.setSize(this.CONTAINER_WIDTH, this.CONTAINER_HEIGHT);
        this.renderer.setClearColor("#356fb8", 1); // Set the background color of the canvas to black
        this.renderer.shadowMapEnabled = true;
        this.renderer.shadowMapSoft = true;
        this.container.appendChild(this.renderer.domElement);

// camera
        var VIEW_ANGLE = 45, ASPECT = this.CONTAINER_WIDTH / this.CONTAINER_HEIGHT, NEAR = 1, FAR = 10000;
        this.camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
        //this.camera.position.z = 500;
        this.camera.position.set(50, 50, 1500);   //
        //this.camera.lookAt(new THREE.Vector3(0, 0, 0));
        this.camera.lookAt(this.scene.position);
        this.controls = new THREE.TrackballControls(this.camera, this.renderer.domElement);

        this.controls.rotateSpeed = 5.0;
        this.controls.zoomSpeed = 1.2;
        this.controls.panSpeed = 0.8;

        this.controls.noZoom = false;
        this.controls.noPan = false;

        this.controls.staticMoving = true;
        this.controls.dynamicDampingFactor = 0.3;

        this.controls.keys = [65, 83, 68];
        this.controls.enabled = false;
        this.controls.addEventListener('change', render, { passive: false });
        // 
        // 
        var dirLight = new THREE.DirectionalLight(0xffffff, 2.5);
        dirLight.position.set(500, 0, 500);
        this.scene.add(dirLight);

        var dirLight1 = new THREE.DirectionalLight(0xffffff, 2.5);
        dirLight1.position.set(0, 150, -500);
        this.scene.add(dirLight1);
// Stats preparing
        this.stats = new Stats();
        this.stats.domElement.style.position = 'absolute';
        this.stats.domElement.style.top = '190px';
        this.container.appendChild(this.stats.domElement);
// scene
// // Add axes, The X axis is red. The Y axis is green. The Z axis is blue.
        //
        axes = buildAxes(400);
        //axes.position = mesh.position;
        this.scene.add(axes);

        gridX = new THREE.GridHelper(1000, 100);    //green
        gridX.setColors(new THREE.Color(0x660000), new THREE.Color(0x660000));
        gridX.position.set(0, 0, 0);
        this.scene.add(gridX);

        gridZ = new THREE.GridHelper(1000, 100);
        gridZ.position.set(0, 1000, -1000);
        gridZ.rotation.x = Math.PI / 2;
        gridZ.setColors(new THREE.Color(0x000066), new THREE.Color(0x000066));
        this.scene.add(gridZ);

        gridY = new THREE.GridHelper(1000, 100);
        gridY.position.set(-1000, 1000, 0);
        gridY.rotation.z = Math.PI / 2;
        gridY.setColors(new THREE.Color(0x006600), new THREE.Color(0x006600));
        this.scene.add(gridY);
// create geometries 
//create Link1
        CylinderL1 = new THREE.Mesh(new THREE.CylinderGeometry(120, 120, 70, 8), new THREE.MeshPhongMaterial({color: "#0D0B0A"}));
        CylinderL1.position.set(0, 25, 0);
        this.scene.add(CylinderL1);

        Cylinder1L1 = new THREE.Mesh(new THREE.CylinderGeometry(70, 70, 90, 100), new THREE.MeshPhongMaterial({color: "#201C1A"}));
        Cylinder1L1.position.set(0, 50, 0);
        CylinderL1.add(Cylinder1L1);

        this.Cylinder2L1 = new THREE.Mesh(new THREE.CylinderGeometry(40, 40, 90, 100), new THREE.MeshPhongMaterial({color: "#191514"}));
        this.Cylinder2L1.position.set(0, 70, 0);
        Cylinder1L1.add(this.Cylinder2L1);

        //create link 2       
        this.Box1L2 = new THREE.Mesh(new THREE.BoxGeometry(250, 6 * Math.PI / 2, 130, 30, 130), new THREE.MeshPhongMaterial({color: "#F4341A"}));
        this.Box1L2.position.set(30, 40, 0);
        this.Cylinder2L1.add(this.Box1L2);

        Box2L2 = new THREE.Mesh(new THREE.BoxGeometry(250, 20, 100), new THREE.MeshNormalMaterial());
        Box3L2 = new THREE.Mesh(new THREE.BoxGeometry(150, 20, 100), new THREE.MeshNormalMaterial());
        Box3L2.position.set(0, 0, -45);
        Box3L2.rotation.y -= 0.2;
        // Box2L2.add(Box3L2);
        Cylinder1L2 = new THREE.Mesh(new THREE.CylinderGeometry(55, 55, 20, 200), new THREE.MeshNormalMaterial());
        Cylinder1L2.position.set(-70, 0, -54.3);
        // Box3L2.add(Cylinder1L2);
        Cylinder2L2 = new THREE.Mesh(new THREE.CylinderGeometry(45, 45, 20, 200), new THREE.MeshNormalMaterial());
        Cylinder2L2.position.set(80, 0, -35);

        Link1 = new THREE.Geometry();
        THREE.GeometryUtils.merge(Link1, Box2L2);
        THREE.GeometryUtils.merge(Link1, Box3L2);
        THREE.GeometryUtils.merge(Link1, Cylinder1L2);
        THREE.GeometryUtils.merge(Link1, Cylinder2L2);
        Link1Mesh = new THREE.Mesh(Link1, new THREE.MeshPhongMaterial({color: "#F4341A"}));
        Link1Mesh.rotation.x = +Math.PI / 2;
        Link1Mesh.position.set(0, 50, -55);
        this.Box1L2.add(Link1Mesh);

        Link2 = new THREE.Geometry();
        THREE.GeometryUtils.merge(Link2, Box2L2);
        THREE.GeometryUtils.merge(Link2, Box3L2);
        THREE.GeometryUtils.merge(Link2, Cylinder1L2);
        THREE.GeometryUtils.merge(Link2, Cylinder2L2);
        Link2Mesh = new THREE.Mesh(Link2, new THREE.MeshPhongMaterial({color: "#F4341A", shading: THREE.FlatShading, opacity: 10, blending: THREE.AdditiveBlending}));
        Link2Mesh.rotation.x = +Math.PI / 2;
        Link2Mesh.position.set(0, 50, 55);
        this.Box1L2.add(Link2Mesh);

        Box4L2 = new THREE.Mesh(new THREE.BoxGeometry(20, 100, 100), new THREE.MeshPhongMaterial({color: "#F4341A", shininess: 1000}));
        Box4L2.position.set(115, 50, 0);
        this.Box1L2.add(Box4L2);
        Box5L2 = new THREE.Mesh(new THREE.BoxGeometry(130, 20, 130), new THREE.MeshPhongMaterial({color: "#F4341A", shininess: 1000}));
        Box5L2.position.set(20, 133, 0);
        // Box5L2.rotation.z = +Math.PI / 2;
        Box5L2.rotation.z -= 0.2;
        this.Box1L2.add(Box5L2);

        Cylinder3L2 = new THREE.Mesh(new THREE.CylinderGeometry(40, 40, 130, 300), new THREE.MeshPhongMaterial({color: "#F4341A", shininess: 1000}));
        Cylinder3L2.position.set(-29.8, 39.5, 0);
        Cylinder3L2.rotation.x += Math.PI / 2;
        Box4L2.add(Cylinder3L2);

        // create link 3
        this.CylinderL3 = new THREE.Mesh(new THREE.CylinderGeometry(20, 20, 150, 100), new THREE.MeshPhongMaterial({color: "#F45815", shininess: 1000}));
        this.CylinderL3.position.set(-80, 90, 0);
        this.CylinderL3.rotation.x += Math.PI / 2;
        this.CylinderL3.rotation.y += Math.PI / 2;
        this.Box1L2.add(this.CylinderL3);

        this.BoxL3 = new THREE.Mesh(new THREE.BoxGeometry(80, 180, 110), new THREE.MeshNormalMaterial());
        this.BoxL3.position.set(0, 40, 0);

//this.scene.add(this.BoxL3);
        Box2L3 = new THREE.Mesh(new THREE.BoxGeometry(80, 60, 80), new THREE.MeshNormalMaterial());
        Box2L3.position.set(0, 168, -22.58);
        Box2L3.rotation.x += Math.PI / 2;
        Box2L3.rotation.x += 0.06;

        Box3L3 = new THREE.Mesh(new THREE.BoxGeometry(80, 60, 80), new THREE.MeshNormalMaterial());
        Box3L3.position.set(0, 168, 22.58);
        Box3L3.rotation.x += Math.PI / 2;
        Box3L3.rotation.x -= 0.06;

        this.Cylinder2L3 = new THREE.Mesh(new THREE.CylinderGeometry(40, 40, 150, 200), new THREE.MeshNormalMaterial());
        this.Cylinder2L3.position.set(0, 60, 0);
        this.Cylinder2L3.rotation.z += Math.PI / 2;
        //this.scene.add(Cylinder2L3);

        Cylinder3L3 = new THREE.Mesh(new THREE.CylinderGeometry(51, 51, 80, 200), new THREE.MeshNormalMaterial());
        Cylinder3L3.position.set(0, 200, 0);
        Cylinder3L3.rotation.z += Math.PI / 2;

        Link3 = new THREE.Geometry();
        THREE.GeometryUtils.merge(Link3, this.BoxL3);
        THREE.GeometryUtils.merge(Link3, Box2L3);
        THREE.GeometryUtils.merge(Link3, Box3L3);
        THREE.GeometryUtils.merge(Link3, Cylinder3L3);
        this.Link3Mesh = new THREE.Mesh(Link3, new THREE.MeshPhongMaterial({color: "#ff5e4a", shininess: 100, lights: true}));
        this.Link3Mesh.position.set(10, 0, 0);
        this.Link3Mesh.rotation.x = -Math.PI / 2;
        this.Link3Mesh.rotation.y = -Math.PI / 2;
        //this.Link3Mesh.rotation.z = +0.007;
        //this.Link3Mesh.rotation.z = -Math.PI / 2;
        this.CylinderL3.add(this.Link3Mesh);
		//RM501.CylinderL3.rotation.x += -Math.PI / 2;
		//RM501.CylinderL3.rotation.y += Math.PI / 2;

        // create link 4
        Box2L4 = new THREE.Mesh(new THREE.BoxGeometry(60, 200, 80), new THREE.MeshNormalMaterial());
        Box2L4.position.set(-70, 80, 0);

        CylinderL4 = new THREE.Mesh(new THREE.CylinderGeometry(50, 50, 70, 100), new THREE.MeshNormalMaterial({colour: "red", transparent: true}));
        CylinderL4.position.set(-70, 5, 0);
        CylinderL4.rotation.z += Math.PI / 2;
        //Box3L4.add(CylinderL4);
        Cylinder2L4 = new THREE.Mesh(new THREE.CylinderGeometry(30, 30, 120, 200), new THREE.MeshNormalMaterial({color: 0xffaaff}));
        Cylinder2L4.position.set(-70, 0, 0);
        Cylinder2L4.rotation.z += Math.PI / 2;
        //Box3L4.add(Cylinder2L4);
        Link4 = new THREE.Geometry();
        THREE.GeometryUtils.merge(Link4, Cylinder2L4);
        THREE.GeometryUtils.merge(Link4, Box2L4);
        THREE.GeometryUtils.merge(Link4, CylinderL4);
        this.Link4Mesh = new THREE.Mesh(Link4, new THREE.MeshPhongMaterial({color: "#ff3e4a", transparent: false, blending: THREE.SubtractiveBlending}));
        this.Link4Mesh.position.set(70, 200, 0);
        this.Link4Mesh.rotation.x += 0.7;
        //this.scene.add(axes);
        this.Link3Mesh.add(this.Link4Mesh);
//create link 5

//        Cylinder2L5 = new THREE.Mesh(new THREE.CylinderGeometry(40, 40, 20, 50), new THREE.MeshNormalMaterial({color: "pink", transparent: false, blending: THREE.AdditiveBlending}));
//        //this.Cylinder3L5.position.set(0, 50, 0);
//        Cylinder2L5.rotation.z += Math.PI / 2;
//        this.Link4Mesh.add(Cylinder2L5);

        this.Cylinder3L5 = new THREE.Mesh(new THREE.CylinderGeometry(43, 43, 30, 100), new THREE.MeshPhongMaterial({color: "#0D0B0A", transparent: false, blending: THREE.SubtractiveBlending}));
        this.Cylinder3L5.position.set(-40, 170, 0);
        this.Cylinder3L5.rotation.z += Math.PI / 2;
        this.Link4Mesh.add(this.Cylinder3L5);

        this.Cylinder4L5 = new THREE.Mesh(new THREE.CylinderGeometry(43, 43, 44, 100), new THREE.MeshNormalMaterial({colour: "green"}));
        this.Cylinder4L5.position.set(-75, 170, 0);
        this.Cylinder4L5.rotation.z += Math.PI / 2;
		this.Cylinder4L5.rotation.x += Math.PI / 2;
        this.Link4Mesh.add(this.Cylinder4L5);
//
        Cylinder5L5 = new THREE.Mesh(new THREE.CylinderGeometry(43, 43, 30, 100), new THREE.MeshPhongMaterial({color: "#0D0B0A", transparent: false, blending: THREE.SubtractiveBlending}));
        this.Link4Mesh.add(Cylinder5L5);
        Cylinder5L5.rotation.z += Math.PI / 2;
        Cylinder5L5.position.set(-110, 170, 0);
//
        this.Cylinder6L5 = new THREE.Mesh(new THREE.CylinderGeometry(23, 23, 100, 100), new THREE.MeshNormalMaterial({colour: "green"}));
        this.Cylinder6L5.rotation.z += Math.PI / 2;
        this.Cylinder6L5.position.set(60, 0, 0);
        this.Cylinder4L5.add(this.Cylinder6L5);
        ///link 6
        Box1L6 = new THREE.Mesh(new THREE.BoxGeometry(60, 100, 60), new THREE.MeshPhongMaterial({color: "0xffffff", specular: "0x009900", shininess: 1}));
        // Box1L6.rotation.z += Math.PI / 2;
        Box1L6.position.set(0, -60, 0);
        this.Cylinder6L5.add(Box1L6);

        Box2L6 = new THREE.Mesh(new THREE.BoxGeometry(100, 20, 55), new THREE.MeshNormalMaterial({color: "#101014", shininess: 100}));
        Box2L6.position.set(0, -60, 0);
        Box1L6.add(Box2L6);

        this.Box3L6 = new THREE.Mesh(new THREE.BoxGeometry(60, 15, 40), new THREE.MeshNormalMaterial({color: "#101014", shininess: 100}));
        this.Box3L6.rotation.z += Math.PI / 2;
        this.Box3L6.position.set(-40, -30, 0);
        this.Box3L6.rotation.z += 0.07;
        Box2L6.add(this.Box3L6);
        this.Box4L6 = new THREE.Mesh(new THREE.BoxGeometry(60, 15, 40), new THREE.MeshNormalMaterial({color: "#101014", shininess: 100, specular: 0x050505, }));
        this.Box4L6.rotation.z += Math.PI / 2;
        this.Box4L6.position.set(40, -30, 0);
        this.Box4L6.rotation.z -= 0.07;
        Box2L6.add(this.Box4L6);
        this.container.addEventListener('mouseover', onContainerMouseOver, false);
        this.container.addEventListener('mouseout', onContainerMouseOut, false);

//        document.addEventListener('mousemove', onContainerMouseMove, false);
//        document.addEventListener('mousedown', onContainerMouseDown, false);
//        document.addEventListener('keydown', onContainerKeyDown, false);
//        document.addEventListener('keyup', onContainerKeyUp, false);
//        document.addEventListener('touchstart', onDocumentTouchStart, false);
//        document.addEventListener('touchmove', onDocumentTouchMove, false);
    }
};
function onContainerMouseOver() {
    RM501.controls.enabled = true;
}
function onContainerMouseOut() {
    RM501.controls.enabled = false;
}
// Animate the scene
function animate() {
    requestAnimationFrame(animate);
    update();
    render();
}
// Update controls and stats
function update() {
//    AXISCubeScene.controls.update(AXISCubeScene.clock.getDelta());
    RM501.controls.update();
    RM501.stats.update();
}
// Render the scene
function render() {
    if (RM501.renderer) {
        RM501.renderer.render(RM501.scene, RM501.camera);
    }
	//RM501.renderer.dispose();
//this.renderer.forceContextLoss();
}