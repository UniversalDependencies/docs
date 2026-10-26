---
layout: base
title:  'Statistics of nmod in UD_Ottoman_Turkish-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-TueCL: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="ota_tuecl-dep-nmod-poss.html">nmod:poss</a></tt>.

16 nodes (2%) are attached to their parents as `nmod`.

16 instances of `nmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25.

The following 3 pairs of parts of speech are connected with `nmod`: <tt><a href="ota_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_tuecl-pos-NOUN.html">NOUN</a></tt> (13; 81% instances), <tt><a href="ota_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_tuecl-pos-PROPN.html">PROPN</a></tt> (2; 13% instances), <tt><a href="ota_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="ota_tuecl-pos-PRON.html">PRON</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod	color:blue
1	Peki	peki	INTJ	_	_	4	discourse	_	_
2	kütübḫānede	kütübḫāne	NOUN	_	Case=Loc|Number=Sing	3	nmod	_	_
3	kiler	ki	NOUN	_	Case=Nom|Number=Plur	4	nsubj	_	_
4	nerede	nere	PRON	_	PronType=Int	0	root	_	_
5	idi	i	AUX	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Past	4	cop	_	SpaceAfter=No
6	?	?	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod	color:blue
1	Elma	elma	NOUN	_	Case=Nom|Number=Sing	2	nmod	_	_
2	eşcārı	şecer	NOUN	_	Case=Nom|Gender=Fem|Number=Plur|Number[psor]=Sing|Person[psor]=3	11	nsubj	_	_
3	Nīsān	Nīsān	PROPN	_	Case=Nom|Number=Sing	6	nmod	_	SpaceAfter=No
4	-	-	PUNCT	_	_	3	punct	_	SpaceAfter=No
5	Mayıs	Mayıs	PROPN	_	Case=Nom|Number=Sing	6	nmod	_	_
6	aylarında	ay	NOUN	_	Case=Loc|Number=Plur|Number[psor]=Sing|Person[psor]=3	11	obl	_	_
7	şukūfe	şukūfe	NOUN	_	Case=Nom|Number=Sing	8	obj	_	_
8	açıp	aç	VERB	_	VerbForm=Conv	11	advcl	_	SpaceAfter=No
9	,	,	PUNCT	_	_	8	punct	_	_
10	müteḳābilen	müteḳābilen	ADJ	_	_	11	advmod	_	_
11	tozlaşır	tozlaş	VERB	_	Aspect=Hab|Evident=Fh|Mood=Gen|Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
12	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod	color:blue
1	Benüm	ben	PRON	_	Case=Gen|Number=Sing|Person=1|PronType=Prs	2	nmod:poss	_	_
2	babam	baba	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	6	nsubj	_	_
3	seniñ	sen	PRON	_	Case=Abl|Number=Sing|Person=2|PronType=Prs	4	nmod	_	_
4	kinden	ki	PRON	_	Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=2	6	obl	_	_
5	daḫa	daḫa	ADV	_	_	6	advmod	_	_
6	ʿālādur	ʿālā	ADJ	_	_	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


