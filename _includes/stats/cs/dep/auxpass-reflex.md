

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is a language-specific subtype of [auxpass]().

4906 nodes (0%) are attached to their parents as `auxpass:reflex`.

4139 instances of `auxpass:reflex` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.17305340399511.

The following 4 pairs of parts of speech are connected with `auxpass:reflex`: [cs-pos/VERB]()-[cs-pos/PRON]() (4897; 100% instances), [cs-pos/ADJ]()-[cs-pos/PRON]() (5; 0% instances), [cs-pos/NOUN]()-[cs-pos/PRON]() (3; 0% instances), [cs-pos/PRON]()-[cs-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 auxpass:reflex	color:blue
1	Hodnota	hodnota	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	7	nsubj	_	_
2	thajského	thajský	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	3	amod	_	_
3	vývozu	vývoz	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	1	nmod	_	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	7	auxpass:reflex	_	LGloss=(zvr._zájmeno/částice)
5	každým	každý	ADJ	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	6	amod	_	_
6	rokem	rok	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Negative=Pos|Number=Sing	7	nmod	_	_
7	zvyšuje	zvyšovat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	o	o	ADP	RR--4----------	AdpType=Prep|Case=Acc	9	case	_	LId=o-1
9	více	hodně	ADV	Dg-------2A----	Degree=Cmp|Negative=Pos	7	advmod	_	_
10	než	než	SCONJ	J,-------------	_	11	mark	_	LId=než-2
11	12	12	NUM	C=-------------	NumForm=Digit|NumType=Card	9	advmod	_	_
12	%	%	SYM	Z:-------------	_	9	nmod	_	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 auxpass:reflex	color:blue
1	Pořád	pořád	ADV	Db-------------	_	3	advmod	_	_
2	nám	já	PRON	PP-P3--1-------	Case=Dat|Number=Plur|Person=1|PronType=Prs	3	dobj	_	_
3	chybějí	chybět	VERB	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LGloss=(někde_něco_chybí)
4	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	5	case	_	LId=v-1
5	extralize	extraliga	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Negative=Pos|Number=Sing	3	nmod	_	_
6	zápasy	zápas	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Plur	3	nsubj	_	_
7	hrající	hrající	ADJ	AGIP1-----A----	Animacy=Inan|Aspect=Imp|Case=Nom|Gender=Masc|Negative=Pos|Number=Plur|Tense=Pres|VerbForm=Part|Voice=Act	6	amod	_	LDeriv=hrát
8	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	7	auxpass:reflex	_	LGloss=(zvr._zájmeno/částice)
9	'	'	PUNCT	Z:-------------	_	11	punct	_	SpaceAfter=No
10	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	11	case	_	LId=na-1
11	doraz	doraz	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Sing	7	nmod	_	SpaceAfter=No
12	'	'	PUNCT	Z:-------------	_	11	punct	_	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 auxpass:reflex	color:blue
1	Druhovost	druhovost	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	0	root	_	LDeriv=druhový
2	a	a	CONJ	J^-------------	_	1	cc	_	LId=a-1
3	náročnost	náročnost	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	1	conj	_	LDeriv=náročný
4	zakázek	zakázka	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Plur	1	nmod	_	_
5	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	auxpass:reflex	_	LGloss=(zvr._zájmeno/částice)
6	stále	stále	ADV	Dg-------1A----	Degree=Pos|Negative=Pos	1	advmod	_	LDeriv=stálý
7	mění	měnit	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	_
8	a	a	CONJ	J^-------------	_	1	cc	_	LId=a-1
9	zvyšuje	zvyšovat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


