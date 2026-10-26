---
layout: base
title:  'Statistics of compound:prt in UD_Arabic-PUD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-PUD: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="ar_pud-dep-compound.html">compound</a></tt>.

272 nodes (1%) are attached to their parents as `compound:prt`.

271 instances of `compound:prt` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.75735294117647.

The following 9 pairs of parts of speech are connected with `compound:prt`: <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-PART.html">PART</a></tt> (199; 73% instances), <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-PART.html">PART</a></tt> (38; 14% instances), <tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_pud-pos-PART.html">PART</a></tt> (27; 10% instances), <tt><a href="ar_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="ar_pud-pos-PART.html">PART</a></tt> (3; 1% instances), <tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="ar_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="ar_pud-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="ar_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ar_pud-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="ar_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ar_pud-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound:prt	color:blue
1	س	سَ	PART	RP	_	2	compound:prt	_	SpaceAfter=No
2	أدخل	أَدخَل	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	LId=دَخَل-ُ_1
3	السجن	سِجن	NOUN	NN	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	2	obj	_	LId=سِجْن_1
4	في	فِي	ADP	IN	_	6	case	_	LId=فِي_1
5	كل	كُلّ	DET	PDT	Case=Gen|PronType=Tot	6	det	_	LId=كُلّ_1
6	الأحوال	حَال	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Plur	2	obl	_	LId=حال_1|SpaceAfter=No
7	,	,	PUNCT	,	_	8	punct	_	LId=,_0
8	آمل	أَمَل	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	2	parataxis	_	LId=أَمَل-َ_1
9	أن	أَن	ADP	IN	_	12	mark	_	LId=أَنْ_1
10	الأمر	أَمر	NOUN	NN	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	12	nsubj	_	LId=أَمْر_1
11	كان	كَان	AUX	VBC	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Tense=Past|Voice=Act	12	aux	_	LId=كان-ُ_1
12	يستحق	اِستَحَقّ	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	ccomp	_	LId=ٱِسْتَحَقّ_1|SpaceAfter=No
13	.	.	PUNCT	.	_	2	punct	_	LId=._0

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 1 compound:prt	color:blue
1	إن	إِنَّ	PART	RP	_	15	compound:prt	_	LId=إِنَّ_1
2	ما	ما	PRON	WP	Case=Acc|PronType=Int	15	dislocated	_	LId=ما_1
3	تقول	قَال	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	2	acl:relcl	_	LId=قال-ُ_1|SpaceAfter=No
4	ه	هُوَ	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	obj	_	_
5	و	وَ	CCONJ	CC	_	6	cc	_	SpaceAfter=No
6	ما	ما	PRON	WP	Case=Acc|PronType=Int	2	conj	_	LId=ما_1
7	تفعل	فَعَل	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	6	acl:relcl	_	LId=فَعَل-َ_1|SpaceAfter=No
8	ه	هُوَ	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	obj	_	SpaceAfter=No
9	...	...	PUNCT	...	_	2	punct	_	LId=..._0
10	في	فِي	ADP	IN	_	11	case	_	LId=فِي_1
11	الواقع	وَاقِع	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	15	nmod	_	LId=واقِع_1|SpaceAfter=No
12	,	,	PUNCT	,	_	11	punct	_	LId=,_0
13	إن	إِنَّ	PART	RP	_	15	compound:prt	_	LId=إِنَّ_1|SpaceAfter=No
14	ه	هُوَ	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	15	nsubj	_	_
15	أمرٌ	أَمر	NOUN	NN	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	0	root	_	LId=أَمْر_1
16	لا	لَا	PART	RP	Polarity=Neg	17	advmod	_	LId=لا_1
17	يصدق	صَدَّق	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	15	acl:relcl	_	LId=صَدَّق_1|SpaceAfter=No
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
7	ه	هُوَ	PRON	PRP	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nmod	_	_
8	خانقاً	خانِق	ADJ	JJ	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	0	root	_	LId=خانِق_2
9	زيادة	زِيَادَة	NOUN	VBG	Case=Acc|Definite=Ind|Gender=Fem	8	advcl	_	LId=زِيادَة_1
10	عن	عَن	ADP	IN	_	11	case	_	LId=عَن_1
11	اللزوم	لُزُوم	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	9	obl	_	LId=لُزُوم_1|SpaceAfter=No
12	.	.	PUNCT	.	_	8	punct	_	LId=._0

~~~


