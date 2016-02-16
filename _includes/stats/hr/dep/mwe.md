

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.

278 nodes (0%) are attached to their parents as `mwe`.

223 instances of `mwe` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.09352517985612.

The following 37 pairs of parts of speech are connected with `mwe`: [hr-pos/ADP]()-[hr-pos/PRON]() (43; 15% instances), [hr-pos/ADV]()-[hr-pos/SCONJ]() (29; 10% instances), [hr-pos/SCONJ]()-[hr-pos/PRON]() (28; 10% instances), [hr-pos/SCONJ]()-[hr-pos/CONJ]() (22; 8% instances), [hr-pos/ADP]()-[hr-pos/NOUN]() (17; 6% instances), [hr-pos/ADP]()-[hr-pos/SCONJ]() (13; 5% instances), [hr-pos/ADV]()-[hr-pos/ADV]() (13; 5% instances), [hr-pos/PRON]()-[hr-pos/ADP]() (13; 5% instances), [hr-pos/SCONJ]()-[hr-pos/SCONJ]() (12; 4% instances), [hr-pos/ADV]()-[hr-pos/ADP]() (10; 4% instances), [hr-pos/ADV]()-[hr-pos/PRON]() (9; 3% instances), [hr-pos/ADP]()-[hr-pos/ADP]() (8; 3% instances), [hr-pos/PRON]()-[hr-pos/AUX]() (8; 3% instances), [hr-pos/ADP]()-[hr-pos/ADV]() (7; 3% instances), [hr-pos/ADV]()-[hr-pos/CONJ]() (7; 3% instances), [hr-pos/ADV]()-[hr-pos/PART]() (4; 1% instances), [hr-pos/CONJ]()-[hr-pos/ADV]() (4; 1% instances), [hr-pos/PRON]()-[hr-pos/PRON]() (4; 1% instances), [hr-pos/ADJ]()-[hr-pos/ADP]() (3; 1% instances), [hr-pos/NOUN]()-[hr-pos/ADP]() (3; 1% instances), [hr-pos/ADJ]()-[hr-pos/PRON]() (2; 1% instances), [hr-pos/CONJ]()-[hr-pos/CONJ]() (2; 1% instances), [hr-pos/NOUN]()-[hr-pos/PRON]() (2; 1% instances), [hr-pos/PRON]()-[hr-pos/PART]() (2; 1% instances), [hr-pos/ADJ]()-[hr-pos/ADJ]() (1; 0% instances), [hr-pos/ADP]()-[hr-pos/CONJ]() (1; 0% instances), [hr-pos/CONJ]()-[hr-pos/PRON]() (1; 0% instances), [hr-pos/CONJ]()-[hr-pos/SCONJ]() (1; 0% instances), [hr-pos/NOUN]()-[hr-pos/NOUN]() (1; 0% instances), [hr-pos/NOUN]()-[hr-pos/SCONJ]() (1; 0% instances), [hr-pos/NUM]()-[hr-pos/CONJ]() (1; 0% instances), [hr-pos/PART]()-[hr-pos/ADV]() (1; 0% instances), [hr-pos/PART]()-[hr-pos/SCONJ]() (1; 0% instances), [hr-pos/PRON]()-[hr-pos/ADV]() (1; 0% instances), [hr-pos/PRON]()-[hr-pos/SCONJ]() (1; 0% instances), [hr-pos/SCONJ]()-[hr-pos/ADP]() (1; 0% instances), [hr-pos/SCONJ]()-[hr-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 mwe	color:blue
1	Stvarni	stvaran	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	2	amod	_	_
2	rok	rok	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	_
3	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	prije	prije	ADP	_	Case=Gen	8	mark	_	_
5	nego	nego	SCONJ	_	_	4	mwe	_	_
6	što	što	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|Person=3|PronType=Ind	4	mwe	_	_
7	Komisija	komisija	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	8	nsubj	_	_
8	predstavi	predstaviti	VERB	_	Number=Sing|Person=3|Tense=Pres	3	advcl	_	_
9	svoje	svoj	PRON	_	Case=Acc|Gender=Fem|Number=Plur|Reflex=Yes	10	nmod	_	_
10	preporuke	preporuka	NOUN	_	Case=Acc|Gender=Fem|Number=Plur	8	dobj	_	_
11	"	"	PUNCT	_	_	3	punct	_	_
12	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 mwe	color:blue
1	Banke	banka	NOUN	_	Case=Nom|Gender=Fem|Number=Plur	2	nsubj	_	_
2	očekuju	očekivati	VERB	_	Number=Plur|Person=3|Tense=Pres	0	root	_	_
3	da	da	SCONJ	_	_	11	mark	_	_
4	kreditne	kreditan	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	8	remnant	_	_
5	,	,	PUNCT	_	_	9	punct	_	_
6	prije	prije	ADV	_	Degree=Pos	9	case	_	_
7	nego	nego	SCONJ	_	_	6	mwe	_	_
8	debitne	debitan	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	9	amod	_	_
9	kartice	kartica	NOUN	_	Case=Nom|Gender=Fem|Number=Plur	11	nmod	_	_
10	,	,	PUNCT	_	_	9	punct	_	_
11	dožive	doživjeti	VERB	_	Number=Plur|Person=3|Tense=Pres	2	ccomp	_	_
12	najspektakularniji	spektakularan	ADJ	_	Case=Acc|Definite=Ind|Degree=Sup|Gender=Masc|Number=Sing	13	amod	_	_
13	rast	rast	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	11	dobj	_	_
14	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 mwe	color:blue
1	"	"	PUNCT	_	_	4	punct	_	_
2	Zemlji	zemlja	NOUN	_	Case=Dat|Gender=Fem|Number=Sing	4	dobj	_	_
3	su	biti	AUX	_	Number=Plur|Person=3|Tense=Pres	4	cop	_	_
4	potrebni	potreban	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	0	root	_	_
5	političari	političar	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	4	nsubj	_	_
6	kao	kao	SCONJ	_	_	8	mark	_	_
7	što	što	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|Person=3|PronType=Ind	6	mwe	_	_
8	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	5	acl	_	_
9	Komšić	Komšić	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	_
10	.	.	PUNCT	_	_	4	punct	_	_

~~~


