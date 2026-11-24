---
layout: base
title:  'Statistics of csubj:outer in UD_Ukrainian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-ParlaMint: Relations: `csubj:outer`

This relation is a language-specific subtype of <tt><a href="uk_parlamint-dep-csubj.html">csubj</a></tt>.

1 nodes (0%) are attached to their parents as `csubj:outer`.

1 instances of `csubj:outer` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 1 pairs of parts of speech are connected with `csubj:outer`: <tt><a href="uk_parlamint-pos-NUM.html">NUM</a></tt>-<tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 16 csubj:outer	color:blue
1	А	а	CCONJ	CCONJ	_	3	cc	_	_
2	тому	тому	ADV	ADV	_	3	advmod	_	_
3	закликаю	закликати	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	5	punct	_	_
5	будь	бути	VERB	VERB	Aspect=Imp|ExtPos=INTJ|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	3	parataxis	_	_
6	ласка	ласка	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	5	fixed	_	SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	5	punct	_	_
8	шлях	шлях	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	13	nsubj	_	_
9	у	у	ADP	ADP	Case=Gen	11	case	_	_
10	цього	цей	DET	DET	Case=Gen|Gender=Masc|Number=Sing|PronType=Dem	11	det	_	_
11	законопроекту	законопроект	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	13	nmod	_	_
12	тільки	тільки	PART	PART	_	13	advmod:emph	_	_
13	один	один	NUM	DET	Case=Nom|Gender=Masc|Number=Sing|NumType=Card	3	parataxis	_	_
14	–	–	PUNCT	PUNCT	_	13	punct	_	_
15	його	він	PRON	PRON	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	16	obj	_	_
16	відхилити	відхилити	VERB	VERB	Aspect=Perf|VerbForm=Inf	13	csubj:outer	_	SpaceAfter=No
17	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


