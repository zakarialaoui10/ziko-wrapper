<script setup>
import ZikoUI from "ziko-wrapper/vue";
import {Flex,Canvas,canvasCircle,map} from "ziko";
let scene=Canvas("80%","80%").view(-10,-10,10,10)
scene.onPtrDown(e=>{
    scene.ctx.beginPath()
    scene.ctx.moveTo(
        map(e.dx,0,scene.element.offsetWidth,scene.Xmin,scene.Xmax),
        map(e.dy,0,scene.element.offseHeight,scene.Ymin,scene.Ymax)
        )
})
scene.onPtrMove(e=>{
    if(e.isDown){
        const x=map(e.mx,0,scene.element.offsetWidth,scene.axisMatrix[0][0],scene.axisMatrix[1][0])
        const y=map(e.my,0,scene.element.offsetHeight,scene.axisMatrix[1][1],scene.axisMatrix[0][1])
        scene.append(canvasCircle(x,y,0.4).color({fill:"#5555AA"}).fill())
   }})
scene.onPtrUp(()=>{});
let ui=Flex(scene).vertical(0,0).style({
    width:"95vw",
    height:"95vh",
    margin:"auto"
})
</script>

<template>
  <ZikoUI :ui="ui"/>
</template>
