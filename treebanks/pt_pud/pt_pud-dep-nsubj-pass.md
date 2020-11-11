---
layout: base
title:  'Statistics of nsubj:pass in UD_Portuguese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PUD: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="pt_pud-dep-nsubj.html">nsubj</a></tt>.

205 nodes (1%) are attached to their parents as `nsubj:pass`.

190 instances of `nsubj:pass` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.80975609756098.

The following 10 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (131; 64% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-PRON.html">PRON</a></tt> (38; 19% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt> (23; 11% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 nsubj:pass	color:blue
1	Anteriormente	anteriormente	ADV	RB	_	8	advmod	_	SpaceAfter=No
2	,	,	PUNCT	,	_	1	punct	_	_
3	os	o	DET	DT	Gender=Masc|Number=Plur	4	det	_	_
4	jatos	jato	NOUN	NN	Gender=Masc|Number=Plur	8	nsubj:pass	_	_
5	só	só	ADV	RB	_	8	advmod	_	_
6	tinham	ter	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Past	8	aux	_	_
7	sido	ser	AUX	VBN	_	8	aux:pass	_	_
8	vistos	_	VERB	VBN	Gender=Masc|Number=Plur	0	root	_	_
9	por	por	ADP	INDT	_	11	case	_	_
10	os	o	DET	_	Gender=Masc|Number=Plur	11	det	_	_
11	blogueiros	_	NOUN	NN	Gender=Masc|Number=Plur	8	obl	_	SpaceAfter=No
12	.	.	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nsubj:pass	color:blue
1	Durante	_	ADP	IN	_	3	case	_	_
2	um	um	DET	DT	Gender=Masc|Number=Sing	3	det	_	_
3	episódio	episódio	NOUN	NN	Gender=Masc|Number=Sing	7	obl	_	SpaceAfter=No
4	,	,	PUNCT	,	_	3	punct	_	_
5	ele	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	7	nsubj:pass	_	_
6	é	ser	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	7	aux:pass	_	_
7	mostrado	_	VERB	VBN	Gender=Masc|Number=Sing	0	root	_	_
8	como	como	ADP	IN	_	11	case	_	_
9	um	um	DET	DT	Gender=Masc|Number=Sing	11	det	_	_
10	exímio	exímio	ADJ	JJ	Gender=Masc|Number=Sing	11	amod	_	_
11	guitarrista	guitarrista	NOUN	NN	Gender=Masc|Number=Sing	7	obl	_	SpaceAfter=No
12	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Aldrin	Aldrin	PROPN	NNP	Gender=Masc|Number=Sing	3	nsubj:pass	_	_
2	foi	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	3	aux:pass	_	_
3	casado	_	VERB	VBN	Gender=Masc|Number=Sing	0	root	_	_
4	três	_	NUM	CD	_	5	nummod	_	_
5	vezes	vez	NOUN	NN	Gender=Fem|Number=Plur	3	obl	_	SpaceAfter=No
6	.	.	PUNCT	.	_	3	punct	_	_

~~~


