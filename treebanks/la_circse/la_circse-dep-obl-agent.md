---
layout: base
title:  'Statistics of obl:agent in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="la_circse-dep-obl.html">obl</a></tt>.
There are also 4 other language-specific subtypes of `obl`: <tt><a href="la_circse-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="la_circse-dep-obl-cmp.html">obl:cmp</a></tt>, <tt><a href="la_circse-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="la_circse-dep-obl-tmod.html">obl:tmod</a></tt>.

125 nodes (1%) are attached to their parents as `obl:agent`.

63 instances of `obl:agent` (50%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.616.

The following 8 pairs of parts of speech are connected with `obl:agent`: <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (97; 78% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt> (12; 10% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-PRON.html">PRON</a></tt> (5; 4% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-DET.html">DET</a></tt> (3; 2% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obl:agent	color:blue
1	nati	natus	NOUN	A2	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Plur	5	nsubj	_	LASLAVariant=1|LiLaflcat=n2
2	cruenta	cruentus	ADJ	C1	Case=Abl|Degree=Pos|Gender=Fem|InflClass=IndEurA|Number=Sing	3	amod	_	LiLaflcat=n6
3	caede	caedes	NOUN	A3	Case=Abl|Gender=Fem|InflClass=IndEurX|Number=Sing	4	obl:agent	_	LiLaflcat=n3
4	confecti	conficio	VERB	B5	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Masc|InflClass=LatI2|InflClass[nominal]=IndEurO|Number=Plur|VerbForm=Part|Voice=Pass	5	advcl:pred	_	LiLaflcat=v5
5	iacent	iaceo	VERB	B2	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v2
6	perempta	perimo	VERB	Y3	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Fem|InflClass=LatX|InflClass[nominal]=IndEurA|Number=Sing|VerbForm=Part|Voice=Pass	7	advcl:pred	_	LiLaflcat=v3|Tac=est
7	coniunx	coniux	NOUN	A3	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	5	conj	_	LiLaflcat=n3

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 obl:agent	color:blue
1	num	num	PART	O	Polarity=Neg	2	discourse	_	LiLaflcat=i
2	audita	audio	VERB	Y4	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Fem|InflClass=LatI|InflClass[nominal]=IndEurA|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	LiLaflcat=v4
3	causa	causa	NOUN	A1	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	2	nsubj:pass	_	LiLaflcat=n1
4	est	sum	AUX	Z4	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	aux:pass	_	LASLAVariant=2|LiLaflcat=v6
5	nostra	noster	DET	F	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing|Number[psor]=Plur|Person[psor]=1|Poss=Yes|PronType=Prs	3	det	_	LiLaflcat=n6
6	Tiresiae	tiresia	PROPN	A1	Case=Dat|Gender=Fem|InflClass=IndEurA|NameType=Giv|Number=Sing	2	obl:agent	_	LASLAVariant=N|LiLaflcat=n1

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 obl:agent	color:blue
1	huic	hic	DET	I	Case=Dat|Gender=Fem,Masc,Neut|InflClass=LatPron|Number=Sing|PronType=Dem	5	obl:arg	_	LASLAVariant=1|LiLaflcat=p
2	aliquis	aliquis	PRON	L	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Ind	7	det	_	LiLaflcat=p
3	a	ab	ADP	R	AdpType=Prep	4	case	_	LiLaflcat=i
4	te	tu	PRON	E	Case=Abl|InflClass=LatAnom|Number=Sing|Person=2|PronType=Prs	5	obl:agent	_	LiLaflcat=p
5	traditur	trado	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	LiLaflcat=v3
6	quondam	quondam	ADV	M	Degree=Pos	5	advmod:tmod	_	LiLaflcat=i
7	puer	puer	NOUN	A2	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	5	nsubj	_	LiLaflcat=n2

~~~


