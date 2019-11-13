---
layout: base
title:  'Statistics of aux:neg in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `aux:neg`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-aux.html">aux</a></tt>.

18 nodes (3%) are attached to their parents as `aux:neg`.

17 instances of `aux:neg` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.05555555555556.

The following 5 pairs of parts of speech are connected with `aux:neg`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (13; 72% instances), <tt><a href="mdf_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (2; 11% instances), <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (1; 6% instances), <tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (1; 6% instances), <tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 aux:neg	color:blue
1	А	а	CCONJ	CC	_	2	cc	_	_
2	касан	касомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres|Valency=1	0	root	_	_
3	пяк	пяк	ADV	Adv	AdvType=Deg	4	advmod	_	_
4	савор	савор	ADV	Adv	_	2	advmod	_	SpaceAfter=No
5	,	,	PUNCT	CLB	_	9	punct	_	_
6	нинге	нинге	ADV	Adv	_	9	advmod	_	_
7	школавка	школа	NOUN	N	Case=Lat|Clitic=Ge|Definite=Ind|Number=Plur,Sing	9	obl	_	_
8	аф	аф	AUX	Aux	Polarity=Neg	9	aux:neg	_	_
9	якан	якамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres|Valency=1	2	conj	_	SpaceAfter=No
10	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 aux:neg	color:blue
1	Аф	аф	AUX	_	Polarity=Neg	2	aux:neg	_	GTtags=Neg
2	Петя	Петя	PROPN	_	Case=Nom|Definite=Ind|Number=Sing	9	nsubj	_	GTtags=Prop,Sem/Mal,Sg,Nom,Indef
3	Смит	Смит	PROPN	_	Case=Nom|Definite=Ind|Number=Sing	2	flat	_	GTtags=Prop,Sem/Sur,Sg,Nom,Indef|SpaceAfter=No
4	,	,	PUNCT	CLB	_	6	punct	_	_
5	аф	аф	AUX	_	Polarity=Neg	6	aux:neg	_	GTtags=Neg
6	Марья	Марья	PROPN	_	Case=Nom|Definite=Ind|Number=Sing	2	conj	_	GTtags=Prop,Sem/Fem,Sg,Nom,Indef
7	Браун	Браун	PROPN	_	Case=Nom|Definite=Ind|Number=Sing	6	flat	_	GTtags=Prop,Sem/Sur,Sg,Nom,Indef
8	ашесть	ашезь	AUX	_	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Polarity=Neg|Tense=Prt1|VerbType=Aux	9	aux:neg	_	GTtags=Aux,Neg,Ind,Prt1,ScPl3
9	кочкав	кочкавомс	VERB	_	Connegative=Yes|Valency=1	0	root	_	GTtags=IV,ConNeg|SpaceAfter=No
10	.	.	PUNCT	CLB	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 aux:neg	color:blue
1	Ладяйне	ладямс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Tense=Prt1|Valency=2	0	root	_	_
2	прокс	прокс	ADV	Adv	_	3	advmod	_	_
3	пеняти	пеня	NOUN	N	Case=Dat|Definite=Def|Number=Sing	1	obl	_	_
4	очконять	очконя	NOUN	N	Case=Gen|Definite=Def|Number=Sing	1	obj	_	SpaceAfter=No
5	,	,	PUNCT	CLB	_	7	punct	_	_
6	пильгса	пильге	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing	7	obl	_	_
7	орхкадине	орхкадемс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Tense=Prt1|Valency=2	1	conj	_	_
8	и	и	CCONJ	CC	_	12	cc	_	_
9	аф	аф	AUX	Aux	Polarity=Neg	10	aux:neg	_	_
10	вяри	вяри	ADV	Adv	_	11	advmod	_	_
11	лиема	лиема	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	12	xcomp	_	_
12	тунь	тумс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Prt1|Valency=1	1	conj	_	SpaceAfter=No
13	,	,	PUNCT	CLB	_	15	punct	_	_
14	а	а	CCONJ	CC	_	15	cc	_	_
15	алу	алу	ADV	Adv	AdvType=Loc	12	conj	_	SpaceAfter=No
16	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


