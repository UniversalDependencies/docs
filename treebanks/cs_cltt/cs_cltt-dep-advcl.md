---
layout: base
title:  'Statistics of advcl in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `advcl`

This relation is universal.

241 nodes (1%) are attached to their parents as `advcl`.

167 instances of `advcl` (69%) are left-to-right (parent precedes child).
Average distance between parent and child is 11.5601659751037.

The following 17 pairs of parts of speech are connected with `advcl`: <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt> (69; 29% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (58; 24% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (27; 11% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt> (20; 8% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (15; 6% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (15; 6% instances), <tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_cltt-pos-NUM.html">NUM</a></tt> (13; 5% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt> (5; 2% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-AUX.html">AUX</a></tt> (4; 2% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-AUX.html">AUX</a></tt> (3; 1% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="cs_cltt-pos-AUX.html">AUX</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 advcl	color:blue
1	Informace	informace	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	3	nsubj:pass	3:nsubj:pass	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	3	expl:pass	3:expl:pass	_
3	považuje	považovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	5	case	5:case	LId=za-1
5	spolehlivou	spolehlivý	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	3	obl:arg	3:obl:arg:za:acc	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	8	punct	8:punct	_
7	jestliže	jestliže	SCONJ	J,-------------	_	8	mark	8:mark	_
8	splňuje	splňovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	advcl	3:advcl:jestliže	_
9	požadavek	požadavek	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	8	obj	8:obj	_
10	§_7_odst._1	§_7_odst._1	X	X@-------------	_	9	nmod	9:nmod	_
11	a	a	CCONJ	J^-------------	_	15	cc	15:cc	LId=a-1
12	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	15	cop	15:cop	SpaceAfter=No
13	-	-	PUNCT	Z:-------------	_	15	punct	15:punct	SpaceAfter=No
14	li	li	PART	TT-------------	_	15	mark	15:mark	_
15	úplná	úplný	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	8	conj	3:advcl:jestliže|8:conj	_
16	a	a	CCONJ	J^-------------	_	17	cc	17:cc	LId=a-1
17	včasná	včasný	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	15	conj	3:advcl:jestliže|15:conj	SpaceAfter=No
18	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 advcl	color:blue
1	Pokud	pokud	SCONJ	J,-------------	_	5	mark	5:mark	_
2	tato	tento	DET	PDFS1----------	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	3	det	3:det	_
3	sazba	sazba	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	5	nsubj	5:nsubj	_
4	daně	daň	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	3	nmod	3:nmod:gen	_
5	známa	známý	ADJ	ACQW------A----	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Variant=Short	8	advcl	8:advcl:pokud	LId=známý-2
6	není	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	5:cop	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	5	punct	5:punct	_
8	použije	použít	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
9	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	8	expl:pass	8:expl:pass	_
10	sazba	sazba	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	8	nsubj:pass	8:nsubj:pass	_
11	platná	platný	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	10	amod	10:amod	_
12	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	15	case	15:case	LId=v-1
13	příštím	příští	ADJ	AANS6----1A----	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	15	amod	15:amod	_
14	účetním	účetní	ADJ	AANS6----1A----	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	15	amod	15:amod	LId=účetní-1
15	období	období	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos	11	obl	11:obl:v:loc	SpaceAfter=No
16	.	.	PUNCT	Z:-------------	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 17 advcl	color:blue
1	Účetní	účetní	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	2	amod	2:amod	LId=účetní-1
2	období	období	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	8	nsubj	8:nsubj|10:nsubj:xsubj|13:nsubj:xsubj	_
3	bezprostředně	bezprostředně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	4	advmod	4:advmod	_
4	předcházející	předcházející	ADJ	AGFS3-----A----	Aspect=Imp|Case=Dat|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	2	amod	2:amod	_
5	změně	změna	NOUN	NNFS3-----A----	Case=Dat|Gender=Fem|Number=Sing|Polarity=Pos	4	obl:arg	4:obl:arg:dat	_
6	účetního	účetní	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	7	amod	7:amod	LId=účetní-1
7	období	období	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	5	nmod	5:nmod:gen	_
8	může	moci	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
9	být	být	AUX	Vf--------A----	Polarity=Pos|VerbForm=Inf	10	cop	10:cop	_
10	kratší	krátký	ADJ	AAIS1----2A----	Animacy=Inan|Case=Nom|Degree=Cmp|Gender=Masc|Number=Sing|Polarity=Pos	8	xcomp	8:xcomp	_
11	nebo	nebo	CCONJ	J^-------------	_	13	cc	13:cc	_
12	i	i	CCONJ	J^-------------	_	13	advmod:emph	13:advmod:emph	LId=i-1
13	delší	dlouhý	ADJ	AAIS1----2A----	Animacy=Inan|Case=Nom|Degree=Cmp|Gender=Masc|Number=Sing|Polarity=Pos	10	conj	8:xcomp|10:conj	LId=dlouhý-2
14	než	než	SCONJ	J,-------------	_	15	mark	15:mark	LId=než-2
15	uvedených	uvedený	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	13	advcl	13:advcl:než	_
16	dvanáct	dvanáct	NUM	Cn-S4----------	Case=Acc|Number=Sing|NumForm=Word|NumType=Card	17	nummod:gov	17:nummod:gov	_
17	měsíců	měsíc	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	15	advcl	15:advcl	SpaceAfter=No
18	.	.	PUNCT	Z:-------------	_	8	punct	8:punct	_

~~~


