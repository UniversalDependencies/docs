---
layout: relation
title:  'nmod:tmod'
shortdef : 'temporal modifier'
---

A temporal modifier is a subtype of the [nmod]() relation: if the modifier is specifying a time, it is labeled as `tmod`. 

### Example

_daoine a mhair na milliúin <b>bliain</b> ó shin_ `people who lived millions of <b>years</b> ago'

~~~ sdparse
daoine a mhair na milliúin bliain ó shin \n people who lived the millions years from then
nmod:tmod(mhair, bliain)
~~~

