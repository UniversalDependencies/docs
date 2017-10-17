

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French-Sequoia)

This relation is a language-specific subtype of [csubj]().

1 nodes (0%) are attached to their parents as `csubj:pass`.

1 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.

The following 1 pairs of parts of speech are connected with `csubj:pass`: [fr-pos/VERB]()-[fr-pos/NOUN]() (1; 100% instances).


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 19 csubj:pass	color:blue
1	Ceux-ci	celui-ci	PRON	_	Gender=Masc|Number=Plur|PronType=Dem	3	nsubj:pass	_	_
2	seront	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	3	aux:pass	_	_
3	réalisés	réaliser	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
4	par	par	ADP	_	_	6	case	_	_
5	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	promoteur	promoteur	NOUN	_	Gender=Masc|Number=Sing	3	obl	_	_
7	qui	qui	PRON	_	PronType=Rel	10	nsubj	_	_
8	s'	le/lui	PRON	_	Person=3|Reflex=Yes	10	expl	_	SpaceAfter=No
9	y	y	PRON	_	Person=3	10	iobj	_	_
10	engage	engager	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	acl:relcl	_	_
11	étant	être	AUX	_	Tense=Pres|VerbForm=Part	12	aux:pass	_	_
12	précisé	préciser	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	1	acl	_	_
13	que	que	SCONJ	_	_	19	mark	_	_
14	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	15	det	_	_
15	voirie	voirie	NOUN	_	Gender=Fem|Number=Sing	19	nsubj	_	_
16	restera	rester	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	19	cop	_	_
17	en	en	ADP	_	_	19	case	_	_
18	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	19	det	_	SpaceAfter=No
19	état	état	NOUN	_	Gender=Masc|Number=Sing	12	csubj:pass	_	_
20	pour	pour	ADP	_	_	22	case	_	_
21	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	22	det	_	_
22	moment	moment	NOUN	_	Gender=Masc|Number=Sing	19	obl	_	SpaceAfter=No
23	.	.	PUNCT	_	_	3	punct	_	_

~~~


