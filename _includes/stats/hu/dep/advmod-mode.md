

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is a language-specific subtype of [advmod]().
There are also 7 other language-specific subtypes of `advmod`: [advmod:locy](), [advmod:obl](), [advmod:que](), [advmod:tfrom](), [advmod:tlocy](), [advmod:to](), [advmod:tto]().

1395 nodes (3%) are attached to their parents as `advmod:mode`.

1251 instances of `advmod:mode` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.89247311827957.

The following 33 pairs of parts of speech are connected with `advmod:mode`: [hu-pos/VERB]()-[hu-pos/ADV]() (787; 56% instances), [hu-pos/ADJ]()-[hu-pos/ADV]() (227; 16% instances), [hu-pos/NOUN]()-[hu-pos/ADV]() (138; 10% instances), [hu-pos/NUM]()-[hu-pos/ADV]() (66; 5% instances), [hu-pos/ADV]()-[hu-pos/ADV]() (53; 4% instances), [hu-pos/PRON]()-[hu-pos/ADV]() (25; 2% instances), [hu-pos/VERB]()-[hu-pos/PRON]() (22; 2% instances), [hu-pos/DET]()-[hu-pos/ADV]() (14; 1% instances), [hu-pos/PROPN]()-[hu-pos/ADV]() (11; 1% instances), [hu-pos/ADJ]()-[hu-pos/PRON]() (6; 0% instances), [hu-pos/VERB]()-[hu-pos/INTJ]() (6; 0% instances), [hu-pos/VERB]()-[hu-pos/ADP]() (5; 0% instances), [hu-pos/NOUN]()-[hu-pos/PRON]() (4; 0% instances), [hu-pos/VERB]()-[hu-pos/ADJ]() (4; 0% instances), [hu-pos/ADJ]()-[hu-pos/ADJ]() (3; 0% instances), [hu-pos/ADJ]()-[hu-pos/ADP]() (3; 0% instances), [hu-pos/NOUN]()-[hu-pos/INTJ]() (3; 0% instances), [hu-pos/AUX]()-[hu-pos/ADV]() (2; 0% instances), [hu-pos/NOUN]()-[hu-pos/ADJ]() (2; 0% instances), [hu-pos/ADJ]()-[hu-pos/CONJ]() (1; 0% instances), [hu-pos/ADJ]()-[hu-pos/DET]() (1; 0% instances), [hu-pos/ADJ]()-[hu-pos/INTJ]() (1; 0% instances), [hu-pos/ADJ]()-[hu-pos/SCONJ]() (1; 0% instances), [hu-pos/ADV]()-[hu-pos/ADJ]() (1; 0% instances), [hu-pos/NOUN]()-[hu-pos/CONJ]() (1; 0% instances), [hu-pos/NUM]()-[hu-pos/ADP]() (1; 0% instances), [hu-pos/PRON]()-[hu-pos/INTJ]() (1; 0% instances), [hu-pos/PROPN]()-[hu-pos/PRON]() (1; 0% instances), [hu-pos/PROPN]()-[hu-pos/VERB]() (1; 0% instances), [hu-pos/SCONJ]()-[hu-pos/ADV]() (1; 0% instances), [hu-pos/VERB]()-[hu-pos/CONJ]() (1; 0% instances), [hu-pos/VERB]()-[hu-pos/DET]() (1; 0% instances), [hu-pos/VERB]()-[hu-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 advmod:mode	color:blue
1	Ám	ám	CONJ	_	_	7	cc	_	_
2	"	"	PUNCT	_	_	4	punct	_	_
3	Öcsi	Öcsi	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	appos	_	_
4	bácsit	bácsi	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	7	dobj	_	_
5	"	"	PUNCT	_	_	4	punct	_	_
6	jobban	jól	ADV	_	_	7	advmod:mode	_	_
7	érdekelte	érdekel	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
8	a	a	DET	_	Definite=Def|PronType=Art	9	det	_	_
9	játék	játék	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	7	nsubj	_	_
10	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 advmod:mode	color:blue
1	Testületi	testületi	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	2	amod:att	_	_
2	döntés	döntés	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	nsubj	_	_
3	leghamarabb	hamar	ADV	_	_	5	advmod:mode	_	_
4	januárban	január	NOUN	_	Case=Ine|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	nmod:obl	_	_
5	várható	várható	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPres	0	root	_	_
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 advmod:mode	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	4	det	_	_
2	vastagon	vastag	ADJ	_	Case=Sup|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	3	amod:mode	_	_
3	behavazott	behavazott	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPast	4	amod:att	_	_
4	úton	út	NOUN	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	8	nmod:obl	_	_
5	tényleg	tényleg	ADV	_	_	8	advmod:mode	_	_
6	ez	ez	PRON	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	8	nsubj	_	_
7	a	a	DET	_	Definite=Def|PronType=Art	8	det	_	_
8	helyzet	helyzet	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	0	root	_	_
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


