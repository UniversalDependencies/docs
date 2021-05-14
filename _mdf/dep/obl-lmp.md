---
layout: relation
title: 'obl:lmp'
shortdef: 'obl with locative to modality'
udver: '2'
---

The _obl:lmp_ relation is used for oblique spacial modifiers with path or multipoint locative modality,
see also _advmod:lmp_.
This is distinguished from other locative dependency relations obl:lmod, obl:lfrom and obl:lto,
and _advmod_ locative dependency relations advmod:lmod, advmod:lfrom and advmod:lto,
which generally indicate locative, source and goal, respectively.

~~~ sdparse
Цямкаерясь лиссь ортава ульцяв . \n Tsyamkay's wife went out through the gate into the street.
nsubj(лиссь-2, Цямкаерясь-1)
obl:lmp(лиссь-2, ортава-3)
obl:lmp(went_out-2, through_the_gate-3)
obl:lto(лиссь-2, ульцяв-4)
~~~

~~~ sdparse
Кой-кинди савсь мянемс вальмава . \n Some people had to escape out the window.
obl:agent(мянемс-3, Кой-кинди-1)
aux:nec(мянемс-3, савсь-2)
obl:lmp(мянемс-3, вальмава-4)
punct(мянемс-3, .-5)
~~~

<!-- Interlanguage links updated Pá kvě 14 11:09:17 CEST 2021 -->
