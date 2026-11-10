---
layout: base
title:  'Statistics of nsubj:pass in UD_English-ESL'
udver: '2'
---

## Treebank Statistics: UD_English-ESL: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="en_esl-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="en_esl-dep-nsubj-outer.html">nsubj:outer</a></tt>.

414 nodes (0%) are attached to their parents as `nsubj:pass`.

411 instances of `nsubj:pass` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.13526570048309.

The following 11 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (193; 47% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-PRON.html">PRON</a></tt> (164; 40% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-DET.html">DET</a></tt> (32; 8% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt> (11; 3% instances), <tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_esl-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="en_esl-pos-ADV.html">ADV</a></tt>-<tt><a href="en_esl-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-ADV.html">ADV</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-ADV.html">ADV</a></tt>-<tt><a href="en_esl-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 12 nsubj:pass	color:blue
1	_	_	ADP	IN	_	2	case	_	_
2	_	_	NOUN	NN	Number=Sing	6	obl	_	_
3	_	_	PUNCT	,	_	6	punct	_	_
4	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
5	_	_	AUX	MD	Mood=Ind|VerbForm=Fin	6	aux	_	_
6	_	_	VERB	VB	VerbForm=Inf	0	root	_	_
7	_	_	PART	TO	_	8	mark	_	_
8	_	_	VERB	VB	VerbForm=Inf	6	xcomp	_	_
9	_	_	DET	PRP$	Poss=Yes|PronType=Prs	10	nmod:poss	_	_
10	_	_	NOUN	NN	Number=Sing	8	obj	_	_
11	_	_	ADV	WRB	_	15	advmod	_	_
12	_	_	NOUN	NN	Number=Sing	15	nsubj:pass	_	_
13	_	_	AUX	MD	Mood=Ind|VerbForm=Fin	15	aux	_	_
14	_	_	AUX	VB	VerbForm=Inf	15	aux:pass	_	_
15	_	_	VERB	VBN	Tense=Past|VerbForm=Part	10	acl	_	_
16	_	_	ADP	IN	_	18	case	_	_
17	_	_	DET	DT	PronType=Art	18	det	_	_
18	_	_	NOUN	NN	Number=Sing|Typo=Yes	15	obl	_	CorrectForm=second_day
19	_	_	ADP	IN	_	21	case	_	_
20	_	_	DET	DT	PronType=Art	21	det	_	_
21	_	_	NOUN	NN	Number=Sing	18	nmod	_	_
22	_	_	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 nsubj:pass	color:blue
1	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	_	_	ADP	IN	_	5	case	_	_
4	_	_	ADJ	JJ	Degree=Pos	5	amod	_	_
5	_	_	NOUN	NNS	Number=Plur	2	obl	_	_
6	_	_	PUNCT	,	_	5	punct	_	_
7	_	_	NOUN	NN	Number=Sing	5	conj	_	_
8	_	_	PRON	WDT	PronType=Rel	11	nsubj:pass	_	_
9	_	_	AUX	VBD	Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	11	aux:pass	_	_
10	_	_	ADV	RB	Degree=Pos	11	advmod	_	_
11	_	_	VERB	VBN	Tense=Past|VerbForm=Part	7	acl:relcl	_	_
12	_	_	ADP	IN	_	11	obl	_	_
13	_	_	CCONJ	CC	_	15	cc	_	_
14	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=3|PronType=Prs	15	nsubj	_	_
15	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	2	conj	_	_
16	_	_	ADP	IN	_	17	case	_	_
17	_	_	PRON	NN	Number=Sing|PronType=Ind	15	obl	_	_
18	_	_	PRON	WP	Case=Nom|PronType=Rel	21	iobj	_	_
19	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=3|PronType=Prs	21	nsubj	_	_
20	_	_	AUX	MD	Mood=Ind|VerbForm=Fin	21	aux	_	_
21	_	_	VERB	VB	VerbForm=Inf	17	acl:relcl	_	_
22	_	_	DET	PRP$	Number=Sing|Poss=Yes|PronType=Prs	24	nmod:poss	_	_
23	_	_	ADJ	JJ	Degree=Pos	24	amod	_	_
24	_	_	NOUN	NNS	Number=Plur	21	obj	_	_
25	_	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 14 nsubj:pass	color:blue
1	_	_	ADV	RB	Degree=Pos	5	advmod	_	_
2	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	5	nsubj	_	_
3	_	_	AUX	MD	Mood=Ind|VerbForm=Fin	5	aux	_	_
4	_	_	AUX	VB	VerbForm=Inf	5	cop	_	_
5	_	_	ADJ	JJ	Degree=Pos	0	root	_	_
6	_	_	SCONJ	IN	_	10	mark	_	_
7	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	10	nsubj	_	_
8	_	_	AUX	MD	Mood=Ind|VerbForm=Fin	10	aux	_	_
9	_	_	AUX	VB	VerbForm=Inf	10	cop	_	_
10	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	5	advcl	_	_
11	_	_	ADP	IN	_	13	case	_	_
12	_	_	NOUN	NN	Number=Sing	13	compound	_	_
13	_	_	NOUN	NN	Number=Sing|Typo=Yes	10	obl	_	CorrectForm=cameras
14	_	_	DET	WDT	PronType=Rel	17	nsubj:pass	_	_
15	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	aux	_	_
16	_	_	AUX	VBN	Tense=Past|VerbForm=Part	17	aux:pass	_	_
17	_	_	VERB	VBN	Tense=Past|VerbForm=Part	13	acl:relcl	_	_
18	_	_	ADP	IN	_	20	case	_	_
19	_	_	ADJ	JJ	Degree=Pos|Typo=Yes	20	amod	_	CorrectForm=modern
20	_	_	NOUN	NN	Number=Sing	17	obl	_	_
21	_	_	PUNCT	.	_	5	punct	_	_

~~~


