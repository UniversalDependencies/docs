---
layout: base
title:  'Statistics of flat:name in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-flat.html">flat</a></tt>.

18 nodes (0%) are attached to their parents as `flat:name`.

18 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `flat:name`: <tt><a href="mdf_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="mdf_jr-pos-PROPN.html">PROPN</a></tt> (9; 50% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (5; 28% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-PROPN.html">PROPN</a></tt> (4; 22% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat:name	color:blue
1	Слесарсь	слесарь	NOUN	N	Case=Nom|Definite=Def|Number=Sing	4	nsubj	_	GTtags=Sg,Nom,Def
2	Василь	Василь	PROPN	N	Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	1	appos	_	GTtags=Prop,Sg,Nom,Indef
3	Васильевич	Васильевич	PROPN	N	Case=Nom|Definite=Ind|NameType=Pat|Number=Sing	2	flat:name	_	GTtags=Prop,Sem/Patr-Mal,Sg,Nom,Indef
4	тонгондсь	тонгондомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	0	root	_	GTtags=TV,Ind,Prt1,ScSg3
5	котёлть	котёл	NOUN	N	Case=Gen|Definite=Def|Number=Sing	4	obl:lmod	_	GTtags=Sg,Gen,Def
6	алу	алу	ADP	Adp	Case=Lat	5	case	_	GTtags=Relator,SP,Lat,Indef
7	досканят	доска	NOUN	N	Case=Nom|Definite=Ind|Degree=Dim|Number=Plur	4	obj	_	GTtags=Der/Dimin,N,Pl,Nom,Indef|SpaceAfter=No
8	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat:name	color:blue
1	Монь	мон	PRON	Pron	Case=Gen|Number=Sing|Person=1|PronType=Prs	2	nmod:poss	_	GTtags=Pers,Sg1,Gen
2	атязе	атя	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	3	nsubj	_	GTtags=Sg,Nom,PxSg1
3	няендезе	няендемс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Past	0	root	_	GTtags=TV,Ind,Prt1,ScSg3,OcSg3
4	Владимир	Владимир	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	3	obj	_	GTtags=Prop,Sem/Mal,Sg,Nom,Indef
5	Ильич	Ильич	NOUN	N	_	4	flat:name	_	GTtags=Prop,Sem/Patr
6	Ленинонь	Ленин	NOUN	N	Case=Gen|Definite=Ind|NameType=Sur|Number=Plur,Sing	5	flat:name	_	GTtags=Prop,Sem/Sur-Mal,SP,Gen,Indef|SpaceAfter=No
7	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat:name	color:blue
1	Конашка	кона	PRON	Pron	Case=Cmp|Definite=Ind|Number=Plur,Sing	2	det	_	GTtags=SP,Cmpr,Indef
2	аськолкс	аськолкс	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	3	obj	_	GTtags=Sg,Nom,Indef
3	тись	тиемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|VerbForm=Fin	0	root	_	GTtags=Ind,Prt1,ScSg3
4	Н.	Н	NOUN	N	Abbr=Yes	3	nsubj	_	GTtags=ABBR
5	Голенков	Голенков	PROPN	N	Animacy=Hum|Case=Nom|Definite=Ind|Gender=Masc|NameType=Sur|Number=Sing	4	flat:name	_	GTtags=Prop,Sem/Mal-Sur,Sg,Nom,Indef
6	—	—	PUNCT	PUNCT	_	9	punct	_	_
7	и	и	CCONJ	CC	_	9	cc:preconj	_	_
8	кода	кода	ADV	Adv	_	9	advmod	_	_
9	писатель	писатель	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	3	xcomp	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
10	,	,	PUNCT	PUNCT	_	15	punct	_	_
11	и	и	CCONJ	CC	_	15	cc	_	_
12	кода	кода	ADV	Adv	_	15	advmod	_	_
13	эрямань-ащемань	эрямс-ащемс	VERB	V	Case=Gen|Definite=Ind|Number=Plur,Sing|VerbForm=Vnoun	14	obj	_	GTtags=NomAct,SP,Gen,Indef
14	шарьхкоди	шарьхкодемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|VerbForm=Fin	15	acl	_	GTtags=Ind,Prs,ScSg3
15	ломань	ломань	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	9	conj	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
16	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


