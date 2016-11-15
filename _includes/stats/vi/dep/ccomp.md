

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Vietnamese)

This relation is universal.

1224 nodes (3%) are attached to their parents as `ccomp`.

1198 instances of `ccomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.8562091503268.

The following 13 pairs of parts of speech are connected with `ccomp`: [vi-pos/VERB]()-[vi-pos/VERB]() (883; 72% instances), [vi-pos/NOUN]()-[vi-pos/VERB]() (230; 19% instances), [vi-pos/VERB]()-[vi-pos/NOUN]() (49; 4% instances), [vi-pos/ADJ]()-[vi-pos/VERB]() (22; 2% instances), [vi-pos/VERB]()-[vi-pos/ADJ]() (16; 1% instances), [vi-pos/NOUN]()-[vi-pos/NOUN]() (9; 1% instances), [vi-pos/VERB]()-[vi-pos/PROPN]() (7; 1% instances), [vi-pos/NOUN]()-[vi-pos/ADJ]() (2; 0% instances), [vi-pos/PROPN]()-[vi-pos/VERB]() (2; 0% instances), [vi-pos/CONJ]()-[vi-pos/VERB]() (1; 0% instances), [vi-pos/PUNCT]()-[vi-pos/VERB]() (1; 0% instances), [vi-pos/VERB]()-[vi-pos/CONJ]() (1; 0% instances), [vi-pos/X]()-[vi-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 ccomp	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 ccomp	color:blue
1	"	"	PUNCT	"	_	5	punct	_	_
2	Thế	Thế	PART	T	_	5	discourse	_	_
3	còn	còn	CONJ	C	_	5	cc	_	_
4	con	con	NOUN	Nc	_	5	compound	_	_
5	vật	vật	NOUN	N	_	0	root	_	_
6	chị	chị	NOUN	N	_	7	nsubj	_	_
7	yêu_thích	yêu_thích	VERB	V	_	5	ccomp	_	_
8	nhất	nhất	ADJ	A	_	7	xcomp	_	_
9	?	?	PUNCT	?	_	5	punct	_	_
10	"	"	PUNCT	"	_	5	punct	_	_
11	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 ccomp	color:blue
1	Bà	Bà	NOUN	N	_	2	nsubj	_	_
2	bảo	bảo	VERB	V	_	0	root	_	_
3	:	:	PUNCT	:	_	2	punct	_	_
4	"	"	PUNCT	"	_	2	punct	_	_
5	Nó	Nó	PROPN	P	_	7	nsubj	_	_
6	là	là	VERB	V	_	7	cop	_	_
7	con_trai	con_trai	NOUN	N	_	2	ccomp	_	_
8	tôi	tôi	PROPN	P	_	7	det	_	_
9	mà	mà	PART	T	_	7	discourse	_	_
10	.	.	PUNCT	.	_	2	punct	_	_

~~~


