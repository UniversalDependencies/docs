---
layout: base
title:  'Statistics of nsubj:outer in UD_Ukrainian-Zhelekhivka'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-Zhelekhivka: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="uk_zhelekhivka-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="uk_zhelekhivka-dep-nsubj-pass.html">nsubj:pass</a></tt>.

2 nodes (0%) are attached to their parents as `nsubj:outer`.

1 instances of `nsubj:outer` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.5.

The following 1 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="uk_zhelekhivka-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_zhelekhivka-pos-NOUN.html">NOUN</a></tt> (2; 100% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 nsubj:outer	color:blue
1	Одна	один	NUM	NUM	Case=Nom|Gender=Fem|Number=Sing|NumType=Card	3	nummod	_	TokenRange=3632:3636
2	тільки	тільки	PART	PART	_	1	discourse	_	TokenRange=3637:3643
3	галузка	галузка	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	7	nsubj	_	TokenRange=3644:3651
4	цьої	цей	DET	DET	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	5	det	_	TokenRange=3652:3656
5	суспільности	суспільність	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	3	nmod	_	TokenRange=3657:3669
6	не	не	PART	PART	Polarity=Neg	7	advmod:neg	_	TokenRange=3670:3672
7	відріклась	відріктися	VERB	VERB	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Reflex=Yes|Tense=Past|VerbForm=Fin	0	root	_	TokenRange=3673:3683
8	Драгоманова	Драгоманов	PROPN	PROPN	Animacy=Anim|Case=Gen|Gender=Masc|NameType=Sur|Number=Sing	7	obj	_	NameType=Sur|SpaceAfter=No|TokenRange=3684:3695
9	,	,	PUNCT	PUNCT	_	11	punct	_	TokenRange=3695:3696
10	—	—	PUNCT	PUNCT	_	11	punct	_	TokenRange=3697:3698
11	молодіж	молодіж	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	7	nsubj:outer	_	SpaceAfter=No|TokenRange=3699:3706
12	.	.	PUNCT	PUNCT	_	7	punct	_	TokenRange=3706:3707

~~~


