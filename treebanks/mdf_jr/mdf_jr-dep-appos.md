---
layout: base
title:  'Statistics of appos in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `appos`

This relation is universal.

6 nodes (0%) are attached to their parents as `appos`.

6 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.83333333333333.

The following 6 pairs of parts of speech are connected with `appos`: <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt> (1; 17% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (1; 17% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-PROPN.html">PROPN</a></tt> (1; 17% instances), <tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (1; 17% instances), <tt><a href="mdf_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt> (1; 17% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 appos	color:blue
1	Ошу	ош	NOUN	N	Case=Lat|Definite=Ind|Number=Plur,Sing	3	obl:lmod	_	GTtags=SP,Lat,Indef
2	сон	сон	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	GTtags=Pers,Sg3,Nom
3	тусь	тумс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Prt1|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,ScSg3
4	кунара	кунара	ADV	Adv	Case=Temp	3	advmod:tmod	_	GTtags=Temp|SpaceAfter=No
5	,	,	PUNCT	CLB	_	7	punct	_	_
6	мъзярда	мзярда	SCONJ	CS	Case=Temp|Style=Ped	7	mark	_	GTtags=Temp|ModernForm=мзярда
7	тейнза	сон	PRON	Pron	Case=Dat|Number=Sing|Person=3|PronType=Prs|Variant=Short	4	appos	_	GTtags=Pers,Sg3,Dat,Short
8	ульсь	улемс	AUX	_	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Prt1|Valency=1	7	aux	_	GTtags=IV,Ind,Prt1,ScSg3
9	комсь	комсь	NUM	Num	Case=Nom|Definite=Ind|Number=Sing|NumType=Card	10	nmod	_	GTtags=Card,Sg,Nom,Indef
10	киза	киза	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	7	nsubj	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
11	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 appos	color:blue
1	Мон	мон	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	GTtags=Pers,Sg1,Nom
2	усконь	ускомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Prt1|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,ScSg1
3	паксяв	пакся	NOUN	N	Case=Lat|Definite=Ind|Number=Plur,Sing	2	obl:lmod	_	GTtags=SP,Lat,Indef
4	видьмот	видьме	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	2	obj	_	GTtags=Pl,Nom,Indef|SpaceAfter=No
5	,	,	PUNCT	CLB	_	9	punct	_	_
6	кодама-бъди	кодама-бди	DET	Det	Case=Nom|Definite=Ind|Number=Sing|PronType=Ind|Style=Ped	8	det	_	GTtags=Indef,Sg,Nom,Indef|ModernForm=кодама-бди
7	од	од	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	8	amod	_	GTtags=Sg,Nom,Indef
8	сорт	сорт	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	9	nmod	_	GTtags=Sg,Nom,Indef
9	тозер	тозер	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	4	appos	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
10	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 appos	color:blue
1	Слесарсь	слесарь	NOUN	N	Case=Nom|Definite=Def|Number=Sing	4	nsubj	_	GTtags=Sg,Nom,Def
2	Василь	Василь	PROPN	N	Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	1	appos	_	GTtags=Prop,Sg,Nom,Indef
3	Васильевич	Васильевич	PROPN	N	Case=Nom|Definite=Ind|NameType=Pat|Number=Sing	2	flat:name	_	GTtags=Prop,Sem/Patr-Mal,Sg,Nom,Indef
4	тонгондсь	тонгондомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Prt1|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,ScSg3
5	котёлть	котёл	NOUN	N	Case=Gen|Definite=Def|Number=Sing	4	obl:lmod	_	GTtags=Sg,Gen,Def
6	алу	алу	ADP	Adp	Case=Lat	5	case	_	GTtags=Relator,SP,Lat,Indef
7	досканят	доска	NOUN	N	Case=Nom|Definite=Ind|Derivation=Dimin|Number=Plur	4	obj	_	GTtags=Der/Dimin,N,Pl,Nom,Indef|SpaceAfter=No
8	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


