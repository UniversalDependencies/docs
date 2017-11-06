---
layout: base
title:  'Statistics of parataxis in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Relations: `parataxis`

This relation is universal.

97 nodes (0%) are attached to their parents as `parataxis`.

96 instances of `parataxis` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 13.1855670103093.

The following 12 pairs of parts of speech are connected with `parataxis`: <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (56; 58% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (9; 9% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (9; 9% instances), <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (6; 6% instances), <tt><a href="en_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (4; 4% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt> (3; 3% instances), <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="en_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="en_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 parataxis	color:blue
1	"	"	PUNCT	``	_	4	punct	_	SpaceAfter=No
2	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	SpaceAfter=No
3	'm	be	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	4	aux	_	_
4	going	go	VERB	VBG	Tense=Pres|VerbForm=Part	0	root	_	_
5	to	to	ADP	IN	_	6	case	_	_
6	jail	jail	NOUN	NN	Number=Sing	4	obl	_	_
7	either	either	DET	DT	_	8	det	_	_
8	way	way	NOUN	NN	Number=Sing	4	obl:npmod	_	SpaceAfter=No
9	,	,	PUNCT	,	_	4	punct	_	_
10	hope	hope	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	4	parataxis	_	_
11	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	13	nsubj	_	_
12	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	13	cop	_	_
13	worth	worth	ADJ	JJ	Degree=Pos	10	ccomp	_	_
14	it	it	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	13	obj	_	SpaceAfter=No
15	.	.	PUNCT	.	_	4	punct	_	SpaceAfter=No
16	"	"	PUNCT	''	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 18 parataxis	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
2	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
3	a	a	DET	DT	Definite=Ind|PronType=Art	5	det	_	_
4	political	political	ADJ	JJ	Degree=Pos	5	amod	_	_
5	process	process	NOUN	NN	Number=Sing	0	root	_	_
6	and	and	CCONJ	CC	_	9	cc	_	_
7	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	9	nsubj	_	_
8	have	have	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	9	aux	_	_
9	decided	decide	VERB	VBN	Tense=Past|VerbForm=Part	5	conj	_	_
10	not	not	ADV	RB	Polarity=Neg	13	advmod	_	_
11	to	to	PART	TO	_	13	mark	_	_
12	be	be	AUX	VB	VerbForm=Inf	13	cop	_	_
13	present	present	ADJ	JJ	Degree=Pos	9	xcomp	_	SpaceAfter=No
14	,	,	PUNCT	,	_	5	punct	_	_
15	so	so	ADV	CC	_	18	advmod	_	_
16	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	18	expl	_	_
17	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	18	aux:pass	_	_
18	said	say	VERB	VBN	Tense=Past|VerbForm=Part	5	parataxis	_	SpaceAfter=No
19	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 18 parataxis	color:blue
1	From	from	ADP	IN	_	5	case	_	_
2	about	about	ADV	IN	_	4	advmod	_	_
3	the	the	DET	DT	Definite=Def|PronType=Art	5	det	_	_
4	8th	8th	ADJ	JJ	Degree=Pos|NumType=Ord	5	amod	_	_
5	century	century	NOUN	NN	Number=Sing	9	obl	_	_
6	BC	bc	NOUN	NN	Number=Sing	5	nmod:tmod	_	_
7	city	city	NOUN	NN	Number=Sing	8	compound	_	_
8	states	state	NOUN	NNS	Number=Plur	9	nsubj	_	_
9	began	begin	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
10	to	to	PART	TO	_	11	mark	_	_
11	appear	appear	VERB	VB	VerbForm=Inf	9	xcomp	_	SpaceAfter=No
12	:	:	PUNCT	:	_	11	punct	_	_
13	small	small	ADJ	JJ	Degree=Pos	18	amod	_	SpaceAfter=No
14	,	,	PUNCT	,	_	18	punct	_	_
15	self	self	NOUN	NN	Number=Sing	17	compound	_	SpaceAfter=No
16	-	-	PUNCT	HYPH	_	17	punct	_	SpaceAfter=No
17	governing	governing	VERB	VBG	VerbForm=Ger	18	amod	_	_
18	territories	territory	NOUN	NNS	Number=Plur	9	parataxis	_	_
19	with	with	ADP	IN	_	23	case	_	_
20	their	they	PRON	PRP$	Number=Plur|Person=3|Poss=Yes|PronType=Prs	23	nmod:poss	_	_
21	own	own	ADJ	JJ	Degree=Pos	23	amod	_	_
22	political	political	ADJ	JJ	Degree=Pos	23	amod	_	_
23	systems	system	NOUN	NNS	Number=Plur	18	nmod	_	SpaceAfter=No
24	.	.	PUNCT	.	_	9	punct	_	_

~~~


