---
layout: base
title:  'Statistics of cc:preconj in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-cc.html">cc</a></tt>.

7 nodes (0%) are attached to their parents as `cc:preconj`.

7 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 5 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-CCONJ.html">CCONJ</a></tt> (3; 43% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-CCONJ.html">CCONJ</a></tt> (1; 14% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 14% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-CCONJ.html">CCONJ</a></tt> (1; 14% instances), <tt><a href="myv_jr-pos-NUM.html">NUM</a></tt>-<tt><a href="myv_jr-pos-PART.html">PART</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cc:preconj	color:blue
1	И	и	CCONJ	CC	_	2	cc:preconj	_	_
2	сорны	сорномс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|Valency=2	0	root	_	GTtags=TV,Ind,Prs,ScSg3|SpaceAfter=No
3	,	,	PUNCT	CLB	_	5	punct	_	_
4	и	и	CCONJ	CC	_	5	cc	_	_
5	дивси	дивсемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|Valency=1	2	conj	_	GTtags=IV,Ind,Prs,ScSg3
6	народось	народ	NOUN	N	Case=Nom|Definite=Def|Number=Sing	2	nsubj	_	GTtags=Sg,Nom,Def|SpaceAfter=No
7	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 cc:preconj	color:blue
1	Эли	эли	CCONJ	CC	_	7	cc:preconj	_	_
2	тедидень	тедидень	ADJ	A	Derivation=GenAttr	4	amod	_	GTtags=GenAttr
3	«	«	PUNCT	PUNCT	_	4	punct	_	GTtags=LEFT|SpaceAfter=No
4	троицясь	троиця	NOUN	N	Case=Nom|Definite=Def|Derivation=NomAg|Number=Sing	7	nsubj	_	GTtags=NomAg,Sg,Nom,Def|SpaceAfter=No
5	»	»	PUNCT	PUNCT	_	4	punct	_	GTtags=RIGHT
6	пек	пек	ADV	Adv	AdvType=Deg	7	advmod	_	GTtags=Degree
7	мазы	мазы	ADJ	A	_	0	root	_	_
8	_	оль	AUX	Cop	Number[subj]=Sing|Person[subj]=3|Tense=Pres	7	cop	_	GTtags=Prs,ScSg3
9	,	,	PUNCT	CLB	_	13	punct	_	_
10	эли	эли	CCONJ	CC	_	13	cc	_	_
11	пек	пек	ADV	Adv	AdvType=Deg	12	advmod	_	GTtags=Degree
12	вадря	вадря	ADJ	A	_	7	conj	_	_
13	_	оль	AUX	Cop	Number[subj]=Sing|Person[subj]=3|Tense=Pres	12	cop	_	GTtags=Prs,ScSg3
14	он	он	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	15	obj	_	GTtags=Sg,Nom,Indef
15	несь	неемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Prt1|Valency=2	7	parataxis	_	GTtags=TV,Ind,Prt1,ScSg3
16	Федоров	Фёдоров	PROPN	N	Animacy=Hum|Case=Nom|Definite=Ind|Gender=Masc|NameType=Sur|Number=Sing	15	nsubj	_	GTtags=Prop,Sur_Mal,Sg,Nom,Indef|SpaceAfter=No
17	,	,	PUNCT	CLB	_	23	punct	_	_
18	эли	эли	CCONJ	CC	_	23	cc	_	_
19	мезень	мезе	PRON	Pron	Case=Gen|Definite=Ind|Number=Plur,Sing|PronType=Ind	24	obl	_	GTtags=Indef,SP,Gen,Indef
20	кувалт	кувалт	ADP	Adp	_	17	case	_	_
21	как	гак	PART	PART	Derivation=PronGak	19	fixed	_	GTtags=Der/Indef_Гак
22	седеезэ	седей	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	23	nsubj	_	GTtags=Sg,Nom,PxSg3
23	палы	паломс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|Valency=1	7	conj	_	GTtags=IV,Ind,Prs,ScSg3|SpaceAfter=No
24	?	?	PUNCT	CLB	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cc:preconj	color:blue
1	Сельмезэнзэ	сельме	NOUN	N	Case=Ill|Number=Plur,Sing|Number[psor]=Sing|Person[psor]=3	2	obl	_	GTtags=SP,Ill,PxSg3
2	понгонесь	понгонемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Prt1|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,ScSg3
3	то	то	ADV	Adv	AdvType=Tim	4	cc:preconj	_	GTtags=Sem/Time
4	кедьге	кедьге	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	2	nsubj	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
5	,	,	PUNCT	CLB	_	9	punct	_	_
6	то	то	ADV	Adv	AdvType=Tim	9	cc	_	GTtags=Sem/Time
7	истямо	истямо	PRON	Pron	PronType=Dem	9	det	_	GTtags=Dem,Attr
8	кедь	кедь	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	4	conj	_	GTtags=Sg,Nom,Indef
9	ёнкс	ёнкс	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	8	goeswith	_	GTtags=Sem/Plc,Sg,Nom,Indef|SpaceAfter=No
10	,	,	PUNCT	CLB	_	13	punct	_	_
11	кона	кона	PRON	Pron	Case=Nom|Definite=Ind|Number=Sing|PronType=Rel	13	obl	_	GTtags=Rel,Sel,Sg,Nom,Indef
12	марто	марто	ADP	Adp	_	11	case	_	GTtags=COM
13	чиемс	чиемс	VERB	V	Valency=1|VerbForm=Inf	9	acl:relcl	_	GTtags=IV,Inf
14	или	или	CCONJ	CC	_	15	cc	_	_
15	ардомс	ардомс	VERB	V	Valency=1|VerbForm=Inf	13	conj	_	GTtags=IV,Inf
16	пожарс	пожар	NOUN	N	Case=Ill|Definite=Ind|Number=Plur,Sing	13	obl	_	GTtags=SP,Ill,Indef|SpaceAfter=No
17	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


