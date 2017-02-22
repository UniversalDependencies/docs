

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Indonesian)

This relation is universal.

1237 nodes (1%) are attached to their parents as `xcomp`.

1114 instances of `xcomp` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.05416329830234.

The following 22 pairs of parts of speech are connected with `xcomp`: [id-pos/VERB]()-[id-pos/VERB]() (1041; 84% instances), [id-pos/VERB]()-[id-pos/ADJ]() (99; 8% instances), [id-pos/NOUN]()-[id-pos/VERB]() (20; 2% instances), [id-pos/VERB]()-[id-pos/ADV]() (16; 1% instances), [id-pos/VERB]()-[id-pos/NOUN]() (13; 1% instances), [id-pos/NOUN]()-[id-pos/ADJ]() (12; 1% instances), [id-pos/ADJ]()-[id-pos/VERB]() (8; 1% instances), [id-pos/PROPN]()-[id-pos/VERB]() (6; 0% instances), [id-pos/PROPN]()-[id-pos/ADJ]() (4; 0% instances), [id-pos/ADV]()-[id-pos/VERB]() (3; 0% instances), [id-pos/NOUN]()-[id-pos/NOUN]() (3; 0% instances), [id-pos/ADJ]()-[id-pos/ADJ]() (2; 0% instances), [id-pos/CCONJ]()-[id-pos/VERB]() (1; 0% instances), [id-pos/NUM]()-[id-pos/VERB]() (1; 0% instances), [id-pos/PRON]()-[id-pos/ADJ]() (1; 0% instances), [id-pos/PRON]()-[id-pos/VERB]() (1; 0% instances), [id-pos/PROPN]()-[id-pos/PROPN]() (1; 0% instances), [id-pos/VERB]()-[id-pos/ADP]() (1; 0% instances), [id-pos/VERB]()-[id-pos/DET]() (1; 0% instances), [id-pos/VERB]()-[id-pos/PART]() (1; 0% instances), [id-pos/VERB]()-[id-pos/PRON]() (1; 0% instances), [id-pos/VERB]()-[id-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 xcomp	color:blue
1	Liburan	_	NOUN	_	_	4	nsubj	_	_
2	yang	_	PRON	_	_	3	nsubj	_	_
3	indah	_	ADJ	_	_	1	amod	_	_
4	mendadak	_	VERB	_	_	0	root	_	_
5	menjadi	_	VERB	_	_	4	xcomp	_	_
6	penuh	_	ADJ	_	_	5	obj	_	_
7	darah	_	NOUN	_	_	6	compound	_	SpaceAfter=No
8	.	_	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 xcomp	color:blue
1	Asal	_	NOUN	_	_	7	nsubj:pass	_	_
2	-	_	PUNCT	_	_	1	punct	_	_
3	usulnya	_	NOUN	_	_	1	fixed	_	_
4	tari	_	NOUN	_	_	1	det	_	_
5	ini	_	DET	_	_	1	det	_	_
6	tidak	_	PART	_	Polarity=Neg	7	advmod	_	_
7	diketahui	_	VERB	_	_	0	root	_	_
8	secara	_	ADP	_	_	9	case	_	_
9	jelas	_	ADJ	_	_	7	xcomp	_	SpaceAfter=No
10	.	_	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 xcomp	color:blue
1	Artikel	_	NOUN	_	_	3	nsubj	_	_
2	berikut	_	DET	_	_	1	det	_	_
3	menjelaskan	_	VERB	_	_	0	root	_	_
4	proses	_	NOUN	_	_	3	obj	_	_
5	kualifikasi	_	NOUN	_	_	4	compound	_	_
6	menuju	_	VERB	_	_	4	xcomp	_	_
7	babak	_	NOUN	_	_	6	obj	_	_
8	utama	_	ADJ	_	_	7	amod	_	_
9	SAP	_	PROPN	_	_	7	flat	_	_
10	Open	_	PROPN	_	_	9	flat	_	_
11	2011	_	NUM	_	NumType=Card	10	nummod	_	SpaceAfter=No
12	.	_	PUNCT	_	_	3	punct	_	_

~~~


