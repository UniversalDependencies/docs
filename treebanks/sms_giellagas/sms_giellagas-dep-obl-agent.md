---
layout: base
title:  'Statistics of obl:agent in UD_Skolt_Sami-Giellagas'
udver: '2'
---

## Treebank Statistics: UD_Skolt_Sami-Giellagas: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="sms_giellagas-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="sms_giellagas-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="sms_giellagas-dep-obl-tmod.html">obl:tmod</a></tt>.

3 nodes (0%) are attached to their parents as `obl:agent`.

3 instances of `obl:agent` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.66666666666667.

The following 2 pairs of parts of speech are connected with `obl:agent`: <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (2; 67% instances), <tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt>-<tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 obl:agent	color:blue
1	Mieʹccest	meäʹcc	NOUN	N	Case=Loc|Number=Sing	2	obl:lmod	_	GTtags=Sg,Loc
2	jåått	jååʹtted	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	GTtags=Ind,Prs,Sg3
3	di	di	CCONJ	CC	_	4	cc	_	_
4	ceälkk	ceäʹlǩǩed	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	conj	_	GTtags=Ind,Prs,Sg3|SpaceAfter=No
5	,	,	PUNCT	CLB	_	9	punct	_	_
6	što	što	SCONJ	CS	_	9	mark	_	_
7	tueʹllj	tueʹllj	NOUN	N	Case=Acc|Number=Sing	9	nsubj:pass	_	GTtags=Sg,Acc
8	i-ǥõl	i-ǥõl	AUX	V	_	9	aux:neg	_	_
9	kooǯǯted	kooǯǯted	VERB	V	VerbForm=Inf	4	ccomp	_	GTtags=Inf|SpaceAfter=No
10	,	,	PUNCT	CLB	_	14	punct	_	_
11	kåʹddtueʹllj	kåʹddtueʹllj	NOUN	N	Case=Acc|Number=Sing	14	nsubj:pass	_	GTtags=Sg,Acc
12	i-ǥõl	i-ǥõl	AUX	_	_	14	aux	_	_
13	pärnna	päʹrnn	NOUN	N	Animacy=Hum|Case=Ill|Number=Sing	14	obl:agent	_	GTtags=Sem/Kin,Sg,Ill
14	kooǯǯted	kooǯǯted	VERB	V	VerbForm=Inf	9	appos	_	GTtags=Inf|SpaceAfter=No
15	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 obl:agent	color:blue
1	Suʹst	son	PRON	Pron	Case=Loc|Number=Sing|Person=3|PronType=Prs	4	obl:agent	_	GTtags=Pers,Sg3,Loc
2	leäi	leeʹd	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|Valency=1	4	aux	_	GTtags=IV,Ind,Prt,Sg3
3	õlggâm	õlggâd	AUX	Aux	Aspect=Perf|VerbForm=Part	4	aux	_	GTtags=Act,PrfPrc
4	leeʹd	leeʹd	AUX	V	Valency=1|VerbForm=Inf	0	root	_	GTtags=IV,Inf
5	tõn	tõt	DET	Det	Case=Gen|Number=Sing|PronType=Dem	6	det	_	GTtags=Dem,Sg,Gen
6	peeiʹv	peiʹvv	NOUN	N	Case=Gen|Number=Sing	4	obl:tmod	_	GTtags=Sg,Gen
7	čååǥǥâʹttmen	čååǥǥâʹttmen	VERB	V	_	4	xcomp	_	_
8	vuõptees	vuõptt	NOUN	N	Case=Acc|Number=Plur|Number[psor]=Sing|Person[psor]=3	7	obj	_	GTtags=Pl,Acc,PxSg3|SpaceAfter=No
9	,	,	PUNCT	CLB	_	13	punct	_	_
10	leša	leša	CCONJ	CC	_	13	mark	_	_
11	mii	mii	PRON	Pron	Case=Nom|Number=Sing|PronType=Rel	13	nsubj	_	GTtags=Rel,Sg,Nom
12	leežž	leeʹd	AUX	Aux	Mood=Pot|Number=Sing|Person=3|Valency=1	13	aux	_	GTtags=IV,Pot,Sg3
13	šõddâm	šõddâd	VERB	V	Aspect=Perf|VerbForm=Part	4	advcl	_	GTtags=Act,PrfPrc
14	ǥu	ǥu	SCONJ	CS	_	18	mark	_	_
15	ij	ij	AUX	Aux	Mood=Ind|Number=Sing|Person=3|Polarity=Neg	18	aux:neg	_	GTtags=Neg,Ind,Sg3
16	tâʹl	tâʹl	ADV	Adv	AdvType=Tim	18	advmod:tmod	_	GTtags=Sem/Time
17	ni	ni	PART	Pcle	_	18	advmod:neg	_	_
18	vuäittam	vueiʹtted	VERB	V	Aspect=Perf|VerbForm=Part	13	advcl	_	GTtags=Act,PrfPrc|SpaceAfter=No
19	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


