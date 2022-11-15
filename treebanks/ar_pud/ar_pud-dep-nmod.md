---
layout: base
title:  'Statistics of nmod in UD_Arabic-PUD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-PUD: Relations: `nmod`

This relation is universal.

3197 nodes (15%) are attached to their parents as `nmod`.

3161 instances of `nmod` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.88301532686894.

The following 21 pairs of parts of speech are connected with `nmod`: <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt> (1906; 60% instances), <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt> (522; 16% instances), <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-PRON.html">PRON</a></tt> (419; 13% instances), <tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt> (172; 5% instances), <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-NUM.html">NUM</a></tt> (66; 2% instances), <tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt> (37; 1% instances), <tt><a href="ar_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt> (26; 1% instances), <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt> (12; 0% instances), <tt><a href="ar_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt> (10; 0% instances), <tt><a href="ar_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt> (5; 0% instances), <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-VERB.html">VERB</a></tt> (5; 0% instances), <tt><a href="ar_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ar_pud-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_pud-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="ar_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="ar_pud-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_pud-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="ar_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ar_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ar_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 11 nmod	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 nmod	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 nmod	color:blue
1	ل	ل	PART	RP	_	8	compound:prt	_	SpaceAfter=No
2	ربما	ربما	ADV	RB	_	8	advmod	_	LId=ربما_0
3	كان	كَان	AUX	VBC	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Tense=Past|Voice=Act	8	cop	_	LId=كان-ُ_1
4	الزي	زِيّ	NOUN	NN	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	8	nsubj	_	LId=زِيّ_1
5	الواجب	وَاجِب	ADJ	VBN	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	4	ccomp	_	LId=واجِب_2
6	ارتداؤ	ٱِرتِداء	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	5	nsubj	_	LId=ٱِرْتِداء_1|SpaceAfter=No
7	ه	هُوَ	PRON	PRP	Case=Gen|Gender=Masc|Number=Sing|Person=3	6	nmod	_	_
8	خانقاً	خانِق	ADJ	JJ	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	0	root	_	LId=خانِق_2
9	زيادة	زِيَادَة	NOUN	VBG	Case=Acc|Definite=Ind|Gender=Fem	8	advcl	_	LId=زِيادَة_1
10	عن	عَن	ADP	IN	_	11	case	_	LId=عَن_1
11	اللزوم	لُزُوم	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	9	obl	_	LId=لُزُوم_1|SpaceAfter=No
12	.	.	PUNCT	.	_	8	punct	_	LId=._0

~~~


