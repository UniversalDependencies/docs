---
layout: base
title:  'Statistics of appos in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `appos`

This relation is universal.

22 nodes (1%) are attached to their parents as `appos`.

22 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.18181818181818.

The following 10 pairs of parts of speech are connected with `appos`: <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (6; 27% instances), <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (5; 23% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (3; 14% instances), <tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (2; 9% instances), <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt> (1; 5% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (1; 5% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-PROPN.html">PROPN</a></tt> (1; 5% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="mdf_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt> (1; 5% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 appos	color:blue
1	Кати-коста	кати-коста	ADV	Adv	Case=Ela|Definite=Ind	3	advmod:lfrom	_	GTtags=Indef,Ela
2	вярде	вярде	ADV	Adv	Case=Abl	1	appos	_	GTtags=Abl
3	кулян	кулемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres	0	root	_	GTtags=Ind,Prs,ScSg1
4	вайгяль	вайгяль	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	3	obj	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
5	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 appos	color:blue
1	Аф	аф	AUX	V	Polarity=Neg|VerbType=Aux	2	aux:neg	_	GTtags=Aux,Neg
2	ичкозе	ичкозе	ADV	Adv	Case=Loc	4	advmod:lmod	_	GTtags=Loc
3	вирьса	вирь	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing	2	appos	_	GTtags=SP,Ine,Indef
4	кукай	кукамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres	0	root	_	GTtags=Ind,Prs,ScSg3
5	кукусь	куку	NOUN	N	Case=Nom|Definite=Def|Number=Sing	4	nsubj	_	GTtags=Sg,Nom,Def|SpaceAfter=No
6	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 appos	color:blue
1	Мон	мон	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	GTtags=Pers,Sg1,Nom
2	усконь	ускомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Past|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,ScSg1
3	паксяв	пакся	NOUN	N	Case=Lat|Definite=Ind|Number=Plur,Sing	2	obl:lto	_	GTtags=SP,Lat,Indef
4	видьмот	видьме	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	2	obj	_	GTtags=Pl,Nom,Indef|SpaceAfter=No
5	,	,	PUNCT	CLB	_	9	punct	_	_
6	кодама-бъди	кодама-бди	DET	Det	Case=Nom|Definite=Ind|Number=Sing|PronType=Ind|Style=Ped	8	det	_	GTtags=Indef,Sg,Nom,Indef|ModernForm=кодама-бди
7	од	од	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	8	amod	_	GTtags=Sg,Nom,Indef
8	сорт	сорт	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	9	nmod	_	GTtags=Sg,Nom,Indef
9	тозер	тозер	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	4	appos	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
10	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


