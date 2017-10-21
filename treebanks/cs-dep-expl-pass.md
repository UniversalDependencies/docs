---
layout: base
title:  'Statistics of expl:pass in UD_Czech'
udver: '2'
---

## Treebank Statistics: UD_Czech: Relations: `expl:pass`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `expl`: <tt><a href="cs-dep-expl-pv.html">expl:pv</a></tt>.

4906 nodes (0%) are attached to their parents as `expl:pass`.

4139 instances of `expl:pass` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.17305340399511.

The following 4 pairs of parts of speech are connected with `expl:pass`: <tt><a href="cs-pos-VERB.html">VERB</a></tt>-<tt><a href="cs-pos-PRON.html">PRON</a></tt> (4897; 100% instances), <tt><a href="cs-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs-pos-PRON.html">PRON</a></tt> (5; 0% instances), <tt><a href="cs-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="cs-pos-DET.html">DET</a></tt>-<tt><a href="cs-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 expl:pass	color:blue
1	Hodnota	hodnota	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	7	nsubj:pass	_	_
2	thajského	thajský	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	3	amod	_	_
3	vývozu	vývoz	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	1	nmod	_	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	7	expl:pass	_	LGloss=(zvr._zájmeno/částice)
5	každým	každý	DET	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|PronType=Tot	6	det	_	_
6	rokem	rok	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	7	obl	_	_
7	zvyšuje	zvyšovat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	o	o	ADP	RR--4----------	AdpType=Prep|Case=Acc	9	case	_	LId=o-1
9	více	hodně	ADV	Dg-------2A----	Degree=Cmp|Polarity=Pos	7	advmod	_	_
10	než	než	SCONJ	J,-------------	_	11	mark	_	LId=než-2
11	12	12	NUM	C=-------------	NumForm=Digit|NumType=Card	9	obl	_	_
12	%	%	SYM	Z:-------------	_	9	nmod	_	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 expl:pass	color:blue
1	Pořád	pořád	ADV	Db-------------	_	3	advmod	_	_
2	nám	já	PRON	PP-P3--1-------	Case=Dat|Number=Plur|Person=1|PronType=Prs	3	obj	_	_
3	chybějí	chybět	VERB	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LGloss=(někde_něco_chybí)
4	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	5	case	_	LId=v-1
5	extralize	extraliga	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	3	obl	_	_
6	zápasy	zápas	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	3	nsubj	_	_
7	hrající	hrající	ADJ	AGIP1-----A----	Animacy=Inan|Aspect=Imp|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	6	amod	_	LDeriv=hrát
8	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	7	expl:pass	_	LGloss=(zvr._zájmeno/částice)
9	'	'	PUNCT	Z:-------------	_	11	punct	_	SpaceAfter=No
10	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	11	case	_	LId=na-1
11	doraz	doraz	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	7	obl	_	SpaceAfter=No
12	'	'	PUNCT	Z:-------------	_	11	punct	_	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 expl:pass	color:blue
1	Druhovost	druhovost	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	0	root	_	LDeriv=druhový
2	a	a	CCONJ	J^-------------	_	3	cc	_	LId=a-1
3	náročnost	náročnost	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	1	conj	_	LDeriv=náročný
4	zakázek	zakázka	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	1	nmod	_	_
5	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl:pass	_	LGloss=(zvr._zájmeno/částice)
6	stále	stále	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	1	advmod	_	LDeriv=stálý
7	mění	měnit	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	_
8	a	a	CCONJ	J^-------------	_	9	cc	_	LId=a-1
9	zvyšuje	zvyšovat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


