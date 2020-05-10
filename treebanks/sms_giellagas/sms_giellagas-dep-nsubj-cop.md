---
layout: base
title:  'Statistics of nsubj:cop in UD_Skolt_Sami-Giellagas'
udver: '2'
---

## Treebank Statistics: UD_Skolt_Sami-Giellagas: Relations: `nsubj:cop`

This relation is a language-specific subtype of <tt><a href="sms_giellagas-dep-nsubj.html">nsubj</a></tt>.

6 nodes (1%) are attached to their parents as `nsubj:cop`.

6 instances of `nsubj:cop` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.16666666666667.

The following 4 pairs of parts of speech are connected with `nsubj:cop`: <tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (2; 33% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt> (2; 33% instances), <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (1; 17% instances), <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nsubj:cop	color:blue
1	Na	na	INTJ	Interj	_	2	discourse	_	_
2	aʹhtte	äʹhtted	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Prt	0	root	_	GTtags=Ind,Prt,Pl3|SpaceAfter=No
3	...	...	PUNCT	CLB	_	6	punct	_	_
4	kueʹhtt	kueʹhtt	NUM	Num	Case=Nom|Number=Sing	5	nummod	_	GTtags=Sg,Nom
5	oummu	ooumaž	NOUN	N	Animacy=Hum|Case=Nom|Number=Plur	6	nsubj:cop	_	GTtags=Sem/Hum,Pl,Nom
6	liâ	leeʹd	AUX	Aux	Mood=Ind|Number=Plur|Person=3|Tense=Pres	2	conj	_	GTtags=Ind,Prs,Pl3|SpaceAfter=No
7	,	,	PUNCT	CLB	_	8	punct	_	_
8	aʹhtte	äʹhtted	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Prt	2	conj	_	GTtags=Ind,Prs,Pl3
9	di	di	CCONJ	CC	_	11	cc	_	_
10	tueʹllj	tueʹllj	NOUN	N	Case=Acc|Number=Sing	11	obj	_	GTtags=Sg,Acc
11	leâvvje	leâvvje	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Prt	2	conj	_	GTtags=Ind,Prs,Pl3|SpaceAfter=No
12	,	,	PUNCT	CLB	_	14	punct	_	_
13	son	son	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	14	nsubj	_	GTtags=Pers,Sg3,Nom
14	ǩiiččad	ǩiiččeed	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	parataxis	_	GTtags=Ind,Prs,Sg3|SpaceAfter=No
15	,	,	PUNCT	CLB	_	16	punct	_	_
16	ǩiiččad	ǩiiččeed	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	14	conj	_	GTtags=Ind,Prs,Sg3
17	mäʹhtt	mäʹhtt	ADV	Adv	_	16	advmod	_	SpaceAfter=No
18	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:cop	color:blue
1	Son	son	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	nsubj:cop	_	GTtags=Pers,Sg3,Nom
2	leäi	leeʹd	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Prt	4	cop	_	GTtags=Ind,Prt,Sg3
3	pieʹʒʒid	pieʹcc	NOUN	N	Case=Acc|Number=Plur	4	obj	_	GTtags=Pl,Acc
4	vueʹtǩǩmen	vueʹtǩǩed	VERB	V	Case=Ess|Derivation=Vnoun	0	root	_	GTtags=Actio,Ess|SpaceAfter=No
5	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 14 nsubj:cop	color:blue
1	Di	di	CCONJ	CC	_	4	cc	_	_
2	teʹl	teʹl	ADV	Adv	AdvType=Tim	4	advmod:tmod	_	GTtags=Sem/Time
3	tõt	tõt	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	4	expl	_	GTtags=Dem,Sg,Nom
4	vuõʹlji	vueʹlǧǧed	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Prt	0	root	_	GTtags=Ind,Prt,Sg3
5	tõt	tõt	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	6	det	_	GTtags=Dem,Sg,Nom
6	ooumaž	ooumaž	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing	4	nsubj	_	GTtags=Sem/Hum,Sg,Nom|SpaceAfter=No
7	,	,	PUNCT	CLB	_	9	punct	_	_
8	tõt	tõt	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	9	expl	_	GTtags=Dem,Sg,Nom
9	kuâđđji	kuâđđjed	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Prt	4	conj	_	GTtags=Ind,Prt,Sg3
10	kaav	kaav	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing	9	nsubj	_	GTtags=Kin,Sem/Kin,Sg,Nom
11	paaʹrnines	päʹrnn	NOUN	N	Animacy=Hum|Case=Com|Number=Sing|Number[psor]=Sing|Person[psor]=3	9	obl	_	GTtags=Kin,Sem/Kin,Sg,Com,PxSg3
12	jälsted	jälsted	VERB	V	VerbForm=Inf	9	xcomp	_	GTtags=Inf|SpaceAfter=No
13	,	,	PUNCT	CLB	_	17	punct	_	_
14	päärnaž	päärnaž	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing	17	nsubj:cop	_	GTtags=Sem/Hum,Sg,Nom
15	âʹtte	âʹtte	ADV	Adv	AdvType=Tim	17	advmod:tmod	_	GTtags=Sem/Time
16	lij	leeʹd	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	17	cop	_	GTtags=Ind,Prs,Sg3
17	siõmpäärnaž	siõmpäärnaž	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing	9	conj	_	GTtags=Sem/Hum,Sg,Nom|SpaceAfter=No
18	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


