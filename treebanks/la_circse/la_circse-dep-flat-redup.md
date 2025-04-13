---
layout: base
title:  'Statistics of flat:redup in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `flat:redup`

This relation is a language-specific subtype of <tt><a href="la_circse-dep-flat.html">flat</a></tt>.
There are also 2 other language-specific subtypes of `flat`: <tt><a href="la_circse-dep-flat-gov.html">flat:gov</a></tt>, <tt><a href="la_circse-dep-flat-name.html">flat:name</a></tt>.

13 nodes (0%) are attached to their parents as `flat:redup`.

13 instances of `flat:redup` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.76923076923077.

The following 5 pairs of parts of speech are connected with `flat:redup`: <tt><a href="la_circse-pos-ADV.html">ADV</a></tt>-<tt><a href="la_circse-pos-ADV.html">ADV</a></tt> (5; 38% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (4; 31% instances), <tt><a href="la_circse-pos-PRON.html">PRON</a></tt>-<tt><a href="la_circse-pos-PRON.html">PRON</a></tt> (2; 15% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt> (1; 8% instances).


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


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:redup	color:blue
1	me	ego	PRON	E	Case=Acc|InflClass=LatAnom|Number=Sing|Person=1|PronType=Prs	7	obj	_	LiLaflcat=p
2	me	ego	PRON	E	Case=Acc|InflClass=LatAnom|Number=Sing|Person=1|PronType=Prs	1	flat:redup	_	LiLaflcat=p
3	sorores	soror	NOUN	A3	Case=Voc|Gender=Masc|InflClass=IndEurX|Number=Plur	7	vocative	_	LiLaflcat=n3
4	mente	mens	NOUN	A3	Case=Abl|Gender=Fem|InflClass=IndEurI|Number=Sing	5	obl	_	LiLaflcat=n3
5	deiectam	deicio	VERB	B5	Aspect=Perf|Case=Acc|Degree=Pos|Gender=Fem|InflClass=LatI2|InflClass[nominal]=IndEurA|Number=Sing|VerbForm=Part|Voice=Pass	1	acl	_	LiLaflcat=v5
6	mea	meus	DET	F	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	4	det	_	LiLaflcat=n6
7	uersate	uerso	VERB	B1	Aspect=Imp|InflClass=LatA|Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v1
8	primam	primus	ADJ	D2	Case=Acc|Degree=Abs|Gender=Fem|InflClass=IndEurA|Number=Sing|NumType=Ord	7	advcl:pred	_	LiLaflcat=n6
9	facere	facio	VERB	B5	Aspect=Imp|InflClass=LatI2|InflClass[nominal]=Ind|VerbForm=Inf|Voice=Act	12	xcomp	_	LiLaflcat=v5
10	si	si	SCONJ	T	_	12	mark	_	LASLAVariant=2|LiLaflcat=i
11	quicquam	quisquam	PRON	L	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Ind	9	obj	_	LiLaflcat=p
12	apparo	apparo	VERB	B1	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	7	advcl	_	LASLAVariant=2|LiLaflcat=v1
13	dignum	dignus	ADJ	C1	Case=Acc|Degree=Pos|Gender=Neut|InflClass=IndEurO|Number=Sing	11	amod	_	LiLaflcat=n6
14	nouerca	nouerca	NOUN	A1	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Sing	13	obl:arg	_	LiLaflcat=n1
15	uota	uotum	NOUN	A2	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Plur	16	nsubj:pass	_	LiLaflcat=n2
16	mutentur	muto	VERB	B1	Aspect=Imp|InflClass=LatA|Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	7	conj	_	LASLAVariant=2|LiLaflcat=v1
17	mea	meus	DET	F	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Plur|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	15	det	_	LiLaflcat=n6
18	natos	natus	NOUN	A2	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Plur	20	obj	_	LASLAVariant=1|LiLaflcat=n2
19	reuersus	reuertor	VERB	B3	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Masc|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	20	advcl:pred	_	LiLaflcat=v3
20	uideat	uideo	VERB	B2	Aspect=Imp|InflClass=LatE|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	22	ccomp	_	LiLaflcat=v2
21	incolumes	incolumis	ADJ	C4	Case=Acc|Degree=Pos|Gender=Masc|InflClass=IndEurI|Number=Plur	20	advcl:pred	_	LiLaflcat=n7
22	precor	precor	VERB	B1	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Pass	16	conj	_	LiLaflcat=v1
23	manu	manus	NOUN	A4	Case=Abl|Gender=Fem|InflClass=IndEurU|Number=Sing	25	obl	_	LASLAVariant=1|LiLaflcat=n4
24	que	que	CCONJ	S	_	26	cc	_	LiLaflcat=i
25	fortis	fortis	ADJ	C4	Case=Nom|Degree=Pos|Gender=Masc|InflClass=IndEurI|Number=Sing	26	advcl:pred	_	LiLaflcat=n7
26	redeat	redeo	VERB	B6	Aspect=Imp|InflClass=LatAnom|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	22	ccomp	_	LASLAVariant=1|LiLaflcat=v6

~~~


