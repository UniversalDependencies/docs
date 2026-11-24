---
layout: base
title:  'Statistics of iobj in UD_English-ESL'
udver: '2'
---

## Treebank Statistics: UD_English-ESL: Relations: `iobj`

This relation is universal.

220 nodes (0%) are attached to their parents as `iobj`.

214 instances of `iobj` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.15.

The following 5 pairs of parts of speech are connected with `iobj`: <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-PRON.html">PRON</a></tt> (196; 89% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (20; 9% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 24 iobj	color:blue
1	_	_	ADP	IN	_	3	case	_	_
2	_	_	DET	DT	PronType=Art	3	det	_	_
3	_	_	NOUN	NN	Number=Sing	6	obl	_	_
4	_	_	PUNCT	,	_	6	punct	_	_
5	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
6	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
7	_	_	ADP	IN	_	8	case	_	_
8	_	_	NOUN	NN	Number=Sing	6	obl	_	_
9	_	_	ADV	RB	Degree=Pos	8	advmod	_	_
10	_	_	PUNCT	-LRB-	_	11	punct	_	_
11	_	_	CCONJ	CC	_	12	cc	_	_
12	_	_	NOUN	NN	Number=Sing|Typo=Yes	8	conj	_	CorrectForm=payment
13	_	_	ADP	IN	_	16	case	_	_
14	_	_	DET	PRP$	Number=Sing|Poss=Yes|PronType=Prs	16	nmod:poss	_	_
15	_	_	ADJ	JJ	Degree=Pos|Typo=Yes	16	amod	_	CorrectForm=horrible
16	_	_	NOUN	NN	Number=Sing	12	nmod	_	_
17	_	_	PUNCT	-RRB-	_	12	punct	_	_
18	_	_	PUNCT	:	_	6	punct	_	_
19	_	_	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	21	aux	_	_
20	_	_	PRON	PRP	Person=2|PronType=Prs	21	nsubj	_	_
21	_	_	VERB	VB	VerbForm=Inf	6	parataxis	_	_
22	_	_	PRON	NN	Number=Sing|PronType=Ind	23	nsubj	_	_
23	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	21	ccomp	_	_
24	_	_	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	23	iobj	_	_
25	_	_	ADP	RP	_	23	compound:prt	_	_
26	_	_	PRON	NN	Number=Sing|PronType=Ind	23	obj	_	_
27	_	_	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 iobj	color:blue
1	_	_	DET	DT	PronType=Art	2	det	_	_
2	_	_	NOUN	NN	Number=Sing	5	nsubj	_	_
3	_	_	AUX	VBD	Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	5	cop	_	_
4	_	_	ADV	RB	Degree=Pos	5	advmod	_	_
5	_	_	ADJ	JJ	Degree=Pos	0	root	_	_
6	_	_	ADP	IN	_	7	case	_	_
7	_	_	PRON	PRP	Number=Sing|Person=3|PronType=Prs	5	obl	_	_
8	_	_	CCONJ	CC	_	10	cc	_	_
9	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	_
10	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	5	conj	_	_
11	_	_	DET	DT	PronType=Tot	12	det	_	_
12	_	_	NOUN	NNS	Number=Plur	10	iobj	_	_
13	_	_	DET	DT	PronType=Art	15	det	_	_
14	_	_	ADJ	JJ	Degree=Pos	15	amod	_	_
15	_	_	NOUN	NN	Number=Sing	10	obj	_	_
16	_	_	PUNCT	,	_	15	punct	_	_
17	_	_	DET	WDT	PronType=Rel	19	nsubj:pass	_	_
18	_	_	AUX	VBD	Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	19	aux:pass	_	_
19	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	15	acl:relcl	_	_
20	_	_	ADP	IN	_	21	case	_	_
21	_	_	NOUN	NN	Number=Sing	19	obl	_	_
22	_	_	ADP	IN	_	24	case	_	_
23	_	_	DET	DT	PronType=Art	24	det	_	_
24	_	_	NOUN	NN	Number=Sing	19	obl	_	_
25	_	_	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 17 iobj	color:blue
1	_	_	ADP	IN	_	3	case	_	_
2	_	_	DET	DT	PronType=Art	3	det	_	_
3	_	_	NOUN	NN	Number=Sing	11	obl	_	_
4	_	_	SCONJ	IN	_	6	mark	_	_
5	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
6	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	3	acl:relcl	_	_
7	_	_	PART	TO	_	8	mark	_	_
8	_	_	VERB	VB	VerbForm=Inf	6	xcomp	_	_
9	_	_	PRON	NN	Number=Sing|PronType=Neg	8	obj	_	_
10	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	11	nsubj	_	_
11	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
12	_	_	PRON	PRP	Number=Sing|Person=3|PronType=Prs	14	expl	_	_
13	_	_	AUX	VBD	Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	14	cop	_	_
14	_	_	ADJ	JJ	Degree=Pos	11	ccomp	_	_
15	_	_	PART	TO	_	16	mark	_	_
16	_	_	VERB	VB	VerbForm=Inf	14	csubj	_	_
17	_	_	PROPN	NNP	_	16	iobj	_	_
18	_	_	DET	DT	PronType=Art	19	det	_	_
19	_	_	NOUN	NN	Number=Sing	16	obj	_	_
20	_	_	PUNCT	.	_	11	punct	_	_

~~~


