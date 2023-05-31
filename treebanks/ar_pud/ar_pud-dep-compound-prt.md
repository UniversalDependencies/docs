---
layout: base
title:  'Statistics of compound:prt in UD_Arabic-PUD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-PUD: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="ar_pud-dep-compound.html">compound</a></tt>.

379 nodes (2%) are attached to their parents as `compound:prt`.

377 instances of `compound:prt` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.69393139841689.

The following 10 pairs of parts of speech are connected with `compound:prt`: <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-PART.html">PART</a></tt> (273; 72% instances), <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-PART.html">PART</a></tt> (61; 16% instances), <tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_pud-pos-PART.html">PART</a></tt> (29; 8% instances), <tt><a href="ar_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="ar_pud-pos-PART.html">PART</a></tt> (6; 2% instances), <tt><a href="ar_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="ar_pud-pos-PART.html">PART</a></tt> (3; 1% instances), <tt><a href="ar_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ar_pud-pos-PART.html">PART</a></tt> (2; 1% instances), <tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_pud-pos-PART.html">PART</a></tt> (2; 1% instances), <tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="ar_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ar_pud-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 9 compound:prt	color:blue
1	قد	قَد	PART	RP	_	6	compound:prt	_	LId=قَدْ_1
2	يكون	كَان	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	6	cop	_	LId=كان-ُ_1
3	"	"	PUNCT	``	_	4	punct	_	LId="_0|SpaceAfter=No
4	خنزير	خِنزِير	NOUN	NN	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	6	nsubj	_	LId=خِنْزِير_1|SpaceAfter=No
5	"	"	PUNCT	''	_	4	punct	_	LId="_0
6	خنزيراً	خِنزِير	NOUN	NN	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	0	root	_	LId=خِنْزِير_1
7	وحيداً	وَحِيد	ADJ	JJ	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	6	amod	_	LId=وَحِيد_2|SpaceAfter=No
8	,	,	PUNCT	,	_	13	punct	_	LId=,_0
9	غير	غَير	PART	RP	_	13	compound:prt	_	LId=غَيْر_1
10	أن	أَنَّ	SCONJ	IN	_	9	fixed	_	LId=أَنَّ_1|SpaceAfter=No
11	ه	هُوَ	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3	13	nsubj:pass	_	_
12	لا	لَا	PART	RP	Polarity=Neg	13	advmod	_	LId=لا_1
13	يترك	تَرَك	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Pass	6	advcl	_	LId=تَرَك-ُ_1
14	وحد	وَحد	NOUN	NN	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	13	obl	_	LId=وَحْد_1|SpaceAfter=No
15	ه	هُوَ	PRON	PRP	Case=Gen|Gender=Masc|Number=Sing|Person=3	14	nmod	_	_
16	أبداً	أَبَد	ADV	RB	_	13	advmod	_	LId=أَبَد_1|SpaceAfter=No
17	.	.	PUNCT	.	_	6	punct	_	LId=._0

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 1 compound:prt	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 compound:prt	color:blue
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


