

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-BR)

This relation is a language-specific subtype of [acl]().
There are also 2 other language-specific subtypes of `acl`: [acl:inf](), [acl:part]().

3214 nodes (1%) are attached to their parents as `acl:relcl`.

3212 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.16925948973242.

The following 29 pairs of parts of speech are connected with `acl:relcl`: [pt-pos/NOUN]()-[pt-pos/VERB]() (2282; 71% instances), [pt-pos/PROPN]()-[pt-pos/VERB]() (421; 13% instances), [pt-pos/PRON]()-[pt-pos/VERB]() (232; 7% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (79; 2% instances), [pt-pos/X]()-[pt-pos/VERB]() (56; 2% instances), [pt-pos/PROPN]()-[pt-pos/NOUN]() (27; 1% instances), [pt-pos/NUM]()-[pt-pos/VERB]() (25; 1% instances), [pt-pos/VERB]()-[pt-pos/VERB]() (19; 1% instances), [pt-pos/NOUN]()-[pt-pos/PRON]() (13; 0% instances), [pt-pos/PART]()-[pt-pos/VERB]() (10; 0% instances), [pt-pos/PRON]()-[pt-pos/NOUN]() (9; 0% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (7; 0% instances), [pt-pos/PRON]()-[pt-pos/PRON]() (6; 0% instances), [pt-pos/NOUN]()-[pt-pos/PROPN]() (4; 0% instances), [pt-pos/X]()-[pt-pos/NOUN]() (4; 0% instances), [pt-pos/NUM]()-[pt-pos/NOUN]() (3; 0% instances), [pt-pos/ADJ]()-[pt-pos/VERB]() (2; 0% instances), [pt-pos/ADV]()-[pt-pos/VERB]() (2; 0% instances), [pt-pos/NOUN]()-[pt-pos/NUM]() (2; 0% instances), [pt-pos/PART]()-[pt-pos/NOUN]() (2; 0% instances), [pt-pos/ADP]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/AUX]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/PART]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/X]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/PROPN]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 acl:relcl	color:blue
1	Ver	_	VERB	VERB	_	0	root	_	_
2	também	_	ADV	ADV	_	1	advmod	_	_
3	a	_	DET	DET	_	4	det	_	_
4	lista	_	NOUN	NOUN	_	1	dobj	_	_
5	de	_	ADP	ADP	_	6	case	_	_
6	entidades	_	NOUN	NOUN	_	4	nmod	_	_
7	que	_	PRON	PRON	_	9	nsubj	_	_
8	tenham	_	AUX	AUX	_	9	aux	_	_
9	emitido	_	VERB	VERB	_	6	acl:relcl	_	_
10	selos	_	NOUN	NOUN	_	9	dobj	_	_
11	postais	_	ADJ	ADJ	_	10	amod	_	_
12	.	_	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 12 acl:relcl	color:blue
1	Nei	_	PROPN	PNOUN	_	2	nsubj	_	_
2	errou	_	VERB	VERB	_	0	root	_	_
3	o	_	DET	DET	_	4	det	_	_
4	passe	_	NOUN	NOUN	_	2	dobj	_	_
5	ea	_	CONJ	CONJ	_	2	cc	_	_
6	bola	_	NOUN	NOUN	_	7	nsubj	_	_
7	ficou	_	VERB	VERB	_	2	conj	_	_
8	com	_	ADP	ADP	_	9	case	_	_
9	Vander	_	PROPN	PNOUN	_	7	nmod	_	_
10	,	_	PUNCT	.	_	12	punct	_	_
11	que	_	PRON	PRON	_	12	nsubj	_	_
12	chutou	_	VERB	VERB	_	9	acl:relcl	_	_
13	cruzado	_	ADV	ADV	_	12	advmod	_	_
14	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 acl:relcl	color:blue
1	Porém	_	ADV	ADV	_	8	advmod	_	_
2	,	_	PUNCT	.	_	1	punct	_	_
3	os	_	PRON	PRON	_	8	nsubj	_	_
4	que	_	PRON	PRON	_	5	nsubj	_	_
5	atendem	_	VERB	VERB	_	3	acl:relcl	_	_
6	na	_	ADP	ADP	_	7	case	_	_
7	ponta	_	NOUN	NOUN	_	5	nmod	_	_
8	mostraram	_	VERB	VERB	_	0	root	_	_
9	crescimento	_	NOUN	NOUN	_	8	dobj	_	_
10	.	_	PUNCT	.	_	8	punct	_	_

~~~


