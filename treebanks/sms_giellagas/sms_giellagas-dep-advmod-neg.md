---
layout: base
title:  'Statistics of advmod:neg in UD_Skolt_Sami-Giellagas'
udver: '2'
---

## Treebank Statistics: UD_Skolt_Sami-Giellagas: Relations: `advmod:neg`

This relation is a language-specific subtype of <tt><a href="sms_giellagas-dep-advmod.html">advmod</a></tt>.
There are also 3 other language-specific subtypes of `advmod`: <tt><a href="sms_giellagas-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="sms_giellagas-dep-advmod-mmod.html">advmod:mmod</a></tt>, <tt><a href="sms_giellagas-dep-advmod-tmod.html">advmod:tmod</a></tt>.

3 nodes (0%) are attached to their parents as `advmod:neg`.

3 instances of `advmod:neg` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `advmod:neg`: <tt><a href="sms_giellagas-pos-DET.html">DET</a></tt>-<tt><a href="sms_giellagas-pos-PART.html">PART</a></tt> (1; 33% instances), <tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt>-<tt><a href="sms_giellagas-pos-PART.html">PART</a></tt> (1; 33% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-PART.html">PART</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 advmod:neg	color:blue
1	Seeʹst	son	PRON	Pron	Case=Loc|Number=Plur|Person=3|PronType=Prs	2	obl	_	GTtags=Pers,Pl3,Loc
2	jeäʹla	iʹlla	AUX	V	Number=Plur|Person=3|Tense=Pres	0	root	_	GTtags=V
3	ǩeeʹrjteeʹjest	ǩeeʹrjteei	NOUN	N	Case=Loc|Number=Sing	2	obl	_	GTtags=Sg,Loc
4	võl	võl	ADV	Adv	AdvType=Tim	2	advmod	_	GTtags=Sem/Time
5	ni	ni	PART	Pcle	_	6	advmod:neg	_	_
6	måkam	måkam	DET	Det	_	7	det	_	GTtags=Attr
7	jurddi	juurd	NOUN	N	Case=Nom|Number=Plur	2	nsubj	_	GTtags=Pl,Nom|SpaceAfter=No
8	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 22 advmod:neg	color:blue
1	Son	son	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	nsubj:cop	_	GTtags=Pers,Sg3,Nom
2	âʹtte	âʹtte	ADV	Adv	AdvType=Tim	3	advmod	_	GTtags=Sem/Time,@ADVL>
3	lij	leeʹd	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	10	reparandum	_	GTtags=Ind,Prs,Sg3,@+FMAINV
4	ko	ko	SCONJ	CS	_	3	mark	_	GTtags=@CVP|SpaceAfter=No
5	...	...	PUNCT	CLB	_	3	punct	_	_
6	nåkkam	nåkkam	PRON	Pron	Case=Nom|Number=Sing	7	nsubj	_	GTtags=Sg,Nom
7	lij	leeʹd	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	conj	_	GTtags=Ind,Prs,Sg3,@+FMAINV|SpaceAfter=No
8	...	...	PUNCT	CLB	_	7	punct	_	_
9	suõvv	suõvv	NOUN	N	Case=Nom|Number=Sing	10	nsubj	_	GTtags=Sg,Nom
10	älgg	älgg	VERB	N	Case=Nom|Number=Sing	0	root	_	GTtags=Sg,Nom
11	kueʹstted	kueʹstted	VERB	V	VerbForm=Inf	10	xcomp	_	GTtags=Inf
12	nåkkam	nåkkam	PRON	Pron	Case=Nom|Number=Sing	11	reparandum	_	GTtags=Sg,Nom|SpaceAfter=No
13	,	,	PUNCT	CLB	_	19	punct	_	_
14	de	de	CCONJ	CC	_	19	cc	_	_
15	tõn	tõt	PRON	Pron	Case=Gen|Number=Sing|PronType=Dem	16	det	_	GTtags=Dem,Sg,Gen
16	suõv	suõvv	NOUN	N	Case=Gen|Number=Sing	19	obl	_	GTtags=Sg,Gen
17	luzz	luzz	ADP	Adp	AdpType=Post	16	case	_	GTtags=Po
18	ko	ko	SCONJ	CS	_	19	mark	_	GTtags=@CVP
19	väʒʒ	väʹʒʒed	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	24	advcl	_	GTtags=Ind,Prs,Sg3,@+FMAINV
20	de	de	CCONJ	CC	_	24	cc	_	_
21	ij	ij	AUX	V	Mood=Ind|Number=Sing|Person=3|Polarity=Neg	24	aux:neg	_	GTtags=Neg,Ind,Sg3,@+FAUXV
22	ni	ni	PART	Pcle	_	23	advmod:neg	_	_
23	mii	mii	PRON	Pron	Case=Nom|Number=Sing|PronType=Rel	24	nsubj	_	GTtags=Rel,Sg,Nom,@<SUBJ
24	kueʹst	kueʹstted	VERB	V	Mood=Imp|Number=Sing|Person=2	10	conj	_	GTtags=Imprt,Sg2,@+FMAINV|SpaceAfter=No
25	.	.	PUNCT	CLB	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 advmod:neg	color:blue
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


