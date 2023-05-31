---
layout: base
title:  'Statistics of nummod in UD_Icelandic-PUD'
udver: '2'
---

## Treebank Statistics: UD_Icelandic-PUD: Relations: `nummod`

This relation is universal.

269 nodes (1%) are attached to their parents as `nummod`.

221 instances of `nummod` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.15241635687732.

The following 6 pairs of parts of speech are connected with `nummod`: <tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_pud-pos-NUM.html">NUM</a></tt> (234; 87% instances), <tt><a href="is_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="is_pud-pos-NUM.html">NUM</a></tt> (15; 6% instances), <tt><a href="is_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="is_pud-pos-NUM.html">NUM</a></tt> (12; 4% instances), <tt><a href="is_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="is_pud-pos-NUM.html">NUM</a></tt> (6; 2% instances), <tt><a href="is_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="is_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="is_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="is_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	5.000	5.000	NUM	ta	_	2	nummod	_	_
2	Bandaríkjadalir	bandaríkjadöl	NOUN	nvfn	Case=Nom|Definite=Ind|Gender=Fem|Number=Plur	0	root	_	_
3	á	á	ADP	ao	_	4	case	_	_
4	mann	maður	NOUN	nkeo	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	2	nmod	_	SpaceAfter=No
5	,	,	PUNCT	,	_	2	punct	_	_
6	sem	sem	SCONJ	ct	_	8	nsubj	_	_
7	er	vera	AUX	sfg3en	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	_
8	hámarkið	hámark	NOUN	nheng	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	2	acl:relcl	_	_
9	sem	sem	SCONJ	ct	_	10	nsubj	_	_
10	leyft	leyfa	VERB	sþghen	Case=Nom|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	8	acl:relcl	_	_
11	er	vera	AUX	sfg3en	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	aux	_	SpaceAfter=No
12	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 nummod	color:blue
1	Heimildamennirnir	heimildamaður	NOUN	nkfng	Case=Nom|Definite=Def|Gender=Masc|Number=Plur	7	nsubj	_	_
2	sem	sem	SCONJ	ct	_	3	nsubj	_	_
3	spurðir	spyrja	VERB	sþgkfn	Case=Nom|Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	1	acl:relcl	_	_
4	voru	vera	AUX	sfg3fþ	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	aux	_	_
5	álits	álit	NOUN	nhee	Case=Gen|Definite=Ind|Gender=Neut|Number=Sing	3	obj	_	_
6	hafa	hafa	AUX	sfg3fn	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux	_	_
7	sagt	segja	VERB	ssg	VerbForm=Sup|Voice=Act	0	root	_	_
8	að	að	SCONJ	c	_	14	mark	_	_
9	þetta	þessi	PRON	fahen	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	14	nsubj	_	_
10	sé	vera	AUX	svg3en	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	14	cop	_	_
11	„	„	PUNCT	„	PunctSide=Ini	13	punct	_	SpaceAfter=No
12	100	100	NUM	ta	_	13	nummod	_	SpaceAfter=No
13	%	%	SYM	%	_	14	nmod	_	_
14	Cospedal	Cospedal	PROPN	e	_	7	ccomp	_	SpaceAfter=No
15	“	“	PUNCT	“	PunctSide=Fin	14	punct	_	SpaceAfter=No
16	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nummod	color:blue
1	Mate	Mate	PROPN	e	_	3	compound	_	_
2	9	9	NUM	ta	_	1	nummod	_	_
3	símana	sími	NOUN	nkfog	Case=Acc|Definite=Def|Gender=Masc|Number=Plur	4	nsubj	_	_
4	skortir	skorta	VERB	sfg3en	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	gervigreindarviðmót	gervigreindarviðmót	NOUN	nveo	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	4	obj	_	SpaceAfter=No
6	,	,	PUNCT	,	_	5	punct	_	_
7	svo	svo	ADV	aa	_	10	mark	_	_
8	sem	sem	SCONJ	c	_	7	fixed	_	_
9	Google	Google	PROPN	e	_	10	compound	_	_
10	Assistant	Assistant	PROPN	e	_	5	appos	_	_
11	eða	eða	CCONJ	c	_	12	cc	_	_
12	Siri	Siri	PROPN	e	_	10	conj	_	_
13	frá	frá	ADP	aþ	_	14	case	_	_
14	Apple	Apple	PROPN	e	_	12	nmod	_	SpaceAfter=No
15	.	.	PUNCT	.	_	4	punct	_	_

~~~


