---
layout: base
title:  'Statistics of parataxis in UD_Uzbek-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Uzbek-TueCL: Relations: `parataxis`

This relation is universal.

10 nodes (1%) are attached to their parents as `parataxis`.

10 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.8.

The following 5 pairs of parts of speech are connected with `parataxis`: <tt><a href="uz_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_tuecl-pos-VERB.html">VERB</a></tt> (6; 60% instances), <tt><a href="uz_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uz_tuecl-pos-ADJ.html">ADJ</a></tt> (1; 10% instances), <tt><a href="uz_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uz_tuecl-pos-VERB.html">VERB</a></tt> (1; 10% instances), <tt><a href="uz_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_tuecl-pos-VERB.html">VERB</a></tt> (1; 10% instances), <tt><a href="uz_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="uz_tuecl-pos-ADJ.html">ADJ</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 parataxis	color:blue
1	U	u	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	mashina	mashina	NOUN	_	Case=Nom|Number=Sing	3	obj	_	_
3	oldi	ol	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	_
5	lekin	lekin	CCONJ	_	_	9	cc	_	_
6	ukasi	uka	NOUN	_	Case=Nom|Number=Sing|Poss=Yes	9	nsubj	_	_
7	faqat	faqat	ADV	_	_	9	advmod	_	_
8	velosiped	velosiped	NOUN	_	Case=Nom|Number=Sing	9	obj	_	_
9	oldi	ol	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	3	parataxis	_	SpaceAfter=No
10	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 parataxis	color:blue
1	Katta	katta	ADJ	_	_	2	amod	_	_
2	uydagi	uy	NOUN	_	Case=Loc|Number=Sing	3	obl	_	_
3	bolaning	bola	NOUN	_	Case=Gen|Number=Sing	4	nmod:poss	_	_
4	sochi	soch	NOUN	_	Case=Nom|Number=Sing|Poss=Yes	5	nsubj	_	_
5	sargʻish	sargʻish	ADJ	_	_	0	root	_	SpaceAfter=No
6	,	,	PUNCT	_	_	8	punct	_	_
7	kichik	kichik	ADJ	_	_	8	amod	_	_
8	uydaginiki	uy	NOUN	_	Case=Loc|Number=Sing	9	nsubj	_	_
9	jigarrang	jigarrang	ADJ	_	_	5	parataxis	_	SpaceAfter=No
10	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 parataxis	color:blue
1	Buning	bu	PRON	_	Case=Gen|Number=Sing|PronType=Dem	2	nmod:poss	_	_
2	koʻki	koʻk	ADJ	_	_	3	nsubj	_	_
3	chiroyliroq	chiroyli	ADJ	_	Degree=Cmp	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	menga	men	PRON	_	Case=Dat|Number=Sing	8	obl	_	_
6	koʻkini	koʻk	NOUN	_	Case=Acc|Number=Sing|Poss=Yes	8	obj	_	_
7	bera	ber	VERB	_	VerbForm=Conv	8	compound	_	_
8	olasanmi	ol	VERB	_	Mood=Int|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	parataxis	_	SpaceAfter=No
9	?	?	PUNCT	_	_	8	punct	_	_

~~~


