---
layout: base
title:  'Statistics of advmod:neg in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `advmod:neg`

This relation is a language-specific subtype of <tt><a href="la_circse-dep-advmod.html">advmod</a></tt>.
There are also 3 other language-specific subtypes of `advmod`: <tt><a href="la_circse-dep-advmod-emph.html">advmod:emph</a></tt>, <tt><a href="la_circse-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="la_circse-dep-advmod-tmod.html">advmod:tmod</a></tt>.

249 nodes (1%) are attached to their parents as `advmod:neg`.

242 instances of `advmod:neg` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.30923694779116.

The following 12 pairs of parts of speech are connected with `advmod:neg`: <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (124; 50% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (61; 24% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (31; 12% instances), <tt><a href="la_circse-pos-ADV.html">ADV</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (12; 5% instances), <tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (7; 3% instances), <tt><a href="la_circse-pos-DET.html">DET</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (5; 2% instances), <tt><a href="la_circse-pos-PRON.html">PRON</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (3; 1% instances), <tt><a href="la_circse-pos-NUM.html">NUM</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (2; 1% instances), <tt><a href="la_circse-pos-AUX.html">AUX</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="la_circse-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 advmod:neg	color:blue
1	non	non	PART	P	Polarity=Neg	2	advmod:neg	_	LiLaflcat=i
2	capit	capio	VERB	B5	Aspect=Imp|InflClass=LatI2|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LASLAVariant=2|LiLaflcat=v5
3	terra	terra	NOUN	A1	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	2	nsubj	_	LiLaflcat=n1
4	Herculem	hercules	PROPN	A3	Case=Acc|Gender=Masc|InflClass=IndEurI|NameType=Giv|Number=Sing	2	obj	_	LASLAVariant=N|LiLaflcat=n3
5	tandem	tandem	ADV	M	Degree=Pos	8	advmod:tmod	_	LiLaflcat=i
6	que	que	CCONJ	S	_	8	cc	_	LiLaflcat=i
7	superis	superi	NOUN	A2	Case=Dat|Gender=Masc|InflClass=IndEurO|Number=Plur	8	obl:arg	_	LiLaflcat=n2
8	reddit	reddo	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	_	LiLaflcat=v3

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 advmod:neg	color:blue
1	congredi	congredior	VERB	B5	Aspect=Imp|InflClass=LatI2|InflClass[nominal]=Ind|VerbForm=Inf|Voice=Pass	2	csubj	_	LiLaflcat=v5
2	fas	fas	NOUN	A6	Gender=Neut|InflClass=Ind	0	root	_	LiLaflcat=n
3	amplius	ample	ADV	M	Degree=Cmp	1	advmod	_	LiLaflcat=i
4	haut	haud	PART	P	Polarity=Neg	2	advmod:neg	_	LiLaflcat=i
5	est	sum	AUX	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	LASLAVariant=1|LiLaflcat=v6

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 advmod:neg	color:blue
1	non	non	PART	P	Polarity=Neg	5	advmod:neg	_	LiLaflcat=i
2	est	sum	AUX	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	LASLAVariant=1|LiLaflcat=v6
3	ad	ad	ADP	R	AdpType=Prep	4	case	_	LASLAVariant=2|LiLaflcat=i
4	astra	astrum	NOUN	A2	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Plur	5	obl:lmod	_	LiLaflcat=n2
5	mollis	mollis	ADJ	C4	Case=Nom|Degree=Pos|Gender=Fem|InflClass=IndEurI|Number=Sing	0	root	_	LiLaflcat=n7
6	e	ex	ADP	R	AdpType=Prep	7	case	_	LiLaflcat=i
7	terris	terra	NOUN	A1	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Plur	5	obl:lmod	_	LiLaflcat=n1
8	uia	uia	NOUN	A1	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	5	nsubj	_	LiLaflcat=n1

~~~


