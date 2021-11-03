---
layout: relation
title: 'orphan'
shortdef: 'orphan-to-orphan relation in gapping'
udver: '2'
---

The `orphan` relation is used to provide a treatment of ellipsis (in
the case of gapping and stripping, where a predicational or verbal
head gets elided). A `orphan` corresponds to a *correlate* in a preceding clause.
The `orphan` relation connects each remnant to its correlate in the basic dependency representation.

~~~ sdparse
Η Προοδευτική κέρδισε το Αιγάλεω , και ο Ιωνικός τη Δόξα .
nsubj(κέρδισε, Προοδευτική)
dobj(κέρδισε, Αιγάλεω)
cc(κέρδισε, και)
remnant(Προοδευτική, Ιωνικός)
remnant(Αιγάλεω, Δόξα)
~~~

<!-- Interlanguage links updated St lis 3 20:59:07 CET 2021 -->
