---
layout: base
title:  'Statistics of vocative in UD_English-GENTLE'
udver: '2'
---

## Treebank Statistics: UD_English-GENTLE: Relations: `vocative`

This relation is universal.

8 nodes (0%) are attached to their parents as `vocative`.

4 instances of `vocative` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.625.

The following 6 pairs of parts of speech are connected with `vocative`: <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (2; 25% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt> (2; 25% instances), <tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (1; 13% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-PRON.html">PRON</a></tt> (1; 13% instances), <tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt> (1; 13% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 vocative	color:blue
1	1	1	NUM	CD	NumForm=Digit|NumType=Card	2	nummod	2:nummod	Discourse=restatement-partial:47->41:3|Entity=(46-time-giv:inact-cf2-2-coref
2	week	week	NOUN	NN	Number=Sing	0	root	0:root	Entity=46)
3	asshole	asshole	NOUN	NN	Number=Sing	2	vocative	2:vocative	Entity=(1-person-giv:act-cf1*-1-coref)|SpaceAfter=No
4	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 7 vocative	color:blue
1	hesitating	hesitate	VERB	VBG	VerbForm=Ger	10	advcl	10:advcl	Discourse=mode-manner:31->36:4
2	then	then	ADV	RB	PronType=Dem	1	advmod	1:advmod	_
3	no	no	ADV	RB	Degree=Pos|Polarity=Neg	4	advmod	4:advmod	_
4	longer	long	ADV	RBR	Degree=Cmp	1	advmod	1:advmod	SpaceAfter=No
5	,	,	PUNCT	,	_	1	punct	1:punct	_
6	"	''	PUNCT	``	_	7	punct	7:punct	Discourse=adversative-concession:32->36:3|SpaceAfter=No
7	Sir	Sir	PROPN	NNP	Number=Sing	21	vocative	21:vocative	Entity=(7-person-giv:inact-cf2-1-coref)|SpaceAfter=No
8	,	,	PUNCT	,	_	7	punct	7:punct	SpaceAfter=No
9	"	''	PUNCT	''	_	7	punct	7:punct	_
10	said	say	VERB	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	21	parataxis	21:parataxis	Discourse=attribution-positive:33->34:0
11	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	10	nsubj	10:nsubj	Entity=(3-person-giv:act-cf1*-1-ana)|SpaceAfter=No
12	,	,	PUNCT	,	_	10	punct	10:punct	_
13	"	''	PUNCT	``	_	10	punct	10:punct	Discourse=same-unit_m:34->32:0|SpaceAfter=No
14	or	or	CCONJ	CC	_	15	cc	15:cc	_
15	Madam	Madam	PROPN	NNP	Number=Sing	7	conj	7:conj:or|21:vocative	Entity=(7-person-giv:act-cf2-1-coref)|SpaceAfter=No
16	,	,	PUNCT	,	_	15	punct	15:punct	_
17	truly	truly	ADV	RB	Degree=Pos	21	advmod	21:advmod	_
18	your	your	PRON	PRP$	Case=Gen|Number=Sing|Person=2|Poss=Yes|PronType=Prs	19	nmod:poss	19:nmod:poss	Entity=(30-abstract-new-cf3-2-sgl(7-person-giv:act-cf2-1-ana)
19	forgiveness	forgiveness	NOUN	NN	Number=Sing	21	obj	21:obj	Entity=30)
20	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	21	nsubj	21:nsubj	Entity=(3-person-giv:act-cf1*-1-ana)
21	implore	implore	VERB	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	0:root	SpaceAfter=No
22	;	;	PUNCT	:	_	21	punct	21:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 vocative	color:blue
1	More	more	ADJ	JJR	Degree=Cmp	0	root	0:root	Discourse=joint-other_m:28->4:2
2	at	at	ADP	IN	_	3	case	3:case	_
3	true	true	ADJ	JJ	Degree=Pos	1	obl	1:obl:at	Entity=(49-abstract-new-cf2-1-sgl)|SpaceAfter=No|XML=<ref target:::"https://en.wiktionary.org/wiki/true"></ref>
4	,	,	PUNCT	,	_	5	punct	5:punct	_
5	tree	tree	NOUN	NN	Number=Sing	1	vocative	1:vocative	Entity=(50-abstract-new-cf1-1-sgl)|SpaceAfter=No|XML=<ref target:::"https://en.wiktionary.org/wiki/tree"></ref>
6	.	.	PUNCT	.	_	1	punct	1:punct	_

~~~


