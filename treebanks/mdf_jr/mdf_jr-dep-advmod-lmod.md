---
layout: base
title:  'Statistics of advmod:lmod in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `advmod:lmod`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-advmod.html">advmod</a></tt>.
There are also 9 other language-specific subtypes of `advmod`: <tt><a href="mdf_jr-dep-advmod-cau.html">advmod:cau</a></tt>, <tt><a href="mdf_jr-dep-advmod-deg.html">advmod:deg</a></tt>, <tt><a href="mdf_jr-dep-advmod-eval.html">advmod:eval</a></tt>, <tt><a href="mdf_jr-dep-advmod-foc.html">advmod:foc</a></tt>, <tt><a href="mdf_jr-dep-advmod-freq.html">advmod:freq</a></tt>, <tt><a href="mdf_jr-dep-advmod-lfrom.html">advmod:lfrom</a></tt>, <tt><a href="mdf_jr-dep-advmod-lto.html">advmod:lto</a></tt>, <tt><a href="mdf_jr-dep-advmod-mmod.html">advmod:mmod</a></tt>, <tt><a href="mdf_jr-dep-advmod-tmod.html">advmod:tmod</a></tt>.

15 nodes (1%) are attached to their parents as `advmod:lmod`.

12 instances of `advmod:lmod` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.8.

The following 4 pairs of parts of speech are connected with `advmod:lmod`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (11; 73% instances), <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (2; 13% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (1; 7% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 advmod:lmod	color:blue
1	Тоса	тоса	ADV	Adv	_	2	advmod:lmod	_	_
2	сотнине	сотнемс	VERB	V	Number[obj]=Plur|Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Tense=Past|Valency=2	0	root	_	_
3	гулянятнень	гуляня	NOUN	N	Case=Gen|Definite=Def|Number=Plur	2	obj	_	_
4	очконять	очка	NOUN	N	Case=Gen|Definite=Def|Derivation=Dimin|Number=Sing	5	nmod	_	_
5	ужеванза	ужа	NOUN	N	Case=Prl|Number=Plur,Sing|Number[psor]=Sing|Person[psor]=3	2	obl:lmp	_	_
6	и	и	CCONJ	CC	_	8	cc	_	_
7	монць	монць	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs|Reflex=Yes	8	nsubj	_	_
8	озань	озамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Past|Valency=1	2	conj	_	_
9	эзонза	эзонза	ADP	Adp	Case=Ill|Number[psor]=Sing|Person[psor]=3	8	obl:lto	_	SpaceAfter=No
10	.	.	PUNCT	CLB	_	2	punct	_	_

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
4	морасть	морамс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,ScPl3
5	жаворонкатне	жаворонка	NOUN	N	Case=Nom|Definite=Def|Number=Plur	4	nsubj	_	GTtags=Pl,Nom,Def|SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	9	punct	_	_
7	перьфпяльге	перьфпяльге	ADV	Adv	Case=Prl	9	advmod:lmod	_	GTtags=Prl
8	исть	аф	AUX	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Polarity=Neg|Tense=Past|VerbType=Aux	9	aux:neg	_	GTtags=Aux,Neg,Ind,Prt1,ScPl3
9	лотксе	лотксемс	VERB	V	Connegative=Yes	4	conj	_	GTtags=ConNeg
10	крфамда	крфамс	VERB	V	Case=Abl|VerbForm=Inf	9	xcomp	_	GTtags=Inf,Abl
11	тюжя	тюжя	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	12	amod	_	GTtags=Sg,Nom,Indef
12	толса	тол	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing	10	obl	_	GTtags=SP,Ine,Indef
13	цецятне	цеця	NOUN	N	Case=Nom|Definite=Def|Number=Plur	9	nsubj	_	GTtags=Pl,Nom,Def|SpaceAfter=No
14	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 advmod:lmod	color:blue
1	Няить	няемс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=2|Tense=Past|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,ScSg2,OcSg3|SpaceAfter=No
2	,	,	PUNCT	CLB	_	5	punct	_	_
3	тяса	тяса	ADV	Adv	_	5	advmod:lmod	_	_
4	ёфcи	ёфcи	ADV	Adv	AdvType=Deg	5	advmod:deg	_	GTtags=Deg
5	од	од	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	1	conj	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
6	,	,	PUNCT	CLB	_	5	punct	_	_
7	мазы	мазы	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	8	amod	_	GTtags=Sg,Nom,Indef
8	ава	ава	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	9	nsubj	_	GTtags=Sg,Nom,Indef
9	авардсь	авардемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	1	parataxis	_	GTtags=IV,Ind,Prt1,ScSg3
10	сельмоведь	сельмоведь	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	9	obl	_	GTtags=Sg,Nom,Indef
11	мархта	мархта	ADP	Adp	_	10	case	_	SpaceAfter=No
12	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


