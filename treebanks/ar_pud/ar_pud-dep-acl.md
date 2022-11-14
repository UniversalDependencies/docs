---
layout: base
title:  'Statistics of acl in UD_Arabic-PUD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-PUD: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="ar_pud-dep-acl-relcl.html">acl:relcl</a></tt>.

34 nodes (0%) are attached to their parents as `acl`.

30 instances of `acl` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.47058823529412.

The following 6 pairs of parts of speech are connected with `acl`: <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt> (18; 53% instances), <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt> (7; 21% instances), <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt> (6; 18% instances), <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="ar_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 acl	color:blue
1	استبعدت	اِستَبعَد	VERB	VBC	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	LId=ٱِسْتَبْعَد_1
2	الرقابة	رَقَابَة	NOUN	NN	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	1	nsubj	_	LId=رَقابَة_1
3	كل	كُلّ	DET	PDT	Case=Acc	4	det	_	LId=كُلّ_1
4	الآراء	رَأي	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Plur	1	obj	_	LId=رَأْي_1
5	غير	غَير	PART	RP	Polarity=Neg	6	advmod	_	LId=غَيْر_1
6	المرغوب	مَرغُوب	NOUN	VBN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	4	acl	_	LId=مَرْغُوب_1
7	ب	بِ	ADP	IN	_	8	case	_	LId=بِ_1|SpaceAfter=No
8	ها	هُوَ	PRON	PRP	Case=Gen|Gender=Fem|Number=Sing|Person=3	6	obl	_	SpaceAfter=No
9	,	,	PUNCT	,	_	11	punct	_	LId=,_0
10	و	وَ	CCONJ	CC	_	11	cc	_	SpaceAfter=No
11	باتت	بات	VERB	VBC	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|Tense=Past|Voice=Act	1	conj	_	LId=بات-ِ_1
12	المشاركة	مُشارَكَة	NOUN	NN	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	11	nsubj	_	LId=مُشارَكَة_1
13	في	فِي	ADP	IN	_	14	case	_	LId=فِي_1
14	الحياة	حَيَاة	NOUN	NN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	12	nmod	_	LId=حَياة_1
15	العامة	عَامّ	ADJ	JJ	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	14	amod	_	LId=عامّ_1
16	شبه	شِبه	DET	PDT	Case=Acc	17	det	_	LId=شِبْه_1
17	مستحيلة	مُستَحِيل	ADJ	JJ	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	11	xcomp	_	LId=مُسْتَحِيل_1|SpaceAfter=No
18	.	.	PUNCT	.	_	1	punct	_	LId=._0

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 acl	color:blue
1	قالت	قَال	VERB	VBC	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	LId=قال-ُ_1
2	ليف	لِيف	PROPN	NNP	Gender=Fem|Number=Sing	1	nsubj	_	LId=لِيف_1|SpaceAfter=No
3	:	:	PUNCT	:	_	5	punct	_	LId=:_0
4	"	"	PUNCT	``	_	5	punct	_	LId="_0|SpaceAfter=No
5	دار	دَار	NOUN	VBC	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Tense=Past|Voice=Act	1	acl	_	LId=دار_1
6	صوت	صَوت	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	5	nsubj	_	LId=صَوْت_1|SpaceAfter=No
7	ها	هُوَ	PRON	PRP	Case=Gen|Gender=Fem|Number=Sing|Person=3	6	nmod	_	_
8	حول	حَولَ	ADP	IN	_	9	case	_	LId=حَوْل_1
9	العالم	عالَم	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	5	obl	_	LId=عالَم_1
10	حرفياً	حَرفِيّ	ADV	RB	_	5	advmod	_	LId=حَرْفِيّ_1|SpaceAfter=No
11	"	"	PUNCT	''	_	5	punct	_	LId="_0|SpaceAfter=No
12	.	.	PUNCT	.	_	1	punct	_	LId=._0

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 4 acl	color:blue
1	بما	ما	PART	RP	_	4	compound:prt	_	LId=ما_1
2	أن	أَنَّ	PART	RP	_	4	compound:prt	_	LId=أَنَّ_1|SpaceAfter=No
3	ها	هُوَ	PRON	PRP	Case=Acc|Gender=Fem|Number=Sing|Person=3	4	nsubj:pass	_	_
4	ممولة	مُمَوَّل	ADJ	VBN	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing|Voice=Pass	12	acl	_	LId=مُمَوَّل_1
5	كلياً	كُلِّيّ	ADV	RB	_	4	advmod	_	LId=كُلِّيّ_1
6	ب	بِ	ADP	IN	_	7	case	_	SpaceAfter=No
7	أموال	مَال	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Plur	4	obl	_	LId=مال_1
8	برنار	بِرنار	PROPN	NNP	Gender=Masc|Number=Sing	7	nmod	_	LId=بِرْنار_1
9	تابي	أَبَى	PROPN	NNP	Gender=Masc|Number=Sing	8	flat	_	LId=أَبَى-َ_1
10	الخاصة	خَاصّ	ADJ	JJ	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	7	amod	_	LId=خاصّ_1|SpaceAfter=No
11	,	,	PUNCT	,	_	4	punct	_	LId=,_0
12	أغلقت	أَغلَق	VERB	VBC	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|Tense=Past|Voice=Pass	0	root	_	LId=أَغْلَق_1
13	هذه	ه`ذا	PRON	PDEM	Case=Nom|Gender=Fem|Number=Sing	14	det	_	LId=هٰذا_1
14	المدارس	مَدرَسَة	NOUN	NN	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	12	nsubj:pass	_	LId=مَدْرَسَة_1
15	عام	عام	ADV	RB	_	12	obl:tmod	_	LId=عام_1
16	1994	1994	NUM	CD	Case=Gen	15	obl	_	LId=١٩٩٤_0
17	عند	عِندَ	ADP	IN	_	18	case	_	LId=عِنْد_1
18	إعلان	إِعلان	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	12	obl	_	LId=إِعْلان_1
19	إفلاس	إِفلَاس	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	18	nmod	_	LId=إِفْلاس_1|SpaceAfter=No
20	ه	هُوَ	PRON	PRP	Case=Gen|Gender=Masc|Number=Sing|Person=3	19	nmod	_	SpaceAfter=No
21	.	.	PUNCT	.	_	12	punct	_	LId=._0

~~~


