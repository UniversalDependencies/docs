---
layout: base
title:  'Statistics of obl:lmod in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `obl:lmod`

This relation is a language-specific subtype of <tt><a href="la_circse-dep-obl.html">obl</a></tt>.
There are also 4 other language-specific subtypes of `obl`: <tt><a href="la_circse-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="la_circse-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="la_circse-dep-obl-cmp.html">obl:cmp</a></tt>, <tt><a href="la_circse-dep-obl-tmod.html">obl:tmod</a></tt>.

432 nodes (2%) are attached to their parents as `obl:lmod`.

270 instances of `obl:lmod` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.35185185185185.

The following 14 pairs of parts of speech are connected with `obl:lmod`: <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (344; 80% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt> (22; 5% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-PRON.html">PRON</a></tt> (17; 4% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (14; 3% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (12; 3% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-DET.html">DET</a></tt> (6; 1% instances), <tt><a href="la_circse-pos-ADV.html">ADV</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt> (3; 1% instances), <tt><a href="la_circse-pos-DET.html">DET</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="la_circse-pos-ADV.html">ADV</a></tt>-<tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="la_circse-pos-NUM.html">NUM</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 obl:lmod	color:blue
1	iam	iam	ADV	M	Degree=Pos	3	advmod:tmod	_	LiLaflcat=i
2	nullus	nullus	DET	L	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Neg	4	det	_	LiLaflcat=p
3	superest	supersum	VERB	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LASLAVariant=1|LiLaflcat=v6
4	timor	timor	NOUN	A3	Case=Nom|Gender=Masc|InflClass=IndEurX|Number=Sing	3	nsubj	_	LiLaflcat=n3
5	nil	nihil	PRON	L	InflClass=Ind|PronType=Neg	7	nsubj	_	LiLaflcat=n
6	ultra	ultra	ADP	R	AdpType=Prep	8	case	_	LASLAVariant=2|LiLaflcat=i
7	iacet	iaceo	VERB	B2	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	LiLaflcat=v2
8	inferos	inferi	NOUN	A2	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Plur	7	obl:lmod	_	LiLaflcat=n2

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 obl:lmod	color:blue
1	ipse	ipse	DET	I	Case=Nom|Form=Emp|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Dem	5	nsubj	_	LiLaflcat=p
2	ad	ad	ADP	R	AdpType=Prep	3	case	_	LASLAVariant=2|LiLaflcat=i
3	Penates	penates	PROPN	A3	Case=Acc|Gender=Masc|InflClass=IndEurI|NameType=Rel|Number=Plur	5	obl:lmod	_	LASLAVariant=N|LiLaflcat=n3
4	regios	regius	ADJ	C1	Case=Acc|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Plur	3	amod	_	LiLaflcat=n6
5	referam	refero	VERB	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v6
6	gradum	gradus	NOUN	A4	Case=Acc|Gender=Masc|InflClass=IndEurU|Number=Sing	5	obj	_	LiLaflcat=n4

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


