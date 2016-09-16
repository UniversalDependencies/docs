---
layout: relation
title: 'remnant'
shortdef : 'remnant in ellipsis'
---

The `remnant` relation is used to provide a treatment of ellipsis (in
the case of gapping and stripping, where a predicational or verbal
head gets elided). In particular, `remnant` aims to provide analyses
that do not postulate empty nodes.

~~~ sdparse
Ашылу матчы Сан-Паулуда , ал финалы Рио-де-Жанейрода орын алды . \n Opening match São-Paulo-in , and final Rio-de-Janeiro-in place took .
remnant(Рио-де-Жанейрода-7, Сан-Паулуда-3)
remnant(финалы-6 ,матчы-2)
nmod(алды-9, Рио-де-Жанейрода-7)
nsubj(алды-9, финалы-6)
nmod(матчы-2, Ашылу-1)
~~~
