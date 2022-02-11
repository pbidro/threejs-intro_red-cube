const canvas = document.querySelector('.webgl')

console.log(THREE)
//Scene, es la escena que contiene todo lo que crearemos. es el lienzo
const scene = new THREE.Scene()

//Es la figura que agregaremos
//se compone de una geometria y un material en este caso haremos un cubo rojo


const geometry = new THREE.BoxGeometry(1,1,1)

const material = new THREE.MeshBasicMaterial({color: 'red'})

const mesh = new THREE.Mesh(geometry,material)

scene.add(mesh)

//Camera
const sizes = {

    width:800,
    height:600
}
const camera = new THREE.PerspectiveCamera(75,sizes.width / sizes.height)
camera.position.z = 4
camera.rotation.z = 3
camera.position.x = 2


scene.add(camera)

console.log(canvas)
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width,sizes.height)

renderer.render(scene,camera)