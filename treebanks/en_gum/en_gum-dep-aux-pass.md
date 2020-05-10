---
layout: base
title:  'Statistics of aux:pass in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-aux.html">aux</a></tt>.

986 nodes (1%) are attached to their parents as `aux:pass`.

984 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.24442190669371.

The following 3 pairs of parts of speech are connected with `aux:pass`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (975; 99% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (9; 1% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 aux:pass	color:blue
1	His	his	PRON	PRP$	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	2	nmod:poss	_	Entity=(abstract-33(person-3)
2	lack	lack	NOUN	NN	Number=Sing	7	nsubj:pass	_	_
3	of	of	ADP	IN	_	4	case	_	_
4	moderation	moderation	NOUN	NN	Number=Sing	2	nmod	_	Entity=(abstract-13)abstract-33)
5	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	aux:pass	_	_
6	not	not	PART	RB	Polarity=Neg	7	advmod	_	_
7	restricted	restrict	VERB	VBN	Tense=Past|VerbForm=Part	0	root	_	_
8	to	to	ADP	IN	_	10	case	_	_
9	physical	physical	ADJ	JJ	Degree=Pos	10	amod	_	Entity=(event-34
10	exercise	exercise	NOUN	NN	Number=Sing	7	obl	_	Entity=event-34)|SpaceAfter=No
11	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux:pass	color:blue
1	She	she	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	Entity=(person-83)
2	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	aux:pass	_	_
3	staggered	staggered	ADJ	JJ	Degree=Pos	0	root	_	_
4	by	by	ADP	IN	_	6	case	_	_
5	the	the	DET	DT	Definite=Def|PronType=Art	6	det	_	Entity=(event-84
6	loss	loss	NOUN	NN	Number=Sing	3	obl	_	_
7	last	last	ADJ	JJ	Degree=Pos	8	amod	_	Entity=(time-74
8	year	year	NOUN	NN	Number=Sing	6	nmod:tmod	_	Entity=time-74)
9	to	to	ADP	IN	_	11	case	_	_
10	the	the	DET	DT	Definite=Def|PronType=Art	11	det	_	Entity=(organization-85
11	Cardinals	cardinal	PROPN	NNPS	Number=Plur	6	nmod	_	Entity=event-84)organization-85)|SpaceAfter=No
12	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 13 aux:pass	color:blue
1	Biologists	biologist	NOUN	NNS	Number=Plur	2	nsubj	_	Entity=(person-8)
2	think	think	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	that	that	SCONJ	IN	_	5	mark	_	_
4	fear	fear	NOUN	NN	Number=Sing	5	nsubj	_	Entity=(abstract-9)
5	causes	cause	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	ccomp	_	_
6	this	this	DET	DT	Number=Sing|PronType=Dem	8	det	_	_
7	"	"	PUNCT	``	_	8	punct	_	SpaceAfter=No
8	hypnosis	hypnosis	NOUN	NN	Number=Sing	5	obj	_	Entity=(abstract-10)|SpaceAfter=No
9	,	,	PUNCT	,	_	8	punct	_	SpaceAfter=No
10	"	"	PUNCT	''	_	8	punct	_	_
11	which	which	PRON	WDT	PronType=Rel	15	nsubj	_	_
12	may	may	AUX	MD	VerbForm=Fin	15	aux	_	_
13	be	be	AUX	VB	VerbForm=Inf	15	aux:pass	_	_
14	an	a	DET	DT	Definite=Ind|PronType=Art	15	det	_	Entity=(event-11
15	attempt	attempt	NOUN	NN	Number=Sing	8	acl:relcl	_	_
16	to	to	PART	TO	_	18	mark	_	_
17	"	"	PUNCT	``	_	18	punct	_	SpaceAfter=No
18	play	play	VERB	VB	VerbForm=Inf	15	xcomp	_	_
19	dead	dead	ADJ	JJ	Degree=Pos	18	xcomp	_	SpaceAfter=No
20	"	"	PUNCT	''	_	18	punct	_	Entity=event-11)
21	to	to	PART	TO	_	22	mark	_	_
22	fool	fool	VERB	VB	VerbForm=Inf	15	acl	_	_
23	predators	predator	NOUN	NNS	Number=Plur	22	obj	_	Entity=(animal-12)|SpaceAfter=No
24	.	.	PUNCT	.	_	2	punct	_	_

~~~


