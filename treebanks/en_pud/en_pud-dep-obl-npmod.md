---
layout: base
title:  'Statistics of obl:npmod in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Relations: `obl:npmod`

This relation is a language-specific subtype of <tt><a href="en_pud-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="en_pud-dep-obl-tmod.html">obl:tmod</a></tt>.

18 nodes (0%) are attached to their parents as `obl:npmod`.

13 instances of `obl:npmod` (72%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.88888888888889.

The following 7 pairs of parts of speech are connected with `obl:npmod`: <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (6; 33% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (4; 22% instances), <tt><a href="en_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (3; 17% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-ADV.html">ADV</a></tt> (2; 11% instances), <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt> (1; 6% instances), <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pud-pos-SYM.html">SYM</a></tt> (1; 6% instances), <tt><a href="en_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 obl:npmod	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	2	det	_	_
2	officers	officer	NOUN	NNS	Number=Plur	4	nsubj	_	_
3	were	be	AUX	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	4	cop	_	_
4	able	able	ADJ	JJ	Degree=Pos	0	root	_	_
5	to	to	PART	TO	_	6	mark	_	_
6	subdue	subdue	VERB	VB	VerbForm=Inf	4	xcomp	_	_
7	the	the	DET	DT	Definite=Def|PronType=Art	10	det	_	_
8	53	53	NUM	CD	NumType=Card	9	nummod	_	_
9	year	year	NOUN	NN	Number=Sing	10	obl:npmod	_	_
10	old	old	ADJ	JJ	Degree=Pos	6	obj	_	_
11	during	during	ADP	IN	_	13	case	_	_
12	the	the	DET	DT	Definite=Def|PronType=Art	13	det	_	_
13	act	act	NOUN	NN	Number=Sing	6	obl	_	_
14	on	on	ADP	IN	_	16	case	_	_
15	Sunday	Sunday	PROPN	NNP	Number=Sing	16	compound	_	_
16	morning	morning	NOUN	NN	Number=Sing	6	obl	_	SpaceAfter=No
17	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 obl:npmod	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 obl:npmod	color:blue
1	Buried	bury	VERB	VBN	Tense=Past|VerbForm=Part	14	advcl	_	_
2	100	100	NUM	CD	NumType=Card	3	nummod	_	_
3	meters	meter	NOUN	NNS	Number=Plur	8	obl:npmod	_	_
4	(	(	PUNCT	(	_	6	punct	_	SpaceAfter=No
5	328	328	NUM	CD	NumType=Card	6	nummod	_	_
6	feet	foot	NOUN	NNS	Number=Plur	3	appos	_	SpaceAfter=No
7	)	)	PUNCT	)	_	6	punct	_	_
8	underground	underground	ADV	RB	_	1	advmod	_	SpaceAfter=No
9	,	,	PUNCT	,	_	14	punct	_	_
10	the	the	DET	DT	Definite=Def|PronType=Art	12	det	_	_
11	Pyongyang	Pyongyang	PROPN	NNP	Number=Sing	12	compound	_	_
12	Metro	metro	NOUN	NN	Number=Sing	14	nsubj	_	_
13	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	cop	_	_
14	one	one	NUM	CD	NumType=Card	0	root	_	_
15	of	of	ADP	IN	_	19	case	_	_
16	the	the	DET	DT	Definite=Def|PronType=Art	19	det	_	_
17	deepest	deepest	ADJ	JJS	Degree=Sup	19	amod	_	_
18	commuter	commuter	NOUN	NN	Number=Sing	19	compound	_	_
19	systems	system	NOUN	NNS	Number=Plur	14	nmod	_	_
20	in	in	ADP	IN	_	22	case	_	_
21	the	the	DET	DT	Definite=Def|PronType=Art	22	det	_	_
22	world	world	NOUN	NN	Number=Sing	19	nmod	_	SpaceAfter=No
23	.	.	PUNCT	.	_	14	punct	_	_

~~~


