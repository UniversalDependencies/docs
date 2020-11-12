---
layout: relation
title: 'compound:quant'
shortdef: 'verb-quantifier compound'
udver: '2'
---

Among the many verbal particles in Cantonese are affixal quantifiers 埋 / _maai4_ (\~"also") and 晒 / _saai3_ (\~"all") (Lee, 2012; we exclude 開 / _hoi1_ for syntactic distributional reasons); they may scope over any argument in the clause or even the predicate. They attach after verbs (1) and can be intervened by the potential 得 / _dak1_ or the negative potential 唔 / _m4_ (2), but differ from verb-verb compounds ([compound:vv]()) in that they can co-occur with them, in which case they are attached after the verb-verb compounds (3).

~~~ conllu
# visual-style 2 3 compound:quant	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	佢	_	PRON	_	_	2	nsubj	_	3SG
2	食	_	VERB	_	_	0	root	_	eat
3	埋	_	PART	_	_	2	compound:quant	_	QF
4	條	_	PART	_	_	5	det	_	CL
5	魚	_	PART	_	_	2	obj	_	fish

1	"He	_	_	_	_	0	_	_	_
2	ate	_	_	_	_	0	_	_	_
3	the	_	_	_	_	0	_	_	_
4	fish	_	_	_	_	0	_	_	_
5	as	_	_	_	_	0	_	_	_
6	well."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 2 4 compound:quant	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	我	_	PRON	_	_	2	nsubj	_	1SG
2	飲	_	VERB	_	_	0	root	_	drink
3	得	_	PART	_	_	4	aux	_	can
4	晒	_	PART	_	_	2	compound:quant	_	QF

1	"I	_	_	_	_	0	_	_	_
2	can	_	_	_	_	0	_	_	_
3	drink	_	_	_	_	0	_	_	_
4	all	_	_	_	_	0	_	_	_
5	of	_	_	_	_	0	_	_	_
6	it."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 2 4 compound:quant	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	你	_	PRON	_	_	2	nsubj	_	1SG
2	打	_	VERB	_	_	0	root	_	hit
3	爛	_	VERB	_	_	2	compound:vv	_	break
4	埋	_	PART	_	_	2	compound:quant	_	QF
5	啲	_	NOUN	_	_	6	det	_	CL:PL
6	碗	_	NOUN	_	_	2	obj	_	bowl
7	嘑	_	PART	_	_	2	discourse:sp	_	SP

1	"You're	_	_	_	_	0	_	_	_
2	breaking	_	_	_	_	0	_	_	_
3	the	_	_	_	_	0	_	_	_
4	bowls	_	_	_	_	0	_	_	_
5	as	_	_	_	_	0	_	_	_
6	well."	_	_	_	_	0	_	_	_

~~~

There is a limited case where a quantifier can co-occur with an aspect marker, between the quantifier 晒 / _saai3_ and the experiential aspect marker 過 / _guo3_.

~~~ conllu
# visual-style 6 8 compound:quant	color:blue
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
1	美國	_	PROPN	_	_	4	nmod	_	USA
2	嘅	_	PART	_	_	1	case	_	GEN
3	國家	_	NOUN	_	_	4	compound	_	nation
4	公園	_	NOUN	_	_	6	dislocated	_	park
5	我	_	PRON	_	_	6	nsubj	_	1SG
6	去	_	VERB	_	_	0	root	_	go
7	過	_	AUX	_	_	6	aux	_	EXP
8	晒	_	PART	_	_	6	compound:quant	_	QF
9	嘑	_	PART	_	_	6	discourse:sp	_	SP

1	"As	_	_	_	_	0	_	_	_
2	for	_	_	_	_	0	_	_	_
3	the	_	_	_	_	0	_	_	_
4	national	_	_	_	_	0	_	_	_
5	parks	_	_	_	_	0	_	_	_
6	in	_	_	_	_	0	_	_	_
7	the	_	_	_	_	0	_	_	_
8	US,	_	_	_	_	0	_	_	_
9	I've	_	_	_	_	0	_	_	_
10	been	_	_	_	_	0	_	_	_
11	to	_	_	_	_	0	_	_	_
12	all	_	_	_	_	0	_	_	_
13	of	_	_	_	_	0	_	_	_
14	them."	_	_	_	_	0	_	_	_

~~~

Additionally, 埋 / _maai4_ and 晒 / _saai3_ can also co-occur, in that order.

~~~ conllu
# visual-style 2 3 compound:quant	color:blue
# visual-style 2 4 compound:quant	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	佢	_	PRON	_	_	2	nsubj	_	3SG
2	食	_	VERB	_	_	0	root	_	eat
3	埋	_	PART	_	_	2	compound:quant	_	QF
4	晒	_	PART	_	_	2	compound:quant	_	QF
5	啲	_	NOUN	_	_	6	det	_	CL:PL
6	零食	_	NOUN	_	_	2	obj	_	junk-food

1	"He	_	_	_	_	0	_	_	_
2	ate	_	_	_	_	0	_	_	_
3	all	_	_	_	_	0	_	_	_
4	the	_	_	_	_	0	_	_	_
5	junk	_	_	_	_	0	_	_	_
6	food	_	_	_	_	0	_	_	_
7	as	_	_	_	_	0	_	_	_
8	well."	_	_	_	_	0	_	_	_

~~~


### References

Lee, Peppina Po-lun. 2012. Cantonese Particles and Affixal Quantification (Volume 87 of Studies in Natural Language and Linguistic Theory). Springer.
<!-- Interlanguage links updated Čt lis 12 09:43:19 CET 2020 -->
