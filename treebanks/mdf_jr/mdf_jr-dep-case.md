---
layout: base
title:  'Statistics of case in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `case`

This relation is universal.

11 nodes (2%) are attached to their parents as `case`.

11 instances of `case` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `case`: <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-ADP.html">ADP</a></tt> (9; 82% instances), <tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="mdf_jr-pos-ADP.html">ADP</a></tt> (1; 9% instances), <tt><a href="mdf_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="mdf_jr-pos-ADP.html">ADP</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 case	color:blue
1	И	и	CCONJ	CC	_	2	cc	_	_
2	уендихть	уендемс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Pres|Valency=1	0	root	_	_
3	сенем	сенем	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	4	amod	_	_
4	менельть	менель	NOUN	N	Case=Gen|Definite=Def|Number=Sing	2	obl	_	_
5	потмоса	потмоса	ADP	Adp	AdpType=Post	4	case	_	SpaceAfter=No
6	,	,	PUNCT	CLB	_	9	punct	_	_
7	кода	кода	ADV	Adv	_	9	mark	_	_
8	оцю	оцю	ADJ	A	Case=Nom|Number=Sing	9	amod	_	_
9	морява	моря	NOUN	N	Case=Prl|Definite=Ind|Number=Plur,Sing	4	obl	_	SpaceAfter=No
10	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 case	color:blue
1	Мезень	мезе	PRON	Pron	Case=Gen|Number=Plur,Sing|PronType=Int	3	obl	_	GTtags=Interr|SP,Gen
2	лангс	лангс	ADP	Po	Case=Ill	1	case	_	GTtags=Ill
3	ванат	ваномс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=2|Tense=Pres|Valency=1	0	root	_	GTtags=IV,Ind,Prs,ScSg2|SpaceAfter=No
4	?	?	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 case	color:blue
1	Тя	тя	DET	_	Case=Nom|Number=Sing|PronType=Dem	2	det	_	GTtags=Dem,Sg,Nom
2	сёрмась	сёрма	NOUN	_	Case=Nom|Definite=Def|Number=Sing	3	nsubj	_	GTtags=Sg,Nom,Def
3	Петянь	Петя	PROPN	_	Case=Gen|Definite=Ind|Number=Plur,Sing	0	root	_	GTtags=Prop,Sem/Mal,SP,Gen,Indef
4	эзда	эзда	ADP	_	Case=Abl	3	case	_	GTtags=Abl|SpaceAfter=No
5	,	,	PUNCT	CLB	_	7	punct	_	_
6	и	и	CCONJ	CC	_	7	cc	_	_
7	кандозь	кандомс	VERB	_	Mood=Ind|Number[obj]=Sing|Number[subj]=Plur|Person[obj]=3|Person[subj]=3|Tense=Prt1|Valency=2	3	conj	_	GTtags=TV,Ind,Prt1,ScPl3,OcSg3
8	сонь	сон	PRON	_	Case=Gen|Number=Sing|Person=3|PronType=Prs	7	obj	_	GTtags=Pers,Sg3,Gen
9	исяк	исяк	ADV	_	_	7	advmod:tmod	_	SpaceAfter=No
10	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


