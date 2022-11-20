---
layout: base
title:  'Statistics of advmod:tmod in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `advmod:tmod`

This relation is a language-specific subtype of <tt><a href="la_ittb-dep-advmod.html">advmod</a></tt>.
There are also 3 other language-specific subtypes of `advmod`: <tt><a href="la_ittb-dep-advmod-emph.html">advmod:emph</a></tt>, <tt><a href="la_ittb-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="la_ittb-dep-advmod-neg.html">advmod:neg</a></tt>.

724 nodes (0%) are attached to their parents as `advmod:tmod`.

606 instances of `advmod:tmod` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.20718232044199.

The following 7 pairs of parts of speech are connected with `advmod:tmod`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (527; 73% instances), <tt><a href="la_ittb-pos-AUX.html">AUX</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (117; 16% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (49; 7% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (24; 3% instances), <tt><a href="la_ittb-pos-ADV.html">ADV</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="la_ittb-pos-DET.html">DET</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 advmod:tmod	color:blue
1	nec	nec	CCONJ	O4	_	4	cc	_	_
2	iterum	iterum	ADV	O4	AdvType=Tim	4	advmod:tmod	_	_
3	quae	qui	PRON	F1|grn1|casJ|gen3|vgr1	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Plur|PronType=Rel	4	nsubj:pass	_	_
4	mouentur	moueo	VERB	K3|modJ|tem1|gen9|vgr1	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
5	per	per	ADP	S4	_	6	case	_	_
6	naturam	natura	NOUN	A1|grn1|casD|gen2	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing	4	obl	_	_
7	ut	ut	SCONJ	O4|vgr1	PronType=Rel	8	mark	_	_
8	grauia	grauis	NOUN	C1|grn1|casJ|gen3	Case=Nom|Gender=Neut|InflClass=IndEurI|Number=Plur	4	advcl	_	_
9	et	et	CCONJ	O4	_	10	cc	_	_
10	leuia	leuis	NOUN	C1|grn1|casJ|gen3	Case=Nom|Gender=Neut|InflClass=IndEurI|Number=Plur	8	conj	_	SpaceAfter=No
11	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 advmod:tmod	color:blue
1	quia	quia	SCONJ	O4	_	4	mark	_	_
2	non	non	PART	O4	Polarity=Neg	3	advmod:neg	_	_
3	semper	semper	ADV	O4	AdvType=Tim	4	advmod:tmod	_	_
4	est	sum	AUX	N3|modA|tem1|gen6	InflClass=LatAnom|Number=Sing|VerbForm=Fin	0	root	_	SpaceAfter=No
5	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 advmod:tmod	color:blue
1	adhuc	adhuc	ADV	O4	AdvType=Tim	6	advmod:tmod	_	_
2	ex	ex	ADP	S4|vgr2	_	4	case	_	_
3	intellectuum	intellectus	NOUN	D1|grn1|casK|gen1	Case=Gen|Gender=Masc|InflClass=IndEurU|Number=Plur	4	nmod	_	_
4	gradibus	gradus	NOUN	D1|grn1|casO|gen1	Case=Abl|Gender=Masc|InflClass=IndEurU|Number=Plur	8	obl	_	_
5	idem	idem	DET	F1|grn1|casD|gen3|vgr1	Case=Acc|Form=Emp|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	8	obj	_	_
6	facile	facilis	ADJ	C1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=IndEurI|Number=Sing	0	root	_	_
7	est	sum	AUX	N3|modA|tem1|gen6	InflClass=LatAnom|Number=Sing|VerbForm=Fin	6	cop	_	_
8	uidere	uideo	VERB	K3|modH|tem1|vgr1	Aspect=Imp|InflClass=LatE|VerbForm=Vnoun|Voice=Act	6	csubj	_	SpaceAfter=No|TraditionalMood=Infinitivus|TraditionalTense=Praesens
9	.	.	PUNCT	Punc	_	6	punct	_	_

~~~


