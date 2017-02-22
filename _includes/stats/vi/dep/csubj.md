

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Vietnamese)

This relation is universal.

74 nodes (0%) are attached to their parents as `csubj`.

74 instances of `csubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.91891891891892.

The following 9 pairs of parts of speech are connected with `csubj`: [vi-pos/VERB]()-[vi-pos/VERB]() (44; 59% instances), [vi-pos/NOUN]()-[vi-pos/VERB]() (10; 14% instances), [vi-pos/ADJ]()-[vi-pos/VERB]() (7; 9% instances), [vi-pos/NOUN]()-[vi-pos/ADJ]() (5; 7% instances), [vi-pos/VERB]()-[vi-pos/ADJ]() (3; 4% instances), [vi-pos/PUNCT]()-[vi-pos/VERB]() (2; 3% instances), [vi-pos/ADJ]()-[vi-pos/ADJ]() (1; 1% instances), [vi-pos/CCONJ]()-[vi-pos/VERB]() (1; 1% instances), [vi-pos/PROPN]()-[vi-pos/ADJ]() (1; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 11 csubj	color:blue
1	Tùng	Tùng	NOUN	Np	_	2	nsubj	_	_
2	ok	ok	VERB	VP	_	0	root	_	_
3	-	-	PUNCT	-	_	2	punct	_	_
4	đánh bạn	đánh bạn	VERB	V	_	10	csubj	_	_
5	với	với	ADP	E	_	4	obj	_	_
6	thằng	thằng	PROPN	P	_	5	nmod	_	_
7	nào	nào	PROPN	P	_	6	det	_	_
8	cũng	cũng	X	R	_	10	advmod	_	_
9	được	được	VERB	V	_	10	aux:pass	_	SpaceAfter=No
10	,	,	PUNCT	,	_	2	aux:pass	_	_
11	có	có	VERB	V	_	13	csubj	_	_
12	xe	xe	NOUN	N	_	11	obj	_	_
13	tính	tính	VERB	V	_	10	conj	_	_
14	sau	sau	ADJ	A	_	13	xcomp	_	SpaceAfter=No
15	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 csubj	color:blue
1	Nhưng	Nhưng	CCONJ	C	_	6	cc	_	_
2	đáng	đáng	VERB	V	_	6	csubj	_	_
3	nói	nói	VERB	V	_	2	xcomp	_	_
4	nhất	nhất	ADJ	A	_	3	xcomp	_	_
5	là	là	AUX	V	_	6	cop	_	_
6	làng	làng	NOUN	N	_	0	root	_	_
7	đã	đã	X	R	_	8	advmod	_	_
8	hình thành	hình thành	VERB	V	_	6	xcomp	_	_
9	một	một	NUM	M	NumType=Card	10	nummod	_	_
10	đội	đội	NOUN	N	_	8	obj	_	_
11	thợ mộc	thợ mộc	NOUN	N	_	10	compound	_	SpaceAfter=No
12	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 csubj	color:blue
1	nhìn	nhìn	VERB	V	_	6	csubj	_	_
2	Hải	Hải	NOUN	Np	_	1	obj	_	_
3	lúc	lúc	NOUN	N	_	1	obj	_	_
4	đó	đó	PROPN	P	_	3	det	_	_
5	rất	rất	X	R	_	6	advmod	_	_
6	bối rối	bối rối	ADJ	A	_	0	root	_	SpaceAfter=No
7	.	.	PUNCT	.	_	6	punct	_	_

~~~


