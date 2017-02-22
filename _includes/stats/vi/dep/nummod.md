

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Vietnamese)

This relation is universal.

819 nodes (3%) are attached to their parents as `nummod`.

654 instances of `nummod` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.15750915750916.

The following 6 pairs of parts of speech are connected with `nummod`: [vi-pos/NOUN]()-[vi-pos/NUM]() (806; 98% instances), [vi-pos/PROPN]()-[vi-pos/NUM]() (4; 0% instances), [vi-pos/NUM]()-[vi-pos/NUM]() (3; 0% instances), [vi-pos/VERB]()-[vi-pos/NUM]() (3; 0% instances), [vi-pos/PUNCT]()-[vi-pos/NUM]() (2; 0% instances), [vi-pos/NOUN]()-[vi-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nummod	color:blue
1	Tôi	Tôi	PROPN	P	_	3	nsubj	_	_
2	bị	bị	VERB	V	_	3	aux:pass	_	_
3	bắt	bắt	VERB	V	_	0	root	_	_
4	và	và	SCONJ	CC	_	6	cc	_	_
5	tòa án	tòa án	NOUN	N	_	6	nsubj	_	_
6	xử	xử	VERB	V	_	3	conj	_	_
7	5	5	NUM	M	NumType=Card	8	nummod	_	_
8	năm	năm	NOUN	N	_	6	obj	_	_
9	tù đày	tù đày	VERB	V	_	8	xcomp	_	SpaceAfter=No
10	"	"	PUNCT	"	_	3	punct	_	SpaceAfter=No
11	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 nummod	color:blue
1	Nhu	Nhu	NOUN	Np	_	2	nsubj	_	_
2	phóng	phóng	VERB	V	_	0	root	_	_
3	xe	xe	NOUN	N	_	2	obj	_	_
4	lên	lên	X	R	_	2	advmod	_	SpaceAfter=No
5	,	,	PUNCT	,	_	2	punct	_	_
6	rồi	rồi	CCONJ	C	_	2	cc	_	_
7	cả	cả	PROPN	P	_	9	nsubj	_	_
8	hai	hai	NUM	M	NumType=Card	7	nummod	_	_
9	hối hả	hối hả	ADJ	A	_	2	parataxis	_	_
10	tiến	tiến	VERB	V	_	9	xcomp	_	_
11	ra	ra	X	R	_	9	advmod	_	_
12	ngoại ô	ngoại ô	NOUN	N	_	9	obj	_	SpaceAfter=No
13	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 24 nummod	color:blue
1	sau	sau	ADP	E	_	3	case	_	_
2	ba	ba	NUM	M	NumType=Card	3	nummod	_	_
3	ngày	ngày	NOUN	N	_	11	obl	_	_
4	ăn	ăn	VERB	V	_	3	xcomp	_	_
5	ngủ	ngủ	VERB	V	_	4	xcomp	_	_
6	tự túc	tự túc	ADJ	A	_	4	xcomp	_	SpaceAfter=No
7	,	,	PUNCT	,	_	11	punct	_	_
8	mỗi	mỗi	NUM	M	NumType=Card	9	nummod	_	_
9	người	người	NOUN	N	_	11	nsubj	_	_
10	được	được	VERB	V	_	11	aux:pass	_	_
11	phát	phát	VERB	V	_	0	root	_	_
12	hai	hai	NUM	M	NumType=Card	13	nummod	_	_
13	phần	phần	NOUN	N	_	11	obj	_	_
14	cơm	cơm	NOUN	N	_	13	compound	_	_
15	/	/	PUNCT	NP	_	13	punct	_	_
16	ngày	ngày	NOUN	N	_	13	compound	_	SpaceAfter=No
17	,	,	PUNCT	,	_	13	punct	_	_
18	cả	cả	PROPN	P	_	19	det	_	_
19	suất	suất	NOUN	N	_	23	nsubj	_	_
20	trưa	trưa	NOUN	N	_	19	compound	_	_
21	và	và	SCONJ	CC	_	22	cc	_	_
22	chiều	chiều	NOUN	N	_	19	conj	_	_
23	dồn	dồn	VERB	V	_	13	ccomp	_	_
24	một	một	NUM	M	NumType=Card	23	nummod	_	SpaceAfter=No
25	.	.	PUNCT	.	_	11	punct	_	_

~~~


