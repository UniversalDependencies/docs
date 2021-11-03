---
layout: base
title:  'Statistics of xcomp:pred in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `xcomp:pred`

This relation is a language-specific subtype of <tt><a href="la_ittb-dep-xcomp.html">xcomp</a></tt>.

796 nodes (0%) are attached to their parents as `xcomp:pred`.

408 instances of `xcomp:pred` (51%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.00879396984925.

The following 11 pairs of parts of speech are connected with `xcomp:pred`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (261; 33% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (240; 30% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (199; 25% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-AUX.html">AUX</a></tt> (24; 3% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-DET.html">DET</a></tt> (23; 3% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt> (20; 3% instances), <tt><a href="la_ittb-pos-AUX.html">AUX</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (16; 2% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-PRON.html">PRON</a></tt> (9; 1% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="la_ittb-pos-AUX.html">AUX</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="la_ittb-pos-PART.html">PART</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 xcomp:pred	color:blue
1	moyses	moyses	PROPN	C1|grn1|casA|gen1|vgr1	Case=Nom|Gender=Masc|InflClass=IndEurI|Number=Sing	6	nsubj:pass	_	_
2	autem	autem	CCONJ	O4	_	6	cc	_	_
3	non	non	PART	O4	Polarity=Neg	4	advmod:neg	_	_
4	eadem	idem	DET	F1|grn1|casF|gen2	Case=Abl|Form=Emp|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Dem	5	det	_	_
5	ratione	ratio	NOUN	C1|grn1|casF|gen2|comH|vgr1	Case=Abl|Gender=Fem|InflClass=IndEurX|Number=Sing	6	obl	_	_
6	dicitur	dico	VERB	N3|modJ|tem1|gen6	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
7	filius	filius	NOUN	B1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	6	xcomp:pred	_	_
8	qua	qui	PRON	F1|grn1|casF|gen2|varA	Case=Abl|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Rel	9	acl:relcl	_	_
9	christus	christus	NOUN	B1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	4	advcl	_	SpaceAfter=No
10	.	.	PUNCT	Punc	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 xcomp:pred	color:blue
1	factus	facio	VERB	N2|modM|tem4|grp1|casA|gen1	Aspect=Perf|Case=Nom|Gender=Masc|InflClass=LatI2|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
2	est	sum	AUX	N3|modA|tem1|gen6	InflClass=LatAnom|Number=Sing|VerbForm=Fin	1	aux:pass	_	_
3	obediens	obedio	VERB	M2|modD|tem1|grp1|casA|gen1|vgr1	Aspect=Imp|Case=Nom|Gender=Masc|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	1	xcomp:pred	_	Lilaflcat=LatI
4	usque	usque	ADP	S4	AdpType=Prep	6	case	_	_
5	ad	ad	ADP	S4	AdpType=Prep	4	fixed	_	_
6	mortem	mors	NOUN	C1|grn1|casD|gen2	Case=Acc|Gender=Fem|InflClass=IndEurI|Number=Sing	3	obl	_	SpaceAfter=No
7	,	,	PUNCT	Punc	_	8	punct	_	_
8	mortem	mors	NOUN	C1|grn1|casD|gen2	Case=Acc|Gender=Fem|InflClass=IndEurI|Number=Sing	6	appos	_	_
9	autem	autem	ADV	O4	_	8	cc	_	_
10	crucis	crux	NOUN	C1|grn1|casB|gen2	Case=Gen|Gender=Fem|InflClass=IndEurX|Number=Sing	8	nmod	_	SpaceAfter=No
11	:	:	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 xcomp:pred	color:blue
1	cui	qui	PRON	F1|grn1|casC|gen3	Case=Dat|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	3	obl:arg	_	_
2	non	non	PART	O4	Polarity=Neg	3	advmod:neg	_	_
3	obstat	obsto	VERB	J3|modA|tem1|gen6	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	quod	quod	SCONJ	O4	_	6	mark	_	_
5	uisibilis	uisibilis	ADJ	C1|grn1|casA|gen1|vgr1	Case=Nom|Gender=Masc|InflClass=IndEurI|Number=Sing	6	xcomp:pred	_	_
6	apparuit	appareo	VERB	K3|modA|tem4|gen6	Aspect=Perf|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	csubj	_	SpaceAfter=No
7	:	:	PUNCT	Punc	_	3	punct	_	_

~~~


