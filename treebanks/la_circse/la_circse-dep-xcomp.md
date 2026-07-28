---
layout: base
title:  'Statistics of xcomp in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `xcomp`

This relation is universal.
There are 1 language-specific subtypes of `xcomp`: <tt><a href="la_circse-dep-xcomp-relcl.html">xcomp:relcl</a></tt>.

355 nodes (1%) are attached to their parents as `xcomp`.

201 instances of `xcomp` (57%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.1943661971831.

The following 9 pairs of parts of speech are connected with `xcomp`: <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (253; 71% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (40; 11% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (39; 11% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (12; 3% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="la_circse-pos-ADV.html">ADV</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 xcomp	color:blue
1	remeasse	remeo	VERB	B1	Aspect=Perf|InflClass=LatA|InflClass[nominal]=Ind|VerbForm=Inf|Voice=Act	2	xcomp	_	LiLaflcat=v1
2	laetor	laetor	VERB	B1	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	LiLaflcat=v1
3	uulnus	uulnus	NOUN	A3	Case=Acc|Gender=Neut|InflClass=IndEurX|Number=Sing	7	obj	_	LiLaflcat=n3
4	et	et	CCONJ	S	_	8	cc	_	LASLAVariant=2|LiLaflcat=i
5	regni	regnum	NOUN	A2	Case=Gen|Gender=Neut|InflClass=IndEurO|Number=Sing	3	nmod	_	LiLaflcat=n2
6	graue	grauis	ADJ	C4	Case=Acc|Degree=Pos|Gender=Neut|InflClass=IndEurI|Number=Sing	3	amod	_	LiLaflcat=n7
7	lugere	lugeo	VERB	B2	Aspect=Imp|InflClass=LatE|InflClass[nominal]=Ind|VerbForm=Inf|Voice=Act	8	xcomp	_	LiLaflcat=v2
8	cogor	cogo	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Pass	2	conj	_	LiLaflcat=v3

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 xcomp	color:blue
1	ea	is	PRON	I	Case=Nom|Gender=Fem|InflClass=LatPron|Number=Sing|Person=3|PronType=Prs	0	root	_	LiLaflcat=p|UniqueTokenId=TacGerma-Q-01-149_1
2	est	sum	AUX	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	LASLAVariant=1|LiLaflcat=v6|TraditionalMood=Indicativus|TraditionalTense=Praesens|UniqueTokenId=TacGerma-Q-01-149_2
3	in	in	ADP	R	_	4	case	_	LiLaflcat=i|UniqueTokenId=TacGerma-Q-01-149_3
4	re	res	NOUN	A5	Case=Abl|Gender=Fem|InflClass=IndEurE|Number=Sing	6	nmod	_	LiLaflcat=n5|UniqueTokenId=TacGerma-Q-01-149_4
5	praua	prauus	ADJ	C1	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Sing	4	amod	_	LiLaflcat=n6|UniqueTokenId=TacGerma-Q-01-149_5
6	peruicacia	peruicacia	NOUN	A1	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	1	nsubj	_	LiLaflcat=n1|UniqueTokenId=TacGerma-Q-01-149_6
7	ipsi	ipse	DET	I	Case=Nom|Form=Emp|Gender=Masc|InflClass=LatPron|Number=Plur|PronType=Dem	9	nsubj	_	LiLaflcat=p|UniqueTokenId=TacGerma-Q-01-149_7
8	fidem	fides	NOUN	A5	Case=Acc|Gender=Fem|InflClass=IndEurE|Number=Sing	9	xcomp	_	LASLAVariant=2|LiLaflcat=n5|UniqueTokenId=TacGerma-Q-01-149_8
9	uocant	uoco	VERB	B1	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	LiLaflcat=v1|TraditionalMood=Indicativus|TraditionalTense=Praesens|UniqueTokenId=TacGerma-Q-01-149_9

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 xcomp	color:blue
1	hoc	hic	DET	I	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	2	nsubj	_	_
2	leue	leuis	ADJ	C4	Case=Nom|Degree=Pos|Gender=Neut|InflClass=IndEurI|Number=Sing	0	root	_	_
3	est	sum	AUX	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
4	quod	quod	SCONJ	T	_	6	mark	_	_
5	sum	sum	AUX	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	6	cop	_	_
6	nocens	nocens	ADJ	C5	Case=Nom|Degree=Pos|Gender=Fem,Masc,Neut|InflClass=IndEurI|Number=Sing	2	advcl	_	_
7	feci	facio	VERB	B5	Aspect=Perf|InflClass=LatI2|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	_
8	nocentes	nocens	ADJ	C5	Case=Acc|Degree=Pos|Gender=Fem,Masc|InflClass=IndEurI|Number=Plur	7	xcomp	_	_

~~~


