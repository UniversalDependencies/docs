---
layout: relation
title: 'remnant'
shortdef: 'remnant in ellipsis'
---

The `remnant` relation is used to provide a satisfactory treatment of ellipsis (in
the case of gapping and stripping, where a predicational or verbal
head gets elided).

## Diffs

### Prague Dependency Treebank

At present the conversion of the PDT data to UD does not handle ellipsis properly
and the `remnant` relation is not used.

In the analytical layer of PDT, ellipsis
(together with some other issues, such as the [vocative]()) is signalled by the
dependency relation `ExD` (ex-dependent).
All the `ExD` relations that are not vocatives are currently just re-labeled [dep]()
or [root]().
