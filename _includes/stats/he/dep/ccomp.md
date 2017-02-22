

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is universal.

882 nodes (1%) are attached to their parents as `ccomp`.

869 instances of `ccomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.76757369614512.

The following 23 pairs of parts of speech are connected with `ccomp`: [he-pos/VERB]()-[he-pos/VERB]() (581; 66% instances), [he-pos/VERB]()-[he-pos/NOUN]() (90; 10% instances), [he-pos/VERB]()-[he-pos/AUX]() (81; 9% instances), [he-pos/VERB]()-[he-pos/ADJ]() (58; 7% instances), [he-pos/AUX]()-[he-pos/VERB]() (20; 2% instances), [he-pos/ADJ]()-[he-pos/VERB]() (9; 1% instances), [he-pos/NOUN]()-[he-pos/VERB]() (6; 1% instances), [he-pos/VERB]()-[he-pos/PROPN]() (6; 1% instances), [he-pos/VERB]()-[he-pos/ADV]() (5; 1% instances), [he-pos/VERB]()-[he-pos/PRON]() (5; 1% instances), [he-pos/AUX]()-[he-pos/ADJ]() (4; 0% instances), [he-pos/VERB]()-[he-pos/SCONJ]() (3; 0% instances), [he-pos/ADV]()-[he-pos/VERB]() (2; 0% instances), [he-pos/PRON]()-[he-pos/VERB]() (2; 0% instances), [he-pos/VERB]()-[he-pos/PUNCT]() (2; 0% instances), [he-pos/ADJ]()-[he-pos/AUX]() (1; 0% instances), [he-pos/ADV]()-[he-pos/AUX]() (1; 0% instances), [he-pos/AUX]()-[he-pos/AUX]() (1; 0% instances), [he-pos/AUX]()-[he-pos/NOUN]() (1; 0% instances), [he-pos/NOUN]()-[he-pos/AUX]() (1; 0% instances), [he-pos/NOUN]()-[he-pos/NOUN]() (1; 0% instances), [he-pos/PROPN]()-[he-pos/NOUN]() (1; 0% instances), [he-pos/X]()-[he-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 ccomp	color:blue
1	כתוב	כתב	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Sing|Person=1,2,3|VerbForm=Part|Voice=Act	0	root	_	_
2	:	_	PUNCT	PUNCT	_	6	punct	_	_
3	"	_	PUNCT	PUNCT	_	6	punct	_	_
4	ב	ב	ADP	ADP	_	5	case	_	_
5	חוכמה	חוכמה	NOUN	NOUN	Gender=Fem|Number=Sing	6	obl	_	_
6	עשה	עשה	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Mood=Imp|Number=Sing|Person=2|Voice=Act	1	ccomp	_	_
7	לך	ל	ADP	ADP	_	8	case	_	_
8	_אתה	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=2|PronType=Prs	6	obl	_	_
9	מלחמה	מלחמה	NOUN	NOUN	Gender=Fem|Number=Sing	6	obj	_	_
10	"	_	PUNCT	PUNCT	_	6	punct	_	_
11	.	_	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 ccomp	color:blue
1	נראה	נראה	VERB	VERB	Gender=Masc|HebBinyan=NIFAL|Number=Sing|Person=1,2,3|VerbForm=Part|Voice=Mid	0	root	_	_
2	היה	היה	VERB	VERB	Gender=Masc|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbType=Cop	1	aux	_	_
3	ש	ש	SCONJ	SCONJ	_	5	mark	_	_
4	זה	זה	PRON	PRON	Gender=Masc|Number=Sing|Person=3	5	nsubj	_	_
5	זיווג	זיווג	NOUN	NOUN	Gender=Masc|Number=Sing	1	ccomp	_	_
6	טוב	טוב	ADJ	ADJ	Gender=Masc|Number=Sing	5	amod	_	_
7	.	_	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 ccomp	color:blue
1	בן_	בן	NOUN	NOUN	Definite=Def|Gender=Masc|Number=Sing	4	nsubj	_	_
2	_של_	של	ADP	ADP	_	3	case:gen	_	_
3	_היא	הוא	PRON	PRON	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Prs	1	nmod:poss	_	_
4	חשב	חשב	VERB	VERB	Gender=Masc|Number=Sing|Person=3|Tense=Past	0	root	_	_
5	ש	ש	SCONJ	SCONJ	_	10	mark	_	_
6	אולי	אולי	ADV	ADV	_	10	advmod	_	_
7	באמצעות	באמצעות	ADP	ADP	_	9	case	_	_
8	ה	ה	DET	DET	PronType=Art	9	det:def	_	_
9	עיתון	עיתון	NOUN	NOUN	Gender=Masc|Number=Sing	10	obl	_	_
10	אפשר	אפשר	AUX	AUX	VerbType=Mod	4	ccomp	_	_
11	יהיה	היה	VERB	VERB	Gender=Masc|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbType=Cop	10	aux	_	_
12	לאתר	איתר	VERB	VERB	HebBinyan=PIEL|VerbForm=Inf|Voice=Act	10	xcomp	_	_
13	את_	את	PART	PART	Case=Acc	14	case	_	_
14	_היא	הוא	PRON	PRON	Gender=Fem|Number=Sing|Person=3|PronType=Prs	12	iobj	_	_
15	.	_	PUNCT	PUNCT	_	4	punct	_	_

~~~


