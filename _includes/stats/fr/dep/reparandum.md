

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is universal.

1 nodes (0%) are attached to their parents as `reparandum`.

1 instances of `reparandum` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `reparandum`: [fr-pos/ADP]()-[fr-pos/ADP]() (1; 100% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 reparandum	color:blue
1	Beneš	Beneš	PROPN	_	_	2	nsubj	_	_
2	part	partir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	pour	pour	ADP	_	_	4	reparandum	_	_
4	à	à	ADP	_	_	5	case	_	_
5	Londres	Londres	PROPN	_	_	2	nmod	_	_
6	où	où	PRON	_	PronType=Rel	8	nmod	_	_
7	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
8	fonde	fonder	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	acl:relcl	_	_
9	en	en	ADP	_	_	10	case	_	_
10	1940	1940	NUM	_	_	8	nmod	_	_
11	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing	12	det	_	_
12	gouvernement	gouvernement	NOUN	_	Gender=Masc|Number=Sing	8	dobj	_	_
13	tchécoslovaque	tchécoslovaque	ADJ	_	Gender=Masc|Number=Sing	12	amod	_	_
14	en	en	ADP	_	_	15	case	_	_
15	exil	exil	NOUN	_	Gender=Masc|Number=Sing	8	nmod	_	_
16	,	,	PUNCT	_	_	8	punct	_	_
17	et	et	CONJ	_	_	8	cc	_	_
18	en	en	PRON	_	Person=3	19	iobj	_	_
19	assume	assumer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	conj	_	_
20	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing	21	det	_	_
21	présidence	présidence	NOUN	_	Gender=Fem|Number=Sing	19	dobj	_	_
22	.	.	PUNCT	_	_	2	punct	_	_

~~~


