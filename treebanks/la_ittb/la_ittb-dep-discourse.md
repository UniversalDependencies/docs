---
layout: base
title:  'Statistics of discourse in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `discourse`

This relation is universal.

11204 nodes (2%) are attached to their parents as `discourse`.

9254 instances of `discourse` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.88039985719386.

The following 19 pairs of parts of speech are connected with `discourse`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-PART.html">PART</a></tt> (6401; 57% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-PART.html">PART</a></tt> (1129; 10% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (1097; 10% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-PART.html">PART</a></tt> (1004; 9% instances), <tt><a href="la_ittb-pos-AUX.html">AUX</a></tt>-<tt><a href="la_ittb-pos-PART.html">PART</a></tt> (816; 7% instances), <tt><a href="la_ittb-pos-DET.html">DET</a></tt>-<tt><a href="la_ittb-pos-PART.html">PART</a></tt> (198; 2% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (159; 1% instances), <tt><a href="la_ittb-pos-AUX.html">AUX</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (116; 1% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (109; 1% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-PART.html">PART</a></tt> (47; 0% instances), <tt><a href="la_ittb-pos-DET.html">DET</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (29; 0% instances), <tt><a href="la_ittb-pos-PART.html">PART</a></tt>-<tt><a href="la_ittb-pos-PART.html">PART</a></tt> (27; 0% instances), <tt><a href="la_ittb-pos-ADV.html">ADV</a></tt>-<tt><a href="la_ittb-pos-PART.html">PART</a></tt> (26; 0% instances), <tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_ittb-pos-PART.html">PART</a></tt> (25; 0% instances), <tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (12; 0% instances), <tt><a href="la_ittb-pos-NUM.html">NUM</a></tt>-<tt><a href="la_ittb-pos-PART.html">PART</a></tt> (3; 0% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="la_ittb-pos-NUM.html">NUM</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="la_ittb-pos-ADV.html">ADV</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 discourse	color:blue
1	quod	qui	PRON	F1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	7	nsubj	_	_
2	quidem	quidem	PART	O4	_	7	discourse	_	_
3	nobis	nos	PRON	F1|grn1|casL|gen1	Case=Dat|InflClass=LatAnom|Number=Plur|PronType=Prs	7	obl:arg	_	_
4	circa	circa	ADP	S4	_	5	case	_	_
5	deum	deus	PROPN	F1|grn1|casD|gen1	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Sing	7	obl	_	_
6	non	non	PART	O4	Polarity=Neg	7	advmod:neg	_	_
7	accidit	accido	VERB	L3|modA|tem1|gen6	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	cado=null|SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
8	.	.	PUNCT	Punc	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 discourse	color:blue
1	finis	finis	NOUN	C1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurI|Number=Sing	4	nsubj	_	_
2	enim	enim	PART	O4	_	4	discourse	_	_
3	est	sum	AUX	N3|modA|tem1|gen6	InflClass=LatAnom|Number=Sing|VerbForm=Fin	4	cop	_	_
4	bonum	bonum	NOUN	B1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	0	root	_	_
5	uniuscuiusque	unusquisque	DET	F1|grn1|casB|gen3|vgr1	Case=Gen|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Ind	4	nmod	_	SpaceAfter=No
6	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 discourse	color:blue
1	hi	hic	DET	F1|grn1|casJ|gen1|vgr1	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Plur|PronType=Dem	4	nsubj	_	_
2	uero	uero	ADV	B1|grn1|casG|vgr1	_	4	discourse	_	_
3	neutrum	neuter	DET	F1|grn1|casD|gen3	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|Polarity=Neg|PronType=Con	4	obj	_	_
4	recipiunt	recipio	VERB	L3|modA|tem1|gen9	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
5	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


