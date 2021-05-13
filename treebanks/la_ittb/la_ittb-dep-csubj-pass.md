---
layout: base
title:  'Statistics of csubj:pass in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="la_ittb-dep-csubj.html">csubj</a></tt>.

1994 nodes (0%) are attached to their parents as `csubj:pass`.

1591 instances of `csubj:pass` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.87813440320963.

The following 8 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (1773; 89% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (96; 5% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (83; 4% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-PRON.html">PRON</a></tt> (25; 1% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt> (8; 0% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-NUM.html">NUM</a></tt> (5; 0% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 csubj:pass	color:blue
1	relinquitur	relinquo	VERB	L3|modJ|tem1|gen6	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
2	quod	quod	SCONJ	O4	_	7	mark	_	_
3	deum	deus	PROPN	F1|grn1|casD|gen1	Case=Acc|Gender=Masc|Number=Sing	4	nsubj	_	_
4	esse	sum	VERB	N3|modH|tem1	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	7	csubj:pass	_	_
5	per	per	ADP	S4	AdpType=Prep	6	case	_	_
6	se	se	PRON	F1|grn1|casD|gen3	Case=Acc|Gender=Neut|Number=Sing|PronType=Prs|Reflex=Yes	7	obl	_	_
7	notum	nosco	VERB	L2|modM|tem4|grp1|casA|gen3	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	1	csubj:pass	_	_
8	est	sum	AUX	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	SpaceAfter=No
9	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 csubj:pass	color:blue
1	ostensum	ostendo	VERB	L2|modM|tem4|grp1|casA|gen3	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
2	autem	autem	CCONJ	O4	_	1	cc	_	_
3	est	sum	AUX	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	aux:pass	_	_
4	deum	deus	PROPN	F1|grn1|casD|gen1	Case=Acc|Gender=Masc|Number=Sing	7	nsubj	_	_
5	esse	sum	AUX	N3|modH|tem1	Tense=Pres|VerbForm=Inf|Voice=Act	7	cop	_	_
6	primam	primus	ADJ	A1|grn1|casD|gen2	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|NumType=Ord	7	amod	_	_
7	causam	causa	NOUN	A1|grn1|casD|gen2|vgr1	Case=Acc|Gender=Fem|Number=Sing	1	csubj:pass	_	SpaceAfter=No
8	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 csubj:pass	color:blue
1	ostensum	ostendo	VERB	L2|modM|tem4|grp1|casA|gen3	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
2	autem	autem	CCONJ	O4	_	1	cc	_	_
3	est	sum	AUX	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	aux:pass	_	_
4	deum	deus	PROPN	F1|grn1|casD|gen1	Case=Acc|Gender=Masc|Number=Sing	7	nsubj	_	_
5	esse	sum	AUX	N3|modH|tem1	Tense=Pres|VerbForm=Inf|Voice=Act	7	cop	_	_
6	omnino	omnino	ADV	O4	_	7	advmod:emph	_	_
7	immutabilem	immutabilis	ADJ	C1|grn1|casD|gen1	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	1	csubj:pass	_	SpaceAfter=No
8	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


