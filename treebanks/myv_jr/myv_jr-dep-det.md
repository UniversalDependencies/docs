---
layout: base
title:  'Statistics of det in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `det`

This relation is universal.

307 nodes (2%) are attached to their parents as `det`.

298 instances of `det` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.27035830618892.

The following 9 pairs of parts of speech are connected with `det`: <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-PRON.html">PRON</a></tt> (144; 47% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-DET.html">DET</a></tt> (135; 44% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-PRON.html">PRON</a></tt> (6; 2% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-DET.html">DET</a></tt> (5; 2% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-DET.html">DET</a></tt> (4; 1% instances), <tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="myv_jr-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-DET.html">DET</a></tt> (3; 1% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-PRON.html">PRON</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	Весе	весе	PRON	Pron	Case=Nom|Definite=Ind|Number=Sing|PronType=Tot	2	det	_	GTtags=Tot,Sg,Nom,Indef
2	тайгась	тайга	NOUN	N	Case=Nom|Definite=Def|Number=Sing	3	nsubj	_	GTtags=Sg,Nom,Def
3	уды	удомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|Valency=1	0	root	_	GTtags=IV,Ind,Prs,ScSg3
4	кеме	кеме	ADJ	A	_	7	amod	_	GTtags=|SpaceAfter=No
5	,	,	PUNCT	CLB	_	6	punct	_	_
6	плотна	плотна	ADJ	A	_	7	amod	_	_
7	удомасо	удома	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing	3	obl	_	GTtags=SP,Ine,Indef|SpaceAfter=No
8	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 det	color:blue
1	―	―	PUNCT	PUNCT	_	2	punct	_	_
2	Ох	ох	INTJ	Interj	_	0	root	_	GTtags=|SpaceAfter=No
3	!	!	PUNCT	CLB	_	2	punct	_	_
4	ох	ох	INTJ	Interj	_	2	conj	_	GTtags=|SpaceAfter=No
5	!	!	PUNCT	CLB	_	4	punct	_	_
6	вай	вай	INTJ	Interj	_	2	conj	_	GTtags=|SpaceAfter=No
7	!	!	PUNCT	CLB	_	6	punct	_	_
8	―	―	PUNCT	PUNCT	_	9	punct	_	_
9	сергедевсь	сергедевемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	2	parataxis	_	GTtags=IV,Ind,Prt1,ScSg3
10	Люба	Люба	PROPN	N	Animacy=Hum|Case=Nom|Definite=Ind|Gender=Fem|NameType=Giv|Number=Sing	9	nsubj	_	GTtags=Prop,Ant_Fem,Sg,Nom,Indef
11	се	се	DET	Det	Number=Sing|PronType=Dem	12	det	_	GTtags=Dem,Sg
12	шканть	шка	NOUN	N	Case=Gen|Definite=Def|Number=Sing	9	obl	_	GTtags=Sg,Gen,Def
13	эйстэ	эйстэ	ADP	Adp	AdvType=Loc|Case=Ela	12	case	_	GTtags=Spat,Ela|SpaceAfter=No
14	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 det	color:blue
1	Сон	сон	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	GTtags=Pers,Sg3,Nom|SubjRef=1:10.7,2
2	сонсь	сонсь	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs|Reflex=Yes	1	det	_	GTtags=Refl,Sg3,Nom|SubjRef=1:10.7,2
3	умбодсь	умбодомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,ScSg3|SubjRef=1:10.7,2
4	эйзэст	эйс	ADP	Adp	Case=Ill|Number[psor]=Plur|Person[psor]=3	3	obl	_	GTtags=Ill,PxPl3|PqxRef=1:10.6,13
5	варинеть	варине	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	3	obj	_	GTtags=Sem/Inanim_Cnt,Pl,Nom,Indef|SpaceAfter=No
6	,	,	PUNCT	CLB	_	7	punct	_	_
7	истя	истя	ADV	Adv	_	3	advmod	_	GTtags=|SpaceAfter=No
8	,	,	PUNCT	CLB	_	10	punct	_	_
9	кода	кода	ADV	Adv	AdvType=Man|PronType=Int	10	advmod	_	GTtags=Interr,Manner
10	тейнекшнить	тейнекшнемс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Pres	7	advcl	_	GTtags=Ind,Prs,ScPl3|SubjRef=1:10.8,11
11	весе	весе	PRON	Pron	Case=Nom|Definite=Ind|Number=Sing|PronType=Tot	10	nsubj	_	GTtags=Tot,Sg,Nom,Indef|SpaceAfter=No
12	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


