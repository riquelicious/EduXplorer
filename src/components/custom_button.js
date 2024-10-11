import './custom_button.css'

export function Button({buttonName, className}) {
	if (buttonName == null) {
		buttonName = "buttonName";
	}
	return (
		<div className={`button-container ${className}`}>
			<button className="button">
				<p className="button-name">{buttonName}</p>
			</button>
		</div>
	)
}
