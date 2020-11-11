---
layout: base
title:  'Statistics of aux in UD_Skolt_Sami-Giellagas'
udver: '2'
---

## Treebank Statistics: UD_Skolt_Sami-Giellagas: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="sms_giellagas-dep-aux-neg.html">aux:neg</a></tt>.

22 nodes (2%) are attached to their parents as `aux`.

20 instances of `aux` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.40909090909091.

The following 4 pairs of parts of speech are connected with `aux`: <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt> (18; 82% instances), <tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt>-<tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt> (2; 9% instances), <tt><a href="sms_giellagas-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt> (1; 5% instances), <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 aux	color:blue
1	Måttmešt	måttmešt	ADV	Adv	_	2	advmod:tmod	_	_
2	vaʹlddem	väʹldded	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Prt	0	root	_	GTtags=Ind,Prt,Sg1
3	di	di	CCONJ	CC	_	5	cc	_	_
4	teä	teä	ADV	Adv	AdvType=Tim	5	advmod:tmod	_	GTtags=Sem/Time
5	koǯǯâm	koǯǯâd	VERB	V	Aspect=Perf|VerbForm=Part	2	conj	_	GTtags=Act,PrfPrc
6	leäk	leeʹd	AUX	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres	5	aux	_	GTtags=Ind,Prs,Sg2
7	tueʹllj	tueʹllj	NOUN	N	Case=Acc|Number=Sing	5	obj	_	GTtags=Sg,Acc|SpaceAfter=No
8	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
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


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 aux	color:blue
1	kõõjji	kõõččâd	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt,Sg3|SpaceAfter=No
2	,	,	PUNCT	CLB	_	5	punct	_	_
3	štõ	što	SCONJ	CS	_	5	mark	_	_
4	leäk-a	leeʹd	AUX	Aux	Clitic=QstA|Mood=Ind|Number=Sing|Person=2|Tense=Pres|Valency=1	5	cop	_	GTtags=IV,Ind,Prs,Sg2,Qst/a
5	tiõrvâs	tiõrvâs	ADJ	A	Case=Nom|Number=Sing	1	ccomp	_	GTtags=Sg,Nom|SpaceAfter=No
6	,	,	PUNCT	CLB	_	9	punct	_	_
7	jiõk	ij	AUX	Aux	Mood=Ind|Number=Sing|Person=2|Polarity=Neg	9	aux:neg	_	GTtags=Neg,Ind,Sg2
8	leäkku	leeʹd	AUX	Aux	Connegative=Yes|Mood=Ind|Tense=Pres|Valency=1	9	aux	_	GTtags=IV,Ind,Prs,ConNeg
9	tiõrvâs	tiõrvâs	ADJ	A	Case=Nom|Number=Sing	5	conj	_	GTtags=Sg,Nom|SpaceAfter=No
10	,	,	PUNCT	CLB	_	12	punct	_	_
11	lij-a	leeʹd	AUX	Aux	Clitic=QstA|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Valency=1	12	cop	_	GTtags=IV,Ind,Prs,Sg3,Qst/a
12	piâr	piâr	NOUN	N	Case=Nom|Number=Sing	5	conj	_	GTtags=N,Sg,Nom
13	vai	vai	CCONJ	CC	_	14	cc	_	_
14	iʹlla	iʹlla	AUX	Aux	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	12	conj	_	GTtags=Neg,Ind,Prs,Sg3|SpaceAfter=No
15	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


