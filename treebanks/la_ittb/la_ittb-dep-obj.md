---
layout: base
title:  'Statistics of obj in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `obj`

This relation is universal.

11904 nodes (3%) are attached to their parents as `obj`.

6339 instances of `obj` (53%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.9197748655914.

The following 11 pairs of parts of speech are connected with `obj`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (7609; 64% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-PRON.html">PRON</a></tt> (2560; 22% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-DET.html">DET</a></tt> (1078; 9% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (475; 4% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt> (167; 1% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-NUM.html">NUM</a></tt> (5; 0% instances), <tt><a href="la_ittb-pos-AUX.html">AUX</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="la_ittb-pos-DET.html">DET</a></tt>-<tt><a href="la_ittb-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 obj	color:blue
1	cum	cum	SCONJ	S4|vgr1	PronType=Rel	2	mark	_	_
2	sint	sum	AUX	N3|modB|tem1|gen9	InflClass=LatAnom|Number=Plur|VerbForm=Fin	0	root	_	_
3	effectus	effectus	NOUN	D1|grn1|casJ|gen1	Case=Nom|Gender=Masc|InflClass=IndEurU|Number=Plur	2	nsubj	_	_
4	causae	causa	NOUN	A1|grn1|casB|gen2|vgr1	Case=Gen|Gender=Fem|InflClass=IndEurA|Number=Sing	5	nmod	_	_
5	uirtutem	uirtus	NOUN	C1|grn1|casD|gen2|vgr1	Case=Acc|Gender=Fem|InflClass=IndEurX|Number=Sing	7	obj	_	_
6	non	non	PART	O4	Polarity=Neg	7	advmod:neg	_	_
7	aequantes	aequo	VERB	J2|modD|tem1|grp1|casJ|gen1	Aspect=Imp|Case=Nom|Gender=Masc|InflClass=LatA|InflClass[nominal]=IndEurI|Number=Plur|VerbForm=Part|Voice=Act	3	acl	_	SpaceAfter=No|TraditionalMood=Participium|TraditionalTense=Praesens
8	.	.	PUNCT	Punc	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 obj	color:blue
1	est	sum	AUX	N3|modA|tem1|gen6	InflClass=LatAnom|Number=Sing|VerbForm=Fin	0	root	_	_
2	autem	autem	PART	O4	_	1	discourse	_	_
3	in	in	ADP	S4	_	4	case	_	_
4	his	hic	DET	F1|grn1|casO|gen3|vgr1	Case=Abl|Gender=Neut|InflClass=LatPron|Number=Plur|PronType=Dem	1	obl	_	_
5	quae	qui	PRON	F1|grn1|casM|gen3|vgr1	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Plur|PronType=Rel	8	obj	_	_
6	de	de	ADP	S4	_	7	case	_	_
7	deo	deus	PROPN	F1|grn1|casF|gen1	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Sing	8	obl	_	_
8	confitemur	confiteor	VERB	K3|modJ|tem1|gen7	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Pass	4	acl:relcl	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
9	duplex	duplex	ADJ	C1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurI|Number=Sing	11	amod	_	_
10	ueritatis	ueritas	NOUN	C1|grn1|casB|gen2|vgr1	Case=Gen|Gender=Fem|InflClass=IndEurX|Number=Sing	11	nmod	_	_
11	modus	modus	NOUN	B1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	1	nsubj	_	SpaceAfter=No
12	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obj	color:blue
1	hi	hic	DET	F1|grn1|casJ|gen1|vgr1	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Plur|PronType=Dem	4	nsubj	_	_
2	uero	uero	ADV	B1|grn1|casG|vgr1	_	4	discourse	_	_
3	neutrum	neuter	DET	F1|grn1|casD|gen3	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|Polarity=Neg|PronType=Con	4	obj	_	_
4	recipiunt	recipio	VERB	L3|modA|tem1|gen9	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
5	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


