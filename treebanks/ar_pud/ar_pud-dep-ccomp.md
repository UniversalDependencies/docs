---
layout: base
title:  'Statistics of ccomp in UD_Arabic-PUD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-PUD: Relations: `ccomp`

This relation is universal.

287 nodes (1%) are attached to their parents as `ccomp`.

286 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.13588850174216.

The following 14 pairs of parts of speech are connected with `ccomp`: <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt> (96; 33% instances), <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-VERB.html">VERB</a></tt> (90; 31% instances), <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt> (41; 14% instances), <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt> (15; 5% instances), <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-ADP.html">ADP</a></tt> (12; 4% instances), <tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt> (9; 3% instances), <tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_pud-pos-VERB.html">VERB</a></tt> (6; 2% instances), <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-VERB.html">VERB</a></tt> (6; 2% instances), <tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_pud-pos-ADP.html">ADP</a></tt> (2; 1% instances), <tt><a href="ar_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="ar_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="ar_pud-pos-PART.html">PART</a></tt>-<tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 ccomp	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 ccomp	color:blue
1	قال	قَال	VERB	VBC	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	LId=قال-ُ_1
2	السيد	سَيِّد	NOUN	NN	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	1	nsubj	_	LId=سَيِّد_1
3	بانفالكار	انفالكار	PROPN	NNP	Gender=Masc|Number=Sing	2	appos	_	LId=انفالكار_0
4	أن	أَنَّ	SCONJ	IN	_	6	mark	_	LId=أَنَّ_1|SpaceAfter=No
5	ه	هُوَ	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3	6	nsubj	_	_
6	شعر	شَعَر	VERB	VBC	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Tense=Past|Voice=Act	1	ccomp	_	LId=شَعَر-ُ_1
7	ذات	ذَات	NOUN	NN	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	6	obl	_	LId=ذات_1
8	مرة	مَرَّة	NOUN	NN	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	7	nmod	_	LId=مَرَّة_1
9	أن	أَنَّ	SCONJ	IN	_	12	mark	_	LId=أَنَّ_1
10	علي	عَلَى	ADP	IN	_	11	case	_	LId=عَلَى_1|SpaceAfter=No
11	هم	هُوَ	PRON	PRP	Case=Gen|Gender=Masc|Number=Plur|Person=3	12	nmod	_	_
12	ترك	تَرك	NOUN	NN	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	6	xcomp	_	LId=تَرْك_1
13	المبنى	مَبنَى	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	12	nmod	_	LId=مَبْنَى_1|SpaceAfter=No
14	.	.	PUNCT	.	_	1	punct	_	LId=._0

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 ccomp	color:blue
1	إن	إِنَّ	PART	RP	_	3	compound:prt	_	LId=إِنَّ_1|SpaceAfter=No
2	ه	هُوَ	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3	3	nsubj	_	_
3	يتحدث	تَحَدَّث	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	LId=تَحَدَّث_1
4	مؤيداً	مُؤَيِّد	ADJ	VBN	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	3	ccomp	_	LId=مُؤَيِّد_1
5	التعذيب	تَعذِيب	NOUN	NN	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	4	obj	_	LId=تَعْذِيب_1|SpaceAfter=No
6	.	.	PUNCT	.	_	3	punct	_	LId=._0

~~~


