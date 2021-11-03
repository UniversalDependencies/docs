---
layout: base
title:  'Statistics of nsubj:pass in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="la_ittb-dep-nsubj.html">nsubj</a></tt>.

9180 nodes (2%) are attached to their parents as `nsubj:pass`.

7115 instances of `nsubj:pass` (78%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.91808278867102.

The following 8 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (5693; 62% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-PRON.html">PRON</a></tt> (2243; 24% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-DET.html">DET</a></tt> (710; 8% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (315; 3% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt> (132; 1% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-NUM.html">NUM</a></tt> (82; 1% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-PRON.html">PRON</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nsubj:pass	color:blue
1	quis	qui	DET	F1|grn1|casA|gen1|varA	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Rel	2	det	_	_
2	modus	modus	NOUN	B1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	4	nsubj	_	_
3	sit	sum	AUX	N3|modB|tem1|gen6	InflClass=LatAnom|Number=Sing|VerbForm=Fin	4	cop	_	_
4	possibilis	possibilis	ADJ	C1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurI|Number=Sing	0	root	_	_
5	diuinae	diuinus	ADJ	A1|grn1|casB|gen2	Case=Gen|Gender=Fem|InflClass=IndEurA|Number=Sing	6	amod	_	_
6	ueritatis	ueritas	NOUN	C1|grn1|casB|gen2|vgr1	Case=Gen|Gender=Fem|InflClass=IndEurX|Number=Sing	7	nsubj:pass	_	_
7	manifestandae	manifesto	VERB	J2|modO|grp1|casB|gen2	Aspect=Prosp|Case=Gen|Gender=Fem|InflClass=LatA|InflClass[nominal]=IndEurA|Number=Sing|VerbForm=Gdv|Voice=Pass	2	acl	_	SpaceAfter=No
8	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nsubj:pass	color:blue
1	tum	tum	CCONJ	O4	_	2	cc	_	_
2	etiam	etiam	ADV	O4|vgr1	_	0	root	_	_
3	propter	propter	ADP	S4	AdpType=Prep	4	case	_	_
4	multa	multus	NOUN	B1|grn1|casM|gen3	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Plur	2	conj	_	_
5	quae	qui	PRON	F1|grn1|casJ|gen3|vgr1	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Plur|PronType=Rel	6	nsubj:pass	_	_
6	praeexiguntur	praeexigo	VERB	L3|modJ|tem1|gen9	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	4	acl:relcl	_	SpaceAfter=No
7	,	,	PUNCT	Punc	_	9	punct	_	_
8	ut	ut	SCONJ	O4|vgr1	_	9	mark	_	_
9	dictum	dico	VERB	N2|modM|tem4|grp1|casA|gen3	Aspect=Perf|Case=Nom|Gender=Neut|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	2	conj	_	_
10	est	sum	AUX	N3|modA|tem1|gen6	InflClass=LatAnom|Number=Sing|VerbForm=Fin	9	aux:pass	_	SpaceAfter=No
11	.	.	PUNCT	Punc	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	quidam	quidam	DET	F1|grn1|casJ|gen1	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Plur|PronType=Ind	3	nsubj:pass	_	_
2	uero	uero	ADV	B1|grn1|casG|vgr1	_	3	advmod	_	_
3	impediuntur	impedio	VERB	M3|modJ|tem1|gen9	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	Lilaflcat=LatI
4	necessitate	necessitas	NOUN	C1|grn1|casF|gen2	Case=Abl|Gender=Fem|InflClass=IndEurX|Number=Sing	3	obl	_	_
5	rei	res	NOUN	E1|grn1|casB|gen2	Case=Gen|Gender=Fem|InflClass=IndEurE|Number=Sing	4	nmod	_	_
6	familiaris	familiaris	ADJ	C1|grn1|casB|gen2	Case=Gen|Gender=Fem|InflClass=IndEurI|Number=Sing	5	amod	_	SpaceAfter=No
7	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


