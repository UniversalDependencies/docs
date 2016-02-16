

--------------------------------------------------------------------------------

## Treebank Statistics (UD_German)

This relation is universal.

3259 nodes (1%) are attached to their parents as `nsubjpass`.

3178 instances of `nsubjpass` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.13224915618288.

The following 24 pairs of parts of speech are connected with `nsubjpass`: [de-pos/VERB]()-[de-pos/NOUN]() (2000; 61% instances), [de-pos/VERB]()-[de-pos/PRON]() (749; 23% instances), [de-pos/VERB]()-[de-pos/PROPN]() (329; 10% instances), [de-pos/NOUN]()-[de-pos/NOUN]() (35; 1% instances), [de-pos/NOUN]()-[de-pos/PRON]() (31; 1% instances), [de-pos/ADJ]()-[de-pos/NOUN]() (29; 1% instances), [de-pos/PROPN]()-[de-pos/NOUN]() (15; 0% instances), [de-pos/PROPN]()-[de-pos/PRON]() (14; 0% instances), [de-pos/NOUN]()-[de-pos/PROPN]() (13; 0% instances), [de-pos/PROPN]()-[de-pos/PROPN]() (7; 0% instances), [de-pos/ADJ]()-[de-pos/PRON]() (6; 0% instances), [de-pos/ADJ]()-[de-pos/PROPN]() (6; 0% instances), [de-pos/VERB]()-[de-pos/NUM]() (5; 0% instances), [de-pos/ADP]()-[de-pos/NOUN]() (4; 0% instances), [de-pos/AUX]()-[de-pos/NOUN]() (4; 0% instances), [de-pos/VERB]()-[de-pos/X]() (3; 0% instances), [de-pos/ADP]()-[de-pos/PRON]() (2; 0% instances), [de-pos/AUX]()-[de-pos/PRON]() (1; 0% instances), [de-pos/AUX]()-[de-pos/PROPN]() (1; 0% instances), [de-pos/NOUN]()-[de-pos/NUM]() (1; 0% instances), [de-pos/PRON]()-[de-pos/NOUN]() (1; 0% instances), [de-pos/VERB]()-[de-pos/ADP]() (1; 0% instances), [de-pos/VERB]()-[de-pos/VERB]() (1; 0% instances), [de-pos/X]()-[de-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubjpass	color:blue
1	Dieses	_	PRON	_	_	2	det	_	_
2	Video	_	NOUN	_	_	6	nsubjpass	_	_
3	konnte	_	AUX	_	_	6	aux	_	_
4	angeblich	_	ADV	_	_	5	advmod	_	_
5	nicht	_	PART	_	_	6	neg	_	_
6	storniert	_	VERB	_	_	0	root	_	_
7	werden	_	AUX	_	_	6	auxpass	_	_
8	.	_	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 nsubjpass	color:blue
1	Es	_	PRON	_	_	7	nsubjpass	_	_
2	wurde	_	AUX	_	_	7	auxpass	_	_
3	absolut	_	ADV	_	_	4	advmod	_	_
4	gut	_	ADV	_	_	7	advmod	_	_
5	und	_	CONJ	_	_	4	cc	_	_
6	sauber	_	ADV	_	_	4	conj	_	_
7	gearbeitet	_	VERB	_	_	0	root	_	_
8	von	_	ADP	_	_	10	case	_	_
9	den	_	DET	_	_	10	det	_	_
10	Monteuren	_	NOUN	_	_	7	nmod	_	_
11	.	_	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 nsubjpass	color:blue
1	Birkut	_	PROPN	_	_	9	nsubjpass	_	_
2	wurde	_	AUX	_	_	9	auxpass	_	_
3	bei	_	ADP	_	_	5	case	_	_
4	den	_	DET	_	_	5	det	_	_
5	Arbeiterunruhen	_	NOUN	_	_	9	nmod	_	_
6	1970	_	NUM	_	_	9	nmod	_	_
7	in	_	ADP	_	_	8	case	_	_
8	Danzig	_	PROPN	_	_	9	nmod	_	_
9	erschossen	_	VERB	_	_	0	root	_	_
10	.	_	PUNCT	_	_	9	punct	_	_

~~~


