---
layout: base
title:  'Statistics of conj in UD_Uzbek-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Uzbek-TueCL: Relations: `conj`

This relation is universal.

25 nodes (3%) are attached to their parents as `conj`.

25 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.08.

The following 8 pairs of parts of speech are connected with `conj`: <tt><a href="uz_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_tuecl-pos-VERB.html">VERB</a></tt> (12; 48% instances), <tt><a href="uz_tuecl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="uz_tuecl-pos-PROPN.html">PROPN</a></tt> (4; 16% instances), <tt><a href="uz_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uz_tuecl-pos-ADJ.html">ADJ</a></tt> (3; 12% instances), <tt><a href="uz_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_tuecl-pos-NOUN.html">NOUN</a></tt> (2; 8% instances), <tt><a href="uz_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uz_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="uz_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_tuecl-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="uz_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_tuecl-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="uz_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_tuecl-pos-ADJ.html">ADJ</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 conj	color:blue
1	U	u	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
2	chekish	chek	VERB	_	Case=Nom|VerbForm=Vnoun	5	xcomp	_	_
3	va	va	CCONJ	_	_	4	cc	_	_
4	ichishni	ich	VERB	_	Case=Acc|VerbForm=Vnoun	2	conj	_	_
5	tashlashga	tashla	VERB	_	Case=Dat|VerbForm=Vnoun	6	xcomp	_	_
6	harakat	harakat	NOUN	_	Case=Nom|Number=Sing	7	compound:lvc	_	_
7	qildi	qil	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 conj	color:blue
1	Meri	Meri	PROPN	_	Case=Nom|Number=Sing	11	nsubj	_	_
2	bronza	bronza	NOUN	_	Case=Nom|Number=Sing	9	amod	_	SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	_
4	Piter	Piter	PROPN	_	Case=Nom|Number=Sing	1	conj	_	_
5	kumush	kumush	NOUN	_	Case=Nom|Number=Sing	2	conj	_	SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	_	_
7	Jeyn	Jeyn	PROPN	_	Case=Nom|Number=Sing	1	conj	_	_
8	oltin	oltin	NOUN	_	Case=Nom|Number=Sing	2	conj	_	_
9	medalni	medal	NOUN	_	Case=Acc|Number=Sing	11	obj	_	_
10	qoʻlga	qoʻl	NOUN	_	Case=Dat|Number=Sing	11	compound:lvc	_	_
11	kiritdi	kir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
12	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 conj	color:blue
1	Iguazu	Iguazu	PROPN	_	Case=Nom|Number=Sing	3	nsubj	_	_
2	katta	katta	ADJ	_	_	3	amod	_	_
3	mamlakatmi	mamlakat	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
4	yoki	yoki	CCONJ	_	_	5	cc	_	_
5	kichik	kichik	ADJ	_	_	2	conj	_	SpaceAfter=No
6	?	?	PUNCT	_	_	3	punct	_	_

~~~


