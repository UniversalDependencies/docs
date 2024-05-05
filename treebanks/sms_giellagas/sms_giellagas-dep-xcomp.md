---
layout: base
title:  'Statistics of xcomp in UD_Skolt_Sami-Giellagas'
udver: '2'
---

## Treebank Statistics: UD_Skolt_Sami-Giellagas: Relations: `xcomp`

This relation is universal.

47 nodes (2%) are attached to their parents as `xcomp`.

34 instances of `xcomp` (72%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.48936170212766.

The following 6 pairs of parts of speech are connected with `xcomp`: <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt> (23; 49% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (16; 34% instances), <tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt>-<tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt> (4; 9% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-ADJ.html">ADJ</a></tt> (2; 4% instances), <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-NUM.html">NUM</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 xcomp	color:blue
1	Mutta	mutta	CCONJ	CC	_	4	cc	_	GTtags=CC
2	mon	mon	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	GTtags=Pers,Sg1,Nom
3	jiõm	ij	AUX	V	Mood=Ind|Number=Sing|Person=1|Polarity=Neg	4	aux:neg	_	GTtags=Neg,Ind,Sg1,@+FAUXV
4	muuʹšt	muʹštted	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres	0	root	_	GTtags=Ind,Prs,ConNeg,@+FMAINV
5	mainsted	mainsted	VERB	V	VerbForm=Inf	4	xcomp	_	GTtags=Inf
6	puârast	puârast	ADV	Adv	_	5	advmod	_	SpaceAfter=No
7	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 xcomp	color:blue
1	Kueʹllen	kueʹll	NOUN	N	Case=Ess	2	xcomp	_	GTtags=Ess
2	vuâjj	vuõjjâd	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	GTtags=Ind,Prs,Sg3
3	ja	ja	CCONJ	CC	_	5	cc	_	_
4	låʹdden	låʹdd	NOUN	N	Case=Ess	5	xcomp	_	GTtags=Ess
5	ǩeârdd	ǩeʹrdded	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	conj	_	GTtags=Ind,Prs,Sg3|SpaceAfter=No
6	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 xcomp	color:blue
1	De	de	CCONJ	CC	_	2	cc	_	_
2	reäkk	reäkkad	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	GTtags=Ind,Prs,Sg3
3	da	da	CCONJ	CC	_	4	cc	_	_
4	särnn	särnnad	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	conj	_	GTtags=Ind,Prs,Sg3
5	da	da	CCONJ	CC	_	6	cc	_	_
6	mättat	mättʼted	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	conj	_	GTtags=Ind,Prs,Sg3
7	što	što	SCONJ	CS	_	9	mark	_	_
8	mäʹhtt	mäʹhtt	ADV	Adv	_	9	advmod:mmod	_	_
9	âlgg	õlggâd	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	6	ccomp	_	GTtags=Ind,Prs,Sg3
10	jååʹtted	jååʹtted	VERB	V	VerbForm=Inf	9	xcomp	_	GTtags=Inf
11	što	što	SCONJ	CS	_	14	mark	_	_
12	oummooumaž	oummooumaž	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing	14	nsubj	_	GTtags=Sem/Hum,Sg,Nom
13	ij	ij	AUX	V	Mood=Ind|Number=Sing|Person=3|Polarity=Neg	14	aux:neg	_	GTtags=Neg,Ind,Sg3
14	kååddče	kåʹdded	VERB	V	Connegative=Yes|Mood=Cnd	10	ccomp	_	GTtags=Cond,ConNeg
15	tuu	ton	PRON	Pron	Case=Acc|Number=Sing|Person=2|PronType=Prs	14	obj	_	GTtags=Pers,Sg2,Acc|SpaceAfter=No
16	,	,	PUNCT	CLB	_	14	punct	_	_
17	naa	naa	INTJ	Interj	_	2	discourse	_	SpaceAfter=No
18	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


