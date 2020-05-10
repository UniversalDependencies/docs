---
layout: base
title:  'Statistics of obl:lmod in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `obl:lmod`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="myv_jr-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="myv_jr-dep-obl-tmod.html">obl:tmod</a></tt>.

19 nodes (0%) are attached to their parents as `obl:lmod`.

10 instances of `obl:lmod` (53%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.68421052631579.

The following 6 pairs of parts of speech are connected with `obl:lmod`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (13; 68% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (2; 11% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 5% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 5% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-ADP.html">ADP</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obl:lmod	color:blue
1	Сонзэ	сон	PRON	Pron	Case=Gen|Number=Sing|Person=3|PronType=Prs	2	nmod:poss	_	GTtags=Pers,Sg3,Gen
2	валдонтень	валдо	NOUN	N	Case=Dat|Definite=Def|Number=Sing	3	obl:lmod	_	GTtags=Sg,Dat,Def
3	ливтясть	ливтямс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,ScPl3
4	та-косто	та-косто	ADV	Adv	Case=Ela|Definite=Ind	3	obl:lmod	_	GTtags=Indef,Ela
5	кавто	кавто	NUM	Num	Case=Nom|Definite=Ind|Number=Sing|NumType=Card	7	nummod	_	GTtags=Card,Sg,Nom,Indef
6	сёрмав	сёрмав	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	7	amod	_	GTtags=Sg,Nom,Indef
7	нимилявнеть	нимилявнеть	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	3	nsubj	_	GTtags=Pl,Nom,Indef|SpaceAfter=No
8	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 obl:lmod	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obl:lmod	color:blue
1	Превеельгак	превей	ADJ	A	Clitic=Gak|Number[subj]=Sing|Person[subj]=3|Tense=Past	0	root	_	GTtags=Prt2,Sg3,Clt/Gak
2	веленть	веле	NOUN	N	Case=Gen|Definite=Def|Number=Sing	4	nmod:gobj	_	GTtags=Sg,Gen,Def
3	тезэнь	тезэнь	ADV	Adv	Case=Ill|PronType=Dem	4	obl:lmod	_	GTtags=Dem,Ill
4	путыцязо	путыця	NOUN	N	Case=Nom|Derivation=NomAg|Number=Sing|Number[psor]=Sing|Person[psor]=3|Valency=2	1	nsubj:cop	_	GTtags=TV,NomAg,Sg,Nom,PxSg3|SpaceAfter=No
5	!	!	PUNCT	CLB	_	1	punct	_	_

~~~


