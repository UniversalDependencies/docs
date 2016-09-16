

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is a language-specific subtype of [nsubj]().

396 nodes (0%) are attached to their parents as `nsubj:cop`.

386 instances of `nsubj:cop` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.48484848484848.

The following 29 pairs of parts of speech are connected with `nsubj:cop`: [he-pos/NOUN]()-[he-pos/NOUN]() (187; 47% instances), [he-pos/VERB]()-[he-pos/NOUN]() (60; 15% instances), [he-pos/ADJ]()-[he-pos/NOUN]() (42; 11% instances), [he-pos/NOUN]()-[he-pos/PROPN]() (33; 8% instances), [he-pos/PROPN]()-[he-pos/NOUN]() (17; 4% instances), [he-pos/NOUN]()-[he-pos/ADV]() (11; 3% instances), [he-pos/PRON]()-[he-pos/NOUN]() (7; 2% instances), [he-pos/NOUN]()-[he-pos/PRON]() (4; 1% instances), [he-pos/ADV]()-[he-pos/NOUN]() (3; 1% instances), [he-pos/NOUN]()-[he-pos/VERB]() (3; 1% instances), [he-pos/PROPN]()-[he-pos/PROPN]() (3; 1% instances), [he-pos/VERB]()-[he-pos/ADV]() (3; 1% instances), [he-pos/ADJ]()-[he-pos/PROPN]() (2; 1% instances), [he-pos/AUX]()-[he-pos/NOUN]() (2; 1% instances), [he-pos/NOUN]()-[he-pos/DET]() (2; 1% instances), [he-pos/PROPN]()-[he-pos/ADV]() (2; 1% instances), [he-pos/VERB]()-[he-pos/PRON]() (2; 1% instances), [he-pos/VERB]()-[he-pos/PROPN]() (2; 1% instances), [he-pos/ADJ]()-[he-pos/ADJ]() (1; 0% instances), [he-pos/ADJ]()-[he-pos/X]() (1; 0% instances), [he-pos/ADV]()-[he-pos/ADV]() (1; 0% instances), [he-pos/NOUN]()-[he-pos/ADJ]() (1; 0% instances), [he-pos/NOUN]()-[he-pos/NUM]() (1; 0% instances), [he-pos/NOUN]()-[he-pos/X]() (1; 0% instances), [he-pos/PRON]()-[he-pos/PRON]() (1; 0% instances), [he-pos/PROPN]()-[he-pos/ADJ]() (1; 0% instances), [he-pos/PROPN]()-[he-pos/VERB]() (1; 0% instances), [he-pos/VERB]()-[he-pos/ADJ]() (1; 0% instances), [he-pos/VERB]()-[he-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 5 nsubj:cop	color:blue
1	סוף	_	NOUN	NOUN	Gender=Masc|Number=Sing	11	advmod	_	_
2	סוף	_	NOUN	NOUN	Gender=Masc|Number=Sing	1	mwe	_	_
3	,	_	PUNCT	PUNCT	_	11	punct	_	_
4	כל	_	DET	DET	Definite=Red	5	det	_	_
5	עניין	_	NOUN	NOUN	Definite=Red|Gender=Masc|Number=Sing	11	nsubj:cop	_	_
6	ה	_	DET	DET	PronType=Art	7	det:def	_	_
7	הצבעה	_	NOUN	NOUN	Gender=Fem|Number=Sing	5	nmod:smixut	_	_
8	ה	_	DET	DET	PronType=Art	9	det:def	_	_
9	חופשית	_	ADJ	ADJ	Gender=Fem|Number=Sing	7	amod	_	_
10	הוא	_	VERB	VERB	Gender=Masc|Negative=Pos|Number=Sing|Person=3|VerbForm=Part|VerbType=Cop	11	cop	_	_
11	פונקציה	_	NOUN	NOUN	Gender=Fem|Number=Sing	0	root	_	_
12	של	_	PART	PART	Case=Gen	13	case:gen	_	_
13	סודיותה	_	NOUN	NOUN	Gender=Fem|Number=Sing	11	nmod:poss	_	_
14	היא_	_	PRON	PRON	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Prs	13	nmod:poss	_	_
15	.	_	PUNCT	PUNCT	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 nsubj:cop	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 1 nsubj:cop	color:blue
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


