

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is universal.

374 nodes (0%) are attached to their parents as `cop`.

361 instances of `cop` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.32352941176471.

The following 10 pairs of parts of speech are connected with `cop`: [he-pos/NOUN]()-[he-pos/VERB]() (225; 60% instances), [he-pos/VERB]()-[he-pos/VERB]() (60; 16% instances), [he-pos/ADJ]()-[he-pos/VERB]() (47; 13% instances), [he-pos/PROPN]()-[he-pos/VERB]() (23; 6% instances), [he-pos/PRON]()-[he-pos/VERB]() (8; 2% instances), [he-pos/NOUN]()-[he-pos/PRON]() (4; 1% instances), [he-pos/ADV]()-[he-pos/PRON]() (2; 1% instances), [he-pos/ADV]()-[he-pos/VERB]() (2; 1% instances), [he-pos/AUX]()-[he-pos/VERB]() (2; 1% instances), [he-pos/PROPN]()-[he-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cop	color:blue
1	איובה	איובה	PROPN	PROPN	_	3	nsubj:cop	_	_
2	היא	הוא	VERB	VERB	Gender=Fem|Number=Sing|Person=3|Polarity=Pos|VerbForm=Part|VerbType=Cop	3	cop	_	_
3	מקום	מקום	NOUN	NOUN	Gender=Masc|Number=Sing	0	root	_	_
4	לא	לא	ADV	ADV	Polarity=Neg	6	advmod	_	_
5	-	_	PUNCT	PUNCT	_	6	punct	_	_
6	שגרתי	שגרתי	ADJ	ADJ	Gender=Masc|Number=Sing	3	amod	_	_
7	.	_	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 3 cop	color:blue
1	ה	ה	DET	DET	PronType=Art	2	det:def	_	_
2	רושם	רושם	NOUN	NOUN	Gender=Masc|Number=Sing	9	nsubj:cop	_	_
3	הוא	הוא	VERB	VERB	Gender=Masc|Number=Sing|Person=3|Polarity=Pos|VerbForm=Part|VerbType=Cop	9	cop	_	_
4	ש	ש	SCONJ	SCONJ	_	9	mark	_	_
5	ה	ה	DET	DET	PronType=Art	6	det:def	_	_
6	ממסד	ממסד	NOUN	NOUN	Gender=Masc|Number=Sing	9	nsubj	_	_
7	ה	ה	DET	DET	PronType=Art	8	det:def	_	_
8	צרפתי	צרפתי	ADJ	ADJ	Gender=Masc|Number=Sing	6	amod	_	_
9	מצפה	ציפה	VERB	VERB	Gender=Masc|HebBinyan=PIEL|Number=Sing|Person=1,2,3|VerbForm=Part|Voice=Act	0	root	_	_
10	ש	ש	SCONJ	SCONJ	_	11	mark	_	_
11	ימותו	מת	VERB	VERB	Gender=Fem,Masc|HebBinyan=PAAL|Number=Plur|Person=3|Tense=Fut|Voice=Act	9	ccomp	_	_
12	ב	ב	ADP	ADP	_	13	case	_	_
13	שקט	שקט	NOUN	NOUN	Gender=Masc|Number=Sing	11	obl	_	_
14	.	_	PUNCT	PUNCT	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 cop	color:blue
1	בעלי	בעל	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Plur	10	nsubj:cop	_	_
2	ה	ה	DET	DET	PronType=Art	3	det:def	_	_
3	השקפה	השקפה	NOUN	NOUN	Gender=Fem|Number=Sing	1	compound:smixut	_	_
4	מן	מן	ADP	ADP	_	6	case	_	_
5	ה	ה	DET	DET	PronType=Art	6	det:def	_	_
6	סוג	סוג	NOUN	NOUN	Gender=Masc|Number=Sing	3	nmod	_	_
7	ה	ה	DET	DET	PronType=Art	8	det:def	_	_
8	שלישי	שלישי	NUM	NUM	Gender=Masc|Number=Sing	6	amod	_	_
9	הם	הוא	VERB	VERB	Gender=Masc|Number=Plur|Person=3|Polarity=Pos|VerbForm=Part|VerbType=Cop	10	cop	_	_
10	מעטים	מעט	ADJ	ADJ	Gender=Masc|Number=Plur	0	root	_	_
11	.	_	PUNCT	PUNCT	_	10	punct	_	_

~~~


