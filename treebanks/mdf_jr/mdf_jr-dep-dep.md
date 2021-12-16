---
layout: base
title:  'Statistics of dep in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `dep`

This relation is universal.

5 nodes (0%) are attached to their parents as `dep`.

3 instances of `dep` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.2.

The following 3 pairs of parts of speech are connected with `dep`: <tt><a href="mdf_jr-pos-X.html">X</a></tt>-<tt><a href="mdf_jr-pos-X.html">X</a></tt> (3; 60% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt> (1; 20% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-X.html">X</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 dep	color:blue
1	Оформился	Оформился	X	_	_	9	dep	_	_
2	честь	честь	X	_	_	1	dep	_	_
3	по	по	X	_	_	4	dep	_	_
4	чести	честь	X	_	_	1	dep	_	SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	1	punct	_	GTtags=PUNCT
6	а	а	CCONJ	CC	_	9	cc	_	_
7	меле	меле	ADV	Adv	_	9	advmod:tmod	_	_
8	сёрмаце	сёрма	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=2	9	nsubj	_	GTtags=Sg,Nom,PxSg2
9	сась	самс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,ScSg3|SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	9	punct	_	GTtags=PUNCT

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 13 dep	color:blue
1	Мезе	мезе	PRON	Pron	Case=Nom|Number=Sing|PronType=Int	2	obj	_	GTtags=Interr,Sg,Nom
2	мярьган	мярьгомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres	0	root	_	GTtags=Ind,Prs,ScSg1|SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	4	punct	_	_
4	кизефтендярясамазь	кизефтемс	VERB	V	Mood=Cnd|Number[obj]=Sing|Number[subj]=Plur|Person[obj]=1|Person[subj]=3	2	advcl	_	GTtags=Cond,ScPl3,OcSg1
5	ломатть	ломань	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	4	nsubj	_	GTtags=Pl,Nom,Indef|SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	8	punct	_	_
7	кода	кода	ADV	Adv	_	8	advmod	_	_
8	эрят	эрямс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=2|Tense=Pres|Valency=1	4	ccomp	_	GTtags=IV,Ind,Prs,ScSg2,Cmp/Hyph-Serial,Use/Circ
9	-	_	PUNCT	PUNCT	_	10	punct	_	_
10	ащат	ащемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=2|Tense=Pres	8	conj	_	GTtags=Ind,Prs,ScSg2
11	тон	тон	PRON	Pron	Case=Nom|Number=Sing|Person=2|PronType=Prs	8	nsubj	_	GTtags=Pers,Sg2,Nom|SpaceAfter=No
12	,	,	PUNCT	PUNCT	_	16	punct	_	_
13	монь	мон	PRON	Pron	Case=Gen|Number=Sing|Person=1|PronType=Prs	16	dep	_	GTtags=Pers,Sg1,Gen
14	фкя	фкя	NUM	Num	Case=Nom|Definite=Ind|Number=Sing|NumType=Card	16	nummod	_	GTtags=Card,Sg,Nom,Indef
15	сяка	сяка	PRON	Pron	Case=Nom|Definite=Ind|Number=Sing	16	det	_	GTtags=Sg,Nom,Indef
16	стирнязе	стирня	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	11	appos	_	GTtags=Sg,Nom,PxSg1|SpaceAfter=No
17	?	?	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 dep	color:blue
1	Оформился	Оформился	X	_	_	9	dep	_	_
2	честь	честь	X	_	_	1	dep	_	_
3	по	по	X	_	_	4	dep	_	_
4	чести	честь	X	_	_	1	dep	_	SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	1	punct	_	GTtags=PUNCT
6	а	а	CCONJ	CC	_	9	cc	_	_
7	меле	меле	ADV	Adv	_	9	advmod:tmod	_	_
8	сёрмаце	сёрма	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=2	9	nsubj	_	GTtags=Sg,Nom,PxSg2
9	сась	самс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,ScSg3|SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	9	punct	_	GTtags=PUNCT

~~~


