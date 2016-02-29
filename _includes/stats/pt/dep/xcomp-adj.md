

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-BR)

This relation is a language-specific subtype of [xcomp]().

1648 nodes (1%) are attached to their parents as `xcomp:adj`.

1625 instances of `xcomp:adj` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.39927184466019.

The following 6 pairs of parts of speech are connected with `xcomp:adj`: [pt-pos/VERB]()-[pt-pos/ADJ]() (1642; 100% instances), [pt-pos/PRON]()-[pt-pos/ADJ]() (2; 0% instances), [pt-pos/ADJ]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/ADV]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/AUX]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/ADJ]() (1; 0% instances).


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
9	feliz	_	ADJ	ADJ	_	8	xcomp:adj	_	_
10	.	_	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 9 xcomp:adj	color:blue
1	"	_	PUNCT	.	_	6	punct	_	_
2	A	_	DET	DET	_	3	det	_	_
3	Europa	_	PROPN	PNOUN	_	6	nsubj	_	_
4	vai	_	AUX	AUX	_	6	aux	_	_
5	se	_	PART	PRT	_	6	expl	_	_
6	recuperar	_	VERB	VERB	_	19	ccomp	_	_
7	e	_	CONJ	CONJ	_	6	cc	_	_
8	estará	_	VERB	VERB	_	12	case	_	_
9	melhor	_	ADJ	ADJ	_	12	xcomp:adj	_	_
10	do	_	ADP	ADP	_	12	case	_	_
11	que	_	ADP	ADP	_	10	mwe	_	_
12	nós	_	PRON	PRON	_	6	conj	_	_
13	quando	_	CONJ	CONJ	_	14	mark	_	_
14	terminar	_	VERB	VERB	_	12	advcl	_	_
15	a	_	DET	DET	_	16	det	_	_
16	crise	_	NOUN	NOUN	_	14	nsubj	_	_
17	"	_	PUNCT	.	_	6	punct	_	_
18	,	_	PUNCT	.	_	19	punct	_	_
19	assinalou	_	VERB	VERB	_	0	root	_	_
20	Gurría	_	PROPN	PNOUN	_	19	nsubj	_	_
21	.	_	PUNCT	.	_	19	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 xcomp:adj	color:blue
1	Estão	_	ADV	ADV	_	0	root	_	_
2	convocados	_	ADJ	ADJ	_	1	xcomp:adj	_	_
3	para	_	ADP	ADP	_	5	case	_	_
4	esse	_	DET	DET	_	5	det	_	_
5	dia	_	NOUN	NOUN	_	1	nmod	_	_
6	o	_	DET	DET	_	7	det	_	_
7	ex	_	PART	PRT	_	1	nsubj	_	_
8	-	_	PUNCT	.	_	7	punct	_	_
9	diretor	_	NOUN	NOUN	_	7	name	_	_
10	-	_	PUNCT	.	_	7	punct	_	_
11	geral	_	ADJ	ADJ	_	7	amod	_	_
12	do	_	ADP	ADP	_	13	case	_	_
13	Departamento	_	PROPN	PNOUN	_	7	nmod	_	_
14	Nacional	_	PROPN	PNOUN	_	13	amod	_	_
15	de	_	ADP	ADP	_	16	case	_	_
16	Infraestrutura	_	PROPN	PNOUN	_	13	nmod	_	_
17	de	_	ADP	ADP	_	18	case	_	_
18	Transporte	_	PROPN	PNOUN	_	16	nmod	_	_
19	(	_	PUNCT	.	_	20	punct	_	_
20	Dnit	_	PROPN	PNOUN	_	13	appos	_	_
21	)	_	PUNCT	.	_	20	punct	_	_
22	,	_	PUNCT	.	_	23	punct	_	_
23	Luiz	_	PROPN	PNOUN	_	7	appos	_	_
24	Antônio	_	PROPN	PNOUN	_	23	name	_	_
25	Pagot	_	PROPN	PNOUN	_	23	name	_	_
26	,	_	PUNCT	.	_	7	punct	_	_
27	eo	_	CONJ	CONJ	_	7	cc	_	_
28	empresário	_	NOUN	NOUN	_	7	conj	_	_
29	Adir	_	PROPN	PNOUN	_	28	appos	_	_
30	Assad	_	PROPN	PNOUN	_	29	name	_	_
31	,	_	PUNCT	.	_	34	punct	_	_
32	que	_	PRON	PRON	_	34	nsubj	_	_
33	devem	_	AUX	AUX	_	34	aux	_	_
34	falar	_	VERB	VERB	_	7	acl:relcl	_	_
35	a	_	ADP	ADP	_	36	mark	_	_
36	partir	_	VERB	VERB	_	34	nmod	_	_
37	das	_	ADP	ADP	_	38	case	_	_
38	10h15	_	NUM	NUM	NumType=Card	36	nmod	_	_
39	.	_	PUNCT	.	_	1	punct	_	_

~~~


