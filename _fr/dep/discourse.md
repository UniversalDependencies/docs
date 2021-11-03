---
layout: relation
title: 'discourse'
shortdef: 'discourse element'
udver: '2'
---

This is used for interjections and other discourse particles and elements, which are not clearly linked to the structure of the sentence except in an expressive way.

~~~ sdparse
Waouh , c' était fun :) \n Wow , that was fun :)
discourse(fun, :)-6)
discourse(fun, Waouh)
~~~

~~~ sdparse
Bref , une occasion à ne pas laisser passer \n In short, an opportunity that should not be passed on
discourse(occasion, Bref)
~~~

~~~ sdparse
je traverse euh face à la euh MDE \n I cross the road uh in front of the uh MDE
discourse(traverse-2,euh-3)
discourse(la-6,euh-7)
~~~

~~~ sdparse
bah ça parait normal \n well it looks ok
discourse(parait,bah)
~~~
<!-- Interlanguage links updated St lis 3 20:58:51 CET 2021 -->
