import React , { memo }from 'react';
import Card from './Card';

const CardList = memo(({robots}) => {
		return(
		<div>
		{
		  robots.map((user,i) => {
		    return (
			    <Card 
			      key={i} 
			      id={robots[i].id} 
			      name={robots[i].name} 
		          email={robots[i].email}
			    />
		    );
	      })
		}
		</div>
	);
})

export default CardList;