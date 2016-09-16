

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Galician)

This relation is universal.

10475 nodes (8%) are attached to their parents as `amod`.

8417 instances of `amod` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.25536992840095.

The following 25 pairs of parts of speech are connected with `amod`: [gl-pos/NOUN]()-[gl-pos/ADJ]() (9195; 88% instances), [gl-pos/NOUN]()-[gl-pos/NOUN]() (692; 7% instances), [gl-pos/ADP]()-[gl-pos/ADJ]() (157; 1% instances), [gl-pos/ADJ]()-[gl-pos/ADJ]() (96; 1% instances), [gl-pos/PROPN]()-[gl-pos/ADJ]() (92; 1% instances), [gl-pos/NOUN]()-[gl-pos/NUM]() (84; 1% instances), [gl-pos/VERB]()-[gl-pos/ADJ]() (53; 1% instances), [gl-pos/PRON]()-[gl-pos/ADJ]() (26; 0% instances), [gl-pos/NUM]()-[gl-pos/ADJ]() (23; 0% instances), [gl-pos/NOUN]()-[gl-pos/DET]() (14; 0% instances), [gl-pos/NOUN]()-[gl-pos/PROPN]() (9; 0% instances), [gl-pos/NOUN]()-[gl-pos/PRON]() (7; 0% instances), [gl-pos/ADP]()-[gl-pos/DET]() (6; 0% instances), [gl-pos/NUM]()-[gl-pos/SYM]() (6; 0% instances), [gl-pos/DET]()-[gl-pos/ADJ]() (2; 0% instances), [gl-pos/PUNCT]()-[gl-pos/DET]() (2; 0% instances), [gl-pos/PUNCT]()-[gl-pos/NOUN]() (2; 0% instances), [gl-pos/SCONJ]()-[gl-pos/ADJ]() (2; 0% instances), [gl-pos/ADJ]()-[gl-pos/DET]() (1; 0% instances), [gl-pos/ADJ]()-[gl-pos/PRON]() (1; 0% instances), [gl-pos/ADP]()-[gl-pos/PUNCT]() (1; 0% instances), [gl-pos/ADV]()-[gl-pos/ADJ]() (1; 0% instances), [gl-pos/CONJ]()-[gl-pos/ADV]() (1; 0% instances), [gl-pos/NUM]()-[gl-pos/NOUN]() (1; 0% instances), [gl-pos/PUNCT]()-[gl-pos/PUNCT]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 amod	color:blue
1	Así	así	ADV	RG	_	2	det	_	Treeler:spec
2	mesmo	mesmo	ADV	RG	_	5	case	_	Treeler:cc
3	,	,	PUNCT	Fc	_	2	punct	_	Treeler:f
4	serán	ser	VERB	VSIF3P0	_	5	aux	_	Treeler:v
5	publicados	publicar	VERB	VMP00PM	_	0	root	_	Treeler:sentence
6	en	en	ADP	SPS00	_	5	case	_	Treeler:cc
7	o	o	DET	DA0MS0	_	9	det	_	Treeler:spec
8	"	"	PUNCT	Fe	_	9	punct	_	Treeler:f
9	Boletín	boletín	NOUN	NCMS000	_	6	nmod	_	Treeler:sn
10	Oficial	oficial	ADJ	AQ0CS0	_	9	amod	_	Treeler:s.a
11	de	de	ADP	SPS00	_	9	case	_	Treeler:sp
12	el	el	PRON	PP3MS000	_	11	nmod	_	Treeler:sn
13	Estado	estado	NOUN	NCMS000	_	11	nmod	_	Treeler:sn
14	"	"	PUNCT	Fe	_	9	punct	_	Treeler:f
15	.	.	PUNCT	Fp	_	5	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 amod	color:blue
1	O	o	DET	DA0MS0	_	2	det	_	Treeler:spec
2	mecanismo	mecanismo	NOUN	NCMS000	_	4	nsubj	_	Treeler:suj
3	empregado	empregado	NOUN	NCMS000	_	2	amod	_	Treeler:s.a
4	consistiu	consistir	VERB	VMIS3S0	_	0	root	_	Treeler:sentence
5	en	en	ADP	SPS00	_	4	case	_	Treeler:creg
6	seleccionar	seleccionar	VERB	VMN0000	_	5	ccomp	_	Treeler:S
7	as	o	DET	DA0FP0	_	8	det	_	Treeler:spec
8	cinco	cinco	NOUN	NCMS000	_	6	dobj	_	Treeler:cd
9	CC	cc	PROPN	NP00000	_	8	nmod	_	Treeler:sn
10	.	.	PUNCT	Fp	_	4	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 amod	color:blue
1	AA	aa	PROPN	NP00000	_	0	root	_	Treeler:sentence
2	.	.	PUNCT	Fp	_	1	punct	_	Treeler:f
3	,	,	PUNCT	Fc	_	4	punct	_	Treeler:f
4	producindo	producir	VERB	VMG0000	_	1	ccomp	_	Treeler:S
5	se	se	PRON	PP3CN000	_	4	dep	_	Treeler:morfema.pronominal
6	de	de	ADP	SPS00	_	4	case	_	Treeler:creg
7	novo	novo	ADJ	AQ0MS0	_	6	amod	_	Treeler:s.a
8	unha	un	DET	DI0FS0	_	10	det	_	Treeler:spec
9	certa	certo	DET	DI0FS0	_	8	det	_	Treeler:d
10	converxencia	converxencia	NOUN	NCFS000	_	6	nmod	_	Treeler:sn
11	a	a	ADP	SPS00	_	4	case	_	Treeler:creg
12	partir	partir	VERB	VMN0000	_	11	ccomp	_	Treeler:S
13	de	de	ADP	SPS00	_	12	case	_	Treeler:creg
14	o	o	DET	DA0MS0	_	15	det	_	Treeler:spec
15	ano	ano	NOUN	NCMS000	_	13	nmod	_	Treeler:sn
16	1992	1992	NUM	Z	_	15	nmod	_	Treeler:sn
17	.	.	PUNCT	Fp	_	1	punct	_	Treeler:f

~~~


