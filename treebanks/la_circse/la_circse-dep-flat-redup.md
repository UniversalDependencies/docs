---
layout: base
title:  'Statistics of flat:redup in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `flat:redup`

This relation is a language-specific subtype of <tt><a href="la_circse-dep-flat.html">flat</a></tt>.
There are also 2 other language-specific subtypes of `flat`: <tt><a href="la_circse-dep-flat-gov.html">flat:gov</a></tt>, <tt><a href="la_circse-dep-flat-name.html">flat:name</a></tt>.

22 nodes (0%) are attached to their parents as `flat:redup`.

22 instances of `flat:redup` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.59090909090909.

The following 6 pairs of parts of speech are connected with `flat:redup`: <tt><a href="la_circse-pos-ADV.html">ADV</a></tt>-<tt><a href="la_circse-pos-ADV.html">ADV</a></tt> (7; 32% instances), <tt><a href="la_circse-pos-PRON.html">PRON</a></tt>-<tt><a href="la_circse-pos-PRON.html">PRON</a></tt> (6; 27% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (5; 23% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (2; 9% instances), <tt><a href="la_circse-pos-DET.html">DET</a></tt>-<tt><a href="la_circse-pos-DET.html">DET</a></tt> (1; 5% instances), <tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:redup	color:blue
1	sic	sic	ADV	M	Degree=Pos	3	advmod	_	LiLaflcat=i
2	sic	sic	ADV	M	Degree=Pos	1	flat:redup	_	LiLaflcat=i
3	agendum	ago	VERB	B3	Aspect=Prosp|Case=Nom|Degree=Pos|Gender=Neut|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Gdv|Voice=Pass	0	root	_	LiLaflcat=v3
4	est	sum	AUX	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	_	LASLAVariant=1|LiLaflcat=v6
5	inferis	inferi	NOUN	A2	Case=Dat|Gender=Masc|InflClass=IndEurO|Number=Plur	6	obl:arg	_	LiLaflcat=n2
6	reddam	reddo	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	3	conj	_	LiLaflcat=v3
7	Herculem	hercules	PROPN	A3	Case=Acc|Gender=Masc|InflClass=IndEurI|NameType=Giv|Number=Sing	6	obj	_	LASLAVariant=N|LiLaflcat=n3

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 18 flat:redup	color:blue
1	uiolenta	uiolentus	ADJ	C1	Case=Nom|Degree=Pos|Gender=Neut|InflClass=IndEurO|Number=Plur	2	amod	_	LiLaflcat=n6
2	Fata	fatum	PROPN	A2	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Plur	17	nsubj	_	LASLAVariant=N|LiLaflcat=n2
3	et	et	CCONJ	S	_	6	cc	_	LASLAVariant=2|LiLaflcat=i
4	horridus	horridus	ADJ	C1	Case=Nom|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Sing	6	amod	_	LiLaflcat=n6
5	Morbi	morbus	PROPN	A2	Case=Gen|Gender=Masc|InflClass=IndEurO|Number=Sing	6	nmod	_	LASLAVariant=N|LiLaflcat=n2
6	tremor	tremor	NOUN	A3	Case=Nom|Gender=Masc|InflClass=IndEurX|Number=Sing	2	conj	_	LiLaflcat=n3
7	Macies	macies	PROPN	A5	Case=Nom|Gender=Fem|InflClass=IndEurE|Number=Sing	6	conj	_	LASLAVariant=N|LiLaflcat=n5
8	que	que	CCONJ	S	_	7	cc	_	LiLaflcat=i
9	et	et	CCONJ	S	_	11	cc	_	LASLAVariant=2|LiLaflcat=i
10	atra	ater	ADJ	C1	Case=Nom|Degree=Pos|Gender=Fem|InflClass=IndEurA|Number=Sing	11	amod	_	LiLaflcat=n6
11	Pestis	pestis	PROPN	A3	Case=Nom|Gender=Fem|InflClass=IndEurI|Number=Sing	2	conj	_	LASLAVariant=N|LiLaflcat=n3
12	et	et	CCONJ	S	_	14	cc	_	LASLAVariant=2|LiLaflcat=i
13	rabidus	rabidus	ADJ	C1	Case=Nom|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Sing	14	amod	_	LiLaflcat=n6
14	Dolor	dolor	PROPN	A3	Case=Nom|Gender=Masc|InflClass=IndEurX|Number=Sing	2	conj	_	LASLAVariant=N|LiLaflcat=n3
15	me	ego	PRON	E	Case=Abl|InflClass=LatAnom|Number=Sing|Person=1|PronType=Prs	17	obl	_	LiLaflcat=p
16	cum	cum	ADP	R	AdpType=Prep	15	case	_	LASLAVariant=2|LiLaflcat=i
17	ite	eo	VERB	B6	Aspect=Imp|InflClass=LatAnom|Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LASLAVariant=1|LiLaflcat=v6
18	me	ego	PRON	E	Case=Abl|InflClass=LatAnom|Number=Sing|Person=1|PronType=Prs	15	flat:redup	_	LiLaflcat=p
19	cum	cum	ADP	R	AdpType=Prep	18	case	_	LASLAVariant=2|LiLaflcat=i

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 flat:redup	color:blue
1	iam	iam	ADV	M	Degree=Pos	2	advmod:tmod	_	LiLaflcat=i
2	parce	parco	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v3
3	genitor	genitor	NOUN	A3	Case=Voc|Gender=Masc|InflClass=IndEurX|Number=Sing	2	vocative	_	LiLaflcat=n3
4	parce	parco	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	2	flat:redup	_	LiLaflcat=v3
5	iam	iam	ADV	M	Degree=Pos	4	advmod:tmod	_	LiLaflcat=i
6	reuoca	reuoco	VERB	B1	Aspect=Imp|InflClass=LatA|Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	_	LiLaflcat=v1
7	manum	manus	NOUN	A4	Case=Acc|Gender=Fem|InflClass=IndEurU|Number=Sing	6	obj	_	LASLAVariant=1|LiLaflcat=n4

~~~


