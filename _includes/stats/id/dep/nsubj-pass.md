

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Indonesian)

This relation is a language-specific subtype of [nsubj]().

1987 nodes (2%) are attached to their parents as `nsubj:pass`.

1944 instances of `nsubj:pass` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.81177654755913.

The following 23 pairs of parts of speech are connected with `nsubj:pass`: [id-pos/VERB]()-[id-pos/PRON]() (764; 38% instances), [id-pos/VERB]()-[id-pos/NOUN]() (737; 37% instances), [id-pos/VERB]()-[id-pos/PROPN]() (437; 22% instances), [id-pos/ADJ]()-[id-pos/PRON]() (8; 0% instances), [id-pos/NOUN]()-[id-pos/NOUN]() (6; 0% instances), [id-pos/VERB]()-[id-pos/DET]() (5; 0% instances), [id-pos/NOUN]()-[id-pos/PRON]() (4; 0% instances), [id-pos/NOUN]()-[id-pos/PROPN]() (3; 0% instances), [id-pos/PROPN]()-[id-pos/NOUN]() (3; 0% instances), [id-pos/ADJ]()-[id-pos/NOUN]() (2; 0% instances), [id-pos/ADV]()-[id-pos/PRON]() (2; 0% instances), [id-pos/ADV]()-[id-pos/PROPN]() (2; 0% instances), [id-pos/VERB]()-[id-pos/ADJ]() (2; 0% instances), [id-pos/VERB]()-[id-pos/ADV]() (2; 0% instances), [id-pos/VERB]()-[id-pos/NUM]() (2; 0% instances), [id-pos/ADV]()-[id-pos/NOUN]() (1; 0% instances), [id-pos/DET]()-[id-pos/PRON]() (1; 0% instances), [id-pos/NOUN]()-[id-pos/VERB]() (1; 0% instances), [id-pos/PART]()-[id-pos/PRON]() (1; 0% instances), [id-pos/PROPN]()-[id-pos/PROPN]() (1; 0% instances), [id-pos/VERB]()-[id-pos/ADP]() (1; 0% instances), [id-pos/VERB]()-[id-pos/SYM]() (1; 0% instances), [id-pos/VERB]()-[id-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nsubj:pass	color:blue
1	Bau	_	NOUN	_	_	0	root	_	_
2	apakah	_	ADV	_	_	1	advmod	_	_
3	yang	_	PRON	_	_	4	nsubj:pass	_	_
4	tercium	_	VERB	_	_	1	acl	_	_
5	olehku	_	NOUN	_	_	4	obj	_	SpaceAfter=No
6	?	_	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Film	_	NOUN	_	_	3	nsubj:pass	_	_
2	ini	_	DET	_	_	1	det	_	_
3	terdiri	_	VERB	_	_	0	root	_	_
4	dari	_	ADP	_	_	6	case	_	_
5	6	_	NUM	_	NumType=Card	6	nummod	_	_
6	musim	_	NOUN	_	_	3	obl	_	_
7	dengan	_	ADP	_	_	9	case	_	_
8	137	_	NUM	_	NumType=Card	9	nummod	_	_
9	episiode	_	NOUN	_	_	6	nmod	_	SpaceAfter=No
10	.	_	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:pass	color:blue
1	Dingalan	_	PROPN	_	_	2	nsubj:pass	_	_
2	terbagi	_	VERB	_	_	0	root	_	_
3	menjadi	_	VERB	_	_	2	xcomp	_	_
4	11	_	NUM	_	NumType=Card	5	nummod	_	_
5	barangay	_	NOUN	_	_	3	obj	_	SpaceAfter=No
6	,	_	PUNCT	_	_	2	punct	_	_
7	yaitu	_	CCONJ	_	_	2	dep	_	SpaceAfter=No
8	:	_	PUNCT	_	_	2	punct	_	_

~~~


