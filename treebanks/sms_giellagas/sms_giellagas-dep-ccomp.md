---
layout: base
title:  'Statistics of ccomp in UD_Skolt_Sami-Giellagas'
udver: '2'
---

## Treebank Statistics: UD_Skolt_Sami-Giellagas: Relations: `ccomp`

This relation is universal.

41 nodes (2%) are attached to their parents as `ccomp`.

39 instances of `ccomp` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.63414634146341.

The following 6 pairs of parts of speech are connected with `ccomp`: <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt> (35; 85% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt> (2; 5% instances), <tt><a href="sms_giellagas-pos-ADV.html">ADV</a></tt>-<tt><a href="sms_giellagas-pos-SCONJ.html">SCONJ</a></tt> (1; 2% instances), <tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt>-<tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-ADV.html">ADV</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 ccomp	color:blue
1	Joordam	juʹrdded	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|Valency=2	0	root	_	GTtags=Ind,Prs,Sg1
2	što	što	SCONJ	CS	_	3	mark	_	_
3	âbrr	âʹbrred	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Valency=1	1	ccomp	_	GTtags=Ind,Prs,Sg3|SpaceAfter=No
4	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 ccomp	color:blue
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


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 ccomp	color:blue
1	Čeäkkleemaainâs	čeäkkleemaainâs	NOUN	N	Case=Nom|Number=Sing	3	nsubj:cop	_	GTtags=Sg,Nom
2	lij	leeʹd	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	cop	_	GTtags=Ind,Prs,Sg3,@+FMAINV
3	nuʹt	nuʹtt	ADV	Adv	_	0	root	_	GTtags=Err/Orth,@<ADVL
4	što	što	SCONJ	CS	_	3	ccomp	_	GTtags=@CVP
5	...	...	PUNCT	CLB	_	3	punct	_	_

~~~


