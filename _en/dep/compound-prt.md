---
layout: relation
title:  'compound:prt'
shortdef : 'phrasal verb particle'
---

The phrasal verb particle relation identifies an idiomatic phrasal verb, and
holds between the verb and its particle (tagged as [ADP]()). It is a subtype of the
[compound]() relation.

~~~ sdparse
They shut down the station
compound:prt(shut, down)
~~~

~~~ sdparse
They shut the station down
compound:prt(shut, down)
~~~

This relation excludes literal/directional uses of prepositions/particles, such as _up_, _down_, _in_, _out_, etc.
These would typically become an ADV with the relation [advmod]():

~~~ sdparse
The dentist pulled out the tooth
advmod(pulled, out)
~~~

~~~ sdparse
The dentist pulled the tooth out
advmod(pulled, out)
~~~
<!-- Interlanguage links updated Út zář 29 18:41:14 CEST 2020 -->
