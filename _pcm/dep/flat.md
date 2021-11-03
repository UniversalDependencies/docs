---
layout: relation
title: 'flat'
shortdef: 'flat multiword expression'
udver: '2'
---

The flat relation is one of the relations used for multiword expressions multiword expressions (MWEs). It is used for exocentric (headless) semi-fixed MWEs. It contrasts with two other relations used for MWEs : [compound](), which applies to endocentric (headed) MWEs such as _speed limit_, and [fixed](), which applies to completely fixed grammaticized MWEs like _so dat_. Flat MWEs are annotated with a flat structure, where all subsequent words in the expression are attached to the first one using the flat label. The assumption is that these expressions do not have any internal syntactic structure and that the structural annotation is in principle arbitrary.

This relation is widely used in Naija, notably to link together elements of numbers.

~~~ conllu
# visual-style 8 10 flat	color:blue
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white

1	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	stay	stay	VERB	_	_	0	root	_	_
3	for	for	ADP	_	_	4	case	_	_
4	Warri	Warri	PROPN	_	_	2	obl:arg	_	_
5	till	till	ADP	_	_	6	case	_	_
6	twenty	twenty	NUM	_	NumType=Card	2	obl:mod	_	_
7	fourteen	fourteen	NUM	_	NumType=Card	6	flat	_	_

1	I	_	_	_	_	0	_	_	_
2	stay	_	_	_	0	_	_	_
3	in	_	_	_	0	_	_	_
4	Warri	_	_	_	0	_	_	_
5	till	_	_	_	0	_	_	_
6	twenty	_	_	_	0	_	_	_
7	fourteen	_	_	_	0	_	_	_

1	I	_	_	_	_	0	_	_	_
2	stayed	_	_	_	0	_	_	_
3	in	_	_	_	0	_	_	_
4	Warri	_	_	_	0	_	_	_
5	until	_	_	_	0	_	_	_
6	twenty	_	_	_	0	_	_	_
7	fourteen	_	_	_	0	_	_	_
~~~

The relation is also used for most MWEs that function as proper nouns, such as placenames, personal names, and titles of organisations.

~~~ conllu
# visual-style 8 10 flat	color:blue
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white

1	#	#	X	_	_	4	dep	_	_
2	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
3	dey	dey	AUX	_	Aspect=Imp	4	aux	_	_
4	hail	hail	VERB	_	_	0	root	_	_
5	from	from	ADP	_	_	6	case	_	_
6	Katsina	Katsina	PROPN	_	_	4	obl:arg	_	_
7	State	state	NOUN	_	_	6	flat	_	_

1	#	_	_	_	_	0	_	_	_
2	I	_	_	_	_	0	_	_	_
3	be	_	_	_	_	0	_	_	_
4	hail	_	_	_	_	0	_	_	_
5	from	_	_	_	_	0	_	_	_
6	Katsina	_	_	_	_	0	_	_	_
7	State	_	_	_	_	0	_	_	_

1	I	_	_	_	_	0	_	_	_
2	come	_	_	_	_	0	_	_	_
3	from	_	_	_	_	0	_	_	_
4	Katsina	_	_	_	_	0	_	_	_
5	State	_	_	_	_	0	_	_	_
~~~

~~~ conllu
# visual-style 8 10 flat	color:blue
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white

1	my	my	PRON	_	Number=Sing|Person=1|Poss=Yes	2	nmod:poss	_	_
2	name	name	NOUN	_	_	4	nsubj	_	_
3	na	na	AUX	_	PartType=Cop	4	cop	_	_
4	Bose	Bose	PROPN	_	_	0	root	_	_
5	Alade	Alade	PROPN	_	_	4	flat	_	_

1	my	_	_	_	_	0	_	_	_
2	name	_	_	_	_	0	_	_	_
3	be	_	_	_	_	0	_	_	_
4	Bose	_	_	_	_	0	_	_	_
5	Alade	_	_	_	_	0	_	_	_

1	my	_	_	_	_	0	_	_	_
2	name	_	_	_	_	0	_	_	_
3	is	_	_	_	_	0	_	_	_
4	Bose	_	_	_	_	0	_	_	_
5	Alade	_	_	_	_	0	_	_	_
~~~

In Naija the [nmod:appos]() relation is used instead of `flat` when part of the expression serves to define, name, or describe the rest.
<!-- Interlanguage links updated St lis 3 20:58:54 CET 2021 -->
