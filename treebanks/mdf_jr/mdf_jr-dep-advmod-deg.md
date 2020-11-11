---
layout: base
title:  'Statistics of advmod:deg in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `advmod:deg`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-advmod.html">advmod</a></tt>.
There are also 3 other language-specific subtypes of `advmod`: <tt><a href="mdf_jr-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="mdf_jr-dep-advmod-mmod.html">advmod:mmod</a></tt>, <tt><a href="mdf_jr-dep-advmod-tmod.html">advmod:tmod</a></tt>.

32 nodes (2%) are attached to their parents as `advmod:deg`.

31 instances of `advmod:deg` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.0625.

The following 6 pairs of parts of speech are connected with `advmod:deg`: <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (20; 63% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (6; 19% instances), <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-PART.html">PART</a></tt> (2; 6% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (2; 6% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-PART.html">PART</a></tt> (1; 3% instances), <tt><a href="mdf_jr-pos-DET.html">DET</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 advmod:deg	color:blue
1	А	а	CCONJ	CC	_	2	cc	_	_
2	касан	касомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres|Valency=1	0	root	_	_
3	пяк	пяк	ADV	Adv	AdvType=Deg	4	advmod:deg	_	_
4	савор	савор	ADV	Adv	_	2	advmod	_	SpaceAfter=No
5	,	,	PUNCT	CLB	_	9	punct	_	_
6	нинге	нинге	ADV	Adv	AdvType=Tim	9	advmod:tmod	_	_
7	школавга	школа	NOUN	N	Case=Lat|Clitic=AddGA|Definite=Ind|Number=Plur,Sing	9	obl:lmod	_	_
8	аф	аф	AUX	Aux	Polarity=Neg	9	aux:neg	_	_
9	якан	якамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres|Valency=1	2	conj	_	SpaceAfter=No
10	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod:deg	color:blue
1	Няить	няемс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=2|Tense=Prt1|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,ScSg2,OcSg3|SpaceAfter=No
2	,	,	PUNCT	CLB	_	5	punct	_	_
3	тяса	тяса	ADV	Adv	_	5	advmod:lmod	_	_
4	ёфcи	ёфcи	ADV	Adv	AdvType=Deg	5	advmod:deg	_	GTtags=Deg
5	од	од	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	1	conj	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
6	,	,	PUNCT	CLB	_	5	punct	_	_
7	мазы	мазы	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	8	amod	_	GTtags=Sg,Nom,Indef
8	ава	ава	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	9	nsubj	_	GTtags=Sg,Nom,Indef
9	авардсь	авардемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Prt1|Valency=1	1	parataxis	_	GTtags=IV,Ind,Prt1,ScSg3
10	сельмоведь	сельмоведь	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	9	obl	_	GTtags=Sg,Nom,Indef
11	мархта	мархта	ADP	Adp	_	10	case	_	SpaceAfter=No
12	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod:deg	color:blue
1	Васясь	Вася	PROPN	N	Case=Nom|Definite=Def|NameType=Giv|Number=Sing	4	nsubj	_	GTtags=Prop,Sg,Nom,Def
2	сяда	сяда	PART	Pcle	Degree=Cmp	3	advmod:deg	_	GTtags=Comp
3	тёждяста	тёждяста	ADV	Adv	_	4	advmod	_	_
4	куфкстсь	куфкстомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Prt1|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,ScSg3|SpaceAfter=No
5	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


