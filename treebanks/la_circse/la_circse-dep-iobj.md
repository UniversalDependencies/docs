---
layout: base
title:  'Statistics of iobj in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `iobj`

This relation is universal.

8 nodes (0%) are attached to their parents as `iobj`.

6 instances of `iobj` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.625.

The following 4 pairs of parts of speech are connected with `iobj`: <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-DET.html">DET</a></tt> (2; 25% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (2; 25% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-PRON.html">PRON</a></tt> (2; 25% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (2; 25% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 iobj	color:blue
1	suadeam	suadeo	VERB	B2	Aspect=Imp|InflClass=LatE|Mood=Sub|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v2
2	hoc	hic	DET	I	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	1	obj	_	LASLAVariant=1|LiLaflcat=p
3	illis	ille	DET	I	Case=Dat|Gender=Fem,Masc,Neut|InflClass=LatPron|Number=Plur|PronType=Dem	6	obl	_	LiLaflcat=p
4	ego	ego	PRON	E	Case=Nom|InflClass=LatAnom|Number=Sing|Person=1|PronType=Prs	1	nsubj	_	LiLaflcat=p
5	in	in	ADP	R	AdpType=Prep	3	case	_	LiLaflcat=i
6	utrumque	uterque	DET	L	Case=Acc|Gender=Masc,Neut|InflClass=LatPron|Number=Sing|PronType=Ind	1	iobj	_	LiLaflcat=p
7	quis	qui	PRON	J	Case=Dat|Gender=Fem,Masc,Neut|InflClass=LatPron|Number=Plur|PronType=Rel	9	obl:arg	_	LASLAVariant=1|LiLaflcat=p
8	est	sum	AUX	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	LASLAVariant=1|LiLaflcat=v6
9	liber	liber	ADJ	C1	Case=Nom|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Sing	3	acl:relcl	_	LASLAVariant=2|LiLaflcat=n6
10	etiamnum	etiamnunc	ADV	M	Degree=Pos	9	advmod:tmod	_	LiLaflcat=i
11	status	status	NOUN	A4	Case=Nom|Gender=Masc|InflClass=IndEurU|Number=Sing	9	nsubj	_	LASLAVariant=1|LiLaflcat=n4
12	tibi	tu	PRON	E	Case=Dat|InflClass=LatAnom|Number=Sing|Person=2|PronType=Prs	14	obl	_	LiLaflcat=p
13	iam	iam	ADV	M	Degree=Pos	14	advmod:tmod	_	LiLaflcat=i
14	necesse	necesse	ADJ	C6	Degree=Pos|InflClass=Ind	1	conj	_	LiLaflcat=n
15	est	sum	AUX	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	cop	_	LASLAVariant=1|LiLaflcat=v6
16	ferre	fero	VERB	B6	Aspect=Imp|InflClass=LatAnom|InflClass[nominal]=Ind|VerbForm=Inf|Voice=Act	14	csubj	_	LiLaflcat=v6
17	fortunam	fortuna	NOUN	A1	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing	16	obj	_	LiLaflcat=n1
18	tuam	tuus	DET	F	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing|Number[psor]=Sing|Person[psor]=2|Poss=Yes|PronType=Prs	17	det	_	LiLaflcat=n6

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 9 iobj	color:blue
1	in	in	ADP	R	AdpType=Prep	2	case	_	LiLaflcat=i
2	uota	uotum	NOUN	A2	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Plur	5	obl	_	LiLaflcat=n2
3	miseros	miser	ADJ	C1	Case=Acc|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Plur	5	obj	_	LiLaflcat=n6
4	ultimus	ultimus	ADJ	C	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	6	amod	_	LiLaflcat=null
5	cogit	cogo	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v3
6	timor	timor	NOUN	A3	Case=Nom|Gender=Masc|InflClass=IndEurX|Number=Sing	5	nsubj	_	LiLaflcat=n3
7	eadem	idem	DET	I	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Plur|PronType=Dem	13	obj	_	LiLaflcat=p
8	que	que	CCONJ	S	_	13	cc	_	LiLaflcat=i
9	superos	superi	NOUN	A2	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Plur	13	iobj	_	LiLaflcat=n2
10	Troes	troes	PROPN	A3	Case=Nom|Gender=Masc|InflClass=IndEurX|NameType=Nat|Number=Plur	13	nsubj	_	LASLAVariant=N|LiLaflcat=n3
11	et	et	CCONJ	S	_	12	cc	_	LASLAVariant=2|LiLaflcat=i
12	Danai	danai	PROPN	A2	Case=Nom|Gender=Masc|InflClass=IndEurO|NameType=Nat|Number=Plur	10	conj	_	LASLAVariant=N|LiLaflcat=n2
13	rogant	rogo	VERB	B1	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	_	LiLaflcat=v1

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 10 iobj	color:blue
1	si	si	SCONJ	T	_	3	mark	_	_
2	pacis	pax	NOUN	A3	Case=Gen|Gender=Fem|InflClass=IndEurX|Number=Sing	3	nmod	_	_
3	odium	odium	NOUN	A2	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	5	advcl	_	_
4	est	sum	AUX	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
5	furere	furo	VERB	B3	Aspect=Imp|InflClass=LatX|InflClass[nominal]=Ind|VerbForm=Inf|Voice=Act	0	root	_	_
6	si	si	SCONJ	T	_	8	mark	_	_
7	bello	bellum	NOUN	A2	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Sing	8	obl	_	_
8	placet	placeo	VERB	B2	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	13	advcl	_	_
9	inducias	indutiae	NOUN	A1	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Plur	13	obj	_	_
10	te	tu	PRON	E	Case=Acc|InflClass=LatAnom|Number=Sing|Person=2|PronType=Prs	13	iobj	_	_
11	mater	mater	NOUN	A3	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	13	nsubj	_	_
12	exiguas	exiguus	ADJ	C1	Case=Acc|Degree=Pos|Gender=Fem|InflClass=IndEurA|Number=Plur	9	amod	_	_
13	rogat	rogo	VERB	B1	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	_	_
14	ferat	fero	VERB	B6	Aspect=Imp|InflClass=LatAnom|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	13	advcl	_	_
15	ut	ut	SCONJ	T	_	14	mark	_	_
16	reuerso	reuertor	VERB	B3	Aspect=Perf|Case=Dat|Degree=Pos|Gender=Masc|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	19	acl	_	_
17	post	post	ADP	R	AdpType=Prep	18	case	_	_
18	fugam	fuga	NOUN	A1	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing	16	obl:tmod	_	_
19	nato	natus	NOUN	A2	Case=Dat|Gender=Masc|InflClass=IndEurO|Number=Sing	14	obl:arg	_	_
20	oscula	osculum	NOUN	A2	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Plur	14	obj	_	_
21	uel	uel	CCONJ	S	_	22	cc	_	_
22	prima	primus	ADJ	D2	Case=Acc|Degree=Abs|Gender=Neut|InflClass=IndEurO|Number=Plur|NumType=Ord	20	amod	_	_
23	uel	uel	CCONJ	S	_	24	cc	_	_
24	suprema	superus	ADJ	C1	Case=Acc|Degree=Abs|Gender=Neut|InflClass=IndEurO|Number=Plur	22	conj	_	_

~~~


