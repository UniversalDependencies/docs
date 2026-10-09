---
layout: relation
title: 'advmod:emph'
shortdef: 'emphatic particle'
udver: '2'
---

Chechen has several particles with emphatic functions. These include the preverbal particle _ma_ and the postverbal particle _q_.

~~~ conllu

1	shiena	shaa	PRON	_	Case=Dat|Log=Yes|Number=Sing|Person=3|PronType=Prs|Reflex=Yes	3	obl
2	t'aehw	t'aehw	ADV	_	_	1	case
3	dooghush	d.aaxka	VERB	_	ConvType=Sim|NounClass=Dclass|VerbForm=Conv	0	root
4	oarca	oarca	NOUN	_	Case=Abs	3	nsubj
5	ma	ma	PART	_	_	6	advmod:emph
6	du	d.u	AUX	_	NounClass=Dclass|Tense=Pres	3	aux
7	shaa	shaa	PRON	_	Number=Sing|Person=3|PronType=Prs|Reflex=Yes	8	obj
8	jie	d.ie	VERB	_	NounClass=Jclass|VerbForm=Inf	3	advcl 

shiena           t'aehw d-oogh-ush    oarca     ma   d-u      shaa     j-ie
3SG.REFL.DAT.LOG after  D-come-CVBsim guardians EMPH D-be.PRS 3SG.REFL J-kill.INF
"The guardians are following me, to kill me."
~~~


~~~ conllu

1	uh	uh	INTJ	_	_	6	discourse
2	hwra	hara	PRON	_	PronType=Dem	6	nsubj
3-4	juq	_	_	_	_	_	_
3	ju	d.u	AUX	_	NounClass=Jclass|Tense=Pres	6	cop
4	q	q	PART	_	_	6	mark
5	dik	dika	ADJ	_	_	6	amod
6	hum	huma	NOUN	_	Case=Abs	0	root
7	t'e	t'e	ADP	_	AdpType=Post	8	advmod
8-9	tasa'a	_	_	_	_	_	_
8	tasa	tasa	VERB	_	VerbForm=Inf	6	advcl
9	'a	'a	CCONJ	_	_	8	cc

uh     hwra ju       q   dik  hum   t'e tasa      'a
INTERJ DEM  J-be.PRS CL  good thing on  cover.INF CL
"Oh, this is a good thing to cover (with)."
~~~