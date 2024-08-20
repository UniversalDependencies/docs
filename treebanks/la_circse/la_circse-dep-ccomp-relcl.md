---
layout: base
title:  'Statistics of ccomp:relcl in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `ccomp:relcl`

This relation is a language-specific subtype of <tt><a href="la_circse-dep-ccomp.html">ccomp</a></tt>.
There are also 1 other language-specific subtypes of `ccomp`: <tt><a href="la_circse-dep-ccomp-reported.html">ccomp:reported</a></tt>.

21 nodes (0%) are attached to their parents as `ccomp:relcl`.

13 instances of `ccomp:relcl` (62%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.57142857142857.

The following 2 pairs of parts of speech are connected with `ccomp:relcl`: <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (20; 95% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 ccomp:relcl	color:blue
1	quemcumque	quicumque	DET	J	Case=Acc|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Rel	3	obj	_	LASLAVariant=1|LiLaflcat=p
2	miserum	miser	ADJ	C1	Case=Acc|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Sing	3	xcomp	_	LiLaflcat=n6
3	uideris	uideo	VERB	B2	Aspect=Perf|InflClass=LatE|Mood=Sub|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	5	ccomp:relcl	_	LiLaflcat=v2
4	hominem	homo	NOUN	A3	Case=Acc|Gender=Masc|InflClass=IndEurX|Number=Sing	5	xcomp	_	LiLaflcat=n3
5	scias	scio	VERB	B4	Aspect=Imp|InflClass=LatI|Mood=Sub|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v4

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 21 ccomp:relcl	color:blue
1	ipsum	ipse	DET	I	Case=Acc|Form=Emp|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Dem	4	det	_	LiLaflcat=p
2	quin	quin	PART	M	Polarity=Neg|PronType=Rel	6	discourse	_	LASLAVariant=1|LiLaflcat=i
3	etiam	etiam	ADV	M	Compound=Yes	6	advmod:emph	_	LiLaflcat=i
4	Oceanum	oceanus	NOUN	A2	Case=Acc|Gender=Masc|InflClass=IndEurO|NameType=Geo|Number=Sing|Proper=Yes	6	obj	_	LASLAVariant=N|LiLaflcat=n2
5	illa	illa	ADV	M	AdvType=Loc|PronType=Dem	6	advmod:lmod	_	LiLaflcat=i
6	temptauimus	tento	VERB	B1	Aspect=Perf|InflClass=LatA|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v1|TraditionalMood=Indicativus|TraditionalTense=Perfectum
7	et	et	CCONJ	M	_	13	cc	_	LASLAVariant=1|LiLaflcat=i
8	superesse	supersum	VERB	B6	Aspect=Imp|InflClass=LatAnom|VerbForm=Inf|Voice=Act	13	ccomp	_	LASLAVariant=1|LiLaflcat=v6|TraditionalMood=Infinitivus|TraditionalTense=Praesens
9	adhuc	adhuc	ADV	M	AdvType=Tim|Compound=Yes	8	advmod:tmod	_	LiLaflcat=i
10	Herculis	hercules	PROPN	A3	Case=Gen|Gender=Masc|InflClass=IndEurI|NameType=Giv|Number=Sing	11	nmod	_	LASLAVariant=N|LiLaflcat=n3
11	columnas	columna	NOUN	A1	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Plur	8	nsubj	_	LiLaflcat=n1
12	fama	fama	NOUN	A1	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	13	nsubj	_	LiLaflcat=n1
13	uulgauit	uulgo	VERB	B1	Aspect=Perf|InflClass=LatA|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	conj	_	LASLAVariant=1|LiLaflcat=v1|TraditionalMood=Indicativus|TraditionalTense=Perfectum
14	si	si	SCONJ	T	_	16	mark	_	LASLAVariant=2|LiLaflcat=i
15	ue	ue	CCONJ	T	_	16	cc	_	LASLAVariant=2|LiLaflcat=i
16	adiit	adeo	VERB	B6	Aspect=Perf|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	13	advcl	_	LASLAVariant=1|LiLaflcat=v6|TraditionalMood=Indicativus|TraditionalTense=Perfectum
17	Hercules	hercules	PROPN	A3	Case=Nom|Gender=Masc|InflClass=IndEurI|NameType=Giv|Number=Sing	16	nsubj	_	LASLAVariant=N|LiLaflcat=n3
18	seu	seu	CCONJ	T	_	27	cc	_	LASLAVariant=2|LiLaflcat=i
19	quicquid	quisquis	DET	J	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	21	nsubj	_	LASLAVariant=1|LiLaflcat=p
20	ubique	ubique	ADV	M	AdvType=Loc|Form=Emp|PronType=Rel	21	advmod:lmod	_	LiLaflcat=i
21	magnificum	magnificus	ADJ	C1	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	26	ccomp:relcl	_	LiLaflcat=n6
22	est	sum	AUX	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	21	cop	_	LASLAVariant=1|LiLaflcat=v6|TraditionalMood=Indicativus|TraditionalTense=Praesens
23	in	in	ADP	R	_	24	case	_	LiLaflcat=i
24	claritatem	claritas	NOUN	A3	Case=Acc|Gender=Fem|InflClass=IndEurX|Number=Sing	26	obl	_	LiLaflcat=n3
25	eius	is	PRON	I	Case=Gen|Gender=Masc|InflClass=LatPron|Number=Sing|Person=3|PronType=Prs	24	nmod	_	LiLaflcat=p
26	referre	refero	VERB	B6	Aspect=Imp|InflClass=LatAnom|VerbForm=Inf|Voice=Act	27	xcomp	_	LiLaflcat=v6|TraditionalMood=Infinitivus|TraditionalTense=Praesens
27	consensimus	consentio	VERB	B4	Aspect=Perf|InflClass=LatI|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	16	conj	_	LiLaflcat=v4|TraditionalMood=Indicativus|TraditionalTense=Perfectum

~~~


