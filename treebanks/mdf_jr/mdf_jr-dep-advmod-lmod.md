---
layout: base
title:  'Statistics of advmod:lmod in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `advmod:lmod`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-advmod.html">advmod</a></tt>.
There are also 8 other language-specific subtypes of `advmod`: <tt><a href="mdf_jr-dep-advmod-cau.html">advmod:cau</a></tt>, <tt><a href="mdf_jr-dep-advmod-cmp.html">advmod:cmp</a></tt>, <tt><a href="mdf_jr-dep-advmod-deg.html">advmod:deg</a></tt>, <tt><a href="mdf_jr-dep-advmod-eval.html">advmod:eval</a></tt>, <tt><a href="mdf_jr-dep-advmod-foc.html">advmod:foc</a></tt>, <tt><a href="mdf_jr-dep-advmod-freq.html">advmod:freq</a></tt>, <tt><a href="mdf_jr-dep-advmod-mmod.html">advmod:mmod</a></tt>, <tt><a href="mdf_jr-dep-advmod-tmod.html">advmod:tmod</a></tt>.

49 nodes (1%) are attached to their parents as `advmod:lmod`.

31 instances of `advmod:lmod` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.77551020408163.

The following 4 pairs of parts of speech are connected with `advmod:lmod`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (43; 88% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (3; 6% instances), <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (2; 4% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 advmod:lmod	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 advmod:lmod	color:blue
1	Сон	сон	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	nsubj:cop	_	GTtags=Pers,Sg3,Nom
2	кати-коста	кати-коста	ADV	Adv	Case=Ela|Definite=Ind	4	advmod:lmod	_	GTtags=Indef,Ela
3	Пензенскяй	пензенскяй	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	4	amod	_	GTtags=Sg,Nom,Indef
4	губернияста	губерния	NOUN	N	Case=Ela|Definite=Ind|Number=Plur,Sing	0	root	_	GTtags=SP,Ela,Indef|SpaceAfter=No
5	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 advmod:lmod	color:blue
1	Коса-бди	коса-бди	ADV	Adv	Case=Ine|Definite=Ind	3	advmod:lmod	_	GTtags=Indef,Ine
2	аф	аф	AUX	V	Polarity=Neg|VerbType=Aux	3	aux:neg	_	GTtags=Aux,Neg
3	ичкозе	ичкозе	ADV	Adv	Case=Loc	4	advmod:lmod	_	GTtags=Loc
4	морасть	морамс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past|VerbForm=Fin	0	root	_	GTtags=Ind,Prt1,ScPl3
5	жаворонкатне	жаворонка	NOUN	N	Case=Nom|Definite=Def|Number=Plur	4	nsubj	_	GTtags=Pl,Nom,Def|SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	9	punct	_	_
7	перьфпяльге	перьфпяльге	ADV	Adv	Case=Prl	9	advmod:lmod	_	GTtags=Prl
8	исть	аф	AUX	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Polarity=Neg|Tense=Past|VerbType=Aux	9	aux	_	GTtags=Aux,Neg,Ind,Prt1,ScPl3
9	лотксе	лотксемс	VERB	V	Connegative=Yes	4	conj	_	GTtags=ConNeg
10	крфамда	крфамс	VERB	V	Case=Abl|VerbForm=Inf	9	xcomp	_	GTtags=Inf,Abl
11	тюжя	тюжя	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	12	amod	_	GTtags=Sg,Nom,Indef
12	толса	тол	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing	10	obl	_	GTtags=SP,Ine,Indef
13	цецятне	цеця	NOUN	N	Case=Nom|Definite=Def|Number=Plur	9	nsubj	_	GTtags=Pl,Nom,Def|SpaceAfter=No
14	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


