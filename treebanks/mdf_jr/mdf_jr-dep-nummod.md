---
layout: base
title:  'Statistics of nummod in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `nummod`

This relation is universal.

34 nodes (1%) are attached to their parents as `nummod`.

34 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.17647058823529.

The following 2 pairs of parts of speech are connected with `nummod`: <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-NUM.html">NUM</a></tt> (33; 97% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-NUM.html">NUM</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod	color:blue
1	―	―	PUNCT	PUNCT	_	4	punct	_	_
2	Кемоньшка	кемонь	NUM	Num	Case=Cmp|Number=Plur,Sing	3	nummod	_	_
3	кизоня	киза	NOUN	N	Case=Nom|Definite=Ind|Degree=Dim|Number=Sing	4	nsubj	_	_
4	ётай	ётамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres	6	advcl:tcl	_	SpaceAfter=No
5	,	,	PUNCT	CLB	_	4	punct	_	_
6	касат	касомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=2|Tense=Pres	0	root	_	SpaceAfter=No
7	,	,	PUNCT	CLB	_	10	punct	_	_
8	козонга	козонга	ADV	Adv	PronType=Ind	10	advmod:lmod	_	_
9	аф	аф	AUX	Aux	Polarity=Neg	10	aux	_	_
10	туят	тумс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=2|Tense=Pres	6	conj	_	SpaceAfter=No
11	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nummod	color:blue
1	Маряк	марямс	VERB	V	Connegative=Yes	0	root	_	CGdephead=#1-&gt;2|CGdeprel=@IMV|GTtags=ConNegII
2	аф	аф	AUX	V	Polarity=Neg|VerbType=Aux	3	aux:neg	_	CGdephead=#2-&gt;0|CGdeprel=@FAUX|GTtags=Aux,Neg
3	стак	стак	ADV	Adv	_	4	advmod	_	CGdephead=#3-&gt;4|CGdeprel=@ADVL&gt;
4	корхнихть	корхнемс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Pres	1	conj	_	CGdephead=#4-&gt;2|CGdeprel=@FMV|GTtags=Ind,Prs,ScPl3
5	мокшетне	мокша	NOUN	N	Case=Nom|Definite=Def|Number=Plur	4	nsubj	_	CGdephead=#5-&gt;4|CGdeprel=@SPRED|GTtags=Pl,Nom,Def|SpaceAfter=No
6	:	:	PUNCT	CLB	_	12	punct	_	CGdephead=#6-&gt;2|CGdeprel=@X|GTtags=CLB
7	«	«	PUNCT	PUNCT	PunctSide=Ini	12	punct	_	CGdephead=#7-&gt;8|CGdeprel=@X|GTtags=PUNCT,LEFT|SpaceAfter=No
8	Кафта	кафта	NUM	Num	Case=Nom|Definite=Ind|Number=Sing|NumType=Card	9	nummod	_	CGdephead=#8-&gt;9|CGdeprel=@&gt;N|GTtags=Card,Sg,Nom,Indef
9	сялондыхнень	сялондомс	VERB	V	Case=Gen|Definite=Def|Nomzr=Ag|Number=Plur	10	nmod	_	CGdephead=#9-&gt;9|CGdeprel=@&gt;P|GTtags=Der/NomAg,N,Pl,Gen,Def
10	ёткс	ётка	NOUN	N	Case=Ill|Definite=Ind|NounType=Relat|Number=Plur,Sing	12	obl	_	CGdephead=#10-&gt;4|CGdeprel=@&lt;ADVL|GTtags=Relator,SP,Ill,Indef
11	тят	аф	AUX	V	Number[subj]=Sing|Person[subj]=1|Polarity=Neg	12	aux	_	CGdephead=#11-&gt;0|CGdeprel=@X|GTtags=Dem,Pl,Nom,Indef
12	шоворькшне	шоворькшнемс	VERB	V	Connegative=Yes	1	parataxis	_	CGdephead=#12-&gt;2|CGdeprel=@IMV|GTtags=ConNeg|SpaceAfter=No
13	»	»	PUNCT	PUNCT	PunctSide=Fin	12	punct	_	CGdephead=#13-&gt;12|CGdeprel=@X|GTtags=PUNCT,RIGHT|SpaceAfter=No
14	.	.	PUNCT	CLB	_	1	punct	_	CGdephead=#14-&gt;2|CGdeprel=@X|GTtags=CLB

~~~


