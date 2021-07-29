class VisibilityToggle extends React.Component {
	constructor(props) {
		super(props);
		this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
		this.state = {
			visibility: false
		};
	}
	handleToggleVisibility() {
		this.setState((prevState) => {
			return {
				visibility: !prevState.visibility
			};
		});
	}
	render() {
		return (
			<div>
				<h1>Visibility Toggle</h1>
				<button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
				{this.state.visibility && <p>Hey. These are some details you can now see!</p>}
			</div>
		)
	}
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// console.log('Build it visible is running!');

// let app = {
// 	title: 'Visibility Toggle',
// 	textVisible: false
// }

// const toggleVisibility = () => {
// 	app.textVisible = !app.textVisible;
// 	render();
// };

// const appRoot = document.getElementById('app');
// const textElement = document.getElementById('text-info');

// const render = () => {
// 	const template = (
// 		<div>
// 			<h1>{app.title}</h1>
// 			<button onClick={toggleVisibility}>{app.textVisible ? 'Hide details' : 'Show details'}</button>
// 			{app.textVisible && <p id="text-info" >Hey. These are some details you can now see!</p>}
// 		</div>
// 	);
	
// 	ReactDOM.render(template, appRoot);
// };

// render();