---
layout: relation
title: 'obl:advmod'
shortdef: 'adverbial modifier confusable with an oblique dependent'
udver: '2'
---

The double labelling accounts for the difficulty to decide between [obl]() and [advmod]()
relations (_en_ and _i_).

**TO DO:** The two relations, `obl` and `advmod`, are actually functionally identical,
but the former is used for nominals. The double label should thus be dissolved. If the
UPOS tag is [PRON](), the relation should be `obl`. If the UPOS tag is [ADV](), the relation
should be `advmod`. Most of the occurrences are currently tagged `ADV`.

~~~ sdparse
Il en apelet e ses dux e ses cuntes
nsubj(apelet, Il)
obl:advmod(apelet, en)
obj(apelet, dux)
cc(dux, e-4)
det(dux, ses-5)
conj(dux, cuntes)
cc(cuntes, e-7)
det(cuntes, ses-8)
~~~
<!-- Interlanguage links updated Pá kvě 14 11:09:16 CEST 2021 -->
