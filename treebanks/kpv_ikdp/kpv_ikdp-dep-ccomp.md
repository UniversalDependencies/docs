---
layout: base
title:  'Statistics of ccomp in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Relations: `ccomp`

This relation is universal.

12 nodes (1%) are attached to their parents as `ccomp`.

12 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.

The following 2 pairs of parts of speech are connected with `ccomp`: <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt> (11; 92% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 ccomp	color:blue
1	Ме	ме	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	GTtags=Pers,Sg1,Nom
2	любита	любитны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres	0	root	_	GTtags=Ind,Prs,Sg1
3	фотояс	фото	NOUN	N	Case=Nom|Number=Plur	4	obj	_	GTtags=Pl,Nom
4	вӧчны	вӧчны	VERB	V	VerbForm=Inf	2	ccomp	_	GTtags=Inf|SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	6	punct	_	_
6	лыддьысьны	лыддьысьны	VERB	V	VerbForm=Inf	2	ccomp	_	GTtags=Refl,Inf
7	мыйке	мыйкӧ	PRON	Pron	Case=Nom|Definite=Ind|Derivation=Ko|Number=Sing|PronType=Ind	8	det	_	GTtags=Indef,Indef,Sg,Nom,Der/кӧ
8	выльторъяс	выльтор	NOUN	N	Case=Nom|Number=Plur	6	obj	_	GTtags=Pl,Nom|SpaceAfter=No
9	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 ccomp	color:blue
1	И	и	CCONJ	CC	_	2	cc	_	_
2	заводиті	заводитны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,Err/Dial,Sg3
3	сіес	сійӧ	PRON	Pron	Case=Acc|Number=Sing|Person=3|PronType=Prs	2	obj	_	GTtags=Pers,Sg3,Acc,Err/Dial|SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	5	punct	_	_
5	вошйи	вошйыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	2	conj	_	GTtags=Ind,Prt1,Err/Dial,Sg3|SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	9	punct	_	_
7	мыля	мыйла	SCONJ	CS	_	9	mark	_	GTtags=CS
8	ачум	ас	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs|Reflex=Yes	9	nsubj:cop	_	GTtags=Refl,Sg1,Err/Dial,Nom
9	коми-изьватас	коми-изьватас	NOUN	N	Case=Nom|Number=Sing	5	ccomp	_	GTtags=Sg,Nom
10	и	и	CCONJ	CC	_	13	cc	_	_
11	менэ	ме	PRON	Pron	Case=Acc|Number=Sing|Person=1|PronType=Prs	13	obj	_	GTtags=Pers,Sg1,Err/Dial,Acc
12	сыа	сійӧ	PRON	Pron	PronType=Dem	13	nsubj	_	GTtags=Err/Dial,Dem
13	интересуйтэ	интересуйтны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	conj	_	GTtags=Ind,Prs,Err/Dial,Sg3|SpaceAfter=No
14	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


