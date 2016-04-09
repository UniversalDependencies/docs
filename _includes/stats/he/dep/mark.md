

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is universal.

5310 nodes (3%) are attached to their parents as `mark`.

5310 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.94821092278719.

The following 28 pairs of parts of speech are connected with `mark`: [he-pos/VERB]()-[he-pos/SCONJ]() (3923; 74% instances), [he-pos/NOUN]()-[he-pos/SCONJ]() (314; 6% instances), [he-pos/AUX]()-[he-pos/SCONJ]() (292; 5% instances), [he-pos/ADJ]()-[he-pos/SCONJ]() (269; 5% instances), [he-pos/VERB]()-[he-pos/CONJ]() (209; 4% instances), [he-pos/VERB]()-[he-pos/PART]() (88; 2% instances), [he-pos/PRON]()-[he-pos/SCONJ]() (45; 1% instances), [he-pos/PROPN]()-[he-pos/SCONJ]() (28; 1% instances), [he-pos/VERB]()-[he-pos/ADP]() (20; 0% instances), [he-pos/VERB]()-[he-pos/DET]() (17; 0% instances), [he-pos/NOUN]()-[he-pos/CONJ]() (15; 0% instances), [he-pos/NOUN]()-[he-pos/PART]() (15; 0% instances), [he-pos/ADV]()-[he-pos/SCONJ]() (14; 0% instances), [he-pos/AUX]()-[he-pos/CONJ]() (12; 0% instances), [he-pos/PRON]()-[he-pos/CONJ]() (7; 0% instances), [he-pos/AUX]()-[he-pos/DET]() (6; 0% instances), [he-pos/AUX]()-[he-pos/PART]() (6; 0% instances), [he-pos/NOUN]()-[he-pos/ADP]() (6; 0% instances), [he-pos/ADJ]()-[he-pos/DET]() (5; 0% instances), [he-pos/ADJ]()-[he-pos/CONJ]() (4; 0% instances), [he-pos/ADJ]()-[he-pos/PART]() (4; 0% instances), [he-pos/NOUN]()-[he-pos/DET]() (3; 0% instances), [he-pos/ADV]()-[he-pos/CONJ]() (2; 0% instances), [he-pos/PROPN]()-[he-pos/CONJ]() (2; 0% instances), [he-pos/ADJ]()-[he-pos/X]() (1; 0% instances), [he-pos/PROPN]()-[he-pos/PART]() (1; 0% instances), [he-pos/PUNCT]()-[he-pos/SCONJ]() (1; 0% instances), [he-pos/VERB]()-[he-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 mark	color:blue
1	חזקה	_	NOUN	NOUN	Gender=Fem|Number=Sing	0	root	_	_
2	על	_	ADP	ADP	_	3	case	_	_
3	הארקין	_	PROPN	PROPN	_	1	nmod	_	_
4	,	_	PUNCT	PUNCT	_	1	punct	_	_
5	ש	_	SCONJ	SCONJ	_	6	mark	_	_
6	יצביע	_	VERB	VERB	Gender=Masc|HebBinyan=HIFIL|Number=Sing|Person=3|Tense=Fut	1	ccomp	_	_
7	גם	_	ADV	ADV	_	8	advmod	_	_
8	ב	_	ADP	ADP	_	10	case	_	_
9	ה_	_	DET	DET	PronType=Art	10	det:def	_	_
10	עתיד	_	NOUN	NOUN	Gender=Masc|Number=Sing	6	nmod	_	_
11	בעד	_	ADP	ADP	_	12	case	_	_
12	חוק	_	NOUN	NOUN	Definite=Red|Gender=Masc|Number=Sing	6	iobj	_	_
13	סיוע	_	NOUN	NOUN	Definite=Red|Gender=Masc|Number=Sing	12	nmod:smixut	_	_
14	ה	_	DET	DET	PronType=Art	15	det:def	_	_
15	חוץ	_	NOUN	NOUN	Gender=Masc|Number=Sing	13	nmod:smixut	_	_
16	.	_	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 mark	color:blue
1	נראה	_	VERB	VERB	Gender=Masc|HebBinyan=NIFAL|Number=Sing|Person=1,2,3|VerbForm=Part	0	root	_	_
2	היה	_	VERB	VERB	Gender=Masc|Negative=Pos|Number=Sing|Person=3|Tense=Past|VerbType=Cop	1	aux	_	_
3	ש	_	SCONJ	SCONJ	_	5	mark	_	_
4	זה	_	PRON	PRON	Gender=Masc|Number=Sing|Person=3	5	nsubj	_	_
5	זיווג	_	NOUN	NOUN	Gender=Masc|Number=Sing	1	ccomp	_	_
6	טוב	_	ADJ	ADJ	Gender=Masc|Number=Sing	5	amod	_	_
7	.	_	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 mark	color:blue
1	ו	_	CONJ	CONJ	_	4	cc	_	_
2	זה	_	PRON	PRON	Gender=Masc|Number=Sing|Person=3	4	nsubj	_	_
3	אינו	_	VERB	VERB	Gender=Masc|Negative=Neg|Number=Sing|Person=3|VerbForm=Part|VerbType=Cop	4	neg	_	_
4	מבצע	_	NOUN	NOUN	Gender=Masc|Number=Sing	0	root	_	_
5	מ	_	ADP	ADP	_	7	case	_	_
6	ה	_	DET	DET	PronType=Art	7	det:def	_	_
7	סוג	_	NOUN	NOUN	Gender=Masc|Number=Sing	4	nmod	_	_
8	ש	_	SCONJ	SCONJ	_	9	mark	_	_
9	יש	_	AUX	AUX	VerbType=Mod	7	acl:relcl	_	_
10	לגשת	_	VERB	VERB	HebBinyan=NIFAL|VerbForm=Inf	9	xcomp	_	_
11	אליו	_	ADP	ADP	_	12	case	_	_
12	הוא_	_	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	iobj	_	_
13	ללא	_	ADP	ADP	_	14	case	_	_
14	מימון	_	NOUN	NOUN	Gender=Masc|Number=Sing	10	nmod	_	_
15	נכבד	_	ADJ	ADJ	Gender=Masc|Number=Sing	14	amod	_	_
16	.	_	PUNCT	PUNCT	_	4	punct	_	_

~~~


