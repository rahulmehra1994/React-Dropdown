import React from 'react';
var $ = require("jquery");

import { CSSTransitionGroup } from 'react-transition-group';
const transitionEnterTimeout = 300;
const transitionLeaveTimeout = 300;

export default class ImgUploadComp extends React.Component{

	constructor(props){
		super(props);
		this.state={ status: "" };

	}


	componentDidMount(){
	}

	toggleDropdown(comp){
		this.setState({ [comp] : !this.state[comp] });
		$(document).click(()=>{
			$( document ).off( "click");
			this.setState({ [comp] : !this.state[comp] });
		});
	}

	itemAction(val){
		this.setState({status: val});
		this.props.value(val);
	}


	render(){

		return(
			<div className="float_rt relative">
				<span className="float_lt m_t_vs">{this.state.status}</span>
				
				<div className="roundButt m_l_s" onClick={ (e)=> { this.toggleDropdown('dropdownBody') }}>
					<img src={require("./../../img/down-arrow.svg")}/>
				</div>

		        <CSSTransitionGroup
					transitionName="slide"
					transitionEnterTimeout={transitionEnterTimeout}
					transitionLeaveTimeout={transitionLeaveTimeout}
		          >
			 
					{
						(this.state.dropdownBody)?
							<div className="gen_Drop" style={{top: 32, right: 0, width: 180}}>
								{
									this.props.rows.map((item, index)=>{
										return(
											<div key={"dropId"+index} onClick={()=>{ this.itemAction(item.value) }}>{item.label}</div>
										)
									})
								}

							</div> 										
						:
							null
					}
				
				</CSSTransitionGroup>	

			</div>

			);
	}
}





















