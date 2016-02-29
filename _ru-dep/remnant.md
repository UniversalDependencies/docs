---
layout: relation
title: 'remnant'
shortdef: 'remnant in ellipsis'
---

The `remnant` relation is used to provide a satisfactory treatment of certain instances of
[ellipsis](http://universaldependencies.org/cs/overview/specific-syntax.html#ellipsis)
(in the case of gapping and stripping, where a predicational or verbal
head gets elided).

~~~ sdparse
Паша заказал говядину , а Маша свинину . \n Pavel himself ordered beef and Markéta pork .
nsubj(заказал, Паша-1)
nsubj(ordered, Pavel-10)
dobj(заказал, говядину)
dobj(ordered, beef)
remnant(Паша-1, Маша-6)
remnant(Pavel-10, Markéta-15)
remnant(говядину, свинину)
remnant(beef, pork)
~~~

## Diffs

### Prague Dependency Treebank

At present the conversion of the PDT data to UD does not handle ellipsis properly
and the `remnant` relation is not used.

In the analytical layer of PDT, ellipsis
(together with some other issues, such as the [vocative]()) is signalled by the
dependency relation `ExD` (ex-dependent).
All the `ExD` relations that are not vocatives or comparatives are currently just re-labeled [dep]()
or [root]().

