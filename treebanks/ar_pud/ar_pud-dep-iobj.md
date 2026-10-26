---
layout: base
title:  'Statistics of iobj in UD_Arabic-PUD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-PUD: Relations: `iobj`

This relation is universal.

10 nodes (0%) are attached to their parents as `iobj`.

10 instances of `iobj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.6.

The following 3 pairs of parts of speech are connected with `iobj`: <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt> (8; 80% instances), <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-PRON.html">PRON</a></tt> (1; 10% instances), <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 iobj	color:blue
1	لا	لَا	PART	RP	Polarity=Neg	2	advmod	_	LId=لا_3
2	أسمي	ٱِسم	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LId=ٱِسْم_1|SpaceAfter=No
3	ها	هُوَ	PRON	PRP	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	obj	_	_
4	وحشاً	وَحش	NOUN	NN	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	2	iobj	_	LId=وَحْش_2
5	اعتباطاً	ٱِعتِباط	ADV	RB	_	2	advmod	_	LId=ٱِعْتِباط_1|SpaceAfter=No
6	.	.	PUNCT	.	_	2	punct	_	LId=._0

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 20 iobj	color:blue
1	لكن	ل`كِن	PART	RP	_	32	compound:prt	_	LId=لٰكِنْ_1
2	عندما	عِند	ADP	IN	_	3	mark	_	LId=عِنْد_1
3	أجاب	أَجَاب	VERB	VBC	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Tense=Past|Voice=Act	32	advcl	_	LId=أَجاب_1|SpaceAfter=No
4	ه	هُوَ	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	obj	_	_
5	مجلس	مَجلِس	PROPN	NN	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	3	nsubj	_	LId=مَجْلِس_1
6	الشيوخ	شَيخ	PROPN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Plur	5	nmod	_	LId=شَيْخ_1
7	ب	بِ	ADP	IN	_	8	case	_	SpaceAfter=No
8	شكل	شَكل	NOUN	NN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	3	obl	_	LId=شَكْل_1
9	قاطع	قاطِع	ADJ	JJ	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	8	amod	_	LId=قاطِع_1
10	من	مِن	ADP	IN	ExtPos=ADP	12	case	_	LId=مِن_1
11	خلال	خِلَالَ	ADP	IN	_	10	fixed	_	LId=خِلال_1
12	منع	مَنع	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	3	obl	_	LId=مَنْع_1|SpaceAfter=No
13	ه	هُوَ	PRON	PRP	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	nmod	_	_
14	من	مِن	ADP	IN	_	15	case	_	LId=مِن_1
15	المنافسة	مُنافَسَة	NOUN	NN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	12	nmod	_	LId=مُنافَسَة_1
16	في	فِي	ADP	IN	_	17	case	_	LId=فِي_1
17	القنصلية	قُنصُلِيَّة	NOUN	NN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	15	nmod	_	LId=قُنْصُلِيَّة_1
18	و	وَ	CCONJ	CC	_	19	cc	_	SpaceAfter=No
19	منح	مَنح	NOUN	VBG	Case=Gen|Definite=Def|Gender=Masc	12	conj	_	LId=مَنْح_1|SpaceAfter=No
20	ه	هُوَ	PRON	PRP	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	19	iobj	_	_
21	خيار	خِيَار	NOUN	NN	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	19	obj	_	LId=خِيار_1
22	سحب	سَحب	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	21	nmod	_	LId=سَحْب_1
23	قوات	قُوَّة	NOUN	NN	Case=Gen|Definite=Def|Gender=Fem|Number=Plur	22	nmod	_	LId=قُوَّة_1|SpaceAfter=No
24	ه	هُوَ	PRON	PRP	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	23	nmod	_	_
25	أو	أَو	CCONJ	CC	_	27	cc	_	LId=أَوْ_1
26	أن	أَن	ADP	IN	_	27	mark	_	LId=أَنْ_1
27	يصبح	أَصبَح	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	19	conj	_	LId=أَصْبَح_1
28	عدواً	عَدُوّ	NOUN	NN	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	27	xcomp	_	LId=عَدُوّ_1
29	ل	لِ	ADP	IN	_	30	case	_	SpaceAfter=No
30	لشعب	شَعب	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	28	nmod	_	LId=شَعْب_1|SpaceAfter=No
31	,	,	PUNCT	,	_	3	punct	_	LId=,_0
32	أدرك	أَدرَك	VERB	VBC	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	LId=أَدْرَك_1
33	أن	أَنَّ	SCONJ	IN	_	45	mark	_	LId=أَنَّ_1|SpaceAfter=No
34	ه	هُوَ	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	45	nsubj	_	SpaceAfter=No
35	,	,	PUNCT	,	_	37	punct	_	LId=,_0
36	مهما	مَهما	ADV	RB	_	37	advmod	_	LId=مَهْما_2
37	كان	كَان	VERB	VBC	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Tense=Past|Voice=Act	45	ccomp	_	LId=كان-ُ_1
38	الخيار	خِيَار	NOUN	NN	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	37	nsubj	_	LId=خِيار_1
39	الذي	الَّذِي	PRON	REL	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	41	obj	_	LId=الَّذِي_1
40	س	سَ	PART	RP	_	41	compound:prt	_	SpaceAfter=No
41	يأخذ	أَخَذ	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	38	acl:relcl	_	LId=أَخَذ-ُ_1|SpaceAfter=No
42	ه	هُوَ	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	41	dep	_	SpaceAfter=No
43	,	,	PUNCT	,	_	37	punct	_	LId=,_0
44	س	سَ	PART	RP	_	45	compound:prt	_	SpaceAfter=No
45	يسلم	سَلَّم	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	32	ccomp	_	LId=سَلَّم_1
46	نفس	نَفس	NOUN	NN	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	45	obj	_	LId=نَفْس_1|SpaceAfter=No
47	ه	هُوَ	PRON	PRP	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	46	nmod	_	_
48	أعزلاً	أَعزَل	ADV	RB	_	45	advmod	_	LId=أَعْزَل_2
49	إلى	إِلَى	ADP	IN	_	50	case	_	LId=إِلَى_1
50	أيدي	يَد	NOUN	NN	Case=Gen|Definite=Def|Gender=Fem|Number=Plur	45	obl	_	LId=يَد_1
51	أعدائ	عَدُوّ	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Plur	50	nmod	_	LId=عَدُوّ_1|SpaceAfter=No
52	ه	هُوَ	PRON	PRP	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	51	nmod	_	_
53	السياسيين	سِيَاسِيّ	ADJ	JJ	Case=Gen|Definite=Def|Gender=Masc|Number=Plur	51	amod	_	LId=سِياسِيّ_1|SpaceAfter=No
54	.	.	PUNCT	.	_	32	punct	_	LId=._0

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 iobj	color:blue
1	وجدت	وَجَد	VERB	VBC	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	LId=وَجَد-ِ_1
2	الانتقال	اِنتِقَال	NOUN	NN	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	1	obj	_	LId=ٱِنْتِقال_1
3	إلى	إِلَى	ADP	IN	_	4	case	_	LId=إِلَى_1
4	الكتب	كِتَاب	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Plur	2	nmod	_	LId=كِتاب_1
5	الروائية	رِوَائِيّ	ADJ	JJ	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	4	amod	_	LId=رِوائِيّ_1
6	سهلاً	سَهل	ADJ	JJ	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	1	iobj	_	LId=سَهْل_1|SpaceAfter=No
7	,	,	PUNCT	,	_	8	punct	_	LId=,_0
8	موضحةً	مُوَضِّح	ADJ	VBN	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Act	6	ccomp	_	LId=مُوَضِّح_1|SpaceAfter=No
9	:	:	PUNCT	:	_	11	punct	_	LId=:_0
10	"	"	PUNCT	``	_	11	punct	_	LId="_0|SpaceAfter=No
11	يشكل	شَكَّل	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	ccomp	_	LId=شَكَّل_1
12	كل	كُلّ	DET	PDT	Case=Nom|PronType=Tot	13	det	_	LId=كُلّ_1
13	كتابٍ	كِتاب	NOUN	NN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	11	nsubj	_	LId=كِتاب_1
14	منحنى	مَنَح	NOUN	NN	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	11	obj	_	LId=مَنَح-َ_1
15	ل	لِ	ADP	IN	_	16	case	_	SpaceAfter=No
16	لتعلم	تَعَلُّم	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	14	nmod	_	LId=تَعَلُّم_1|SpaceAfter=No
17	,	,	PUNCT	,	_	20	punct	_	LId=,_0
18	و	وَ	CCONJ	CC	_	20	cc	_	SpaceAfter=No
19	علي	عَلَى	ADP	IN	_	20	case	_	LId=عَلَى_1|SpaceAfter=No
20	ك	هُوَ	PRON	PRP	Case=Gen|Person=2|PronType=Prs	11	conj	_	_
21	أن	أَن	ADP	IN	_	22	mark	_	LId=أَنْ_1
22	تبقى	بَقِي	VERB	VBC	Aspect=Imp|Gender=Fem|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	20	csubj	_	LId=بَقِي-َ_1
23	منفتح	مُنفَتِح	ADJ	JJ	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	22	xcomp	_	LId=مُنْفَتِح_1
24	العقل	عَقل	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	22	obl	_	LId=عَقْل_1|SpaceAfter=No
25	"	"	PUNCT	''	_	11	punct	_	LId="_0|SpaceAfter=No
26	.	.	PUNCT	.	_	6	punct	_	LId=._0

~~~


