

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is universal.

394 nodes (0%) are attached to their parents as `cop`.

381 instances of `cop` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.27918781725888.

The following 10 pairs of parts of speech are connected with `cop`: [he-pos/NOUN]()-[he-pos/VERB]() (242; 61% instances), [he-pos/VERB]()-[he-pos/VERB]() (62; 16% instances), [he-pos/ADJ]()-[he-pos/VERB]() (48; 12% instances), [he-pos/PROPN]()-[he-pos/VERB]() (23; 6% instances), [he-pos/PRON]()-[he-pos/VERB]() (8; 2% instances), [he-pos/NOUN]()-[he-pos/PRON]() (4; 1% instances), [he-pos/ADV]()-[he-pos/PRON]() (2; 1% instances), [he-pos/ADV]()-[he-pos/VERB]() (2; 1% instances), [he-pos/AUX]()-[he-pos/VERB]() (2; 1% instances), [he-pos/PROPN]()-[he-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cop	color:blue
1	איובה	_	PROPN	PROPN	_	3	nsubj:cop	_	_
2	היא	_	VERB	VERB	Gender=Fem|Negative=Pos|Number=Sing|Person=3|VerbForm=Part|VerbType=Cop	3	cop	_	_
3	מקום	_	NOUN	NOUN	Gender=Masc|Number=Sing	0	root	_	_
4	לא	_	ADV	ADV	Negative=Neg	6	advmod	_	_
5	-	_	PUNCT	PUNCT	_	6	punct	_	_
6	שגרתי	_	ADJ	ADJ	Gender=Masc|Number=Sing	3	amod	_	_
7	.	_	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 3 cop	color:blue
1	ה	_	DET	DET	PronType=Art	2	det:def	_	_
2	רושם	_	NOUN	NOUN	Gender=Masc|Number=Sing	9	nsubj:cop	_	_
3	הוא	_	VERB	VERB	Gender=Masc|Negative=Pos|Number=Sing|Person=3|VerbForm=Part|VerbType=Cop	9	cop	_	_
4	ש	_	SCONJ	SCONJ	_	9	mark	_	_
5	ה	_	DET	DET	PronType=Art	6	det:def	_	_
6	ממסד	_	NOUN	NOUN	Gender=Masc|Number=Sing	9	nsubj	_	_
7	ה	_	DET	DET	PronType=Art	8	det:def	_	_
8	צרפתי	_	ADJ	ADJ	Gender=Masc|Number=Sing	6	amod	_	_
9	מצפה	_	VERB	VERB	Gender=Masc|HebBinyan=PIEL|Number=Sing|Person=1,2,3|VerbForm=Part	0	root	_	_
10	ש	_	SCONJ	SCONJ	_	11	mark	_	_
11	ימותו	_	VERB	VERB	Gender=Fem,Masc|HebBinyan=PAAL|Number=Plur|Person=3|Tense=Fut	9	ccomp	_	_
12	ב	_	ADP	ADP	_	13	case	_	_
13	שקט	_	NOUN	NOUN	Gender=Masc|Number=Sing	11	nmod	_	_
14	.	_	PUNCT	PUNCT	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 cop	color:blue
1	בעלי	_	NOUN	NOUN	Definite=Red|Gender=Masc|Number=Plur	10	nsubj:cop	_	_
2	ה	_	DET	DET	PronType=Art	3	det:def	_	_
3	השקפה	_	NOUN	NOUN	Gender=Fem|Number=Sing	1	nmod:smixut	_	_
4	מן	_	ADP	ADP	_	6	case	_	_
5	ה	_	DET	DET	PronType=Art	6	det:def	_	_
6	סוג	_	NOUN	NOUN	Gender=Masc|Number=Sing	3	nmod	_	_
7	ה	_	DET	DET	PronType=Art	8	det:def	_	_
8	שלישי	_	NUM	NUM	Gender=Masc|Number=Sing	6	amod	_	_
9	הם	_	VERB	VERB	Gender=Masc|Negative=Pos|Number=Plur|Person=3|VerbForm=Part|VerbType=Cop	10	cop	_	_
10	מעטים	_	ADJ	ADJ	Gender=Masc|Number=Plur	0	root	_	_
11	.	_	PUNCT	PUNCT	_	10	punct	_	_

~~~


