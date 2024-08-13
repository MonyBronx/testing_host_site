// var sceneEl = document.querySelector('a-scene');
// console.log("checking scene "+sceneEl);
// AFRAME.registerComponent('do-something-once-loaded', {
//   init: function () {
//     // This will be called after the entity has properly attached and loaded.
//     console.log('I am ready!');
//   }
// });
// var entityEl = document.createElement('a-entity');
// entityEl.setAttribute('do-something-once-loaded', '');
// sceneEl.appendChild(entityEl);


// AFRAME.registerComponent('foo', {
//     schema: {
//         bar: { type: 'number' },
//         baz: { type: 'string' }
//     },

//     init: function () {
//         console.log("load!");
//         // Do something when component first attached.
//     },

//     update: function () {
//         // Do something when component's data is updated.
//     },

//     remove: function () {
//         // Do something when the component or its entity is detached.
//     },

//     tick: function (time, timeDelta) {
//         // Do something on every scene tick or frame.
//     }
// });

// AFRAME.registerComponent('log', {
//     schema: { type: 'string' },

//     init: function () {
//         var stringToLog = this.data;
//         console.log(stringToLog);
//     }
// });

// AFRAME.registerComponent('initScene', {
//     init: function () {
//         // var sceneEl = document.querySelector('a-scene');
//         // console.log("checking scene " + sceneEl);
//         // var boxEle = document.createElement('a-box');
//         // var ele = document.createElement('a-entity');
//         // sceneEl.appendChild(boxEle);
//         // boxEle.appendChild(ele);
//     }
// })

// AFRAME.registerComponent('scale-mouse', {
//     schema: {
//         to: { default: '2.5 2.5 2.5', type: 'vec3' }
//     },

//     init: function () {
//         console.log("load animate")
//         var data = this.data;
//         var el = this.el;
//         this.el.addEventListener('mouseenter', function () {
//             // el.object3D.scale.copy(data.to);
//             el.setAttribute('animation__001', {'property': 'scale',
//                 'to': {x: 2.5, y: 2.5, z: 2.5},                                 
//                 'startEvents': 'startanim001'});
//         });
//         this.el.addEventListener('mouseleave', function () {
//             el.object3D.scale.set(2, 2, 2);
//         });
//     },
// });

AFRAME.registerComponent('modify-materials', {
    init: function () {
      // Wait for model to load.
      this.el.addEventListener('model-loaded', () => {
        // Grab the mesh / scene.
        const obj = this.el.getObject3D('mesh');
        // Go over the submeshes and modify materials we want.
        obj.traverse(node => {
          if (node.name.indexOf('ship') !== -1) {
            node.material.color.set('red');
          }
        });
      });
    }
  });