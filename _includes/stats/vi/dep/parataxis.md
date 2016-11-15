

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Vietnamese)

This relation is universal.

453 nodes (1%) are attached to their parents as `parataxis`.

393 instances of `parataxis` (87%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.

The following 17 pairs of parts of speech are connected with `parataxis`: [vi-pos/VERB]()-[vi-pos/VERB]() (319; 70% instances), [vi-pos/ADJ]()-[vi-pos/VERB]() (41; 9% instances), [vi-pos/NOUN]()-[vi-pos/VERB]() (29; 6% instances), [vi-pos/VERB]()-[vi-pos/NOUN]() (12; 3% instances), [vi-pos/ADJ]()-[vi-pos/ADJ]() (10; 2% instances), [vi-pos/NOUN]()-[vi-pos/NOUN]() (9; 2% instances), [vi-pos/VERB]()-[vi-pos/X]() (8; 2% instances), [vi-pos/VERB]()-[vi-pos/ADJ]() (7; 2% instances), [vi-pos/VERB]()-[vi-pos/PROPN]() (4; 1% instances), [vi-pos/VERB]()-[vi-pos/NUM]() (3; 1% instances), [vi-pos/ADJ]()-[vi-pos/NOUN]() (2; 0% instances), [vi-pos/ADJ]()-[vi-pos/X]() (2; 0% instances), [vi-pos/PROPN]()-[vi-pos/VERB]() (2; 0% instances), [vi-pos/PUNCT]()-[vi-pos/VERB]() (2; 0% instances), [vi-pos/ADJ]()-[vi-pos/PROPN]() (1; 0% instances), [vi-pos/CONJ]()-[vi-pos/VERB]() (1; 0% instances), [vi-pos/NUM]()-[vi-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 parataxis	color:blue
1	con	con	NOUN	Nc	_	2	compound	_	_
2	Đen	Đen	NOUN	Np	_	3	nsubj	_	_
3	chạy	chạy	VERB	V	_	0	root	_	_
4	quanh	quanh	NOUN	N	_	3	dobj	_	_
5	chuồng	chuồng	NOUN	N	_	4	compound	_	_
6	,	,	PUNCT	,	_	3	punct	_	_
7	rồi	rồi	CONJ	C	_	3	cc	_	_
8	nó	nó	PROPN	P	_	10	nsubj	_	_
9	cũng	cũng	X	R	_	10	advmod	_	_
10	dừng	dừng	VERB	V	_	3	parataxis	_	_
11	lại	lại	X	R	_	10	advmod	_	_
12	chịu	chịu	VERB	V	_	10	ccomp	_	_
13	giao_phối	giao_phối	VERB	V	_	12	xcomp	_	_
14	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 1 parataxis	color:blue
1	có	có	VERB	V	_	13	parataxis	_	_
2	một	một	NUM	M	_	3	nummod	_	_
3	người	người	NOUN	N	_	4	nsubj	_	_
4	yêu	yêu	VERB	V	_	1	ccomp	_	_
5	nghề	nghề	NOUN	N	_	4	dobj	_	_
6	rồi	rồi	CONJ	C	_	4	cc	_	_
7	quyết	quyết	VERB	V	_	4	conj	_	_
8	sống_chết	sống_chết	VERB	V	_	7	xcomp	_	_
9	với	với	ADP	E	_	10	case	_	_
10	nghề	nghề	NOUN	N	_	8	nmod	_	_
11	quả	quả	X	R	_	13	advmod	_	_
12	cũng	cũng	X	R	_	13	advmod	_	_
13	khó	khó	ADJ	A	_	0	root	_	_
14	.	.	PUNCT	.	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 12 parataxis	color:blue
1	Thư	Thư	NOUN	Np	_	2	nsubj	_	_
2	cho	cho	VERB	V	_	0	root	_	_
3	biết	biết	VERB	V	_	2	xcomp	_	_
4	:	:	PUNCT	:	_	2	punct	_	_
5	ngày_kia	ngày_kia	NOUN	N	_	7	nsubj	_	_
6	là	là	VERB	V	_	7	cop	_	_
7	chủ_nhật	chủ_nhật	NOUN	N	_	2	ccomp	_	_
8	,	,	PUNCT	,	_	7	punct	_	_
9	mọi	mọi	DET	L	_	10	det	_	_
10	người	người	NOUN	N	_	12	nsubj	_	_
11	đều	đều	X	R	_	12	advmod	_	_
12	ở	ở	VERB	V	_	7	parataxis	_	_
13	nhà	nhà	NOUN	N	_	12	dobj	_	_
14	.	.	PUNCT	.	_	2	punct	_	_

~~~


