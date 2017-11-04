---
layout: relation
title:  'goeswith'
shortdef : 'goeswith'
---

This `goeswith` dependency relation links two parts of a compound word
that are erroneously separated in text that is not well edited. The
head is in some sense the “main” part, often the second part.

<!-- fname:nn_error.pdf -->
~~~ sdparse
Ruoka pöytä notkui herkkuja . \n Food table was_full_of goodies .
goeswith(pöytä-2, Ruoka-1)
nsubj(notkui-3, pöytä-2)
dobj(notkui-3, herkkuja-4)
punct(notkui-3, .-5)
~~~

Note that the original [TDT
corpus](http://bionlp.utu.fi/fintreebank.html) used the `nn` relation
([compound:nn]() in UD Finnish) to annotate these relations.
