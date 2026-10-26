---
layout: base
title:  'Statistics of compound:svc in UD_Uzbek-UzUDT'
udver: '2'
---

## Treebank Statistics: UD_Uzbek-UzUDT: Relations: `compound:svc`

This relation is a language-specific subtype of <tt><a href="uz_uzudt-dep-compound.html">compound</a></tt>.
There are also 2 other language-specific subtypes of `compound`: <tt><a href="uz_uzudt-dep-compound-lvc.html">compound:lvc</a></tt>, <tt><a href="uz_uzudt-dep-compound-redup.html">compound:redup</a></tt>.

8 nodes (0%) are attached to their parents as `compound:svc`.

8 instances of `compound:svc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `compound:svc`: <tt><a href="uz_uzudt-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_uzudt-pos-VERB.html">VERB</a></tt> (7; 88% instances), <tt><a href="uz_uzudt-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_uzudt-pos-ADJ.html">ADJ</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 compound:svc	color:blue
1	shuning	shu	PRON	P	Case=Gen|ExtPos=ADP|PronType=Dem	8	obl	_	_
2	bilan	bilan	ADP	R	_	1	fixed	_	_
3	hasharotlarning	hasharot	NOUN	N	Case=Gen|Number=Plur	5	nmod:poss	_	_
4	barcha	barcha	DET	D	PronType=Tot	5	det	_	_
5	turi	tur	NOUN	N	Case=Nom	8	nsubj	_	_
6	muzlab	muzla	VERB	V	VerbForm=Conv	8	advcl	_	_
7	oʻlib	oʻl	VERB	V	VerbForm=Conv	8	compound:svc	_	_
8	ketdi	ket	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
9	.	.	PUNCT	Y	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 compound:svc	color:blue
1	biz	biz	PRON	P	Case=Nom|Number=Plur|Person=1|PronType=Prs	6	nsubj	_	_
2	turmushda	turmush	NOUN	N	Case=Loc	6	obl	_	_
3	har	har	DET	P	PronType=Tot	5	det	_	_
4	xil	xil	ADJ	A	_	5	amod	_	_
5	muammolarga	muammo	NOUN	N	Case=Dat|Number=Plur	6	obl	_	_
6	duch	duch	ADJ	A	_	7	compound:svc	_	_
7	kelib	kel	VERB	V	VerbForm=Conv	8	advcl	_	_
8	turamiz	tur	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
9	.	.	PUNCT	PUNCT	_	8	punct	_	_

~~~


