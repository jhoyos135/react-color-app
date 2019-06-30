import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import styles from './styles/PaletteListStyles';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Avatar from '@material-ui/core/Avatar'
import blue from '@material-ui/core/colors/blue'
import red from '@material-ui/core/colors/red'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import CheckIcon from '@material-ui/icons/Check'
import CloseIcon from '@material-ui/icons/Close'

export class PaletteList extends Component {

	state = {
		openDeleteDialog: false,
		deletingId: ''
	}

	openDialog = (id) => {
		this.setState({
			openDeleteDialog: true,
			deletingId: id
		})
	};

	closeDialog = () => {
		this.setState({
			openDeleteDialog: false,
			deletingId: ''
		})
	};

	handleDelete = () => {
		this.props.deletePalette(this.state.deletingId);
		this.setState({
			openDeleteDialog: false
		})
	};

	// renderPalettes = () => {
			
	// 			this.props.palettes.map((palette) => {
	// 				<MiniPalette {...palette} key={palette.id} handleClick={() => this.goToPalette(palette.id)} handleDelete={this.props.deletePalette} id={palette.id} />;
	// 		})
			
	// };

	goToPalette = (id) => {
		this.props.history.push(`/palette/${id}`);
	};

	render() {
		return (
			<div className={this.props.classes.root}>
				<div className={this.props.classes.container}>
					<nav className={this.props.classes.nav}>
						<h1>React-Color-App</h1>
						<Link to="/palette/new">Create New Palette</Link>
					</nav>
						
						<TransitionGroup className={this.props.classes.palettes}> 
							{
								this.props.palettes.map((palette) => {
									return (
										<CSSTransition 
										key={palette.id} 
										classNames='fade' 
										timeout={300}
										>
										<MiniPalette 
										{...palette} 
										key={palette.id} 
										handleClick={this.goToPalette} 
										//handleDelete={this.props.deletePalette} 
										openDialog={this.openDialog}
										id={palette.id} />
									</CSSTransition>
									)

									})
							}
						</TransitionGroup>	
				</div>
				<Dialog
				open={this.state.openDeleteDialog}
				aria-label='delete-dialog-title'
				onClose={this.closeDialog}
				>
							<DialogTitle id="delete-dialog-title">Delete this Palette</DialogTitle>
							<List>
								<ListItem
								onClick={this.handleDelete}
								 button>
									<ListItemAvatar>
										<Avatar style={{background: blue[100], color: blue[600]}}>
											<CheckIcon />
										</Avatar>
									</ListItemAvatar>
									<ListItemText primary='Delete' />
								</ListItem>
								<ListItem 
								onClick={this.closeDialog}
								button>
									<ListItemAvatar>
										<Avatar style={{background: red[100], color: red[600]}}>
											<CloseIcon />
										</Avatar>
									</ListItemAvatar>
									<ListItemText primary='Cancel' />
								</ListItem>
							</List>
				</Dialog>
			</div>
		);
	}
}

export default withStyles(styles)(PaletteList);
