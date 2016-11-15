

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Vietnamese)

This relation is universal.

1662 nodes (4%) are attached to their parents as `cc`.

1042 instances of `cc` (63%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.70758122743682.

The following 14 pairs of parts of speech are connected with `cc`: [vi-pos/VERB]()-[vi-pos/CONJ]() (859; 52% instances), [vi-pos/VERB]()-[vi-pos/SCONJ]() (263; 16% instances), [vi-pos/NOUN]()-[vi-pos/SCONJ]() (175; 11% instances), [vi-pos/NOUN]()-[vi-pos/CONJ]() (160; 10% instances), [vi-pos/ADJ]()-[vi-pos/CONJ]() (137; 8% instances), [vi-pos/ADJ]()-[vi-pos/SCONJ]() (42; 3% instances), [vi-pos/PROPN]()-[vi-pos/CONJ]() (10; 1% instances), [vi-pos/PUNCT]()-[vi-pos/CONJ]() (4; 0% instances), [vi-pos/X]()-[vi-pos/CONJ]() (4; 0% instances), [vi-pos/PROPN]()-[vi-pos/SCONJ]() (3; 0% instances), [vi-pos/ADP]()-[vi-pos/SCONJ]() (2; 0% instances), [vi-pos/ADP]()-[vi-pos/CONJ]() (1; 0% instances), [vi-pos/CONJ]()-[vi-pos/CONJ]() (1; 0% instances), [vi-pos/NUM]()-[vi-pos/CONJ]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 cc	color:blue
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 cc	color:blue
1	chủ	chủ	NOUN	N	_	9	nsubj	_	_
2	nhà	nhà	NOUN	N	_	1	compound	_	_
3	,	,	PUNCT	,	_	1	punct	_	_
4	viện	viện	NOUN	N	_	1	conj	_	_
5	phó	phó	ADJ	A	_	4	amod	_	_
6	một	một	NUM	M	_	7	nummod	_	_
7	bệnh_viện	bệnh_viện	NOUN	N	_	4	compound	_	_
8	,	,	PUNCT	,	_	9	punct	_	_
9	gật	gật	VERB	V	_	0	root	_	_
10	và	và	SCONJ	CC	_	9	cc	_	_
11	đếm	đếm	VERB	V	_	9	conj	_	_
12	tiền	tiền	NOUN	N	_	11	dobj	_	_
13	.	.	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 13 cc	color:blue
1	Nếu	Nếu	CONJ	C	_	2	cc	_	_
2	lấy	lấy	VERB	V	_	0	root	_	_
3	ngay	ngay	X	R	_	2	advmod	_	_
4	,	,	PUNCT	,	_	2	punct	_	_
5	hắn	hắn	PROPN	P	_	7	nsubj	_	_
6	chỉ	chỉ	X	R	_	7	advmod	_	_
7	còn	còn	VERB	V	_	2	parataxis	_	_
8	ba	ba	NUM	M	_	9	nummod	_	_
9	bộ	bộ	NOUN	N	_	7	dobj	_	_
10	5	5	NUM	M	_	15	conj	_	_
11	,	,	PUNCT	,	_	15	punct	_	_
12	7	7	NUM	M	_	15	nummod	_	_
13	và	và	SCONJ	CC	_	15	cc	_	_
14	8	8	NUM	M	_	15	nummod	_	_
15	kg	kg	NOUN	Nu	_	9	conj	_	_
16	.	.	PUNCT	.	_	2	punct	_	_

~~~


