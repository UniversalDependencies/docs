---
layout: relation
title: 'flat'
shortdef: 'flat multiword expression'
udver: '2'
---

The `flat` relation is one of the relations used for multiword expressions multiword expressions (MWEs). All subsequent words in such expressions are attached to the first one. The assumption is that these expressions do not have any internal syntactic structure and that the structural annotation is in principle arbitrary. In Bamana, it is used for complex proper names.

~~~ conllu
# visual-style 4 5 flat	color:blue
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	a	à	PRON	_	_	2	nsubj	_	_
2	ko	kó	VERB	_	_	0	root	_	_
3	:	:	PUNCT	_	_	2	punct	_	_
4	Mamadu	Mamadu	PROPN	_	_	2	parataxis:obj	_	_
5	Tarawele	Tàrawéle	PROPN	_	_	4	flat	_	_
6	.	.	PUNCT	_	_	4	punct	_	_

~~~
'He says: "Mamadu Tarawele"'.
<!-- Interlanguage links updated Út zář 29 20:31:53 CEST 2020 -->
