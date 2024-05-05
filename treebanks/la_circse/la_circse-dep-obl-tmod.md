---
layout: base
title:  'Statistics of obl:tmod in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="la_circse-dep-obl.html">obl</a></tt>.
There are also 4 other language-specific subtypes of `obl`: <tt><a href="la_circse-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="la_circse-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="la_circse-dep-obl-cmp.html">obl:cmp</a></tt>, <tt><a href="la_circse-dep-obl-lmod.html">obl:lmod</a></tt>.

46 nodes (0%) are attached to their parents as `obl:tmod`.

34 instances of `obl:tmod` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.02173913043478.

The following 9 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (33; 72% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (3; 7% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-DET.html">DET</a></tt> (3; 7% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="la_circse-pos-DET.html">DET</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obl:tmod	color:blue
1	gelidus	gelidus	ADJ	C1	Case=Nom|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Sing	4	advcl:pred	_	LiLaflcat=n6
2	per	per	ADP	R	AdpType=Prep	3	case	_	LiLaflcat=i
3	artus	artus	NOUN	A4	Case=Acc|Gender=Masc|InflClass=IndEurU|Number=Plur	4	obl:tmod	_	LASLAVariant=1|LiLaflcat=n4
4	uadit	uado	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LASLAVariant=2|LiLaflcat=v3
5	exanguis	exsanguis	ADJ	C4	Case=Acc|Degree=Pos|Gender=Masc|InflClass=IndEurI|Number=Plur	6	amod	_	LiLaflcat=n7
6	tremor	tremor	NOUN	A3	Case=Nom|Gender=Masc|InflClass=IndEurX|Number=Sing	4	nsubj	_	LiLaflcat=n3

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obl:tmod	color:blue
1	decem	decem	NUM	D1	InflClass=Ind|Number=Plur|NumType=Card	3	nummod	_	LiLaflcat=n
2	per	per	ADP	R	AdpType=Prep	3	case	_	LiLaflcat=i
3	annos	annus	NOUN	A2	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Plur	4	obl:tmod	_	LiLaflcat=n2
4	uidua	uiduus	ADJ	C1	Case=Nom|Degree=Pos|Gender=Fem|InflClass=IndEurA|Number=Sing	5	advcl:pred	_	LiLaflcat=n6
5	respiciam	respicio	VERB	B5	Aspect=Imp|InflClass=LatI2|Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v5
6	uirum	uir	NOUN	A2	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Sing	5	obj	_	LiLaflcat=n2

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 obl:tmod	color:blue
1	post	post	ADP	R	AdpType=Prep	2	case	_	LASLAVariant=2|LiLaflcat=i
2	haec	hic	DET	I	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Plur|PronType=Dem	5	obl:tmod	_	LASLAVariant=1|LiLaflcat=p
3	auari	auarus	ADJ	C1	Case=Gen|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Sing	4	amod	_	LASLAVariant=2|LiLaflcat=n6
4	Ditis	dis	PROPN	A3	Case=Gen|Gender=Masc|InflClass=IndEurI|NameType=Rel|Number=Sing	6	nmod	_	LASLAVariant=N|LiLaflcat=n3
5	apparet	appareo	VERB	B2	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v2
6	domus	domus	NOUN	A6	Case=Nom|Gender=Fem|InflClass=IndEurU|Number=Sing	5	nsubj	_	LiLaflcat=n4
7	hic	hic	ADV	M	Degree=Pos	10	advmod:lmod	_	LASLAVariant=2|LiLaflcat=i
8	saeuus	saeuus	ADJ	C1	Case=Nom|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Sing	12	amod	_	LiLaflcat=n6
9	umbras	umbra	NOUN	A1	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Plur	10	obj	_	LiLaflcat=n1
10	territat	territo	VERB	B1	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	_	LiLaflcat=v1
11	Stygius	stygius	ADJ	C1	Case=Nom|Degree=Pos|Gender=Masc|InflClass=IndEurO|NameType=Geo|Number=Sing	8	conj	_	LASLAVariant=A|LiLaflcat=n6
12	canis	canis	NOUN	A3	Case=Nom|Gender=Masc|InflClass=IndEurI|Number=Sing	10	nsubj	_	LiLaflcat=n3
13	qui	qui	PRON	J	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Rel	20	nsubj	_	LASLAVariant=1|LiLaflcat=p
14	terna	ternus	ADJ	D3	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Plur|NumType=Dist	16	amod	_	LiLaflcat=n6
15	uasto	uastus	ADJ	C1	Case=Abl|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Sing	18	amod	_	LiLaflcat=n6
16	capita	caput	NOUN	A3	Case=Acc|Gender=Neut|InflClass=IndEurX|Number=Plur	17	obj	_	LiLaflcat=n3
17	concutiens	concutio	VERB	B5	Aspect=Imp|Case=Nom|Degree=Pos|Gender=Masc|InflClass=LatI2|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	13	acl	_	LiLaflcat=v5
18	sono	sonus	NOUN	A2	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Sing	17	obl	_	LiLaflcat=n2
19	regnum	regnum	NOUN	A2	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Sing	20	obj	_	LiLaflcat=n2
20	tuetur	tueor	VERB	B2	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	12	acl:relcl	_	LiLaflcat=v2

~~~


