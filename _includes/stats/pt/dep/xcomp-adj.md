

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-BR)

This relation is a language-specific subtype of [xcomp]().

1476 nodes (1%) are attached to their parents as `xcomp:adj`.

1456 instances of `xcomp:adj` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.41192411924119.

The following 6 pairs of parts of speech are connected with `xcomp:adj`: [pt-pos/VERB]()-[pt-pos/ADJ]() (1470; 100% instances), [pt-pos/PRON]()-[pt-pos/ADJ]() (2; 0% instances), [pt-pos/ADJ]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/ADV]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/AUX]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 xcomp:adj	color:blue
1	A	_	DET	DET	_	2	det	_	_
2	Nina	_	PROPN	PNOUN	_	5	nsubj	_	_
3	é	_	VERB	VERB	_	5	cop	_	_
4	a	_	DET	DET	_	5	det	_	_
5	chance	_	NOUN	NOUN	_	0	root	_	_
6	de	_	ADP	ADP	_	8	mark	_	_
7	ele	_	PRON	PRON	_	8	nsubj	_	_
8	ser	_	VERB	VERB	_	5	nmod	_	_
9	feliz	_	ADJ	ADJ	_	8	xcomp:adj	_	SpaceAfter=No
10	.	_	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 9 xcomp:adj	color:blue
1	"	_	PUNCT	.	_	6	punct	_	SpaceAfter=No
2	A	_	DET	DET	_	3	det	_	_
3	Europa	_	PROPN	PNOUN	_	6	nsubj	_	_
4	vai	_	AUX	AUX	_	6	aux	_	_
5	se	_	PART	PRT	_	6	expl:pv	_	_
6	recuperar	_	VERB	VERB	_	20	ccomp	_	_
7	e	_	CCONJ	CONJ	_	13	cc	_	_
8	estará	_	VERB	VERB	_	13	case	_	_
9	melhor	_	ADJ	ADJ	_	13	xcomp:adj	_	_
10	de	de	ADP	ADP	_	13	case	_	_
11	o	o	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
12	que	_	ADP	ADP	_	10	fixed	_	_
13	nós	_	PRON	PRON	_	6	conj	_	_
14	quando	_	CCONJ	CONJ	_	15	mark	_	_
15	terminar	_	VERB	VERB	_	13	advcl	_	_
16	a	_	DET	DET	_	17	det	_	_
17	crise	_	NOUN	NOUN	_	15	nsubj	_	SpaceAfter=No
18	"	_	PUNCT	.	_	6	punct	_	SpaceAfter=No
19	,	_	PUNCT	.	_	20	punct	_	_
20	assinalou	_	VERB	VERB	_	0	root	_	_
21	Gurría	_	PROPN	PNOUN	_	20	nsubj	_	SpaceAfter=No
22	.	_	PUNCT	.	_	20	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 15 xcomp:adj	color:blue
1	Bruno	_	PROPN	PNOUN	_	6	nsubj	_	_
2	Senna	_	PROPN	PNOUN	_	1	flat	_	_
3	(	_	PUNCT	.	_	4	punct	_	SpaceAfter=No
4	Williams	_	PROPN	PNOUN	_	1	appos	_	SpaceAfter=No
5	)	_	PUNCT	.	_	4	punct	_	_
6	foi	_	VERB	VERB	_	0	root	_	_
7	nono	_	ADJ	ADJ	_	6	xcomp:adj	_	_
8	e	_	CCONJ	CONJ	_	9	cc	_	_
9	Felipe	_	PROPN	PNOUN	_	6	conj	_	_
10	Massa	_	PROPN	PNOUN	_	9	flat	_	_
11	(	_	PUNCT	.	_	12	punct	_	SpaceAfter=No
12	Ferrari	_	PROPN	PNOUN	_	9	appos	_	SpaceAfter=No
13	)	_	PUNCT	.	_	12	punct	_	SpaceAfter=No
14	,	_	PUNCT	.	_	15	punct	_	_
15	13	_	ADJ	ADJ	_	9	xcomp:adj	_	_
16	º	_	PUNCT	.	_	15	punct	_	SpaceAfter=No
17	.	_	PUNCT	.	_	6	punct	_	_

~~~


