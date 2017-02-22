

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is universal.

4924 nodes (3%) are attached to their parents as `mark`.

4924 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.0272136474411.

The following 22 pairs of parts of speech are connected with `mark`: [he-pos/VERB]()-[he-pos/SCONJ]() (3872; 79% instances), [he-pos/NOUN]()-[he-pos/SCONJ]() (316; 6% instances), [he-pos/AUX]()-[he-pos/SCONJ]() (286; 6% instances), [he-pos/ADJ]()-[he-pos/SCONJ]() (256; 5% instances), [he-pos/PRON]()-[he-pos/SCONJ]() (43; 1% instances), [he-pos/VERB]()-[he-pos/CCONJ]() (30; 1% instances), [he-pos/PROPN]()-[he-pos/SCONJ]() (29; 1% instances), [he-pos/VERB]()-[he-pos/ADP]() (19; 0% instances), [he-pos/ADV]()-[he-pos/SCONJ]() (14; 0% instances), [he-pos/VERB]()-[he-pos/DET]() (14; 0% instances), [he-pos/NOUN]()-[he-pos/CCONJ]() (9; 0% instances), [he-pos/PRON]()-[he-pos/CCONJ]() (7; 0% instances), [he-pos/NOUN]()-[he-pos/ADP]() (6; 0% instances), [he-pos/ADJ]()-[he-pos/DET]() (5; 0% instances), [he-pos/AUX]()-[he-pos/DET]() (5; 0% instances), [he-pos/VERB]()-[he-pos/PART]() (5; 0% instances), [he-pos/NOUN]()-[he-pos/DET]() (3; 0% instances), [he-pos/ADJ]()-[he-pos/X]() (1; 0% instances), [he-pos/AUX]()-[he-pos/CCONJ]() (1; 0% instances), [he-pos/PROPN]()-[he-pos/CCONJ]() (1; 0% instances), [he-pos/PUNCT]()-[he-pos/SCONJ]() (1; 0% instances), [he-pos/VERB]()-[he-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 mark	color:blue
1	חזקה	חזקה	NOUN	NOUN	Gender=Fem|Number=Sing	0	root	_	_
2	על	על	ADP	ADP	_	3	case	_	_
3	הארקין	הארקין	PROPN	PROPN	_	1	nmod	_	_
4	,	_	PUNCT	PUNCT	_	1	punct	_	_
5	ש	ש	SCONJ	SCONJ	_	6	mark	_	_
6	יצביע	הצביע	VERB	VERB	Gender=Masc|HebBinyan=HIFIL|Number=Sing|Person=3|Tense=Fut|Voice=Act	1	ccomp	_	_
7	גם	גם	ADV	ADV	_	8	advmod	_	_
8	ב	ב	ADP	ADP	_	10	case	_	_
9	ה_	ה	DET	DET	PronType=Art	10	det:def	_	_
10	עתיד	עתיד	NOUN	NOUN	Gender=Masc|Number=Sing	6	obl	_	_
11	בעד	בעד	ADP	ADP	_	12	case	_	_
12	חוק	חוק	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	6	iobj	_	_
13	סיוע	סיוע	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	12	compound:smixut	_	_
14	ה	ה	DET	DET	PronType=Art	15	det:def	_	_
15	חוץ	חוץ	NOUN	NOUN	Gender=Masc|Number=Sing	13	compound:smixut	_	_
16	.	_	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 mark	color:blue
1	נראה	נראה	VERB	VERB	Gender=Masc|HebBinyan=NIFAL|Number=Sing|Person=1,2,3|VerbForm=Part|Voice=Mid	0	root	_	_
2	היה	היה	VERB	VERB	Gender=Masc|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbType=Cop	1	aux	_	_
3	ש	ש	SCONJ	SCONJ	_	5	mark	_	_
4	זה	זה	PRON	PRON	Gender=Masc|Number=Sing|Person=3	5	nsubj	_	_
5	זיווג	זיווג	NOUN	NOUN	Gender=Masc|Number=Sing	1	ccomp	_	_
6	טוב	טוב	ADJ	ADJ	Gender=Masc|Number=Sing	5	amod	_	_
7	.	_	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 mark	color:blue
1	ו	ו	CCONJ	CCONJ	_	4	cc	_	_
2	זה	זה	PRON	PRON	Gender=Masc|Number=Sing|Person=3	4	nsubj	_	_
3	אינו	אינו	VERB	VERB	Gender=Masc|Number=Sing|Person=3|Polarity=Neg|VerbForm=Part|VerbType=Cop	4	advmod	_	_
4	מבצע	מבצע	NOUN	NOUN	Gender=Masc|Number=Sing	0	root	_	_
5	מ	מ	ADP	ADP	_	7	case	_	_
6	ה	ה	DET	DET	PronType=Art	7	det:def	_	_
7	סוג	סוג	NOUN	NOUN	Gender=Masc|Number=Sing	4	nmod	_	_
8	ש	ש	SCONJ	SCONJ	_	9	mark	_	_
9	יש	יש	AUX	AUX	VerbType=Mod	7	acl:relcl	_	_
10	לגשת	לגשת	VERB	VERB	HebBinyan=NIFAL|VerbForm=Inf|Voice=Mid	9	xcomp	_	_
11	אליו	אל	ADP	ADP	_	12	case	_	_
12	_הוא	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	iobj	_	_
13	ללא	ללא	ADP	ADP	_	14	case	_	_
14	מימון	מימון	NOUN	NOUN	Gender=Masc|Number=Sing	10	obl	_	_
15	נכבד	נכבד	ADJ	ADJ	Gender=Masc|Number=Sing	14	amod	_	_
16	.	_	PUNCT	PUNCT	_	4	punct	_	_

~~~


