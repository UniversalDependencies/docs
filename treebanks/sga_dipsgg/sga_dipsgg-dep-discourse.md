---
layout: base
title:  'Statistics of discourse in UD_Old_Irish-DipSGG'
udver: '2'
---

## Treebank Statistics: UD_Old_Irish-DipSGG: Relations: `discourse`

This relation is universal.

5 nodes (1%) are attached to their parents as `discourse`.

5 instances of `discourse` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.

The following 3 pairs of parts of speech are connected with `discourse`: <tt><a href="sga_dipsgg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sga_dipsgg-pos-INTJ.html">INTJ</a></tt> (2; 40% instances), <tt><a href="sga_dipsgg-pos-VERB.html">VERB</a></tt>-<tt><a href="sga_dipsgg-pos-INTJ.html">INTJ</a></tt> (2; 40% instances), <tt><a href="sga_dipsgg-pos-VERB.html">VERB</a></tt>-<tt><a href="sga_dipsgg-pos-ADV.html">ADV</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 discourse	color:blue
1	uit	uit	INTJ	_	_	3	discourse	_	_
2	mo	mo	PRON	_	Number=Sing|Person=1|Poss=Yes|PronType=Prs	3	nmod:poss	_	_
3	chrob	crob	NOUN	_	Case=Nom|Number=Sing	0	root	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 discourse	color:blue
1	memmbrum	membrum	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
2	naue	nuae	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	1	amod	_	_
3	droch	droch	ADJ	_	Degree=Pos|Prefix=Yes	4	amod	_	SpaceAfter=No
4	dub	dub	NOUN	_	Case=Nom|Number=Sing	2	conj	_	_
5	ó	ó	INTJ	_	_	7	discourse	_	_
6	ní	ní	PART	_	Polarity=Neg	7	advmod	_	SpaceAfter=No
7	epur	asbeir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|Voice=Act	1	parataxis	_	_
8	na	nach	DET	_	Case=Acc|Definite=Ind|Number=Sing	9	det	_	_
9	haill	aile	ADJ	_	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	7	amod	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 discourse	color:blue
1	braigim	braigid	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|Voice=Act	0	root	_	_
2	nam	_	ADV	_	Foreign=Yes	7	discourse	_	Lang=la
3	displosa	_	ADJ	_	Foreign=Yes	4	amod	_	Lang=la
4	sona	_	NOUN	_	Foreign=Yes	7	nsubj	_	Lang=la
5	quantum	_	ADV	_	Foreign=Yes	7	advmod	_	Lang=la
6	vesíca	_	NOUN	_	Foreign=Yes	7	obl	_	Lang=la
7	pepedi	_	VERB	_	Foreign=Yes	1	advcl	_	Lang=la
8	··	_	PUNCT	_	_	16	punct	_	_
9	⁊	_	CCONJ	_	Foreign=Yes	16	cc	_	Lang=la
10	fit	_	VERB	_	Foreign=Yes	16	advcl	_	Lang=la
11	pedo	_	NOUN	_	Foreign=Yes	10	nsubj	_	Lang=la
12	nomen	_	NOUN	_	Foreign=Yes	10	obj	_	Lang=la
13	animalis	_	NOUN	_	Foreign=Yes	12	nmod	_	Lang=la
14	ut	_	SCONJ	_	Foreign=Yes	16	mark	_	Lang=la
15	isidorus	_	PROPN	_	Foreign=Yes	16	nsubj	_	Lang=la
16	dicit	_	VERB	_	Foreign=Yes	7	advcl	_	Lang=la

~~~


