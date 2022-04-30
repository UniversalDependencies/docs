---
layout: relation
title: 'ccomp:obl'
shortdef: 'clausal complement (non-object)'
udver: '2'
---

Clausal objects are marked with ccomp:obj,
clauses that express a core dependent of the main verb but are not objects are marked with ccomp:obl,
and clauses that express a predicative dependent of the main verb are marked with ccomp:pred.

In the following example, the subordinate clause is considered a core argument because it is
marked by the standard complementizer _hogy_ “that” and it is an obligatory argument of the
matrix verb. However, it is also coreferential with the oblique pronoun _attól_ “from that”
(ablative case). Therefore, it does not correspond to a direct object and it is labeled `ccomp:obl`.

“Some domestic experts fear that the oil price explosion could lead to significantly higher-than-planned inflation.”

~~~ sdparse
Egyes hazai szakértők attól tartanak , hogy az olajárrobbanás a tervezettnél lényegesen magasabb inflációhoz vezethet . \n Some domestic experts from-that fear , that the oil-price-explosion the than-planned significantly higher inflation can-lead .
amod:att(szakértők, Egyes)
amod:att(szakértők, hazai)
nsubj(tartanak, szakértők)
obl(tartanak, attól)
punct(vezethet, ,-6)
mark(vezethet, hogy)
det(olajárrobbanás, az)
nsubj(vezethet, olajárrobbanás)
det(inflációhoz, a)
advmod:mode(magasabb, tervezettnél)
advmod:mode(magasabb, lényegesen)
amod:att(inflációhoz, magasabb)
obl(vezethet, inflációhoz)
ccomp:obl(tartanak, vezethet)
punct(tartanak, .-16)
~~~

<!-- Interlanguage links updated St lis 3 20:58:44 CET 2021 -->
