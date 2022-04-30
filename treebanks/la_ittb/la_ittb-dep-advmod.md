---
layout: base
title:  'Statistics of advmod in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `advmod`

This relation is universal.
There are 2 language-specific subtypes of `advmod`: <tt><a href="la_ittb-dep-advmod-emph.html">advmod:emph</a></tt>, <tt><a href="la_ittb-dep-advmod-neg.html">advmod:neg</a></tt>.

22705 nodes (5%) are attached to their parents as `advmod`.

18938 instances of `advmod` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.75525214710416.

The following 15 pairs of parts of speech are connected with `advmod`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (15871; 70% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (2179; 10% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (2002; 9% instances), <tt><a href="la_ittb-pos-AUX.html">AUX</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (1856; 8% instances), <tt><a href="la_ittb-pos-DET.html">DET</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (337; 1% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (144; 1% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (111; 0% instances), <tt><a href="la_ittb-pos-NUM.html">NUM</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (91; 0% instances), <tt><a href="la_ittb-pos-ADV.html">ADV</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (62; 0% instances), <tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (46; 0% instances), <tt><a href="la_ittb-pos-AUX.html">AUX</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="la_ittb-pos-DET.html">DET</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="la_ittb-pos-NUM.html">NUM</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="la_ittb-pos-PART.html">PART</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 advmod	color:blue
1	oportet	oportet	VERB	K3|modA|tem1|gen6	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	igitur	igitur	ADV	O4	_	1	advmod	_	_
3	ultimum	ultimus	ADJ	B1|grn3|casD|gen1	Case=Acc|Degree=Abs|Gender=Masc|InflClass=IndEurO|Number=Sing	4	amod	_	_
4	finem	finis	NOUN	C1|grn1|casD|gen1	Case=Acc|Gender=Masc|InflClass=IndEurI|Number=Sing	7	nsubj	_	_
5	uniuersi	uniuersus	ADJ	B1|grn1|casB|gen1	Case=Gen|Gender=Masc|InflClass=IndEurO|Number=Sing	4	nmod	_	_
6	esse	sum	AUX	N3|modH|tem1	InflClass=LatAnom|InflClass[nominal]=Ind|VerbForm=Inf	7	cop	_	_
7	bonum	bonum	NOUN	B1|grn1|casD|gen3	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Sing	1	csubj	_	_
8	intellectus	intellectus	NOUN	D1|grn1|casB|gen1	Case=Gen|Gender=Masc|InflClass=IndEurU|Number=Sing	7	nmod	_	SpaceAfter=No
9	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 advmod	color:blue
1	finis	finis	NOUN	C1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurI|Number=Sing	4	nsubj	_	_
2	enim	enim	ADV	O4	_	4	advmod	_	_
3	est	sum	AUX	N3|modA|tem1|gen6	InflClass=LatAnom|Number=Sing|VerbForm=Fin	4	cop	_	_
4	bonum	bonum	NOUN	B1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	0	root	_	_
5	uniuscuiusque	unusquisque	DET	F1|grn1|casB|gen3|vgr1	Case=Gen|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Ind	4	nmod	_	SpaceAfter=No
6	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 advmod	color:blue
1	adhuc	adhuc	ADV	O4	_	6	advmod	_	_
2	ex	ex	ADP	S4|vgr2	AdpType=Prep	4	case	_	_
3	intellectuum	intellectus	NOUN	D1|grn1|casK|gen1	Case=Gen|Gender=Masc|InflClass=IndEurU|Number=Plur	4	nmod	_	_
4	gradibus	gradus	NOUN	D1|grn1|casO|gen1	Case=Abl|Gender=Masc|InflClass=IndEurU|Number=Plur	8	obl	_	_
5	idem	idem	DET	F1|grn1|casD|gen3|vgr1	Case=Acc|Form=Emp|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	8	obj	_	_
6	facile	facilis	ADJ	C1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=IndEurI|Number=Sing	0	root	_	_
7	est	sum	AUX	N3|modA|tem1|gen6	InflClass=LatAnom|Number=Sing|VerbForm=Fin	6	cop	_	_
8	uidere	uideo	VERB	K3|modH|tem1|vgr1	Aspect=Imp|Case=Nom|Gender=Neut|InflClass=LatE|InflClass[nominal]=Ind|Number=Sing|VerbForm=Inf|Voice=Act	6	csubj	_	SpaceAfter=No
9	.	.	PUNCT	Punc	_	6	punct	_	_

~~~


