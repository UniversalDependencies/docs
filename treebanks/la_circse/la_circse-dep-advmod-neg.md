---
layout: base
title:  'Statistics of advmod:neg in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `advmod:neg`

This relation is a language-specific subtype of <tt><a href="la_circse-dep-advmod.html">advmod</a></tt>.
There are also 3 other language-specific subtypes of `advmod`: <tt><a href="la_circse-dep-advmod-emph.html">advmod:emph</a></tt>, <tt><a href="la_circse-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="la_circse-dep-advmod-tmod.html">advmod:tmod</a></tt>.

193 nodes (1%) are attached to their parents as `advmod:neg`.

190 instances of `advmod:neg` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.2020725388601.

The following 12 pairs of parts of speech are connected with `advmod:neg`: <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (94; 49% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (50; 26% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (24; 12% instances), <tt><a href="la_circse-pos-ADV.html">ADV</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (7; 4% instances), <tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (6; 3% instances), <tt><a href="la_circse-pos-DET.html">DET</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (5; 3% instances), <tt><a href="la_circse-pos-AUX.html">AUX</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (2; 1% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="la_circse-pos-NUM.html">NUM</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="la_circse-pos-PRON.html">PRON</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="la_circse-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod:neg	color:blue
1	sed	sed	CCONJ	S	_	3	cc	_	LiLaflcat=i
2	non	non	PART	P	Polarity=Neg	3	advmod:neg	_	LiLaflcat=i
3	tenebit	teneo	VERB	B2	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v2

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod:neg	color:blue
1	quaeritur	quaero	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	LiLaflcat=v3
2	belli	bellum	NOUN	A2	Case=Gen|Gender=Neut|InflClass=IndEurO|Number=Sing	3	nmod	_	LiLaflcat=n2
3	exitus	exitus	NOUN	A4	Case=Nom|Gender=Masc|InflClass=IndEurU|Number=Sing	1	nsubj	_	LiLaflcat=n4
4	non	non	PART	P	Polarity=Neg	5	advmod:neg	_	LiLaflcat=i
5	causa	causa	NOUN	A1	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	3	conj	_	LiLaflcat=n1

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


