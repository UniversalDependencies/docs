---
layout: base
title:  'Statistics of nsubj:pass in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="la_circse-dep-nsubj.html">nsubj</a></tt>.

307 nodes (1%) are attached to their parents as `nsubj:pass`.

168 instances of `nsubj:pass` (55%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.43973941368078.

The following 8 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (261; 85% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt> (16; 5% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-DET.html">DET</a></tt> (11; 4% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-PRON.html">PRON</a></tt> (11; 4% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nsubj:pass	color:blue
1	perdenda	perdo	VERB	B3	Aspect=Prosp|Case=Nom|Degree=Pos|Gender=Fem|InflClass=LatX|InflClass[nominal]=IndEurA|Number=Sing|VerbForm=Gdv|Voice=Pass	0	root	_	LiLaflcat=v3
2	mors	mors	NOUN	A3	Case=Nom|Gender=Fem|InflClass=IndEurI|Number=Sing	1	nsubj:pass	_	LiLaflcat=n3
3	est	sum	AUX	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	aux:pass	_	LASLAVariant=1|LiLaflcat=v6

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:pass	color:blue
1	Phocide	phocis	PROPN	A3	Case=Abl|Gender=Fem|InflClass=IndEurI|NameType=Geo|Number=Sing	2	nsubj:pass	_	LASLAVariant=N|LiLaflcat=n3
2	relicta	relinquo	VERB	B3	Aspect=Perf|Case=Abl|Degree=Pos|Gender=Fem|InflClass=LatX|InflClass[nominal]=IndEurA|Number=Sing|VerbForm=Part|Voice=Pass	7	advcl:abs	_	LiLaflcat=v3
3	Strophius	strophius	PROPN	A2	Case=Nom|Gender=Masc|InflClass=IndEurO|NameType=Giv|Number=Sing	7	nsubj	_	LASLAVariant=N|LiLaflcat=n2
4	Elea	eleus	ADJ	C1	Case=Abl|Degree=Pos|Gender=Fem|InflClass=IndEurA|NameType=Geo|Number=Sing	6	amod	_	LASLAVariant=A|LiLaflcat=n6
5	inclutus	inclutus	ADJ	C1	Case=Nom|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Sing	7	advcl:pred	_	LiLaflcat=n6
6	palma	palma	NOUN	A1	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Sing	5	obl	_	LiLaflcat=n1
7	reuertor	reuertor	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	LiLaflcat=v3

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:pass	color:blue
1	quicquid	quisquis	DET	J	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	2	nsubj:pass	_	_
2	exactum	exigo	VERB	Y3	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Neut|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	6	ccomp	_	_
3	est	sum	AUX	Z3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	aux:pass	_	_
4	adhuc	adhuc	ADV	M	Degree=Pos	6	advmod:tmod	_	_
5	matri	mater	NOUN	A3	Case=Dat|Gender=Fem|InflClass=IndEurX|Number=Sing	6	obl:arg	_	_
6	dedisti	do	VERB	B1	Aspect=Perf|InflClass=LatA|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_

~~~


