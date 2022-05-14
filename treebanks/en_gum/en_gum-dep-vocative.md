---
layout: base
title:  'Statistics of vocative in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `vocative`

This relation is universal.

78 nodes (0%) are attached to their parents as `vocative`.

44 instances of `vocative` (56%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.85897435897436.

The following 16 pairs of parts of speech are connected with `vocative`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (20; 26% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (18; 23% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (7; 9% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (4; 5% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (4; 5% instances), <tt><a href="en_gum-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (4; 5% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (4; 5% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (3; 4% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (3; 4% instances), <tt><a href="en_gum-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (3; 4% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (3; 4% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 vocative	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	2:nsubj	Discourse=restatement-repetition_m:145->141:2|Entity=(5-person-giv:inact-cf1-1-ana)
2	got	get	VERB	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	0:root	_
3	big	big	ADJ	JJ	Degree=Pos	4	amod	4:amod	Entity=(62-person-giv:inact-cf2-4-coref
4	armies	army	NOUN	NNS	Number=Plur	2	obj	2:obj	SpaceAfter=No
5	,	,	PUNCT	,	_	6	punct	6:punct	_
6	buddy	buddy	NOUN	NN	Number=Sing	2	vocative	2:vocative	Entity=(2-person-giv:inact-cf3-1-coref)62)|SpaceAfter=No
7	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 vocative	color:blue
1	What	what	PRON	WP	PronType=Int	4	obj	4:obj	Discourse=topic-question:1->2:1|XML=<w>
2	'd	do	AUX	VBD	Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin	4	aux	4:aux	XML=</w>
3	you	you	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	4	nsubj	4:nsubj	Entity=(1-person-acc:com-cf1-1-ana)
4	do	do	VERB	VB	VerbForm=Inf	0	root	0:root	_
5	Sabrina	Sabrina	PROPN	NNP	Number=Sing	4	vocative	4:vocative	Entity=(1-person-giv:act-cf1-1-coref)|SpaceAfter=No
6	?	?	PUNCT	.	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 vocative	color:blue
1	Way	way	NOUN	NN	Number=Sing	0	root	0:root	Discourse=joint-list_m:250->249:0
2	to	to	PART	TO	_	3	mark	3:mark	_
3	go	go	VERB	VB	VerbForm=Inf	1	acl	1:acl:to	_
4	Carolyn	Carolyn	PROPN	NNP	Number=Sing	1	vocative	1:vocative	Entity=(66-person-giv:inact-cf1-1-coref)|SpaceAfter=No
5	.	.	PUNCT	.	_	1	punct	1:punct	_

~~~


