---
layout: base
title:  'Statistics of acl:relcl in UD_Arabic-PUD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-PUD: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="ar_pud-dep-acl.html">acl</a></tt>.

319 nodes (2%) are attached to their parents as `acl:relcl`.

318 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.77115987460815.

The following 15 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-VERB.html">VERB</a></tt> (216; 68% instances), <tt><a href="ar_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ar_pud-pos-VERB.html">VERB</a></tt> (39; 12% instances), <tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_pud-pos-VERB.html">VERB</a></tt> (27; 8% instances), <tt><a href="ar_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ar_pud-pos-ADP.html">ADP</a></tt> (11; 3% instances), <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt> (8; 3% instances), <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt> (5; 2% instances), <tt><a href="ar_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-ADP.html">ADP</a></tt> (2; 1% instances), <tt><a href="ar_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ar_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 17 acl:relcl	color:blue
1	إن	<in~a_1	PART	RP	_	15	compound:prt	_	_
2	ما	mA_1	PRON	WP	Case=Acc	15	dislocated	_	_
3	تقول	qAl-u_1	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=2|Tense=Pres|Voice=Act	2	acl:relcl	_	SpaceAfter=No
4	ه	h	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3	3	obj	_	_
5	و	w	CCONJ	CC	_	6	cc	_	SpaceAfter=No
6	ما	mA_1	PRON	WP	Case=Acc	2	conj	_	_
7	تفعل	faEal-a_1	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=2|Tense=Pres|Voice=Act	6	acl:relcl	_	SpaceAfter=No
8	ه	h	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3	7	obj	_	SpaceAfter=No
9	...	..._0	PUNCT	...	_	2	punct	_	_
10	في	fiy_1	ADP	IN	_	11	case	_	_
11	الواقع	wAqiE_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Def|Gender=Masc|Number=Sing	15	nmod	_	SpaceAfter=No
12	,	,_0	PUNCT	,	_	11	punct	_	_
13	إن	<in~a_1	PART	RP	_	15	compound:prt	_	SpaceAfter=No
14	ه	h	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3	15	nsubj	_	_
15	أمرٌ	>amor_1	NOUN	NN	Animacy=Nhum|Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
16	لا	lA_1	PART	RP	Polarity=Neg	17	advmod	_	_
17	يصدق	Sad~aq_1	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Pass	15	acl:relcl	_	SpaceAfter=No
18	.	._0	PUNCT	.	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 acl:relcl	color:blue
1	إن	<in~a_1	PART	RP	_	15	compound:prt	_	_
2	ما	mA_1	PRON	WP	Case=Acc	15	dislocated	_	_
3	تقول	qAl-u_1	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=2|Tense=Pres|Voice=Act	2	acl:relcl	_	SpaceAfter=No
4	ه	h	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3	3	obj	_	_
5	و	w	CCONJ	CC	_	6	cc	_	SpaceAfter=No
6	ما	mA_1	PRON	WP	Case=Acc	2	conj	_	_
7	تفعل	faEal-a_1	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=2|Tense=Pres|Voice=Act	6	acl:relcl	_	SpaceAfter=No
8	ه	h	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3	7	obj	_	SpaceAfter=No
9	...	..._0	PUNCT	...	_	2	punct	_	_
10	في	fiy_1	ADP	IN	_	11	case	_	_
11	الواقع	wAqiE_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Def|Gender=Masc|Number=Sing	15	nmod	_	SpaceAfter=No
12	,	,_0	PUNCT	,	_	11	punct	_	_
13	إن	<in~a_1	PART	RP	_	15	compound:prt	_	SpaceAfter=No
14	ه	h	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3	15	nsubj	_	_
15	أمرٌ	>amor_1	NOUN	NN	Animacy=Nhum|Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
16	لا	lA_1	PART	RP	Polarity=Neg	17	advmod	_	_
17	يصدق	Sad~aq_1	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Pass	15	acl:relcl	_	SpaceAfter=No
18	.	._0	PUNCT	.	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 13 acl:relcl	color:blue
1	كان	kAn-u_1	AUX	VBC	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Tense=Past|Voice=Act	4	cop	_	_
2	هذان	h`*A_1	PRON	PDEM	Case=Nom|Gender=Masc|Number=Dual	4	nsubj	_	_
3	آخر	|xar_1	DET	PDT	Case=Acc	4	det	_	_
4	البومين	bwmyn_0	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Ind|Gender=Masc|Number=Dual	0	root	_	_
5	ينتج	>anotaj_1	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	4	acl:relcl	_	SpaceAfter=No
6	هما	hmA	PRON	PRP	Case=Acc|Number=Dual|Person=3	5	obj	_	_
7	رافيرتي	rAfyrty_0	PROPN	NNP	Animacy=Hum|Gender=Masc|Number=Sing	5	nsubj	_	_
8	مع	maE_1	ADP	IN	_	9	case	_	_
9	هيو	hiyuw_1	PROPN	NNP	Animacy=Hum|Gender=Masc|Number=Sing	5	obl	_	_
10	ميرفي	myrfy_0	PROPN	NNP	Animacy=Hum|Gender=Masc|Number=Sing	9	flat	_	SpaceAfter=No
11	,	,_0	PUNCT	,	_	13	punct	_	_
12	الذي	Al~a*iy_1	PRON	REL	Case=Nom|Gender=Masc|Number=Sing	13	nsubj:pass	_	_
13	توفي	tawaf~aY_1	VERB	VBC	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Tense=Past|Voice=Pass	9	acl:relcl	_	_
14	عام	EAm_1	ADV	RB	_	13	obl:tmod	_	_
15	1998	1998_0	NUM	CD	Case=Gen	14	obl	_	SpaceAfter=No
16	.	._0	PUNCT	.	_	4	punct	_	_

~~~


