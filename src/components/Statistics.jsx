// import React from 'react';
// import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

// const Statistics = () => {
//   const data01 = [
//     { name: 'Group A', value: 400 },
//     { name: 'Group B', value: 300 },
//     { name: 'Group C', value: 300 },
//     { name: 'Group D', value: 200 },
//     { name: 'Group E', value: 278 },
//     { name: 'Group F', value: 189 },
//   ];

//   const data02 = [
//     { name: 'Group A', value: 2400 },
//     { name: 'Group B', value: 4567 },
//     { name: 'Group C', value: 1398 },
//     { name: 'Group D', value: 9800 },
//     { name: 'Group E', value: 3908 },
//     { name: 'Group F', value: 4800 },
//   ];

//   return (
//     <ResponsiveContainer width="100%" height={400}>
//       <PieChart>
//         <Pie
//           dataKey="value"
//           isAnimationActive={false}
//           data={data01}
//           cx="50%"
//           cy="50%"
//           outerRadius={80}
//           fill="#8884d8"
//           labelLine={false}
//         />
//         <Pie
//           dataKey="value"
//           data={data02}
//           cx="50%"
//           cy="50%"
//           innerRadius={40}
//           outerRadius={80}
//           fill="#82ca9d"
//         />
//         <Tooltip />
//       </PieChart>
//     </ResponsiveContainer>
//   );
// };

// export default Statistics;


import React from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const data = [
        { name: 'Assignment 1', mark: 55 },
        { name: 'Assignment 2', mark: 44 },
        { name: 'Assignment 3', mark: 48 },
        { name: 'Assignment 4', mark: 40 },
        { name: 'Assignment 5', mark: 55 },
        { name: 'Assignment 6', mark: 52 },
        { name: 'Assignment 7', mark: 60 },
        { name: 'Assignment 8', mark: 58 }
    ];

    return (

        <div className='container'>
            <h1 className='text-center text-success fw-bold' style={{ marginTop: '10rem' }}>Assignment Analytics :
            </h1>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        dataKey="mark"
                        isAnimationActive={false}
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    />
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;
