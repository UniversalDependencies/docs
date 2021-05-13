---
layout: base
title:  'Statistics of nmod:poss in UD_Skolt_Sami-Giellagas'
udver: '2'
---

## Treebank Statistics: UD_Skolt_Sami-Giellagas: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="sms_giellagas-dep-nmod.html">nmod</a></tt>.

9 nodes (0%) are attached to their parents as `nmod:poss`.

9 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (7; 78% instances), <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt> (1; 11% instances), <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-PROPN.html">PROPN</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:poss	color:blue
1	Siõm	siõmm	NOUN	N	Animacy=Hum|Case=Gen|Number=Sing	3	nmod	_	GTtags=Sem/Hum,Sg,Gen
2	heäppaž	heävaš	NOUN	N	Case=Gen|Number=Sing	3	nmod:poss	_	GTtags=Sg,Gen
3	ââlǥaž	ââlǥaž	NOUN	N	Case=Nom|Number=Sing	4	nsubj	_	GTtags=Sem/Ani,Sg,Nom
4	ǩiʹcsti	ǩiʹcsted	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt,Sg3
5	suu	son	PRON	Pron	Case=Gen|Number=Sing|Person=3|PronType=Prs	4	obl	_	GTtags=Pers,Sg3,Gen
6	ool	ool	ADP	Po	AdpType=Post	5	case	_	GTtags=<gen>|SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	12	punct	_	_
8	tõn	tõt	PRON	Pron	Case=Acc|Number=Sing|PronType=Dem	12	obj	_	GTtags=Dem,Sg,Acc,@OBJ>
9	vaaʹldi	väʹldded	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	12	reparandum	_	GTtags=Ind,Prt,Sg3|SpaceAfter=No
10	...	...	PUNCT	PUNCT	_	12	punct	_	_
11	ij	ij	AUX	V	Mood=Ind|Number=Sing|Person=3|Polarity=Neg	12	aux:neg	_	GTtags=Neg,Ind,Sg3,@+FAUXV
12	välddam	väʹldded	VERB	V	Connegative=Yes|Mood=Ind|Tense=Past	4	conj	_	GTtags=Ind,Prt,ConNeg|SpaceAfter=No
13	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 nmod:poss	color:blue
1	Leša	leša	SCONJ	CS	_	2	mark	_	_
2	mõõni	mõõnnâd	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	6	advcl	_	GTtags=Ind,Prt,Sg3
3	de	de	CCONJ	CC	_	6	cc	_	_
4	nääiʹt	nääiʹt	ADV	Adv	_	6	advmod	_	_
5	ǩiõđâs	ǩiõtt	NOUN	N	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	obj	_	GTtags=Sem/Body,Sg,Acc,PxSg3
6	piiji	piijjâd	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt,Sg3|SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	9	punct	_	_
8	källsaž	källsaž	NOUN	N	Case=Nom|Number=Sing	9	nsubj	_	GTtags=Sg,Nom
9	piiji	piijjâd	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	6	conj	_	GTtags=Ind,Prt,Sg3|SpaceAfter=No
10	,	,	PUNCT	PUNCT	_	11	punct	_	_
11	ceälkk	ceäʹlǩǩed	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	6	conj	_	GTtags=Ind,Prs,Sg3|SpaceAfter=No
12	:	:	PUNCT	PUNCT	_	11	punct	_	_
13	kulddâl	kuvddled	VERB	V	Mood=Imp|Number=Sing|Person=2	11	parataxis	_	GTtags=Imprt,Sg2
14	mâka	mâka	ADV	Adv	_	13	advmod:eval	_	_
15	peeʹlljin	peʹllj	NOUN	N	Case=Com|Number=Sing	13	obl	_	GTtags=Sem/Body,Sg,Com
16	tän	tät	PRON	Pron	Case=Gen|Number=Sing|PronType=Dem	13	obj	_	GTtags=Dem,Sg,Gen
17	suu	son	PRON	Pron	Case=Gen|Number=Sing|Person=3|PronType=Prs	18	nmod:poss	_	GTtags=Pers,Sg3,Gen
18	ǩiõđ	ǩiõtt	NOUN	N	Case=Gen|Number=Sing	13	obl:lmod	_	GTtags=Sg,Gen
19	âʹlnn	âʹlnn	ADP	Po	AdpType=Post	18	case	_	SpaceAfter=No
20	.	.	PUNCT	PUNCT	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nmod:poss	color:blue
1	Son	son	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	GTtags=Pers,Sg3,Nom
2	jälsti	jälsted	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|Valency=1	0	root	_	GTtags=Ind,Prt,Sg3
3	čõõđ	čõõđ	ADP	Pr	AdpType=Prep	4	case	_	_
4	ääiʹj	äiʹǧǧ	NOUN	N	Case=Gen|Number=Sing	2	obl:tmod	_	GTtags=Sg,Gen
5	Pariizzâst	Pariizzâst	PROPN	N	Case=Loc|NameType=Geo|Number=Sing	2	obl:lmod	_	GTtags=Prop,Sem/Plc,Sg,Loc|SpaceAfter=No
6	,	,	PUNCT	CLB	_	8	punct	_	_
7	Franskkjânnam	Franskkjânnam	PROPN	N	Case=Gen|NameType=Geo|Number=Sing	8	nmod:poss	_	GTtags=Prop,Sem/Plc,Sg,Gen
8	vueiʹvvgåårdest	vueiʹvvgåårad	NOUN	N	Case=Loc|Number=Sing	5	appos	_	GTtags=Sg,Loc|SpaceAfter=No
9	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


