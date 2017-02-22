

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Vietnamese)

This relation is universal.

125 nodes (0%) are attached to their parents as `dep`.

70 instances of `dep` (56%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.216.

The following 12 pairs of parts of speech are connected with `dep`: [vi-pos/VERB]()-[vi-pos/X]() (60; 48% instances), [vi-pos/NOUN]()-[vi-pos/X]() (38; 30% instances), [vi-pos/VERB]()-[vi-pos/NUM]() (8; 6% instances), [vi-pos/NOUN]()-[vi-pos/PUNCT]() (7; 6% instances), [vi-pos/VERB]()-[vi-pos/NOUN]() (3; 2% instances), [vi-pos/ADJ]()-[vi-pos/X]() (2; 2% instances), [vi-pos/NOUN]()-[vi-pos/NUM]() (2; 2% instances), [vi-pos/ADJ]()-[vi-pos/NOUN]() (1; 1% instances), [vi-pos/ADJ]()-[vi-pos/NUM]() (1; 1% instances), [vi-pos/PROPN]()-[vi-pos/X]() (1; 1% instances), [vi-pos/PUNCT]()-[vi-pos/NOUN]() (1; 1% instances), [vi-pos/VERB]()-[vi-pos/VERB]() (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 dep	color:blue
1	đánh	đánh	VERB	V	_	0	root	_	_
2	bóng bàn	bóng bàn	NOUN	N	_	1	obj	_	_
3	thì	thì	CCONJ	C	_	1	cc	_	_
4	luyện	luyện	VERB	V	_	1	ccomp	_	_
5	mắt	mắt	NOUN	N	_	4	obj	_	_
6	tinh anh	tinh anh	ADJ	A	_	5	amod	_	_
7	như thế nào	như thế nào	X	X	_	4	dep	_	SpaceAfter=No
8	?	?	PUNCT	?	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 dep	color:blue
1	đời	đời	NOUN	N	_	0	root	_	_
2	tư	tư	ADJ	A	_	1	amod	_	_
3	vận động viên	vận động viên	NOUN	N	_	1	compound	_	_
4	bóng bàn	bóng bàn	NOUN	N	_	3	compound	_	_
5	giỏi	giỏi	VERB	V	_	6	xcomp	_	_
6	nhất	nhất	ADJ	A	_	3	amod	_	_
7	Trung Quốc	Trung Quốc	NOUN	Np	_	6	obj	_	_
8	ra sao	ra sao	X	X	_	1	dep	_	SpaceAfter=No
9	?	?	PUNCT	?	_	1	punct	_	SpaceAfter=No
10	...	...	PUNCT	...	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 dep	color:blue
1	chị	chị	NOUN	Nc	_	2	compound	_	_
2	Hòa	Hòa	NOUN	Np	_	3	nsubj	_	_
3	có	có	VERB	V	_	0	root	_	_
4	năm	năm	NUM	M	NumType=Card	5	nummod	_	_
5	con	con	NOUN	N	_	3	obj	_	_
6	thì	thì	CCONJ	C	_	3	cc	_	_
7	cả	cả	PROPN	P	_	8	det	_	_
8	năm	năm	NUM	M	NumType=Card	10	dep	_	_
9	chỉ	chỉ	X	R	_	10	advmod	_	_
10	có	có	VERB	V	_	3	parataxis	_	_
11	lớn	lớn	ADJ	A	_	10	xcomp	_	_
12	mà	mà	CCONJ	C	_	14	cc	_	_
13	không	không	X	R	Polarity=Neg	14	advmod	_	_
14	có	có	VERB	V	_	10	conj	_	_
15	khôn	khôn	ADJ	A	_	14	xcomp	_	SpaceAfter=No
16	.	.	PUNCT	.	_	3	punct	_	_

~~~


