---
layout: base
title:  'Statistics of nmod:comp in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `nmod:comp`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="myv_jr-dep-nmod-gobj.html">nmod:gobj</a></tt>, <tt><a href="myv_jr-dep-nmod-gsubj.html">nmod:gsubj</a></tt>.

11 nodes (0%) are attached to their parents as `nmod:comp`.

11 instances of `nmod:comp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.18181818181818.

The following 6 pairs of parts of speech are connected with `nmod:comp`: <tt><a href="myv_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (5; 45% instances), <tt><a href="myv_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (2; 18% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-PRON.html">PRON</a></tt> (1; 9% instances), <tt><a href="myv_jr-pos-ADP.html">ADP</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 9% instances), <tt><a href="myv_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="myv_jr-pos-PRON.html">PRON</a></tt> (1; 9% instances), <tt><a href="myv_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:comp	color:blue
1	Ярсамодо	ярсамо	NOUN	N	Case=Abl|Definite=Ind|Number=Plur,Sing	2	nmod:comp	_	GTtags=SP,Abl,Indef
2	мейле	мейле	ADV	Adv	AdvType=Tim	7	advmod	_	GTtags=Sem/Time_dur
3	Кечайнень	Кечай	PROPN	N	Case=Dat|Definite=Ind|Number=Plur,Sing	7	obl	_	GTtags=SP,Dat,Indef
4	таго	таго	ADV	Adv	AdvType=Tim	7	advmod	_	GTtags=Sem/Time
5	савсь	савомс	AUX	V	Derivation=OvtOms|Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Prt1|Valency=1	7	aux	_	GTtags=Der/ОвОмс,IV,Ind,Prt1,ScSg3
6	кавксть	кавксть	ADV	Adv	NumType=Mult	7	advmod	_	GTtags=Iter
7	молемс	молемс	VERB	V	VerbForm=Inf	0	root	_	GTtags=Inf
8	Кокша	Кокша	PROPN	N	Case=Nom|Definite=Ind|Number=Sing	7	obl	_	GTtags=Sg,Nom,Indef
9	пандонтень	пандо	NOUN	N	Case=Dat|Definite=Def|Number=Sing	8	nmod	_	GTtags=Sg,Dat,Def|SpaceAfter=No
10	.	.	PUNCT	CLB	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 nmod:comp	color:blue
1	Чопоньбелев	чопоньбелев	ADV	Adv	Case=Lat	13	advmod	_	GTtags=Lat
2	жо	жо	PART	Pcle	_	1	discourse	_	GTtags=Emph|SpaceAfter=No
3	,	,	PUNCT	CLB	_	1	punct	_	_
4	ракшатнень	ракша	NOUN	N	Case=Gen|Definite=Def|Number=Plur	5	nmod	_	GTtags=Sem/Anim_Cnt,Pl,Gen,Def
5	самодо	самс	VERB	V	Case=Abl|Definite=Ind|Number=Plur,Sing|VerbForm=Vnoun	8	nmod:comp	_	GTtags=NomAct,SP,Abl,Indef
6	ков	ков	ADV	Adv	_	8	advmod	_	_
7	седе	седе	ADV	Adv	Degree=Cmp	8	advmod	_	GTtags=Comp
8	икеле	икеле	ADV	Adv	AdvType=Tim	13	advmod	_	GTtags=Sem/Time
9	пакшатне	пакша	NOUN	N	Case=Nom|Definite=Def|Number=Plur	13	nsubj	_	GTtags=Sem/Inanim_Cnt,Pl,Nom,Def|SpaceAfter=No
10	,	,	PUNCT	CLB	_	11	punct	_	_
11	окойники	окойники	ADV	Adv	AdvType=Tim	8	appos	_	GTtags=Sem/Time|SpaceAfter=No
12	,	,	PUNCT	CLB	_	13	punct	_	_
13	кармить	кармамс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Pres|Valency=1	0	root	_	GTtags=IV,Ind,Prs,ScPl3
14	менеме	менемс	VERB	V	Case=Loc|VerbForm=Inf	13	xcomp	_	GTtags=Inf,Loc|SpaceAfter=No
15	,	,	PUNCT	CLB	_	20	punct	_	_
16	ды	ды	CCONJ	CC	_	20	cc	_	_
17	вейке	вейке	NUM	Num	Case=Nom|Definite=Ind|Number=Sing	18	compound	_	GTtags=Sg,Nom,Indef
18	омбоце	омбоце	ADJ	Num	Case=Nom|Definite=Ind|Number=Sing	20	advcl	_	GTtags=Ord,Sg,Nom,Indef
19	мельга	мельга	ADP	Adp	AdpType=Post	18	case	_	GTtags=Po
20	пуромить	пуромомс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Pres	13	conj	_	GTtags=Ind,Prs,ScPl3
21	тей	тей	ADV	Adv	AdvType=Loc|Case=Lat	20	obl	_	GTtags=Spat,Lat|SpaceAfter=No
22	,	,	PUNCT	CLB	_	24	punct	_	_
23	налксема	налксема	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	24	compound	_	GTtags=Sg,Nom,Indef
24	кужос	кужо	NOUN	N	Case=Ill|Definite=Ind|Number=Plur,Sing	21	appos	_	GTtags=Sem/Inanim_Cnt,SP,Ill,Indef|SpaceAfter=No
25	.	.	PUNCT	CLB	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 nmod:comp	color:blue
1	Кадык	кадык	AUX	Aux	Mood=Imp	5	aux:opt	_	GTtags=TV,Imprt,ScSg2,OcSg3
2	аволь	аволь	AUX	Pcle	PartType=Emp|Polarity=Neg	3	aux:neg	_	GTtags=Neg,Intensive
3	свал	свал	ADV	Adv	AdvType=Tim|PronType=Tot	6	advmod	_	GTtags=Sem/Time
4	те	те	DET	Det	Number=Sing|PronType=Dem	5	det	_	GTtags=Dem,Sg
5	ёнкссонть	ёнкс	NOUN	N	Case=Ine|Definite=Def|Number=Sing	18	advcl	_	GTtags=Sem/Plc,Sg,Ine,Def
6	тундо	тундо	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	5	nsubj	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
7	,	,	PUNCT	CLB	_	10	punct	_	_
8	кадык	кадык	AUX	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=2|Tense=Prt1|Valency=2	10	aux:opt	_	GTtags=TV,Ind,Prt1,ScSg2,OcSg3
9	а	а	AUX	Pcle	Polarity=Neg	10	aux:neg	_	GTtags=Neg
10	лымби	лымбамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|Valency=1	18	advcl	_	GTtags=IV,Ind,Prs,ScSg3
11	маласонзо	маласо	ADP	Adp	AdvType=Loc|Case=Ine|Number[psor]=Sing|Person[psor]=3	12	amod	_	GTtags=Spat,Ine,PxSg3
12	иневедь	иневедь	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	10	nsubj	_	GTtags=Sem/Plc,Sg,Nom,Indef|SpaceAfter=No
13	,	,	PUNCT	CLB	_	18	punct	_	_
14	сондензэ	сон	PRON	Pron	Case=Abl|Number=Sing|Person=3|PronType=Prs	15	nmod:comp	_	GTtags=Pers,Sg3,Abl
15	мазый	мазый	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	18	obj	_	GTtags=Der/MWN,N,Sg,Nom,Indef
16	ялатеке	ялатеке	ADV	Adv	_	18	advmod	_	_
17	а	а	AUX	Pcle	Polarity=Neg	18	aux:neg	_	GTtags=Neg
18	муят	муемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=2|Tense=Pres|Valency=2	0	root	_	GTtags=TV,Ind,Prs,ScSg2|SpaceAfter=No
19	.	.	PUNCT	CLB	_	18	punct	_	_

~~~


