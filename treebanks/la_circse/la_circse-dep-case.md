---
layout: base
title:  'Statistics of case in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `case`

This relation is universal.

661 nodes (3%) are attached to their parents as `case`.

627 instances of `case` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.35098335854766.

The following 9 pairs of parts of speech are connected with `case`: <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-ADP.html">ADP</a></tt> (512; 77% instances), <tt><a href="la_circse-pos-PRON.html">PRON</a></tt>-<tt><a href="la_circse-pos-ADP.html">ADP</a></tt> (54; 8% instances), <tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_circse-pos-ADP.html">ADP</a></tt> (31; 5% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-ADP.html">ADP</a></tt> (29; 4% instances), <tt><a href="la_circse-pos-DET.html">DET</a></tt>-<tt><a href="la_circse-pos-ADP.html">ADP</a></tt> (25; 4% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-ADP.html">ADP</a></tt> (5; 1% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-INTJ.html">INTJ</a></tt> (3; 0% instances), <tt><a href="la_circse-pos-ADV.html">ADV</a></tt>-<tt><a href="la_circse-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="la_circse-pos-NUM.html">NUM</a></tt>-<tt><a href="la_circse-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 case	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 case	color:blue
1	nemo	nemo	PRON	L	Case=Nom|InflClass=IndEurX|Number=Sing|PronType=Neg	0	root	_	LiLaflcat=n7
2	est	sum	AUX	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	LASLAVariant=1|LiLaflcat=v6
3	nisi	nisi	SCONJ	T	Polarity=Neg	4	mark	_	LiLaflcat=i
4	ipse	ipse	DET	I	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Dem	1	det	_	LiLaflcat=p
5	bella	bellum	NOUN	A2	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Plur	9	obj	_	LiLaflcat=n2
6	iam	iam	ADV	M	Degree=Pos	9	advmod:tmod	_	LiLaflcat=i
7	se	sui	PRON	G	Case=Abl|InflClass=LatAnom|Number=Sing|Person=3|PronType=Prs|Reflex=Yes	9	obl	_	LASLAVariant=1|LiLaflcat=p
8	cum	cum	ADP	R	AdpType=Prep	7	case	_	LASLAVariant=2|LiLaflcat=i
9	gerat	gero	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	LiLaflcat=v3

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 case	color:blue
1	tandem	tandem	ADV	M	Degree=Pos	2	advmod:tmod	_	LiLaflcat=i
2	reuertor	reuertor	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	LiLaflcat=v3
3	sospes	sospes	ADJ	C2	Case=Nom|Degree=Pos|Gender=Fem,Masc,Neut|InflClass=IndEurX|Number=Sing	2	advcl:pred	_	LiLaflcat=n7
4	ad	ad	ADP	R	AdpType=Prep	6	case	_	LASLAVariant=2|LiLaflcat=i
5	patrios	patrius	ADJ	C1	Case=Acc|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Plur	6	amod	_	LiLaflcat=n6
6	Lares	lar	PROPN	A3	Case=Acc|Gender=Masc|InflClass=IndEurI|NameType=Rel|Number=Plur	2	obl	_	LASLAVariant=N|LiLaflcat=n3
7	o	o	PART	U	PartType=Emp	10	advmod:emph	_	LiLaflcat=i
8	cara	carus	ADJ	C1	Case=Voc|Degree=Pos|Gender=Fem|InflClass=IndEurA|Number=Sing	10	amod	_	LiLaflcat=n6
9	salue	salueo	VERB	B2	Aspect=Imp|InflClass=LatE|Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	_	LiLaflcat=v2
10	terra	terra	NOUN	A1	Case=Voc|Gender=Fem|InflClass=IndEurA|Number=Sing	9	vocative	_	LiLaflcat=n1

~~~


