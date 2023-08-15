import React from "react";

const FeaturesDish = ({dish}) => {
    return (
         <ul className="features-dish__list">
                        {dish.featuresDish &&
                            dish.featuresDish.map((item, index) => (
                                <li key={index}>{item.text}</li>
                            ))}
                    </ul>
    )
}

export default FeaturesDish;