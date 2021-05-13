---
layout: base
title:  'Statistics of parataxis in UD_Komi_Permyak-UH'
udver: '2'
---

## Treebank Statistics: UD_Komi_Permyak-UH: Relations: `parataxis`

This relation is universal.

6 nodes (1%) are attached to their parents as `parataxis`.

6 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.66666666666667.

The following 2 pairs of parts of speech are connected with `parataxis`: <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-VERB.html">VERB</a></tt> (5; 83% instances), <tt><a href="koi_uh-pos-PRON.html">PRON</a></tt>-<tt><a href="koi_uh-pos-VERB.html">VERB</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 parataxis	color:blue
1	Локтін	локны	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Past	0	root	_	GTtags=Ind,Prt1,Sg2|SpaceAfter=No
2	?	?	PUNCT	CLB	_	1	punct	_	_
3	—	—	PUNCT	PUNCT	_	4	punct	_	_
4	шыасис	шыасьны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	1	parataxis	_	GTtags=Ind,Prt1,Sg3
5	сія	сія	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	GTtags=Pers,Sg3,Nom
6	дрӧжитана	дрӧжитны	VERB	V	Derivation=Ana|VerbForm=Part	7	acl	_	GTtags=ANA,Adv
7	голосӧн	голос	NOUN	N	Case=Ins|Number=Sing	4	obl	_	GTtags=Sg,Ins
8	и	и	CCONJ	CC	_	9	cc	_	_
9	тулис	тульны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	4	conj	_	GTtags=Ind,Prt1,Sg3
10	синнэсӧ	син	NOUN	N	Case=Acc|Number=Plur|Number[psor]=Sing|Person[psor]=3	9	obj	_	GTtags=Pl,Acc,PxSg3|SpaceAfter=No
11	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 parataxis	color:blue
1	—	—	PUNCT	_	_	2	punct	_	_
2	Кытшӧм	кытшӧм	PRON	_	PronType=Int	0	root	_	_
3	талун	талун	ADV	_	_	2	advmod:tmod	_	_
4	луныс	лун	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	2	nsubj:cop	_	SpaceAfter=No
5	?	?	PUNCT	_	_	2	punct	_	_
6	—	—	PUNCT	_	_	8	punct	_	_
7	ылӧстӧма	ылӧстны	VERB	_	Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	8	advcl	_	_
8	юаліс	юавны	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	2	parataxis	_	_
9	сія	сія	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


