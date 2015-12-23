

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is a language-specific subtype of [advmod]().
There are also 1 other language-specific subtypes of `advmod`: [advmod:inf]().

170 nodes (0%) are attached to their parents as `advmod:phrase`.

86 instances of `advmod:phrase` (51%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.39411764705882.

The following 13 pairs of parts of speech are connected with `advmod:phrase`: [he-pos/VERB]()-[he-pos/ADV]() (135; 79% instances), [he-pos/ADJ]()-[he-pos/ADV]() (7; 4% instances), [he-pos/AUX]()-[he-pos/ADV]() (7; 4% instances), [he-pos/NOUN]()-[he-pos/ADV]() (5; 3% instances), [he-pos/VERB]()-[he-pos/PRON]() (3; 2% instances), [he-pos/NOUN]()-[he-pos/CONJ]() (2; 1% instances), [he-pos/VERB]()-[he-pos/ADP]() (2; 1% instances), [he-pos/VERB]()-[he-pos/CONJ]() (2; 1% instances), [he-pos/VERB]()-[he-pos/DET]() (2; 1% instances), [he-pos/VERB]()-[he-pos/NOUN]() (2; 1% instances), [he-pos/NOUN]()-[he-pos/VERB]() (1; 1% instances), [he-pos/VERB]()-[he-pos/ADJ]() (1; 1% instances), [he-pos/VERB]()-[he-pos/VERB]() (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 advmod:phrase	color:blue
1	בני	_	NOUN	NOUN	Definite=Red|Gender=Masc|Number=Plur	5	nsubj	_	_
2	ה	_	DET	DET	PronType=Art	3	det:def	_	_
3	זוג	_	NOUN	NOUN	Gender=Masc|Number=Sing	1	nmod:smixut	_	_
4	גרוסבורד	_	PROPN	PROPN	_	1	appos	_	_
5	תוכננו	_	VERB	VERB	Gender=Fem,Masc|HebBinyan=PUAL|Number=Plur|Person=3|Tense=Past	0	root	_	_
6	לשוב	_	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf	5	xcomp	_	_
7	היום	_	ADV	ADV	_	6	advmod:phrase	_	_
8	אחרי	_	ADP	ADP	_	11	case	_	_
9	-	_	PUNCT	PUNCT	_	11	punct	_	_
10	ה	_	DET	DET	PronType=Art	11	det:def	_	_
11	צהריים	_	NOUN	NOUN	Gender=Masc|Number=Plur	7	advmod	_	_
12	ל	_	ADP	ADP	_	13	case	_	_
13	ישראל	_	PROPN	PROPN	_	6	nmod	_	_
14	.	_	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 advmod:phrase	color:blue
1	גזר	_	NOUN	NOUN	Definite=Red|Gender=Masc|Number=Sing	6	nsubj	_	_
2	דינו	_	NOUN	NOUN	Gender=Masc|Number=Sing	1	nmod:smixut	_	_
3	הוא_	_	PRON	PRON	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nmod:poss	_	_
4	של	_	PART	PART	Case=Gen	5	case:gen	_	_
5	מילקן	_	PROPN	PROPN	_	1	nmod:poss	_	_
6	אמור	_	AUX	AUX	Gender=Masc|Number=Sing|Person=1,2,3|VerbType=Mod	0	root	_	_
7	להיחרץ	_	VERB	VERB	HebBinyan=NIFAL|VerbForm=Inf	6	xcomp	_	_
8	החודש	_	ADV	ADV	_	6	advmod:phrase	_	_
9	,	_	PUNCT	PUNCT	_	8	punct	_	_
10	אולי	_	ADV	ADV	_	12	advmod	_	_
11	אף	_	ADV	ADV	_	12	advmod	_	_
12	השבוע	_	ADV	ADV	_	8	conj	_	_
13	.	_	PUNCT	PUNCT	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 advmod:phrase	color:blue
1	ה	_	DET	DET	PronType=Art	2	det:def	_	_
2	נושאים	_	NOUN	NOUN	Gender=Masc|Number=Plur	13	nsubj	_	_
3	ה	_	SCONJ	SCONJ	_	4	mark	_	_
4	מוכרים	_	VERB	VERB	Gender=Masc|Number=Plur|Person=1,2,3|VerbForm=Part	2	acl:relcl	_	_
5	מן	_	ADP	ADP	_	7	case	_	_
6	ה	_	DET	DET	PronType=Art	7	det:def	_	_
7	טקסטים	_	NOUN	NOUN	Gender=Masc|Number=Plur	4	nmod	_	_
8	ו	_	CONJ	CONJ	_	7	cc	_	_
9	ה	_	DET	DET	PronType=Art	10	det:def	_	_
10	מחזות	_	NOUN	NOUN	Gender=Masc|Number=Plur	7	conj	_	_
11	של	_	PART	PART	Case=Gen	12	case:gen	_	_
12	לוין	_	PROPN	PROPN	_	7	nmod:poss	_	_
13	מצויים	_	ADJ	ADJ	Gender=Masc|Number=Plur	0	root	_	_
14	גם	_	ADV	ADV	_	15	advmod	_	_
15	כאן	_	ADV	ADV	_	13	advmod:phrase	_	_
16	.	_	PUNCT	PUNCT	_	13	punct	_	_

~~~


