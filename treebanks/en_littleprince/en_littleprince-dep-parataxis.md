---
layout: base
title:  'Statistics of parataxis in UD_English-LittlePrince'
udver: '2'
---

## Treebank Statistics: UD_English-LittlePrince: Relations: `parataxis`

This relation is universal.

50 nodes (1%) are attached to their parents as `parataxis`.

35 instances of `parataxis` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.84.

The following 14 pairs of parts of speech are connected with `parataxis`: <tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt> (19; 38% instances), <tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt> (6; 12% instances), <tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt> (5; 10% instances), <tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="en_littleprince-pos-ADJ.html">ADJ</a></tt> (3; 6% instances), <tt><a href="en_littleprince-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_littleprince-pos-ADJ.html">ADJ</a></tt> (2; 4% instances), <tt><a href="en_littleprince-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_littleprince-pos-PRON.html">PRON</a></tt> (2; 4% instances), <tt><a href="en_littleprince-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="en_littleprince-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_littleprince-pos-INTJ.html">INTJ</a></tt> (2; 4% instances), <tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="en_littleprince-pos-PRON.html">PRON</a></tt>-<tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="en_littleprince-pos-INTJ.html">INTJ</a></tt> (2; 4% instances), <tt><a href="en_littleprince-pos-ADV.html">ADV</a></tt>-<tt><a href="en_littleprince-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="en_littleprince-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="en_littleprince-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 parataxis	color:blue
1	Try	try	VERB	VB	Mood=Imp|VerbForm=Fin	0	root	_	_
2	to	to	PART	TO	_	4	mark	_	_
3	be	be	AUX	VB	VerbForm=Inf	4	cop	_	_
4	happy	happy	ADJ	JJ	Degree=Pos	1	xcomp	_	_
5	...	...	PUNCT	,	_	1	punct	_	_
6	let	let	VERB	VB	Mood=Imp|VerbForm=Fin	1	parataxis	_	_
7	the	the	DET	DT	Definite=Def|PronType=Art	9	det	_	_
8	glass	glass	NOUN	NN	Number=Sing	9	compound	_	_
9	globe	globe	NOUN	NN	Number=Sing	6	obj	_	_
10	be	be	VERB	VB	VerbForm=Inf	6	xcomp	_	_
11	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 14 parataxis	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
2	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	aux	_	_
3	saying	say	VERB	VBG	Tense=Pres|VerbForm=Part	0	root	_	_
4	,	,	PUNCT	,	_	5	punct	_	_
5	then	then	ADV	RB	PronType=Dem	3	advmod	_	_
6	,	,	PUNCT	,	_	14	punct	_	_
7	five	five	NUM	CD	NumType=Card	9	nummod	_	_
8	-	-	PUNCT	HYPH	_	9	punct	_	_
9	hundred	hundred	NUM	CD	NumType=Card	14	nummod	_	_
10	-	-	PUNCT	HYPH	_	9	punct	_	_
11	and	and	CCONJ	CC	_	13	cc	_	_
12	-	-	PUNCT	HYPH	_	13	punct	_	_
13	one	one	NUM	CD	NumType=Card	9	conj	_	_
14	millions	million	NOUN	NNS	Number=Plur	3	parataxis	_	_
15	-	-	PUNCT	HYPH	_	14	punct	_	_
16	-	-	PUNCT	HYPH	_	14	punct	_	_
17	"	"	PUNCT	''	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 5 parataxis	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	11	nsubj	_	_
2	might	might	AUX	MD	VerbForm=Fin	11	aux	_	_
3	,	,	PUNCT	,	_	5	punct	_	_
4	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	5	nsubj	_	_
5	see	see	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	11	parataxis	_	_
6	,	,	PUNCT	,	_	5	punct	_	_
7	have	have	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	11	aux	_	_
8	been	be	AUX	VBN	Tense=Past|VerbForm=Part	11	cop	_	_
9	a	a	DET	DT	Definite=Ind|PronType=Art	11	det	_	_
10	new	new	ADJ	JJ	Degree=Pos	11	amod	_	_
11	kind	kind	NOUN	NN	Number=Sing	0	root	_	_
12	of	of	ADP	IN	_	13	case	_	_
13	baobab	baobab	NOUN	NN	Number=Sing	11	nmod	_	_
14	.	.	PUNCT	.	_	11	punct	_	_

~~~


