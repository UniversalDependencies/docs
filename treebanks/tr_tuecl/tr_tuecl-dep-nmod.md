---
layout: base
title:  'Statistics of nmod in UD_Turkish-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Turkish-TueCL: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="tr_tuecl-dep-nmod-poss.html">nmod:poss</a></tt>.

17 nodes (2%) are attached to their parents as `nmod`.

17 instances of `nmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.23529411764706.

The following 3 pairs of parts of speech are connected with `nmod`: <tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt> (14; 82% instances), <tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tuecl-pos-PROPN.html">PROPN</a></tt> (2; 12% instances), <tt><a href="tr_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_tuecl-pos-PRON.html">PRON</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod	color:blue
1	O	o	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	araba	araba	NOUN	_	Case=Nom|Number=Sing	3	obj	_	_
3	aldı	al	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
4	ama	ama	CCONJ	_	_	6	cc	_	_
5	erkek	erkek	NOUN	_	Case=Nom|Number=Sing	6	nmod	_	_
6	kardeşi	kardeş	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	3	conj	_	_
7	sadece	sadece	ADV	_	_	8	advmod	_	_
8	bisiklet	bisiklet	NOUN	_	Case=Nom|Number=Sing	6	orphan	_	SpaceAfter=No
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod	color:blue
1	Elma	elma	NOUN	_	Case=Nom|Number=Sing	2	nmod	_	_
2	ağaçları	ağaç	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=3	11	nsubj	_	_
3	Nisan	Nisan	PROPN	_	Case=Nom|Number=Sing	6	nmod	_	SpaceAfter=No
4	-	-	PUNCT	_	_	3	punct	_	SpaceAfter=No
5	Mayıs	Mayıs	PROPN	_	Case=Nom|Number=Sing	6	nmod	_	_
6	aylarında	ay	NOUN	_	Case=Loc|Number=Plur|Number[psor]=Sing|Person[psor]=3	11	obl	_	_
7	çiçek	çiçek	NOUN	_	Case=Nom|Number=Sing	8	obj	_	_
8	açıp	aç	VERB	_	VerbForm=Conv	11	advcl	_	SpaceAfter=No
9	,	,	PUNCT	_	_	8	punct	_	_
10	karşılıklı	karşılıklı	ADJ	_	_	11	advmod	_	_
11	tozlaşır	tozlaş	VERB	_	Aspect=Hab|Evident=Fh|Mood=Gen|Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
12	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod	color:blue
1	Benim	ben	PRON	_	Case=Gen|Number=Sing|Person=1|PronType=Prs	2	nmod:poss	_	_
2	babam	baba	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	6	nsubj	_	_
3	senin	sen	PRON	_	Case=Abl|Number=Sing|Person=2|PronType=Prs	4	nmod	_	_
4	kinden	ki	PRON	_	Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=2	6	obl	_	_
5	daha	daha	ADV	_	_	6	advmod	_	_
6	harika	harika	ADJ	_	_	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


