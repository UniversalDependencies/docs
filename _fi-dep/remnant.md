---
layout: relation
title:  'remnant'
shortdef : 'remnant in ellipsis'
---

The `remnant` relation is used to provide a treatment of ellipsis (in
the case of gapping and stripping, where a predicational or verbal
head gets elided). In particular, `remnant` aims to provide analyses
that do not postulate empty nodes.

~~~ sdparse
Maija meni Pariisiin ja Mirja Prahaan \n Maija went to Paris and Mirja to Prague
remnant(Maija, Mirja)
remnant(Pariisiin, Prahaan)
~~~

### Diffs

FinnTreeBank (FI_FTB) does not apply the relation `remnant`.
Instead, in elliptical cases the relation [`conj`]() has been
chosen to correspond to its correlate in a preceding clause.
