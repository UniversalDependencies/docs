---
layout: base
title:  'Statistics of advmod:mmod in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `advmod:mmod`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-advmod.html">advmod</a></tt>.
There are also 3 other language-specific subtypes of `advmod`: <tt><a href="myv_jr-dep-advmod-deg.html">advmod:deg</a></tt>, <tt><a href="myv_jr-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="myv_jr-dep-advmod-tmod.html">advmod:tmod</a></tt>.

29 nodes (0%) are attached to their parents as `advmod:mmod`.

28 instances of `advmod:mmod` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.31034482758621.

The following 8 pairs of parts of speech are connected with `advmod:mmod`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (16; 55% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (4; 14% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-PART.html">PART</a></tt> (3; 10% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (2; 7% instances), <tt><a href="myv_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="myv_jr-pos-AUX.html">AUX</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-PART.html">PART</a></tt> (1; 3% instances), <tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="myv_jr-pos-PART.html">PART</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 advmod:mmod	color:blue
1	Нама	нама	ADV	Adv	AdvType=Mod	6	advmod:mmod	_	GTtags=Epist,Parenthetic|SpaceAfter=No
2	,	,	PUNCT	CLB	_	1	punct	_	_
3	идем	идем	ADJ	A	_	4	amod	_	_
4	ракшань	ракша	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	5	nmod	_	GTtags=Sem/Anim_Cnt,SP,Gen,Indef
5	кедтькак	кедь	NOUN	N	Case=Nom|Clitic=Add|Definite=Ind|Number=Plur	6	obj	_	GTtags=Sem/Body_part,Pl,Nom,Indef,Clt/Gak
6	саить	саемс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Pres|Valency=2	0	root	_	GTtags=TV,Ind,Prs,ScPl3|SpaceAfter=No
7	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 advmod:mmod	color:blue
1	Паряк	паряк	ADV	Adv	AdvType=Mod	3	advmod:mmod	_	GTtags=Epist|SpaceAfter=No
2	,	,	PUNCT	CLB	_	1	punct	_	_
3	чопачат	чопача	NOUN	N	Case=Nom|Definite=Ind|Number=Sing|Number[subj]=Sing|Person[subj]=2|Tense=Pres	0	root	_	GTtags=Sg,Nom,Indef,Prs,ScSg2|SpaceAfter=No
4	?	?	PUNCT	CLB	_	3	punct	_	_
5	—	—	PUNCT	PUNCT	_	6	punct	_	_
6	кевкстизе	кевкстемс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Past|Valency=2	3	parataxis	_	GTtags=TV,Ind,Prt1,ScSg3,OcSg3|1q-1:27.2,7
7	Вардай	Вардай	PROPN	N	Case=Nom|Definite=Ind|NameType=Hom|Number=Sing	6	nsubj	_	GTtags=Sem/Plc,Sg,Nom,Indef
8	Алистра	Алистра	PROPN	N	Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	7	flat:name	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
9	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 advmod:mmod	color:blue
1	Ракшань	ракша	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	2	nmod	_	GTtags=Sem/Anim_Cnt,SP,Gen,Indef
2	пуло	пуло	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	3	compound	_	GTtags=Sem/Inanim_Cnt,Sg,Nom,Indef
3	пес	пе	NOUN	N	Case=Ill|Definite=Ind|Number=Plur,Sing	7	obl	_	GTtags=Sem/Inanim_Cnt,SP,Ill,Indef|SpaceAfter=No
4	,	,	PUNCT	CLB	_	5	punct	_	_
5	келя	келя	PART	Pcle	Evident=Nfh	7	advmod:mmod	_	GTtags=Evid,Parenthetic|SpaceAfter=No
6	,	,	PUNCT	CLB	_	5	punct	_	_
7	содозтядо	содомс	VERB	V	Derivation=Ozj|Number[subj]=Plur|Person[subj]=2|Tense=Pres|VerbForm=Conv	0	root	_	GTtags=Der/Озь,Prs,ScPl2|SpaceAfter=No
8	.	.	PUNCT	CLB	_	7	punct	_	_

~~~


