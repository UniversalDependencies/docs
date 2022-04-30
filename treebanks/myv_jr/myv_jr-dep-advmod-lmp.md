---
layout: base
title:  'Statistics of advmod:lmp in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `advmod:lmp`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-advmod.html">advmod</a></tt>.
There are also 10 other language-specific subtypes of `advmod`: <tt><a href="myv_jr-dep-advmod-cau.html">advmod:cau</a></tt>, <tt><a href="myv_jr-dep-advmod-comp.html">advmod:comp</a></tt>, <tt><a href="myv_jr-dep-advmod-deg.html">advmod:deg</a></tt>, <tt><a href="myv_jr-dep-advmod-eval.html">advmod:eval</a></tt>, <tt><a href="myv_jr-dep-advmod-foc.html">advmod:foc</a></tt>, <tt><a href="myv_jr-dep-advmod-lfrom.html">advmod:lfrom</a></tt>, <tt><a href="myv_jr-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="myv_jr-dep-advmod-lto.html">advmod:lto</a></tt>, <tt><a href="myv_jr-dep-advmod-mmod.html">advmod:mmod</a></tt>, <tt><a href="myv_jr-dep-advmod-tmod.html">advmod:tmod</a></tt>.

5 nodes (0%) are attached to their parents as `advmod:lmp`.

4 instances of `advmod:lmp` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.4.

The following 2 pairs of parts of speech are connected with `advmod:lmp`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (4; 80% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 advmod:lmp	color:blue
1	―	―	PUNCT	PUNCT	_	4	punct	_	_
2	Сынст	сон	PRON	Pron	Case=Gen|Number=Plur|Person=3|PronType=Prs	4	obj	_	GTtags=Pers,Pl3,Gen
3	карми	кармамс	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|Valency=1	4	aux:aspect	_	GTtags=IV,Ind,Prs,ScSg3
4	ускомаст	ускомс	VERB	V	Case=Loc|Number[psor]=Plur|Person[psor]=3|Valency=2|VerbForm=Inf	0	root	_	GTtags=Err/Orth,TV,Inf,Loc,PxPl3
5	тия	тия	ADV	Adv	Case=Prl	4	advmod:lmp	_	GTtags=Prl|SpaceAfter=No
6	...	...	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 advmod:lmp	color:blue
1	Кинть	ки	NOUN	N	Case=Gen|Definite=Def|Number=Sing	12	obl	_	GTtags=Sg,Gen,Def|Gloss=road
2	кувалткак	кувалт	ADP	Adp	AdpType=Post|Clitic=Add	1	case	_	GTtags=Relator,Po,Add|Gloss=along|SpaceAfter=No
3	,	,	PUNCT	CLB	_	1	punct	_	_
4	вальмалга	вальмало	ADV	Adv	AdvType=Loc|Case=Prl	6	advmod:lmp	_	GTtags=Spat,Prl|Gloss=below-the-window
5	лов	лов	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	6	compound	_	GTtags=Sg,Nom,Indef|Gloss=snow
6	губорькстнэнь	губорькс	NOUN	N	Case=Gen|Definite=Def|Number=Plur	7	nmod	_	GTtags=Pl,Gen,Def|Gloss=mound
7	ланга	ланго	NOUN	N	Case=Prl|Definite=Ind|Number=Plur,Sing	11	obl:lmp	_	GTtags=Relator,Po,Prl|Gloss=along
8	тюжа	тюжа	ADJ	A	_	9	amod	_	GTtags=|Gloss=brown
9	гуйкс	гуй	NOUN	N	Case=Tra|Definite=Ind|Number=Plur,Sing	10	obl	_	GTtags=SP,Tra,Indef|Gloss=snake
10	менчевиця	менчевемс	VERB	V	Derivation=VerbYcja|Tense=Pres|Valency=1|VerbForm=Part	11	amod	_	GTtags=IV,Der/Ыця,Act,Prs,VerbForm=Part|Gloss=meander
11	янтнэваяк	ян	NOUN	N	Case=Prl|Clitic=Add|Definite=Def|Number=Plur	12	obl:lmp	_	GTtags=Pl,Prl,Def,Add|Gloss=path
12	мольсть	молемс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,ScPl3|1q-1:10.1,17|Gloss=go
13	эрьва	эрьва	DET	Det	Case=Nom|Definite=Ind|Number=Sing|PronType=Tot	14	compound	_	GTtags=Tot,Sg,Nom,Indef
14	кодамо	кодамо	ADJ	A	Case=Nom|Number=Sing|PronType=Int	15	amod	_	GTtags=Interr,Nom,Sg|Gloss=all-kinds-of
15	кедьге	кедьге	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	17	nmod	_	GTtags=Sg,Nom,Indef|Gloss=vessel
16	марто	марто	ADP	Adp	AdpType=Post	15	case	_	GTtags=Po,COM|Gloss=with
17	тейтерь-ават	тейтерь-ава	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	12	nsubj	_	GTtags=Pl,Nom,Indef|Gloss=woman|SpaceAfter=No
18	,	,	PUNCT	CLB	_	20	punct	_	_
19	кшнинь	кшни	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	20	nmod	_	GTtags=SP,Gen,Indef|Gloss=metal
20	ведраст	ведра	NOUN	N	Case=Gen|Number=Plur|Number[psor]=Plur|Person[psor]=3	21	obj	_	GTtags=Pl,Gen,PxPl3|1q-1:10.1,24|Gloss=bucket
21	кальдерьгавтыця	кальдерьгавтомс	VERB	V	Case=Nom|Definite=Ind|Number=Sing|VerbForm=Part	24	amod	_	GTtags=TV,PrsPrc,Sg,Nom,Indef|Gloss=clang
22	ды	ды	CCONJ	CC	_	21	cc	_	GTtags=|Gloss=and
23	чикордовтыця	чикордовтомс	VERB	V	Case=Nom|Definite=Ind|Derivation=VerbYcja|Number=Sing|Valency=2	21	conj	_	GTtags=TV,NomAg,N,Sg,Nom,Indef|Gloss=creak
24	цёрат	цёра	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	17	conj	_	GTtags=Pl,Nom,Indef|Gloss=young-man|SpaceAfter=No
25	.	.	PUNCT	CLB	_	12	punct	_	_

~~~


