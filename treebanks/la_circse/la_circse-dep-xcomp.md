---
layout: base
title:  'Statistics of xcomp in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `xcomp`

This relation is universal.
There are 1 language-specific subtypes of `xcomp`: <tt><a href="la_circse-dep-xcomp-relcl.html">xcomp:relcl</a></tt>.

292 nodes (1%) are attached to their parents as `xcomp`.

172 instances of `xcomp` (59%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.14041095890411.

The following 8 pairs of parts of speech are connected with `xcomp`: <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (191; 65% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (46; 16% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (35; 12% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (12; 4% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="la_circse-pos-ADV.html">ADV</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 xcomp	color:blue
1	amplectere	amplector	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	LiLaflcat=v3
2	ipsum	ipse	DET	I	Case=Acc|Gender=Masc,Neut|InflClass=LatPron|Number=Sing|PronType=Dem	1	det	_	LiLaflcat=p
3	potius	potius	ADV	M	Degree=Cmp	1	advmod	_	LiLaflcat=i
4	et	et	CCONJ	S	_	8	cc	_	LASLAVariant=2|LiLaflcat=i
5	blanda	blandus	ADJ	C1	Case=Abl|Degree=Pos|Gender=Fem|InflClass=IndEurA|Number=Sing	6	amod	_	LiLaflcat=n6
6	prece	prex	NOUN	A3	Case=Abl|Gender=Fem|InflClass=IndEurX|Number=Sing	7	obl	_	LiLaflcat=n3
7	lenire	lenio	VERB	B4	Aspect=Imp|InflClass=LatI|InflClass[nominal]=Ind|VerbForm=Inf|Voice=Act	8	xcomp	_	LiLaflcat=v4
8	tempta	tento	VERB	B1	Aspect=Imp|InflClass=LatA|Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	LiLaflcat=v1

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 xcomp	color:blue
1	secura	securus	ADJ	C1	Case=Nom|Degree=Pos|Gender=Fem|InflClass=IndEurA|Number=Sing	2	xcomp	_	LiLaflcat=n6
2	uiue	uiuo	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v3

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 xcomp	color:blue
1	ea	is	PRON	I	Case=Nom|Gender=Fem|InflClass=LatPron|Number=Sing|Person=3|PronType=Prs	0	root	_	LiLaflcat=p
2	est	sum	AUX	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	LASLAVariant=1|LiLaflcat=v6|TraditionalMood=Indicativus|TraditionalTense=Praesens
3	in	in	ADP	R	_	4	case	_	LiLaflcat=i
4	re	res	NOUN	A5	Case=Abl|Gender=Fem|InflClass=IndEurE|Number=Sing	6	nmod	_	LiLaflcat=n5
5	praua	prauus	ADJ	C1	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Sing	4	amod	_	LiLaflcat=n6
6	peruicacia	peruicacia	NOUN	A1	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	1	nsubj	_	LiLaflcat=n1
7	ipsi	ipse	DET	I	Case=Nom|Form=Emp|Gender=Masc|InflClass=LatPron|Number=Plur|PronType=Dem	9	nsubj	_	LiLaflcat=p
8	fidem	fides	NOUN	A5	Case=Acc|Gender=Fem|InflClass=IndEurE|Number=Sing	9	xcomp	_	LASLAVariant=2|LiLaflcat=n5
9	uocant	uoco	VERB	B1	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	LiLaflcat=v1|TraditionalMood=Indicativus|TraditionalTense=Praesens

~~~


