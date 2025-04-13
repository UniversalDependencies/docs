---
layout: base
title:  'Statistics of aux in UD_Ukrainian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-ParlaMint: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="uk_parlamint-dep-aux-pass.html">aux:pass</a></tt>.

201 nodes (0%) are attached to their parents as `aux`.

151 instances of `aux` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.27860696517413.

The following 2 pairs of parts of speech are connected with `aux`: <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-AUX.html">AUX</a></tt> (194; 97% instances), <tt><a href="uk_parlamint-pos-ADV.html">ADV</a></tt>-<tt><a href="uk_parlamint-pos-AUX.html">AUX</a></tt> (7; 3% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 aux	color:blue
1	Шановні	шановний	ADJ	ADJ	Case=Voc|Degree=Pos|Number=Plur	2	amod	_	_
2	колеги	колега	NOUN	NOUN	Animacy=Anim|Case=Voc|Gender=Fem,Masc|Number=Plur	8	vocative	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	2	punct	_	_
4	ще	ще	ADV	ADV	_	5	advmod	_	_
5	раз	раз	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	8	parataxis	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	5	punct	_	_
7	будемо	бути	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin	8	aux	_	_
8	обговорювати	обговорювати	VERB	VERB	Aspect=Imp|VerbForm=Inf	0	root	_	_
9	це	цей	DET	DET	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	10	det	_	_
10	питання	питання	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	8	obj	_	SpaceAfter=No
11	?	?	PUNCT	PUNCT	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 aux	color:blue
1	Друге	другий	NOUN	NUM	Case=Nom|Gender=Neut|Number=Sing|NumType=Ord	0	root	_	SpaceAfter=No
2	:	:	PUNCT	PUNCT	_	4	punct	_	_
3	якщо	якщо	SCONJ	SCONJ	_	4	mark	_	_
4	лунають	лунати	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	10	advcl	_	_
5	такі	такий	DET	DET	Case=Nom|Number=Plur|PronType=Dem	7	det	_	_
6	серйозні	серйозний	ADJ	ADJ	Case=Nom|Degree=Pos|Number=Plur	7	amod	_	_
7	звинувачення	звинувачення	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Plur	4	nsubj	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	4	punct	_	_
9	то	то	SCONJ	PART	_	10	mark	_	_
10	потрібно	потрібно	ADV	ADV	Degree=Pos	1	parataxis	_	_
11	було	бути	AUX	AUX	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	10	cop	_	_
12	б	б	AUX	AUX	Mood=Cnd	10	aux	_	_
13	побачити	побачити	VERB	VERB	Aspect=Perf|VerbForm=Inf	10	csubj	_	_
14	факти	факт	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	13	obj	_	SpaceAfter=No
15	.	.	PUNCT	PUNCT	_	10	punct	_	_

~~~


