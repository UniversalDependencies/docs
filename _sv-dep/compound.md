---
layout: relation
title: 'compound'
shortdef: 'compound'
---

The `compound` relation is used in Swedish only for compounds borrowed from other languages and therefore written as two (or more) separate words. Compounds in Swedish are normally written as a single word without space between the compound elements. A subtype, [compound:prt](), is used for verb particles in phrasal verbs.

~~~ sdparse
Hon gillar corn flakes \n She likes corn flakes
dobj(gillar, flakes)
compound(flakes, corn)
~~~
