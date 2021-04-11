---
layout: relation
title: 'obl:lto'
shortdef: 'obl with locative to modality'
udver: '2'
---

The _obl:lto_ relation is used for oblique spacial modifiers with locative goal, i.e. direction to modality,
see also _advmod:lto_.
This is distinguished from other locative dependency relations obl:lmod, obl:lfrom and obl:lmp,
and _advmod_ locative dependency relations advmod:lmod, advmod:lfrom and advmod:lmp,
which generally indicate locative, source and path, respectively.

~~~ sdparse
Сёксенда кемонце классу озан . \n In the fall, I'll enter the tenth grade.
advmod:tmod(озан-4, Сёксенда-1)
amod(классу-3, кемонце-2)
obl:lto(озан-4, классу-3)
obl:lto(enter-4, grade-3)

~~~

Цямкаерясь лиссь ортава ульцяв . \n Tsyamkay's wife went out through the gate into the street.
nsubj(лиссь-2, Цямкаерясь-1)
obl:lmp(лиссь-2, ортава-3)
obl:lto(лиссь-2, ульцяв-4)
obl:lto(went_out-2, into_the_street-4)


<!-- Interlanguage links updated Čt lis 12 09:43:27 CET 2020 -->
