---
layout: relation
title: 'ccomp'
shortdef: 'clausal complement'
udver: '2'
---

A clausal complement of a verb or adjective is a dependent clause 
which is a core argument. That is, it functions like an object of the verb, or
adjective.

~~~ sdparse
Հարցնեն յօրէնքս վասն անընկմահու, թէ լինի իրենց թաղումն կամ պատարագ ։ \n They ask about the laws regarding suicides , whether burial or a requiem service should be performed for them .
ccomp(Հարցնեն, լինի)
ccomp(ask, performed)
mark(լինի, թէ)
mark(performed, whether)
~~~

Such clausal complements may be finite or nonfinite. However, if the subject of the clausal complement is controlled (that is, must be the same as the higher subject or object, with no other possible interpretation)
the appropriate relation is [xcomp]().

~~~ sdparse
Եւ ջուր հանել ի գետոց ջրելոյ կամ ջաղցնոյ՝ չկարէ ոք արգելուլ \n And no one can forbid to draw water from rivers for irrigation or for a mill
ccomp(արգելուլ, հանել)
ccomp(forbid, to-draw)
~~~

~~~ sdparse
պարտի թագաւորն զիր իրաւունքն տանել ըղորդ \n The King is obligated to administer his justice with integrity 
xcomp(պարտի, տանել)
xcomp(obligated, to-administer)
~~~

The key difference here is that, while it is possible to interpret the first sentence as meaning that the one who forbids is not the one who will draw, in the second sentence it is clear that the 
subject of __administer__ can only be __King__. This is what distinguishes `ccomp` and `xcomp`.
<!-- Interlanguage links updated St 12. listopadu 2025, 09:21:25 CET -->
