

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is universal.

6769 nodes (2%) are attached to their parents as `name`.

6769 instances of `name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.25897473777515.

The following 31 pairs of parts of speech are connected with `name`: [fr-pos/PROPN]()-[fr-pos/PROPN]() (6390; 94% instances), [fr-pos/NOUN]()-[fr-pos/PROPN]() (160; 2% instances), [fr-pos/PROPN]()-[fr-pos/NOUN]() (53; 1% instances), [fr-pos/PROPN]()-[fr-pos/X]() (46; 1% instances), [fr-pos/PROPN]()-[fr-pos/ADP]() (33; 0% instances), [fr-pos/NOUN]()-[fr-pos/NOUN]() (15; 0% instances), [fr-pos/PROPN]()-[fr-pos/SYM]() (11; 0% instances), [fr-pos/PROPN]()-[fr-pos/NUM]() (10; 0% instances), [fr-pos/PROPN]()-[fr-pos/ADJ]() (5; 0% instances), [fr-pos/PROPN]()-[fr-pos/DET]() (5; 0% instances), [fr-pos/ADJ]()-[fr-pos/NOUN]() (4; 0% instances), [fr-pos/ADJ]()-[fr-pos/PROPN]() (4; 0% instances), [fr-pos/X]()-[fr-pos/X]() (4; 0% instances), [fr-pos/ADP]()-[fr-pos/PROPN]() (3; 0% instances), [fr-pos/NOUN]()-[fr-pos/ADJ]() (3; 0% instances), [fr-pos/NOUN]()-[fr-pos/X]() (3; 0% instances), [fr-pos/PROPN]()-[fr-pos/CONJ]() (3; 0% instances), [fr-pos/ADV]()-[fr-pos/NOUN]() (2; 0% instances), [fr-pos/PROPN]()-[fr-pos/PART]() (2; 0% instances), [fr-pos/SYM]()-[fr-pos/PROPN]() (2; 0% instances), [fr-pos/ADJ]()-[fr-pos/NUM]() (1; 0% instances), [fr-pos/ADJ]()-[fr-pos/SYM]() (1; 0% instances), [fr-pos/ADV]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/ADP]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/CONJ]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/DET]() (1; 0% instances), [fr-pos/PUNCT]()-[fr-pos/PROPN]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/PART]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/PROPN]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/X]()-[fr-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 name	color:blue
1	L'	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	éditeur-en-chef	éditeur-en-chef	NOUN	_	Gender=Masc|Number=Sing	4	nsubj	_	_
3	est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	Corey	Corey	PROPN	_	_	0	root	_	_
5	S.	S.	PROPN	_	_	4	name	_	_
6	Powell	Powell	PROPN	_	_	4	name	_	_
7	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 name	color:blue
1	Une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
2	bonne	bon	ADJ	_	Gender=Fem|Number=Sing	3	amod	_	_
3	raison	raison	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
4	pour	pour	ADP	_	_	5	mark	_	_
5	faire	faire	VERB	_	VerbForm=Inf	3	advcl	_	_
6	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	détour	détour	NOUN	_	Gender=Masc|Number=Sing	5	dobj	_	_
8	à	à	ADP	_	_	9	case	_	_
9	saint	saint	NOUN	_	Gender=Masc|Number=Sing	7	nmod	_	_
10	Jean	Jean	PROPN	_	_	9	name	_	_
11	de	de	ADP	_	_	9	name	_	_
12	Maurienne	Maurienne	PROPN	_	_	9	name	_	_
13	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 name	color:blue
1	Un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	champ	champ	NOUN	_	Gender=Masc|Number=Sing	3	nsubj	_	_
3	porte	porter	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	nom	nom	NOUN	_	Gender=Masc|Number=Sing	3	dobj	_	_
6	de	de	ADP	_	_	9	case	_	_
7	Gueredic	Gueredic	PROPN	_	_	5	nmod	_	_
8	saint	saint	NOUN	_	Gender=Masc|Number=Sing	7	name	_	_
9	Hervé	Hervé	PROPN	_	_	7	name	_	_
10	.	.	PUNCT	_	_	3	punct	_	_

~~~


