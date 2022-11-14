---
layout: base
title:  'Statistics of csubj:outer in UD_Belarusian-HSE'
udver: '2'
---

## Treebank Statistics: UD_Belarusian-HSE: Relations: `csubj:outer`

This relation is a language-specific subtype of <tt><a href="be_hse-dep-csubj.html">csubj</a></tt>.
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="be_hse-dep-csubj-pass.html">csubj:pass</a></tt>.

1 nodes (0%) are attached to their parents as `csubj:outer`.

1 instances of `csubj:outer` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.

The following 1 pairs of parts of speech are connected with `csubj:outer`: <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-VERB.html">VERB</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 csubj:outer	color:blue
1	-	-	PUNCT	PUNCT	_	2	punct	2:punct	_
2	Няма	няма	VERB	PRED	Polarity=Neg	0	root	0:root	_
3	сэнсу	сэнс	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	2	nsubj	2:nsubj	_
4	ў	у	ADP	IN	_	5	case	5:case	_
5	гэтым	гэта	PRON	DT	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing|PronType=Dem	6	obl	6:obl:у:loc	_
6	удзельнічаць	удзельнічаць	VERB	VB	Aspect=Imp|VerbForm=Inf|Voice=Act	2	csubj:outer	2:csubj:outer	_

~~~


