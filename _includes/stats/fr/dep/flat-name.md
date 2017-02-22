

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is a language-specific subtype of [flat]().
There are also 1 other language-specific subtypes of `flat`: [flat:foreign]().

7001 nodes (2%) are attached to their parents as `flat:name`.

7001 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.27653192401086.

The following 31 pairs of parts of speech are connected with `flat:name`: [fr-pos/PROPN]()-[fr-pos/PROPN]() (6394; 91% instances), [fr-pos/NOUN]()-[fr-pos/PROPN]() (179; 3% instances), [fr-pos/PROPN]()-[fr-pos/ADP]() (148; 2% instances), [fr-pos/PROPN]()-[fr-pos/NOUN]() (53; 1% instances), [fr-pos/PROPN]()-[fr-pos/X]() (50; 1% instances), [fr-pos/PROPN]()-[fr-pos/DET]() (48; 1% instances), [fr-pos/PROPN]()-[fr-pos/PUNCT]() (41; 1% instances), [fr-pos/NOUN]()-[fr-pos/NOUN]() (15; 0% instances), [fr-pos/PROPN]()-[fr-pos/SYM]() (12; 0% instances), [fr-pos/PROPN]()-[fr-pos/NUM]() (10; 0% instances), [fr-pos/ADJ]()-[fr-pos/NOUN]() (5; 0% instances), [fr-pos/NOUN]()-[fr-pos/ADP]() (5; 0% instances), [fr-pos/PROPN]()-[fr-pos/ADJ]() (5; 0% instances), [fr-pos/ADJ]()-[fr-pos/PROPN]() (4; 0% instances), [fr-pos/ADP]()-[fr-pos/PROPN]() (4; 0% instances), [fr-pos/NOUN]()-[fr-pos/ADJ]() (3; 0% instances), [fr-pos/NOUN]()-[fr-pos/X]() (3; 0% instances), [fr-pos/PROPN]()-[fr-pos/CCONJ]() (3; 0% instances), [fr-pos/X]()-[fr-pos/PROPN]() (3; 0% instances), [fr-pos/ADV]()-[fr-pos/NOUN]() (2; 0% instances), [fr-pos/PROPN]()-[fr-pos/PART]() (2; 0% instances), [fr-pos/SYM]()-[fr-pos/PROPN]() (2; 0% instances), [fr-pos/X]()-[fr-pos/X]() (2; 0% instances), [fr-pos/ADJ]()-[fr-pos/NUM]() (1; 0% instances), [fr-pos/ADJ]()-[fr-pos/SYM]() (1; 0% instances), [fr-pos/ADV]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/CCONJ]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/DET]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/PART]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/PROPN]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat:name	color:blue
1	L'	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	SpaceAfter=No
2	éditeur-en-chef	éditeur-en-chef	NOUN	_	Gender=Masc|Number=Sing	4	nsubj	_	_
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	Corey	Corey	PROPN	_	_	0	root	_	_
5	S.	S.	PROPN	_	_	4	flat:name	_	_
6	Powell	Powell	PROPN	_	_	4	flat:name	_	SpaceAfter=No
7	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 flat:name	color:blue
1	Une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
2	bonne	bon	ADJ	_	Gender=Fem|Number=Sing	3	amod	_	_
3	raison	raison	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
4	pour	pour	ADP	_	_	5	mark	_	_
5	faire	faire	VERB	_	VerbForm=Inf	3	advcl	_	_
6	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	détour	détour	NOUN	_	Gender=Masc|Number=Sing	5	obj	_	_
8	à	à	ADP	_	_	9	case	_	_
9	saint	saint	NOUN	_	Gender=Masc|Number=Sing	7	nmod	_	_
10	Jean	Jean	PROPN	_	_	9	flat:name	_	_
11	de	de	ADP	_	_	9	flat:name	_	_
12	Maurienne	Maurienne	PROPN	_	_	9	flat:name	_	SpaceAfter=No
13	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 flat:name	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	père	père	NOUN	_	Gender=Masc|Number=Sing	5	nsubj	_	_
3	abbé	abbé	NOUN	_	Gender=Masc|Number=Sing	2	conj	_	_
4	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	Dom	Dom	PROPN	_	_	0	root	_	_
6	René-Hugues	René-Hugues	PROPN	_	_	5	flat:name	_	_
7	de	de	ADP	_	_	5	flat:name	_	_
8	Lacheisserie	Lacheisserie	PROPN	_	_	5	flat:name	_	SpaceAfter=No
9	,	,	PUNCT	_	_	10	punct	_	_
10	osb	osb	X	_	_	5	conj	_	SpaceAfter=No
11	.	.	PUNCT	_	_	5	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_French-ParTUT)

