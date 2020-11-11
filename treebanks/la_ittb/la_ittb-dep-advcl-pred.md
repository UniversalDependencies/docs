---
layout: base
title:  'Statistics of advcl:pred in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `advcl:pred`

This relation is a language-specific subtype of <tt><a href="la_ittb-dep-advcl.html">advcl</a></tt>.
There are also 3 other language-specific subtypes of `advcl`: <tt><a href="la_ittb-dep-advcl-appos.html">advcl:appos</a></tt>, <tt><a href="la_ittb-dep-advcl-arg.html">advcl:arg</a></tt>, <tt><a href="la_ittb-dep-advcl-cmpr.html">advcl:cmpr</a></tt>.

125 nodes (0%) are attached to their parents as `advcl:pred`.

91 instances of `advcl:pred` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.504.

The following 6 pairs of parts of speech are connected with `advcl:pred`: <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (76; 61% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (27; 22% instances), <tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (16; 13% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (4; 3% instances), <tt><a href="la_ittb-pos-NUM.html">NUM</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 advcl:pred	color:blue
1	haec	hic	PRON	F1|grn1|casA|gen2|vgr1	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	0	root	_	_
2	est	sum	AUX	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	_	_
3	uita	uita	NOUN	A1|grn1|casA|gen2|vgr1	Case=Nom|Gender=Fem|Number=Sing	1	nsubj	_	_
4	aeterna	aeternus	ADJ	A1|grn1|casA|gen2|vgr1	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	3	amod	_	SpaceAfter=No
5	,	,	PUNCT	Punc	_	7	punct	_	_
6	ut	ut	SCONJ	O4|vgr1	_	7	mark	_	_
7	cognoscant	cognosco	VERB	L3|modB|tem1|gen9	Aspect=Imp|Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	acl	_	_
8	te	tu	PRON	F1|grn1|casD|gen1	Case=Acc|Gender=Masc|Number=Sing|PronType=Prs	7	obj	_	_
9	solum	solus	ADJ	F1|grn1|casD|gen1	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	10	advcl:pred	_	_
10	deum	deus	NOUN	F1|grn1|casD|gen1	Case=Acc|Gender=Masc|Number=Sing	7	xcomp	_	_
11	uerum	uerus	ADJ	B1|grn1|casD|gen1|vgr1	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	10	amod	_	SpaceAfter=No
12	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 advcl:pred	color:blue
1	uidete	uideo	VERB	K3|modC|tem1|gen8	Aspect=Imp|Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	quod	quod	SCONJ	O4	_	4	mark	_	_
3	ego	ego	PRON	F1|grn1|casA|gen1	Case=Nom|Gender=Masc|Number=Sing|PronType=Prs	4	nsubj	_	_
4	sum	sum	VERB	N3|modA|tem1|gen4	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	1	ccomp	_	_
5	solus	solus	ADJ	F1|grn1|casA|gen1	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	3	advcl:pred	_	SpaceAfter=No
6	,	,	PUNCT	Punc	_	9	punct	_	_
7	et	et	CCONJ	O4	_	9	cc	_	_
8	non	non	PART	O4	Polarity=Neg	9	advmod:neg	_	_
9	est	sum	VERB	N3|modA|tem1|gen6	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	conj	_	_
10	alius	alius	PRON	F1|grn1|casA|gen1	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	9	nsubj	_	_
11	praeter	praeter	ADP	S4|vgr1	AdpType=Prep	12	case	_	_
12	me	ego	PRON	F1|grn1|casD|gen1	Case=Acc|Gender=Masc|Number=Sing|PronType=Prs	9	obl	_	SpaceAfter=No
13	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 advcl:pred	color:blue
1	homo	homo	NOUN	C1|grn1|casA|gen1	Case=Nom|Gender=Masc|Number=Sing	10	nsubj:pass	_	_
2	autem	autem	CCONJ	O4	_	10	cc	_	_
3	per	per	ADP	S4	AdpType=Prep	4	case	_	_
4	scripturas	scriptura	NOUN	A1|grn1|casM|gen2	Case=Acc|Gender=Fem|Number=Plur	10	obl	_	_
5	a	ab	ADP	S4|vgr1	AdpType=Prep	7	case	_	_
6	solo	solus	ADJ	F1|grn1|casF|gen1	Case=Abl|Degree=Pos|Gender=Masc|Number=Sing	7	advcl:pred	_	_
7	deo	deus	PROPN	F1|grn1|casF|gen1	Case=Abl|Gender=Masc|Number=Sing	8	obl:arg	_	_
8	conditus	condo	VERB	L2|modM|tem4|grp1|casA|gen1	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	10	xcomp:pred	_	_
9	esse	sum	AUX	N3|modH|tem1	Tense=Pres|VerbForm=Inf|Voice=Act	8	aux:pass	_	_
10	docetur	doceo	VERB	K3|modJ|tem1|gen6	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No
11	.	.	PUNCT	Punc	_	10	punct	_	_

~~~


