---
layout: base
title:  'Statistics of csubj:cleft in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `csubj:cleft`

This relation is a language-specific subtype of <tt><a href="la_ittb-dep-csubj.html">csubj</a></tt>.
There are also 2 other language-specific subtypes of `csubj`: <tt><a href="la_ittb-dep-csubj-pass.html">csubj:pass</a></tt>, <tt><a href="la_ittb-dep-csubj-relcl.html">csubj:relcl</a></tt>.

5 nodes (0%) are attached to their parents as `csubj:cleft`.

5 instances of `csubj:cleft` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.8.

The following 5 pairs of parts of speech are connected with `csubj:cleft`: <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (1; 20% instances), <tt><a href="la_ittb-pos-ADV.html">ADV</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (1; 20% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (1; 20% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (1; 20% instances), <tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 csubj:cleft	color:blue
1	nam	nam	PART	O4	_	2	discourse	_	_
2	uiolentum	uiolentus	ADJ	B1|grn1|casA|gen3|vgr1	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	0	root	_	_
3	est	sum	AUX	N3|modA|tem1|gen6	InflClass=LatAnom|Number=Sing|VerbForm=Fin	2	cop	_	_
4	cuius	qui	PRON	F1|grn1|casB|gen3|vgr2	Case=Gen|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	5	nmod	_	_
5	principium	principium	NOUN	B1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	7	nsubj	_	_
6	est	sum	AUX	N3|modA|tem1|gen6	InflClass=LatAnom|Number=Sing|VerbForm=Fin	7	cop	_	_
7	extra	extra	ADV	S4	_	2	csubj:cleft	_	_
8	nil	nihil	ADV	G1|casD|gen3|vgr1	Polarity=Neg|PronType=Ind	9	advmod	_	_
9	conferente	confero	VERB	N2|modD|tem1|grp1|casF|gen3	Aspect=Imp|Case=Abl|Gender=Neut|InflClass=LatAnom|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	7	advcl:abs	_	TraditionalMood=Participium|TraditionalTense=Praesens
10	uim	uis	NOUN	F1|grn1|casD|gen2|vgr1	Case=Acc|Gender=Fem|InflClass=IndEurI|Number=Sing	9	obj	_	_
11	passo	patior	VERB	L2|modM|tem4|grp1|casF|gen3	Aspect=Perf|Case=Abl|Gender=Neut|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	9	nsubj	_	SpaceAfter=No|TraditionalMood=Participium|TraditionalTense=Perfectum
12	.	.	PUNCT	Punc	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 19 csubj:cleft	color:blue
1	hinc	hinc	ADV	F1|grn1|casG	AdvType=Loc|Case=Loc|PronType=Dem	0	root	_	_
2	est	sum	AUX	N3|modA|tem1|gen6	InflClass=LatAnom|Number=Sing|VerbForm=Fin	1	cop	_	_
3	quod	quod	SCONJ	F1|grn1|casA|gen3	PronType=Rel	19	mark	_	SpaceAfter=No
4	,	,	PUNCT	Punc	_	9	punct	_	_
5	licet	licet	SCONJ	O4	_	9	mark	_	_
6	diuinae	diuinus	ADJ	A1|grn1|casC|gen2	Case=Dat|Gender=Fem|InflClass=IndEurA|Number=Sing	7	amod	_	_
7	prouidentiae	prouidentia	NOUN	A1|grn1|casC|gen2	Case=Dat|Gender=Fem|InflClass=IndEurA|Number=Sing	9	obl:arg	_	_
8	omnia	omnis	DET	C1|grn1|casJ|gen3	Case=Nom|Gender=Neut|InflClass=IndEurI|Number=Plur|PronType=Ind	9	nsubj:pass	_	_
9	subdantur	subdo	VERB	L3|modK|tem1|gen9	Aspect=Imp|InflClass=LatX|Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	19	advcl	_	SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
10	,	,	PUNCT	Punc	_	9	punct	_	_
11	tamen	tamen	ADV	O4	Form=Emp	19	advmod	_	_
12	in	in	ADP	S4	_	13	case	_	_
13	scripturis	scriptura	NOUN	A1|grn1|casO|gen2	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Plur	19	obl	_	_
14	sacris	sacer	ADJ	A1|grn1|casO|gen2	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Plur	13	amod	_	_
15	specialiter	specialiter	ADV	C1|grn1|casG	_	19	advmod	_	_
16	ei	is	PRON	F1|grn1|casC|gen1	Case=Dat|Gender=Masc|InflClass=LatPron|Number=Sing|Person=3|PronType=Prs	19	obl:arg	_	_
17	hominum	homo	NOUN	C1|grn1|casK|gen1	Case=Gen|Gender=Masc|InflClass=IndEurX|Number=Plur	18	nmod	_	_
18	cura	cura	NOUN	A1|grn1|casA|gen2	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	19	nsubj:pass	_	_
19	attribuitur	attribuo	VERB	L3|modJ|tem1|gen6|vgr1	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	1	csubj:cleft	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
20	:	:	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 csubj:cleft	color:blue
1	eadem	idem	DET	F1|grn1|casF|gen2	Case=Nom|Form=Emp|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Dem	3	det	_	_
2	enim	enim	PART	O4	_	3	discourse	_	_
3	essentia	essentia	NOUN	A1|grn1|casF|gen2|vgr1	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	0	root	_	_
4	est	sum	AUX	N3|modA|tem1|gen6	InflClass=LatAnom|Number=Sing|VerbForm=Fin	3	cop	_	_
5	quae	qui	PRON	F1|grn1|casA|gen2|vgr1	Case=Nom|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Rel	7	nsubj	_	_
6	est	sum	AUX	N3|modA|tem1|gen6	InflClass=LatAnom|Number=Sing|VerbForm=Fin	7	cop	_	_
7	res	res	NOUN	E1|grn1|casA|gen2	Case=Nom|Gender=Fem|InflClass=IndEurE|Number=Sing	3	csubj:cleft	_	_
8	habens	habeo	VERB	K2|modD|tem1|grp1|casA|gen2	Aspect=Imp|Case=Nom|Gender=Fem|InflClass=LatE|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	7	acl	_	TraditionalMood=Participium|TraditionalTense=Praesens
9	esse	esse	NOUN	G1|casD|gen3	_	8	obj	_	_
10	naturaliter	naturaliter	ADV	C1|grn1|casG	_	8	advmod	_	SpaceAfter=No
11	,	,	PUNCT	Punc	_	10	punct	_	_
12	et	et	CCONJ	O4	_	13	cc	_	_
13	uerbum	uerbum	NOUN	B1|grn1|casD|gen3|vgr1	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	7	conj	_	_
14	intelligibile	intelligibilis	ADJ	C1|grn1|casD|gen3|vgr1	Case=Acc|Gender=Neut|InflClass=IndEurI|Number=Sing	13	amod	_	_
15	sui	se	PRON	F1|grn1|casB|gen1	Case=Gen|InflClass=LatAnom|PronType=Prs|Reflex=Yes	13	nmod	_	_
16	ipsius	ipse	DET	F1|grn1|casB|gen1	Case=Gen|Form=Emp|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Dem	15	det	_	SpaceAfter=No
17	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


