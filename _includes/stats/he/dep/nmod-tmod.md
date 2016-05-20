

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is a language-specific subtype of [nmod]().
There are also 2 other language-specific subtypes of `nmod`: [nmod:poss](), [nmod:smixut]().

231 nodes (0%) are attached to their parents as `nmod:tmod`.

171 instances of `nmod:tmod` (74%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.57575757575758.

The following 4 pairs of parts of speech are connected with `nmod:tmod`: [he-pos/VERB]()-[he-pos/ADV]() (218; 94% instances), [he-pos/AUX]()-[he-pos/ADV]() (6; 3% instances), [he-pos/NOUN]()-[he-pos/ADV]() (6; 3% instances), [he-pos/ADJ]()-[he-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nmod:tmod	color:blue
1	הוא	_	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	נוצח	_	VERB	VERB	Gender=Masc|HebBinyan=PUAL|Number=Sing|Person=3|Tense=Past	0	root	_	_
3	השבוע	_	ADV	ADV	_	2	nmod:tmod	_	_
4	ב	_	ADP	ADP	_	5	case	_	_
5	הפרש	_	NOUN	NOUN	Gender=Masc|Number=Sing	2	nmod	_	_
6	של	_	PART	PART	Case=Gen	8	case:gen	_	_
7	שני	_	NUM	NUM	Definite=Red|Gender=Masc|Number=Plur	8	nummod	_	_
8	אחוזים	_	NOUN	NOUN	Gender=Masc|Number=Plur	5	nmod:poss	_	_
9	.	_	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nmod:tmod	color:blue
1	אתמול	_	ADV	ADV	_	2	nmod:tmod	_	_
2	ערך	_	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Sing|Person=3|Tense=Past	0	root	_	_
3	לאזארק	_	PROPN	PROPN	_	2	nsubj	_	_
4	אימון	_	NOUN	NOUN	Gender=Masc|Number=Sing	2	dobj	_	_
5	ו	_	CONJ	CONJ	_	2	cc	_	_
6	היום	_	ADV	ADV	_	7	nmod:tmod	_	_
7	אמור	_	AUX	AUX	Gender=Masc|Number=Sing|Person=1,2,3|VerbType=Mod	2	conj	_	_
8	להיות	_	VERB	VERB	Negative=Pos|VerbForm=Inf|VerbType=Cop	7	xcomp	_	_
9	אימון	_	NOUN	NOUN	Gender=Masc|Number=Sing	7	nsubj	_	_
10	נוסף	_	ADJ	ADJ	Gender=Masc|Number=Sing	9	amod	_	_
11	.	_	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 nmod:tmod	color:blue
1	נושא	_	NOUN	NOUN	Definite=Red|Gender=Masc|Number=Sing	11	nsubj:cop	_	_
2	ה	_	DET	DET	PronType=Art	3	det:def	_	_
3	לימוד	_	NOUN	NOUN	Gender=Masc|Number=Sing	1	nmod:smixut	_	_
4	ב	_	ADP	ADP	_	5	case	_	_
5	בתי	_	NOUN	NOUN	Definite=Red|Gender=Masc|Number=Plur	1	nmod	_	_
6	ה	_	DET	DET	PronType=Art	7	det:def	_	_
7	ספר	_	NOUN	NOUN	Gender=Masc|Number=Sing	5	nmod:smixut	_	_
8	השנה	_	ADV	ADV	_	11	nmod:tmod	_	_
9	הוא	_	VERB	VERB	Gender=Masc|Negative=Pos|Number=Sing|Person=3|VerbForm=Part|VerbType=Cop	11	cop	_	_
10	"	_	PUNCT	PUNCT	_	11	punct	_	_
11	עלייה	_	NOUN	NOUN	Gender=Fem|Number=Sing	0	root	_	_
12	ו	_	CONJ	CONJ	_	11	cc	_	_
13	קליטה	_	NOUN	NOUN	Gender=Fem|Number=Sing	11	conj	_	_
14	"	_	PUNCT	PUNCT	_	11	punct	_	_
15	.	_	PUNCT	PUNCT	_	11	punct	_	_

~~~


