

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Galician)

This relation is universal.

4003 nodes (3%) are attached to their parents as `root`.

4003 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.72045965525856.

The following 9 pairs of parts of speech are connected with `root`: [gl-pos/ROOT]()-[gl-pos/VERB]() (3787; 95% instances), [gl-pos/ROOT]()-[gl-pos/NOUN]() (170; 4% instances), [gl-pos/ROOT]()-[gl-pos/ADP]() (22; 1% instances), [gl-pos/ROOT]()-[gl-pos/PROPN]() (12; 0% instances), [gl-pos/ROOT]()-[gl-pos/ADV]() (6; 0% instances), [gl-pos/ROOT]()-[gl-pos/PRON]() (3; 0% instances), [gl-pos/ROOT]()-[gl-pos/ADJ]() (1; 0% instances), [gl-pos/ROOT]()-[gl-pos/DET]() (1; 0% instances), [gl-pos/ROOT]()-[gl-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 4 root	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
1	Con	con	ADP	SPS00	_	3	det	_	Treeler:spec
2	respecto	respecto	NOUN	NCMS000	_	1	nmod	_	Treeler:sn
3	ás	á	NOUN	NCFP000	_	0	root	_	Treeler:sentence
4	CC	cc	PROPN	NP00000	_	3	amod	_	Treeler:s.a
5	.	.	PUNCT	Fp	_	4	punct	_	Treeler:f

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	Para	para	ADP	SPS00	_	0	root	_	Treeler:sentence
2	que	que	SCONJ	CS	_	4	mark	_	Treeler:conj
3	tanto	tanto	DET	DI0MS0	_	4	det	_	Treeler:spec
4	esforzo	esforzo	NOUN	NCMS000	_	1	ccomp	_	Treeler:S
5	?	?	PUNCT	Fit	_	1	punct	_	Treeler:f

~~~


