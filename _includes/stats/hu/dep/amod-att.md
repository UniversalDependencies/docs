

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is a language-specific subtype of [amod]().
There are also 3 other language-specific subtypes of `amod`: [amod:attlvc](), [amod:mode](), [amod:obl]().

2593 nodes (10%) are attached to their parents as `amod:att`.

2593 instances of `amod:att` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.37254145777092.

The following 15 pairs of parts of speech are connected with `amod:att`: [hu-pos/NOUN]()-[hu-pos/ADJ]() (2441; 94% instances), [hu-pos/ADJ]()-[hu-pos/ADJ]() (77; 3% instances), [hu-pos/PROPN]()-[hu-pos/ADJ]() (59; 2% instances), [hu-pos/NOUN]()-[hu-pos/VERB]() (3; 0% instances), [hu-pos/NOUN]()-[hu-pos/NOUN]() (2; 0% instances), [hu-pos/NUM]()-[hu-pos/ADJ]() (2; 0% instances), [hu-pos/ADJ]()-[hu-pos/NOUN]() (1; 0% instances), [hu-pos/ADJ]()-[hu-pos/NUM]() (1; 0% instances), [hu-pos/ADJ]()-[hu-pos/X]() (1; 0% instances), [hu-pos/NOUN]()-[hu-pos/ADV]() (1; 0% instances), [hu-pos/NOUN]()-[hu-pos/NUM]() (1; 0% instances), [hu-pos/NOUN]()-[hu-pos/X]() (1; 0% instances), [hu-pos/NUM]()-[hu-pos/NUM]() (1; 0% instances), [hu-pos/PROPN]()-[hu-pos/NOUN]() (1; 0% instances), [hu-pos/X]()-[hu-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 amod:att	color:blue
1	Az	az	DET	_	Definite=Def|PronType=Art	5	det	_	_
2	utolsó	utolsó	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	amod:att	_	_
3	hat	hat	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	4	nummod	_	_
4	hónapos	hónapos	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	amod:att	_	_
5	időszak	időszak	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	10	nsubj	_	_
6	azonban	azonban	CONJ	_	_	10	cc	_	_
7	a	a	DET	_	Definite=Def|PronType=Art	8	det	_	_
8	hét	hét	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	9	nmod:att	_	_
9	elején	eleje	NOUN	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	10	nmod:obl	_	_
10	lejárt	le+jár	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
11	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 amod:att	color:blue
1	Mindenkinek	mindenki	PRON	_	Case=Dat|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Tot	4	nmod:obl	_	_
2	az	az	PRON	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	4	nsubj	_	_
3	a	a	DET	_	Definite=Def|PronType=Art	4	det	_	_
4	legjobb	jó	ADJ	_	Case=Nom|Degree=Sup|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	0	root	_	_
5	,	,	PUNCT	_	_	4	punct	_	_
6	ha	ha	SCONJ	_	_	13	mark	_	_
7	jó	jó	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	8	amod:att	_	_
8	időben	idő	NOUN	_	Case=Ine|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	13	nmod:obl	_	_
9	,	,	PUNCT	_	_	13	punct	_	_
10	jó	jó	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	11	amod:att	_	_
11	minőségű	minőségű	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	12	amod:att	_	_
12	pályákon	pálya	NOUN	_	Case=Sup|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None	13	nmod:obl	_	_
13	zajlanak	zajlik	VERB	_	Definite=Ind|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	csubj	_	_
14	az	az	DET	_	Definite=Def|PronType=Art	15	det	_	_
15	összecsapások	összecsapás	NOUN	_	Case=Nom|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None	13	nsubj	_	_
16	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 amod:att	color:blue
1	Napok	nap	NOUN	_	Case=Nom|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	nmod	_	_
2	óta	óta	ADP	_	_	1	case	_	_
3	hóvihar	hóvihar	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	nsubj	_	_
4	tombol	tombol	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	egész	egész	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	amod:att	_	_
6	Európában	Európa	PROPN	_	Case=Ine|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	nmod:obl	_	_
7	.	.	PUNCT	_	_	4	punct	_	_

~~~


