---
layout: base
title:  'Statistics of parataxis in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Relations: `parataxis`

This relation is universal.

54 nodes (0%) are attached to their parents as `parataxis`.

54 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 11.6851851851852.

The following 12 pairs of parts of speech are connected with `parataxis`: <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (27; 50% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (8; 15% instances), <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (4; 7% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (3; 6% instances), <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt> (2; 4% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt> (2; 4% instances), <tt><a href="en_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="en_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="en_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 parataxis	color:blue
1	"	"	PUNCT	``	_	4	punct	4:punct	SpaceAfter=No
2	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	4:nsubj	_
3	'm	be	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	4	aux	4:aux	_
4	going	go	VERB	VBG	Tense=Pres|VerbForm=Part	0	root	0:root	_
5	to	to	ADP	IN	_	6	case	6:case	_
6	jail	jail	NOUN	NN	Number=Sing	4	obl	4:obl:to	_
7	either	either	DET	DT	PronType=Ind	8	det	8:det	_
8	way	way	NOUN	NN	Number=Sing	4	obl:unmarked	4:obl:unmarked	SpaceAfter=No
9	,	,	PUNCT	,	_	4	punct	4:punct	_
10	hope	hope	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	4	parataxis	4:parataxis	_
11	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	13	nsubj	13:nsubj	_
12	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	13	cop	13:cop	_
13	worth	worth	ADJ	JJ	Degree=Pos	10	ccomp	10:ccomp	_
14	it	it	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	13	obj	13:obj	SpaceAfter=No
15	.	.	PUNCT	.	_	4	punct	4:punct	SpaceAfter=No
16	"	"	PUNCT	''	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 18 parataxis	color:blue
1	From	from	ADP	IN	_	5	case	5:case	_
2	about	about	ADV	IN	_	4	advmod	4:advmod	_
3	the	the	DET	DT	Definite=Def|PronType=Art	5	det	5:det	_
4	8th	8th	ADJ	JJ	Degree=Pos|NumForm=Combi|NumType=Ord	5	amod	5:amod	_
5	century	century	NOUN	NN	Number=Sing	9	obl	9:obl:from	_
6	BC	BC	NOUN	NN	Number=Sing	5	nmod:unmarked	5:nmod:unmarked	TemporalNPAdjunct=Yes
7	city	city	NOUN	NN	Number=Sing	8	compound	8:compound	_
8	states	state	NOUN	NNS	Number=Plur	9	nsubj	9:nsubj|11:nsubj:xsubj	_
9	began	begin	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	0:root	_
10	to	to	PART	TO	_	11	mark	11:mark	_
11	appear	appear	VERB	VB	VerbForm=Inf	9	xcomp	9:xcomp	SpaceAfter=No
12	:	:	PUNCT	:	_	11	punct	11:punct	_
13	small	small	ADJ	JJ	Degree=Pos	18	amod	18:amod	SpaceAfter=No
14	,	,	PUNCT	,	_	18	punct	18:punct	_
15	self	self	NOUN	NN	Number=Sing	17	compound	17:compound	SpaceAfter=No
16	-	-	PUNCT	HYPH	_	17	punct	17:punct	SpaceAfter=No
17	governing	govern	VERB	VBG	VerbForm=Ger	18	amod	18:amod	_
18	territories	territory	NOUN	NNS	Number=Plur	9	parataxis	9:parataxis	_
19	with	with	ADP	IN	_	23	case	23:case	_
20	their	their	PRON	PRP$	Number=Plur|Person=3|Poss=Yes|PronType=Prs	23	nmod:poss	23:nmod:poss	_
21	own	own	ADJ	JJ	Degree=Pos	23	amod	23:amod	_
22	political	political	ADJ	JJ	Degree=Pos	23	amod	23:amod	_
23	systems	system	NOUN	NNS	Number=Plur	18	nmod	18:nmod:with	SpaceAfter=No
24	.	.	PUNCT	.	_	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 parataxis	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	nsubj	3:nsubj	_
2	's	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	3:cop	_
3	clear	clear	ADJ	JJ	Degree=Pos	0	root	0:root	SpaceAfter=No
4	:	:	PUNCT	:	_	3	punct	3:punct	_
5	Men	man	NOUN	NNS	Number=Plur	7	nsubj	7:nsubj	_
6	could	could	AUX	MD	VerbForm=Fin	7	aux	7:aux	_
7	have	have	VERB	VB	VerbForm=Inf	3	parataxis	3:parataxis	_
8	more	more	ADJ	JJR	Degree=Cmp	9	amod	9:amod	_
9	responsibility	responsibility	NOUN	NN	Number=Sing	7	obj	7:obj	_
10	in	in	ADP	IN	_	11	case	11:case	_
11	matters	matter	NOUN	NNS	Number=Plur	7	obl	7:obl:in	_
12	of	of	ADP	IN	_	13	case	13:case	_
13	contraception	contraception	NOUN	NN	Number=Sing	11	nmod	11:nmod:of	SpaceAfter=No
14	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


