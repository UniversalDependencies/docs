---
layout: base
title:  'Statistics of xcomp in UD_Komi_Permyak-UH'
udver: '2'
---

## Treebank Statistics: UD_Komi_Permyak-UH: Relations: `xcomp`

This relation is universal.
There are 1 language-specific subtypes of `xcomp`: <tt><a href="koi_uh-dep-xcomp-ds.html">xcomp:ds</a></tt>.

8 nodes (1%) are attached to their parents as `xcomp`.

6 instances of `xcomp` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5.

The following 2 pairs of parts of speech are connected with `xcomp`: <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-VERB.html">VERB</a></tt> (7; 88% instances), <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp	color:blue
1	Сія	сія	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	GTtags=Pers,Sg3,Nom
2	пондыліс	пондывны	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,Sg3
3	чапкыны	чапкыны	VERB	_	VerbForm=Inf	2	xcomp	_	GTtags=Inf
4	куритны	куритны	VERB	_	VerbForm=Inf	3	xcomp	_	GTtags=Inf
5	да	да	CCONJ	_	_	6	cc	_	_
6	юны	юны	VERB	_	VerbForm=Inf	4	conj	_	GTtags=Inf|SpaceAfter=No
7	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp	color:blue
1	Петя	Петя	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing	2	nsubj	_	GTtags=Prop,Sem/Ant-Mal,Sg,Nom
2	кольччис	кольччыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,Sg3
3	керкутöг	керку	NOUN	N	Animacy=Inan|Case=Car|Number=Sing	2	xcomp	_	GTtags=Sem/Inanim,Sg,Car|SpaceAfter=No
4	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


