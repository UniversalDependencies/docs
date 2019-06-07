---
layout: base
title:  'Statistics of advmod:cc in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `advmod:cc`

This relation is a language-specific subtype of <tt><a href="la_ittb-dep-advmod.html">advmod</a></tt>.
There are also 2 other language-specific subtypes of `advmod`: <tt><a href="la_ittb-dep-advmod-appos.html">advmod:appos</a></tt>, <tt><a href="la_ittb-dep-advmod-emph.html">advmod:emph</a></tt>.

369 nodes (0%) are attached to their parents as `advmod:cc`.

355 instances of `advmod:cc` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.86449864498645.

The following 7 pairs of parts of speech are connected with `advmod:cc`: <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (234; 63% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (71; 19% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (35; 9% instances), <tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (16; 4% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (9; 2% instances), <tt><a href="la_ittb-pos-ADV.html">ADV</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod:cc	color:blue
1	effudit	effundo	VERB	L3|modA|tem4|gen6	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
2	illam	ille	PRON	F1|grn1|casD|gen2	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|PronType=Dem	1	obj	_	SpaceAfter=No
3	,	,	PUNCT	Punc	_	5	punct	_	_
4	scilicet	scilicet	ADV	O4	_	5	advmod:cc	_	_
5	sapientiam	sapientia	NOUN	A1|grn1|casD|gen2|vgr1	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	2	appos	_	SpaceAfter=No
6	,	,	PUNCT	Punc	_	9	punct	_	_
7	super	super	ADP	S4	AdpType=Prep	9	case	_	_
8	omnia	omnis	PRON	C1|grn1|casM|gen3	Case=Acc|Degree=Pos|Gender=Neut|Number=Plur|PronType=Ind	9	det	_	_
9	opera	opus	NOUN	B1|grn1|casM|gen3	Case=Acc|Degree=Pos|Gender=Neut|Number=Plur	1	obl	_	_
10	sua	suus	ADJ	B1|grn1|casM|gen3	Case=Acc|Degree=Pos|Gender=Neut|Number=Plur|Poss=Yes	9	amod	_	SpaceAfter=No
11	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 advmod:cc	color:blue
1	primo	primus	NOUN	B1|grn1|casF|gen3	Case=Abl|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	SpaceAfter=No
2	,	,	PUNCT	Punc	_	5	punct	_	_
3	ex	ex	ADP	S4|vgr2	AdpType=Prep	5	case	_	_
4	suo	suus	ADJ	B1|grn1|casF|gen3	Case=Abl|Degree=Pos|Gender=Neut|Number=Sing|Poss=Yes	5	amod	_	_
5	genere	genus	NOUN	C1|grn1|casF|gen3	Case=Abl|Degree=Pos|Gender=Neut|Number=Sing	1	orphan	_	SpaceAfter=No
6	:	:	PUNCT	Punc	_	10	punct	_	_
7	ut	ut	SCONJ	O4|vgr1	_	10	mark	_	_
8	scilicet	scilicet	ADV	O4	_	10	advmod:cc	_	_
9	sit	sum	AUX	N3|modB|tem1|gen6	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	_	_
10	manens	maneo	VERB	K2|modD|tem1|grp1|casA|gen2	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	5	acl:appos	_	_
11	in	in	ADP	S4	AdpType=Prep	13	mark	_	_
12	ipso	ipse	PRON	F1|grn1|casF|gen3	Case=Abl|Degree=Pos|Gender=Neut|Number=Sing|PronType=Dem,Prs	13	det	_	_
13	operante	operor	VERB	J2|modM|tem1|grp1|casF|gen3	Case=Abl|Degree=Pos|Gender=Neut|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Pass	10	advcl	_	SpaceAfter=No
14	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 advmod:cc	color:blue
1	nihil	nihil	PRON	G1|casD|gen3|vgr1	Case=Acc|Gender=Neut|Number=Sing|PronType=Neg	3	obj	_	_
2	ergo	ergo	ADV	O4	_	3	advmod	_	_
3	habet	habeo	VERB	K3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	de	de	ADP	S4	AdpType=Prep	5	case	_	_
5	potentia	potentia	NOUN	A1|grn1|casF|gen2|vgr1	Case=Abl|Degree=Pos|Gender=Fem|Number=Sing	1	nmod	_	SpaceAfter=No
6	,	,	PUNCT	Punc	_	8	punct	_	_
7	scilicet	scilicet	ADV	O4	_	8	advmod:cc	_	_
8	passiva	passivus	ADJ	A1|grn1|casF|gen2	Case=Abl|Degree=Pos|Gender=Fem|Number=Sing	5	appos	_	SpaceAfter=No
9	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


