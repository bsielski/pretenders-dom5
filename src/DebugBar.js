import React from 'react';

import './DebugBar.css';


export class DebugBar extends React.Component {
  render() {
    return (
      <div>
        <section className="debug_bar__row">Number of Pretenders: {this.props.noOfPretenders}</section>
        {/*<section className="debug_bar__row">Points left (without pretender): {this.props.points}</section>
        <section className="debug_bar__row">Selected nation is: {this.props.nation}</section>
        <section className="debug_bar__row">Imprisonment is: {this.props.imprisonment}</section>
        <section className="debug_bar__row">isBlessEffectsWindowOpen is: {this.props.isBlessEffectsWindowOpen}</section>
        <section className="debug_bar__row">Dominion is: {this.props.dominion}</section>
        <section className="debug_bar__row">Order is: {this.props.order}</section>
        <section className="debug_bar__row">Productivity is: {this.props.productivity}</section>
        <section className="debug_bar__row">Heat is: {this.props.heat}</section>
        <section className="debug_bar__row">Growth is: {this.props.growth}</section>
        <section className="debug_bar__row">Fortune is: {this.props.fortune}</section>
        <section className="debug_bar__row">Magic is: {this.props.magic}</section>
       */}
      </div>
    );
  }
}
