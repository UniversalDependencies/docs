---
layout: base
title:  'Statistics of case in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `case`

This relation is universal.

83 nodes (2%) are attached to their parents as `case`.

83 instances of `case` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.01204819277108.

The following 8 pairs of parts of speech are connected with `case`: <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-ADP.html">ADP</a></tt> (60; 72% instances), <tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="mdf_jr-pos-ADP.html">ADP</a></tt> (10; 12% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (4; 5% instances), <tt><a href="mdf_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="mdf_jr-pos-ADP.html">ADP</a></tt> (3; 4% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-ADP.html">ADP</a></tt> (3; 4% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="mdf_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 case	color:blue
1	Рамаль	рамамс	VERB	V	Mood=Sub|Number[subj]=Sing|Person[subj]=3	0	root	_	_
2	хуш	хуш	ADV	Adv	_	5	advmod	_	_
3	тядязень	тядя	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=1	5	nmod	_	_
4	муськома	муськомс	VERB	V	Case=Nom|Definite=Ind|Number=Sing|VerbForm=Vnoun	5	nmod	_	_
5	очконц	очка	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	1	obj	_	_
6	эшка	эшка	ADP	Adp	AdpType=Post|Case=Cmp	5	case	_	SpaceAfter=No
7	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 case	color:blue
1	Мезень	мезе	PRON	Pron	Case=Gen|Number=Plur,Sing|PronType=Int	3	obl:lmod	_	GTtags=Interr|SP,Gen
2	лангс	лангс	ADP	Po	Case=Ill	1	case	_	GTtags=Ill
3	ванат	ваномс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=2|Tense=Pres	0	root	_	GTtags=IV,Ind,Prs,ScSg2|SpaceAfter=No
4	?	?	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 case	color:blue
1	Тейне	мон	PRON	Pron	Case=Dat|Number=Sing|Person=1|PronType=Prs|Variant=Short	0	root	_	GTtags=Pers,Sg1,Dat,Short
2	аф	аф	AUX	V	Polarity=Neg|VerbType=Aux	3	aux:neg	_	GTtags=Aux,Neg
3	стака	стака	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	1	nsubj	_	GTtags=Sg,Nom,Indef
4	штормань	шторма	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	6	obl:tmod	_	GTtags=SP,Gen,Indef
5	пингть	пинге	NOUN	N	Case=Gen|Definite=Def|Number=Sing	4	case	_	GTtags=Sg,Gen,Def
6	уемс	уемс	VERB	V	VerbForm=Inf	1	xcomp	_	GTtags=Inf
7	морява	моря	NOUN	N	Case=Prl|Definite=Ind|Number=Plur,Sing	6	obl:lmod	_	GTtags=SP,Prl,Indef|SpaceAfter=No
8	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


