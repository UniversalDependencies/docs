---
layout: relation
title: 'orphan'
redirect_from: "fi/dep/remnant.html"
shortdef : 'remnant in ellipsis'
---

The `orphan` relation is used to provide a treatment of ellipsis (in
the case of gapping and stripping, where a predicational or verbal
head gets elided). In particular, `orphan` aims to provide analyses
that do not postulate empty nodes.

~~~ sdparse
Maija meni Pariisiin ja Mirja Prahaan \n Maija went to Paris and Mirja to Prague
remnant(Maija, Mirja)
remnant(Pariisiin, Prahaan)
~~~

### Diffs

FinnTreeBank (FI_FTB) does not apply the relation `orphan`.
Instead, in elliptical cases the relation [`conj`]() has been
chosen to correspond to its correlate in a preceding clause.
<!-- Interlanguage links updated Út zář 29 18:41:33 CEST 2020 -->
