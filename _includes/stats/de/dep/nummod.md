

--------------------------------------------------------------------------------

## Treebank Statistics (UD_German)

This relation is universal.

3223 nodes (1%) are attached to their parents as `nummod`.

3114 instances of `nummod` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.34284827800186.

The following 17 pairs of parts of speech are connected with `nummod`: [de-pos/NOUN]()-[de-pos/NUM]() (2819; 87% instances), [de-pos/PROPN]()-[de-pos/NUM]() (102; 3% instances), [de-pos/NUM]()-[de-pos/NUM]() (59; 2% instances), [de-pos/PROPN]()-[de-pos/PROPN]() (54; 2% instances), [de-pos/NOUN]()-[de-pos/NOUN]() (51; 2% instances), [de-pos/ADJ]()-[de-pos/NUM]() (38; 1% instances), [de-pos/PROPN]()-[de-pos/NOUN]() (31; 1% instances), [de-pos/X]()-[de-pos/NUM]() (31; 1% instances), [de-pos/ADP]()-[de-pos/NUM]() (17; 1% instances), [de-pos/ADV]()-[de-pos/NUM]() (11; 0% instances), [de-pos/ADP]()-[de-pos/NOUN]() (3; 0% instances), [de-pos/NOUN]()-[de-pos/DET]() (2; 0% instances), [de-pos/ADV]()-[de-pos/X]() (1; 0% instances), [de-pos/NOUN]()-[de-pos/PRON]() (1; 0% instances), [de-pos/NOUN]()-[de-pos/X]() (1; 0% instances), [de-pos/PUNCT]()-[de-pos/NUM]() (1; 0% instances), [de-pos/X]()-[de-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	5	_	NUM	_	_	2	nummod	_	_
2	Sterne	_	NOUN	_	_	0	root	_	_
3	und	_	CONJ	_	_	2	cc	_	_
4	ein	_	DET	_	_	6	det	_	_
5	großes	_	ADJ	_	_	6	amod	_	_
6	Lob	_	NOUN	_	_	2	conj	_	_
7	an	_	ADP	_	_	10	case	_	_
8	die	_	DET	_	_	10	det	_	_
9	gesamte	_	ADJ	_	_	10	amod	_	_
10	Firma	_	NOUN	_	_	6	nmod	_	_
11	Wintergartenbau	_	PROPN	_	_	10	appos	_	_
12	.	_	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod	color:blue
1	Knapp	_	ADV	_	_	2	advmod	_	_
2	20	_	NUM	_	_	3	nummod	_	_
3	Euro	_	PROPN	_	_	8	dobj	_	_
4	hat	_	AUX	_	_	8	aux	_	_
5	je	_	ADV	_	_	8	advmod	_	_
6	ein	_	DET	_	_	7	det	_	_
7	Teil	_	NOUN	_	_	8	nsubj	_	_
8	gekostet	_	VERB	_	_	0	root	_	_
9	.	_	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	15	_	NUM	_	_	2	nummod	_	_
2	000	_	NUM	_	_	3	nummod	_	_
3	Einwohner	_	NOUN	_	_	4	nsubj	_	_
4	flüchteten	_	VERB	_	_	0	root	_	_
5	in	_	ADP	_	_	7	case	_	_
6	das	_	DET	_	_	7	det	_	_
7	Umland	_	NOUN	_	_	4	nmod	_	_
8	oder	_	CONJ	_	_	4	cc	_	_
9	wurden	_	AUX	_	_	10	auxpass	_	_
10	evakuiert	_	VERB	_	_	4	conj	_	_
11	.	_	PUNCT	_	_	4	punct	_	_

~~~


