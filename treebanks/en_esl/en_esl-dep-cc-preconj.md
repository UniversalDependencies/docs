---
layout: base
title:  'Statistics of cc:preconj in UD_English-ESL'
udver: '2'
---

## Treebank Statistics: UD_English-ESL: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="en_esl-dep-cc.html">cc</a></tt>.

24 nodes (0%) are attached to their parents as `cc:preconj`.

24 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.125.

The following 8 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-CCONJ.html">CCONJ</a></tt> (11; 46% instances), <tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_esl-pos-CCONJ.html">CCONJ</a></tt> (3; 13% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-ADV.html">ADV</a></tt> (3; 13% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-ADV.html">ADV</a></tt> (2; 8% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-CCONJ.html">CCONJ</a></tt> (2; 8% instances), <tt><a href="en_esl-pos-PRON.html">PRON</a></tt>-<tt><a href="en_esl-pos-CCONJ.html">CCONJ</a></tt> (1; 4% instances), <tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_esl-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="en_esl-pos-X.html">X</a></tt>-<tt><a href="en_esl-pos-ADV.html">ADV</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 20 cc:preconj	color:blue
1	_	_	ADV	WRB	_	3	advmod	_	_
2	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	8	advcl	_	_
4	_	_	DET	PRP$	Poss=Yes|PronType=Prs	5	nmod:poss	_	_
5	_	_	NOUN	NN	Number=Sing	3	obj	_	_
6	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	8	nsubj	_	_
7	_	_	AUX	VBD	Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	8	cop	_	_
8	_	_	ADJ	JJ	Degree=Pos	0	root	_	_
9	_	_	SCONJ	IN	_	13	mark	_	_
10	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	13	nsubj	_	_
11	_	_	AUX	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	13	aux	_	_
12	_	_	PART	RB	Polarity=Neg	13	advmod	_	_
13	_	_	VERB	VB	VerbForm=Inf	8	advcl	_	_
14	_	_	SCONJ	IN	_	16	mark	_	_
15	_	_	PRON	PRP	Person=2|PronType=Prs	16	nsubj	_	_
16	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	13	ccomp	_	_
17	_	_	ADV	RB	Degree=Pos	18	advmod	_	_
18	_	_	ADJ	JJ	Degree=Pos	19	amod	_	_
19	_	_	NOUN	NNS	Number=Plur	16	obj	_	_
20	_	_	CCONJ	CC	_	22	cc:preconj	_	_
21	_	_	ADP	IN	_	22	case	_	_
22	_	_	NOUN	NN	Number=Sing	16	obl	_	_
23	_	_	CCONJ	CC	_	25	cc	_	_
24	_	_	ADP	IN	_	25	case	_	_
25	_	_	NOUN	NN	Number=Sing	22	conj	_	_
26	_	_	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 cc:preconj	color:blue
1	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
2	_	_	AUX	MD	Mood=Ind|VerbForm=Fin	3	aux	_	_
3	_	_	VERB	VB	VerbForm=Inf	0	root	_	_
4	_	_	PART	TO	_	5	mark	_	_
5	_	_	VERB	VB	VerbForm=Inf	3	xcomp	_	_
6	_	_	ADP	RP	_	5	compound:prt	_	_
7	_	_	SCONJ	IN	_	8	mark	_	_
8	_	_	VERB	VBG	VerbForm=Ger	5	advcl	_	_
9	_	_	SCONJ	IN	_	18	mark	_	_
10	_	_	DET	DT	PronType=Tot	11	det	_	_
11	_	_	NOUN	NN	Number=Sing	18	nsubj	_	_
12	_	_	PUNCT	,	_	11	punct	_	_
13	_	_	CCONJ	CC	_	14	cc:preconj	_	_
14	_	_	ADJ	JJ	Degree=Pos	11	amod	_	_
15	_	_	CCONJ	CC	_	16	cc	_	_
16	_	_	PART	RB	_	14	conj	_	_
17	_	_	PUNCT	,	_	18	punct	_	_
18	_	_	VERB	VBZ	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	8	ccomp	_	_
19	_	_	PART	TO	_	20	mark	_	_
20	_	_	VERB	VB	VerbForm=Inf	18	xcomp	_	_
21	_	_	DET	DT	PronType=Art	23	det	_	_
22	_	_	ADJ	JJ	Degree=Pos	23	amod	_	_
23	_	_	NOUN	NN	Number=Sing	20	obj	_	_
24	_	_	SCONJ	IN	_	26	mark	_	_
25	_	_	AUX	VBG	VerbForm=Ger	26	aux:pass	_	_
26	_	_	VERB	VBN	Tense=Past|VerbForm=Part	20	advcl	_	_
27	_	_	CCONJ	CC	_	28	cc	_	_
28	_	_	VERB	VBN	Tense=Past|VerbForm=Part	26	conj	_	_
29	_	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 15 cc:preconj	color:blue
1	_	_	ADV	RB	Degree=Pos	11	advmod	_	_
2	_	_	PUNCT	,	_	11	punct	_	_
3	_	_	ADV	WRB	_	5	advmod	_	_
4	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
5	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	11	advcl	_	_
6	_	_	ADP	IN	_	8	case	_	_
7	_	_	DET	DT	PronType=Art	8	det	_	_
8	_	_	NOUN	NN	Number=Sing	5	obl	_	_
9	_	_	PUNCT	,	_	11	punct	_	_
10	_	_	PRON	PRP	Person=2|PronType=Prs	11	nsubj	_	_
11	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
12	_	_	PART	RB	Polarity=Neg	11	advmod	_	_
13	_	_	PRON	NN	Number=Sing|PronType=Ind	11	obj	_	_
14	_	_	PART	RB	Polarity=Neg	15	advmod	_	_
15	_	_	ADV	RB	Degree=Pos	16	cc:preconj	_	_
16	_	_	NOUN	NN	Number=Sing	11	obl	_	_
17	_	_	CCONJ	CC	_	19	cc	_	_
18	_	_	ADV	RB	Degree=Pos	19	advmod	_	_
19	_	_	VERB	VB	Typo=Yes|VerbForm=Inf	11	conj	_	CorrectForm=apologize
20	_	_	PRON	PRP	Case=Acc|Number=Plur|Person=1|PronType=Prs	19	obj	_	_
21	_	_	ADP	IN	_	22	case	_	_
22	_	_	NOUN	NN	Number=Sing|Typo=Yes	19	obl	_	CorrectForm=delay
23	_	_	SCONJ	IN	_	24	mark	_	_
24	_	_	VERB	VBG	VerbForm=Ger	22	acl	_	_
25	_	_	NOUN	NN	Number=Sing	24	obj	_	_
26	_	_	PUNCT	.	_	11	punct	_	_

~~~


