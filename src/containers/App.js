import React, {Component} from 'react';
import CardList from '../components/cardList';
import SearchBox from '../components/SearchBox';
import { connect } from 'react-redux';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import {setSearchField, robotsRequest} from '../actions';


const mapStateToProps = state=>{
	return {
		searchField: state.searchRobots.searchField,
		robots: state.robotsRequest.robots,
		isPending: state.robotsRequest.isPending,
		error:state.robotsRequest.error
	}
}

const mapDispatchToProps = dispatch=>{
     return {
     	onSearchChange: (event)=>dispatch(setSearchField(event.target.value)),
     	onRequestRobots:()=>dispatch(robotsRequest())
     }
}

class App extends Component{

	componentDidMount(){
			this.props.onRequestRobots();

		}

	render()
		    {
		    const {searchField, onSearchChange, robots} =this.props;
			const filteredRobot =robots.filter(robots=>{

			return robots.name.toLowerCase().includes(searchField.toLowerCase());
		
			})
			return (
		<div className='tc'>
           <h1 className='f1'>ROBOTIC APP</h1>
           <SearchBox searchChange={onSearchChange}/> 
           <Scroll>
           <ErrorBoundary>
		<CardList robots={ filteredRobot }/>
		</ErrorBoundary>
		</Scroll>
		</div>

		);
		}
	}

	  


export default connect(mapStateToProps, mapDispatchToProps)(App);