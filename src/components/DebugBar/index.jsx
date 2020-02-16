import React from 'react';

import styles from './DebugBar.module.scss';


class DebugBar extends React.Component {
  render() {
    return (
      <div>
        <section className={styles.row}>Number of Pretenders: {this.props.noOfPretenders}</section>
        {/*<section className={styles.row}>Points left (without pretender): {this.props.points}</section>
        <section className={styles.row}>Selected nation is: {this.props.nation}</section>
        <section className={styles.row}>Imprisonment is: {this.props.imprisonment}</section>
        <section className={styles.row}>isBlessEffectsWindowOpen is: {this.props.isBlessEffectsWindowOpen}</section>
        <section className={styles.row}>Dominion is: {this.props.dominion}</section>
        <section className={styles.row}>Order is: {this.props.order}</section>
        <section className={styles.row}>Productivity is: {this.props.productivity}</section>
        <section className={styles.row}>Heat is: {this.props.heat}</section>
        <section className={styles.row}>Growth is: {this.props.growth}</section>
        <section className={styles.row}>Fortune is: {this.props.fortune}</section>
        <section className={styles.row}>Magic is: {this.props.magic}</section>
       */}
      </div>
    );
  }
}

export default DebugBar;
