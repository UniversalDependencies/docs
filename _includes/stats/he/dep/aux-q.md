

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is a language-specific subtype of [aux]().

42 nodes (0%) are attached to their parents as `aux:q`.

42 instances of `aux:q` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.92857142857143.

The following 10 pairs of parts of speech are connected with `aux:q`: [he-pos/VERB]()-[he-pos/ADV]() (23; 55% instances), [he-pos/AUX]()-[he-pos/ADV]() (7; 17% instances), [he-pos/ADJ]()-[he-pos/DET]() (2; 5% instances), [he-pos/NOUN]()-[he-pos/ADV]() (2; 5% instances), [he-pos/NOUN]()-[he-pos/SCONJ]() (2; 5% instances), [he-pos/VERB]()-[he-pos/SCONJ]() (2; 5% instances), [he-pos/ADJ]()-[he-pos/ADV]() (1; 2% instances), [he-pos/AUX]()-[he-pos/DET]() (1; 2% instances), [he-pos/PRON]()-[he-pos/ADV]() (1; 2% instances), [he-pos/VERB]()-[he-pos/CONJ]() (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux:q	color:blue
1	שאלנו	_	VERB	VERB	Gender=Fem,Masc|HebBinyan=PAAL|Number=Plur|Person=1|Tense=Past	0	root	_	_
2	על	_	ADP	ADP	_	4	case	_	_
3	ה	_	DET	DET	PronType=Art	4	det:def	_	_
4	פולנים	_	NOUN	NOUN	Gender=Masc|Number=Plur	1	iobj	_	_
5	:	_	PUNCT	PUNCT	HebSource=ConvUncertainHead	1	dep	_	_
6	האם	_	ADV	ADV	PronType=Int	7	aux:q	_	_
7	יכלו	_	VERB	VERB	Gender=Fem,Masc|HebSource=ConvUncertainHead|Number=Plur|Person=3|Tense=Fut	1	dep	_	_
8	לעשות	_	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf	7	xcomp	_	_
9	יותר	_	ADV	ADV	_	10	advmod	_	_
10	מ	_	ADP	ADP	_	12	case	_	_
11	ש	_	SCONJ	SCONJ	_	12	mark	_	_
12	עשו	_	VERB	VERB	_	8	nmod	_	_
13	למען	_	ADP	ADP	_	15	case	_	_
14	ה	_	DET	DET	PronType=Art	15	det:def	_	_
15	יהודים	_	NOUN	NOUN	Gender=Masc|Number=Plur	8	nmod	_	_
16	?	_	PUNCT	PUNCT	HebSource=ConvUncertainHead	1	dep	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 aux:q	color:blue
1	האם	_	ADV	ADV	PronType=Int	3	aux:q	_	_
2	אתם	_	PRON	PRON	Gender=Masc|Number=Plur|Person=2|PronType=Prs	3	nsubj	_	_
3	יכולים	_	AUX	AUX	Gender=Masc|Number=Plur|Person=1,2,3|VerbForm=Part|VerbType=Mod	0	root	_	_
4	להתעלות	_	VERB	VERB	HebBinyan=HITPAEL|VerbForm=Inf	3	xcomp	_	_
5	על	_	ADP	ADP	_	6	case	_	_
6	כך	_	PRON	PRON	Person=3|PronType=Dem	4	iobj	_	_
7	?	_	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 1 aux:q	color:blue
1	האם	_	ADV	ADV	PronType=Int	15	aux:q	_	_
2	מים	_	NOUN	NOUN	Gender=Masc|Number=Plur	15	nsubj:cop	_	_
3	זורמים	_	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Plur|Person=1,2,3|VerbForm=Part	2	amod	_	_
4	ב	_	ADP	ADP	_	5	case	_	_
5	בית	_	NOUN	NOUN	Definite=Red|Gender=Masc|Number=Sing	2	nmod	_	_
6	שימוש	_	NOUN	NOUN	Gender=Masc|Number=Sing	5	nmod:smixut	_	_
7	או	_	CONJ	CONJ	_	5	cc	_	_
8	ל	_	ADP	ADP	_	9	case	_	_
9	שטיפת	_	NOUN	NOUN	Definite=Red|Gender=Fem|Number=Sing	5	conj	_	_
10	שיניים	_	NOUN	NOUN	Gender=Fem|Number=Plur	9	nmod:smixut	_	_
11	ב	_	ADP	ADP	_	13	case	_	_
12	ה_	_	DET	DET	PronType=Art	13	det:def	_	_
13	כיור	_	NOUN	NOUN	Gender=Masc|Number=Sing	9	nmod	_	_
14	הם	_	VERB	VERB	Gender=Masc|Negative=Pos|Number=Plur|Person=3|VerbForm=Part|VerbType=Cop	15	cop	_	_
15	מותרות	_	NOUN	NOUN	Gender=Masc|Number=Plur	0	root	_	_
16	?	_	PUNCT	PUNCT	_	15	punct	_	_

~~~


