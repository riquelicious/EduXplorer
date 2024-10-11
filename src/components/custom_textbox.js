import React, { useState } from 'react';
import './custom_textbox.css'

export function TextBox({boxName, className}) {
	if (boxName == null) {
		boxName = "boxName";
	}
	return (
		<div className={`textbox-container ${className}`}>
			<input
			type = "text"
			className="textbox"
			/>
			<p className='name'>{boxName}</p>
		</div>
	)
}


export function PassTextBox({boxName, className}) {
	if (boxName == null) {
		boxName = "boxName";
	}
	return (
		<div className={`textbox-container ${className}`}>
			<input
			type = "password"
			className="textbox"
			/>
			<p className='name'>{boxName}</p>
		</div>
	)
}
