---
layout: base
title:  'Statistics of parataxis:rep in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `parataxis:rep`

This relation is a language-specific subtype of <tt><a href="la_ittb-dep-parataxis.html">parataxis</a></tt>.

2 nodes (0%) are attached to their parents as `parataxis:rep`.

2 instances of `parataxis:rep` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 31.

The following 2 pairs of parts of speech are connected with `parataxis:rep`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-DET.html">DET</a></tt> (1; 50% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 22 parataxis:rep	color:blue
1	apostolus	apostolus	NOUN	B1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	2	nsubj	_	_
2	dicit	dico	VERB	N3|modA|tem1|gen6	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
3	,	,	PUNCT	Punc	_	4	punct	_	_
4	hebr.	hebraeus	ADJ	5	Abbr=Yes|NameType=Nat|Proper=Yes	2	advmod	_	_
5	2-11	2-11	NUM	G5	InflClass=Ind|NumForm=Reference	4	nummod	_	_
6	qui	qui	PRON	F1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Rel	22	nsubj	_	_
7	sanctificat	sanctifico	VERB	J3|modA|tem1|gen6	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	acl:relcl	_	SpaceAfter=No
8	,	,	PUNCT	Punc	_	10	punct	_	_
9	scilicet	scilicet	CCONJ	O4	VerbForm=Fin	10	cc	_	_
10	christus	christus	NOUN	B1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	6	conj:expl	_	SpaceAfter=No
11	,	,	PUNCT	Punc	_	13	punct	_	_
12	et	et	CCONJ	O4	_	13	cc	_	_
13	qui	qui	PRON	F1|grn1|casJ|gen1	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Plur|PronType=Rel	6	conj	_	_
14	sanctificantur	sanctifico	VERB	J3|modJ|tem1|gen9	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	13	acl:relcl	_	SpaceAfter=No
15	,	,	PUNCT	Punc	_	17	punct	_	_
16	scilicet	scilicet	CCONJ	O4	VerbForm=Fin	17	cc	_	_
17	fideles	fidelis	NOUN	C1|grn1|casJ|gen1	Case=Nom|Gender=Masc|InflClass=IndEurI|Number=Plur	13	conj:expl	_	_
18	christi	christus	ADJ	B1|grn1|casB|gen1	Case=Gen|Gender=Masc|InflClass=IndEurO|Number=Sing	17	nmod	_	SpaceAfter=No
19	,	,	PUNCT	Punc	_	6	punct	_	_
20	ex	ex	ADP	S4|vgr2	AdpType=Prep	21	case	_	_
21	uno	unus	NUM	F1|grn1|casF|gen1	Case=Abl|Gender=Masc|InflClass=LatPron|Number=Sing|NumType=Card	22	obl	_	_
22	omnes	omnis	DET	C1|grn1|casM|gen1	Case=Acc|Gender=Masc|InflClass=IndEurI|Number=Plur	2	parataxis:rep	_	SpaceAfter=No
23	.	.	PUNCT	Punc	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 44	bgColor:blue
# visual-style 44	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 44 parataxis:rep	color:blue
1	cyrillus	cyrillus	PROPN	B1|grn1|casA|gen1|vgr1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	2	nsubj	_	_
2	dicit	dico	VERB	N3|modA|tem1|gen6	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
3	,	,	PUNCT	Punc	_	5	punct	_	_
4	in	in	ADP	S4	AdpType=Prep	5	case	_	_
5	epistola	epistola	NOUN	A1|grn1|casF|gen2|vgr1	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Sing	2	obl	_	_
6	ad	ad	ADP	S4	AdpType=Prep	7	case	_	_
7	nestorium	nestorius	NOUN	B1|grn1|casD|gen1	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Sing	5	nmod	_	SpaceAfter=No
8	,	,	PUNCT	Punc	_	14	punct	_	_
9	quae	qui	PRON	F1|grn1|casA|gen2|vgr1	Case=Nom|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Rel	14	nsubj:pass	_	_
10	est	sum	AUX	N3|modA|tem1|gen6	InflClass=LatAnom|Number=Sing|VerbForm=Fin	14	aux:pass	_	_
11	in	in	ADP	S4	AdpType=Prep	13	case	_	_
12	ephesina	ephesinus	ADJ	A1|grn1|casF|gen2	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Sing	13	amod	_	_
13	synodo	synodus	NOUN	B1|grn1|casF|gen2	Case=Abl|Gender=Fem|InflClass=IndEurO|Number=Sing	14	obl	_	_
14	approbata	approbo	VERB	J2|modM|tem4|grp1|casA|gen2	Aspect=Perf|Case=Nom|Gender=Fem|InflClass=LatA|InflClass[nominal]=IndEurA|Number=Sing|VerbForm=Part|Voice=Pass	5	acl:relcl	_	SpaceAfter=No
15	:	:	PUNCT	Punc	_	19	punct	_	_
16	si	si	SCONJ	O4	_	19	mark	_	_
17	quis	qui	PRON	F1|grn1|casA|gen1|varA	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Rel	19	nsubj	_	_
18	non	non	PART	O4	Polarity=Neg	19	advmod:neg	_	_
19	confitetur	confiteor	VERB	K3|modJ|tem1|gen6	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	44	advcl	_	_
20	carni	caro	NOUN	C1|grn1|casC|gen2	Case=Dat|Gender=Fem|InflClass=IndEurI|Number=Sing	23	obl	_	_
21	secundum	secundum	ADP	S4	AdpType=Prep	22	case	_	_
22	subsistentiam	subsistentia	NOUN	A1|grn1|casD|gen2	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing	23	obl	_	_
23	unitum	unio	VERB	M2|modM|tem4|grp1|casD|gen3	Aspect=Perf|Case=Acc|Gender=Neut|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	19	ccomp	_	Lilaflcat=LatI
24	ex	ex	ADP	S4|vgr2	AdpType=Prep	25	case	_	_
25	deo	deus	PROPN	F1|grn1|casC|gen1	Case=Dat|Gender=Masc|InflClass=IndEurO|Number=Sing	27	nmod	_	_
26	patre	pater	NOUN	C1|grn1|casF|gen1	Case=Abl|Gender=Masc|InflClass=IndEurX|Number=Sing	25	flat	_	_
27	uerbum	uerbum	NOUN	B1|grn1|casD|gen3|vgr1	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Sing	23	nsubj	_	SpaceAfter=No
28	,	,	PUNCT	Punc	_	29	punct	_	_
29	unum	unus	NUM	F1|grn1|casD|gen3|comQ	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|NumType=Card	23	conj	_	_
30	que	que	CCONJ	O4	_	29	cc	_	_
31	esse	sum	AUX	N3|modH|tem1	InflClass=LatAnom|InflClass[nominal]=Ind|VerbForm=Inf	29	cop	_	_
32	christum	christus	ADJ	B1|grn1|casD|gen1	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Sing	29	nsubj	_	_
33	cum	cum	ADP	S4|vgr1	AdpType=Prep	35	case	_	_
34	sua	suus	DET	A1|grn1|casF|gen2	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Sing|Person[psor]=3|Poss=Yes|PronType=Prs|Reflex=Yes	35	det	_	_
35	carne	caro	NOUN	C1|grn1|casF|gen2	Case=Abl|Gender=Fem|InflClass=IndEurI|Number=Sing	29	obl	_	SpaceAfter=No
36	,	,	PUNCT	Punc	_	39	punct	_	_
37	eundem	idem	DET	F1|grn1|casD|gen1|vgr1	Case=Acc|Form=Emp|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Dem	39	nsubj	_	_
38	uidelicet	uidelicet	CCONJ	O4|vgr1	VerbForm=Fin	39	cc	_	_
39	deum	deus	NOUN	F1|grn1|casD|gen1	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Sing	29	conj:expl	_	_
40	simul	simul	ADV	O4	_	39	advmod	_	_
41	et	et	CCONJ	O4	_	42	cc	_	_
42	hominem	homo	NOUN	C1|grn1|casD|gen1	Case=Acc|Gender=Masc|InflClass=IndEurX|Number=Sing	39	conj	_	SpaceAfter=No
43	,	,	PUNCT	Punc	_	19	punct	_	_
44	anathema	anathema	NOUN	C1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=IndEurX|Number=Sing	2	parataxis:rep	_	_
45	sit	sum	AUX	N3|modB|tem1|gen6	InflClass=LatAnom|Number=Sing|VerbForm=Fin	44	cop	_	SpaceAfter=No
46	.	.	PUNCT	Punc	_	2	punct	_	_

~~~


