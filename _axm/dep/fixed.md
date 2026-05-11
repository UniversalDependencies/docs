---
layout: relation
title: 'fixed'
shortdef: 'fixed multiword expression'
udver: '2'
---

The `fixed` relation is one of the three relations for multiword expressions (MWEs) (the other two being [flat]() and [compound]()). It is used for certain fixed grammaticized expressions that behave like function words or short adverbials.

Note, that these expressions do not have any internal syntactic structure (except from a historical perspective) and that the structural annotation is in principle arbitrary. The leftmost word is the head and all the other words are attached as its `fixed` modifiers.

~~~ conllu
# visual-style 2 1 fixed color:blue
1	քաւէլ	քաւէլ	SCONJ	_	ExtPos=SCONJ	0	root	_	_
2	թէ	թէ	PART	_	_	1	fixed	_	_
~~~

~~~ conllu
# visual-style 2 1 fixed color:blue
1	ամէն	ամէն	DET	_	ExtPos=PRON|PronType=Tot	0	root	_	_
2	ինչ	ինչ	PRON	_	PronType=Ind	1	fixed	_	_
~~~
<!-- Interlanguage links updated St 6. května 2026, 20:46:53 CEST -->
