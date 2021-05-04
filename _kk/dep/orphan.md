---
layout: relation
title: 'orphan'
shortdef : 'orphan in gapping attached to another orphan'
udver: '2'
---

The `orphan` relation is used to provide a treatment of ellipsis (in
the case of gapping and stripping, where a predicational or verbal
head gets elided). In particular, `orphan` aims to provide analyses
that do not postulate empty nodes.

~~~ sdparse
Ашылу матчы Сан-Паулуда , ал финалы Рио-де-Жанейрода орын алды . \n Opening match São-Paulo-in , and final Rio-de-Janeiro-in place took .
nmod(матчы-2, Ашылу-1)
orphan(матчы-2, Сан-Паулуда-3)
conj(матчы-2, алды-9)
punct(алды-9, ,-4)
cc(алды-9, ал-5)
nsubj(алды-9, финалы-6)
obl(алды-9, Рио-де-Жанейрода-7)
~~~

<!-- Interlanguage links updated Čt lis 12 09:43:36 CET 2020 -->
