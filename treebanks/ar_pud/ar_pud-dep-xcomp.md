---
layout: base
title:  'Statistics of xcomp in UD_Arabic-PUD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-PUD: Relations: `xcomp`

This relation is universal.

152 nodes (1%) are attached to their parents as `xcomp`.

135 instances of `xcomp` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.77631578947368.

The following 10 pairs of parts of speech are connected with `xcomp`: <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-VERB.html">VERB</a></tt> (56; 37% instances), <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt> (39; 26% instances), <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt> (35; 23% instances), <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-VERB.html">VERB</a></tt> (12; 8% instances), <tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_pud-pos-VERB.html">VERB</a></tt> (4; 3% instances), <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp	color:blue
1	هذا	ه`ذا	PRON	PDEM	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	LId=هٰذا_1
2	ما	ما	PRON	WP	Case=Nom	0	root	_	LId=ما_1
3	يجعل	جَعَل	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	2	acl:relcl	_	LId=جَعَل-َ_1|SpaceAfter=No
4	نا	هُوَ	PRON	PRP	Case=Acc|Number=Plur|Person=1	3	obj	_	_
5	نعود	عاد	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|Voice=Act	3	xcomp	_	LId=عاد-ُ_1
6	من	مِن	ADP	IN	_	7	case	_	LId=مِن_1
7	أجل	أَجل	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	5	obl	_	LId=أَجْل_1
8	المزيد	مَزِيد	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	7	nmod	_	LId=مَزِيد_1|SpaceAfter=No
9	.	.	PUNCT	.	_	2	punct	_	LId=._0

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 12 xcomp	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 xcomp	color:blue
1	باتت	بات	VERB	VBC	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	LId=بات-ِ_1
2	هواتف	هَاتِف	NOUN	NN	Case=Nom|Definite=Def|Gender=Masc|Number=Plur	1	nsubj	_	LId=هاتِف_1|SpaceAfter=No
3	نا	هُوَ	PRON	PRP	Case=Gen|Number=Plur|Person=1	2	nmod	_	_
4	المحمولة	مَحمُول	ADJ	JJ	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	2	amod	_	LId=مَحْمُول_1
5	أكثر	أَكثَر	ADJ	JJR	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	1	xcomp	_	LId=أَكْثَر_2
6	من	مِن	ADP	IN	_	7	case	_	LId=مِن_1
7	مجرد	مُجَرَّد	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	1	obl	_	LId=مُجَرَّد_1
8	هواتف	هَاتِف	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Plur	7	nmod	_	LId=هاتِف_1
9	هذه	ه`ذا	PRON	PDEM	Case=Gen|Gender=Fem|Number=Sing	10	det	_	LId=هٰذا_1
10	الأيام	يَوم	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Plur	8	nmod	_	LId=يَوْم_1|SpaceAfter=No
11	.	.	PUNCT	.	_	1	punct	_	LId=._0

~~~


