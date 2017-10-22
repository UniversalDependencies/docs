---
layout: base
title:  'Statistics of ccomp in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `ccomp`

This relation is universal.

21 nodes (0%) are attached to their parents as `ccomp`.

19 instances of `ccomp` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.52380952380952.

The following 6 pairs of parts of speech are connected with `ccomp`: <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt> (13; 62% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (4; 19% instances), <tt><a href="cs_cltt-pos-DET.html">DET</a></tt>-<tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 ccomp	color:blue
1	Ostatní	ostatní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	3	amod	_	_
2	účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	3	amod	_	LId=účetní-1
3	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	4	nsubj	_	_
4	stanoví	stanovit	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	8	punct	_	_
6	zda	zda	SCONJ	J,-------------	_	8	mark	_	_
7	budou	být	AUX	VB-P---3F-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin|Voice=Act	8	aux	_	_
8	účtovat	účtovat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	4	ccomp	_	_
9	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	11	case	_	LId=o-1
10	odložené	odložený	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	11	amod	_	_
11	dani	daň	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	8	obl:arg	_	_
12	a	a	CCONJ	J^-------------	_	13	cc	_	LId=a-1
13	vykazovat	vykazovat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	8	conj	_	_
14	ji	on	PRON	PPFS4--3-------	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	13	obj	_	SpaceAfter=No|LId=on-1
15	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 ccomp	color:blue
1	Účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	2	amod	_	LId=účetní-1
2	jednotka	jednotka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	3	nsubj	_	_
3	zjišťuje	zjišťovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	8	punct	_	_
5	zda	zda	SCONJ	J,-------------	_	8	mark	_	_
6	zajištění	zajištění	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	8	nsubj	_	_
7	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	_
8	efektivní	efektivní	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	3	ccomp	_	_
9	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	10	case	_	LId=na-1
10	počátku	počátek	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	8	obl	_	_
11	zajištění	zajištění	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	10	nmod	_	_
12	a	a	CCONJ	J^-------------	_	16	cc	_	LId=a-1
13	dále	dále	ADV	Db------------1	_	16	cc	_	LId=dále-3
14	nejméně	málo	ADV	Dg-------2A----	Degree=Cmp|Polarity=Pos	16	advmod:emph	_	LId=málo-3
15	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	16	case	_	LId=k-1
16	okamžiku	okamžik	NOUN	NNIS3-----A----	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing|Polarity=Pos	10	conj	_	_
17	sestavení	sestavení	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	16	nmod	_	_
18	účetní	účetní	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	19	amod	_	LId=účetní-1
19	závěrky	závěrka	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	17	nmod	_	SpaceAfter=No
20	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 ccomp	color:blue
1	Dále	dále	ADV	Db------------1	_	2	advmod	_	LId=dále-3
2	může	moci	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	4	amod	_	LId=účetní-1
4	jednotka	jednotka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	2	nsubj	_	_
5	rozhodnout	rozhodnout	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	2	xcomp	_	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	10	punct	_	_
7	že	že	SCONJ	J,-------------	_	10	mark	_	_
8	dlouhodobým	dlouhodobý	ADJ	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	10	amod	_	_
9	nehmotným	hmotný	ADJ	AAIS7----1N----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Neg	10	amod	_	_
10	majetkem	majetek	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	5	ccomp	_	_
11	nejsou	být	AUX	VB-P---3P-NA---	Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	_	_
12	zejména	zejména	ADV	Db-------------	_	14	advmod:emph	_	_
13	technické	technický	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	14	amod	_	_
14	audity	audit	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	10	nsubj	_	_
15	a	a	CCONJ	J^-------------	_	17	cc	_	LId=a-1
16	energetické	energetický	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	17	amod	_	_
17	audity	audit	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	14	conj	_	SpaceAfter=No
18	,	,	PUNCT	Z:-------------	_	21	punct	_	_
19	lesní	lesní	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	21	amod	_	_
20	hospodářské	hospodářský	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	21	amod	_	_
21	plány	plán	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	14	conj	_	_
22	a	a	CCONJ	J^-------------	_	23	cc	_	LId=a-1
23	plány	plán	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	14	conj	_	_
24	povodí	povodí	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	23	nmod	_	SpaceAfter=No
25	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


