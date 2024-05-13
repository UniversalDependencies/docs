---
layout: base
title:  'Statistics of nmod:range in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `nmod:range`

This relation is a language-specific subtype of <tt><a href="fr_gsd-dep-nmod.html">nmod</a></tt>.

158 nodes (0%) are attached to their parents as `nmod:range`.

158 instances of `nmod:range` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.84810126582278.

The following 10 pairs of parts of speech are connected with `nmod:range`: <tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt> (60; 38% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (57; 36% instances), <tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (15; 9% instances), <tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (10; 6% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (5; 3% instances), <tt><a href="fr_gsd-pos-SYM.html">SYM</a></tt>-<tt><a href="fr_gsd-pos-SYM.html">SYM</a></tt> (4; 3% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_gsd-pos-SYM.html">SYM</a></tt> (2; 1% instances), <tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 nmod:range	color:blue
1	La	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	construction	construction	NOUN	_	Gender=Fem|Number=Sing	3	nsubj	_	_
3	va	aller	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	durer	durer	VERB	_	VerbForm=Inf	3	xcomp	_	_
5	de	de	ADP	_	_	6	case	_	_
6	1939	1939	NUM	_	_	4	obl:arg	_	_
7	à	à	ADP	_	_	8	case	_	_
8	1944	1944	NUM	_	_	6	nmod:range	_	SpaceAfter=No
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 nmod:range	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj:pass	_	_
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	_	_
3	publié	publier	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	quotidiennement	quotidiennement	ADV	_	_	3	advmod	_	_
5	de	de	ADP	_	_	7	case	_	_
6	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	lundi	lundi	NOUN	_	Gender=Masc|Number=Sing	3	obl:mod	_	_
8	à	à	ADP	_	_	10	case	_	_
9	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	vendredi	vendredi	NOUN	_	Gender=Masc|Number=Sing	7	nmod:range	_	SpaceAfter=No
11	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 13 nmod:range	color:blue
1	Cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	2	det	_	_
2	espèce	espèce	NOUN	_	Gender=Fem|Number=Sing	3	nsubj	_	_
3	vit	vivre	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	en	en	ADP	_	_	5	case	_	_
5	Amérique	Amérique	PROPN	_	_	3	obl	_	_
6	centrale	central	ADJ	_	Gender=Fem|Number=Sing	5	amod	_	SpaceAfter=No
7	,	,	PUNCT	_	_	3	punct	_	_
8	de	de	ADP	_	_	10	case	_	_
9	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	Mexique	Mexique	PROPN	_	_	3	obl:mod	_	_
11	à	à	ADP	_	_	13	case	_	_
12	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	Guatemala	Guatemala	PROPN	_	_	10	nmod:range	_	SpaceAfter=No
14	.	.	PUNCT	_	_	3	punct	_	_

~~~


