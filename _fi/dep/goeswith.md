---
layout: relation
title:  'goeswith'
shortdef : 'goeswith'
udver: '2'
---

This `goeswith` dependency relation links two parts of a compound word
that are erroneously separated in text that is not well edited. The
head is the first part.

<!-- fname:nn_error.pdf -->
~~~ sdparse
Ruoka pöytä notkui herkkuja . \n Food table was_full_of goodies .
goeswith(Ruoka-1, pöytä-2)
nsubj(notkui-3, Ruoka-1)
obj(notkui-3, herkkuja-4)
punct(notkui-3, .-5)
~~~

Note that the original [TDT
corpus](http://bionlp.utu.fi/fintreebank.html) used the `nn` relation
([compound:nn]() in UD Finnish) to annotate these relations.
<!-- Interlanguage links updated St lis 3 20:58:55 CET 2021 -->
