---
layout: base
title:  'Statistics of flat:foreign in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="ru_pud-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="ru_pud-dep-flat-name.html">flat:name</a></tt>.

143 nodes (1%) are attached to their parents as `flat:foreign`.

143 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.40559440559441.

The following 6 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-X.html">X</a></tt> (102; 71% instances), <tt><a href="ru_pud-pos-X.html">X</a></tt>-<tt><a href="ru_pud-pos-X.html">X</a></tt> (34; 24% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt> (4; 3% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 13 flat:foreign	color:blue
1	В	в	ADP	IN	_	3	case	_	_
2	2011	2011	NUM	JJ	Animacy=Inan|Gender=Masc|Number=Sing|Variant=Long	3	amod	_	_
3	году	год	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	6	nmod	_	_
4	Блант	Блант	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	6	nsubj:pass	_	_
5	была	быть	AUX	VBC	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past	6	aux:pass	_	_
6	названа	назвать	VERB	VBN	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Tense=Past|Variant=Short|Voice=Pass	0	root	_	_
7	послом	посол	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	6	xcomp	_	_
8	нового	новый	ADJ	JJ	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Variant=Long	9	amod	_	_
9	аромата	аромат	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	_
10	Yves	Yves	X	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	9	flat:foreign	_	_
11	Saint	Saint	X	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	9	flat:foreign	_	_
12	Laurent	Laurent	X	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	9	flat:foreign	_	_
13	Opium	Opium	X	NNP	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	9	flat:foreign	_	SpaceAfter=No
14	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat:foreign	color:blue
1	Она	она	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3	2	nsubj	_	_
2	рассказала	рассказать	VERB	VBC	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past	0	root	_	_
3	CNN	CNN	X	NNP	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing	2	iobj	_	_
4	Style	Style	X	NNP	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing	3	flat:foreign	_	_
5	о	о	ADP	IN	_	7	case	_	_
6	своих	свой	DET	PRP$	Number=Plur|Reflex=Yes	7	det	_	_
7	впечатлениях	впечатление	NOUN	NN	Animacy=Inan|Gender=Neut|Number=Plur	2	obl	_	SpaceAfter=No
8	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 flat:foreign	color:blue
1	Остановившись	остановиться	VERB	VBG	Aspect=Perf|VerbForm=Part	17	acl	_	_
2	на	на	ADP	IN	_	4	case	_	_
3	96-м	96-й	ADJ	JJ	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing|Variant=Long	4	amod	_	_
4	месте	место	NOUN	NN	Animacy=Inan|Gender=Neut|Number=Sing	1	obl	_	_
5	в	в	ADP	IN	_	6	case	_	_
6	хит-параде	хит-парад	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	4	nmod	_	_
7	Billboard	Billboard	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	flat:foreign	_	_
8	200	200	NUM	CD	Case=Nom	7	nummod	_	Proper=True|SpaceAfter=No
9	,	,	PUNCT	,	_	1	punct	_	_
10	сингл	сингл	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	17	nsubj	_	_
11	«	«	PUNCT	``	_	12	punct	_	SpaceAfter=No
12	Thought	thought	X	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	10	flat:foreign	_	Proper=True
13	'	'	X	''	_	10	flat:foreign	_	SpaceAfter=No
14	Ya	ya	X	PRP	Case=Nom|Number=Sing|Person=2	10	flat:foreign	_	Proper=True
15	Knew	knew	X	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Tense=Past	10	flat:foreign	_	Proper=True|SpaceAfter=No
16	»	»	PUNCT	''	_	15	punct	_	_
17	достиг	достигнуть	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	0	root	_	_
18	31-го	31-й	ADJ	JJ	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing|Variant=Long	19	amod	_	_
19	места	место	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	17	obj	_	_
20	в	в	ADP	IN	_	21	case	_	_
21	Великобритании	Великобритания	PROPN	NNP	Animacy=Inan|Gender=Fem|Number=Sing	17	obl	_	SpaceAfter=No
22	,	,	PUNCT	,	_	25	punct	_	_
23	но	но	CCONJ	CC	_	25	cc	_	_
24	альбом	альбом	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	25	nsubj	_	_
25	оставался	оставаться	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	17	conj	_	_
26	в	в	ADP	IN	_	27	case	_	_
27	хит-парадах	хит-парад	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	25	obl	_	_
28	только	только	ADV	RB	_	29	advmod	_	_
29	две	два	NUM	CD	Animacy=Inan|Case=Acc|Gender=Fem	30	nummod:gov	_	_
30	недели	неделя	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	25	obl	_	SpaceAfter=No
31	.	.	PUNCT	.	_	17	punct	_	_

~~~


