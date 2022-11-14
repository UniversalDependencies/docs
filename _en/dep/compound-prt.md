---
layout: relation
title:  'compound:prt'
shortdef : 'phrasal verb particle'
udver: '2'
---

The phrasal verb particle relation identifies an idiomatic phrasal verb, and
holds between the verb and its particle (tagged as [ADP]()). It is a subtype of the
[compound]() relation.

~~~ sdparse
They/PRON shut/VERB down/ADP the/DET station/NOUN
compound:prt(shut, down)
obj(shut, station)
~~~

~~~ sdparse
They/PRON shut/VERB the/DET station/NOUN down/ADP
compound:prt(shut, down)
obj(shut, station)
~~~

~~~ sdparse
They/PRON ended/VERB up/ADP leaving/VERB
compound:prt(ended, up)
xcomp(ended, leaving)
~~~

This relation is also used for the quotative idiom *be like* heard in informal conversation. Here the *be* verb is treated as a main verb (not a copula) and the quoted material attaches as [ccomp]():

~~~ sdparse
I/PRON was/VERB like/ADP , " What/PRON ? "
compound:prt(was, like)
ccomp(was, What)
~~~


This relation excludes literal/directional uses of prepositions/particles, such as _up_, _down_, _in_, _out_, etc.
These would typically become an [ADV]() with the relation [advmod]():

~~~ sdparse
The dentist pulled out/ADV the tooth
advmod(pulled, out)
obj(pulled, tooth)
~~~

~~~ sdparse
The dentist pulled the tooth out/ADV
advmod(pulled, out)
obj(pulled, tooth)
~~~
<!-- Interlanguage links updated Po lis 14 15:35:16 CET 2022 -->
