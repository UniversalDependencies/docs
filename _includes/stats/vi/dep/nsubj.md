

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Vietnamese)

This relation is universal.

2623 nodes (8%) are attached to their parents as `nsubj`.

2582 instances of `nsubj` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.71521158978269.

The following 20 pairs of parts of speech are connected with `nsubj`: [vi-pos/VERB]()-[vi-pos/NOUN]() (1903; 73% instances), [vi-pos/VERB]()-[vi-pos/PROPN]() (269; 10% instances), [vi-pos/ADJ]()-[vi-pos/NOUN]() (207; 8% instances), [vi-pos/NOUN]()-[vi-pos/NOUN]() (125; 5% instances), [vi-pos/NOUN]()-[vi-pos/PROPN]() (58; 2% instances), [vi-pos/PROPN]()-[vi-pos/NOUN]() (14; 1% instances), [vi-pos/ADJ]()-[vi-pos/PROPN]() (13; 0% instances), [vi-pos/VERB]()-[vi-pos/NUM]() (9; 0% instances), [vi-pos/X]()-[vi-pos/NOUN]() (6; 0% instances), [vi-pos/ADP]()-[vi-pos/NOUN]() (3; 0% instances), [vi-pos/PROPN]()-[vi-pos/PROPN]() (3; 0% instances), [vi-pos/PUNCT]()-[vi-pos/NOUN]() (3; 0% instances), [vi-pos/CCONJ]()-[vi-pos/NOUN]() (2; 0% instances), [vi-pos/VERB]()-[vi-pos/DET]() (2; 0% instances), [vi-pos/ADJ]()-[vi-pos/X]() (1; 0% instances), [vi-pos/CCONJ]()-[vi-pos/PROPN]() (1; 0% instances), [vi-pos/NOUN]()-[vi-pos/CCONJ]() (1; 0% instances), [vi-pos/NOUN]()-[vi-pos/NUM]() (1; 0% instances), [vi-pos/VERB]()-[vi-pos/VERB]() (1; 0% instances), [vi-pos/VERB]()-[vi-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Phong trào	Phong trào	NOUN	N	_	2	nsubj	_	_
2	lan truyền	lan truyền	VERB	V	_	0	root	_	_
3	mạnh mẽ	mạnh mẽ	ADJ	A	_	2	xcomp	_	_
4	hơn	hơn	X	R	_	3	advmod	_	SpaceAfter=No
5	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj	color:blue
1	Tôi	Tôi	PROPN	P	_	4	nsubj	_	_
2	cũng	cũng	X	R	_	4	advmod	_	_
3	đã	đã	X	R	_	4	advmod	_	_
4	tham gia	tham gia	VERB	V	_	0	root	_	_
5	quân đội	quân đội	NOUN	N	_	4	obj	_	_
6	để	để	ADP	E	_	7	case	_	_
7	chống	chống	VERB	V	_	4	mark	_	_
8	phát xít	phát xít	NOUN	N	_	7	obj	_	_
9	Đức	Đức	NOUN	Np	_	8	compound	_	_
10	tại	tại	ADP	E	_	11	case	_	_
11	Pháp	Pháp	NOUN	Np	_	8	nmod	_	SpaceAfter=No
12	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nsubj	color:blue
1	lúc	lúc	NOUN	N	_	5	nmod	_	_
2	đó	đó	PROPN	P	_	1	det	_	_
3	nước	nước	NOUN	N	_	5	nsubj	_	_
4	Pháp	Pháp	NOUN	Np	_	3	compound	_	_
5	chuẩn bị	chuẩn bị	ADJ	A	_	0	root	_	_
6	tấn công	tấn công	VERB	V	_	5	xcomp	_	_
7	Ai Cập	Ai Cập	NOUN	Np	_	5	obj	_	SpaceAfter=No
8	.	.	PUNCT	.	_	5	punct	_	_

~~~


