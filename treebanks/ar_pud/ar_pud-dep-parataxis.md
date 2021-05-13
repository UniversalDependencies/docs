---
layout: base
title:  'Statistics of parataxis in UD_Arabic-PUD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-PUD: Relations: `parataxis`

This relation is universal.

24 nodes (0%) are attached to their parents as `parataxis`.

24 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 11.2916666666667.

The following 8 pairs of parts of speech are connected with `parataxis`: <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-VERB.html">VERB</a></tt> (14; 58% instances), <tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_pud-pos-VERB.html">VERB</a></tt> (2; 8% instances), <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt> (2; 8% instances), <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt> (2; 8% instances), <tt><a href="ar_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="ar_pud-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-ADP.html">ADP</a></tt> (1; 4% instances), <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_pud-pos-VERB.html">VERB</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 parataxis	color:blue
1	س	s	PART	RP	_	2	compound:prt	_	SpaceAfter=No
2	أدخل	daxal-u_1	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Fut|Voice=Act	0	root	_	_
3	السجن	sijon_1	NOUN	NN	Animacy=Nhum|Case=Acc|Definite=Def|Gender=Masc|Number=Sing	2	obj	_	_
4	في	fiy_1	ADP	IN	_	6	case	_	_
5	كل	kul~_1	DET	PDT	Case=Gen	6	det	_	_
6	الأحوال	HAl_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Def|Gender=Masc|Number=Plur	2	obl	_	SpaceAfter=No
7	,	,_0	PUNCT	,	_	8	punct	_	_
8	آمل	>amal-a_1	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|Voice=Act	2	parataxis	_	_
9	أن	>ano_1	ADP	IN	_	12	mark	_	_
10	الأمر	>amor_1	NOUN	NN	Animacy=Nhum|Case=Acc|Definite=Def|Gender=Masc|Number=Sing	12	nsubj	_	_
11	كان	kAn-u_1	VERB	VBC	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Tense=Past|Voice=Act	12	aux	_	_
12	يستحق	{isotaHaq~_1	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	8	ccomp	_	SpaceAfter=No
13	.	._0	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 parataxis	color:blue
1	الأمر	>amor_1	NOUN	NN	Animacy=Nhum|Case=Nom|Definite=Def|Gender=Masc|Number=Sing	2	nsubj	_	_
2	واضح	wADiH_1	ADJ	JJ	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
3	:	:_0	PUNCT	:	_	4	punct	_	_
4	يمكن	>amokan_1	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	2	parataxis	_	_
5	ل	l	ADP	IN	_	6	case	_	SpaceAfter=No
6	لرجال	rajul_1	NOUN	NN	Animacy=Hum|Case=Gen|Definite=Def|Gender=Masc|Number=Plur	4	obl	_	_
7	تحمل	Hamal-i_1	NOUN	NN	Animacy=Nhum|Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	4	nsubj	_	_
8	مسؤوليات	maso&uwliy~ap_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Ind|Gender=Fem|Number=Plur	7	nmod	_	_
9	أكبر	>akobar_2	ADJ	JJR	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	8	amod	_	_
10	في	fiy_1	ADP	IN	_	11	case	_	_
11	مجال	majAl_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Def|Gender=Masc|Number=Sing	8	nmod	_	_
12	منع	manoE_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Def|Gender=Masc|Number=Sing	11	nmod	_	_
13	الحمل	Hamol_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Def|Gender=Masc|Number=Sing	12	nmod	_	SpaceAfter=No
14	.	._0	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 14 parataxis	color:blue
1	لم	lamo_1	PART	RP	Polarity=Neg	2	advmod	_	_
2	تعد	EAd-u_1	VERB	VBC	Aspect=Imp|Gender=Fem|Mood=Jus|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	_
3	خاصة	xAS~_1	ADJ	VBN	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Act	2	ccomp	_	_
4	ب	b	ADP	IN	_	5	case	_	SpaceAfter=No
5	السبعينيات	saboEiyniy~_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Def|Gender=Fem|Number=Plur	3	obl	_	SpaceAfter=No
6	,	,_0	PUNCT	,	_	14	punct	_	_
7	الصوف	Suwf_1	NOUN	NN	Animacy=Nhum|Case=Nom|Definite=Def|Gender=Masc|Number=Sing	14	nsubj	_	_
8	ـ	__0	PUNCT	-	_	10	punct	_	SpaceAfter=No
9	أو	>awo_1	CCONJ	CC	_	10	cc	_	_
10	تغطية	tagoTiyap_1	NOUN	NN	Animacy=Nhum|Case=Nom|Definite=Def|Gender=Fem|Number=Sing	7	conj	_	_
11	الأسطح	saToH_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Def|Gender=Masc|Number=Plur	10	nmod	_	SpaceAfter=No
12	ـ	__0	PUNCT	-	_	7	punct	_	_
13	عاد	EAd-u_1	AUX	VBC	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Tense=Past|Voice=Act	14	cop	_	_
14	رائجاً	rA}ij_1	ADJ	JJ	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	2	parataxis	_	_
15	من	min_1	ADP	IN	_	16	case	_	_
16	جديد	jadiyd_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	14	obl	_	SpaceAfter=No
17	.	._0	PUNCT	.	_	2	punct	_	_

~~~


