---
layout: relation
title: 'mwe'
shortdef: 'multi-word expression'
---

The multi-word expression (modifier) relation is one of the three
relations ([compound](), `mwe`, [name]()) for compounding.
It is used for certain fixed grammaticized expressions that behave
like function words or short adverbials. 

~~~ sdparse
de toutes façons \n in any case
mwe(façons, de)
mwe(toutes, façons)
~~~

~~~ sdparse
ainsi que \n 
mwe(que, ainsi)
~~~

~~~ sdparse
avant de \n 
mwe(de, avant)
~~~
