import React from 'react';

import './NationScalesInfo.css';

export class NationScalesInfo extends React.Component {
    render() {
	const heat = this.props.heat ? "Farourite temperature: "  + this.props.heat : "";
	const growth = this.props.growth ? "Default growth: "  + this.props.growth : "";
	return (
	    <div className="nation_scales_info">
              <p className="nation_scales_info__heat">
		{heat}
              </p>
              <p className="nation_scales_info__growth">
		{growth}
              </p>
	    </div>
	);
    }
}

