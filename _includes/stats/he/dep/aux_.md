

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is universal.
There are 1 language-specific subtypes of `aux`: [aux:q]().

773 nodes (0%) are attached to their parents as `aux`.

714 instances of `aux` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.88615782664942.

The following 9 pairs of parts of speech are connected with `aux`: [he-pos/NOUN]()-[he-pos/VERB]() (308; 40% instances), [he-pos/ADJ]()-[he-pos/VERB]() (190; 25% instances), [he-pos/VERB]()-[he-pos/VERB]() (144; 19% instances), [he-pos/AUX]()-[he-pos/VERB]() (104; 13% instances), [he-pos/PROPN]()-[he-pos/VERB]() (13; 2% instances), [he-pos/ADV]()-[he-pos/VERB]() (6; 1% instances), [he-pos/PRON]()-[he-pos/VERB]() (6; 1% instances), [he-pos/NUM]()-[he-pos/VERB]() (1; 0% instances), [he-pos/VERB]()-[he-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 aux	color:blue
1	ה	_	DET	DET	PronType=Art	2	det:def	_	_
2	משבר	_	NOUN	NOUN	Gender=Masc|Number=Sing	10	nsubj	_	_
3	ב	_	ADP	ADP	_	5	case	_	_
4	ה_	_	DET	DET	PronType=Art	5	det:def	_	_
5	מפרץ	_	NOUN	NOUN	Gender=Masc|Number=Sing	2	nmod	_	_
6	ה	_	DET	DET	PronType=Art	7	det:def	_	_
7	פרסי	_	ADJ	ADJ	Gender=Masc|Number=Sing	5	amod	_	_
8	לא	_	ADV	ADV	Negative=Neg	10	neg	_	_
9	היה	_	VERB	VERB	Gender=Masc|Negative=Pos|Number=Sing|Person=3|Tense=Past|VerbType=Cop	10	aux	_	_
10	נושא	_	NOUN	NOUN	Definite=Red|Gender=Masc|Number=Sing	0	root	_	_
11	בחירות	_	NOUN	NOUN	Gender=Fem|Number=Plur	10	nmod:smixut	_	_
12	מרכזי	_	ADJ	ADJ	Gender=Masc|Number=Sing	10	amod	_	_
13	ב	_	ADP	ADP	_	14	case	_	_
14	איובה	_	PROPN	PROPN	_	10	nmod	_	_
15	.	_	PUNCT	PUNCT	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
1	מסתבר	_	VERB	VERB	Gender=Masc|HebBinyan=HITPAEL|Number=Sing|Person=1,2,3|VerbForm=Part	0	root	_	_
2	ש	_	SCONJ	SCONJ	_	4	mark	_	_
3	הייתי	_	VERB	VERB	Gender=Fem,Masc|Negative=Pos|Number=Sing|Person=1|Tense=Past|VerbType=Cop	4	aux	_	_
4	תמים	_	ADJ	ADJ	Gender=Masc|Number=Sing	1	advcl	_	_
5	.	_	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 aux	color:blue
1	נראה	_	VERB	VERB	Gender=Masc|HebBinyan=NIFAL|Number=Sing|Person=1,2,3|VerbForm=Part	0	root	_	_
2	היה	_	VERB	VERB	Gender=Masc|Negative=Pos|Number=Sing|Person=3|Tense=Past|VerbType=Cop	1	aux	_	_
3	ש	_	SCONJ	SCONJ	_	5	mark	_	_
4	זה	_	PRON	PRON	Gender=Masc|Number=Sing|Person=3	5	nsubj	_	_
5	זיווג	_	NOUN	NOUN	Gender=Masc|Number=Sing	1	ccomp	_	_
6	טוב	_	ADJ	ADJ	Gender=Masc|Number=Sing	5	amod	_	_
7	.	_	PUNCT	PUNCT	_	1	punct	_	_

~~~


