---
layout: relation
title: 'remnant'
shortdef: 'remnant in ellipsis'
---

The `remnant` relation is used to provide a satisfactory treatment of certain instances of
[ellipsis](http://universaldependencies.github.io/docs/cs/overview/specific-syntax.html#ellipsis)
(in the case of gapping and stripping, where a predicational or verbal
head gets elided).

~~~ sdparse
Pavel si objednal hovězí a Markéta vepřové . \n Pavel himself ordered beef and Markéta pork .
nsubj(objednal, Pavel-1)
nsubj(ordered, Pavel-10)
dobj(objednal, hovězí)
dobj(ordered, beef)
remnant(Pavel-1, Markéta-6)
remnant(Pavel-10, Markéta-15)
remnant(hovězí, vepřové)
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
