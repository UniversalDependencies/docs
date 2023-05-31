---
layout: base
title:  'Statistics of obl:tmod in UD_Hindi-PUD'
udver: '2'
---

## Treebank Statistics: UD_Hindi-PUD: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="hi_pud-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="hi_pud-dep-obl-agent.html">obl:agent</a></tt>.

313 nodes (1%) are attached to their parents as `obl:tmod`.

309 instances of `obl:tmod` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 9.0926517571885.

The following 13 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="hi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_pud-pos-NOUN.html">NOUN</a></tt> (196; 63% instances), <tt><a href="hi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_pud-pos-NUM.html">NUM</a></tt> (59; 19% instances), <tt><a href="hi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hi_pud-pos-NOUN.html">NOUN</a></tt> (24; 8% instances), <tt><a href="hi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hi_pud-pos-NOUN.html">NOUN</a></tt> (7; 2% instances), <tt><a href="hi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_pud-pos-PRON.html">PRON</a></tt> (7; 2% instances), <tt><a href="hi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hi_pud-pos-NUM.html">NUM</a></tt> (6; 2% instances), <tt><a href="hi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hi_pud-pos-NUM.html">NUM</a></tt> (6; 2% instances), <tt><a href="hi_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="hi_pud-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="hi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_pud-pos-ADP.html">ADP</a></tt> (2; 1% instances), <tt><a href="hi_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="hi_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="hi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hi_pud-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="hi_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="hi_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="hi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hi_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 obl:tmod	color:blue
1	आज	_	NOUN	NST	_	6	obl:tmod	_	SpaceAfter=No|Translit=āja
2	,	_	PUNCT	,	_	1	punct	_	Translit=,
3	खांजिर	_	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	6	obj	_	Translit=khāṁjira
4	अकेला	_	DET	QF	_	3	det	_	Translit=akelā
5	सुअर	_	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	Translit=suara
6	हो	_	VERB	VB	_	0	root	_	Translit=ho
7	सकता	_	AUX	VXH	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3	6	aux	_	Translit=sakatā
8	है	_	AUX	VXH	Gender=Masc|Number=Sing|Person=3|Tense=Pres	6	aux	_	SpaceAfter=No|Translit=hai
9	,	_	PUNCT	,	_	13	punct	_	Translit=,
10	लेकिन	_	CCONJ	CC	_	13	cc	_	Translit=lekina
11	वह	_	PRON	PRP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Person=3	13	nsubj	_	Translit=vaha
12	हमेशा	_	ADV	RB	_	13	advmod	_	Translit=hameśā
13	अकेला	_	ADJ	JJ	_	6	conj	_	Translit=akelā
14	नहीं	_	PART	NEG	Polarity=Neg	13	advmod	_	Translit=nahīṁ
15	है	_	AUX	VBI	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres	13	cop	_	SpaceAfter=No|Translit=hai
16	।	_	PUNCT	.	_	6	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 6 obl:tmod	color:blue
1	इस	_	DET	DT	Definite=Def|Number=Sing	2	det	_	Translit=isa
2	क्षेत्र	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	14	obl	_	Translit=kṣetra
3	में	_	ADP	IN	Case=Loc	2	case	_	Translit=meṁ
4	निवेश	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	14	nsubj	_	Translit=niveśa
5	वर्ष	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	compound	_	Translit=varṣa
6	2015	_	NUM	CD	NumType=Card	14	obl:tmod	_	Translit=2015
7	में	_	ADP	IN	Case=Loc	6	case	_	Translit=meṁ
8	6	_	NUM	CD	NumType=Card	11	obl	_	SpaceAfter=No|Translit=6
9	%	_	SYM	SYM	_	8	discourse	_	Translit=%
10	तक	_	ADP	IN	_	8	case	_	Translit=taka
11	बढ़कर	_	VERB	VB	_	14	acl	_	Translit=baṛhakara
12	$221	_	NUM	CD	NumType=Card	13	nummod	_	SpaceAfter=No|Translit=$221
13	bn	_	NUM	CD	NumType=Card	14	obj	_	Translit=bn
14	हो	_	VERB	VB	_	0	root	_	Translit=ho
15	गए	_	AUX	VXH	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Plur|Person=3	14	aux	_	Translit=gae
16	थे	_	AUX	VXH	Gender=Masc|Number=Sing|Person=3|Tense=Past	14	aux	_	SpaceAfter=No|Translit=the
17	।	_	PUNCT	.	_	14	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 obl:tmod	color:blue
1	अभी	_	NOUN	NST	_	6	obl:tmod	_	Translit=abhī
2	भी	_	PART	EMPH	_	1	discourse	_	SpaceAfter=No|Translit=bhī
3	,	_	PUNCT	,	_	2	punct	_	Translit=,
4	कुछ	_	DET	QF	_	5	det	_	Translit=kucha
5	प्रश्न	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	obj	_	Translit=praśna
6	अनुत्तरित	_	ADJ	JJ	_	0	root	_	Translit=anuttarita
7	हैं	_	AUX	VBI	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Person=3|Tense=Pres	6	cop	_	SpaceAfter=No|Translit=haiṁ
8	।	_	PUNCT	.	_	6	punct	_	Translit=.

~~~


