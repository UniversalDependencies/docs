---
layout: base
title:  'Statistics of nummod in UD_Arabic-PUD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-PUD: Relations: `nummod`

This relation is universal.

150 nodes (1%) are attached to their parents as `nummod`.

117 instances of `nummod` (78%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.18.

The following 5 pairs of parts of speech are connected with `nummod`: <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-NUM.html">NUM</a></tt> (110; 73% instances), <tt><a href="ar_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ar_pud-pos-NUM.html">NUM</a></tt> (24; 16% instances), <tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_pud-pos-NUM.html">NUM</a></tt> (8; 5% instances), <tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_pud-pos-NUM.html">NUM</a></tt> (7; 5% instances), <tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 nummod	color:blue
1	الحد	حَدّ	NOUN	NN	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	11	nsubj	_	LId=حَدّ_1
2	الأقصى	أَقصَى	ADJ	JJR	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	1	amod	_	LId=أَقْصَى_2
3	المسموح	مَسمُوح	ADJ	VBN	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	1	ccomp	_	LId=مَسْمُوح_1
4	ب	بِ	ADP	IN	_	5	case	_	LId=بِ_1|SpaceAfter=No
5	ه	هُوَ	PRON	PRP	Case=Gen|Gender=Masc|Number=Sing|Person=3	3	obl	_	_
6	ل	لِ	ADP	IN	_	7	case	_	SpaceAfter=No
7	لشخص	شَخص	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	3	obl	_	LId=شَخْص_1
8	الواحد	وَاحِد	ADJ	JJ	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	7	amod	_	LId=واحِد_1
9	هو	هُوَ	PRON	PRP	Gender=Masc|Number=Sing|Person=3	1	dep	_	LId=هُوَ_1
10	5000	5000	NUM	CD	_	11	nummod	_	LId=٥٠٠٠_0
11	دولار	دُولَار	NOUN	NN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	0	root	_	LId=دُولار_1|SpaceAfter=No
12	.	.	PUNCT	.	_	11	punct	_	LId=._0

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 nummod	color:blue
1	الملك	مَلِك	NOUN	NN	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	4	nsubj	_	LId=مَلِك_2
2	الأول	أَوَّل	ADJ	JJ	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	1	amod	_	LId=أَوَّل_2
3	كان	كَان	AUX	VBC	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Tense=Past|Voice=Act	4	cop	_	LId=كان-ُ_1
4	موجمير	موجمير	PROPN	NNP	Gender=Masc|Number=Sing	0	root	_	LId=موجمير_0
5	الأول	أَوَّل	ADJ	JJ	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	4	amod	_	LId=أَوَّل_2|Proper=True
6	(	(	PUNCT	(	_	7	punct	_	LId=(_0|SpaceAfter=No
7	حكم	حُكم	NOUN	VBC	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Tense=Past|Voice=Act	4	advcl	_	LId=حُكْم_1
8	ما	مَا	PART	RP	_	10	case	_	LId=ما_1
9	بين	بَينَ	ADP	IN	_	8	fixed	_	LId=بَيْنَ_1
10	830	830	NUM	CD	_	7	obl	_	LId=٨٣٠_0|SpaceAfter=No
11	-	-	PUNCT	-	_	12	punct	_	LId=-_0|SpaceAfter=No
12	846	846	NUM	CD	_	10	nummod	_	LId=٨٤٦_0|SpaceAfter=No
13	)	)	PUNCT	)	_	7	punct	_	LId=)_0|SpaceAfter=No
14	.	.	PUNCT	.	_	4	punct	_	LId=._0

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 nummod	color:blue
1	قالت	قَال	VERB	VBC	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	LId=قال-ُ_1
2	مصادر	مَصدَر	NOUN	NN	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur	1	nsubj	_	LId=مَصْدَر_1
3	مطلعة	مُطَّلِع	ADJ	JJ	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	2	amod	_	LId=مُطَّلِع_1
4	أن	أَنَّ	SCONJ	IN	_	9	mark	_	LId=أَنَّ_1|SpaceAfter=No
5	ه	هُوَ	PRON	EX	_	9	expl	_	_
6	"	"	PUNCT	``	_	9	punct	_	LId="_0
7	100	100	NUM	CD	_	9	nummod	_	LId=١٠٠_0|SpaceAfter=No
8	%	%	SYM	SYM	_	7	dep	_	LId=%_0
9	كوسبيدال	كوسبيدال	PROPN	NNP	Gender=Masc|Number=Sing	1	ccomp	_	LId=كوسبيدال_0|SpaceAfter=No
10	"	"	PUNCT	''	_	9	punct	_	LId="_0|SpaceAfter=No
11	.	.	PUNCT	.	_	1	punct	_	LId=._0

~~~


