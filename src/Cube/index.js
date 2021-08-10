import { useCallback } from 'react';
import { mount, playAnimation } from './3d';
import './index.css';

function selectAnimation( event ) {
	playAnimation( event.target.selectedIndex );
}

export default function Cube() {
	const containerRef = useCallback(mount, []);
	return <>
		<div className="Cube-container" ref={containerRef}></div>
		<select onChange={selectAnimation} defaultValue="0">
			<option value="0">First</option>
			<option value="1">Second</option>
			<option value="2">Third</option>
		</select>
	</>
}