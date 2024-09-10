---
layout: base
title:  'Statistics of nsubj:outer in UD_Turkish-GB'
udver: '2'
---

## Treebank Statistics: UD_Turkish-GB: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="tr_gb-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="tr_gb-dep-nsubj-cop.html">nsubj:cop</a></tt>.

2 nodes (0%) are attached to their parents as `nsubj:outer`.

2 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.

The following 1 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (2; 100% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 nsubj:outer	color:blue
1	Bir	bir	DET	_	Definite=Ind|PronType=Art	4	det	_	_
2	önemli	önemli	ADJ	_	_	4	amod	_	_
3	toplumsal	toplumsal	ADJ	_	_	4	amod	_	_
4	sorunumuz	sorun	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Plur|Person[psor]=1	7	nsubj:outer	_	_
5	da	de	ADV	_	_	4	advmod:emph	_	_
6	ailenin	aile	NOUN	_	Case=Gen|Number=Sing	7	nsubj	_	_
7	dağılması	dağıl	VERB	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3|VerbForm=Vnoun	0	root	_	_
8	dır	i	AUX	_	Mood=Gen|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
9	.	.	PUNCT	_	_	7	punct	_	_

~~~


