---
layout: base
title:  'Statistics of nmod:gmod in UD_Arabic-PUD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-PUD: Relations: `nmod:gmod`

This relation is a language-specific subtype of <tt><a href="ar_pud-dep-nmod.html">nmod</a></tt>.

437 nodes (2%) are attached to their parents as `nmod:gmod`.

435 instances of `nmod:gmod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.12585812356979.

The following 10 pairs of parts of speech are connected with `nmod:gmod`: <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt> (256; 59% instances), <tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt> (78; 18% instances), <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-NUM.html">NUM</a></tt> (61; 14% instances), <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt> (33; 8% instances), <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="ar_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="ar_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 nmod:gmod	color:blue
1	تمول	maw~al_1	VERB	VBC	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Pass	0	root	_	_
2	النفقات	nafaqap_1	NOUN	NN	Animacy=Nhum|Case=Nom|Definite=Def|Gender=Fem|Number=Plur	1	nsubj:pass	_	_
3	الجديدة	jadiyd_1	ADJ	JJ	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	2	amod	_	_
4	من	min_1	ADP	IN	_	6	case	_	_
5	خلال	xilAl_1	ADP	IN	_	4	fixed	_	_
6	حساب	HisAb_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Def|Gender=Masc|Number=Sing	1	obl	_	_
7	كلينتون	kliynotuwn_1	PROPN	NNP	Animacy=Hum|Gender=Masc|Number=Sing	6	nmod:gmod	_	_
8	المصرفي	maSorafiy~_1	ADJ	JJ	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	6	amod	_	_
9	الكبير	kabiyr_1	ADJ	JJ	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	6	amod	_	SpaceAfter=No
10	.	._0	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 nmod:gmod	color:blue
1	و	w	PART	RP	_	6	compound:prt	_	SpaceAfter=No
2	في	fiy_1	ADP	IN	_	3	case	_	_
3	الوقت	waqot_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Def|Gender=Masc|Number=Sing	6	obl	_	_
4	نفس	nafos_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Def|Gender=Fem|Number=Sing	3	appos	_	SpaceAfter=No
5	ه	h	PRON	PRP	Case=Gen|Gender=Masc|Number=Sing|Person=3	4	nmod	_	_
6	يبدو	badA-u_1	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	_
7	أن	>an~a_1	SCONJ	IN	_	10	mark	_	_
8	هونغ	huwnoj_1	PROPN	NNP	Animacy=Nhum|Number=Sing	10	nsubj	_	_
9	كونغ	kuwnoj_1	PROPN	NNP	Animacy=Nhum|Number=Sing	8	nmod:gmod	_	_
10	تستعد	{isotaEad~_1	VERB	VBC	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	6	ccomp	_	_
11	ل	l	ADP	IN	_	12	case	_	SpaceAfter=No
12	موجة	mawojap_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	10	obl	_	_
13	مظاهرات	muZAharap_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Ind|Gender=Fem|Number=Plur	12	nmod	_	_
14	جديدة	jadiyd_1	ADJ	JJ	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	13	amod	_	SpaceAfter=No
15	.	._0	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nmod:gmod	color:blue
1	ب	b	ADP	IN	_	2	case	_	SpaceAfter=No
2	الانتقال	{inotiqAl_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Def|Gender=Masc|Number=Sing	7	obl	_	_
3	إلى	<ilaY_1	ADP	IN	_	4	case	_	_
4	عام	EAm_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Def|Gender=Masc|Number=Sing	2	nmod	_	_
5	2016	2016_0	NUM	CD	_	4	nmod:gmod	_	_
6	و	w	PART	RP	_	7	compound:prt	_	SpaceAfter=No
7	يلقى	>aloqaY_1	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	_
8	هذا	h`*A_1	PRON	PDEM	Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	_
9	المزيد	maziyd_1	NOUN	NN	Animacy=Nhum|Case=Acc|Definite=Def|Gender=Masc|Number=Sing	7	obj	_	_
10	من	min_1	ADP	IN	_	11	case	_	_
11	الاهتمام	{ihotimAm_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Def|Gender=Masc|Number=Sing	9	nmod	_	SpaceAfter=No
12	.	._0	PUNCT	.	_	7	punct	_	_

~~~


