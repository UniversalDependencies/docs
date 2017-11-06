---
layout: base
title:  'Statistics of nummod in UD_Arabic-PUD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-PUD: Relations: `nummod`

This relation is universal.

153 nodes (1%) are attached to their parents as `nummod`.

117 instances of `nummod` (76%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.17647058823529.

The following 6 pairs of parts of speech are connected with `nummod`: <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-NUM.html">NUM</a></tt> (110; 72% instances), <tt><a href="ar_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ar_pud-pos-NUM.html">NUM</a></tt> (24; 16% instances), <tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_pud-pos-NUM.html">NUM</a></tt> (8; 5% instances), <tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_pud-pos-NUM.html">NUM</a></tt> (7; 5% instances), <tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 nummod	color:blue
1	الحد	Had~_1	NOUN	NN	Animacy=Nhum|Case=Nom|Definite=Def|Gender=Masc|Number=Sing	11	nsubj	_	_
2	الأقصى	>aqoSaY_2	ADJ	JJR	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	1	amod	_	_
3	المسموح	masomuwH_1	ADJ	VBN	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	1	ccomp	_	_
4	ب	bi_1	ADP	IN	_	5	case	_	SpaceAfter=No
5	ه	h	PRON	PRP	Case=Gen|Gender=Masc|Number=Sing|Person=3	3	obl	_	_
6	ل	l	ADP	IN	_	7	case	_	SpaceAfter=No
7	لشخص	$axoS_1	NOUN	NN	Animacy=Hum|Case=Gen|Definite=Def|Gender=Masc|Number=Sing	3	obl	_	_
8	الواحد	wAHid_1	ADJ	JJ	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	7	amod	_	_
9	هو	huwa_1	PRON	PRP	Gender=Masc|Number=Sing|Person=3	1	dep	_	_
10	5000	5000_0	NUM	CD	_	11	nummod	_	_
11	دولار	duwlAr_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
12	.	._0	PUNCT	.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 nummod	color:blue
1	الملك	malik_2	NOUN	NN	Animacy=Hum|Case=Nom|Definite=Def|Gender=Masc|Number=Sing	4	nsubj	_	_
2	الأول	>aw~al_2	ADJ	JJ	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	1	amod	_	_
3	كان	kAn-u_1	AUX	VBC	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Tense=Past|Voice=Act	4	cop	_	_
4	موجمير	mwjmyr_0	PROPN	NNP	Animacy=Hum|Gender=Masc|Number=Sing	0	root	_	_
5	الأول	>aw~al_2	ADJ	JJ	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	4	amod	_	Proper=True
6	(	(_0	PUNCT	(	_	7	punct	_	SpaceAfter=No
7	حكم	Hukom_1	NOUN	VBC	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Tense=Past|Voice=Act	4	advcl	_	_
8	ما	mA_1	PART	RP	_	10	case	_	_
9	بين	bayona_1	ADP	IN	_	8	fixed	_	_
10	830	830_0	NUM	CD	_	7	obl	_	SpaceAfter=No
11	-	-_0	PUNCT	-	_	12	punct	_	SpaceAfter=No
12	846	846_0	NUM	CD	_	10	nummod	_	SpaceAfter=No
13	)	)_0	PUNCT	)	_	7	punct	_	SpaceAfter=No
14	.	._0	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 nummod	color:blue
1	قالت	qAl-u_1	VERB	VBC	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	_
2	مصادر	maSodar_1	NOUN	NN	Animacy=Nhum|Case=Nom|Definite=Ind|Gender=Masc|Number=Plur	1	nsubj	_	_
3	مطلعة	muT~aliE_1	ADJ	JJ	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	2	amod	_	_
4	أن	>an~a_1	SCONJ	IN	_	9	mark	_	SpaceAfter=No
5	ه	h	PRON	EX	_	9	expl	_	_
6	"	"_0	PUNCT	``	_	9	punct	_	_
7	100	100_0	NUM	CD	_	9	nummod	_	SpaceAfter=No
8	%	%_0	SYM	SYM	_	7	dep	_	_
9	كوسبيدال	kwsbydAl_0	PROPN	NNP	Animacy=Hum|Gender=Masc|Number=Sing	1	ccomp	_	SpaceAfter=No
10	"	"_0	PUNCT	''	_	9	punct	_	SpaceAfter=No
11	.	._0	PUNCT	.	_	1	punct	_	_

~~~


