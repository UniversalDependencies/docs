---
layout: base
title:  'Statistics of advmod:lmod in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `advmod:lmod`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-advmod.html">advmod</a></tt>.
There are also 7 other language-specific subtypes of `advmod`: <tt><a href="myv_jr-dep-advmod-cau.html">advmod:cau</a></tt>, <tt><a href="myv_jr-dep-advmod-cmp.html">advmod:cmp</a></tt>, <tt><a href="myv_jr-dep-advmod-deg.html">advmod:deg</a></tt>, <tt><a href="myv_jr-dep-advmod-eval.html">advmod:eval</a></tt>, <tt><a href="myv_jr-dep-advmod-foc.html">advmod:foc</a></tt>, <tt><a href="myv_jr-dep-advmod-mmod.html">advmod:mmod</a></tt>, <tt><a href="myv_jr-dep-advmod-tmod.html">advmod:tmod</a></tt>.

90 nodes (0%) are attached to their parents as `advmod:lmod`.

70 instances of `advmod:lmod` (78%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.92222222222222.

The following 3 pairs of parts of speech are connected with `advmod:lmod`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (76; 84% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (10; 11% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (4; 4% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 advmod:lmod	color:blue
1	―	―	PUNCT	PUNCT	_	4	punct	_	_
2	Сынст	сон	PRON	Pron	Case=Gen|Number=Plur|Person=3|PronType=Prs	4	obj	_	GTtags=Pers,Pl3,Gen
3	карми	кармамс	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|Valency=1	4	aux:aspect	_	GTtags=IV,Ind,Prs,ScSg3
4	ускомаст	ускомс	VERB	V	Case=Loc|Number[psor]=Plur|Person[psor]=3|Valency=2|VerbForm=Inf	0	root	_	GTtags=Err/Orth,TV,Inf,Loc,PxPl3
5	тия	тия	ADV	Adv	Case=Prl	4	advmod:lmod	_	GTtags=Prl|SpaceAfter=No
6	...	...	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod:lmod	color:blue
1	Бути	бути	SCONJ	CS	Mood=Cnd	8	mark	_	GTtags=Cond
2	бу	бу	AUX	Pcle	Case=Nom|Definite=Ind|Number=Sing	8	aux:cnd	_	GTtags=Sg,Nom,Indef
3	а	а	AUX	Pcle	Polarity=Neg	4	aux:neg	_	GTtags=Neg
4	васоло	васоло	ADV	Adv	AdvType=Loc|Case=Loc	5	advmod:lmod	_	GTtags=Spat,Loc
5	таркатне	тарка	NOUN	N	Case=Nom|Definite=Def|Number=Plur	8	nsubj	_	GTtags=Sem/Inanim_Cnt,Pl,Nom,Def
6	—	—	PUNCT	CLB	_	8	punct	_	_
7	тыц	тыц	PART	Pcle	Case=Nom|Definite=Ind|Number=Sing	8	advmod	_	GTtags=Sg,Nom,Indef
8	пештявлизь	пештямс	VERB	V	Mood=Sub|Number[obj]=Sing|Number[subj]=Plur|Person[obj]=3|Person[subj]=3	0	root	_	GTtags=Conj,ScPl3,OcSg3
9	весень	весе	PRON	Pron	Case=Gen|Definite=Ind|Number=Plur,Sing|PronType=Tot	8	obj	_	GTtags=Tot,SP,Gen,Indef
10	нетне	неть	PRON	Pron	Case=Nom|Definite=Def|Number=Plur|PronType=Dem	11	det	_	GTtags=Dem,Pl,Nom,Def
11	кедтнеде	кедь	NOUN	N	Case=Abl|Definite=Def|Number=Plur	8	obl	_	GTtags=Sem/Body_part,Pl,Abl,Def|SpaceAfter=No
12	.	.	PUNCT	CLB	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod:lmod	color:blue
1	Тайганть	тайга	NOUN	N	Case=Gen|Definite=Def|Number=Sing	3	nmod:poss	_	GTtags=Sg,Gen,Def
2	прок	прок	ADV	Adv	_	1	advmod	_	_
3	лезэзэяк	лезэ	NOUN	N	Case=Nom|Clitic=Add|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	nsubj	_	GTtags=Sg,Nom,PxSg3,Clt/Gak
4	косояк	косояк	ADV	Adv	Case=Ine|PronType=Ind	5	advmod:lmod	_	GTtags=Indef,Ine
5	арась	арась	ADJ	A	Number[subj]=Sing|Person[subj]=3|Polarity=Neg|Tense=Pres	0	root	_	GTtags=Neg,Cop,Ind,Prs,ScSg3|SpaceAfter=No
6	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


