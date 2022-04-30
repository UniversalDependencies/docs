---
layout: base
title:  'Statistics of aux:nec in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `aux:nec`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-aux.html">aux</a></tt>.
There are also 4 other language-specific subtypes of `aux`: <tt><a href="mdf_jr-dep-aux-cnd.html">aux:cnd</a></tt>, <tt><a href="mdf_jr-dep-aux-neg.html">aux:neg</a></tt>, <tt><a href="mdf_jr-dep-aux-opt.html">aux:opt</a></tt>, <tt><a href="mdf_jr-dep-aux-q.html">aux:q</a></tt>.

8 nodes (0%) are attached to their parents as `aux:nec`.

8 instances of `aux:nec` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.75.

The following 1 pairs of parts of speech are connected with `aux:nec`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (8; 100% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 aux:nec	color:blue
1	Ашень	аш	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Polarity=Neg|Tense=Past	2	aux:neg	_	_
2	кеподев	кеподевомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=2|Valency=1	0	root	_	_
3	теест	сон	PRON	Pron	Case=Dat|Number=Plur|Person=3|PronType=Prs|Variant=Short	2	obl:agent	_	SpaceAfter=No
4	,	,	PUNCT	CLB	_	6	punct	_	_
5	эрявсь	эрявомс	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	6	aux:nec	_	_
6	лездомс	лездомс	VERB	V	Valency=1|VerbForm=Inf	2	conj	_	SpaceAfter=No
7	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


