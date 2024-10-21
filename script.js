// Variáveis globais
let scene, camera, renderer, player;

function init() {
    // Cena
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Luz
    const light = new THREE.AmbientLight(0xffffff); 
    scene.add(light);

    // Criar o boneco de palito
    const geometry = new THREE.BoxGeometry(0.5, 1.5, 0.5); // corpo
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    player = new THREE.Mesh(geometry, material);
    scene.add(player);

    camera.position.z = 5;

    // Controle do jogador
    document.addEventListener('keydown', onKeyDown);
    animate();
}

function onKeyDown(event) {
    switch (event.key) {
        case 'ArrowUp':
            player.position.z -= 0.1; // mover para frente
            break;
        case 'ArrowDown':
            player.position.z += 0.1; // mover para trás
            break;
        case 'ArrowLeft':
            player.position.x -= 0.1; // mover para a esquerda
            break;
        case 'ArrowRight':
            player.position.x += 0.1; // mover para a direita
            break;
    }
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

init();
