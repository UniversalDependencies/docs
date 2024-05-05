---
layout: base
title:  'Statistics of cc in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `cc`

This relation is universal.

1471 nodes (8%) are attached to their parents as `cc`.

1236 instances of `cc` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.54724677090415.

The following 16 pairs of parts of speech are connected with `cc`: <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-CCONJ.html">CCONJ</a></tt> (672; 46% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-CCONJ.html">CCONJ</a></tt> (494; 34% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-CCONJ.html">CCONJ</a></tt> (145; 10% instances), <tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_circse-pos-CCONJ.html">CCONJ</a></tt> (63; 4% instances), <tt><a href="la_circse-pos-PRON.html">PRON</a></tt>-<tt><a href="la_circse-pos-CCONJ.html">CCONJ</a></tt> (29; 2% instances), <tt><a href="la_circse-pos-ADV.html">ADV</a></tt>-<tt><a href="la_circse-pos-CCONJ.html">CCONJ</a></tt> (20; 1% instances), <tt><a href="la_circse-pos-DET.html">DET</a></tt>-<tt><a href="la_circse-pos-CCONJ.html">CCONJ</a></tt> (20; 1% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (13; 1% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (6; 0% instances), <tt><a href="la_circse-pos-NUM.html">NUM</a></tt>-<tt><a href="la_circse-pos-CCONJ.html">CCONJ</a></tt> (3; 0% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="la_circse-pos-ADP.html">ADP</a></tt>-<tt><a href="la_circse-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_circse-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_circse-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 cc	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 cc	color:blue
1	Cadmea	cadmeius	ADJ	C1	Case=Voc|Degree=Pos|Gender=Fem|InflClass=IndEurA|NameType=Giv|Number=Sing	2	amod	_	LASLAVariant=A|LiLaflcat=n6
2	proles	proles	NOUN	A3	Case=Voc|Gender=Fem|InflClass=IndEurI|Number=Sing	7	vocative	_	LiLaflcat=n3
3	atque	atque	CCONJ	S	_	5	cc	_	LASLAVariant=1|LiLaflcat=i
4	Ophionium	ophionius	ADJ	C1	Case=Voc|Degree=Pos|Gender=Neut|InflClass=IndEurO|NameType=Giv|Number=Sing	5	amod	_	LASLAVariant=A|LiLaflcat=n6
5	genus	genus	NOUN	A3	Case=Voc|Gender=Neut|InflClass=IndEurX|Number=Sing	2	conj	_	LASLAVariant=1|LiLaflcat=n3
6	quo	quo	ADV	O	PronType=Int	7	advmod:lmod	_	LASLAVariant=3|LiLaflcat=i
7	reccidistis	recido	VERB	B3	Aspect=Perf|InflClass=LatX|Mood=Ind|Number=Plur|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	LASLAVariant=1|LiLaflcat=v3

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cc	color:blue
1	his	hic	DET	I	Case=Abl|Gender=Fem,Masc,Neut|InflClass=LatPron|Number=Plur|PronType=Dem	6	obl:cmp	_	LASLAVariant=1|LiLaflcat=p
2	etiam	etiam	ADV	M	Degree=Pos	6	advmod:emph	_	LiLaflcat=i
3	pater	pater	NOUN	A3	Case=Voc|Gender=Masc|InflClass=IndEurX|Number=Sing	9	vocative	_	LiLaflcat=n3
4	quicquam	quisquam	PRON	L	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Ind	9	nsubj	_	LiLaflcat=p
5	timeri	timeo	VERB	B2	Aspect=Imp|InflClass=LatE|InflClass[nominal]=Ind|VerbForm=Inf|Voice=Pass	9	xcomp	_	LiLaflcat=v2
6	maius	magnus	ADJ	C1	Case=Nom|Degree=Cmp|Gender=Neut|InflClass=IndEurX|Number=Sing	4	amod	_	LiLaflcat=n7
7	aut	aut	CCONJ	S	_	8	cc	_	LiLaflcat=i
8	grauius	grauis	ADJ	C4	Case=Nom|Degree=Cmp|Gender=Neut|InflClass=IndEurX|Number=Sing	6	conj	_	LiLaflcat=n7
9	potest	possum	VERB	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LASLAVariant=1|LiLaflcat=v6

~~~


