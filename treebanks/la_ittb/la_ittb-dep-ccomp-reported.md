---
layout: base
title:  'Statistics of ccomp:reported in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `ccomp:reported`

This relation is a language-specific subtype of <tt><a href="la_ittb-dep-ccomp.html">ccomp</a></tt>.
There are also 1 other language-specific subtypes of `ccomp`: <tt><a href="la_ittb-dep-ccomp-relcl.html">ccomp:relcl</a></tt>.

4 nodes (0%) are attached to their parents as `ccomp:reported`.

4 instances of `ccomp:reported` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.75.

The following 2 pairs of parts of speech are connected with `ccomp:reported`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (3; 75% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 ccomp:reported	color:blue
1	nec	nec	CCONJ	O4	_	3	advmod:emph	_	_
2	mouere	moueo	VERB	K3|modH|tem1|vgr1	Aspect=Imp|InflClass=LatE|VerbForm=Inf|Voice=Act	3	csubj	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
3	oportet	oportet	VERB	K3|modA|tem1|gen6	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
4	quod	quod	SCONJ	O4	_	5	mark	_	_
5	dicit	dico	VERB	N3|modA|tem1|gen6	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	csubj	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
6	,	,	PUNCT	Punc	_	7	punct	_	_
7	audiet	audio	VERB	M3|modA|tem3|gen6	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	5	ccomp:reported	_	Lilaflcat=LatI|SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Futurum
8	,	,	PUNCT	Punc	_	12	punct	_	_
9	quasi	quasi	ADV	O4	Compound=Yes	12	advmod:emph	_	_
10	de	de	ADP	S4	_	11	case	_	_
11	futuro	futurum	NOUN	B1|grn1|casF|gen3	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Sing	12	obl	_	_
12	loquens	loquor	VERB	L2|modM|tem1|grp1|casA|gen1	Aspect=Imp|Case=Nom|Gender=Masc|InflClass=LatX|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	5	advcl	_	SpaceAfter=No|TraditionalMood=Participium|TraditionalTense=Praesens
13	,	,	PUNCT	Punc	_	19	punct	_	_
14	cum	cum	SCONJ	S4|vgr1	PronType=Rel	19	mark	_	_
15	accipere	accipio	VERB	L3|modH|tem1	Aspect=Imp|InflClass=LatX|VerbForm=Inf|Voice=Act	19	csubj	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
16	spiritum	spiritus	NOUN	D1|grn1|casD|gen1	Case=Acc|Gender=Masc|InflClass=IndEurU|Number=Sing	15	obj	_	_
17	sanctum	sanctus	ADJ	B1|grn1|casD|gen1	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Sing	16	amod	_	_
18	sit	sum	AUX	N3|modB|tem1|gen6	Aspect=Imp|InflClass=LatAnom|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	19	cop	_	TraditionalMood=Subiunctivus|TraditionalTense=Praesens
19	aeternum	aeternus	ADJ	B1|grn1|casA|gen3|vgr1	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	5	advcl	_	SpaceAfter=No
20	:	:	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 16 ccomp:reported	color:blue
1	resurgere	resurgo	VERB	L3|modH|tem1	Aspect=Imp|InflClass=LatX|VerbForm=Inf|Voice=Act	3	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
2	autem	autem	PART	O4	_	3	discourse	_	_
3	uoluit	uolo	VERB	N3|modA|tem4|gen6|vgr1	Aspect=Perf|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
4	ut	ut	SCONJ	O4|vgr1	PronType=Rel	8	mark	_	_
5	nos	nos	PRON	F1|grn1|casM|gen1	Case=Acc|InflClass=LatAnom|Number=Plur|Person=1|PronType=Prs	8	obj	_	_
6	a	ab	ADP	S4|vgr1	_	7	case	_	_
7	morte	mors	NOUN	C1|grn1|casF|gen2	Case=Abl|Gender=Fem|InflClass=IndEurI|Number=Sing	8	obl:arg	_	_
8	liberaret	libero	VERB	J3|modB|tem2|gen6	Aspect=Imp|InflClass=LatA|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	advcl	_	TraditionalMood=Subiunctivus|TraditionalTense=Imperfectum
9	unde	unde	ADV	O4	AdvType=Loc|PronType=Rel	10	advmod:lmod	_	_
10	apostolus	apostolus	NOUN	B1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	3	conj	_	SpaceAfter=No
11	,	,	PUNCT	Punc	_	12	punct	_	_
12	i	i	NUM	G5|vgr1	NumForm=Roman|NumType=Card	10	orphan	_	_
13	cor.	corinthius	ADJ	5	Abbr=Yes|NameType=Nat|Proper=Yes	12	nmod	_	_
14	15-20	15-20	NUM	G5	_	13	nummod	_	_
15	christus	christus	ADJ	B1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	16	nsubj	_	_
16	resurrexit	resurgo	VERB	L3|modA|tem4|gen6	Aspect=Perf|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	10	ccomp:reported	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
17	a	ab	ADP	S4|vgr1	_	18	mark	_	_
18	mortuis	morior	VERB	L2|modM|tem4|grp1|casO|gen1	Aspect=Perf|Case=Abl|Gender=Masc|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Plur|VerbForm=Part|Voice=Pass	16	obl	_	SpaceAfter=No|TraditionalMood=Participium|TraditionalTense=Perfectum
19	,	,	PUNCT	Punc	_	20	punct	_	_
20	primitiae	primitiae	NOUN	A1|grn1|casJ|gen2|vgr1	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Plur	16	advcl:pred	_	_
21	dormientium	dormio	VERB	M2|modD|tem1|grp1|casK|gen1	Aspect=Imp|Case=Gen|Gender=Masc|InflClass[nominal]=IndEurI|Number=Plur|VerbForm=Part|Voice=Act	20	nmod	_	Lilaflcat=LatI|SpaceAfter=No|TraditionalMood=Participium|TraditionalTense=Praesens
22	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


