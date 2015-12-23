

--------------------------------------------------------------------------------

## Treebank Statistics (UD_German)

This relation is universal.

8979 nodes (3%) are attached to their parents as `cc`.

8639 instances of `cc` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.63960351932286.

The following 32 pairs of parts of speech are connected with `cc`: [de-pos/NOUN]()-[de-pos/CONJ]() (3680; 41% instances), [de-pos/VERB]()-[de-pos/CONJ]() (2409; 27% instances), [de-pos/PROPN]()-[de-pos/CONJ]() (1342; 15% instances), [de-pos/ADJ]()-[de-pos/CONJ]() (964; 11% instances), [de-pos/NUM]()-[de-pos/CONJ]() (188; 2% instances), [de-pos/PROPN]()-[de-pos/PROPN]() (131; 1% instances), [de-pos/ADV]()-[de-pos/CONJ]() (77; 1% instances), [de-pos/ADP]()-[de-pos/CONJ]() (43; 0% instances), [de-pos/PRON]()-[de-pos/CONJ]() (35; 0% instances), [de-pos/PROPN]()-[de-pos/NOUN]() (21; 0% instances), [de-pos/NOUN]()-[de-pos/X]() (15; 0% instances), [de-pos/NOUN]()-[de-pos/PART]() (10; 0% instances), [de-pos/NOUN]()-[de-pos/ADV]() (9; 0% instances), [de-pos/AUX]()-[de-pos/CONJ]() (8; 0% instances), [de-pos/VERB]()-[de-pos/ADV]() (7; 0% instances), [de-pos/DET]()-[de-pos/CONJ]() (6; 0% instances), [de-pos/ADJ]()-[de-pos/ADV]() (5; 0% instances), [de-pos/CONJ]()-[de-pos/CONJ]() (4; 0% instances), [de-pos/NOUN]()-[de-pos/PRON]() (4; 0% instances), [de-pos/NOUN]()-[de-pos/PUNCT]() (3; 0% instances), [de-pos/PART]()-[de-pos/CONJ]() (3; 0% instances), [de-pos/SCONJ]()-[de-pos/CONJ]() (3; 0% instances), [de-pos/ADJ]()-[de-pos/X]() (2; 0% instances), [de-pos/ADP]()-[de-pos/X]() (2; 0% instances), [de-pos/ADJ]()-[de-pos/PART]() (1; 0% instances), [de-pos/NUM]()-[de-pos/X]() (1; 0% instances), [de-pos/PRON]()-[de-pos/X]() (1; 0% instances), [de-pos/PROPN]()-[de-pos/X]() (1; 0% instances), [de-pos/VERB]()-[de-pos/PART]() (1; 0% instances), [de-pos/VERB]()-[de-pos/VERB]() (1; 0% instances), [de-pos/X]()-[de-pos/CONJ]() (1; 0% instances), [de-pos/X]()-[de-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 cc	color:blue
1	Spaß	_	NOUN	_	_	0	root	_	_
2	,	_	PUNCT	_	_	1	punct	_	_
3	Unterhaltung	_	NOUN	_	_	1	conj	_	_
4	,	_	PUNCT	_	_	1	punct	_	_
5	gutes	_	ADJ	_	_	6	amod	_	_
6	Bier	_	NOUN	_	_	1	conj	_	_
7	und	_	CONJ	_	_	1	cc	_	_
8	gutes	_	ADJ	_	_	9	amod	_	_
9	Essen	_	NOUN	_	_	1	conj	_	_
10	.	_	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 cc	color:blue
1	Wurde	_	AUX	_	_	8	auxpass	_	_
2	sehr	_	ADV	_	_	3	advmod	_	_
3	gut	_	ADV	_	_	8	advmod	_	_
4	von	_	ADP	_	_	6	case	_	_
5	der	_	DET	_	_	6	det	_	_
6	Kanzlei	_	NOUN	_	_	8	nmod	_	_
7	Singewald	_	PROPN	_	_	6	appos	_	_
8	verteitigt	_	VERB	_	_	0	root	_	_
9	und	_	CONJ	_	_	8	cc	_	_
10	gewonnen	_	VERB	_	_	8	conj	_	_
11	.	_	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 cc	color:blue
1	Liebe	_	ADJ	_	_	2	amod	_	_
2	Grüße	_	NOUN	_	_	0	root	_	_
3	Lutz	_	PROPN	_	_	2	appos	_	_
4	und	_	CONJ	_	_	3	cc	_	_
5	Heike	_	PROPN	_	_	3	conj	_	_

~~~


