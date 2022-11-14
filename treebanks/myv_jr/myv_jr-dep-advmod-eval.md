---
layout: base
title:  'Statistics of advmod:eval in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `advmod:eval`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-advmod.html">advmod</a></tt>.
There are also 7 other language-specific subtypes of `advmod`: <tt><a href="myv_jr-dep-advmod-cau.html">advmod:cau</a></tt>, <tt><a href="myv_jr-dep-advmod-cmp.html">advmod:cmp</a></tt>, <tt><a href="myv_jr-dep-advmod-deg.html">advmod:deg</a></tt>, <tt><a href="myv_jr-dep-advmod-foc.html">advmod:foc</a></tt>, <tt><a href="myv_jr-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="myv_jr-dep-advmod-mmod.html">advmod:mmod</a></tt>, <tt><a href="myv_jr-dep-advmod-tmod.html">advmod:tmod</a></tt>.

47 nodes (0%) are attached to their parents as `advmod:eval`.

39 instances of `advmod:eval` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.36170212765957.

The following 9 pairs of parts of speech are connected with `advmod:eval`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (31; 66% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (4; 9% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (3; 6% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-PART.html">PART</a></tt> (3; 6% instances), <tt><a href="myv_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (2; 4% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="myv_jr-pos-DET.html">DET</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-PART.html">PART</a></tt> (1; 2% instances), <tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="myv_jr-pos-PART.html">PART</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 advmod:eval	color:blue
1	―	―	PUNCT	PUNCT	_	5	punct	_	_
2	Седеезэ	седей	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	nsubj	_	GTtags=Sg,Nom,PxSg3
3	нать	нать	ADV	Adv	_	5	advmod:eval	_	GTtags=Parenthetic
4	эзь	а	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Polarity=Neg|Tense=Past|VerbType=Aux	5	aux:neg	_	GTtags=VerbType=Aux,Neg,Ind,Prt1,ScSg3
5	кирдть	кирдемс	VERB	V	Mood=Imp|Number[subj]=Sing|Person[subj]=2|Valency=2	0	root	_	GTtags=TV,Imprt,ScSg2|SpaceAfter=No
6	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 advmod:eval	color:blue
1	Паряк	паряк	ADV	Adv	AdvType=Mod	3	advmod:eval	_	GTtags=Epist|SpaceAfter=No
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 advmod:eval	color:blue
1	Тонтеметь	тон	PRON	Pron	Case=Abe|Number=Sing|Person=2|PronType=Prs	6	obl	_	GTtags=Pers,Sg2,Abe
2	нать	нать	ADV	Adv	_	1	advmod:eval	_	GTtags=Parenthetic
3	весе	весе	PRON	Pron	Case=Nom|Definite=Ind|Number=Sing|PronType=Tot	4	det	_	GTtags=Tot,Sg,Nom,Indef
4	тевтне	тев	NOUN	N	Case=Nom|Definite=Def|Number=Plur	6	nsubj	_	GTtags=Pl,Nom,Def
5	ульнесть	ульнемс	AUX	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past|Valency=1	6	cop	_	GTtags=IV,Ind,Prt1,ScPl3
6	велесэнк	веле	NOUN	N	Case=Ine|Number=Plur,Sing|Number[psor]=Plur|Person[psor]=2	0	root	_	GTtags=Sem/Plc,SP,Ine,PxPl2|SpaceAfter=No
7	?	?	PUNCT	CLB	_	6	punct	_	_

~~~


