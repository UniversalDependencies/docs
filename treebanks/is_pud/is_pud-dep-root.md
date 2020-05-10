---
layout: base
title:  'Statistics of root in UD_Icelandic-PUD'
udver: '2'
---

## Treebank Statistics: UD_Icelandic-PUD: Relations: `root`

This relation is universal.

1000 nodes (5%) are attached to their parents as `root`.

1000 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.352.

The following 8 pairs of parts of speech are connected with `root`: -<tt><a href="is_pud-pos-VERB.html">VERB</a></tt> (739; 74% instances), -<tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt> (144; 14% instances), -<tt><a href="is_pud-pos-ADJ.html">ADJ</a></tt> (85; 9% instances), -<tt><a href="is_pud-pos-PRON.html">PRON</a></tt> (12; 1% instances), -<tt><a href="is_pud-pos-PROPN.html">PROPN</a></tt> (10; 1% instances), -<tt><a href="is_pud-pos-ADV.html">ADV</a></tt> (7; 1% instances), -<tt><a href="is_pud-pos-AUX.html">AUX</a></tt> (2; 0% instances), -<tt><a href="is_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 5 root	color:blue
1	Þessi	þessi	PRON	fahfn	Case=Nom|Gender=Neut|Number=Plur|PronType=Dem	3	det	_	_
2	nýju	nýr	ADJ	lhfnvf	Case=Nom|Definite=Def|Degree=Pos|Gender=Neut|Number=Plur	3	amod	_	_
3	útgjöld	útgjöld	NOUN	nhfn	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	5	nsubj	_	_
4	eru	vera	AUX	sfg3fn	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	_	_
5	fjármögnuð	fjármagna	VERB	sþghfn	Case=Nom|Gender=Neut|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
6	með	með	ADP	aþ	_	8	case	_	_
7	digrum	digur	ADJ	lkeþsf	Case=Dat|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	8	amod	_	_
8	bankareikningi	bankareikningur	NOUN	nkeþ	Case=Dat|Definite=Ind|Gender=Masc|Number=Sing	5	obl	_	_
9	Clintons	Clintons	PROPN	e	_	8	nmod:poss	_	SpaceAfter=No
10	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
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
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 16 root	color:blue
1	Það	sá	PRON	fahen	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	4	obj	_	_
2	sem	sem	SCONJ	ct	_	4	mark	_	_
3	hún	hún	PRON	fpven	Case=Nom|Gender=Fem|Number=Sing|PronType=Prs	4	nsubj	_	_
4	segir	segja	VERB	sfg3en	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	16	dislocated	_	_
5	og	og	CCONJ	c	_	9	cc	_	_
6	það	sá	PRON	fahen	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	9	obj	_	_
7	sem	sem	SCONJ	ct	_	9	mark	_	_
8	hún	hún	PRON	fpven	Case=Nom|Gender=Fem|Number=Sing|PronType=Prs	9	nsubj	_	_
9	gerir	gera	VERB	sfg3en	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	conj	_	SpaceAfter=No
10	,	,	PUNCT	,	_	16	punct	_	_
11	það	það	PRON	fphen	Case=Nom|Gender=Neut|Number=Sing|PronType=Prs	16	dislocated	_	_
12	—	—	PUNCT	x	_	11	punct	_	_
13	það	það	PRON	fphen	Case=Nom|Gender=Neut|Number=Sing|PronType=Prs	16	nsubj	_	_
14	er	vera	AUX	sfg3en	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	16	cop	_	_
15	raunar	raunar	ADV	aa	_	16	advmod	_	_
16	ótrúlegt	ótrúlegur	ADJ	lhensf	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	SpaceAfter=No
17	.	.	PUNCT	.	_	16	punct	_	_

~~~


