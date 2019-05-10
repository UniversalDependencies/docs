---
layout: base
title:  'Statistics of advmod:appos in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `advmod:appos`

This relation is a language-specific subtype of <tt><a href="la_ittb-dep-advmod.html">advmod</a></tt>.
There are also 2 other language-specific subtypes of `advmod`: <tt><a href="la_ittb-dep-advmod-cc.html">advmod:cc</a></tt>, <tt><a href="la_ittb-dep-advmod-emph.html">advmod:emph</a></tt>.

5 nodes (0%) are attached to their parents as `advmod:appos`.

4 instances of `advmod:appos` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.6.

The following 2 pairs of parts of speech are connected with `advmod:appos`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (3; 60% instances), <tt><a href="la_ittb-pos-ADV.html">ADV</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (2; 40% instances).


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 17 advmod:appos	color:blue
1	sed	sed	CCONJ	O4|vgr1	_	3	cc	_	_
2	contra	contra	ADP	S4	AdpType=Prep	3	mark	_	_
3	est	sum	VERB	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	quod	qui	PRON	F1|grn1|casD|gen3	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|PronType=Rel	6	obj	_	_
5	dionysius	dionysius	PROPN	B1|grn1|casA|gen1|vgr1	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	6	nsubj	_	_
6	dicit	dico	VERB	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	csubj	_	_
7	in	in	ADP	S4	AdpType=Prep	8	case	_	_
8	fine	finis	NOUN	C1|grn1|casF|gen1	Case=Abl|Degree=Pos|Gender=Masc|Number=Sing	6	obl	_	_
9	eccl.	eccl.	NOUN	5	Abbr=Yes	10	nmod	_	_
10	hier.	hier.	NOUN	5	Abbr=Yes	8	nmod	_	SpaceAfter=No
11	,	,	PUNCT	Punc	_	17	punct	_	_
12	in	in	ADP	S4	AdpType=Prep	17	case	_	_
13	ipsis	ipse	PRON	F1|grn1|casO|gen2	Case=Abl|Degree=Pos|Gender=Fem|Number=Plur|PronType=Dem,Prs	17	det	_	SpaceAfter=No
14	,	,	PUNCT	Punc	_	23	punct	_	_
15	scilicet	scilicet	ADV	O4	_	23	advmod:cc	_	_
16	consummativis	consummativus	ADJ	A1|grn1|casO|gen2	Case=Abl|Degree=Pos|Gender=Fem|Number=Plur	17	amod	_	_
17	invocationibus	invocatio	NOUN	C1|grn1|casO|gen2	Case=Abl|Degree=Pos|Gender=Fem|Number=Plur	23	advmod:appos	_	SpaceAfter=No
18	,	,	PUNCT	Punc	_	20	punct	_	_
19	idest	idest	ADV	O4	_	20	advmod:cc	_	_
20	formis	forma	NOUN	A1|grn1|casO|gen2	Case=Abl|Degree=Pos|Gender=Fem|Number=Plur	17	appos	_	_
21	sacramentorum	sacramentum	NOUN	B1|grn1|casK|gen3	Case=Gen|Degree=Pos|Gender=Neut|Number=Plur	20	nmod	_	SpaceAfter=No
22	,	,	PUNCT	Punc	_	17	punct	_	_
23	esse	sum	VERB	N3|modH|tem1	Tense=Pres|VerbForm=Inf|Voice=Act	6	advcl:appos	_	_
24	virtutes	virtus	NOUN	C1|grn1|casM|gen2|vgr1	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	23	nsubj	_	_
25	operativas	operativus	ADJ	A1|grn1|casM|gen2	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	24	amod	_	_
26	ex	ex	ADP	S4|vgr2	AdpType=Prep	27	case	_	_
27	deo	deus	PROPN	F1|grn1|casF|gen1	Case=Abl|Degree=Pos|Gender=Masc|Number=Sing	24	nmod	_	SpaceAfter=No
28	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 13 advmod:appos	color:blue
1	secundo	secundo	ADV	B1|grn1|casG	Degree=Pos	3	advmod	_	SpaceAfter=No
2	,	,	PUNCT	Punc	_	1	punct	_	_
3	indicitur	indico	VERB	N3|modJ|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
4	homini	homo	NOUN	C1|grn1|casC|gen1	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing	3	obj	_	_
5	ne	ne	SCONJ	O4	_	10	mark	_	_
6	irreverenter	irreverenter	ADV	C1|grn1|casG|vgr1	Degree=Pos	10	advmod	_	_
7	divinum	divinus	ADJ	B1|grn1|casD|gen3|vgr1	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	8	amod	_	_
8	nomen	nomen	NOUN	C1|grn1|casD|gen3	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	10	obj	_	_
9	ore	os	NOUN	C1|grn1|casF|gen3	Case=Abl|Degree=Pos|Gender=Neut|Number=Sing	10	obl	_	oris
10	pronuntiet	pronuntio	VERB	J3|modB|tem1|gen6|vgr2	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	csubj:pass	_	SpaceAfter=No
11	,	,	PUNCT	Punc	_	13	punct	_	_
12	ad	ad	ADP	S4	AdpType=Prep	13	case	_	_
13	confirmationem	confirmatio	NOUN	C1|grn1|casD|gen2	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	6	advmod:appos	_	_
14	scilicet	scilicet	ADV	O4	_	13	advmod:cc	_	_
15	alicuius	aliquis	PRON	F1|grn1|casB|gen3|vgr2	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|PronType=Ind	13	nmod	_	_
16	falsi	falsus	ADJ	B1|grn1|casB|gen3	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	15	amod	_	SpaceAfter=No
17	:	:	PUNCT	Punc	_	3	punct	_	_

~~~


