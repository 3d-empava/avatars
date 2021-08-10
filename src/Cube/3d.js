// three.js front page spinning cube with minor changes:

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

let camera = new THREE.PerspectiveCamera( 42, 1, 0.2, 20 );
	camera.position.set( 3.6, 0.66, 3.2 );
	camera.lookAt( 3, 0.66, 1.38 );

let scene = new THREE.Scene();
	scene.background = new THREE.TextureLoader().load( 'background.png', function(lol){console.log(lol)}, null, function(lol){console.error(lol)} );
	scene.add( new THREE.AmbientLight( 0xffdfef, 0.5 ) );

let light = new THREE.DirectionalLight( 0xffffff, 0.7 );
	light.position.set( 0, 1, 2 );
	scene.add( light );

let renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setAnimationLoop( animation );

let clock = new THREE.Clock(), mixer, actions = [];

new GLTFLoader().load( 'thumbs_up/big_smile_girl.gltf', function( gltf ) {

	mixer = new THREE.AnimationMixer( gltf.scene );

	gltf.animations.forEach( function ( clip ) {
		let action = mixer.clipAction( clip ).play();
		setWeight( action, actions.length ? 0 : 1 );
		actions.push( action );
	} );

	scene.add( gltf.scene );

} );

function animation( time ) {

	// do not render if not in DOM:

	if( !renderer.domElement.parentNode ) return;

	if( mixer ) mixer.update( clock.getDelta() );

	renderer.render( scene, camera );

}

// respond to size changes:

function resize() {

	const container = renderer.domElement.parentNode;

	if( container ) {

		const width = container.offsetWidth;
		const height = container.offsetHeight;

		renderer.setSize( width, height );

		camera.aspect = width / height;
		camera.updateProjectionMatrix();

	}

}

window.addEventListener( 'resize', resize );

resize();


// expose a function to interact with react.js:

export function mount( container ) {

	if( container ) {

		container.insertBefore( renderer.domElement, container.firstChild );
		resize();

	} else {

		renderer.domElement.remove();

	}

}

export function playAnimation( index ) {

	let currentAction = actions.find( function( action ) {
		return action.enabled && ( action.weight > 0 );
	} );

	console.log( 'currentAction', actions.indexOf( currentAction ) );

	if( currentAction && actions[index] ) {
		synchronizeCrossFade( currentAction, actions[index], 0.5 );
	}
}

// some code from https://github.com/mrdoob/three.js/blob/master/examples/webgl_animation_skinning_blending.html


			function synchronizeCrossFade( startAction, endAction, duration ) {

				mixer.addEventListener( 'loop', onLoopFinished );

				function onLoopFinished( event ) {

					if ( event.action === startAction ) {

						mixer.removeEventListener( 'loop', onLoopFinished );

						executeCrossFade( startAction, endAction, duration );

					}

				}

			}

			function executeCrossFade( startAction, endAction, duration ) {

				// Not only the start action, but also the end action must get a weight of 1 before fading
				// (concerning the start action this is already guaranteed in this place)

				setWeight( endAction, 1 );
				endAction.time = 0;

				// Crossfade with warping - you can also try without warping by setting the third parameter to false

				startAction.crossFadeTo( endAction, duration, true );

			}

			// This function is needed, since animationAction.crossFadeTo() disables its start action and sets
			// the start action's timeScale to ((start animation's duration) / (end animation's duration))

			function setWeight( action, weight ) {

				action.enabled = true;
				action.setEffectiveTimeScale( 1 );
				action.setEffectiveWeight( weight );

			}