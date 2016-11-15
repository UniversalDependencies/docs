

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Vietnamese)

This relation is universal.

306 nodes (1%) are attached to their parents as `discourse`.

163 instances of `discourse` (53%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.24183006535948.

The following 17 pairs of parts of speech are connected with `discourse`: [vi-pos/VERB]()-[vi-pos/PART]() (101; 33% instances), [vi-pos/NOUN]()-[vi-pos/PART]() (88; 29% instances), [vi-pos/ADJ]()-[vi-pos/PART]() (44; 14% instances), [vi-pos/PROPN]()-[vi-pos/PART]() (19; 6% instances), [vi-pos/NOUN]()-[vi-pos/X]() (16; 5% instances), [vi-pos/VERB]()-[vi-pos/INTJ]() (11; 4% instances), [vi-pos/ADP]()-[vi-pos/PART]() (7; 2% instances), [vi-pos/VERB]()-[vi-pos/X]() (4; 1% instances), [vi-pos/NOUN]()-[vi-pos/INTJ]() (3; 1% instances), [vi-pos/X]()-[vi-pos/PART]() (3; 1% instances), [vi-pos/ADJ]()-[vi-pos/INTJ]() (2; 1% instances), [vi-pos/ADJ]()-[vi-pos/X]() (2; 1% instances), [vi-pos/PART]()-[vi-pos/PART]() (2; 1% instances), [vi-pos/CONJ]()-[vi-pos/PART]() (1; 0% instances), [vi-pos/INTJ]()-[vi-pos/INTJ]() (1; 0% instances), [vi-pos/NUM]()-[vi-pos/PART]() (1; 0% instances), [vi-pos/PROPN]()-[vi-pos/INTJ]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 discourse	color:blue
1	Chị	Chị	NOUN	N	_	2	nsubj	_	_
2	đáp	đáp	VERB	V	_	0	root	_	_
3	ngay	ngay	PART	T	_	2	discourse	_	_
4	:	:	PUNCT	:	_	2	punct	_	_
5	"	"	PUNCT	"	_	2	punct	_	_
6	ngựa	ngựa	NOUN	N	_	2	dobj	_	_
7	!	!	PUNCT	!	_	6	punct	_	_
8	Vì	Vì	ADP	E	_	10	case	_	_
9	nó	nó	PROPN	P	_	10	nsubj	_	_
10	nhớ	nhớ	VERB	V	_	6	advcl	_	_
11	quá	quá	X	R	_	12	advmod	_	_
12	dai	dai	ADJ	A	_	10	xcomp	_	_
13	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 discourse	color:blue
1	chú	chú	NOUN	Nc	_	2	compound	_	_
2	hổ	hổ	NOUN	N	_	14	nsubj	_	_
3	do	do	ADP	E	_	5	case	_	_
4	chính	chính	PART	T	_	5	discourse	_	_
5	bàn_tay	bàn_tay	NOUN	N	_	2	nmod	_	_
6	các	các	DET	L	_	5	det	_	_
7	"	"	PUNCT	"	_	5	punct	_	_
8	bà_đỡ	bà_đỡ	NOUN	N	_	5	compound	_	_
9	"	"	PUNCT	"	_	5	punct	_	_
10	vườn	vườn	NOUN	N	_	5	compound	_	_
11	thú	thú	NOUN	N	_	10	compound	_	_
12	Hà_Nội	Hà_Nội	NOUN	Np	_	10	compound	_	_
13	đã	đã	X	R	_	14	advmod	_	_
14	ra_đời	ra_đời	VERB	V	_	0	root	_	_
15	.	.	PUNCT	.	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 discourse	color:blue
1	Tòa	Tòa	NOUN	N	_	2	nsubj	_	_
2	xử	xử	VERB	V	_	0	root	_	_
3	xong	xong	VERB	V	_	2	xcomp	_	_
4	rồi	rồi	PART	T	_	3	discourse	_	_
5	,	,	PUNCT	,	_	2	punct	_	_
6	ai	ai	PROPN	P	_	8	nsubj	_	_
7	cũng	cũng	X	R	_	8	advmod	_	_
8	bảo	bảo	VERB	V	_	2	parataxis	_	_
9	là	là	CONJ	C	_	10	mark	_	_
10	tôi	tôi	PROPN	P	_	8	nsubj	_	_
11	đã	đã	X	R	_	13	advmod	_	_
12	có_thể	có_thể	X	R	_	13	advmod	_	_
13	yên	yên	ADJ	A	_	10	amod	_	_
14	rồi	rồi	PART	T	_	13	discourse	_	_
15	.	.	PUNCT	.	_	2	punct	_	_

~~~


