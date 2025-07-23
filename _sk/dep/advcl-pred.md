---
layout: relation
title: 'advcl:pred'
shortdef: 'optional depictive'
udver: '2'
---

Beginning with release 2.17, optional depictives (secondary predication) are annotated with the dedicated relation
subtype `advcl:pred` instead of plain `advcl`. The current implementation assumes that all instances of the `Atv`
relation (verbal attribute) in SNK will be converted to `advcl:pred`, although some of them may
need the [xcomp]() relation instead.

The examples below show adjectives serving as optional depictives; nevertheless, nominals are also frequent in this
function, in particular with the conjunction _ako_ “like, as”.

The adjective is attached to the main predicate, despite the fact that it agrees in gender, number, and case with one
of its arguments, and regardless of presence or absence of an overt representation of that argument. The relation
between the adjective and the congruent nominal can be shown in the [enhanced graph](/u/overview/enhanced-syntax.html).
See [u-dep/xcomp]() for further discussion of resultatives and depictives.

~~~ sdparse
Alena vstúpila do miestnosti smutná . \n Alena entered to room sad .
advcl(vstúpila, smutná)
advcl(entered, sad)
~~~

~~~ sdparse
Namaľoval svoju ženu nahú . \n He-painted his wife naked .
advcl(Namaľoval, nahú)
advcl(He-painted, naked)
~~~

<!-- Interlanguage links updated So 10. května 2025, 18:14:50 CEST -->
