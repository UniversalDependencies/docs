---
layout: base
title:  'Statistics of advcl:tmod in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `advcl:tmod`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-advcl.html">advcl</a></tt>.

6 nodes (0%) are attached to their parents as `advcl:tmod`.

4 instances of `advcl:tmod` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.16666666666667.

The following 4 pairs of parts of speech are connected with `advcl:tmod`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (2; 33% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (2; 33% instances), <tt><a href="myv_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (1; 17% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-PRON.html">PRON</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 advcl:tmod	color:blue
1	Лиясто	лиясто	ADV	Adv	AdvType=Tim	3	advcl:tmod	_	GTtags=Sem/Time
2	истя	истя	ADV	Adv	AdvType=Man	3	advmod	_	GTtags=Manner
3	куродтанзат	куродомс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=2|Person[subj]=3|Tense=Pres|Valency=2	0	root	_	GTtags=TV,Ind,Prs,ScSg3,OcSg2|SpaceAfter=No
4	,	,	PUNCT	CLB	_	6	punct	_	_
5	а	а	AUX	Pcle	Polarity=Neg	6	aux:neg	_	GTtags=Neg
6	содат	содамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=2|Tense=Pres|Valency=2	3	conj	_	GTtags=TV,Ind,Prs,ScSg2|SpaceAfter=No
7	,	,	PUNCT	CLB	_	9	punct	_	_
8	мезе	мезе	PRON	Pron	Case=Nom|Definite=Ind|Number=Sing|PronType=Int	9	obj	_	GTtags=Interr,Sg,Nom,Indef
9	теемс	теемс	VERB	V	Valency=2|VerbForm=Inf	6	ccomp	_	GTtags=TV,Inf|SpaceAfter=No
10	,	,	PUNCT	CLB	_	12	punct	_	_
11	ков	ков	ADV	Adv	Case=Lat|PronType=Int	12	obl:lmod	_	GTtags=Interr,Lat
12	ношкстамс	ношкстамс	VERB	V	Valency=1|VerbForm=Inf	6	ccomp	_	GTtags=IV,Inf|SpaceAfter=No
13	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 advcl:tmod	color:blue
1	Иень	ие	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	2	obl	_	GTtags=SP,Gen,Indef
2	ютазь	ютамс	VERB	V	Derivation=Ozj|Valency=2|VerbForm=Conv	5	advcl:tmod	_	GTtags=TV,Der,Der/Ozj,Ger
3	агрономонть	агроном	NOUN	N	Case=Gen|Definite=Def|Number=Sing	5	obj	_	GTtags=Sg,Gen,Def
4	веленек	веле	NOUN	N	Case=Com|Definite=Ind|Number=Plur,Sing	5	obl	_	GTtags=Sem/Plc,SP,Com,Indef
5	путызь	путомс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Plur|Person[obj]=3|Person[subj]=3|Tense=Past|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,ScPl3,OcSg3
6	предэкс	пред	NOUN	N	Case=Tra|Definite=Ind|Number=Plur,Sing	5	obl	_	GTtags=SP,Tra,Indef|SpaceAfter=No
7	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 advcl:tmod	color:blue
1	Ладизь	ладямс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Plur|Person[obj]=3|Person[subj]=3|Tense=Past|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,ScPl3,OcSg3
2	се	се	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	3	det	_	GTtags=Dem,Sg,Nom
3	чокшнестэнть	чокшне	NOUN	N	Case=Ela|Definite=Def|Number=Sing	1	obl:tmod	_	GTtags=Sg,Ela,Def
4	ушодомс	ушодомс	VERB	V	Valency=2|VerbForm=Inf	1	xcomp	_	GTtags=TV,Inf
5	тикшень	тикше	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	6	obj	_	GTtags=SP,Gen,Indef
6	урядамонть	урядамс	VERB	V	Case=Gen|Definite=Def|Derivation=Vnoun|Number=Sing|Valency=2	4	obj	_	GTtags=TV,Der,Der/NomAct,N,Sg,Gen,Def
7	сестэ	сестэ	ADV	Adv	Case=Ela	4	advmod:tmod	_	GTtags=Ela|SpaceAfter=No
8	,	,	PUNCT	CLB	_	10	punct	_	_
9	зярдо	зярдо	SCONJ	CS	Case=Temp	10	mark	_	GTtags=Temp
10	мери	меремс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|Valency=2	7	advcl:tmod	_	GTtags=TV,Ind,Prs,ScSg3
11	агрономось	агроном	NOUN	N	Case=Nom|Definite=Def|Number=Sing	10	nsubj	_	GTtags=Sg,Nom,Def|SpaceAfter=No
12	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


