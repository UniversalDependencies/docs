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

This relation excludes literal uses of particles, however—see [advmod]():

~~~ sdparse
The dentist pulled out the tooth
advmod(pulled, out)
~~~

~~~ sdparse
The dentist pulled the tooth out
advmod(pulled, out)
~~~
