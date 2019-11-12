---
layout: base
title:  'Statistics of advcl in UD_Komi_Permyak-UH'
udver: '2'
---

## Treebank Statistics: UD_Komi_Permyak-UH: Relations: `advcl`

This relation is universal.

7 nodes (2%) are attached to their parents as `advcl`.

6 instances of `advcl` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.14285714285714.

The following 3 pairs of parts of speech are connected with `advcl`: <tt><a href="koi_uh-pos-ADJ.html">ADJ</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (5; 71% instances), <tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="koi_uh-pos-VERB.html">VERB</a></tt> (1; 14% instances), <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-NUM.html">NUM</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 advcl	color:blue
1	Менам	ме	PRON	_	Case=Gen|Number=Sing|Person=1|PronType=Prs	2	nmod	_	GTtags=Pers,Sg1,Gen
2	айӧ	ай	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	3	nsubj	_	GTtags=Sg,Nom,PxSg1
3	буржык	бур	ADJ	_	Degree=Cmp	0	root	_	GTtags=Der/жык,Comp
4	тэ	тэ	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	5	nmod	_	GTtags=Pers,Sg2,Nom
5	айся	ай	NOUN	_	Case=Comp|Number=Sing	3	advcl	_	GTtags=Sg,Cmpr|SpaceAfter=No
6	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 16 advcl	color:blue
1	Сылӧ	сія	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs	4	obl	_	GTtags=Pers,Sg3,Dat
2	коліс	ковны	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	4	aux	_	GTtags=Ind,Prt1,Sg3
3	басӧка	басӧка	ADV	_	_	4	advmod	_	_
4	лӧсьӧтны	лӧсьӧтны	VERB	_	VerbForm=Inf	0	root	_	GTtags=Inf
5	юрсисӧ	юрси	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	obj	_	GTtags=Sg,Acc,PxSg3|SpaceAfter=No
6	,	,	PUNCT	_	_	14	punct	_	_
7	но	но	CCONJ	_	_	14	cc	_	_
8	мылякӧ	мылякӧ	ADV	_	Definite=Ind	14	advmod	_	GTtags=Indef
9	сія	сія	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	10	det	_	GTtags=Pers,Sg3,Nom
10	лунӧ	лун	NOUN	_	Case=Ill|Number=Sing	14	obl:tmod	_	GTtags=Sg,Ill
11	сылӧ	сія	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs	14	obl	_	GTtags=Pers,Sg3,Dat
12	эз	оз	AUX	_	Person=3|Polarity=Neg|Tense=Past|VerbType=Aux	14	aux:neg	_	GTtags=Prt1,3
13	вӧв	вӧвны	AUX	_	Connegative=Yes	14	cop	_	GTtags=ConNeg
14	охота	охота	NOUN	_	Case=Nom|Number=Sing	4	conj	_	GTtags=Sg,Nom
15	сійӧ	сія	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	16	obj	_	GTtags=Pers,Sg3,Acc
16	керны	керны	VERB	_	VerbForm=Inf	14	advcl	_	GTtags=Inf|SpaceAfter=No
17	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 advcl	color:blue
1	Кыкӧн	кык	NUM	_	NumType=Dist	3	advcl	_	GTtags=Card,Distr
2	нія	сія	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	3	nsubj	_	GTtags=Pers,Pl3,Nom
3	иньдӧтчисӧ	иньдӧтчыны	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,Pl3
4	петанін	петанін	NOUN	_	Case=Nom|Number=Sing	5	nmod	_	GTtags=Sg,Nom
5	ладорӧ	ладор	NOUN	_	Case=Ill|Number=Sing	3	obl	_	SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	_	_

~~~


