

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Indonesian)

This relation is universal.

4566 nodes (4%) are attached to their parents as `amod`.

4060 instances of `amod` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.62220762155059.

The following 40 pairs of parts of speech are connected with `amod`: [id-pos/NOUN]()-[id-pos/ADJ]() (3063; 67% instances), [id-pos/VERB]()-[id-pos/ADJ]() (484; 11% instances), [id-pos/PROPN]()-[id-pos/PROPN]() (351; 8% instances), [id-pos/PROPN]()-[id-pos/ADJ]() (184; 4% instances), [id-pos/NOUN]()-[id-pos/NOUN]() (139; 3% instances), [id-pos/ADJ]()-[id-pos/ADJ]() (89; 2% instances), [id-pos/NOUN]()-[id-pos/PROPN]() (60; 1% instances), [id-pos/PRON]()-[id-pos/ADJ]() (29; 1% instances), [id-pos/PROPN]()-[id-pos/NOUN]() (25; 1% instances), [id-pos/NUM]()-[id-pos/NUM]() (23; 1% instances), [id-pos/ADV]()-[id-pos/ADJ]() (18; 0% instances), [id-pos/DET]()-[id-pos/ADJ]() (14; 0% instances), [id-pos/NOUN]()-[id-pos/VERB]() (14; 0% instances), [id-pos/VERB]()-[id-pos/NOUN]() (14; 0% instances), [id-pos/NOUN]()-[id-pos/ADV]() (11; 0% instances), [id-pos/NOUN]()-[id-pos/NUM]() (8; 0% instances), [id-pos/NOUN]()-[id-pos/ADP]() (6; 0% instances), [id-pos/ADJ]()-[id-pos/NOUN]() (4; 0% instances), [id-pos/ADP]()-[id-pos/ADJ]() (4; 0% instances), [id-pos/ADJ]()-[id-pos/PROPN]() (2; 0% instances), [id-pos/NOUN]()-[id-pos/PART]() (2; 0% instances), [id-pos/PROPN]()-[id-pos/PART]() (2; 0% instances), [id-pos/SCONJ]()-[id-pos/ADJ]() (2; 0% instances), [id-pos/VERB]()-[id-pos/ADV]() (2; 0% instances), [id-pos/ADJ]()-[id-pos/ADV]() (1; 0% instances), [id-pos/ADV]()-[id-pos/PART]() (1; 0% instances), [id-pos/CONJ]()-[id-pos/ADJ]() (1; 0% instances), [id-pos/NOUN]()-[id-pos/CONJ]() (1; 0% instances), [id-pos/NUM]()-[id-pos/ADJ]() (1; 0% instances), [id-pos/NUM]()-[id-pos/NOUN]() (1; 0% instances), [id-pos/PRON]()-[id-pos/ADV]() (1; 0% instances), [id-pos/PRON]()-[id-pos/NOUN]() (1; 0% instances), [id-pos/PRON]()-[id-pos/PROPN]() (1; 0% instances), [id-pos/PRON]()-[id-pos/VERB]() (1; 0% instances), [id-pos/PROPN]()-[id-pos/ADP]() (1; 0% instances), [id-pos/PROPN]()-[id-pos/DET]() (1; 0% instances), [id-pos/PROPN]()-[id-pos/NUM]() (1; 0% instances), [id-pos/VERB]()-[id-pos/ADP]() (1; 0% instances), [id-pos/VERB]()-[id-pos/PART]() (1; 0% instances), [id-pos/VERB]()-[id-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 amod	color:blue
1	Liburan	_	NOUN	_	_	4	nsubj	_	_
2	yang	_	PRON	_	_	3	nsubj	_	_
3	indah	_	ADJ	_	_	1	amod	_	_
4	mendadak	_	VERB	_	_	0	root	_	_
5	menjadi	_	VERB	_	_	4	xcomp	_	_
6	penuh	_	ADJ	_	_	5	dobj	_	_
7	darah	_	NOUN	_	_	6	compound	_	_
8	.	_	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 amod	color:blue
1	Semakin	_	ADV	_	_	6	mark	_	_
2	jauh	_	ADJ	_	_	1	amod	_	_
3	,	_	PUNCT	_	_	6	punct	_	_
4	maka	_	DET	_	_	5	det	_	_
5	warnanya	_	NOUN	_	_	6	nsubj	_	_
6	berubah	_	VERB	_	_	0	root	_	_
7	dari	_	ADP	_	_	6	case	_	_
8	jingga	_	ADJ	_	_	6	amod	_	_
9	menjadi	_	VERB	_	_	6	ccomp	_	_
10	biru	_	ADJ	_	_	9	amod	_	_
11	.	_	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 amod	color:blue
1	The	_	PROPN	_	_	3	det	_	_
2	Deadly	_	PROPN	_	_	3	amod	_	_
3	Disciple	_	PROPN	_	_	5	nsubj	_	_
4	adalah	_	VERB	_	_	5	cop	_	_
5	film	_	NOUN	_	_	0	root	_	_
6	laga	_	NOUN	_	_	5	compound	_	_
7	komedi	_	NOUN	_	_	6	compound	_	_
8	Malaysia	_	PROPN	_	_	6	name	_	_
9	tahun	_	NOUN	_	_	5	compound	_	_
10	2001	_	NUM	_	_	9	nummod	_	_
11	.	_	PUNCT	_	_	5	punct	_	_

~~~


