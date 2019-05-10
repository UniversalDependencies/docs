---
layout: base
title:  'Statistics of acl:appos in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `acl:appos`

This relation is a language-specific subtype of <tt><a href="la_ittb-dep-acl.html">acl</a></tt>.
There are also 1 other language-specific subtypes of `acl`: <tt><a href="la_ittb-dep-acl-relcl.html">acl:relcl</a></tt>.

80 nodes (0%) are attached to their parents as `acl:appos`.

80 instances of `acl:appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.1875.

The following 11 pairs of parts of speech are connected with `acl:appos`: <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (44; 55% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (12; 15% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (6; 8% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (6; 8% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (4; 5% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (3; 4% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 acl:appos	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 acl:appos	color:blue
1	intelligendum	intellego	VERB	L2|modO|grp1|casA|gen3	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|VerbForm=Gdv|Voice=Pass	0	root	_	_
2	est	sum	AUX	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	aux:pass	_	_
3	per	per	ADP	S4	AdpType=Prep	4	case	_	_
4	se	se	PRON	F1|grn1|casD|gen3	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|PronType=Prs|Reflex=Yes	1	obl	_	SpaceAfter=No
5	,	,	PUNCT	Punc	_	7	punct	_	_
6	idest	idest	ADV	O4	_	9	advmod:cc	_	_
7	secundum	secundum	ADP	S4	AdpType=Prep	9	mark	_	_
8	quod	quod	SCONJ	O4	_	7	fixed	_	_
9	videtur	video	VERB	K3|modJ|tem1|gen6|vgr1	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	4	acl:appos	_	_
10	in	in	ADP	S4	AdpType=Prep	11	case	_	_
11	forma	forma	NOUN	A1|grn1|casF|gen2	Case=Abl|Degree=Pos|Gender=Fem|Number=Sing	9	obl	_	_
12	sua	suus	ADJ	A1|grn1|casF|gen2	Case=Abl|Degree=Pos|Gender=Fem|Number=Sing|Poss=Yes	11	amod	_	SpaceAfter=No
13	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 acl:appos	color:blue
1	secundo	secundus	NOUN	B1|grn1|casF|gen3	Case=Abl|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	SpaceAfter=No
2	,	,	PUNCT	Punc	_	4	punct	_	_
3	ex	ex	ADP	S4|vgr2	AdpType=Prep	4	case	_	_
4	principio	principium	NOUN	B1|grn1|casF|gen3	Case=Abl|Degree=Pos|Gender=Neut|Number=Sing	1	orphan	_	_
5	operationis	operatio	NOUN	C1|grn1|casB|gen2|vgr1	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	4	nmod	_	SpaceAfter=No
6	:	:	PUNCT	Punc	_	10	punct	_	_
7	ut	ut	SCONJ	O4|vgr1	_	10	mark	_	_
8	sit	sum	AUX	N3|modB|tem1|gen6	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	_	_
9	altissimae	altus	ADJ	A1|grn3|casB|gen2	Case=Gen|Degree=Abs|Gender=Fem|Number=Sing	10	amod	_	_
10	potentiae	potentia	NOUN	A1|grn1|casB|gen2|vgr1	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	4	acl:appos	_	SpaceAfter=No
11	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


