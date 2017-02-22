

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Vietnamese)

This relation is universal.
There are 1 language-specific subtypes of `aux`: [aux:pass]().

162 nodes (1%) are attached to their parents as `aux`.

155 instances of `aux` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.40740740740741.

The following 13 pairs of parts of speech are connected with `aux`: [vi-pos/VERB]()-[vi-pos/VERB]() (94; 58% instances), [vi-pos/VERB]()-[vi-pos/X]() (29; 18% instances), [vi-pos/ADJ]()-[vi-pos/VERB]() (12; 7% instances), [vi-pos/VERB]()-[vi-pos/ADJ]() (6; 4% instances), [vi-pos/NOUN]()-[vi-pos/VERB]() (5; 3% instances), [vi-pos/NOUN]()-[vi-pos/X]() (5; 3% instances), [vi-pos/NOUN]()-[vi-pos/ADJ]() (3; 2% instances), [vi-pos/ADJ]()-[vi-pos/X]() (2; 1% instances), [vi-pos/X]()-[vi-pos/ADJ]() (2; 1% instances), [vi-pos/ADJ]()-[vi-pos/ADJ]() (1; 1% instances), [vi-pos/CCONJ]()-[vi-pos/VERB]() (1; 1% instances), [vi-pos/PROPN]()-[vi-pos/ADJ]() (1; 1% instances), [vi-pos/X]()-[vi-pos/VERB]() (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 aux	color:blue
1	chuyến	chuyến	NOUN	N	_	6	nsubj	_	_
2	bay	bay	VERB	V	_	1	xcomp	_	_
3	sang	sang	VERB	V	_	1	xcomp	_	_
4	châu Âu	châu Âu	NOUN	Np	_	3	obj	_	_
5	phải	phải	VERB	V	_	6	aux	_	_
6	hoãn	hoãn	VERB	V	_	0	root	_	_
7	lại	lại	X	R	_	6	advmod	_	_
8	do	do	ADP	E	_	10	case	_	_
9	thời tiết	thời tiết	NOUN	N	_	10	nsubj	_	_
10	xấu	xấu	ADJ	A	_	6	xcomp	_	SpaceAfter=No
11	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux	color:blue
1	Câu chuyện	Câu chuyện	NOUN	N	_	3	nsubj	_	_
2	có thể	có thể	X	R	_	3	aux	_	_
3	theo	theo	VERB	V	_	0	root	_	_
4	bốn	bốn	NUM	M	NumType=Card	5	nummod	_	_
5	khả năng	khả năng	NOUN	N	_	3	obj	_	SpaceAfter=No
6	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 aux	color:blue
1	Tùng	Tùng	NOUN	Np	_	2	nsubj	_	_
2	nói	nói	VERB	V	_	0	root	_	_
3	không	không	X	R	Polarity=Neg	4	advmod	_	_
4	nên	nên	VERB	V	_	2	obj	_	_
5	vội vàng	vội vàng	ADJ	A	_	4	xcomp	_	_
6	mà	mà	CCONJ	C	_	4	cc	_	_
7	mẹ	mẹ	NOUN	N	_	9	obj	_	_
8	phải	phải	VERB	V	_	9	aux	_	_
9	âm thầm	âm thầm	ADJ	A	_	4	xcomp	_	_
10	tìm hiểu	tìm hiểu	VERB	V	_	9	xcomp	_	SpaceAfter=No
11	.	.	PUNCT	.	_	2	punct	_	_

~~~


