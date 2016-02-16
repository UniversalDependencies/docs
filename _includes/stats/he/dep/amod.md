

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is universal.

7570 nodes (5%) are attached to their parents as `amod`.

7570 instances of `amod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.76155878467635.

The following 23 pairs of parts of speech are connected with `amod`: [he-pos/NOUN]()-[he-pos/ADJ]() (6363; 84% instances), [he-pos/NOUN]()-[he-pos/PRON]() (575; 8% instances), [he-pos/NOUN]()-[he-pos/VERB]() (219; 3% instances), [he-pos/NOUN]()-[he-pos/NUM]() (202; 3% instances), [he-pos/PROPN]()-[he-pos/ADJ]() (63; 1% instances), [he-pos/NOUN]()-[he-pos/NOUN]() (55; 1% instances), [he-pos/VERB]()-[he-pos/ADJ]() (29; 0% instances), [he-pos/NUM]()-[he-pos/NUM]() (13; 0% instances), [he-pos/ADJ]()-[he-pos/ADJ]() (12; 0% instances), [he-pos/NOUN]()-[he-pos/ADV]() (11; 0% instances), [he-pos/X]()-[he-pos/ADJ]() (7; 0% instances), [he-pos/NUM]()-[he-pos/ADJ]() (4; 0% instances), [he-pos/NOUN]()-[he-pos/DET]() (3; 0% instances), [he-pos/ADJ]()-[he-pos/NOUN]() (2; 0% instances), [he-pos/NOUN]()-[he-pos/PROPN]() (2; 0% instances), [he-pos/PROPN]()-[he-pos/NOUN]() (2; 0% instances), [he-pos/PROPN]()-[he-pos/VERB]() (2; 0% instances), [he-pos/ADJ]()-[he-pos/VERB]() (1; 0% instances), [he-pos/DET]()-[he-pos/ADJ]() (1; 0% instances), [he-pos/NOUN]()-[he-pos/SCONJ]() (1; 0% instances), [he-pos/NUM]()-[he-pos/PRON]() (1; 0% instances), [he-pos/PRON]()-[he-pos/ADJ]() (1; 0% instances), [he-pos/PUNCT]()-[he-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 amod	color:blue
1	ה	_	DET	DET	PronType=Art	2	det:def	_	_
2	מוח	_	NOUN	NOUN	Gender=Masc|Number=Sing	3	nsubj	_	_
3	מתפלץ	_	VERB	VERB	Gender=Masc|HebBinyan=HITPAEL|Number=Sing|Person=1,2,3|VerbForm=Part	0	root	_	_
4	לא	_	ADV	ADV	Negative=Neg	5	neg	_	_
5	רק	_	ADV	ADV	_	6	advmod	_	_
6	מ	_	ADP	ADP	_	8	case	_	_
7	ה	_	DET	DET	PronType=Art	8	det:def	_	_
8	תופעה	_	NOUN	NOUN	Gender=Fem|Number=Sing	3	nmod	_	_
9	ה	_	DET	DET	PronType=Art	10	det:def	_	_
10	מבישה	_	ADJ	ADJ	Gender=Fem|Number=Sing	8	amod	_	_
11	אלא	_	CONJ	CONJ	_	8	cc	_	_
12	גם	_	ADV	ADV	_	13	advmod	_	_
13	מ	_	ADP	ADP	_	14	case	_	_
14	דרכי	_	NOUN	NOUN	Definite=Red|Gender=Fem|Number=Plur	8	conj	_	_
15	ה	_	DET	DET	PronType=Art	16	det:def	_	_
16	הערמה	_	NOUN	NOUN	Gender=Fem|Number=Sing	14	nmod:smixut	_	_
17	.	_	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 amod	color:blue
1	אבקשכם	_	VERB	VERB	_	0	root	_	_
2	אתם_	_	PRON	PRON	Case=Acc|Gender=Masc|Number=Plur|Person=2|PronType=Prs	1	dobj	_	_
3	לשלוח	_	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf	1	xcomp	_	_
4	אלי	_	ADP	ADP	_	5	case	_	_
5	אני_	_	PRON	PRON	Gender=Fem,Masc|Number=Sing|Person=1|PronType=Prs	3	nmod	_	_
6	חומר	_	NOUN	NOUN	Gender=Masc|Number=Sing	3	dobj	_	_
7	זה	_	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Dem	6	amod	_	_
8	.	_	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 amod	color:blue
1	ערוך	_	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Mood=Imp|Number=Sing|Person=2	0	root	_	_
2	בדיקה	_	NOUN	NOUN	Gender=Fem|Number=Sing	1	dobj	_	_
3	מחודשת	_	ADJ	ADJ	Gender=Fem|Number=Sing	2	amod	_	_
4	,	_	PUNCT	PUNCT	_	2	punct	_	_
5	נוקבת	_	VERB	VERB	Gender=Fem|HebBinyan=PAAL|Number=Sing|Person=1,2,3|VerbForm=Part	2	amod	_	_
6	ו	_	CONJ	CONJ	_	5	cc	_	_
7	קטלנית	_	ADJ	ADJ	Gender=Fem|Number=Sing	5	conj	_	_
8	,	_	PUNCT	PUNCT	_	1	punct	_	_
9	ל	_	ADP	ADP	_	10	case	_	_
10	דוגמות	_	NOUN	NOUN	Gender=Fem|Number=Plur	1	nmod	_	_
11	ליברליות	_	ADJ	ADJ	Gender=Fem|Number=Plur	10	amod	_	_
12	עייפות	_	ADJ	ADJ	Gender=Fem|Number=Plur	10	amod	_	_
13	.	_	PUNCT	PUNCT	_	1	punct	_	_

~~~


