---
layout: base
title:  'Statistics of dislocated:nsubj in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `dislocated:nsubj`

This relation is a language-specific subtype of .
There are also 4 other language-specific subtypes of `dislocated`: <tt><a href="la_ittb-dep-dislocated-advcl.html">dislocated:advcl</a></tt>, <tt><a href="la_ittb-dep-dislocated-ccomp.html">dislocated:ccomp</a></tt>, <tt><a href="la_ittb-dep-dislocated-csubj.html">dislocated:csubj</a></tt>, <tt><a href="la_ittb-dep-dislocated-obl.html">dislocated:obl</a></tt>.

4 nodes (0%) are attached to their parents as `dislocated:nsubj`.

3 instances of `dislocated:nsubj` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 8.25.

The following 3 pairs of parts of speech are connected with `dislocated:nsubj`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (2; 50% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-PRON.html">PRON</a></tt> (1; 25% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-PRON.html">PRON</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 2 dislocated:nsubj	color:blue
1	paraclitus	paracletus	ADJ	B1|grn1|casA|gen1|vgr2	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	2	amod	_	_
2	spiritus	spiritus	NOUN	D1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurU|Number=Sing	14	dislocated:nsubj	_	_
3	sanctus	sanctus	ADJ	B1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	2	amod	_	SpaceAfter=No
4	,	,	PUNCT	Punc	_	6	punct	_	_
5	quem	qui	PRON	F1|grn1|casD|gen1	Case=Acc|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Rel	6	obj	_	_
6	mittet	mitto	VERB	L3|modA|tem3|gen6	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	2	acl:relcl	_	TraditionalMood=Indicativus|TraditionalTense=Futurum
7	pater	pater	NOUN	C1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurX|Number=Sing	6	nsubj	_	_
8	in	in	ADP	S4	_	9	case	_	_
9	nomine	nomen	NOUN	C1|grn1|casF|gen3|comH	Case=Abl|Gender=Neut|InflClass=IndEurX|Number=Sing	6	obl	_	_
10	meo	meus	DET	F1|grn1|casF|gen3|vgr1	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	9	det	_	SpaceAfter=No
11	,	,	PUNCT	Punc	_	2	punct	_	_
12	ille	ille	DET	F1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Dem	14	nsubj	_	_
13	uos	uos	PRON	F1|grn1|casM|gen1|vgr1	Case=Acc|InflClass=LatAnom|Number=Plur|PronType=Prs	14	obj	_	_
14	docebit	doceo	VERB	K3|modA|tem3|gen6	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Futurum
15	omnia	omnis	DET	C1|grn1|casM|gen3	Case=Acc|Gender=Neut|InflClass=IndEurI|Number=Plur|PronType=Ind	14	obj	_	SpaceAfter=No
16	.	.	PUNCT	Punc	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 17 dislocated:nsubj	color:blue
1	quod	qui	PRON	F1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	2	nsubj	_	_
2	conuenit	conuenio	VERB	M3|modA|tem1|gen6|vgr1	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Lilaflcat=LatI|TraditionalMood=Indicativus|TraditionalTense=Praesens
3	soli	solus	DET	F1|grn1|casC|gen1	Case=Dat|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Con	4	det	_	_
4	deo	deus	PROPN	F1|grn1|casC|gen1	Case=Dat|Gender=Masc|InflClass=IndEurO|Number=Sing	2	obl:arg	_	_
5	nam	nam	PART	O4	_	15	discourse	_	_
6	cum	cum	SCONJ	S4|vgr1	PronType=Rel	8	mark	_	_
7	uerum	uerus	ADJ	B1|grn1|casA|gen3|vgr1	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	8	nsubj	_	_
8	sequatur	sequor	VERB	L3|modK|tem1|gen6	Aspect=Imp|InflClass=LatX|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	15	advcl	_	TraditionalMood=Subiunctivus|TraditionalTense=Praesens
9	ad	ad	ADP	S4	_	10	case	_	_
10	esse	esse	NOUN	G1|casD|gen3	_	8	obl	_	SpaceAfter=No
11	,	,	PUNCT	Punc	_	8	punct	_	_
12	illud	ille	DET	F1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	15	nsubj	_	_
13	tantum	tantum	ADV	O4	NumType=Card|PronType=Dem	12	advmod	_	_
14	sua	suus	DET	A1|grn1|casA|gen2	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing|Person[psor]=3|Poss=Yes|PronType=Prs|Reflex=Yes	15	det	_	_
15	ueritas	ueritas	NOUN	C1|grn1|casA|gen2|vgr1	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	2	conj	_	_
16	est	sum	AUX	N3|modA|tem1|gen6	InflClass=LatAnom|Number=Sing|VerbForm=Fin	15	cop	_	_
17	quod	qui	PRON	F1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	15	dislocated:nsubj	_	_
18	est	sum	AUX	N3|modA|tem1|gen6	InflClass=LatAnom|Number=Sing|VerbForm=Fin	20	cop	_	_
19	suum	suus	DET	B1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing|Person[psor]=3|Poss=Yes|PronType=Prs|Reflex=Yes	20	det	_	_
20	esse	esse	NOUN	G1|casA|gen3	_	17	acl:relcl	_	SpaceAfter=No
21	,	,	PUNCT	Punc	_	24	punct	_	_
22	quod	qui	PRON	F1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	24	nsubj	_	_
23	est	sum	AUX	N3|modA|tem1|gen6	InflClass=LatAnom|Number=Sing|VerbForm=Fin	24	cop	_	_
24	proprium	proprius	ADJ	B1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	20	acl:relcl	_	_
25	soli	solus	DET	F1|grn1|casC|gen1	Case=Dat|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Con	26	det	_	_
26	deo	deus	PROPN	F1|grn1|casC|gen1	Case=Dat|Gender=Masc|InflClass=IndEurO|Number=Sing	24	obl:arg	_	SpaceAfter=No
27	,	,	PUNCT	Punc	_	31	punct	_	_
28	ut	ut	SCONJ	O4|vgr1	PronType=Rel	31	mark	_	_
29	in	in	ADP	S4	_	30	case	_	_
30	secundo	secundus	ADJ	B1|grn1|casF|gen1	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Sing|NumType=Ord	31	obl	_	_
31	ostensum	ostendo	VERB	L2|modM|tem4|grp1|casA|gen3	Aspect=Perf|Case=Nom|Gender=Neut|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	24	advcl	_	TraditionalMood=Participium|TraditionalTense=Perfectum
32	est	sum	AUX	N3|modA|tem1|gen6	InflClass=LatAnom|Number=Sing|VerbForm=Fin	31	aux:pass	_	SpaceAfter=No
33	.	.	PUNCT	Punc	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 14 dislocated:nsubj	color:blue
1	sicut	sicut	SCONJ	O4|vgr1	_	2	mark	_	_
2	misit	mitto	VERB	L3|modA|tem4|gen6	Aspect=Perf|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	20	advcl	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
3	me	ego	PRON	F1|grn1|casD|gen1	Case=Acc|InflClass=LatAnom|Number=Sing|PronType=Prs	2	obj	_	_
4	uiuens	uiuo	VERB	L2|modD|tem1|grp1|casA|gen1|vgr1	Aspect=Imp|Case=Nom|Gender=Masc|InflClass=LatX|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	5	acl	_	TraditionalMood=Participium|TraditionalTense=Praesens
5	pater	pater	NOUN	C1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurX|Number=Sing	2	nsubj	_	SpaceAfter=No
6	,	,	PUNCT	Punc	_	9	punct	_	_
7	et	et	CCONJ	O4	_	9	cc	_	_
8	ego	ego	PRON	F1|grn1|casA|gen1	Case=Nom|InflClass=LatAnom|Number=Sing|PronType=Prs	9	nsubj	_	_
9	uiuo	uiuo	VERB	L3|modA|tem1|gen4|vgr1	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
10	propter	propter	ADP	S4	_	11	case	_	_
11	patrem	pater	NOUN	C1|grn1|casD|gen1	Case=Acc|Gender=Masc|InflClass=IndEurX|Number=Sing	9	obl	_	SpaceAfter=No
12	,	,	PUNCT	Punc	_	2	punct	_	_
13	et	et	CCONJ	O4	_	14	advmod:emph	_	_
14	qui	qui	PRON	F1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Rel	20	dislocated:nsubj	_	_
15	manducat	manduco	VERB	J3|modA|tem1|gen6	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	14	acl:relcl	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
16	me	ego	PRON	F1|grn1|casD|gen1	Case=Acc|InflClass=LatAnom|Number=Sing|PronType=Prs	15	obj	_	SpaceAfter=No
17	,	,	PUNCT	Punc	_	20	punct	_	_
18	et	et	CCONJ	O4	_	19	advmod:emph	_	_
19	ipse	ipse	DET	F1|grn1|casA|gen1	Case=Nom|Form=Emp|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Dem	20	nsubj	_	_
20	uiuet	uiuo	VERB	L3|modA|tem3|gen6	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Futurum
21	propter	propter	ADP	S4	_	22	case	_	_
22	me	ego	PRON	F1|grn1|casD|gen1	Case=Acc|InflClass=LatAnom|Number=Sing|PronType=Prs	20	obl	_	SpaceAfter=No
23	.	.	PUNCT	Punc	_	20	punct	_	_

~~~


