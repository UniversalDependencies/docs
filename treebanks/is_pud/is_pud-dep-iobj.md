---
layout: base
title:  'Statistics of iobj in UD_Icelandic-PUD'
udver: '2'
---

## Treebank Statistics: UD_Icelandic-PUD: Relations: `iobj`

This relation is universal.

32 nodes (0%) are attached to their parents as `iobj`.

32 instances of `iobj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.375.

The following 5 pairs of parts of speech are connected with `iobj`: <tt><a href="is_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt> (12; 38% instances), <tt><a href="is_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="is_pud-pos-PRON.html">PRON</a></tt> (11; 34% instances), <tt><a href="is_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="is_pud-pos-PROPN.html">PROPN</a></tt> (7; 22% instances), <tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_pud-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="is_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="is_pud-pos-ADJ.html">ADJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 iobj	color:blue
1	Platón	platón	NOUN	nken	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	2	nsubj	_	_
2	taldi	telja	VERB	sfg3eþ	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	mun	munur	ADV	nkeþ	Case=Dat|Definite=Ind|Gender=Masc|Number=Sing	4	advmod	_	_
4	öruggara	öruggur	ADJ	lheovm	Case=Acc|Definite=Def|Degree=Cmp|Gender=Neut|Number=Sing	2	obj	_	_
5	að	að	PART	cn	_	6	mark	_	_
6	fela	fela	VERB	sng	VerbForm=Inf|Voice=Act	2	xcomp	_	_
7	vandlega	vandlega	ADV	aa	_	8	advmod	_	_
8	menntuðum	menntaður	ADJ	lkfþsf	Case=Dat|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	9	amod	_	_
9	gæslumönnum	gæslumaður	NOUN	nkfþ	Case=Dat|Definite=Ind|Gender=Masc|Number=Plur	6	iobj	_	_
10	völdin	vald	NOUN	nhfog	Case=Acc|Definite=Def|Gender=Neut|Number=Plur	6	obj	_	SpaceAfter=No
11	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 iobj	color:blue
1	Iðnbyltingin	iðnbylting	NOUN	nveng	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	2	nsubj	_	_
2	átti	eiga	VERB	sfg3eþ	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	sér	sig	PRON	fpveþ	Case=Dat|Gender=Fem|Number=Sing|PronType=Prs	2	iobj	_	_
4	fyrr	snemmt	ADV	aam	_	2	advmod	_	_
5	stað	staður	NOUN	nkeo	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	2	obj	_	_
6	í	í	ADP	aþ	_	7	case	_	_
7	Bretlandi	Bretland	PROPN	nheþ-s	Case=Dat|Gender=Neut|Number=Sing	2	obl	_	_
8	en	en	CCONJ	c	_	12	mark	_	_
9	í	í	ADP	aþ	_	12	case	_	_
10	nokkru	nokkur	PRON	foheþ	Case=Dat|Gender=Neut|Number=Sing|PronType=Ind	12	det	_	_
11	öðru	annar	PRON	foheþ	Case=Dat|Gender=Neut|Number=Sing|PronType=Ind	12	det	_	_
12	landi	land	NOUN	nheþ	Case=Dat|Definite=Ind|Gender=Neut|Number=Sing	2	obl	_	SpaceAfter=No
13	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 iobj	color:blue
1	Curio	Curio	PROPN	e	_	10	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	,	_	6	punct	_	_
3	sem	sem	SCONJ	ct	_	6	mark	_	_
4	hafði	hafa	AUX	sfg3eþ	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	aux	_	_
5	þá	þá	ADV	aa	_	6	advmod	_	_
6	lokið	ljúka	VERB	ssg	VerbForm=Sup|Voice=Act	1	acl:relcl	_	_
7	embættissetu	embættisseta	NOUN	nveþ	Case=Dat|Definite=Ind|Gender=Fem|Number=Sing	6	obj	_	_
8	sinni	sinn	PRON	feveþ	Case=Dat|Gender=Fem|Number=Sing|Poss=Yes	7	nmod:poss	_	SpaceAfter=No
9	,	,	PUNCT	,	_	6	punct	_	_
10	greindi	greina	VERB	sfg3eþ	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
11	Sesari	Sesar	PROPN	nkeþ-s	Case=Dat|Gender=Masc|Number=Sing	10	iobj	_	_
12	sjálfum	sjálfur	PRON	fbkeþ	Case=Dat|Gender=Masc|Number=Sing|PronType=Ind	11	det	_	_
13	frá	frá	ADP	aþ	_	14	case	_	_
14	framferði	framferði	NOUN	nheþ	Case=Dat|Definite=Ind|Gender=Neut|Number=Sing	10	obl:arg	_	_
15	Pompeiusar	Pompeius	PROPN	nkee-s	Case=Gen|Gender=Masc|Number=Sing	14	nmod:poss	_	SpaceAfter=No
16	.	.	PUNCT	.	_	10	punct	_	_

~~~


