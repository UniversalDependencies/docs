

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Vietnamese)

This relation is universal.

2637 nodes (8%) are attached to their parents as `xcomp`.

2574 instances of `xcomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.53090633295411.

The following 15 pairs of parts of speech are connected with `xcomp`: [vi-pos/NOUN]()-[vi-pos/VERB]() (1109; 42% instances), [vi-pos/VERB]()-[vi-pos/VERB]() (790; 30% instances), [vi-pos/VERB]()-[vi-pos/ADJ]() (468; 18% instances), [vi-pos/ADJ]()-[vi-pos/VERB]() (216; 8% instances), [vi-pos/ADJ]()-[vi-pos/ADJ]() (13; 0% instances), [vi-pos/PROPN]()-[vi-pos/VERB]() (12; 0% instances), [vi-pos/NOUN]()-[vi-pos/NOUN]() (10; 0% instances), [vi-pos/NOUN]()-[vi-pos/ADJ]() (8; 0% instances), [vi-pos/VERB]()-[vi-pos/NOUN]() (3; 0% instances), [vi-pos/ADJ]()-[vi-pos/NOUN]() (2; 0% instances), [vi-pos/X]()-[vi-pos/VERB]() (2; 0% instances), [vi-pos/CCONJ]()-[vi-pos/ADJ]() (1; 0% instances), [vi-pos/CCONJ]()-[vi-pos/VERB]() (1; 0% instances), [vi-pos/NOUN]()-[vi-pos/PROPN]() (1; 0% instances), [vi-pos/NUM]()-[vi-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 xcomp	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 xcomp	color:blue
1	Và	Và	CCONJ	C	_	4	cc	_	_
2	tôi	tôi	PROPN	P	_	4	nsubj	_	_
3	được	được	VERB	V	_	4	aux:pass	_	_
4	cử	cử	VERB	V	_	0	root	_	_
5	sang	sang	VERB	V	_	4	xcomp	_	_
6	VN	VN	NOUN	Np	_	4	obj	_	_
7	để	để	ADP	E	_	8	case	_	_
8	giúp	giúp	VERB	V	_	4	mark	_	_
9	người	người	NOUN	N	_	8	obj	_	_
10	VN	VN	NOUN	Ny	_	9	compound	_	_
11	chống	chống	VERB	V	_	8	iobj	_	_
12	phát xít	phát xít	NOUN	N	_	11	obj	_	_
13	Nhật	Nhật	NOUN	Np	_	12	compound	_	SpaceAfter=No
14	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp	color:blue
1	Phong trào	Phong trào	NOUN	N	_	2	nsubj	_	_
2	lan truyền	lan truyền	VERB	V	_	0	root	_	_
3	mạnh mẽ	mạnh mẽ	ADJ	A	_	2	xcomp	_	_
4	hơn	hơn	X	R	_	3	advmod	_	SpaceAfter=No
5	.	.	PUNCT	.	_	2	punct	_	_

~~~


