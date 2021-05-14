---
layout: relation
title:  'advcl:tcl'
shortdef : 'temporal adverbial clause'
udver: '2'
---

A temporal clause is a subtype of the [advcl]() relation: if the subordinate clause is specifying a time, it is labeled as `tcl`.
This is parallel to [obl:tmod](), which covers temporal modifiers that are realized as nominals,
and [advmod:tmod](), which covers temporal modifiers that are realized as adverbs.

~~~ sdparse
Кемоньшка кизоня ётай, касат, козонга аф туят. \n Ten years or so will pass, you’ll grow, you can’t avoid it.
advcl:tcl(касат, ётай)
nsubj(ётай, кизоня)
nummod(кизоня, Кемоньшка)

~~~


<!-- Interlanguage links updated Pá kvě 14 11:08:47 CEST 2021 -->
