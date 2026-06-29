---
layout: relation
title: 'obl:mod'
shortdef: 'non-argumental or redundant adverbial pronouns'
udver: '2'
---

This covers spatial uses of *y*/*i* and *en*:

~~~ sdparse
si i voit ele chelui qui avoit esté ses barons
obl:mod(voit, i)
~~~

Redundant *en* also fall under this label:

~~~ sdparse
si en eut pitié du marchis
obl:mod(eut, en)
~~~

<!-- **TO DO:** The two relations, `obl` and `advmod`, are actually functionally identical,
but the former is used for nominals. The double label should thus be dissolved. If the
UPOS tag is [PRON](), the relation should be `obl`. If the UPOS tag is [ADV](), the relation
should be `advmod`. Most of the occurrences are currently tagged `ADV`. -->


<!-- Interlanguage links updated Po 29. června 2026, 18:13:02 CEST -->
