import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
	state = {
		options: [],
		selectedOption: undefined
	};
	handleClearSelectedOption = () => {
		this.setState(() => ({ selectedOption: undefined }));
	}
	handleDeleteOptions = () => {
		this.setState(() => ({ options: [] }));
	}
	handleDeleteOption = (optionToRemove) => {
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => {
				return optionToRemove !== option;
			})
		}));
	}
	handlePick = () => {
		const randomNum = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randomNum];
		this.setState(() => ({ selectedOption: option }));
	}
	handleAddOption = (option) => {
		if (!option) {
			return 'Enter valid value to add item';
		} else if (this.state.options.indexOf(option) > -1) {
			return 'This option already exists';
		}

		this.setState((prevState) => ({ options: prevState.options.concat(option) }));
	}
	componentDidMount() {
		try {
			const json = localStorage.getItem('options');

			// We turn the string into an object so we can read it
			const options = JSON.parse(json);

			// We look for "options" in the JSON, if it exists then set the state so it renders on screen
			if (options) {
				this.setState(() => ({ options: options }));
			}
		} catch(e) {
			// Do nothing if the JSON data is invalid
		}
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);
		}
	}
	componentWillUnmount() {
		console.log('Component will unmount');
	}
	render() {
		const subtitle = 'Put your life in the hands of a computer';

		return (
			<div>
				<Header subtitle={subtitle} />
				<div className="container">
					<Action
						hasOptions={this.state.options.length > 0}
						handlePick={this.handlePick}
					/>
					<div className="widget">
						<Options
							options={this.state.options}
							handleDeleteOptions={this.handleDeleteOptions}
							handleDeleteOption={this.handleDeleteOption}
						/>
						<AddOption
							handleAddOption={this.handleAddOption}
						/>
					</div>
				</div>
				<OptionModal
					selectedOption={this.state.selectedOption}
					handleClearSelectedOption={this.handleClearSelectedOption}
				/>
			</div>
		);
	}
}