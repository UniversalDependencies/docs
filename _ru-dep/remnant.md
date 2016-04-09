---
layout: relation
title: 'remnant'
shortdef: 'remnant in ellipsis'
---

The `remnant` relation is used to provide a satisfactory treatment of certain instances of
ellipsis (in the case of gapping and stripping, where a predicational or verbal
head gets elided).

~~~ sdparse
Павел заказал говядину , а Мария свинину . \n Pavel  ordered beef and Maria pork .
nsubj(заказал, Павел)
nsubj(ordered, Pavel)
dobj(заказал, говядину)
dobj(ordered, beef)
remnant(Павел, Мария)
remnant(Pavel, Maria)
remnant(говядину, свинину)
remnant(beef, pork)
~~~

