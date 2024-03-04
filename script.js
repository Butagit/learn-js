'use strict';

let students = {
    js: [{
        name: 'Vasya',
        progress: 100
    }, {
        name: 'Jonh',
        progress: 60
        }],

    html: {
        basic: [{
            name: 'anna',
            progress: 20 
        }, {
                name: 'Petya',
                progress: 18 
            }],

        pro: [{
            name: 'pavel',
            progress: 10
        }]
    }    
}


// function getTotalProgress(data) {
//     let total = 0;
//     let student = 0;
//     for (let course of Object.values(data)) {
//         if (Array.isArray(course)) {
//             student += course.length;

//             for (let i = 0; i < course.length; i++) {
//                 total += course[i].progress;
//             }
//         } else {
//             for (let subCourse of Object.values(course)) {
//                 student += subCourse.length;

//                     for (let i = 0; i < subCourse.length; i++) {
//                         total += subCourse[i].progress;
//                     }                
//         }   }
//     }





//     return total / student;
// }

function getTotalProgressRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }
        return [total, data.length];
    } else {
        let total = [0, 0];
        for ( let subData of Object.values(data)) {
            const subDataArr = getTotalProgressRecursion(subData);
            total[0] += subDataArr[0]
            total[1] += subDataArr[1]
        }

        return total;
    }     
}

const result = getTotalProgressRecursion(students);

console.log(result[0] / result[1]);

// console.log(getTotalProgress(progress));