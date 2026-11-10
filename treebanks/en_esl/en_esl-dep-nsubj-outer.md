---
layout: base
title:  'Statistics of nsubj:outer in UD_English-ESL'
udver: '2'
---

## Treebank Statistics: UD_English-ESL: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="en_esl-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="en_esl-dep-nsubj-pass.html">nsubj:pass</a></tt>.

5 nodes (0%) are attached to their parents as `nsubj:outer`.

5 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.

The following 4 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (2; 40% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-PRON.html">PRON</a></tt> (1; 20% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-DET.html">DET</a></tt> (1; 20% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-PRON.html">PRON</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 1 nsubj:outer	color:blue
1	_	_	NOUN	NNS	Number=Plur	10	nsubj:outer	_	_
2	_	_	PRON	WP	Case=Nom|PronType=Rel	3	nsubj	_	_
3	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	1	acl:relcl	_	_
4	_	_	DET	PRP$	Number=Plur|Poss=Yes|PronType=Prs	5	nmod:poss	_	_
5	_	_	NOUN	NN	Number=Sing	3	obj	_	_
6	_	_	PUNCT	,	_	10	punct	_	_
7	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	10	nsubj	_	_
8	_	_	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	10	aux	_	_
9	_	_	PART	RB	Polarity=Neg	10	advmod	_	_
10	_	_	VERB	VB	VerbForm=Inf	0	root	_	_
11	_	_	PART	TO	_	12	mark	_	_
12	_	_	VERB	VB	VerbForm=Inf	10	xcomp	_	_
13	_	_	ADP	IN	_	14	case	_	_
14	_	_	NOUN	NN	Number=Sing	12	obl	_	_
15	_	_	ADV	RB	Degree=Pos	20	advmod	_	_
16	_	_	SCONJ	IN	_	20	mark	_	_
17	_	_	PRON	PRP	Number=Sing|Person=3|PronType=Prs	20	nsubj	_	_
18	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	cop	_	_
19	_	_	ADJ	JJ	Degree=Pos	20	amod	_	_
20	_	_	NOUN	NN	Number=Sing	10	advcl	_	_
21	_	_	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 12 nsubj:outer	color:blue
1	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
2	_	_	AUX	MD	Mood=Ind|VerbForm=Fin	3	aux	_	_
3	_	_	VERB	VB	VerbForm=Inf	0	root	_	_
4	_	_	PART	TO	_	5	mark	_	_
5	_	_	VERB	VB	VerbForm=Inf	3	xcomp	_	_
6	_	_	ADP	IN	_	7	case	_	_
7	_	_	PROPN	NNP	_	5	obl	_	_
8	_	_	PUNCT	,	_	3	punct	_	_
9	_	_	INTJ	UH	_	3	discourse	_	_
10	_	_	PUNCT	,	_	3	punct	_	_
11	_	_	SCONJ	IN	_	17	mark	_	_
12	_	_	PRON	DT	PronType=Dem	17	nsubj:outer	_	Note=parses_as_nsubj
13	_	_	ADV	WRB	_	17	advmod	_	_
14	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	17	nsubj	_	_
15	_	_	AUX	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	17	cop	_	_
16	_	_	ADP	IN	_	17	case	_	_
17	_	_	NOUN	NN	Number=Sing	3	advcl	_	_
18	_	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 nsubj:outer	color:blue
1	_	_	ADP	IN	_	2	case	_	_
2	_	_	NOUN	NN	Number=Sing	21	obl	_	_
3	_	_	ADP	IN	_	8	case	_	_
4	_	_	DET	DT	PronType=Art	8	det	_	_
5	_	_	ADJ	JJ	Degree=Pos	8	amod	_	_
6	_	_	ADJ	JJ	Degree=Pos	8	amod	_	_
7	_	_	NOUN	NNS	Number=Plur	8	compound	_	_
8	_	_	NOUN	NNS	Number=Plur	2	nmod	_	_
9	_	_	DET	WDT	PronType=Rel	11	nsubj:outer	_	_
10	_	_	PRON	PRP	Person=2|PronType=Prs	11	nsubj	_	_
11	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	8	acl:relcl	_	_
12	_	_	NOUN	NN	Number=Sing	11	obj	_	_
13	_	_	ADP	IN	_	17	case	_	_
14	_	_	NUM	CD	_	17	nummod	_	_
15	_	_	CCONJ	CC	_	16	cc	_	_
16	_	_	ADJ	JJ	Degree=Pos	14	conj	_	_
17	_	_	PROPN	NNP	_	12	nmod	_	_
18	_	_	NUM	CD	_	17	nummod	_	_
19	_	_	PUNCT	,	_	21	punct	_	_
20	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	21	nsubj	_	_
21	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
22	_	_	ADJ	JJ	Degree=Pos	24	amod	_	_
23	_	_	NUM	CD	_	24	nummod	_	_
24	_	_	NOUN	NNS	Number=Plur	21	obj	_	_
25	_	_	VERB	VBG	VerbForm=Ger	21	advcl	_	_
26	_	_	DET	DT	PronType=Ind	27	det	_	_
27	_	_	NOUN	NNS	Number=Plur	25	obj	_	_
28	_	_	PUNCT	.	_	21	punct	_	_

~~~


