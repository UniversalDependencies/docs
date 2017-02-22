

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Indonesian)

This relation is universal.

4143 nodes (4%) are attached to their parents as `amod`.

3681 instances of `amod` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.63046101858557.

The following 40 pairs of parts of speech are connected with `amod`: [id-pos/NOUN]()-[id-pos/ADJ]() (2779; 67% instances), [id-pos/VERB]()-[id-pos/ADJ]() (442; 11% instances), [id-pos/PROPN]()-[id-pos/PROPN]() (310; 7% instances), [id-pos/PROPN]()-[id-pos/ADJ]() (164; 4% instances), [id-pos/NOUN]()-[id-pos/NOUN]() (128; 3% instances), [id-pos/ADJ]()-[id-pos/ADJ]() (83; 2% instances), [id-pos/NOUN]()-[id-pos/PROPN]() (55; 1% instances), [id-pos/PRON]()-[id-pos/ADJ]() (24; 1% instances), [id-pos/NUM]()-[id-pos/NUM]() (23; 1% instances), [id-pos/PROPN]()-[id-pos/NOUN]() (21; 1% instances), [id-pos/ADV]()-[id-pos/ADJ]() (16; 0% instances), [id-pos/DET]()-[id-pos/ADJ]() (14; 0% instances), [id-pos/VERB]()-[id-pos/NOUN]() (14; 0% instances), [id-pos/NOUN]()-[id-pos/VERB]() (13; 0% instances), [id-pos/NOUN]()-[id-pos/ADV]() (11; 0% instances), [id-pos/NOUN]()-[id-pos/NUM]() (8; 0% instances), [id-pos/NOUN]()-[id-pos/ADP]() (6; 0% instances), [id-pos/ADJ]()-[id-pos/NOUN]() (4; 0% instances), [id-pos/ADP]()-[id-pos/ADJ]() (3; 0% instances), [id-pos/ADJ]()-[id-pos/PROPN]() (2; 0% instances), [id-pos/NOUN]()-[id-pos/PART]() (2; 0% instances), [id-pos/SCONJ]()-[id-pos/ADJ]() (2; 0% instances), [id-pos/VERB]()-[id-pos/ADV]() (2; 0% instances), [id-pos/ADJ]()-[id-pos/ADV]() (1; 0% instances), [id-pos/ADV]()-[id-pos/PART]() (1; 0% instances), [id-pos/NOUN]()-[id-pos/CCONJ]() (1; 0% instances), [id-pos/NOUN]()-[id-pos/PRON]() (1; 0% instances), [id-pos/NUM]()-[id-pos/ADJ]() (1; 0% instances), [id-pos/NUM]()-[id-pos/NOUN]() (1; 0% instances), [id-pos/PRON]()-[id-pos/ADV]() (1; 0% instances), [id-pos/PRON]()-[id-pos/NOUN]() (1; 0% instances), [id-pos/PRON]()-[id-pos/PROPN]() (1; 0% instances), [id-pos/PROPN]()-[id-pos/ADP]() (1; 0% instances), [id-pos/PROPN]()-[id-pos/DET]() (1; 0% instances), [id-pos/PROPN]()-[id-pos/NUM]() (1; 0% instances), [id-pos/PROPN]()-[id-pos/PART]() (1; 0% instances), [id-pos/PROPN]()-[id-pos/PRON]() (1; 0% instances), [id-pos/VERB]()-[id-pos/ADP]() (1; 0% instances), [id-pos/VERB]()-[id-pos/PART]() (1; 0% instances), [id-pos/VERB]()-[id-pos/VERB]() (1; 0% instances).


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
6	penuh	_	ADJ	_	_	5	obj	_	_
7	darah	_	NOUN	_	_	6	compound	_	SpaceAfter=No
8	.	_	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 amod	color:blue
1	Semakin	_	ADV	_	_	6	mark	_	_
2	jauh	_	ADJ	_	_	1	amod	_	SpaceAfter=No
3	,	_	PUNCT	_	_	6	punct	_	_
4	maka	_	DET	_	_	5	det	_	_
5	warnanya	_	NOUN	_	_	6	nsubj	_	_
6	berubah	_	VERB	_	_	0	root	_	_
7	dari	_	ADP	_	_	6	case	_	_
8	jingga	_	ADJ	_	_	6	amod	_	_
9	menjadi	_	VERB	_	_	6	ccomp	_	_
10	biru	_	ADJ	_	_	9	amod	_	SpaceAfter=No
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
4	adalah	_	AUX	_	_	5	cop	_	_
5	film	_	NOUN	_	_	0	root	_	_
6	laga	_	NOUN	_	_	5	compound	_	_
7	komedi	_	NOUN	_	_	6	compound	_	_
8	Malaysia	_	PROPN	_	_	6	flat	_	_
9	tahun	_	NOUN	_	_	5	compound	_	_
10	2001	_	NUM	_	NumType=Card	9	nummod	_	SpaceAfter=No
11	.	_	PUNCT	_	_	5	punct	_	_

~~~


