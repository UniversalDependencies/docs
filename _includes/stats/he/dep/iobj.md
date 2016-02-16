

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is universal.

3669 nodes (2%) are attached to their parents as `iobj`.

3474 instances of `iobj` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.45325701826111.

The following 24 pairs of parts of speech are connected with `iobj`: [he-pos/VERB]()-[he-pos/NOUN]() (2660; 72% instances), [he-pos/VERB]()-[he-pos/PRON]() (413; 11% instances), [he-pos/VERB]()-[he-pos/PROPN]() (190; 5% instances), [he-pos/VERB]()-[he-pos/VERB]() (120; 3% instances), [he-pos/VERB]()-[he-pos/ADJ]() (59; 2% instances), [he-pos/ADJ]()-[he-pos/NOUN]() (57; 2% instances), [he-pos/AUX]()-[he-pos/NOUN]() (50; 1% instances), [he-pos/NOUN]()-[he-pos/NOUN]() (31; 1% instances), [he-pos/VERB]()-[he-pos/ADV]() (24; 1% instances), [he-pos/VERB]()-[he-pos/NUM]() (16; 0% instances), [he-pos/AUX]()-[he-pos/PRON]() (15; 0% instances), [he-pos/VERB]()-[he-pos/AUX]() (7; 0% instances), [he-pos/ADJ]()-[he-pos/PRON]() (6; 0% instances), [he-pos/ADJ]()-[he-pos/VERB]() (4; 0% instances), [he-pos/ADV]()-[he-pos/PRON]() (3; 0% instances), [he-pos/NOUN]()-[he-pos/PRON]() (3; 0% instances), [he-pos/ADJ]()-[he-pos/PROPN]() (2; 0% instances), [he-pos/AUX]()-[he-pos/PROPN]() (2; 0% instances), [he-pos/NOUN]()-[he-pos/PROPN]() (2; 0% instances), [he-pos/AUX]()-[he-pos/VERB]() (1; 0% instances), [he-pos/NOUN]()-[he-pos/ADV]() (1; 0% instances), [he-pos/NOUN]()-[he-pos/NUM]() (1; 0% instances), [he-pos/VERB]()-[he-pos/DET]() (1; 0% instances), [he-pos/VERB]()-[he-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 iobj	color:blue
1	כאן	_	ADV	ADV	_	4	advmod	_	_
2	הוא	_	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
3	גם	_	ADV	ADV	_	4	advmod	_	_
4	נתקל	_	VERB	VERB	Gender=Masc|HebBinyan=NIFAL|Number=Sing|Person=3|Tense=Past	0	root	_	_
5	ב	_	ADP	ADP	_	7	case	_	_
6	ה_	_	DET	DET	PronType=Art	7	det:def	_	_
7	הפגנה	_	NOUN	NOUN	Gender=Fem|Number=Sing	4	iobj	_	_
8	ה	_	DET	DET	PronType=Art	9	det:def	_	_
9	ראשונה	_	ADJ	ADJ	Gender=Fem|Number=Sing	7	amod	_	_
10	נגד	_	ADP	ADP	_	11	case	_	_
11	מלחמה	_	NOUN	NOUN	Gender=Fem|Number=Sing	7	nmod	_	_
12	ב	_	ADP	ADP	_	14	case	_	_
13	ה_	_	DET	DET	PronType=Art	14	det:def	_	_
14	מפרץ	_	NOUN	NOUN	Gender=Masc|Number=Sing	11	nmod	_	_
15	ה	_	DET	DET	PronType=Art	16	det:def	_	_
16	פרסי	_	ADJ	ADJ	Gender=Masc|Number=Sing	14	amod	_	_
17	.	_	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 iobj	color:blue
1	איש	_	NOUN	NOUN	Gender=Masc|Number=Sing	3	nsubj	_	_
2	לא	_	ADV	ADV	Negative=Neg	3	neg	_	_
3	התכוון	_	VERB	VERB	Gender=Masc|HebBinyan=HITPAEL|Number=Sing|Person=3|Tense=Past	0	root	_	_
4	ל	_	ADP	ADP	_	5	case	_	_
5	כך	_	PRON	PRON	Person=3|PronType=Dem	3	iobj	_	_
6	.	_	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 iobj	color:blue
1	ה	_	DET	DET	PronType=Art	2	det:def	_	_
2	קונסוליה	_	NOUN	NOUN	Gender=Fem|Number=Sing	5	nsubj	_	_
3	ב	_	ADP	ADP	_	4	case	_	_
4	שיקאגו	_	PROPN	PROPN	_	2	nmod	_	_
5	הבריקה	_	VERB	VERB	Gender=Fem|HebBinyan=HIFIL|Number=Sing|Person=3|Tense=Past	0	root	_	_
6	ל	_	ADP	ADP	_	7	case	_	_
7	ירושלים	_	PROPN	PROPN	_	5	iobj	_	_
8	.	_	PUNCT	PUNCT	_	5	punct	_	_

~~~


