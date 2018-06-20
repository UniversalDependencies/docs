---
layout: base
title:  'Statistics of nmod:poss in UD_Tagalog-TRG'
udver: '2'
---

## Treebank Statistics: UD_Tagalog-TRG: Relations: `nmod:poss`

This relation is a language-specific subtype of .

3 nodes (1%) are attached to their parents as `nmod:poss`.

2 instances of `nmod:poss` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="tl_trg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tl_trg-pos-PRON.html">PRON</a></tt> (2; 67% instances), <tt><a href="tl_trg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tl_trg-pos-ADP.html">ADP</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nmod:poss	color:blue
1	Isda	isda	NOUN	NN	Number=Sing	0	root	_	_
2	ang	ang	DET	DT	Case=Abs|Definite=Ind	3	det	_	_
3	pagkain	pagkain	NOUN	NN	Number=Sing	1	nsubj	_	_
4	niya	ng	PRON	PRP	Case=Erg|Poss=Yes	3	nmod:poss	_	SpaceAfter=No
5	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	Sa	sa	ADP	IN	Case=Dat|Poss=Yes	2	nmod:poss	_	_
2	istudyante	istudyante	NOUN	NN	Number=Sing	0	root	_	_
3	ang	ang	DET	DT	Case=Abs|Definite=Def	4	det	_	_
4	libro	libro	NOUN	NN	Number=Sing	2	nsubj	_	SpaceAfter=No
5	.	.	PUNCT	.	_	2	punct	_	_

~~~


