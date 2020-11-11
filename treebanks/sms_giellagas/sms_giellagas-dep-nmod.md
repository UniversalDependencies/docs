---
layout: base
title:  'Statistics of nmod in UD_Skolt_Sami-Giellagas'
udver: '2'
---

## Treebank Statistics: UD_Skolt_Sami-Giellagas: Relations: `nmod`

This relation is universal.
There are 2 language-specific subtypes of `nmod`: <tt><a href="sms_giellagas-dep-nmod-part.html">nmod:part</a></tt>, <tt><a href="sms_giellagas-dep-nmod-poss.html">nmod:poss</a></tt>.

7 nodes (1%) are attached to their parents as `nmod`.

5 instances of `nmod` (71%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 4 pairs of parts of speech are connected with `nmod`: <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (3; 43% instances), <tt><a href="sms_giellagas-pos-ADV.html">ADV</a></tt>-<tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt> (2; 29% instances), <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt> (1; 14% instances), <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-PROPN.html">PROPN</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod	color:blue
1	Peter	Peter	NOUN	N	Case=Gen|Number=Sing	2	nmod	_	GTtags=Prop,Sem/Mal,Sg,Gen
2	räʹjjlaž	räʹjjlaž	NOUN	N	Case=Nom|Number=Sing	3	nsubj	_	GTtags=Sg,Nom
3	kälkkii	kälkkeed	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt,Sg3
4	čuâl	čuâll	NOUN	N	Case=Acc|Number=Sing	3	obj	_	GTtags=Sg,Acc|SpaceAfter=No
5	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nmod	color:blue
1	Mâŋŋa	mâŋŋa	ADV	Adv	AdvType=Tim	3	advmod:tmod	_	GTtags=Sem/Time
2	dââʹst	dât	PRON	Pron	Case=Loc|Number=Sing	1	nmod	_	GTtags=Sg,Loc
3	šõõddi	šõddâd	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Prt	0	root	_	GTtags=Ind,Prt,Sg3
4	...	...	PUNCT	CLB	_	8	punct	_	_
5	vitmlo	vitmlo	NUM	Num	_	6	nummod	_	_
6	ekksaž	ekksaž	ADJ	A	_	7	amod	_	GTtags=Attr
7	päʹrnn	päʹrnn	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing	8	nsubj	_	GTtags=Kin,Sem/Kin,Sg,Nom
8	šõõddi	šõddâd	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Prt	3	conj	_	GTtags=Ind,Prt,Sg3|SpaceAfter=No
9	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 nmod	color:blue
1	Leša	leša	SCONJ	CS	_	2	mark	_	_
2	mõõni	mõõnnâd	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Prt	6	advcl	_	GTtags=Ind,Prt,Sg3
3	de	de	CCONJ	CC	_	6	cc	_	_
4	nääiʹt	nääiʹt	ADV	Adv	_	6	advmod	_	_
5	ǩiõđâs	ǩiõtt	NOUN	N	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	obj	_	GTtags=Sem/Body,Sg,Acc,PxSg3
6	piiji	piijjâd	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Prt	0	root	_	GTtags=Ind,Prt,Sg3|SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	9	punct	_	_
8	källsaž	källsaž	NOUN	N	Case=Nom|Number=Sing	9	nsubj	_	GTtags=Sg,Nom
9	piiji	piijjâd	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Prt	6	conj	_	GTtags=Ind,Prt,Sg3|SpaceAfter=No
10	,	,	PUNCT	PUNCT	_	11	punct	_	_
11	ceälkk	ceäʹlǩǩed	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	6	conj	_	GTtags=Ind,Prs,Sg3|SpaceAfter=No
12	:	:	PUNCT	PUNCT	_	11	punct	_	_
13	kulddâl	kuvddled	VERB	V	Mood=Imp|Number=Sing|Person=2	11	parataxis	_	GTtags=Imprt,Sg2
14	mâka	mâka	ADV	Adv	_	13	advmod	_	_
15	peeʹlljin	peʹllj	NOUN	N	Case=Com|Number=Sing	13	obl	_	GTtags=Sem/Body,Sg,Com
16	tän	tät	PRON	Pron	Case=Gen|Number=Sing|PronType=Dem	13	obj	_	GTtags=Dem,Sg,Gen
17	suu	son	PRON	Pron	Case=Gen|Number=Sing|Person=3|PronType=Prs	18	nmod	_	GTtags=Pers,Sg3,Gen
18	ǩiõđ	ǩiõtt	NOUN	N	Case=Gen|Number=Sing	13	obl:lmod	_	GTtags=Sg,Gen
19	âʹlnn	âʹlnn	ADP	Adp	_	18	case	_	SpaceAfter=No
20	.	.	PUNCT	PUNCT	_	6	punct	_	_

~~~


