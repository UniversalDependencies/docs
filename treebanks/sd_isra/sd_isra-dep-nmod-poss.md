---
layout: base
title:  'Statistics of nmod:poss in UD_Sindhi-Isra'
udver: '2'
---

## Treebank Statistics: UD_Sindhi-Isra: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="sd_isra-dep-nmod.html">nmod</a></tt>.

7 nodes (0%) are attached to their parents as `nmod:poss`.

7 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.42857142857143.

The following 5 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="sd_isra-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sd_isra-pos-PRON.html">PRON</a></tt> (2; 29% instances), <tt><a href="sd_isra-pos-VERB.html">VERB</a></tt>-<tt><a href="sd_isra-pos-DET.html">DET</a></tt> (2; 29% instances), <tt><a href="sd_isra-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sd_isra-pos-DET.html">DET</a></tt> (1; 14% instances), <tt><a href="sd_isra-pos-VERB.html">VERB</a></tt>-<tt><a href="sd_isra-pos-PRON.html">PRON</a></tt> (1; 14% instances), <tt><a href="sd_isra-pos-VERB.html">VERB</a></tt>-<tt><a href="sd_isra-pos-PROPN.html">PROPN</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nmod:poss	color:blue
1	مان	مان	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=1	5	nmod:poss	_	_
2	پاڻ	پاڻ	PRON	PRP	Case=Acc	5	nsubj	_	_
3	ان	ان	DET	PRD	Case=Acc|Number=Sing|PronType=Dem	5	obl	_	_
4	سان	سان	ADP	PSP	_	3	case	_	_
5	سهمت	_	NOUN	NN	Case=Nom|Number=Sing	0	root	_	_
6	آهيان	آهي	AUX	VAUX	Gender=Masc|Number=Sing|Tense=Pres	5	cop	_	SpaceAfter=No
7	،	،	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 nmod:poss	color:blue
1	ان	ان	DET	PRD	Case=Acc|Number=Sing|PronType=Dem	6	nmod:poss	_	_
2	کين	کي	ADP	PSPX	Case=Acc|Number=Plur|Person=3	6	nsubj	_	_
3	وڌيڪ	وڌيڪ	ADJ	JJ	Case=Nom|Degree=Pos	5	amod	_	_
4	سياسي	سياسي	ADJ	JJ	Case=Nom	5	amod	_	_
5	پاور	پاور	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur	6	obj	_	_
6	ڏيئي	ڏيئي	VERB	VM	Aspect=Perf	0	root	_	_
7	ڇڏيا	ڇڏيو	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|Person=3	6	compound	_	_
8	۽	۽	CCONJ	CC	_	11	cc	_	_
9	اهو	اهو	DET	PRD	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	11	det	_	_
10	سياسي	سياسي	ADJ	JJ	Case=Nom|Degree=Pos	11	amod	_	_
11	پاور	پاور	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	6	conj	_	_
12	ئي	ئي	PART	PART	_	11	advmod:emph	_	_
13	هو	آهي	AUX	VAUX	Gender=Masc|Number=Sing|Person=3|Tense=Past	11	cop	_	SpaceAfter=No
14	،	،	PUNCT	PUNCT	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 52	bgColor:blue
# visual-style 52	fgColor:white
# visual-style 59	bgColor:blue
# visual-style 59	fgColor:white
# visual-style 59 52 nmod:poss	color:blue
1	مون	مون	PRON	PRP	Case=Acc|Number=Sing|Person=1	6	nsubj	_	_
2	کي	کي	ADP	PSP	_	1	case	_	_
3	سمجهه	سمجهه	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	6	obl	_	_
4	۾	۾	ADP	PSPL	_	3	case	_	_
5	نٿو	آهي	AUX	VAUX	Gender=Masc|Number=Sing|Polarity=Neg|Tense=Pres	6	aux	_	_
6	اچي	اچ	VERB	VM	Aspect=Imp|Number=Sing	0	root	_	_
7	ته	ته	SCONJ	CS	_	13	mark	_	_
8	جڏهن	جڏهن	ADV	ADT	_	13	advmod	_	_
9	ٽائيم	ٽائيم	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	13	nsubj	_	_
10	اسان	اسين	DET	PRD	Case=Acc|Number=Plur|Person=1|PronType=Dem	13	obl	_	_
11	لاءِ	لاءِ	ADP	PSP	_	10	case	_	_
12	ايترو	ايترو	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	13	amod	_	_
13	اهم	اهم	ADJ	JJ	Case=Nom|Degree=Pos|Number=Sing	6	advcl	_	_
14	آهي	آهي	AUX	VAUX	Number=Sing|Tense=Pres	13	cop	_	_
15	ئي	ئي	PART	PART	_	13	advmod:emph	_	_
16	ڪو	_	PART	PART	_	13	advmod	_	_
17	نه	نه	PART	PART	_	16	fixed	_	_
18	ته	ته	SCONJ	CS	_	33	mark	_	_
19	پوءِ	پوءِ	ADV	ADT	_	33	advmod	_	_
20	ان	ان	DET	PRD	Case=Acc|Number=Sing|PronType=Dem	33	obl	_	_
21	لاءِ	لاءِ	ADP	PSP	_	20	case	_	_
22	”	”	PUNCT	PUNCT	_	20	punct	_	SpaceAfter=No
23	سائين	سائين	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	33	nsubj	_	SpaceAfter=No
24	،	،	PUNCT	PUNCT	_	23	punct	_	_
25	نئون	نئون	ADJ	JJ	Case=Nom|Gender=Masc|Number=Sing	26	amod	_	_
26	ٽائيم	ٽائيم	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	33	obj	_	SpaceAfter=No
27	،	،	PUNCT	PUNCT	_	30	punct	_	_
28	يا	يا	CCONJ	CC	_	30	cc	_	_
29	پراڻو	پراڻو	ADJ	JJ	Case=Nom|Degree=Cmp|Gender=Masc|Number=Sing	30	amod	_	_
30	ٽائيم	ٽائيم	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	26	conj	_	SpaceAfter=No
31	؟	؟	PUNCT	PUNCT	_	30	punct	_	SpaceAfter=No
32	“	“	PUNCT	PUNCT	_	30	punct	_	_
33	پڇڻ	پڇ	VERB	VM	Aspect=Imp|VerbForm=Inf	13	advcl	_	_
34	يا	يا	CCONJ	CC	_	36	cc	_	_
35	سرڪاري	سرڪاري	ADJ	JJ	Case=Nom|Degree=Pos|Number=Sing	36	amod	_	_
36	سطح	سطح	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	42	obl	_	_
37	تي	تي	ADP	PSPL	_	36	case	_	_
38	ان	ان	DET	PRD	Case=Acc|Number=Sing|PronType=Dem	42	obl	_	_
39	سان	سان	ADP	PSP	_	38	case	_	_
40	ڇيڙ	_	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	41	nmod	_	_
41	ڇاڙ	_	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	42	compound	_	_
42	ڪرڻ	ڪر	VERB	VM	Aspect=Imp|VerbForm=Inf	46	advcl	_	_
43	جي	جي	ADP	PSPG	Case=Acc|Gender=Fem|Number=Sing	42	mark	_	_
44	ضرورت	ضرورت	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	46	nsubj	_	_
45	ئي	ئي	PART	PART	_	44	advmod:emph	_	_
46	ڪهڙي	ڪهڙو	DET	PRD	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	33	conj	_	_
47	هئي	آهي	AUX	VAUX	Gender=Fem|Number=Sing|Person=3|Tense=Past	46	cop	_	_
48	۽	۽	CCONJ	CC	_	49	cc	_	_
49	ڪهڙي	ڪهڙو	DET	PRD	Gender=Fem|Number=Sing|PronType=Dem	46	conj	_	_
50	آهي	آهي	AUX	VAUX	Number=Sing|Tense=Pres	49	cop	_	SpaceAfter=No
51	؟	؟	PUNCT	PUNCT	_	49	punct	_	_
52	اسان	اسين	DET	PRD	Case=Acc|Number=Plur|Person=1|PronType=Dem	59	nmod:poss	_	_
53	وٽ	وٽ	ADP	PSPL	_	52	case	_	_
54	ٽائيم	ٽائيم	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	59	nsubj	_	_
55	”	”	PUNCT	PUNCT	_	54	punct	_	SpaceAfter=No
56	عادت	عادت	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	59	nmod	_	SpaceAfter=No
57	“	“	PUNCT	PUNCT	_	56	punct	_	_
58	جي	جي	ADP	PSPG	Case=Acc|Gender=Fem|Number=Sing	56	case	_	_
59	ماتحت	ماتحت	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	49	advcl	_	_
60	آهي	آهي	AUX	VAUX	Number=Sing|Tense=Pres	59	cop	_	SpaceAfter=No
61	،	،	PUNCT	PUNCT	_	59	punct	_	_

~~~


