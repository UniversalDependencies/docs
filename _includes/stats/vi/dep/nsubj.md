

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Vietnamese)

This relation is universal.

3540 nodes (8%) are attached to their parents as `nsubj`.

3475 instances of `nsubj` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.76214689265537.

The following 22 pairs of parts of speech are connected with `nsubj`: [vi-pos/VERB]()-[vi-pos/NOUN]() (2538; 72% instances), [vi-pos/VERB]()-[vi-pos/PROPN]() (385; 11% instances), [vi-pos/ADJ]()-[vi-pos/NOUN]() (275; 8% instances), [vi-pos/NOUN]()-[vi-pos/NOUN]() (183; 5% instances), [vi-pos/NOUN]()-[vi-pos/PROPN]() (87; 2% instances), [vi-pos/PROPN]()-[vi-pos/NOUN]() (17; 0% instances), [vi-pos/ADJ]()-[vi-pos/PROPN]() (16; 0% instances), [vi-pos/VERB]()-[vi-pos/NUM]() (10; 0% instances), [vi-pos/X]()-[vi-pos/NOUN]() (6; 0% instances), [vi-pos/PROPN]()-[vi-pos/PROPN]() (4; 0% instances), [vi-pos/PUNCT]()-[vi-pos/NOUN]() (4; 0% instances), [vi-pos/ADP]()-[vi-pos/NOUN]() (3; 0% instances), [vi-pos/CONJ]()-[vi-pos/NOUN]() (2; 0% instances), [vi-pos/VERB]()-[vi-pos/DET]() (2; 0% instances), [vi-pos/ADJ]()-[vi-pos/X]() (1; 0% instances), [vi-pos/CONJ]()-[vi-pos/PROPN]() (1; 0% instances), [vi-pos/NOUN]()-[vi-pos/CONJ]() (1; 0% instances), [vi-pos/NOUN]()-[vi-pos/NUM]() (1; 0% instances), [vi-pos/NUM]()-[vi-pos/NOUN]() (1; 0% instances), [vi-pos/VERB]()-[vi-pos/PUNCT]() (1; 0% instances), [vi-pos/VERB]()-[vi-pos/VERB]() (1; 0% instances), [vi-pos/VERB]()-[vi-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 nsubj	color:blue
1	cánh	cánh	NOUN	N	_	6	nsubj	_	_
2	cửa	cửa	NOUN	N	_	1	compound	_	_
3	hai	hai	NUM	M	_	4	nummod	_	_
4	chuồng	chuồng	NOUN	N	_	1	compound	_	_
5	dần_dần	dần_dần	X	R	_	6	advmod	_	_
6	rút	rút	VERB	V	_	0	root	_	_
7	lên	lên	X	R	_	6	advmod	_	_
8	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 nsubj	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj	color:blue
1	Mọi	Mọi	DET	L	_	2	det	_	_
2	người	người	NOUN	N	_	3	nsubj	_	_
3	ồn_ào	ồn_ào	ADJ	A	_	0	root	_	_
4	đếm	đếm	VERB	V	_	3	xcomp	_	_
5	tiền	tiền	NOUN	N	_	4	dobj	_	_
6	,	,	PUNCT	,	_	4	punct	_	_
7	ký	ký	VERB	V	_	4	conj	_	_
8	sổ	sổ	NOUN	N	_	7	dobj	_	_
9	...	...	PUNCT	...	_	3	punct	_	_

~~~


