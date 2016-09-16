

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is universal.

939 nodes (1%) are attached to their parents as `ccomp`.

926 instances of `ccomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.71033013844515.

The following 24 pairs of parts of speech are connected with `ccomp`: [he-pos/VERB]()-[he-pos/VERB]() (612; 65% instances), [he-pos/VERB]()-[he-pos/NOUN]() (94; 10% instances), [he-pos/VERB]()-[he-pos/AUX]() (90; 10% instances), [he-pos/VERB]()-[he-pos/ADJ]() (60; 6% instances), [he-pos/AUX]()-[he-pos/VERB]() (23; 2% instances), [he-pos/ADJ]()-[he-pos/VERB]() (9; 1% instances), [he-pos/NOUN]()-[he-pos/VERB]() (7; 1% instances), [he-pos/VERB]()-[he-pos/ADV]() (6; 1% instances), [he-pos/VERB]()-[he-pos/PROPN]() (6; 1% instances), [he-pos/ADV]()-[he-pos/VERB]() (5; 1% instances), [he-pos/AUX]()-[he-pos/ADJ]() (5; 1% instances), [he-pos/VERB]()-[he-pos/PRON]() (5; 1% instances), [he-pos/VERB]()-[he-pos/SCONJ]() (3; 0% instances), [he-pos/AUX]()-[he-pos/NOUN]() (2; 0% instances), [he-pos/PRON]()-[he-pos/VERB]() (2; 0% instances), [he-pos/VERB]()-[he-pos/PUNCT]() (2; 0% instances), [he-pos/ADJ]()-[he-pos/AUX]() (1; 0% instances), [he-pos/ADV]()-[he-pos/AUX]() (1; 0% instances), [he-pos/AUX]()-[he-pos/AUX]() (1; 0% instances), [he-pos/NOUN]()-[he-pos/AUX]() (1; 0% instances), [he-pos/NOUN]()-[he-pos/NOUN]() (1; 0% instances), [he-pos/PROPN]()-[he-pos/NOUN]() (1; 0% instances), [he-pos/VERB]()-[he-pos/CONJ]() (1; 0% instances), [he-pos/X]()-[he-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 ccomp	color:blue
1	כתוב	_	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Sing|Person=1,2,3|VerbForm=Part	0	root	_	_
2	:	_	PUNCT	PUNCT	_	6	punct	_	_
3	"	_	PUNCT	PUNCT	_	6	punct	_	_
4	ב	_	ADP	ADP	_	5	case	_	_
5	חוכמה	_	NOUN	NOUN	Gender=Fem|Number=Sing	6	nmod	_	_
6	עשה	_	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Mood=Imp|Number=Sing|Person=2	1	ccomp	_	_
7	לך	_	ADP	ADP	_	8	case	_	_
8	אתה_	_	PRON	PRON	Gender=Masc|Number=Sing|Person=2|PronType=Prs	6	nmod	_	_
9	מלחמה	_	NOUN	NOUN	Gender=Fem|Number=Sing	6	dobj	_	_
10	"	_	PUNCT	PUNCT	_	6	punct	_	_
11	.	_	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 ccomp	color:blue
1	נראה	_	VERB	VERB	Gender=Masc|HebBinyan=NIFAL|Number=Sing|Person=1,2,3|VerbForm=Part	0	root	_	_
2	היה	_	VERB	VERB	Gender=Masc|Negative=Pos|Number=Sing|Person=3|Tense=Past|VerbType=Cop	1	aux	_	_
3	ש	_	SCONJ	SCONJ	_	5	mark	_	_
4	זה	_	PRON	PRON	Gender=Masc|Number=Sing|Person=3	5	nsubj	_	_
5	זיווג	_	NOUN	NOUN	Gender=Masc|Number=Sing	1	ccomp	_	_
6	טוב	_	ADJ	ADJ	Gender=Masc|Number=Sing	5	amod	_	_
7	.	_	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 ccomp	color:blue
1	בנה	_	NOUN	NOUN	Gender=Masc|Number=Sing	3	nsubj	_	_
2	היא_	_	PRON	PRON	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Prs	1	nmod:poss	_	_
3	חשב	_	VERB	VERB	Gender=Masc|Number=Sing|Person=3|Tense=Past	0	root	_	_
4	ש	_	SCONJ	SCONJ	_	9	mark	_	_
5	אולי	_	ADV	ADV	_	9	advmod	_	_
6	באמצעות	_	ADP	ADP	_	8	case	_	_
7	ה	_	DET	DET	PronType=Art	8	det:def	_	_
8	עיתון	_	NOUN	NOUN	Gender=Masc|Number=Sing	9	nmod	_	_
9	אפשר	_	AUX	AUX	VerbType=Mod	3	ccomp	_	_
10	יהיה	_	VERB	VERB	Gender=Masc|Negative=Pos|Number=Sing|Person=3|Tense=Fut|VerbType=Cop	9	aux	_	_
11	לאתר	_	VERB	VERB	HebBinyan=PIEL|VerbForm=Inf	9	xcomp	_	_
12	אותה	_	PART	PART	Case=Acc	13	case	_	_
13	היא_	_	PRON	PRON	Gender=Fem|Number=Sing|Person=3|PronType=Prs	11	iobj	_	_
14	.	_	PUNCT	PUNCT	_	3	punct	_	_

~~~


