---
layout: base
title:  'Statistics of csubj:cleft in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `csubj:cleft`

This relation is a language-specific subtype of <tt><a href="la_ittb-dep-csubj.html">csubj</a></tt>.
There are also 2 other language-specific subtypes of `csubj`: <tt><a href="la_ittb-dep-csubj-pass.html">csubj:pass</a></tt>, <tt><a href="la_ittb-dep-csubj-relcl.html">csubj:relcl</a></tt>.

3 nodes (0%) are attached to their parents as `csubj:cleft`.

3 instances of `csubj:cleft` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.33333333333333.

The following 3 pairs of parts of speech are connected with `csubj:cleft`: <tt><a href="la_ittb-pos-ADV.html">ADV</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (1; 33% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (1; 33% instances), <tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (1; 33% instances).


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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 csubj:cleft	color:blue
1	nam	nam	PART	O4	_	2	discourse	_	_
2	intellectus	intellectus	NOUN	D1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurU|Number=Sing	0	root	_	_
3	agens	ago	VERB	L2|modD|tem1|grp1|casA|gen1	Aspect=Imp|Case=Nom|Gender=Masc|InflClass=LatX|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	2	acl	_	TraditionalMood=Participium|TraditionalTense=Praesens
4	est	sum	AUX	N3|modA|tem1|gen6	InflClass=LatAnom|Number=Sing|VerbForm=Fin	2	cop	_	_
5	qui	qui	PRON	F1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Rel	6	nsubj	_	_
6	facit	facio	VERB	N3|modA|tem1|gen6	Aspect=Imp|InflClass=LatI2|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	csubj:cleft	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
7	species	species	NOUN	E1|grn1|casM|gen2	Case=Acc|Gender=Fem|InflClass=IndEurE|Number=Plur	6	obj	_	_
8	a	ab	ADP	S4|vgr1	_	9	case	_	_
9	sensibilibus	sensibilis	ADJ	C1|grn1|casO|gen3	Case=Abl|Gender=Neut|InflClass=IndEurI|Number=Plur	10	obl:arg	_	_
10	acceptas	accipio	VERB	L2|modM|tem4|grp1|casM|gen2	Aspect=Perf|Case=Acc|Gender=Fem|InflClass=LatX|InflClass[nominal]=IndEurA|Number=Plur|VerbForm=Part|Voice=Pass	7	acl	_	TraditionalMood=Participium|TraditionalTense=Perfectum
11	esse	sum	AUX	N3|modH|tem1	VerbForm=Inf	12	cop	_	_
12	intelligibiles	intelligibilis	ADJ	C1|grn1|casM|gen2	Case=Acc|Gender=Fem|InflClass=IndEurI|Number=Plur	6	xcomp	_	_
13	actu	actus	NOUN	D1|grn1|casF|gen1	Case=Abl|Gender=Masc|InflClass=IndEurU|Number=Sing	12	obl	_	SpaceAfter=No
14	;	;	PUNCT	Punc	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 csubj:cleft	color:blue
1	ex	ex	ADP	S4|vgr2	_	3	case	_	_
2	sacris	sacer	ADJ	A1|grn1|casO|gen2	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Plur	3	amod	_	_
3	scripturis	scriptura	NOUN	A1|grn1|casO|gen2	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Plur	4	obl	_	_
4	apparet	appareo	VERB	K3|modA|tem1|gen6	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
5	deum	deus	PROPN	F1|grn1|casD|gen1	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Sing	4	csubj:relcl	_	_
6	esse	sum	AUX	N3|modH|tem1	VerbForm=Inf	5	cop	_	_
7	qui	qui	PRON	F1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Rel	8	nsubj	_	_
8	locutus	loquor	VERB	L2|modM|tem4|grp1|casA|gen1|vgr1	Aspect=Perf|Case=Nom|Gender=Masc|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	5	csubj:cleft	_	TraditionalMood=Participium|TraditionalTense=Perfectum
9	est	sum	AUX	N3|modA|tem1|gen6	InflClass=LatAnom|Number=Sing|VerbForm=Fin	8	aux:pass	_	_
10	per	per	ADP	S4	_	11	case	_	_
11	prophetas	propheta	NOUN	A1|grn1|casM|gen1	Case=Acc|Gender=Masc|InflClass=IndEurA|Number=Plur	8	obl	_	SpaceAfter=No
12	:	:	PUNCT	Punc	_	4	punct	_	_

~~~


