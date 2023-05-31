---
layout: base
title:  'Statistics of acl:relcl in UD_Arabic-PUD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-PUD: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="ar_pud-dep-acl.html">acl</a></tt>.

320 nodes (2%) are attached to their parents as `acl:relcl`.

319 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.734375.

The following 13 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-VERB.html">VERB</a></tt> (222; 69% instances), <tt><a href="ar_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ar_pud-pos-VERB.html">VERB</a></tt> (41; 13% instances), <tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_pud-pos-VERB.html">VERB</a></tt> (28; 9% instances), <tt><a href="ar_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ar_pud-pos-ADP.html">ADP</a></tt> (11; 3% instances), <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt> (5; 2% instances), <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-ADP.html">ADP</a></tt> (2; 1% instances), <tt><a href="ar_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="ar_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 17 acl:relcl	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 acl:relcl	color:blue
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
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 13 acl:relcl	color:blue
1	كان	كَان	AUX	VBC	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Tense=Past|Voice=Act	4	cop	_	LId=كان-ُ_1
2	هذان	ه`ذا	PRON	PDEM	Case=Nom|Gender=Masc|Number=Dual	4	nsubj	_	LId=هٰذا_1
3	آخر	آخَر	DET	PDT	Case=Acc	4	det	_	LId=آخَر_1
4	البومين	بومين	NOUN	NN	Case=Gen|Definite=Ind|Gender=Masc|Number=Dual	0	root	_	LId=بومين_0
5	ينتج	أَنتَج	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	4	acl:relcl	_	LId=أَنْتَج_1|SpaceAfter=No
6	هما	هُوَ	PRON	PRP	Case=Acc|Number=Dual|Person=3	5	obj	_	_
7	رافيرتي	رافيرتي	PROPN	NNP	Gender=Masc|Number=Sing	5	nsubj	_	LId=رافيرتي_0
8	مع	مَعَ	ADP	IN	_	9	case	_	LId=مَع_1
9	هيو	هِيُو	PROPN	NNP	Gender=Masc|Number=Sing	5	obl	_	LId=هِيُو_1
10	ميرفي	ميرفي	PROPN	NNP	Gender=Masc|Number=Sing	9	flat	_	LId=ميرفي_0|SpaceAfter=No
11	,	,	PUNCT	,	_	13	punct	_	LId=,_0
12	الذي	الَّذِي	PRON	REL	Case=Nom|Gender=Masc|Number=Sing	13	nsubj:pass	_	LId=الَّذِي_1
13	توفي	تَوَفَّى	VERB	VBC	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Tense=Past|Voice=Pass	9	acl:relcl	_	LId=تَوَفَّى_1
14	عام	عام	ADV	RB	_	13	obl:tmod	_	LId=عام_1
15	1998	1998	NUM	CD	Case=Gen	14	obl	_	LId=١٩٩٨_0|SpaceAfter=No
16	.	.	PUNCT	.	_	4	punct	_	LId=._0

~~~


