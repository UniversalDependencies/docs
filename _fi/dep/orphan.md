---
layout: relation
title: 'orphan'
redirect_from: "fi/dep/remnant.html"
shortdef : 'orphaned dependent in gapping, attached to the promoted orphan'
udver: '2'
---

The `orphan` relation is used to provide a treatment of ellipsis (in
the case of gapping and stripping, where a predicational or verbal
head gets elided). In particular, `orphan` aims to provide analyses
that do not postulate empty nodes.

~~~ sdparse
Maija meni Pariisiin ja Mirja Prahaan \n Maija went to Paris and Mirja to Prague
nsubj(meni-2, Maija-1)
obl(meni-2, Pariisiin-3)
conj(meni-2, Mirja-5)
cc(Mirja-5, ja-4)
orphan(Mirja-5, Prahaan-6)
~~~

### Diffs

FinnTreeBank (FI_FTB) does not apply the relation `orphan`.
Instead, in elliptical cases the relation [`conj`]() has been
chosen to correspond to its correlate in a preceding clause.
<!-- Interlanguage links updated Čt lis 12 09:43:36 CET 2020 -->
