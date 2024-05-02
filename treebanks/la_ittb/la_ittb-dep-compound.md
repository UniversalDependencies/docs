---
layout: base
title:  'Statistics of compound in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `compound`

This relation is universal.

21 nodes (0%) are attached to their parents as `compound`.

12 instances of `compound` (57%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.85714285714286.

The following 3 pairs of parts of speech are connected with `compound`: <tt><a href="la_ittb-pos-DET.html">DET</a></tt>-<tt><a href="la_ittb-pos-DET.html">DET</a></tt> (11; 52% instances), <tt><a href="la_ittb-pos-NUM.html">NUM</a></tt>-<tt><a href="la_ittb-pos-NUM.html">NUM</a></tt> (6; 29% instances), <tt><a href="la_ittb-pos-DET.html">DET</a></tt>-<tt><a href="la_ittb-pos-NUM.html">NUM</a></tt> (4; 19% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 compound	color:blue
1	quod	quod	SCONJ	O4	_	3	mark	_	_
2	matrimonium	matrimonium	NOUN	B1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	3	nsubj	_	_
3	debeat	debeo	VERB	K3|modB|tem1|gen6	Aspect=Imp|InflClass=LatE|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Subiunctivus|TraditionalTense=Praesens
4	esse	sum	AUX	N3|modH|tem1	Aspect=Imp|Tense=Pres|VerbForm=Inf	5	cop	_	_
5	unius	unus	DET	F1|grn1|casB|gen1|vgr2	Case=Gen|Gender=Masc|InflClass=LatPron|Number=Sing|NumType=Card|NumValue=1|PronType=Ind	3	xcomp	_	_
6	ad	ad	ADP	S4	_	7	case	_	_
7	unam	unus	DET	F1|grn1|casD|gen2	Case=Acc|Gender=Fem|InflClass=LatPron|Number=Sing|NumType=Card|NumValue=1|PronType=Ind	5	compound	_	SpaceAfter=No
8	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 compound	color:blue
1	millia	mille	NUM	C1|grn1|casJ|gen3|vgr1	Case=Nom|Gender=Neut|InflClass=IndEurI|Number=Plur|NumForm=Word|NumType=Card	3	nsubj	_	_
2	millium	mille	NUM	C1|grn1|casK|gen3|vgr1	Case=Gen|Gender=Neut|InflClass=IndEurI|Number=Plur|NumForm=Word|NumType=Card	1	compound	_	_
3	ministrabant	ministro	VERB	J3|modA|tem2|gen9	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Imperfectum
4	ei	is	PRON	F1|grn1|casC|gen1	Case=Dat|Gender=Masc|InflClass=LatPron|Number=Sing|Person=3|PronType=Prs	3	obl:arg	_	SpaceAfter=No
5	,	,	PUNCT	Punc	_	11	punct	_	_
6	et	et	CCONJ	O4	_	11	cc	_	_
7	decies	decem	ADV	O4	_	11	advmod	_	_
8	millies	mille	NUM	O4|vgr1	NumForm=Word|NumType=Card	7	nummod	_	_
9	centena	centum	NUM	B1|grn1|casJ|gen3	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Plur|NumForm=Word|NumType=Card	11	nsubj	_	_
10	millia	mille	NUM	C1|grn1|casJ|gen3|vgr1	Case=Nom|Gender=Neut|InflClass=IndEurI|Number=Plur|NumForm=Word|NumType=Card	9	compound	_	_
11	assistebant	assisto	VERB	L3|modA|tem2|gen9	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	conj	_	TraditionalMood=Indicativus|TraditionalTense=Imperfectum
12	ei	is	PRON	F1|grn1|casC|gen1	Case=Dat|Gender=Masc|InflClass=LatPron|Number=Sing|Person=3|PronType=Prs	11	obl:arg	_	SpaceAfter=No
13	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 compound	color:blue
1	et	et	CCONJ	O4	_	9	cc	_	_
2	propter	propter	ADP	S4	_	3	case	_	_
3	hoc	hic	DET	F1|grn1|casD|gen3	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	9	obl	_	_
4	in	in	ADP	S4	_	5	case	_	_
5	uno	unus	DET	F1|grn1|casF|gen1	Case=Abl|Gender=Masc|InflClass=LatPron|Number=Sing|NumType=Card|NumValue=1|PronType=Ind	9	obl	_	_
6	trium	tres	NUM	C1|grn1|casK|gen1	Case=Gen|Gender=Masc|InflClass=IndEurI|Number=Plur|NumForm=Word|NumType=Card	5	compound	_	_
7	omnes	omnis	DET	C1|grn1|casJ|gen1	Case=Nom|Gender=Masc|InflClass=IndEurI|Number=Plur|PronType=Tot	8	det	_	_
8	tres	tres	NUM	C1|grn1|casJ|gen1|vgr1	Case=Nom|Gender=Masc|InflClass=IndEurI|Number=Plur|NumForm=Word|NumType=Card	9	nsubj:pass	_	_
9	intelliguntur	intellego	VERB	L3|modJ|tem1|gen9	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
10	.	.	PUNCT	Punc	_	9	punct	_	_

~~~


