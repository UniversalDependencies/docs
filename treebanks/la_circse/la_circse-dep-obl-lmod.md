---
layout: base
title:  'Statistics of obl:lmod in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `obl:lmod`

This relation is a language-specific subtype of <tt><a href="la_circse-dep-obl.html">obl</a></tt>.
There are also 4 other language-specific subtypes of `obl`: <tt><a href="la_circse-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="la_circse-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="la_circse-dep-obl-cmp.html">obl:cmp</a></tt>, <tt><a href="la_circse-dep-obl-tmod.html">obl:tmod</a></tt>.

348 nodes (2%) are attached to their parents as `obl:lmod`.

223 instances of `obl:lmod` (64%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.37931034482759.

The following 13 pairs of parts of speech are connected with `obl:lmod`: <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (275; 79% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt> (18; 5% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-PRON.html">PRON</a></tt> (16; 5% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (12; 3% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (11; 3% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-DET.html">DET</a></tt> (4; 1% instances), <tt><a href="la_circse-pos-ADV.html">ADV</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="la_circse-pos-DET.html">DET</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="la_circse-pos-NUM.html">NUM</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 obl:lmod	color:blue
1	me	ego	PRON	E	Case=Acc|InflClass=LatAnom|Number=Sing|Person=1|PronType=Prs	2	obj	_	LiLaflcat=p
2	uicit	uinco	VERB	B3	Aspect=Perf|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v3
3	et	et	CCONJ	S	_	5	cc	_	LASLAVariant=2|LiLaflcat=i
4	se	sui	PRON	G	Case=Acc|InflClass=LatAnom|Number=Sing|Person=3|PronType=Prs|Reflex=Yes	5	obj	_	LASLAVariant=1|LiLaflcat=p
5	uincat	uinco	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	_	LiLaflcat=v3
6	et	et	CCONJ	S	_	7	cc	_	LASLAVariant=2|LiLaflcat=i
7	cupiat	cupio	VERB	B5	Aspect=Imp|InflClass=LatI2|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	_	LiLaflcat=v5
8	mori	morior	VERB	B5	Aspect=Imp|InflClass=LatI2|InflClass[nominal]=Ind|VerbForm=Inf|Voice=Pass	7	ccomp	_	LiLaflcat=v5
9	ab	ab	ADP	R	AdpType=Prep	10	case	_	LiLaflcat=i
10	inferis	inferi	NOUN	A2	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Plur	11	obl:lmod	_	LiLaflcat=n2
11	reuersus	reuertor	VERB	B3	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Masc|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	7	advcl:pred	_	LiLaflcat=v3

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 obl:lmod	color:blue
1	quis	quis	PRON	K	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Int	2	det	_	LASLAVariant=1|LiLaflcat=p
2	Lycus	lycus	PROPN	A2	Case=Nom|Gender=Masc|InflClass=IndEurO|NameType=Giv|Number=Sing	4	nsubj	_	LASLAVariant=N|LiLaflcat=n2
3	regnum	regnum	NOUN	A2	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Sing	4	obj	_	LiLaflcat=n2
4	obtinet	obtineo	VERB	B2	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v2
5	quis	quis	PRON	K	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Int	10	nsubj	_	LASLAVariant=1|LiLaflcat=p
6	tanta	tantus	DET	I	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Plur|PronType=Dem	8	det	_	LiLaflcat=n6
7	Thebis	thebae	PROPN	A1	Case=Abl|Gender=Fem|InflClass=IndEurA|NameType=Geo|Number=Plur	9	obl:lmod	_	LASLAVariant=N|LiLaflcat=n1
8	scelera	scelus	NOUN	A3	Case=Acc|Gender=Neut|InflClass=IndEurX|Number=Plur	9	obj	_	LiLaflcat=n3
9	moliri	molior	VERB	B4	Aspect=Imp|InflClass=LatI|InflClass[nominal]=Ind|VerbForm=Inf|Voice=Pass	10	xcomp	_	LiLaflcat=v4
10	ausus	audeo	VERB	Y2	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Masc|InflClass=LatE|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	4	conj	_	LiLaflcat=v2
11	est	sum	AUX	Z2	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux:pass	_	LASLAVariant=2|LiLaflcat=v6
12	Hercule	hercules	PROPN	A3	Case=Abl|Gender=Masc|InflClass=IndEurI|NameType=Giv|Number=Sing	13	nsubj:pass	_	LASLAVariant=N|LiLaflcat=n3
13	reuerso	reuertor	VERB	B3	Aspect=Perf|Case=Abl|Degree=Pos|Gender=Masc|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	10	advcl:abs	_	LiLaflcat=v3

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 obl:lmod	color:blue
1	liberis	liberi	NOUN	A2	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Plur	2	obl:arg	_	LiLaflcat=n2
2	plenus	plenus	ADJ	C1	Case=Nom|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Sing	0	root	_	LiLaflcat=n6
3	tribus	tres	NUM	D1	Case=Abl|Gender=Masc|InflClass=IndEurI|Number=Plur|NumType=Card	1	nummod	_	LiLaflcat=n7
4	in	in	ADP	R	AdpType=Prep	5	case	_	LiLaflcat=i
5	me	ego	PRON	E	Case=Abl|InflClass=LatAnom|Number=Sing|Person=1|PronType=Prs	6	obl:lmod	_	LiLaflcat=p
6	sepultis	sepelio	VERB	B4	Aspect=Perf|Case=Abl|Degree=Pos|Gender=Masc|InflClass=LatI|InflClass[nominal]=IndEurO|Number=Plur|VerbForm=Part|Voice=Pass	1	acl	_	LiLaflcat=v4

~~~


