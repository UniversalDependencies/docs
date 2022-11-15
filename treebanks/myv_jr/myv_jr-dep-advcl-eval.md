---
layout: base
title:  'Statistics of advcl:eval in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `advcl:eval`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-advcl.html">advcl</a></tt>.
There are also 2 other language-specific subtypes of `advcl`: <tt><a href="myv_jr-dep-advcl-cmp.html">advcl:cmp</a></tt>, <tt><a href="myv_jr-dep-advcl-tcl.html">advcl:tcl</a></tt>.

4 nodes (0%) are attached to their parents as `advcl:eval`.

3 instances of `advcl:eval` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 3 pairs of parts of speech are connected with `advcl:eval`: <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (2; 50% instances), <tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (1; 25% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 advcl:eval	color:blue
1	Тонатась	Тонатась	PRON	_	_	6	nsubj:cop	_	CGdephead=#1-&gt;0|CGdeprel=@X|GTtags=?|SpaceAfter=No
2	,	,	PUNCT	CLB	_	3	punct	_	CGdephead=#2-&gt;1|CGdeprel=@CLB|GTtags=CLB
3	неяви	неявомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|Valency=1	6	advcl:eval	_	CGdephead=#3-&gt;0|CGdeprel=@FMV|GTtags=IV,Ind,Prs,ScSg3|SpaceAfter=No
4	,	,	PUNCT	CLB	_	3	punct	_	CGdephead=#4-&gt;3|CGdeprel=@CLB|GTtags=CLB
5	аволь	аволь	AUX	Pcle	NegationType=Contrastive|Polarity=Neg	6	aux:neg	_	CGdephead=#5-&gt;0|CGdeprel=@X|GTtags=Neg,Emphatic
6	чаволаль	чавола	ADJ	A	Case=Nom|Definite=Ind|Number=Sing|Number[subj]=Sing|Person[subj]=3|Tense=Past	0	root	_	CGdephead=#6-&gt;0|CGdeprel=@PRED|GTtags=Sg,Nom,Indef,Clt/Cop,Prt2,ScSg3|SpaceAfter=No
7	...	...	PUNCT	CLB	_	6	punct	_	CGdephead=#7-&gt;3|CGdeprel=@CLB|GTtags=CLB

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 advcl:eval	color:blue
1	Ардан	Арда	PROPN	N	Case=Gen|Number=Plur|Number[psor]=Sing|Person[psor]=1	0	root	_	CGdephead=#1-&gt;1|CGdeprel=@OBJ|GTtags=Prop,Pl,Gen,PxSg1|SpaceAfter=No
2	,	,	PUNCT	CLB	_	3	punct	_	CGdephead=#2-&gt;2|CGdeprel=@CLB|GTtags=CLB
3	лисни	лиснемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|Valency=1	1	advcl:eval	_	CGdephead=#1-&gt;0|CGdeprel=@FMV|GTtags=IV,Ind,Prs,ScSg3|SpaceAfter=No
4	,	,	PUNCT	CLB	_	3	punct	_	CGdephead=#2-&gt;1|CGdeprel=@CLB|GTtags=CLB
5	те	те	DET	Det	Case=Nom|Number=Sing|PronType=Dem	7	det	_	CGdephead=#3-&gt;4|CGdeprel=@&gt;N|GTtags=Dem,Sg,Nom
6	идемевсь	идемевсь	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	7	nmod	_	CGdephead=#4-&gt;9|CGdeprel=@SUBJ&gt;|GTtags=Sg,Nom,Indef
7	лашмованть	лашмо	NOUN	N	Case=Prl|Definite=Def|Number=Sing	1	obl:lmod	_	CGdephead=#5-&gt;7|CGdeprel=@ADVL&gt;|GTtags=Sg,Prl,Def
8	—	—	PUNCT	PUNCT	_	12	punct	_	CGdephead=#6-&gt;7|CGdeprel=@CLB|GTtags=PUNCT
9	кись	ки	NOUN	N	Case=Nom|Definite=Def|Number=Sing	12	nsubj:cop	_	CGdephead=#7-&gt;1|CGdeprel=@SUBJ|GTtags=Sg,Nom,Def
10	эзганзо	эзга	ADP	Adp	Case=Prl|Number[psor]=Sing|Person[psor]=3	12	obl:lmod	_	CGdephead=#8-&gt;9|CGdeprel=@ADVL&gt;|GTtags=Prl,PxSg3
11	содасынк	содамс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Plur|Person[obj]=3|Person[subj]=2|Tense=Pres|Valency=2	12	advcl:eval	_	CGdephead=#9-&gt;1|CGdeprel=@FMV|GTtags=TV,Ind,Prs,ScPl2,OcSg3
12	кодамо	кодамо	ADJ	A	Case=Nom|Definite=Ind|Number=Sing|PronType=Int	1	conj	_	CGdephead=#10-&gt;12|CGdeprel=@&gt;N|GTtags=Interr,Sg,Nom,Indef
13	—	—	PUNCT	PUNCT	_	14	punct	_	CGdephead=#11-&gt;12|CGdeprel=@CLB|GTtags=PUNCT
14	тикшев	тикшев	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	12	conj	_	CGdephead=#12-&gt;9|CGdeprel=@&lt;SPRED|GTtags=Sg,Nom,Def|SpaceAfter=No
15	,	,	PUNCT	CLB	_	18	punct	_	CGdephead=#13-&gt;12|CGdeprel=@CLB|GTtags=CLB
16	чарытне	чары	NOUN	N	Case=Nom|Definite=Def|Number=Plur	18	nsubj	_	CGdephead=#14-&gt;16|CGdeprel=@SUBJ&gt;|GTtags=Pl,Nom,Def
17	ваязь	ваямс	VERB	V	Valency=1|VerbForm=Conv,Part	18	advcl	_	CGdephead=#15-&gt;9|CGdeprel=@FS-IMV|GTtags=IV,Der/Ozj,Ger
18	ваить	ваямс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Pres|Valency=1	14	conj	_	CGdephead=#16-&gt;1|CGdeprel=@FMV|GTtags=IV,Ind,Prs,ScPl3|SpaceAfter=No
19	.	.	PUNCT	CLB	_	1	punct	_	CGdephead=#17-&gt;1|CGdeprel=@CLB|GTtags=CLB

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 advcl:eval	color:blue
1	Улема	улема	VERB	Pcle	_	3	advcl:eval	_	CGdephead=#1-&gt;0|CGdeprel=@X|GTtags=Epist|SpaceAfter=No
2	,	,	PUNCT	CLB	_	1	punct	_	CGdephead=#2-&gt;1|CGdeprel=@CLB|GTtags=CLB
3	лазовлизе	лазомс	VERB	V	Mood=Sub|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Valency=2	0	root	_	CGdephead=#3-&gt;0|CGdeprel=@FMV|GTtags=TV,Conj,ScSg3,OcSg3
4	(	(	PUNCT	PUNCT	PunctSide=Ini	5	punct	_	CGdephead=#4-&gt;5|CGdeprel=@CLB|GTtags=PUNCT,LEFT|SpaceAfter=No
5	буканть	бука	NOUN	N	Case=Gen|Definite=Def|Number=Sing	3	obj	_	CGdephead=#5-&gt;8|CGdeprel=@&gt;N|GTtags=Sg,Gen,Def|SpaceAfter=No
6	)	)	PUNCT	PUNCT	PunctSide=Fin	5	punct	_	CGdephead=#6-&gt;5|CGdeprel=@CLB|GTtags=PUNCT,RIGHT|SpaceAfter=No
7	,	,	PUNCT	CLB	_	12	punct	_	CGdephead=#7-&gt;3|CGdeprel=@CLB|GTtags=CLB
8	кудосто	кудо	NOUN	N	Case=Ela|Definite=Ind|Number=Plur,Sing	12	obl	_	CGdephead=#8-&gt;12|CGdeprel=@ADVL&gt;|GTtags=SP,Ela,Indef
9	ажия	ажия	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	12	obl	_	CGdephead=#9-&gt;10|CGdeprel=@&gt;P|GTtags=Sg,Nom,Indef
10	марто	марто	ADP	Po	AdpType=Post	9	case	_	CGdephead=#10-&gt;12|CGdeprel=@ADVL&gt;|GTtags=Po
11	а	а	AUX	V	Polarity=Neg|VerbType=Aux	12	aux:neg	_	CGdephead=#11-&gt;11|CGdeprel=@-FAUXV&gt;|GTtags=Aux,Neg
12	лисиндеряволь	лисемс	VERB	V	Mood=CndSub|Number[subj]=Sing|Person[subj]=3|Valency=1	3	conj	_	CGdephead=#12-&gt;3|CGdeprel=@FMV|GTtags=IV,Der/Cond,V,Conj,ScSg3
13	Кечас	Кечас	PROPN	N	Case=Nom|Definite=Ind|Number=Sing	12	nsubj	_	CGdephead=#13-&gt;12|CGdeprel=@&lt;SUBJ|GTtags=Prop,Sg,Nom,Indef|SpaceAfter=No
14	,	,	PUNCT	CLB	_	16	punct	_	CGdephead=#14-&gt;13|CGdeprel=@CLB|GTtags=CLB
15	Мазяргонь	мазярго	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	16	nmod	_	CGdephead=#15-&gt;16|CGdeprel=@&gt;N|GTtags=SP,Gen,Indef
16	тетязо	тетя	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	13	appos	_	CGdephead=#16-&gt;12|CGdeprel=@SUBJ|GTtags=Sg,Nom,PxSg3|SpaceAfter=No
17	...	...	PUNCT	CLB	_	3	punct	_	CGdephead=#17-&gt;3|CGdeprel=@CLB|GTtags=CLB

~~~


