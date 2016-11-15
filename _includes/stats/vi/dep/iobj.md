

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Vietnamese)

This relation is universal.

42 nodes (0%) are attached to their parents as `iobj`.

42 instances of `iobj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.28571428571429.

The following 5 pairs of parts of speech are connected with `iobj`: [vi-pos/VERB]()-[vi-pos/VERB]() (25; 60% instances), [vi-pos/VERB]()-[vi-pos/NOUN]() (9; 21% instances), [vi-pos/VERB]()-[vi-pos/ADJ]() (4; 10% instances), [vi-pos/NOUN]()-[vi-pos/NOUN]() (2; 5% instances), [vi-pos/NOUN]()-[vi-pos/VERB]() (2; 5% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 iobj	color:blue
1	bắt	bắt	VERB	V	_	0	root	_	_
2	đám	đám	NOUN	Nc	_	1	dobj	_	_
3	cháy	cháy	VERB	V	_	2	xcomp	_	_
4	nói	nói	VERB	V	_	1	iobj	_	_
5	lên	lên	X	R	_	4	advmod	_	_
6	sự_thật	sự_thật	NOUN	N	_	4	dobj	_	_
7	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 iobj	color:blue
1	tập_trung	tập_trung	VERB	V	_	0	root	_	_
2	khai_thác	khai_thác	VERB	V	_	1	xcomp	_	_
3	các	các	DET	L	_	4	det	_	_
4	nguồn	nguồn	NOUN	N	_	2	dobj	_	_
5	vốn	vốn	NOUN	N	_	4	compound	_	_
6	cho	cho	ADP	E	_	7	case	_	_
7	ngân_sách	ngân_sách	NOUN	N	_	2	iobj	_	_
8	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 11 iobj	color:blue
1	có	có	VERB	V	_	5	nmod	_	_
2	bữa	bữa	NOUN	N	_	1	dobj	_	_
3	mẹ	mẹ	NOUN	N	_	5	nsubj	_	_
4	Tùng	Tùng	NOUN	Np	_	3	compound	_	_
5	mời	mời	VERB	V	_	0	root	_	_
6	cả	cả	PROPN	P	_	7	det	_	_
7	thầy_giáo	thầy_giáo	NOUN	N	_	5	dobj	_	_
8	và	và	SCONJ	CC	_	7	cc	_	_
9	hai	hai	NUM	M	_	7	nummod	_	_
10	thằng	thằng	PROPN	P	_	9	det	_	_
11	cùng	cùng	ADJ	A	_	5	iobj	_	_
12	ăn	ăn	VERB	V	_	11	xcomp	_	_
13	tối	tối	NOUN	N	_	11	dobj	_	_
14	.	.	PUNCT	.	_	5	punct	_	_

~~~


