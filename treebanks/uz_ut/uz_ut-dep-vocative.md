---
layout: base
title:  'Statistics of vocative in UD_Uzbek-UT'
udver: '2'
---

## Treebank Statistics: UD_Uzbek-UT: Relations: `vocative`

This relation is universal.

5 nodes (0%) are attached to their parents as `vocative`.

3 instances of `vocative` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.4.

The following 3 pairs of parts of speech are connected with `vocative`: <tt><a href="uz_ut-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt> (3; 60% instances), <tt><a href="uz_ut-pos-INTJ.html">INTJ</a></tt>-<tt><a href="uz_ut-pos-PROPN.html">PROPN</a></tt> (1; 20% instances), <tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 vocative	color:blue
1	Lekin	lekin	CCONJ	_	_	6	cc	_	_
2	men	men	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
3	ham	ham	ADV	_	_	6	advmod	_	_
4	maqola	maqola	NOUN	_	Case=Nom|Number=Sing	5	obj	_	_
5	yozishga	yoz	VERB	_	Case=Dat|VerbForm=Vnoun	6	xcomp	_	_
6	yo‘qman	yo‘q	VERB	_	Number=Sing|Person=1|Polarity=Neg	0	root	_	SpaceAfter=No
7	,	,	PUNCT	_	_	8	punct	_	_
8	birodar	birodar	NOUN	_	Case=Nom|Number=Sing	6	vocative	_	SpaceAfter=No
9	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 vocative	color:blue
1	Salom	salom	INTJ	_	_	0	root	_	SpaceAfter=No
2	,	,	PUNCT	_	_	3	punct	_	_
3	Hamrobuvi	Hamrobuvi	PROPN	_	Case=Nom|Number=Sing	1	vocative	_	_
4	xola	xola	NOUN	_	Case=Nom|Number=Sing	3	flat	_	SpaceAfter=No
5	,	,	PUNCT	_	_	3	punct	_	_
6	yaxshimisiz	yaxshi	ADJ	_	_	1	parataxis	_	SpaceAfter=No
7	?	?	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 vocative	color:blue
1	Men	men	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
2	sizga	siz	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	3	iobj	_	_
3	aytsam	ayt	VERB	_	Mood=Cnd|Number=Sing|Person=1|Tense=Fut	9	advcl	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	mulla	mulla	NOUN	_	Case=Nom|Number=Sing	9	vocative	_	_
6	Norqo‘zi	Norqo‘zi	PROPN	_	Case=Nom|Number=Sing	5	flat	_	SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	_	_
8	gap	gap	NOUN	_	Case=Nom|Number=Sing	9	nsubj	_	_
9	paranjida	paranji	NOUN	_	Case=Loc|Number=Sing	0	root	_	_
10	emas	emas	AUX	_	Polarity=Neg	9	aux	_	SpaceAfter=No
11	.	.	PUNCT	_	_	9	punct	_	_

~~~


