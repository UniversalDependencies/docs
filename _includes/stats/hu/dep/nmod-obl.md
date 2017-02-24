

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is a language-specific subtype of [nmod]().
There are also 3 other language-specific subtypes of `nmod`: [nmod:att](), [nmod:attlvc](), [nmod:obllvc]().

2630 nodes (8%) are attached to their parents as `nmod:obl`.

1927 instances of `nmod:obl` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.20532319391635.

The following 34 pairs of parts of speech are connected with `nmod:obl`: [hu-pos/VERB]()-[hu-pos/NOUN]() (1482; 56% instances), [hu-pos/ADJ]()-[hu-pos/NOUN]() (424; 16% instances), [hu-pos/VERB]()-[hu-pos/PRON]() (203; 8% instances), [hu-pos/VERB]()-[hu-pos/PROPN]() (139; 5% instances), [hu-pos/NOUN]()-[hu-pos/NOUN]() (80; 3% instances), [hu-pos/ADJ]()-[hu-pos/PROPN]() (52; 2% instances), [hu-pos/ADJ]()-[hu-pos/PRON]() (38; 1% instances), [hu-pos/ADV]()-[hu-pos/NOUN]() (38; 1% instances), [hu-pos/VERB]()-[hu-pos/NUM]() (35; 1% instances), [hu-pos/NOUN]()-[hu-pos/PRON]() (28; 1% instances), [hu-pos/VERB]()-[hu-pos/ADJ]() (25; 1% instances), [hu-pos/NOUN]()-[hu-pos/PROPN]() (12; 0% instances), [hu-pos/ADJ]()-[hu-pos/NUM]() (10; 0% instances), [hu-pos/ADJ]()-[hu-pos/ADJ]() (8; 0% instances), [hu-pos/ADP]()-[hu-pos/NOUN]() (8; 0% instances), [hu-pos/NOUN]()-[hu-pos/NUM]() (6; 0% instances), [hu-pos/NUM]()-[hu-pos/NOUN]() (6; 0% instances), [hu-pos/PRON]()-[hu-pos/NOUN]() (6; 0% instances), [hu-pos/ADV]()-[hu-pos/PRON]() (4; 0% instances), [hu-pos/DET]()-[hu-pos/NOUN]() (4; 0% instances), [hu-pos/NUM]()-[hu-pos/NUM]() (4; 0% instances), [hu-pos/PROPN]()-[hu-pos/NOUN]() (4; 0% instances), [hu-pos/NOUN]()-[hu-pos/ADJ]() (2; 0% instances), [hu-pos/VERB]()-[hu-pos/ADV]() (2; 0% instances), [hu-pos/ADP]()-[hu-pos/ADJ]() (1; 0% instances), [hu-pos/ADP]()-[hu-pos/PRON]() (1; 0% instances), [hu-pos/CCONJ]()-[hu-pos/NOUN]() (1; 0% instances), [hu-pos/DET]()-[hu-pos/PRON]() (1; 0% instances), [hu-pos/NOUN]()-[hu-pos/DET]() (1; 0% instances), [hu-pos/NUM]()-[hu-pos/ADJ]() (1; 0% instances), [hu-pos/NUM]()-[hu-pos/ADV]() (1; 0% instances), [hu-pos/NUM]()-[hu-pos/PRON]() (1; 0% instances), [hu-pos/PRON]()-[hu-pos/NUM]() (1; 0% instances), [hu-pos/VERB]()-[hu-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nmod:obl	color:blue
1	Az	az	DET	_	Definite=Def|PronType=Art	5	det	_	_
2	utolsó	utolsó	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	amod:att	_	_
3	hat	hat	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	4	nummod	_	_
4	hónapos	hónapos	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	amod:att	_	_
5	időszak	időszak	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	10	nsubj	_	_
6	azonban	azonban	CCONJ	_	_	10	cc	_	_
7	a	a	DET	_	Definite=Def|PronType=Art	8	det	_	_
8	hét	hét	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	9	nmod:att	_	_
9	elején	eleje	NOUN	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	10	nmod:obl	_	_
10	lejárt	le+jár	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:obl	color:blue
1	Testületi	testületi	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	2	amod:att	_	_
2	döntés	döntés	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	nsubj	_	_
3	leghamarabb	hamar	ADV	_	_	5	advmod:mode	_	_
4	januárban	január	NOUN	_	Case=Ine|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	nmod:obl	_	_
5	várható	várható	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPres	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nmod:obl	color:blue
1	Erről	ez	PRON	_	Case=Del|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	5	nmod:obl	_	_
2	szakhatósági	szakhatósági	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	3	amod:att	_	_
3	állásfoglalás	állásfoglalás	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	nsubj	_	_
4	is	is	CCONJ	_	_	3	cc	_	ToDo=cc-without-conj
5	készült	készül	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


