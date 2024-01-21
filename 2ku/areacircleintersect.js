// https://www.codewars.com/kata/5908242330e4f567e90000a3

// start by calculating the distance d between circle centers. this can be done with hypot.
// golf this by doing d = d / (2*r), and then check if d > 1. if so, the circles are too far apart and return 0.
//       ^ actually we don't need to do this step, because when we floor with |0, it automatically converts NaN to 0 anyways
// now calculate 2 * r * r * (acos(d) - d * sqrt(1 - d * d)) and floor it.
// this is good, but in js this comes out to be >100 chars. we need to golf. let's do some math:
// we notice that sqrt(1 - d * d) is actually just sin(acos(d)), and that d = cos(acos(d)).
// that means we can rewrite d * sqrt(1 - d * d) as sin(acos(d)) * cos(acos(d)), which we can simplify because sin(x)cos(x)=sin(2x)/2.
// we can rewrite this as sin(2 * acos(d)) / 2. since we need to calculate acos(d) again, let's rewrite d as acos(hypot stuff / r / 2).
// the whole expression becomes 2 * r * r * (d - sin(2 * d)/2). nice!
// but we can do better. notice the "2 *" on the outside. if we moved that in, we'd have r * r * (2 * d - sin(2 * d)). we're using 2 * d twice, so let's just rewrite d again as d = 2 * (previous d).
// now we have r * r * (d - sin(d)), which is the most i can golf it to.
// so now we have the following: d = 2 * acos(hypot stuff / r / 2), and we calculate r * r * (d - sin(d)) and floor it. this becomes:
with(Math)circleIntersection=([u,v],[x,y],r)=>((d=2*acos(hypot(u-x,v-y)/r/2))-sin(d))*r*r|0