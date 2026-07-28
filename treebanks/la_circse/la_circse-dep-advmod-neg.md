---
layout: base
title:  'Statistics of advmod:neg in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `advmod:neg`

This relation is a language-specific subtype of <tt><a href="la_circse-dep-advmod.html">advmod</a></tt>.
There are also 3 other language-specific subtypes of `advmod`: <tt><a href="la_circse-dep-advmod-emph.html">advmod:emph</a></tt>, <tt><a href="la_circse-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="la_circse-dep-advmod-tmod.html">advmod:tmod</a></tt>.

296 nodes (1%) are attached to their parents as `advmod:neg`.

288 instances of `advmod:neg` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.23986486486486.

The following 12 pairs of parts of speech are connected with `advmod:neg`: <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (153; 52% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (67; 23% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (39; 13% instances), <tt><a href="la_circse-pos-ADV.html">ADV</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (14; 5% instances), <tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (7; 2% instances), <tt><a href="la_circse-pos-DET.html">DET</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (6; 2% instances), <tt><a href="la_circse-pos-PRON.html">PRON</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (4; 1% instances), <tt><a href="la_circse-pos-NUM.html">NUM</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (2; 1% instances), <tt><a href="la_circse-pos-AUX.html">AUX</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="la_circse-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 advmod:neg	color:blue
1	quid	quis	PRON	K	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Int	2	obj	_	_
2	optem	opto	VERB	B1	Aspect=Imp|InflClass=LatA|Mood=Sub|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	quid	quis	PRON	K	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Int	5	obj	_	_
4	ue	ue	CCONJ	S	_	3	cc	_	_
5	decernam	decerno	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Sub|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	7	ccomp:relcl	_	_
6	haut	haud	PART	P	Polarity=Neg	7	advmod:neg	_	_
7	scio	scio	VERB	B4	Aspect=Imp|InflClass=LatI|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	2	orphan	_	_

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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 advmod:neg	color:blue
1	scelere	scelus	NOUN	A3	Case=Abl|Gender=Neut|InflClass=IndEurX|Number=Sing	2	obl:agent	_	_
2	defungi	defungor	VERB	B3	Aspect=Imp|InflClass=LatX|InflClass[nominal]=Ind|VerbForm=Inf|Voice=Pass	9	xcomp	_	_
3	haut	haud	PART	P	Polarity=Neg	4	advmod:neg	_	_
4	leui	leuis	ADJ	C4	Case=Abl|Degree=Pos|Gender=Neut|InflClass=IndEurI|Number=Sing	1	amod	_	_
5	haut	haud	PART	P	Polarity=Neg	6	advmod:neg	_	_
6	usitato	usitatus	ADJ	C1	Case=Abl|Degree=Pos|Gender=Neut|InflClass=IndEurO|Number=Sing	4	conj	_	_
7	tanta	tantus	DET	I	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing|PronType=Dem	8	det	_	_
8	nobilitas	nobilitas	NOUN	A3	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	9	nsubj	_	_
9	potest	possum	VERB	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_

~~~


