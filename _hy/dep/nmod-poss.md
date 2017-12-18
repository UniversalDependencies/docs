---
layout: relation
title:  'nmod:poss'
shortdef : 'possessor in a genitive-possessive construction'
udver: '2'
---

This relation is a subtype of the [nmod]() relation, which functionally corresponds to genitive complement or possessives that are expressed using the dative [Case](). If a possessive [determiner](DET) is used, the relation is labeled [det]().

In Armenian the `nmod:poss` relation captures the following cases:

* `nmod:poss` noun phrases attached to nouns are usually in the dative Case and precede the modified noun:

~~~ sdparse
տնօրենի գրասենյակը \n office of-the-director.`Dat`
nmod:poss(գրասենյակը, տնօրենի)
nmod:poss(office, of-the-director.`Dat`)
~~~

~~~ sdparse
նրա գրասենյակը \n his office
det(գրասենյակը, նրա)
det(office, his)
~~~

* In conjunction with the [case]() relation, `nmod:poss` provides a uniform analysis for the possessive alternation:

~~~ sdparse
թշնամու դեմ պատերազմը \n the-war against the-enemy
nmod:poss(պատերազմը, թշնամու)
case(թշնամու, դեմ)
nmod:poss(the-war, the-enemy)
case(the-enemy, against)
~~~
