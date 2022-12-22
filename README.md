-----
marp: true
theme: gaia
class:
  - invert
-----
# Todo
## Dec 21standerdize
* css animation:
    - take the neo white/black page and then add a suttle keyframe. 
* standerdize theme on the whole page:
    - add the "sleak black and white theme".
    - add the dark light switch to the website as a react component.
----
### example code:
```css
# boiler plate
@keyframes slidein {
  from {
    transform: translateX(0%);
  }

    transform: translateX(0%);
  }

  to {
    transform: translateX(100%);
  }
}


```
---
```css
# up down animation 
div {
  width: 100px;
  height: 100px;
  background: red;
  position: relative;
  animation: mymove 5s infinite;
}

@keyframes mymove {
  0%   {top: 0px;}
  25%  {
    transform: translateX(0%);
  }

  to {
    transform: translateX(100%);
  }
}

top: 50px}
  100% {top: 100px;}
}
```
