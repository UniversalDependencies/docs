---
layout: base
title:  'Statistics of advmod:emph in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `advmod:emph`

This relation is a language-specific subtype of <tt><a href="la_ittb-dep-advmod.html">advmod</a></tt>.
There are also 1 other language-specific subtypes of `advmod`: <tt><a href="la_ittb-dep-advmod-neg.html">advmod:neg</a></tt>.

5482 nodes (1%) are attached to their parents as `advmod:emph`.

4786 instances of `advmod:emph` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.92429770156877.

The following 13 pairs of parts of speech are connected with `advmod:emph`: <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (2028; 37% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (1570; 29% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (689; 13% instances), <tt><a href="la_ittb-pos-ADV.html">ADV</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (330; 6% instances), <tt><a href="la_ittb-pos-DET.html">DET</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (330; 6% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (185; 3% instances), <tt><a href="la_ittb-pos-AUX.html">AUX</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (160; 3% instances), <tt><a href="la_ittb-pos-NUM.html">NUM</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (97; 2% instances), <tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (68; 1% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-DET.html">DET</a></tt> (10; 0% instances), <tt><a href="la_ittb-pos-PART.html">PART</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (7; 0% instances), <tt><a href="la_ittb-pos-ADP.html">ADP</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (5; 0% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-DET.html">DET</a></tt> (3; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 advmod:emph	color:blue
1	huic	hic	DET	F1|grn1|casC|gen2	Case=Dat|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Dem	3	det	_	_
2	etiam	etiam	ADV	O4|vgr1	_	5	advmod:emph	_	_
3	ueritati	ueritas	NOUN	C1|grn1|casC|gen2|vgr1	Case=Dat|Gender=Fem|InflClass=IndEurX|Number=Sing	7	obl:arg	_	_
4	sacra	sacer	ADJ	A1|grn1|casA|gen2	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	5	amod	_	_
5	scriptura	scriptura	NOUN	A1|grn1|casA|gen2	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	7	nsubj	_	_
6	testimonium	testimonium	NOUN	B1|grn1|casD|gen3	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Sing	7	obj	_	_
7	perhibet	perhibeo	VERB	K3|modA|tem1|gen6	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
8	.	.	PUNCT	Punc	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 advmod:emph	color:blue
1	quaedam	quidam	DET	F1|grn1|casJ|gen3|vgr1	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Plur	0	root	_	_
2	uero	uerus	NOUN	B1|grn1|casG|vgr1	Case=Loc|Number=Sing	1	advcl	_	_
3	quae	qui	PRON	F1|grn1|casJ|gen3|vgr1	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Plur|PronType=Rel	8	nsubj	_	_
4	omnino	omnino	ADV	O4	_	8	advmod:emph	_	_
5	uim	uis	NOUN	F1|grn1|casD|gen2|vgr1	Case=Acc|Gender=Fem|InflClass=IndEurI|Number=Sing	8	obj	_	_
6	humanae	humanus	ADJ	A1|grn1|casB|gen2	Case=Gen|Gender=Fem|InflClass=IndEurA|Number=Sing	7	amod	_	_
7	rationis	ratio	NOUN	C1|grn1|casB|gen2|vgr1	Case=Gen|Gender=Fem|InflClass=IndEurX|Number=Sing	5	nmod	_	_
8	excedunt	excedo	VERB	L3|modA|tem1|gen9	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	acl:relcl	_	SpaceAfter=No
9	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 advmod:emph	color:blue
1	in	in	ADP	S4	AdpType=Prep	2	case	_	_
2	tantum	tantum	ADV	O4	_	8	advmod:emph	_	_
3	ut	ut	SCONJ	O4|vgr1	_	8	mark	_	_
4	nec	nec	ADV	O4	_	8	advmod:emph	_	_
5	esse	sum	AUX	N3|modH|tem1	InflClass=LatAnom|InflClass[nominal]=Ind|VerbForm=Inf	6	cop	_	_
6	falsa	falsus	ADJ	A1|grn1|casM|gen3	Case=Acc|Gender=Neut|InflClass=IndEurA|Number=Plur	9	xcomp	_	_
7	sit	sum	AUX	N3|modB|tem1|gen6	InflClass=LatAnom|Number=Sing|VerbForm=Fin	8	cop	_	_
8	possibile	possibilis	ADJ	C1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=IndEurI|Number=Sing	0	root	_	_
9	cogitare	cogito	VERB	J3|modH|tem1	Aspect=Imp|Case=Nom|Gender=Neut|InflClass=LatA|InflClass[nominal]=Ind|Number=Sing|VerbForm=Inf|Voice=Act	8	csubj	_	SpaceAfter=No
10	.	.	PUNCT	Punc	_	8	punct	_	_

~~~


