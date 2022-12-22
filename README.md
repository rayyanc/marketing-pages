-----
marp: true
theme: gaia
class:
  - invert
-----
# Todo<p align="center">
2
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts">
3
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
4
  </a>
5
</p>
6
<h1 align="center">
7
  Gatsby minimal TypeScript starter
8
</h1>
9
​
10
## 🚀 Quick start
11
​
12
1.  **Create a Gatsby site.**
13
​
14
    Use the Gatsby CLI to create a new site, specifying the minimal TypeScript starter.
15
​
16
    ```shell
17
    # create a new Gatsby site using the minimal TypeScript starter
18
    npm init gatsby
19
    ```
20
​
21
2.  **Start developing.**
22
​
23
    Navigate into your new site’s directory and start it up.
24
​
25
    ```shell
26
    cd my-gatsby-site/
27
    npm run develop
28
    ```
29
​
30
3.  **Open the code and start customizing!**
31
​
32
    Your site is now running at http://localhost:8000!
33
​
34
    Edit `src/pages/index.tsx` to see your site update in real-time!
35
​
36
4.  **Learn more**
37
​
38
    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
39
​
40
    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
41
​
42
    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
43
​
44
    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
45
​
46
    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
47
​
48
    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
49
​
50
## 🚀 Quick start (Gatsby Cloud)
51
​
52
Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):
53
​
54
[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-minimal-ts)
55

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
