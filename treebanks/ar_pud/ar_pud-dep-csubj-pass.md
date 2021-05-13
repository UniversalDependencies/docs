---
layout: base
title:  'Statistics of csubj:pass in UD_Arabic-PUD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-PUD: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="ar_pud-dep-csubj.html">csubj</a></tt>.

7 nodes (0%) are attached to their parents as `csubj:pass`.

7 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.42857142857143.

The following 3 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-VERB.html">VERB</a></tt> (3; 43% instances), <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt> (2; 29% instances), <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt> (2; 29% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 csubj:pass	color:blue
1	يعتقد	{iEotaqad_1	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Pass	0	root	_	_
2	أن	>an~a_1	SCONJ	IN	_	7	mark	_	_
3	آخر	|xir_1	DET	PDT	Case=Acc	4	det	_	_
4	دورة	daworap_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	7	nsubj:pass	_	_
5	ألعابٍ	laEob_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Ind|Gender=Fem|Number=Plur	4	nmod	_	_
6	أولمبية	>uwlimobiy~_1	ADJ	JJ	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	5	amod	_	_
7	أقيمت	>aqAm_1	VERB	VBC	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|Tense=Past|Voice=Pass	1	csubj:pass	_	_
8	عام	EAm_1	ADV	RB	_	7	obl:tmod	_	_
9	393	393_0	NUM	CD	Case=Gen	8	obl	_	SpaceAfter=No
10	.	._0	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 csubj:pass	color:blue
1	ثم	vum~a_1	PART	RP	_	2	compound:prt	_	_
2	هناك	hunAka_1	ADV	RB	_	0	root	_	_
3	قصص	qiS~ap_1	NOUN	NN	Animacy=Nhum|Case=Nom|Definite=Ind|Gender=Fem|Number=Plur	2	nsubj	_	_
4	يزعم	zaEam-u_1	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Pass	3	acl:relcl	_	_
5	أن	>an~a_1	SCONJ	IN	_	7	mark	_	SpaceAfter=No
6	ها	hA	PRON	PRP	Case=Acc|Gender=Fem|Number=Sing|Person=3	7	nsubj	_	_
7	حقيقية	Haqiyqiy~_1	ADJ	JJ	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	4	csubj:pass	_	_
8	تنشر	na$ar-u_1	VERB	VBC	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Pass	3	acl:relcl	_	_
9	ب	b	ADP	IN	_	10	case	_	SpaceAfter=No
10	رفقة	rifoqap_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	8	obl	_	_
11	سلسلة	silosilap_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	10	nmod	_	_
12	من	min_1	ADP	IN	_	13	case	_	_
13	الصور	Suwrap_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Def|Gender=Fem|Number=Plur	11	nmod	_	_
14	ذات	*At_1	ADJ	JJ	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	13	amod	_	_
15	المغزى	magozaY_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Def|Gender=Masc|Number=Sing	14	obl	_	_
16	التي	Al~a*iy_1	PRON	REL	Case=Gen|Gender=Fem|Number=Sing	17	nsubj	_	_
17	تضم	Dam~-u_1	VERB	VBC	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	13	acl:relcl	_	_
18	نصوصاً	naS~_1	NOUN	NN	Animacy=Nhum|Case=Acc|Definite=Ind|Gender=Masc|Number=Plur	17	obj	_	_
19	متحركة	mutaHar~ik_1	ADJ	JJ	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	18	amod	_	_
20	تحت	taHota_1	ADP	IN	_	21	case	_	SpaceAfter=No
21	ها	hA	PRON	PRP	Case=Gen|Gender=Fem|Number=Sing|Person=3	17	obl	_	SpaceAfter=No
22	.	._0	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 13 csubj:pass	color:blue
1	عندما	Einod_1	ADP	IN	_	2	mark	_	_
2	يموت	mAt-u_1	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	9	advcl	_	_
3	الناس	nAs_1	NOUN	NN	Animacy=Hum|Case=Nom|Definite=Def|Gender=Masc|Number=Plur	2	nsubj	_	_
4	جراء	jar~A'_1	ADP	IN	_	5	case	_	_
5	الشيخوخة	$ayoxuwxap_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Def|Gender=Fem|Number=Sing	2	obl	_	_
6	في	fiy_1	ADP	IN	_	7	case	_	_
7	الهند	hinod_1	PROPN	NNP	Animacy=Nhum|Case=Gen|Gender=Fem|Number=Sing	2	obl	_	SpaceAfter=No
8	,	,_0	PUNCT	,	_	2	punct	_	_
9	يفترض	{ifotaraD_1	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Pass	0	root	_	_
10	ذلك	*`lika_1	PRON	PDEM	Case=Nom|Gender=Masc|Number=Sing	9	mark	_	_
11	أن	>an~a_1	SCONJ	IN	_	13	mark	_	_
12	يكون	kAn-u_1	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Sub|Number=Sing|Person=3|Tense=Pres|Voice=Act	13	cop	_	_
13	مدعاةً	madoEAp_1	NOUN	NN	Animacy=Nhum|Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	9	csubj:pass	_	_
14	ل	l	ADP	IN	_	15	case	_	SpaceAfter=No
15	لاحتفال	{iHotifAl_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Def|Gender=Masc|Number=Sing	13	nmod	_	SpaceAfter=No
16	.	._0	PUNCT	.	_	9	punct	_	_

~~~


