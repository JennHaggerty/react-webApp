/src
	/routes.js --> is home to the App's navigation and currently renders the different components when called to, or"when navigated to", in:
		-	App.js
				<div className="content">
					{this.props.children}
				</div>
	/login.js logout.js --> toggle the login state and need to pass down said state to its children. 
		Tried:
			- App.js
					<div className="content" 	loggedIn={this.state.loggedIn}>
						...

TODO: 
	- Find the piece of the puzzle that requires a login state to function. Could it be on the App.js page itself, or something on each individual component?