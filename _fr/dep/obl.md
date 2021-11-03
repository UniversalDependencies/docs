---
layout: relation
title: 'obl'
shortdef: 'oblique nominal'
udver: '2'
---

In UDv2, the `obl` relation is used for a nominal dependent of a verb.
However, this dependent is neither a subject (for which we use the [nsubj]() relation) nor a direct object (for which we use the [obj]() relation).

~~~ sdparse
Sara donne une fleur à Tom . \n Sara gives a flower to Tom.
obl(donne, Tom)
case(Tom, à)
~~~

In **UD_French-Sequoia**, the `obl` relation is not used but it is replaced by [obl:mod]() or [obl:arg]().

In **UD_French-GSD**, the distinction `obl:mod` / `obl:arg` is not available everywhere, the `obl` relation is then used.

**UD_French-Spoken** uses the `obl:mod` relation when the dependent is a modifier of the verb and the [obl:arg]() relation when the dependent is a core argument of the verb.

Here are a few examples:

~~~ sdparse
Habituellement, Pierre mange une pomme à dix heures piles. \n Usually, Pierre eats an apple at ten o'clock.
obl:mod(mange, heures)
case(heures, à)
~~~



<!-- Interlanguage links updated St lis 3 20:59:04 CET 2021 -->
