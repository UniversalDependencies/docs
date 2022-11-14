---
layout: base
title:  'Statistics of csubj in UD_Arabic-PUD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-PUD: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="ar_pud-dep-csubj-pass.html">csubj:pass</a></tt>.

57 nodes (0%) are attached to their parents as `csubj`.

57 instances of `csubj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.91228070175439.

The following 8 pairs of parts of speech are connected with `csubj`: <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-VERB.html">VERB</a></tt> (32; 56% instances), <tt><a href="ar_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="ar_pud-pos-VERB.html">VERB</a></tt> (15; 26% instances), <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-VERB.html">VERB</a></tt> (3; 5% instances), <tt><a href="ar_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-ADP.html">ADP</a></tt> (2; 4% instances), <tt><a href="ar_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="ar_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ar_pud-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 csubj	color:blue
1	لا	لَا	PART	RP	Polarity=Neg	2	advmod	_	LId=لا_1
2	يمكن	أَمكَن	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	LId=أَمْكَن_1
3	ل	لِ	ADP	IN	_	4	case	_	SpaceAfter=No
4	لجميع	جَمِيع	NOUN	NN	Case=Gen|Definite=Def	2	obl	_	LId=جَمِيع_1
5	أن	أَنَّ	SCONJ	IN	_	6	mark	_	LId=أَنَّ_1
6	يترفعوا	تَرَفَّع	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Sub|Number=Plur|Person=3|Tense=Pres|Voice=Act	2	csubj	_	LId=تَرَفَّع_1
7	عن	عَن	ADP	IN	_	8	case	_	LId=عَن_1
8	الأمر	أَمر	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	6	obl	_	LId=أَمْر_1|SpaceAfter=No
9	.	.	PUNCT	.	_	2	punct	_	LId=._0

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 csubj	color:blue
1	على	عَلَى	ADP	IN	_	0	root	_	LId=عَلَى_1
2	اللاهوت	لَاهُوت	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	1	obj	_	LId=لاهُوت_1
3	السليم	سَلِيم	ADJ	JJ	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	2	amod	_	LId=سَلِيم_2
4	أن	أَنَّ	SCONJ	IN	_	5	mark	_	LId=أَنَّ_1
5	يتأسس	تَأَسَّس	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Sub|Number=Sing|Person=3|Tense=Pres|Voice=Act	1	csubj	_	LId=تَأَسَّس_1
6	على	عَلَى	ADP	IN	_	7	case	_	LId=عَلَى_1
7	ضوء	ضَوء	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	5	obl	_	LId=ضَوْء_1
8	هدف	هَدَف	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	7	nmod	_	LId=هَدَف_1|SpaceAfter=No
9	ه	هُوَ	PRON	PRP	Case=Gen|Gender=Masc|Number=Sing|Person=3	8	nmod	_	_
10	المستقبلي	مُستَقبَلِيّ	ADJ	JJ	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	8	amod	_	LId=مُسْتَقْبَلِيّ_1|SpaceAfter=No
11	.	.	PUNCT	.	_	1	punct	_	LId=._0

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 csubj	color:blue
1	حلم	حُلم	NOUN	NN	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	0	root	_	LId=حُلْم_1|SpaceAfter=No
2	ه	هُوَ	PRON	PRP	Case=Gen|Gender=Masc|Number=Sing|Person=3	1	nmod	_	_
3	أن	أَن	ADP	IN	_	4	mark	_	LId=أَنْ_1
4	ينهي	أَنهَى	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Sub|Number=Sing|Person=3|Tense=Pres|Voice=Act	1	csubj	_	LId=أَنْهَى_1
5	مسيرت	مَسِيرَة	NOUN	NN	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	4	obj	_	LId=مَسِيرَة_1|SpaceAfter=No
6	ه	هُوَ	PRON	PRP	Case=Gen|Gender=Masc|Number=Sing|Person=3	5	nmod	_	_
7	المهنية	مِهنِيّ	ADJ	JJ	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	5	amod	_	LId=مِهْنِيّ_1
8	هنا	هُنَا	ADV	RB	_	4	advmod	_	LId=هُنا_1|SpaceAfter=No
9	.	.	PUNCT	.	_	1	punct	_	LId=._0

~~~


