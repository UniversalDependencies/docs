---
layout: base
title:  'Statistics of cc:preconj in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-cc.html">cc</a></tt>.

8 nodes (0%) are attached to their parents as `cc:preconj`.

8 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.875.

The following 5 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-CCONJ.html">CCONJ</a></tt> (3; 38% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (2; 25% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-CCONJ.html">CCONJ</a></tt> (1; 13% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-CCONJ.html">CCONJ</a></tt> (1; 13% instances), <tt><a href="myv_jr-pos-NUM.html">NUM</a></tt>-<tt><a href="myv_jr-pos-PART.html">PART</a></tt> (1; 13% instances).


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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cc:preconj	color:blue
1	Сон	сон	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	GTtags=Pers,Sg3,Nom
2	сюпав	сюпав	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	0	root	_	GTtags=Sg,Nom,Indef
3	кода	кода	ADV	Adv	AdvType=Man|PronType=Rel	4	cc:preconj	_	GTtags=Rel,Manner
4	мифологиянть	мифология	NOUN	N	Case=Gen|Definite=Def|Number=Sing	8	nmod	_	GTtags=Sg,Gen,Def|SpaceAfter=No
5	,	,	PUNCT	CLB	_	7	punct	_	_
6	истя	истя	ADV	Adv	AdvType=Man	7	cc	_	GTtags=Manner
7	историянть	история	NOUN	N	Case=Gen|Definite=Def|Number=Sing	4	conj	_	GTtags=Sg,Gen,Def
8	ёндояк	ён	NOUN	N	Case=Abl|Clitic=Add|Definite=Ind|Number=Plur,Sing	2	obl	_	GTtags=Relator,SP,Abl,Indef,Clt/Add|SpaceAfter=No
9	.	.	PUNCT	CLB	_	2	punct	_	_

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
6	пек	пек	ADV	Adv	AdvType=Deg	7	advmod:deg	_	GTtags=Degree
7	мазы	мазы	ADJ	A	Number[subj]=Sing|Person[subj]=3|Tense=Pres	0	root	_	GTtags=Prs,ScSg3|SpaceAfter=No
8	,	,	PUNCT	CLB	_	7	punct	_	_
9	эли	эли	CCONJ	CC	_	13	cc	_	_
10	пек	пек	ADV	Adv	AdvType=Deg	11	advmod:deg	_	GTtags=Degree
11	вадря	вадря	ADJ	A	Number[subj]=Sing|Person[subj]=3|Tense=Pres	12	amod	_	GTtags=Prs,ScSg3
12	он	он	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	13	obj	_	GTtags=Sg,Nom,Indef
13	несь	неемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=2	7	conj	_	GTtags=TV,Ind,Prt1,ScSg3
14	Федоров	Фёдоров	PROPN	N	Animacy=Hum|Case=Nom|Definite=Ind|Gender=Masc|NameType=Sur|Number=Sing	13	nsubj	_	GTtags=Prop,Sur_Mal,Sg,Nom,Indef|SpaceAfter=No
15	,	,	PUNCT	CLB	_	21	punct	_	_
16	эли	эли	CCONJ	CC	_	21	cc	_	_
17	мезень	мезе	PRON	Pron	Case=Gen|Definite=Ind|Number=Plur,Sing|PronType=Ind	21	obl	_	GTtags=Indef,SP,Gen,Indef
18	кувалт	кувалт	ADP	Adp	_	17	case	_	_
19	как	гак	PART	PART	Derivation=PronGak	17	fixed	_	GTtags=Der/Indef_Гак
20	седеезэ	седей	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	21	nsubj	_	GTtags=Sg,Nom,PxSg3
21	палы	паломс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|Valency=1	7	conj	_	GTtags=IV,Ind,Prs,ScSg3|SpaceAfter=No
22	?	?	PUNCT	CLB	_	7	punct	_	_

~~~


