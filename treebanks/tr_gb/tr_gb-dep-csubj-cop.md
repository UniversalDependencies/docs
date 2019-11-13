---
layout: base
title:  'Statistics of csubj:cop in UD_Turkish-GB'
udver: '2'
---

## Treebank Statistics: UD_Turkish-GB: Relations: `csubj:cop`

This relation is a language-specific subtype of <tt><a href="tr_gb-dep-csubj.html">csubj</a></tt>.

54 nodes (0%) are attached to their parents as `csubj:cop`.

52 instances of `csubj:cop` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.62962962962963.

The following 8 pairs of parts of speech are connected with `csubj:cop`: <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-VERB.html">VERB</a></tt> (30; 56% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-VERB.html">VERB</a></tt> (15; 28% instances), <tt><a href="tr_gb-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_gb-pos-VERB.html">VERB</a></tt> (4; 7% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="tr_gb-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_gb-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 csubj:cop	color:blue
1	Sorun	sorun	NOUN	_	Case=Nom|Number=Sing	2	obj	_	_
2	yaratacağı	yarat	VERB	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3|Tense=Fut|VerbForm=Part	3	csubj:cop	_	_
3	belli	belli	ADJ	_	Case=Nom|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
4	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 csubj:cop	color:blue
1	Kendi	kendi	PRON	_	Case=Nom|Number=Sing|Reflex=Yes	2	nmod	_	_
2	fikri	fikir	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	0	root	_	_
3	ydi	i	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	cop	_	_
4	Ahmet’in	Ahmet	PROPN	_	Case=Gen|Number=Sing	2	nmod	_	_
5	mobilyaları	mobilya	NOUN	_	Case=Acc|Number=Plur	6	obj	_	_
6	değiştirmek	değiş	VERB	_	Case=Nom|Number=Sing|VerbForm=Vnoun|Voice=Cau	2	csubj:cop	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 csubj:cop	color:blue
1	Bildiğim	bil	VERB	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1|Tense=Past|VerbForm=Part	2	csubj:cop	_	_
2	şu	şu	PRON	_	Case=Nom|Number=Sing	0	root	_	_
3	ki	ki	SCONJ	_	_	8	mark	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	herkesin	herkes	PRON	_	Case=Gen|Number=Sing|Person=3	8	nsubj	_	_
6	tatile	tatil	NOUN	_	Case=Dat|Number=Sing	8	obl	_	_
7	ihtiyacı	ihtiyaç	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	compound	_	_
8	var	var	ADJ	_	_	2	parataxis	_	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


