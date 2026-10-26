---
layout: base
title:  'Statistics of ccomp in UD_Nepali-BK'
udver: '2'
---

## Treebank Statistics: UD_Nepali-BK: Relations: `ccomp`

This relation is universal.

18 nodes (2%) are attached to their parents as `ccomp`.

16 instances of `ccomp` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.

The following 4 pairs of parts of speech are connected with `ccomp`: <tt><a href="ne_bk-pos-VERB.html">VERB</a></tt>-<tt><a href="ne_bk-pos-VERB.html">VERB</a></tt> (14; 78% instances), <tt><a href="ne_bk-pos-VERB.html">VERB</a></tt>-<tt><a href="ne_bk-pos-NOUN.html">NOUN</a></tt> (2; 11% instances), <tt><a href="ne_bk-pos-VERB.html">VERB</a></tt>-<tt><a href="ne_bk-pos-PART.html">PART</a></tt> (1; 6% instances), <tt><a href="ne_bk-pos-VERB.html">VERB</a></tt>-<tt><a href="ne_bk-pos-X.html">X</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 10 ccomp	color:blue
1	अनि	अनि	CCONJ	_	_	13	cc	_	_
2	"	"	PUNCT	_	_	10	punct	_	_
3	सुत्न	सुत्नु	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Inf	4	xcomp	_	_
4	लाको	लाग्नु	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Part	10	reparandum	_	_
5	,	,	PUNCT	_	_	4	punct	_	_
6	थकाई	थकाई	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	7	obj	_	_
7	लाग्यो	लाग्नु	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	10	parataxis	_	_
8	,	,	PUNCT	_	_	7	punct	_	_
9	सुत्न	सुत्नु	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Inf	10	xcomp	_	_
10	ला	लाग्नु	VERB	_	Aspect=Imp|Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Part	13	ccomp	_	_
11	"	"	PUNCT	_	_	10	punct	_	_
12	,	,	PUNCT	_	_	10	punct	_	_
13	भनेछ	भन्नु	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
14	रे	रे	PART	_	_	13	discourse	_	_
15	।	।	PUNCT	_	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 2 ccomp	color:blue
1	कर्तव्यप्रतीको	कर्तव्यप्रती	NOUN	_	Case=Gen|Gender=Neut|Number=Sing	2	nmod:poss	_	_
2	निष्ठा	निष्ठा	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	14	ccomp	_	_
3	वा	वा	CCONJ	_	_	2	cc	_	_
4	भक्ति	भक्ति	NOUN	_	Case=Gen|Gender=Neut|Number=Sing	2	conj	_	_
5	उपासनाको	उपासना	NOUN	_	Case=Gen|Number=Sing	7	nmod:poss	_	_
6	सर्वोच्च	सर्वोच्च	ADJ	_	_	7	amod	_	_
7	रूप	रूप	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	2	appos	_	_
8	हो	हुनु	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
9	भन्ने	भन्नु	VERB	_	VerbForm=Part	10	acl	_	_
10	विवेकान्नंद	विवेकान्नंद	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	14	nsubj	_	_
11	कर्तव्यलाई	कर्तव्य	NOUN	_	Case=Dat|Gender=Neut|Number=Sing	14	iobj	_	_
12	नै	नै	PART	_	_	14	discourse	_	_
13	पूजा	पूजा	NOUN	_	Case=Dat|Gender=Neut|Number=Sing	14	obj	_	_
14	मान्छन्	मान्नु	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
15	।	।	PUNCT	_	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 ccomp	color:blue
1	"	"	PUNCT	_	_	3	punct	_	_
2	घ्यू	घ्यू	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	3	obj	_	_
3	घस्दे	घस्नु	VERB	_	Aspect=Imp|Mood=Imp|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	ccomp	_	_
4	"	"	PUNCT	_	_	3	punct	_	_
5	भनेर	भन्नु	VERB	_	Aspect=Perf|Mood=Imp|Number=Sing|Person=3|Tense=Pres|VerbForm=Conv	16	advcl	_	_
6	अनि	अनि	CCONJ	_	_	16	cc	_	_
7	त्यसपछि	त्यसपछि	ADV	_	_	16	advmod	_	_
8	"	"	PUNCT	_	_	11	punct	_	_
9	ल	ल	PART	_	_	11	ccomp	_	_
10	"	"	PUNCT	_	_	11	punct	_	_
11	भनेर	भन्नु	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Conv	16	advcl	_	_
12	,	,	PUNCT	_	_	11	punct	_	_
13	बेस्मारी	बेस्मारी	ADV	_	_	16	advmod	_	_
14	त्यो	त्यो	DET	_	Number=Sing|PronType=Dem	15	det	_	_
15	खोटो	खोटो	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	16	obj	_	_
16	दल्दिछ	दल्नु	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
17	रे	रे	PART	_	_	16	discourse	_	_
18	।	।	PUNCT	_	_	16	punct	_	_

~~~


