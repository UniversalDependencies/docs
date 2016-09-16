

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Chinese)

This relation is a language-specific subtype of [case]().
There are also 3 other language-specific subtypes of `case`: [case:aspect](), [case:pref](), [case:suff]().

3283 nodes (3%) are attached to their parents as `case:dec`.

3283 instances of `case:dec` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.50137069753274.

The following 10 pairs of parts of speech are connected with `case:dec`: [zh-pos/NOUN]()-[zh-pos/PART]() (1788; 54% instances), [zh-pos/PROPN]()-[zh-pos/PART]() (518; 16% instances), [zh-pos/PART]()-[zh-pos/PART]() (429; 13% instances), [zh-pos/PRON]()-[zh-pos/PART]() (256; 8% instances), [zh-pos/ADP]()-[zh-pos/PART]() (159; 5% instances), [zh-pos/NUM]()-[zh-pos/PART]() (40; 1% instances), [zh-pos/ADJ]()-[zh-pos/PART]() (31; 1% instances), [zh-pos/X]()-[zh-pos/PART]() (29; 1% instances), [zh-pos/DET]()-[zh-pos/PART]() (27; 1% instances), [zh-pos/VERB]()-[zh-pos/PART]() (6; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 case:dec	color:blue
1	大	_	ADV	RB	_	2	advmod	_	_
2	多數	_	ADJ	JJ	_	6	det	_	_
3	的	_	PART	DEC	Case=Gen	2	case:dec	_	_
4	加長	_	VERB	VV	_	5	case:suff	_	_
5	型	_	PART	SFN	_	6	nmod	_	_
6	禮車	_	NOUN	NN	_	11	nsubj	_	_
7	則是	_	VERB	VC	_	11	cop	_	_
8	租車	_	NOUN	NN	_	9	nmod	_	_
9	公司	_	NOUN	NN	_	11	det	_	_
10	的	_	PART	DEC	Case=Gen	9	case:dec	_	_
11	財產	_	NOUN	NN	_	0	root	_	_
12	.	_	PUNCT	.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 case:dec	color:blue
1	但是	_	ADV	RB	_	9	mark	_	_
2	迪士尼	_	PROPN	NNP	_	5	det	_	_
3	的	_	PART	DEC	Case=Gen	2	case:dec	_	_
4	公主	_	NOUN	NN	_	5	case:suff	_	_
5	們	_	PART	SFN	Number=Plur	9	nsubj	_	_
6	不會	_	AUX	MD	_	9	aux	_	_
7	都	_	ADV	RB	_	9	mark	_	_
8	太	_	ADV	RB	_	9	advmod	_	_
9	侷限	_	VERB	VV	_	0	root	_	_
10	於	_	VERB	VV	_	9	mark	_	_
11	一	_	NUM	CD	_	12	nummod	_	_
12	個	_	NOUN	NNB	_	13	nmod	_	_
13	範圍	_	NOUN	NN	_	9	dobj	_	_
14	之內	_	ADP	IN	_	13	acl	_	_
15	了	_	X	UH	_	9	discourse	_	_
16	嗎	_	X	UH	Mood=Inter	9	discourse	_	_
17	?	_	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 case:dec	color:blue
1	他	_	PRON	PRP	Person=3	7	nsubj	_	_
2	花費	_	VERB	VV	_	7	acl	_	_
3	了	_	PART	AS	Aspect=Perf	2	case:aspect	_	_
4	許多	_	NUM	CD	_	5	nummod	_	_
5	時間	_	NOUN	NN	_	2	dobj	_	_
6	來	_	ADV	RB	_	7	mark	_	_
7	比較	_	VERB	VV	_	0	root	_	_
8	加拿大	_	PROPN	NNP	_	13	nmod	_	_
9	地質	_	NOUN	NN	_	13	nmod	_	_
10	調查	_	VERB	VV	_	11	case:suff	_	_
11	局	_	PART	SFN	_	13	nmod	_	_
12	博物	_	NOUN	NN	_	13	case:suff	_	_
13	館	_	PART	SFN	_	17	det	_	_
14	中	_	NOUN	NN	_	13	acl	_	_
15	的	_	PART	DEC	Case=Gen	13	case:dec	_	_
16	恐龍	_	NOUN	NN	_	17	nmod	_	_
17	化石	_	NOUN	NN	_	7	dobj	_	_
18	.	_	PUNCT	.	_	7	punct	_	_

~~~


