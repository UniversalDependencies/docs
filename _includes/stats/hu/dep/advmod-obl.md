

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is a language-specific subtype of [advmod]().
There are also 7 other language-specific subtypes of `advmod`: [advmod:locy](), [advmod:mode](), [advmod:que](), [advmod:tfrom](), [advmod:tlocy](), [advmod:to](), [advmod:tto]().

4 nodes (0%) are attached to their parents as `advmod:obl`.

3 instances of `advmod:obl` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 1 pairs of parts of speech are connected with `advmod:obl`: [hu-pos/VERB]()-[hu-pos/ADV]() (4; 100% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 advmod:obl	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	3	det	_	_
2	belső	belső	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	3	amod:att	_	_
3	fogyasztás	fogyasztás	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	nsubj	_	_
4	mérséklődött	mérséklődik	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	tavalyhoz	tavalyhoz	ADV	_	_	4	advmod:obl	_	_
6	képest	képest	ADP	_	_	5	case	_	_
7	,	,	PUNCT	_	_	4	punct	_	_
8	bővülése	bővülés	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	12	nsubj	_	_
9	idén	idén	ADV	_	_	12	advmod:tlocy	_	_
10	nem	nem	ADV	_	PronType=Neg	12	neg	_	_
11	fogja	fog	AUX	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	12	aux	_	_
12	meghaladni	meg+halad	VERB	_	VerbForm=Inf|Voice=Act	4	conj	_	_
13	a	a	DET	_	Definite=Def|PronType=Art	16	det	_	_
14	bruttó	bruttó	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	16	amod:att	_	_
15	nemzeti	nemzeti	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	16	amod:att	_	_
16	össztermék	össztermék	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	20	nmod:att	_	_
17	(	(	PUNCT	_	_	18	punct	_	_
18	GDP	GDP	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	16	appos	_	_
19	)	)	PUNCT	_	_	18	punct	_	_
20	növekedését	növekedés	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	12	dobj	_	_
21	.	.	PUNCT	_	_	4	punct	_	_

~~~


