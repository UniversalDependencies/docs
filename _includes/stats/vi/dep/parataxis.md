

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Vietnamese)

This relation is universal.

338 nodes (1%) are attached to their parents as `parataxis`.

295 instances of `parataxis` (87%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.05917159763314.

The following 15 pairs of parts of speech are connected with `parataxis`: [vi-pos/VERB]()-[vi-pos/VERB]() (249; 74% instances), [vi-pos/ADJ]()-[vi-pos/VERB]() (27; 8% instances), [vi-pos/NOUN]()-[vi-pos/VERB]() (20; 6% instances), [vi-pos/VERB]()-[vi-pos/NOUN]() (8; 2% instances), [vi-pos/VERB]()-[vi-pos/ADJ]() (7; 2% instances), [vi-pos/VERB]()-[vi-pos/X]() (7; 2% instances), [vi-pos/NOUN]()-[vi-pos/NOUN]() (6; 2% instances), [vi-pos/ADJ]()-[vi-pos/ADJ]() (5; 1% instances), [vi-pos/PUNCT]()-[vi-pos/VERB]() (2; 1% instances), [vi-pos/VERB]()-[vi-pos/PROPN]() (2; 1% instances), [vi-pos/ADJ]()-[vi-pos/NOUN]() (1; 0% instances), [vi-pos/ADJ]()-[vi-pos/PROPN]() (1; 0% instances), [vi-pos/ADJ]()-[vi-pos/X]() (1; 0% instances), [vi-pos/CCONJ]()-[vi-pos/VERB]() (1; 0% instances), [vi-pos/VERB]()-[vi-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 10 parataxis	color:blue
1	đến	đến	VERB	V	_	0	root	_	_
2	VN	VN	NOUN	Ny	_	1	obj	_	_
3	lần	lần	NOUN	N	_	1	obj	_	_
4	này	này	PROPN	P	_	3	det	_	SpaceAfter=No
5	,	,	PUNCT	,	_	1	punct	_	_
6	hai	hai	NUM	M	NumType=Card	7	nummod	_	_
7	người	người	NOUN	N	_	1	nsubj	_	_
8	như	như	CCONJ	C	_	1	cc	_	_
9	đang	đang	X	R	_	10	advmod	_	_
10	trở lại	trở lại	VERB	V	_	1	parataxis	_	_
11	ngôi	ngôi	NOUN	Nc	_	12	compound	_	_
12	nhà	nhà	NOUN	N	_	10	obj	_	_
13	của	của	ADP	E	_	14	case	_	_
14	mình	mình	PROPN	P	_	12	nmod	_	SpaceAfter=No
15	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 parataxis	color:blue
1	Tùng	Tùng	NOUN	Np	_	2	obj	_	_
2	khó chịu	khó chịu	ADJ	A	_	0	root	_	_
3	nhưng	nhưng	CCONJ	C	_	2	cc	_	_
4	cũng	cũng	X	R	_	6	advmod	_	_
5	rất	rất	X	R	_	6	advmod	_	_
6	xấu hổ	xấu hổ	VERB	V	_	2	parataxis	_	_
7	và	và	SCONJ	CC	_	8	cc	_	_
8	quyết tâm	quyết tâm	VERB	V	_	6	conj	_	_
9	nhịn	nhịn	VERB	V	_	8	xcomp	_	SpaceAfter=No
10	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 parataxis	color:blue
1	Nếu	Nếu	CCONJ	C	_	3	cc	_	_
2	Tùng	Tùng	NOUN	Np	_	3	nsubj	_	_
3	phát hiện	phát hiện	VERB	V	_	6	parataxis	_	_
4	Hải	Hải	NOUN	Np	_	3	obj	_	_
5	thì	thì	CCONJ	C	_	6	cc	_	_
6	hậu quả	hậu quả	NOUN	N	_	0	root	_	_
7	vô cùng	vô cùng	X	R	_	8	advmod	_	_
8	tồi tệ	tồi tệ	ADJ	A	_	6	amod	_	SpaceAfter=No
9	.	.	PUNCT	.	_	6	punct	_	_

~~~


