---
layout: relation
title: 'aux'
shortdef: 'auxiliary'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "fr/dep/aux.html"
udver: '2'
---

An auxiliary of a clause is a [non-main verb](u-pos/AUX) of the clause.

All French corpora uses 3 auxiliaries: _être_, _avoir_ and _faire_.
Only **UD_French-ParTUT** uses a few other modal verbs as auxiliaries: _pouvoir_, _vouloir_, _aller_.

The dependency `aux` is used in **UD_French-Spoken** and in **UD_French-FTB** for tense auxiliaries only.
**UD_French-ParTUT** uses the dependency `aux` for tense and for modal verbs.
Tense auxiliaries are annotated with the [aux:tense]() relations in the four other French treebanks.

For the passive [voice](u-feat/Voice), the relation is not labeled `aux` but [aux:pass]().
For the causative auxiliary _faire_, the relation is [aux:caus]().

In French, both _être_ and _avoir_ can be used as tense auxiliaries.

~~~ sdparse
Quelles conséquences cela a -t-il eu ? \n What consequences did this have ?
aux(eu, a)
~~~

~~~ sdparse
c'est l'esprit qui a peut-être changé \n it's the spirit that may have changed
aux(changé,a)
~~~

~~~ sdparse
je suis restée à Paris \n I stayed in Paris
aux(restée,Paris)
~~~

In **UD_French-ParTUT**, a few other lemma are used as auxiliaries:
~~~ sdparse
On peut nager dans le lac \n One can swim in the lake
aux(nager, peut)
~~~

<!-- Interlanguage links updated Út zář 29 20:23:19 CEST 2020 -->