This relation is a language-specific subtype of [flat]().
There are also 1 other language-specific subtypes of `flat`: [flat:foreign]().

34 nodes (0%) are attached to their parents as `flat:name`.

34 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.14705882352941.

The following 1 pairs of parts of speech are connected with `flat:name`: [fr-pos/PROPN]()-[fr-pos/PROPN]() (34; 100% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat:name	color:blue
1	Voici	voici	ADP	E	_	3	discourse	_	_
2	une	un	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	photo	photo	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
4	de	de	ADP	E	_	5	case	_	_
5	Cannery	Cannery	PROPN	SP	_	3	nmod	_	_
6	Row	Row	PROPN	SP	_	5	flat:name	_	_
7	en	en	ADP	E	_	8	case	_	_
8	1932	1932	NUM	N	NumType=Card	5	nummod	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_French-Sequoia)

This relation is a language-specific subtype of [flat]().

758 nodes (1%) are attached to their parents as `flat:name`.

758 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.09498680738786.

The following 3 pairs of parts of speech are connected with `flat:name`: [fr-pos/PROPN]()-[fr-pos/PROPN]() (565; 75% instances), [fr-pos/NOUN]()-[fr-pos/PROPN]() (187; 25% instances), [fr-pos/PROPN]()-[fr-pos/ADP]() (6; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat:name	color:blue
1	vice-président	vice-président	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
2	:	:	PUNCT	_	_	1	punct	_	_
3	André	André	PROPN	_	Gender=Masc|Number=Sing	1	nmod	_	_
4	Ménétrez	Ménétrez	PROPN	_	_	3	flat:name	_	_
5	;	;	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:name	color:blue
1	M.	monsieur	NOUN	_	Gender=Masc|Number=Sing	3	nsubj	_	_
2	Hosneld	Hosneld	PROPN	_	_	1	flat:name	_	_
3	avait	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
4	44	44	NUM	_	NumType=Card	5	nummod	_	_
5	ans	an	NOUN	_	Gender=Masc|Number=Plur	3	obj	_	SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat:name	color:blue
1	-	-	PUNCT	_	_	2	punct	_	_
2	Yves	Yves	PROPN	_	Gender=Masc|Number=Sing	0	root	_	_
3	de	de	ADP	_	_	2	flat:name	_	_
4	Galzin	Galzin	PROPN	_	_	2	flat:name	_	_
5	:	:	PUNCT	_	_	2	punct	_	_
6	ex-représentant	ex-représentant	NOUN	_	Gender=Masc|Number=Sing	2	appos	_	_
7	de	de	ADP	_	_	9	case	_	_
8	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	9	det	_	_
9	missiles	missile	NOUN	_	Gender=Masc|Number=Plur	6	nmod	_	_
10	Matra	Matra	PROPN	_	Gender=Masc|Number=Sing	9	nmod	_	_
11	à	à	ADP	_	_	12	case	_	_
12	Taïwan	Taïwan	PROPN	_	Gender=Masc|Number=Sing	6	nmod	_	SpaceAfter=No
13	.	.	PUNCT	_	_	2	punct	_	_

~~~


