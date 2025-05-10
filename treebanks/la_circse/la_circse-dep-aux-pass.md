---
layout: base
title:  'Statistics of aux:pass in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="la_circse-dep-aux.html">aux</a></tt>.

64 nodes (0%) are attached to their parents as `aux:pass`.

52 instances of `aux:pass` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.671875.

The following 2 pairs of parts of speech are connected with `aux:pass`: <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-AUX.html">AUX</a></tt> (63; 98% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-AUX.html">AUX</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 aux:pass	color:blue
1	perdenda	perdo	VERB	B3	Aspect=Prosp|Case=Nom|Degree=Pos|Gender=Fem|InflClass=LatX|InflClass[nominal]=IndEurA|Number=Sing|VerbForm=Gdv|Voice=Pass	0	root	_	LiLaflcat=v3
2	mors	mors	NOUN	A3	Case=Nom|Gender=Fem|InflClass=IndEurI|Number=Sing	1	nsubj:pass	_	LiLaflcat=n3
3	est	sum	AUX	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	aux:pass	_	LASLAVariant=1|LiLaflcat=v6

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 aux:pass	color:blue
1	si	si	SCONJ	T	_	3	mark	_	LASLAVariant=2|LiLaflcat=i
2	ferus	ferus	ADJ	C1	Case=Nom|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Sing	3	xcomp	_	LASLAVariant=2|LiLaflcat=n6
3	uideor	uideo	VERB	B2	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Pass	7	advcl	_	LiLaflcat=v2
4	tibi	tu	PRON	E	Case=Dat|InflClass=LatAnom|Number=Sing|Person=2|PronType=Prs	3	obl	_	LiLaflcat=p
5	et	et	CCONJ	S	_	6	cc	_	LASLAVariant=2|LiLaflcat=i
6	impotens	impotens	ADJ	C5	Case=Nom|Degree=Pos|Gender=Masc|InflClass=IndEurI|Number=Sing	2	conj	_	LiLaflcat=n7
7	parata	paratus	ADJ	C1	Case=Nom|Degree=Pos|Gender=Fem|InflClass=IndEurA|Number=Sing	0	root	_	LASLAVariant=2|LiLaflcat=n6
8	uindicta	uindicta	NOUN	A1	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	7	nsubj:pass	_	LiLaflcat=n1
9	in	in	ADP	R	AdpType=Prep	10	case	_	LiLaflcat=i
10	manu	manus	NOUN	A4	Case=Abl|Gender=Fem|InflClass=IndEurU|Number=Sing	7	obl	_	LASLAVariant=1|LiLaflcat=n4
11	est	sum	AUX	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux:pass	_	LASLAVariant=1|LiLaflcat=v6
12	dic	dico	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	7	conj	_	LASLAVariant=2|LiLaflcat=v3
13	uera	uerum	NOUN	A2	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Plur	12	obj	_	LASLAVariant=1|LiLaflcat=n2
14	quis	quis	PRON	K	Case=Nom|Gender=Fem,Masc|InflClass=LatPron|Number=Sing|PronType=Int	12	conj	_	LiLaflcat=p
15	nam	nam	ADV	M	_	14	advmod	_	LiLaflcat=i

~~~


