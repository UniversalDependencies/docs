---
layout: base
title:  'Statistics of punct in UD_Arabic-PUD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-PUD: Relations: `punct`

This relation is universal.

2226 nodes (11%) are attached to their parents as `punct`.

1521 instances of `punct` (68%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.31176999101527.

The following 10 pairs of parts of speech are connected with `punct`: <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-PUNCT.html">PUNCT</a></tt> (1181; 53% instances), <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-PUNCT.html">PUNCT</a></tt> (500; 22% instances), <tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_pud-pos-PUNCT.html">PUNCT</a></tt> (236; 11% instances), <tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_pud-pos-PUNCT.html">PUNCT</a></tt> (120; 5% instances), <tt><a href="ar_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="ar_pud-pos-PUNCT.html">PUNCT</a></tt> (74; 3% instances), <tt><a href="ar_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="ar_pud-pos-PUNCT.html">PUNCT</a></tt> (49; 2% instances), <tt><a href="ar_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ar_pud-pos-PUNCT.html">PUNCT</a></tt> (37; 2% instances), <tt><a href="ar_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ar_pud-pos-PUNCT.html">PUNCT</a></tt> (24; 1% instances), <tt><a href="ar_pud-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ar_pud-pos-PUNCT.html">PUNCT</a></tt> (4; 0% instances), <tt><a href="ar_pud-pos-PART.html">PART</a></tt>-<tt><a href="ar_pud-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 10 punct	color:blue
1	تمول	مَوَّل	VERB	VBC	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Pass	0	root	_	LId=مَوَّل_1
2	النفقات	نَفَقَة	NOUN	NN	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	1	nsubj:pass	_	LId=نَفَقَة_1
3	الجديدة	جَدِيد	ADJ	JJ	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	2	amod	_	LId=جَدِيد_1
4	من	مِن	ADP	IN	_	6	case	_	LId=مِن_1
5	خلال	خِلَالَ	ADP	IN	_	4	fixed	_	LId=خِلال_1
6	حساب	حِسَاب	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	1	obl	_	LId=حِساب_1
7	كلينتون	كلِينتُون	PROPN	NNP	Gender=Masc|Number=Sing	6	nmod	_	LId=كلِينْتُون_1
8	المصرفي	مَصرِفِيّ	ADJ	JJ	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	6	amod	_	LId=مَصْرَفِيّ_1
9	الكبير	كَبِير	ADJ	JJ	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	6	amod	_	LId=كَبِير_1|SpaceAfter=No
10	.	.	PUNCT	.	_	1	punct	_	LId=._0

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 punct	color:blue
1	إن	إِنَّ	PART	RP	_	15	compound:prt	_	LId=إِنَّ_1
2	ما	ما	PRON	WP	Case=Acc	15	dislocated	_	LId=ما_1
3	تقول	قَال	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=2|Tense=Pres|Voice=Act	2	acl:relcl	_	LId=قال-ُ_1|SpaceAfter=No
4	ه	هُوَ	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3	3	obj	_	_
5	و	وَ	CCONJ	CC	_	6	cc	_	SpaceAfter=No
6	ما	ما	PRON	WP	Case=Acc	2	conj	_	LId=ما_1
7	تفعل	فَعَل	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=2|Tense=Pres|Voice=Act	6	acl:relcl	_	LId=فَعَل-َ_1|SpaceAfter=No
8	ه	هُوَ	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3	7	obj	_	SpaceAfter=No
9	...	...	PUNCT	...	_	2	punct	_	LId=..._0
10	في	فِي	ADP	IN	_	11	case	_	LId=فِي_1
11	الواقع	وَاقِع	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	15	nmod	_	LId=واقِع_1|SpaceAfter=No
12	,	,	PUNCT	,	_	11	punct	_	LId=,_0
13	إن	إِنَّ	PART	RP	_	15	compound:prt	_	LId=إِنَّ_1|SpaceAfter=No
14	ه	هُوَ	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3	15	nsubj	_	_
15	أمرٌ	أَمر	NOUN	NN	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	0	root	_	LId=أَمْر_1
16	لا	لَا	PART	RP	Polarity=Neg	17	advmod	_	LId=لا_1
17	يصدق	صَدَّق	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Pass	15	acl:relcl	_	LId=صَدَّق_1|SpaceAfter=No
18	.	.	PUNCT	.	_	15	punct	_	LId=._0

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 punct	color:blue
1	اليوم	يَوم	ADV	RB	_	5	obl:tmod	_	LId=يَوْم_1
2	الثالث	ثَالِث	ADJ	JJ	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	1	amod	_	LId=ثالِث_1|SpaceAfter=No
3	,	,	PUNCT	,	_	1	punct	_	LId=,_0
4	كنت	كَان	AUX	VBC	Aspect=Perf|Number=Sing|Person=1|Tense=Past|Voice=Act	5	cop	_	LId=كان-ُ_1
5	عائدة	عائِد	ADJ	JJ	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	0	root	_	LId=عائِد_1
6	على	عَلَى	ADP	IN	_	7	case	_	LId=عَلَى_1
7	دراجة	دَرَّاجَة	NOUN	NN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	5	obl	_	LId=دَرّاجَة_1
8	إي	أَيّ	PROPN	NNP	_	7	nmod	_	LId=أَيّ_1|SpaceAfter=No
9	-	-	PUNCT	-	_	10	punct	_	LId=-_0|SpaceAfter=No
10	ميكرو	ميكرو	PROPN	NNP	_	8	flat	_	LId=ميكرو_0
11	الصغيرة	صَغِير	ADJ	JJ	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	7	amod	_	LId=صَغِير_1|SpaceAfter=No
12	.	.	PUNCT	.	_	5	punct	_	LId=._0

~~~


