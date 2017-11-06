---
layout: base
title:  'Statistics of compound:prt in UD_Arabic-PUD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-PUD: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="ar_pud-dep-compound.html">compound</a></tt>.

382 nodes (2%) are attached to their parents as `compound:prt`.

380 instances of `compound:prt` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.68062827225131.

The following 10 pairs of parts of speech are connected with `compound:prt`: <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-PART.html">PART</a></tt> (273; 71% instances), <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-PART.html">PART</a></tt> (63; 16% instances), <tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_pud-pos-PART.html">PART</a></tt> (29; 8% instances), <tt><a href="ar_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="ar_pud-pos-PART.html">PART</a></tt> (6; 2% instances), <tt><a href="ar_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="ar_pud-pos-PART.html">PART</a></tt> (4; 1% instances), <tt><a href="ar_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ar_pud-pos-PART.html">PART</a></tt> (2; 1% instances), <tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_pud-pos-PART.html">PART</a></tt> (2; 1% instances), <tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="ar_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ar_pud-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 9 compound:prt	color:blue
1	قد	qado_1	PART	RP	_	6	compound:prt	_	_
2	يكون	kAn-u_1	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	6	cop	_	_
3	"	"_0	PUNCT	``	_	4	punct	_	SpaceAfter=No
4	خنزير	xinoziyr_1	NOUN	NN	Animacy=Nhum|Case=Nom|Definite=Def|Gender=Masc|Number=Sing	6	nsubj	_	SpaceAfter=No
5	"	"_0	PUNCT	''	_	4	punct	_	_
6	خنزيراً	xinoziyr_1	NOUN	NN	Animacy=Nhum|Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
7	وحيداً	waHiyd_2	ADJ	JJ	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	6	amod	_	SpaceAfter=No
8	,	,_0	PUNCT	,	_	13	punct	_	_
9	غير	gayor_1	PART	RP	_	13	compound:prt	_	_
10	أن	>an~a_1	SCONJ	IN	_	9	fixed	_	SpaceAfter=No
11	ه	h	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3	13	nsubj:pass	_	_
12	لا	lA_1	PART	RP	Polarity=Neg	13	advmod	_	_
13	يترك	tarak-u_1	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Pass	6	advcl	_	_
14	وحد	waHod_1	NOUN	NN	Animacy=Nhum|Case=Acc|Definite=Def|Gender=Masc|Number=Sing	13	advmod	_	SpaceAfter=No
15	ه	h	PRON	PRP	Case=Gen|Gender=Masc|Number=Sing|Person=3	14	nmod	_	_
16	أبداً	>abad_1	ADV	RB	_	13	advmod	_	SpaceAfter=No
17	.	._0	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 1 compound:prt	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 compound:prt	color:blue
1	ل	l	PART	RP	_	8	compound:prt	_	SpaceAfter=No
2	ربما	rbmA_0	ADV	RB	_	8	advmod	_	_
3	كان	kAn-u_1	AUX	VBC	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Tense=Past|Voice=Act	8	cop	_	_
4	الزي	ziy~_1	NOUN	NN	Animacy=Nhum|Case=Nom|Definite=Def|Gender=Masc|Number=Sing	8	nsubj	_	_
5	الواجب	wAjib_2	ADJ	VBN	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	4	ccomp	_	_
6	ارتداؤ	{irotidA'_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Def|Gender=Masc|Number=Sing	5	nsubj	_	SpaceAfter=No
7	ه	h	PRON	PRP	Case=Gen|Gender=Masc|Number=Sing|Person=3	6	nmod	_	_
8	خانقاً	xAniq_2	ADJ	JJ	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
9	زيادة	ziyAdap_1	NOUN	VBG	Case=Acc|Definite=Ind|Gender=Fem	8	advcl	_	_
10	عن	Ean_1	ADP	IN	_	11	case	_	_
11	اللزوم	luzuwm_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Def|Gender=Masc|Number=Sing	9	obl	_	SpaceAfter=No
12	.	._0	PUNCT	.	_	8	punct	_	_

~~~


