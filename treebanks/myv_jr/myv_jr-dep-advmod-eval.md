---
layout: base
title:  'Statistics of advmod:eval in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `advmod:eval`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-advmod.html">advmod</a></tt>.
There are also 10 other language-specific subtypes of `advmod`: <tt><a href="myv_jr-dep-advmod-cau.html">advmod:cau</a></tt>, <tt><a href="myv_jr-dep-advmod-comp.html">advmod:comp</a></tt>, <tt><a href="myv_jr-dep-advmod-deg.html">advmod:deg</a></tt>, <tt><a href="myv_jr-dep-advmod-foc.html">advmod:foc</a></tt>, <tt><a href="myv_jr-dep-advmod-lfrom.html">advmod:lfrom</a></tt>, <tt><a href="myv_jr-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="myv_jr-dep-advmod-lmp.html">advmod:lmp</a></tt>, <tt><a href="myv_jr-dep-advmod-lto.html">advmod:lto</a></tt>, <tt><a href="myv_jr-dep-advmod-mmod.html">advmod:mmod</a></tt>, <tt><a href="myv_jr-dep-advmod-tmod.html">advmod:tmod</a></tt>.

34 nodes (0%) are attached to their parents as `advmod:eval`.

31 instances of `advmod:eval` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.41176470588235.

The following 9 pairs of parts of speech are connected with `advmod:eval`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (20; 59% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (4; 12% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-PART.html">PART</a></tt> (3; 9% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (2; 6% instances), <tt><a href="myv_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="myv_jr-pos-AUX.html">AUX</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="myv_jr-pos-DET.html">DET</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-PART.html">PART</a></tt> (1; 3% instances), <tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="myv_jr-pos-PART.html">PART</a></tt> (1; 3% instances).


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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 advmod:eval	color:blue
1	Ракшань	ракша	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	2	nmod	_	GTtags=Sem/Anim_Cnt,SP,Gen,Indef
2	пуло	пуло	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	3	compound	_	GTtags=Sem/Inanim_Cnt,Sg,Nom,Indef
3	пес	пе	NOUN	N	Case=Ill|Definite=Ind|Number=Plur,Sing	7	obl	_	GTtags=Sem/Inanim_Cnt,SP,Ill,Indef|SpaceAfter=No
4	,	,	PUNCT	CLB	_	5	punct	_	_
5	келя	келя	PART	Pcle	Evident=Nfh	7	advmod:eval	_	GTtags=Evid,Parenthetic|SpaceAfter=No
6	,	,	PUNCT	CLB	_	5	punct	_	_
7	содозтядо	содомс	VERB	V	Derivation=Ozj|Number[subj]=Plur|Person[subj]=2|Tense=Pres|VerbForm=Conv	0	root	_	GTtags=Der/Озь,Prs,ScPl2|SpaceAfter=No
8	.	.	PUNCT	CLB	_	7	punct	_	_

~~~


