

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is a language-specific subtype of [amod]().
There are also 3 other language-specific subtypes of `amod`: [amod:attlvc](), [amod:mode](), [amod:obl]().

5006 nodes (12%) are attached to their parents as `amod:att`.

4995 instances of `amod:att` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.40371554135038.

The following 24 pairs of parts of speech are connected with `amod:att`: [hu-pos/NOUN]()-[hu-pos/ADJ]() (4191; 84% instances), [hu-pos/NOUN]()-[hu-pos/NUM]() (313; 6% instances), [hu-pos/ADJ]()-[hu-pos/ADJ]() (161; 3% instances), [hu-pos/PROPN]()-[hu-pos/ADJ]() (133; 3% instances), [hu-pos/ADJ]()-[hu-pos/NUM]() (84; 2% instances), [hu-pos/NOUN]()-[hu-pos/PRON]() (79; 2% instances), [hu-pos/NUM]()-[hu-pos/NUM]() (15; 0% instances), [hu-pos/NUM]()-[hu-pos/ADJ]() (9; 0% instances), [hu-pos/NOUN]()-[hu-pos/VERB]() (3; 0% instances), [hu-pos/ADJ]()-[hu-pos/PRON]() (2; 0% instances), [hu-pos/ADV]()-[hu-pos/PRON]() (2; 0% instances), [hu-pos/NOUN]()-[hu-pos/NOUN]() (2; 0% instances), [hu-pos/ADJ]()-[hu-pos/NOUN]() (1; 0% instances), [hu-pos/ADJ]()-[hu-pos/X]() (1; 0% instances), [hu-pos/ADV]()-[hu-pos/ADJ]() (1; 0% instances), [hu-pos/ADV]()-[hu-pos/ADV]() (1; 0% instances), [hu-pos/NOUN]()-[hu-pos/ADV]() (1; 0% instances), [hu-pos/NOUN]()-[hu-pos/X]() (1; 0% instances), [hu-pos/NUM]()-[hu-pos/ADV]() (1; 0% instances), [hu-pos/NUM]()-[hu-pos/PRON]() (1; 0% instances), [hu-pos/PROPN]()-[hu-pos/NOUN]() (1; 0% instances), [hu-pos/SCONJ]()-[hu-pos/NUM]() (1; 0% instances), [hu-pos/VERB]()-[hu-pos/ADJ]() (1; 0% instances), [hu-pos/X]()-[hu-pos/ADJ]() (1; 0% instances).


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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 amod:att	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	dolgok	dolog	NOUN	_	Case=Nom|Number=Plur	4	nmod:att	_	_
3	pillanatnyi	pillanatnyi	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	4	amod:att	_	_
4	állása	állás	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	nmod	_	_
5	szerint	szerint	ADP	_	_	4	case	_	_
6	az	az	DET	_	Definite=Def|PronType=Art	7	det	_	_
7	utóbbira	utóbbi	NOUN	_	Case=Sub|Number=Sing	8	nmod:obl	_	_
8	mutatkozik	mutatkozik	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
9	több	több	NUM	_	Case=Nom|Number=Sing|NumType=Card	10	amod:att	_	_
10	esély	esély	NOUN	_	Case=Nom|Number=Sing	8	nsubj	_	_
11	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 amod:att	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	bank	bank	NOUN	_	Case=Nom|Number=Sing	6	nmod:att	_	_
3	idei	idei	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	6	amod:att	_	_
4	első	első	ADJ	_	Case=Nom|Number=Sing|NumType=Ord	5	amod:att	_	_
5	féléves	féléves	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	6	amod:att	_	_
6	mérlege	mérleg	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	11	nsubj	_	_
7	973	973	NUM	_	Case=Nom|Number=Sing|NumType=Card	8	compound	_	_
8	millió	millió	NUM	_	Case=Nom|Number=Sing|NumType=Card	9	amod:att	_	_
9	forint	forint	NOUN	_	Case=Nom|Number=Sing	10	nmod:att	_	_
10	hiányt	hiány	NOUN	_	Case=Acc|Number=Sing	11	dobj	_	_
11	mutatott	mutat	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
12	,	,	PUNCT	_	_	11	punct	_	_
13	így	így	CONJ	_	_	11	cc	_	_
14	4,2	4,2	NUM	_	Case=Nom|Number=Sing|NumType=Frac	15	compound	_	_
15	milliárd	milliárd	NUM	_	Case=Nom|Number=Sing|NumType=Card	16	amod:att	_	_
16	forint	forint	NOUN	_	Case=Nom|Number=Sing	11	conj	_	_
17	volt	van	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	16	cop	_	_
18	a	a	DET	_	Definite=Def|PronType=Art	20	det	_	_
19	saját	saját	PRON	_	Case=Nom|Number=Sing|Person=3|Poss=Yes|PronType=Prs	20	amod:att	_	_
20	tőkéje	tőke	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	16	nsubj	_	_
21	.	.	PUNCT	_	_	11	punct	_	_

~~~


