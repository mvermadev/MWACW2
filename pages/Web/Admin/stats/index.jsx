import React, {useState, useEffect} from 'react';
import {GradientDefs, RadialChart} from 'react-vis';
import clientPromise from "../../../../lib/mongodb";

// Statistical view of the record.
export default function Index({userData}) {
    console.log(userData.map((val)=>{val.userdata.map((val)=>{val.question == "1" ? val.answers.map((subVal)=>subVal) : ''})}))

    // useEffect(async ()=>{
    //     await userData.map((val)=>{val.userdata.map((val)=>{if(val.question == '1'){val.answers.map((val)=>{setData(val)})}})})
    //     console.log(data)
    // }, [])
    // console.log(data)
    const dummy = [{
        id: '1',
        angle: 10,
        gradientLabel: 'grad1',
        label: 'Yes',
        subLabel: '10'
      },
      {
        id: '2',
        angle: 20,
        gradientLabel: 'grad2',
        label: 'No',
        subLabel: '30'
      },
      {
        id: '3',
        angle: 30,
        gradientLabel: 'grad3',
        label: 'Not Anyone',
        subLabel: '30'
      }]
    return (
        <div>
    <RadialChart
      colorType={'literal'}
      colorDomain={[0, 100]}
      colorRange={[0, 10]}
      margin={{top: 100}}
      getColor={d => `url(#${d.gradientLabel})`}
    //   data={results.data.map((x, i) => ({
    //     angle: x.angle,
    //     label: x.label,
    //     color: colors[i],
    //   }))}
    //   data={[userData.map((val)=>{val.question == "1" ? val.answers.map((x,i)=>({
    //       angle: x.angle,
    //       gradientLabel: x.gradientLabel,
    //       label: x.label,
    //       subLabel: x.subLabel
    //   })) : ''})]}
      data={dummy}        
      labelsRadiusMultiplier={1.1}
      labelsStyle={{fontSize: 16, fill: '#222'}}
      showLabels
      style={{stroke: '#fff', strokeWidth: 2}}
      width={400}
      height={300}
    >
      <GradientDefs>
        <linearGradient id="grad1" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="red" stopOpacity={0.4} />
          <stop offset="100%" stopColor="blue" stopOpacity={0.3} />
        </linearGradient>
        <linearGradient id="grad2" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="blue" stopOpacity={0.4} />
          <stop offset="100%" stopColor="green" stopOpacity={0.3} />
        </linearGradient>
        <linearGradient id="grad3" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="yellow" stopOpacity={0.4} />
          <stop offset="100%" stopColor="green" stopOpacity={0.3} />
        </linearGradient>
      </GradientDefs>
    </RadialChart>

    <RadialChart
      colorType={'literal'}
      colorDomain={[0, 100]}
      colorRange={[0, 10]}
      margin={{top: 100}}
      getColor={d => `url(#${d.gradientLabel})`}
    //   data={results.data.map((x, i) => ({
    //     angle: x.angle,
    //     label: x.label,
    //     color: colors[i],
    //   }))}
    //   data={[userData.map((val)=>{val.question == "1" ? val.answers.map((x,i)=>({
    //       angle: x.angle,
    //       gradientLabel: x.gradientLabel,
    //       label: x.label,
    //       subLabel: x.subLabel
    //   })) : ''})]}
      data={dummy}        
      labelsRadiusMultiplier={1.1}
      labelsStyle={{fontSize: 16, fill: '#222'}}
      showLabels
      style={{stroke: '#fff', strokeWidth: 2}}
      width={400}
      height={300}
    >
      <GradientDefs>
        <linearGradient id="grad1" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="red" stopOpacity={0.4} />
          <stop offset="100%" stopColor="blue" stopOpacity={0.3} />
        </linearGradient>
        <linearGradient id="grad2" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="blue" stopOpacity={0.4} />
          <stop offset="100%" stopColor="green" stopOpacity={0.3} />
        </linearGradient>
        <linearGradient id="grad3" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="yellow" stopOpacity={0.4} />
          <stop offset="100%" stopColor="green" stopOpacity={0.3} />
        </linearGradient>
      </GradientDefs>
    </RadialChart>

    <RadialChart
      colorType={'literal'}
      colorDomain={[0, 100]}
      colorRange={[0, 10]}
      margin={{top: 100}}
      getColor={d => `url(#${d.gradientLabel})`}
    //   data={results.data.map((x, i) => ({
    //     angle: x.angle,
    //     label: x.label,
    //     color: colors[i],
    //   }))}
    //   data={[userData.map((val)=>{val.question == "1" ? val.answers.map((x,i)=>({
    //       angle: x.angle,
    //       gradientLabel: x.gradientLabel,
    //       label: x.label,
    //       subLabel: x.subLabel
    //   })) : ''})]}
      data={dummy}        
      labelsRadiusMultiplier={1.1}
      labelsStyle={{fontSize: 16, fill: '#222'}}
      showLabels
      style={{stroke: '#fff', strokeWidth: 2}}
      width={400}
      height={300}
    >
      <GradientDefs>
        <linearGradient id="grad1" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="red" stopOpacity={0.4} />
          <stop offset="100%" stopColor="blue" stopOpacity={0.3} />
        </linearGradient>
        <linearGradient id="grad2" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="blue" stopOpacity={0.4} />
          <stop offset="100%" stopColor="green" stopOpacity={0.3} />
        </linearGradient>
        <linearGradient id="grad3" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="yellow" stopOpacity={0.4} />
          <stop offset="100%" stopColor="green" stopOpacity={0.3} />
        </linearGradient>
      </GradientDefs>
    </RadialChart>
    </div>
  );
}

export async function getServerSideProps(context) {
    const client = await clientPromise;
  
    const db = client.db("sl-user-data");
  
    let userData = await db.collection("user-response").find({}).toArray();
    userData = JSON.parse(JSON.stringify(userData));
  
    return {
      props: { userData },
    };
  }
  