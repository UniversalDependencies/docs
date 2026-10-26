---
layout: base
title:  'Statistics of advmod in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `advmod`

This relation is universal.
There are 4 language-specific subtypes of `advmod`: <tt><a href="la_circse-dep-advmod-emph.html">advmod:emph</a></tt>, <tt><a href="la_circse-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="la_circse-dep-advmod-neg.html">advmod:neg</a></tt>, <tt><a href="la_circse-dep-advmod-tmod.html">advmod:tmod</a></tt>.

671 nodes (2%) are attached to their parents as `advmod`.

571 instances of `advmod` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.43219076005961.

The following 12 pairs of parts of speech are connected with `advmod`: <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-ADV.html">ADV</a></tt> (505; 75% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-ADV.html">ADV</a></tt> (90; 13% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-ADV.html">ADV</a></tt> (32; 5% instances), <tt><a href="la_circse-pos-ADV.html">ADV</a></tt>-<tt><a href="la_circse-pos-ADV.html">ADV</a></tt> (23; 3% instances), <tt><a href="la_circse-pos-DET.html">DET</a></tt>-<tt><a href="la_circse-pos-ADV.html">ADV</a></tt> (5; 1% instances), <tt><a href="la_circse-pos-PRON.html">PRON</a></tt>-<tt><a href="la_circse-pos-ADV.html">ADV</a></tt> (4; 1% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (4; 1% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_circse-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 advmod	color:blue
1	utrumne	utrumne	ADV	O	PronType=Int	2	advmod	_	LiLaflcat=i
2	doleam	doleo	VERB	B2	Aspect=Imp|InflClass=LatE|Mood=Sub|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v2
3	laeter	laetor	VERB	B1	Aspect=Imp|InflClass=LatA|Mood=Sub|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Pass	2	conj	_	LiLaflcat=v1
4	an	an	PART	O	PartType=Int|Polarity=Neg	3	cc	_	LiLaflcat=i
5	reducem	redux	ADJ	C5	Case=Acc|Degree=Pos|Gender=Masc|InflClass=IndEurI|Number=Sing	6	amod	_	LiLaflcat=n7
6	uirum	uir	NOUN	A2	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Sing	2	obj	_	LiLaflcat=n2

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod	color:blue
1	cernere	cerno	VERB	B3	Aspect=Imp|InflClass=LatX|InflClass[nominal]=Ind|VerbForm=Inf|Voice=Act	3	xcomp	_	LiLaflcat=v3
2	hoc	hic	DET	I	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	1	obj	_	LASLAVariant=1|LiLaflcat=p
3	audes	audeo	VERB	B2	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v2
4	nimis	nimis	ADV	M	Degree=Pos	5	advmod	_	LiLaflcat=i
5	uiuax	uiuax	ADJ	C5	Case=Voc|Degree=Pos|Gender=Fem|InflClass=IndEurI|Number=Sing	6	amod	_	LiLaflcat=n7
6	senectus	senectus	NOUN	A3	Case=Voc|Gender=Fem|InflClass=IndEurX|Number=Sing	3	vocative	_	LASLAVariant=1|LiLaflcat=n3

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 advmod	color:blue
1	quid	quis	ADV	K	PronType=Int	4	advmod	_	LASLAVariant=1|LiLaflcat=p
2	illa	ille	DET	I	Case=Nom|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Dem	4	det	_	LiLaflcat=p
3	felix	felix	ADJ	C5	Case=Nom|Degree=Pos|Gender=Fem|InflClass=IndEurI|Number=Sing	4	amod	_	LiLaflcat=n7
4	turba	turba	NOUN	A1	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	0	root	_	LiLaflcat=n1
5	fraterni	fraternus	ADJ	C1	Case=Gen|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Sing	6	amod	_	LiLaflcat=n6
6	gregis	grex	NOUN	A3	Case=Gen|Gender=Masc|InflClass=IndEurX|Number=Sing	4	nmod	_	LiLaflcat=n3

~~~


