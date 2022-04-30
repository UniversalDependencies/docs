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
Кискатнеяк ушосо маднесть кудыненть ёжова . \n Even the dogs were lying outside next to the little house.
nsubj(маднесть-3, Кискатнеяк-1)
obl:lmod(маднесть-3, ушосо-2)
nmod(ёжова-5, кудыненть-4)
obl:lmp(маднесть-3, ёжова-5)
obl:lmp(were_lying-3, next_to-5)
~~~


<!-- Interlanguage links updated St lis 3 20:59:05 CET 2021 -->
