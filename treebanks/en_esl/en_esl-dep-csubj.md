---
layout: base
title:  'Statistics of csubj in UD_English-ESL'
udver: '2'
---

## Treebank Statistics: UD_English-ESL: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="en_esl-dep-csubj-pass.html">csubj:pass</a></tt>.

225 nodes (0%) are attached to their parents as `csubj`.

158 instances of `csubj` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.96444444444444.

The following 17 pairs of parts of speech are connected with `csubj`: <tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_esl-pos-VERB.html">VERB</a></tt> (125; 56% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-VERB.html">VERB</a></tt> (45; 20% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-VERB.html">VERB</a></tt> (31; 14% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt> (5; 2% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt> (4; 2% instances), <tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="en_esl-pos-AUX.html">AUX</a></tt>-<tt><a href="en_esl-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-ADV.html">ADV</a></tt>-<tt><a href="en_esl-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-NUM.html">NUM</a></tt>-<tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-PRON.html">PRON</a></tt>-<tt><a href="en_esl-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 csubj	color:blue
1	_	_	CCONJ	CC	_	3	cc	_	_
2	_	_	PRON	PRP	_	3	nsubj	_	_
3	_	_	NOUN	NN	_	0	root	_	_
4	_	_	PRON	DT	_	3	obj	_	_
5	_	_	PUNCT	,	_	3	punct	_	_
6	_	_	SCONJ	IN	_	9	mark	_	_
7	_	_	PRON	PRP	_	9	expl	_	_
8	_	_	AUX	VBZ	_	9	cop	_	_
9	_	_	ADJ	JJR	_	3	advcl	_	_
10	_	_	PRON	NN	_	11	obj	_	_
11	_	_	VERB	VBG	_	9	csubj	_	_
12	_	_	SCONJ	IN	_	13	mark	_	_
13	_	_	VERB	VBG	_	9	advcl	_	_
14	_	_	NOUN	NNS	_	13	obj	_	_
15	_	_	ADP	IN	_	16	case	_	_
16	_	_	PRON	NN	_	13	obl	_	_
17	_	_	PRON	WDT	_	18	nsubj	_	_
18	_	_	VERB	VB	_	16	acl:relcl	_	_
19	_	_	PRON	PRP	_	18	obj	_	_
20	_	_	VERB	VB	_	18	xcomp	_	_
21	_	_	PRON	NN	_	20	obj	_	_
22	_	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 18 csubj	color:blue
1	_	_	SCONJ	IN	_	3	mark	_	_
2	_	_	PRON	PRP	_	3	nsubj	_	_
3	_	_	VERB	VBP	_	23	advcl	_	_
4	_	_	PART	TO	_	5	mark	_	_
5	_	_	VERB	VB	_	3	xcomp	_	_
6	_	_	ADP	IN	_	8	case	_	_
7	_	_	NUM	CD	_	8	nummod	_	_
8	_	_	NOUN	NN	_	5	obl	_	_
9	_	_	ADP	IN	_	10	case	_	_
10	_	_	DET	DT	_	5	obl	_	_
11	_	_	CCONJ	CC	_	13	cc	_	_
12	_	_	ADV	RB	_	13	advmod	_	_
13	_	_	VERB	VBG	_	5	conj	_	_
14	_	_	ADP	IN	_	16	case	_	_
15	_	_	DET	DT	_	16	det	_	_
16	_	_	NOUN	NN	_	13	obl	_	_
17	_	_	PUNCT	,	_	23	punct	_	_
18	_	_	VERB	VBG	_	23	csubj	_	_
19	_	_	NOUN	NN	_	18	obj	_	_
20	_	_	AUX	VBZ	_	23	cop	_	_
21	_	_	DET	DT	_	23	det	_	_
22	_	_	ADJ	JJ	_	23	amod	_	_
23	_	_	NOUN	NN	_	0	root	_	_
24	_	_	PUNCT	.	_	23	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 csubj	color:blue
1	_	_	PRON	WP	_	5	obj	_	_
2	_	_	PRON	PRP	_	3	nsubj	_	_
3	_	_	VERB	VB	_	6	csubj	_	_
4	_	_	PART	TO	_	5	mark	_	_
5	_	_	VERB	VB	_	3	xcomp	_	_
6	_	_	VERB	VBZ	_	0	root	_	_
7	_	_	SCONJ	IN	_	12	mark	_	_
8	_	_	ADP	IN	_	10	case	_	_
9	_	_	DET	DT	_	10	det	_	_
10	_	_	NOUN	NN	_	12	obl	_	_
11	_	_	PRON	EX	_	12	expl	_	_
12	_	_	VERB	VBP	_	6	ccomp	_	_
13	_	_	NOUN	NNS	_	12	nsubj	_	_
14	_	_	CCONJ	CC	_	15	cc	_	_
15	_	_	NOUN	NNS	_	13	conj	_	_
16	_	_	ADV	RB	_	17	advmod	_	_
17	_	_	ADJ	JJ	_	13	amod	_	_
18	_	_	PUNCT	.	_	6	punct	_	_

~~~


