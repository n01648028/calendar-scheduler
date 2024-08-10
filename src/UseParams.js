import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function UseParams(props) {
  var params;
  params=useParams();
  var { day } = params;
  return (
    <div>
      {React.Children.map(props.children, (child) => {
        var newChild;
        var newprops;
        newChild = {};
        for (let key in child) {
          if (key != "props"){
            newChild[key] = child[key];
          }
          else{
            newprops={};
            for (let key1 in child[key]) {
              newprops[key1] = child[key][key1];
            }
            newprops["params"] = params;
            newChild[key] = newprops;
          }
        }
        return (
          <div>{newChild}</div>
        );
      })}
    </div>
  );
}
export default UseParams;