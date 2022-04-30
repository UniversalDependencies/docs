---
layout: base
title:  'Statistics of aux in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `aux`

This relation is universal.
There are 7 language-specific subtypes of `aux`: <tt><a href="myv_jr-dep-aux-aspect.html">aux:aspect</a></tt>, <tt><a href="myv_jr-dep-aux-cnd.html">aux:cnd</a></tt>, <tt><a href="myv_jr-dep-aux-imp.html">aux:imp</a></tt>, <tt><a href="myv_jr-dep-aux-nec.html">aux:nec</a></tt>, <tt><a href="myv_jr-dep-aux-neg.html">aux:neg</a></tt>, <tt><a href="myv_jr-dep-aux-opt.html">aux:opt</a></tt>, <tt><a href="myv_jr-dep-aux-q.html">aux:q</a></tt>.

22 nodes (0%) are attached to their parents as `aux`.

21 instances of `aux` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.36363636363636.

The following 2 pairs of parts of speech are connected with `aux`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (21; 95% instances), <tt><a href="myv_jr-pos-AUX.html">AUX</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
1	Тедиде	тедиде	ADV	Adv	AdvType=Tim	4	advmod:tmod	_	GTtags=Dial,Sem/Time_dur
2	вана	вана	PART	Pcle	_	4	discourse	_	_
3	савсь	савомс	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	4	aux	_	GTtags=Der/ОвОмс,IV,Ind,Prt1,ScSg3
4	молемс	молемс	VERB	V	VerbForm=Inf	0	root	_	GTtags=Inf
5	Моргоненьгак	Морго	PROPN	N	Case=Dat|Definite=Ind|NameType=Giv|Number=Plur,Sing	4	nsubj	_	GTtags=Sem/Ant_Mal,SP,Dat,Indef|SpaceAfter=No
6	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 aux	color:blue
1	Цярданев	Цярдань	PROPN	N	Case=Lat|Definite=Ind|NameType=Geo|Number=Plur,Sing	19	obl	_	GTtags=Sem/Settlement,SP,Lat,Indef
2	жо	жо	PART	Pcle	_	1	discourse	_	GTtags=Emph|SpaceAfter=No
3	,	,	PUNCT	CLB	_	1	punct	_	_
4	ёвтнесь	ёвтнемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,ScSg3
5	тетязо	тетя	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	nsubj	_	GTtags=Sem/Kin,Sg,Nom,PxSg3|SpaceAfter=No
6	,	,	PUNCT	CLB	_	10	punct	_	_
7	конанень	кона	PRON	Pron	Case=Dat|Definite=Ind|Number=Plur,Sing|PronType=Rel	10	obl	_	GTtags=Rel,SP,Dat,Indef
8	уш	уш	ADV	Adv	AdvType=Tim	10	advmod:tmod	_	GTtags=Sem/Time
9	савкшнось	савкшномс	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	10	aux	_	GTtags=IV,Ind,Prt1,ScSg3
10	улемс	улемс	AUX	V	Valency=1|VerbForm=Inf	11	csubj	_	GTtags=IV,Inf
11	тосо	тосо	ADV	Adv	AdvType=Loc|Case=Ine	5	acl:relcl	_	GTtags=Spat,Adv|SpaceAfter=No
12	,	,	PUNCT	CLB	_	14	punct	_	_
13	эрьва	эрьва	DET	Det	Case=Nom|Definite=Ind|Number=Sing	14	det	_	GTtags=Sg,Nom,Indef
14	ёндо	ён	NOUN	N	Case=Abl|Definite=Ind|Number=Plur,Sing	19	obl	_	GTtags=Relator,SP,Abl,Indef|SpaceAfter=No
15	,	,	PUNCT	CLB	_	19	punct	_	_
16	пек	пек	ADV	Adv	AdvType=Deg	17	advmod:deg	_	GTtags=Degree
17	васоло	васоло	ADV	Adv	AdvType=Loc|Case=Loc	18	advmod:lmod	_	GTtags=Spat,Loc
18	масторсто	мастор	NOUN	N	Case=Ela|Definite=Ind|Number=Plur,Sing	19	obl	_	GTtags=Sem/Inanim_Cnt,SP,Ela,Indef
19	сакшныть	сакшномс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Pres|Valency=1	4	ccomp	_	GTtags=IV,Ind,Prs,ScPl3
20	рамсицят-микшницят	рамсицят-микшницят	VERB	V	Case=Nom|Definite=Ind|Derivation=VerbYcja|Number=Plur|Valency=1	19	nsubj	_	GTtags=IV,NomAg,Pl,Nom,Indef|SpaceAfter=No
21	,	,	PUNCT	CLB	_	27	punct	_	_
22	конатненень	кона	PRON	Pron	Case=Dat|Definite=Def|Number=Plur|PronType=Rel	27	obl	_	GTtags=Rel,Pl,Dat,Def
23	пачкодемс	пачкодемс	VERB	V	VerbForm=Inf	27	csubj	_	GTtags=Inf
24	тов	тов	ADV	Adv	AdvType=Loc|Case=Lat	23	advmod:lto	_	GTtags=Spat,Lat
25	истя	истя	ADV	Adv	_	27	advmod	_	_
26	жо	жо	PART	Pcle	_	25	discourse	_	GTtags=Emph
27	стака	стака	ADJ	A	_	4	ccomp	_	GTtags=|SpaceAfter=No
28	,	,	PUNCT	CLB	_	30	punct	_	_
29	кода	кода	ADV	Adv	AdvType=Man|PronType=Int	30	mark	_	GTtags=Interr,Manner
30	сыненсткак	сон	PRON	Pron	Case=Dat|Clitic=Add|Number=Plur|Person=3|PronType=Prs|Variant=Long	22	conj	_	GTtags=Pers,Pl3,Dat,Variant=Long,Clt/Gak|SpaceAfter=No
31	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


