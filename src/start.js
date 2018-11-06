import React, { Component } from 'react';

const start = ({ninjas}) => {
//    const ninjaList = ninjas.map(ninja => {
//        return (
//          <div className="ninja" key={ninja.id}>
//                <div>Name: {ninja.name}</div>
//                <div>age: {ninja.age}</div>
//                <div>belt: {ninja.belt}</div>
//            </div>
//        )
//    })
    const ninjaList = ninjas.map(ninja => {
        return ninja.age > 24 ? (
            <div className="ninja" key={ninja.id}>
              <div>Name: {ninja.name}</div>
              <div>age: {ninja.age}</div>
             <div>belt: {ninja.belt}</div>
           </div>
        ) : null;  
    });
    return(
        <div className="ninja-list">
            {ninjaList}
        </div>
    )
}

export default start