---
layout: relation
title: 'obl:cmp'
shortdef: 'comparative oblique argument'
udver: '2'
---

The `cmp` subtype is of semantic nature and is used to point out the **standards of comparison** in comparative constructions unitarily: [`advcl:cmp`](la-dep/advcl-cmp) for comparative adverbial clauses, `obl:cmp` for comparative oblique arguments.

Oblique arguments as standards of comparison in comparative constructions are less used and more limited than comparative clauses in Latin. They always consist of a bare nominal element (including [nominal verbal forms](la-feat/VerbForm)) in the [ablative case](la-feat/Case). So, they are seen to be different from comparative clauses in that they are not introduced by a [conjunction](la-pos/SSCONJ) and are always inflected in the ablative, thus functioning as arguments in the main clause, directly depending on the term expressing degree or contrast, if any. This use of the ablative is related to, and sometimes difficult to distinguish from other, similar uses of the ablative.  

In the following examples, the passages in the translations corresponding to oblique comparative arguments are boldfaced. The element on which it depends is underlined.

~~~ sdparse
Primo demonstrabitur impossibile aquam in aliqua parte sue circumferentie altiorem esse hac terra emergente sive detecta . \n Firstly it-will-be-demonstrated impossible water in any part its-own of-circumference higher to-be this from-earth emerging or uncovered .
obl:cmp(altiorem,terra)
det(terra,hac)
acl(terra,emergente)
conj(emergente,detecta)
obl:cmp(higher,from-earth)
det(from-earth,this)
acl(from-earth,emerging)
conj(emerging,uncovered)
~~~

'First, the impossibility of the water at any part of its circumference being <u>loftier</u> **than this emergent or uncovered land** will be demonstrated.' (*Questio de aqua et terra*, UDante)

~~~ sdparse
... nos duo degimus herba Trinacride montis , quo non fecundius alter montibus in Siculis pecudes armenta que pavit . \n ... we two we-dwell on-grass Trinacrian of-mount , from-which not more-fruitful other from-mounts in Sicilian cattles flocks and has-pastured .
obl:cmp(fecundius,quo)
advmod(pavit,fecundius)
acl:relcl(degimus,pavit)
obl:cmp(more-fruitful,than-which)
advmod(has-pastured,more-fruitful)
acl:relcl(we-dwell,has-pastured)
~~~

'... we dwell on a mount Trinacrian, **than which** no other hill of Sicily <u>more rich</u> doth pasture flocks and herds.' (*Eclogues* IV, UDante)

* This oblique comparative argument is itself the relative element introducing a relative clause. 


<!-- Interlanguage links updated Po lis 14 15:35:39 CET 2022 -->
