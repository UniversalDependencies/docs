---
layout: base
title:  'Statistics of vocative in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `vocative`

This relation is universal.

152 nodes (0%) are attached to their parents as `vocative`.

83 instances of `vocative` (55%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.97368421052632.

The following 21 pairs of parts of speech are connected with `vocative`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (52; 34% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (28; 18% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (17; 11% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (8; 5% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (6; 4% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (5; 3% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (5; 3% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (4; 3% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (4; 3% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (4; 3% instances), <tt><a href="en_gum-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (3; 2% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (3; 2% instances), <tt><a href="en_gum-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="en_gum-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-AUX.html">AUX</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 vocative	color:blue
1	What	what	PRON	WP	PronType=Int	4	obj	4:obj	Discourse=topic-question:1->2:1:lex-indwd-1+syn-sbinv-2+grf-qst-6|XML=<w>
2	'd	do	AUX	VBD	Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin	4	aux	4:aux	XML=</w>
3	you	you	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	4	nsubj	4:nsubj	Entity=(1-person-acc:com-cf1-1-ana)
4	do	do	VERB	VB	VerbForm=Inf	0	root	0:root	Cxn=Interrogative-WHInfo-Direct
5	Sabrina	Sabrina	PROPN	NNP	Number=Sing	4	vocative	4:vocative	Entity=(1-person-giv:act-cf1-1-coref)|SpaceAfter=No
6	?	?	PUNCT	.	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 vocative	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	2:nsubj	Discourse=restatement-repetition_m:146->142:2:ref-prs-683-690,702+sem-synym-685-690,704-707+sem-lxchn-688,705|Entity=(5-person-giv:inact-cf1-1-ana)
2	got	get	VERB	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	0:root	_
3	big	big	ADJ	JJ	Degree=Pos	4	amod	4:amod	Entity=(62-person-giv:inact-cf2-4-coref
4	armies	army	NOUN	NNS	Number=Plur	2	obj	2:obj	MSeg=arm-ie-s|SpaceAfter=No
5	,	,	PUNCT	,	_	6	punct	6:punct	_
6	buddy	buddy	NOUN	NN	Number=Sing	2	vocative	2:vocative	Entity=(2-person-giv:inact-cf3-1-coref)62)|MSeg=budd-y|SpaceAfter=No
7	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 vocative	color:blue
1	General	General	PROPN	NNP	Number=Sing	6	vocative	6:vocative	Discourse=topic-question:43->45:1:grf-qst-417|Entity=(7-person-giv:act-cf2*-1-coref-Elizabeth_Prelogar)|SpaceAfter=No
2	,	,	PUNCT	,	_	1	punct	1:punct	_
3	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	6:cop	_
4	this	this	PRON	DT	Number=Sing|PronType=Dem	6	nsubj	6:nsubj	Entity=(44-abstract-giv:inact-cf1-1-ana)
5	a	a	DET	DT	Definite=Ind|PronType=Art	6	det	6:det	Entity=(73-event-new-cf3-2-coref
6	waiver	waiver	NOUN	NN	Number=Sing	0	root	0:root	Cxn=Interrogative-Polar-Direct|Entity=73)|SpaceAfter=No
7	,	,	PUNCT	,	_	12	punct	12:punct	_
8	or	or	CCONJ	CC	_	12	cc	12:cc	Discourse=joint-disjunction_m:44->43:0:dm-or-412
9	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	12:cop	_
10	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	12	nsubj	12:nsubj	Entity=(44-abstract-giv:act-cf1-1-ana)
11	a	a	DET	DT	Definite=Ind|PronType=Art	12	det	12:det	Entity=(74-event-new-cf4-2-coref
12	modification	modification	NOUN	NN	Number=Sing	6	conj	6:conj:or	Entity=74)|MSeg=mod-ification|SpaceAfter=No
13	?	?	PUNCT	.	_	6	punct	6:punct	_

~~~


