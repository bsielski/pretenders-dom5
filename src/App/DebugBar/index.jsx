import React from 'react';
import styles from './DebugBar.module.scss';
import { sum } from 'ramda';

function DebugBar(props) {
    // const { noOfPretenders } = props;
    const {
        scalesCosts,
        pointsForImprisonment,
    } = props;
    const totalCostOfScales = sum(Object.values(scalesCosts));
    // const fBonus = props.blessBonus.f
    return (
        <div>
          <section className={styles.row}>Debugger</section>
          <section className={styles.row}>Imprisonment Points: {pointsForImprisonment}</section>
          <section className={styles.row}>Scales Cost: {totalCostOfScales}</section>
          {/*<section className={styles.row}>Is Bless Effects Window Open: {isBlessEffectsWindowOpen}</section>
          
        
          <section className={styles.row}>F bless bonus: {fBonus}</section>

          
          <section className={styles.row}>Number of Pretenders: {noOfPretenders}</section>
          <section className={styles.row}>Points left (without pretender): {props.points}</section>
          <section className={styles.row}>Selected nation is: {props.nation}</section>
          <section className={styles.row}>Imprisonment is: {props.imprisonment}</section>
          <section className={styles.row}>isBlessEffectsWindowOpen is: {props.isBlessEffectsWindowOpen}</section>
          <section className={styles.row}>Dominion is: {props.dominion}</section>
          <section className={styles.row}>Order is: {props.order}</section>
          <section className={styles.row}>Productivity is: {props.productivity}</section>
          <section className={styles.row}>Heat is: {props.heat}</section>
          <section className={styles.row}>Growth is: {props.growth}</section>
          <section className={styles.row}>Fortune is: {props.fortune}</section>
          <section className={styles.row}>Magic is: {props.magic}</section>
          */
          }
        </div>
    );
}

export default DebugBar;
