---
layout: base
title:  'Statistics of vocative in UD_Danish-DDT'
udver: '2'
---

## Treebank Statistics: UD_Danish-DDT: Relations: `vocative`

This relation is universal.

32 nodes (0%) are attached to their parents as `vocative`.

18 instances of `vocative` (56%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.625.

The following 13 pairs of parts of speech are connected with `vocative`: <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-PROPN.html">PROPN</a></tt> (12; 38% instances), <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt> (5; 16% instances), <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-ADJ.html">ADJ</a></tt> (3; 9% instances), <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-PRON.html">PRON</a></tt> (3; 9% instances), <tt><a href="da_ddt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="da_ddt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="da_ddt-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="da_ddt-pos-ADV.html">ADV</a></tt>-<tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="da_ddt-pos-ADV.html">ADV</a></tt>-<tt><a href="da_ddt-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="da_ddt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="da_ddt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="da_ddt-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="da_ddt-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="da_ddt-pos-X.html">X</a></tt>-<tt><a href="da_ddt-pos-PROPN.html">PROPN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 vocative	color:blue
1	Lotte	Lotte	PROPN	_	_	4	vocative	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	jeg	jeg	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
4	elsker	elske	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	dig	du	PRON	_	Case=Acc|Gender=Com|Number=Sing|Person=2|PronType=Prs	4	obj	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 vocative	color:blue
1	Du	du	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=2|PronType=Prs	3	nsubj	_	_
2	sku'	skulle	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	3	aux	_	SpaceAfter=No
3	prøve	prøve	VERB	_	VerbForm=Inf|Voice=Act	0	root	_	_
4	det	det	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	obj	_	SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	_
6	knægt	knægt	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	3	vocative	_	SpaceAfter=No
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 vocative	color:blue
1	"	"	PUNCT	_	_	5	punct	_	SpaceAfter=No
2	Søde	sød	ADJ	_	Definite=Def|Degree=Pos|Number=Sing	5	vocative	_	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	hvad	hvad	PRON	_	Number=Sing|PronType=Int,Rel	5	obj	_	_
5	gør	gøre	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	jeg	jeg	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
7	med	med	ADP	_	AdpType=Prep	9	case	_	_
8	mine	min	DET	_	Number=Plur|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	9	det	_	_
9	proteiner	protein	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	5	obl	_	_
10	hvis	hvis	SCONJ	_	_	12	mark	_	_
11	jeg	jeg	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=1|PronType=Prs	12	nsubj	_	_
12	får	få	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	advcl	_	_
13	lyst	lyst	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	12	obj	_	_
14	til	til	ADP	_	AdpType=Prep	16	mark	_	_
15	at	at	PART	_	PartType=Inf	16	mark	_	_
16	fyre	fyre	VERB	_	VerbForm=Inf|Voice=Act	13	advcl	_	_
17	en	en	DET	_	Gender=Com|Number=Sing|PronType=Ind	18	det	_	_
18	spiller	spiller	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	16	obj	_	SpaceAfter=No
19	?	?	PUNCT	_	_	5	punct	_	SpaceAfter=No
20	"	"	PUNCT	_	_	5	punct	_	_

~~~


