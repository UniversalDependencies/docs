

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is a language-specific subtype of [nmod]().
There are also 3 other language-specific subtypes of `nmod`: [nmod:att](), [nmod:attlvc](), [nmod:obllvc]().

3560 nodes (8%) are attached to their parents as `nmod:obl`.

2621 instances of `nmod:obl` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.13707865168539.

The following 37 pairs of parts of speech are connected with `nmod:obl`: [hu-pos/VERB]()-[hu-pos/NOUN]() (2017; 57% instances), [hu-pos/ADJ]()-[hu-pos/NOUN]() (574; 16% instances), [hu-pos/VERB]()-[hu-pos/PRON]() (256; 7% instances), [hu-pos/VERB]()-[hu-pos/PROPN]() (202; 6% instances), [hu-pos/NOUN]()-[hu-pos/NOUN]() (102; 3% instances), [hu-pos/ADJ]()-[hu-pos/PROPN]() (73; 2% instances), [hu-pos/VERB]()-[hu-pos/NUM]() (55; 2% instances), [hu-pos/ADV]()-[hu-pos/NOUN]() (50; 1% instances), [hu-pos/ADJ]()-[hu-pos/PRON]() (49; 1% instances), [hu-pos/VERB]()-[hu-pos/ADJ]() (41; 1% instances), [hu-pos/NOUN]()-[hu-pos/PRON]() (33; 1% instances), [hu-pos/ADJ]()-[hu-pos/ADJ]() (14; 0% instances), [hu-pos/ADJ]()-[hu-pos/NUM]() (13; 0% instances), [hu-pos/NOUN]()-[hu-pos/PROPN]() (12; 0% instances), [hu-pos/ADP]()-[hu-pos/NOUN]() (8; 0% instances), [hu-pos/PRON]()-[hu-pos/NOUN]() (8; 0% instances), [hu-pos/NOUN]()-[hu-pos/NUM]() (7; 0% instances), [hu-pos/NUM]()-[hu-pos/NOUN]() (7; 0% instances), [hu-pos/ADV]()-[hu-pos/PRON]() (6; 0% instances), [hu-pos/NUM]()-[hu-pos/NUM]() (5; 0% instances), [hu-pos/PROPN]()-[hu-pos/NOUN]() (5; 0% instances), [hu-pos/DET]()-[hu-pos/NOUN]() (4; 0% instances), [hu-pos/NOUN]()-[hu-pos/ADJ]() (3; 0% instances), [hu-pos/VERB]()-[hu-pos/ADV]() (2; 0% instances), [hu-pos/VERB]()-[hu-pos/DET]() (2; 0% instances), [hu-pos/ADP]()-[hu-pos/ADJ]() (1; 0% instances), [hu-pos/ADP]()-[hu-pos/PRON]() (1; 0% instances), [hu-pos/ADP]()-[hu-pos/PROPN]() (1; 0% instances), [hu-pos/ADV]()-[hu-pos/NUM]() (1; 0% instances), [hu-pos/ADV]()-[hu-pos/PROPN]() (1; 0% instances), [hu-pos/CONJ]()-[hu-pos/NOUN]() (1; 0% instances), [hu-pos/DET]()-[hu-pos/PRON]() (1; 0% instances), [hu-pos/NOUN]()-[hu-pos/DET]() (1; 0% instances), [hu-pos/NUM]()-[hu-pos/ADJ]() (1; 0% instances), [hu-pos/NUM]()-[hu-pos/ADV]() (1; 0% instances), [hu-pos/NUM]()-[hu-pos/PRON]() (1; 0% instances), [hu-pos/PRON]()-[hu-pos/NUM]() (1; 0% instances).


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
6	azonban	azonban	CONJ	_	_	10	cc	_	_
7	a	a	DET	_	Definite=Def|PronType=Art	8	det	_	_
8	hét	hét	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	9	nmod:att	_	_
9	elején	eleje	NOUN	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	10	nmod:obl	_	_
10	lejárt	le+jár	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
11	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:obl	color:blue
1	Ettől	ez	DET	_	Case=Abl|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	3	det	_	_
2	a	a	DET	_	Definite=Def|PronType=Art	3	det	_	_
3	győzelemtől	győzelem	NOUN	_	Case=Abl|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	nmod:obl	_	_
4	magabiztos	magabiztos	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	0	root	_	_
5	lettem	lesz	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	4	cop	_	_
6	.	.	PUNCT	_	_	4	punct	_	_

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
4	is	is	CONJ	_	_	3	cc	_	_
5	készült	készül	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


