---
layout: base
title:  'Statistics of nsubj:cop in UD_Skolt_Sami-Giellagas'
udver: '2'
---

## Treebank Statistics: UD_Skolt_Sami-Giellagas: Relations: `nsubj:cop`

This relation is a language-specific subtype of <tt><a href="sms_giellagas-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="sms_giellagas-dep-nsubj-pass.html">nsubj:pass</a></tt>.

18 nodes (1%) are attached to their parents as `nsubj:cop`.

15 instances of `nsubj:cop` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.05555555555556.

The following 8 pairs of parts of speech are connected with `nsubj:cop`: <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt> (5; 28% instances), <tt><a href="sms_giellagas-pos-ADV.html">ADV</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (3; 17% instances), <tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (2; 11% instances), <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (2; 11% instances), <tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt>-<tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt> (2; 11% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt> (2; 11% instances), <tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt>-<tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt> (1; 6% instances), <tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj:cop	color:blue
1	”	”	PUNCT	PUNCT	_	3	punct	_	GTtags=RIGHT|SpaceAfter=No
2	Mii	mii	PRON	Pron	Case=Nom|Number=Sing|PronType=Rel	3	nsubj:cop	_	GTtags=Rel,Sg,Nom
3	oummust	ooumaž	NOUN	N	Animacy=Hum|Case=Loc|Number=Sing	0	root	_	GTtags=Sem/Hum,Sg,Loc
4	lij	leeʹd	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	cop	_	GTtags=Ind,Prs,Sg3
5	jieʹtt	jieʹtt	NOUN	N	Case=Nom|Number=Sing	3	xcomp	_	GTtags=Sg,Nom|SpaceAfter=No
6	”	”	PUNCT	PUNCT	_	3	punct	_	GTtags=RIGHT|SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:cop	color:blue
1	Čeäkkleemaainâs	čeäkkleemaainâs	NOUN	N	Case=Nom|Number=Sing	3	nsubj:cop	_	GTtags=Sg,Nom
2	lij	leeʹd	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	cop	_	GTtags=Ind,Prs,Sg3,@+FMAINV
3	nuʹt	nuʹtt	ADV	Adv	_	0	root	_	GTtags=Err/Orth,@<ADVL
4	što	što	SCONJ	CS	_	3	ccomp	_	GTtags=@CVP
5	...	...	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nsubj:cop	color:blue
1	Na	na	INTJ	Interj	_	2	discourse	_	_
2	aʹhtte	äʹhtted	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt,Pl3|SpaceAfter=No
3	...	...	PUNCT	CLB	_	6	punct	_	_
4	kueʹhtt	kueʹhtt	NUM	Num	Case=Nom|Number=Sing	5	nummod	_	GTtags=Sg,Nom
5	oummu	ooumaž	NOUN	N	Animacy=Hum|Case=Nom|Number=Plur	6	nsubj:cop	_	GTtags=Sem/Hum,Pl,Nom
6	liâ	leeʹd	AUX	Aux	Mood=Ind|Number=Plur|Person=3|Tense=Pres	2	conj	_	GTtags=Ind,Prs,Pl3|SpaceAfter=No
7	,	,	PUNCT	CLB	_	8	punct	_	_
8	aʹhtte	äʹhtted	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past	2	conj	_	GTtags=Ind,Prs,Pl3
9	di	di	CCONJ	CC	_	11	cc	_	_
10	tueʹllj	tueʹllj	NOUN	N	Case=Acc|Number=Sing	11	obj	_	GTtags=Sg,Acc
11	leâvvje	leâvvje	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past	2	conj	_	GTtags=Ind,Prs,Pl3|SpaceAfter=No
12	,	,	PUNCT	CLB	_	14	punct	_	_
13	son	son	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	14	nsubj	_	GTtags=Pers,Sg3,Nom
14	ǩiiččad	ǩiiččeed	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	parataxis	_	GTtags=Ind,Prs,Sg3|SpaceAfter=No
15	,	,	PUNCT	CLB	_	16	punct	_	_
16	ǩiiččad	ǩiiččeed	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	14	conj	_	GTtags=Ind,Prs,Sg3
17	mäʹhtt	mäʹhtt	ADV	Adv	_	16	advmod:mmod	_	SpaceAfter=No
18	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


