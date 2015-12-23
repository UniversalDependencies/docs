

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Spanish)

This relation is a language-specific subtype of [acl]().

5338 nodes (1%) are attached to their parents as `acl:relcl`.

5334 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.65886099662795.

The following 48 pairs of parts of speech are connected with `acl:relcl`: [es-pos/NOUN]()-[es-pos/VERB]() (3902; 73% instances), [es-pos/PROPN]()-[es-pos/VERB]() (445; 8% instances), [es-pos/PRON]()-[es-pos/VERB]() (397; 7% instances), [es-pos/NOUN]()-[es-pos/ADJ]() (150; 3% instances), [es-pos/NOUN]()-[es-pos/NOUN]() (109; 2% instances), [es-pos/DET]()-[es-pos/VERB]() (43; 1% instances), [es-pos/PROPN]()-[es-pos/NOUN]() (43; 1% instances), [es-pos/VERB]()-[es-pos/VERB]() (36; 1% instances), [es-pos/X]()-[es-pos/VERB]() (27; 1% instances), [es-pos/PRON]()-[es-pos/NOUN]() (23; 0% instances), [es-pos/NUM]()-[es-pos/VERB]() (20; 0% instances), [es-pos/ADV]()-[es-pos/VERB]() (14; 0% instances), [es-pos/NOUN]()-[es-pos/PRON]() (14; 0% instances), [es-pos/PROPN]()-[es-pos/ADJ]() (13; 0% instances), [es-pos/PRON]()-[es-pos/ADJ]() (12; 0% instances), [es-pos/NOUN]()-[es-pos/PROPN]() (11; 0% instances), [es-pos/ADJ]()-[es-pos/VERB]() (10; 0% instances), [es-pos/PROPN]()-[es-pos/PROPN]() (8; 0% instances), [es-pos/NOUN]()-[es-pos/X]() (7; 0% instances), [es-pos/PRON]()-[es-pos/PRON]() (7; 0% instances), [es-pos/NOUN]()-[es-pos/AUX]() (6; 0% instances), [es-pos/PRON]()-[es-pos/PROPN]() (5; 0% instances), [es-pos/PROPN]()-[es-pos/PRON]() (3; 0% instances), [es-pos/VERB]()-[es-pos/NOUN]() (3; 0% instances), [es-pos/ADP]()-[es-pos/VERB]() (2; 0% instances), [es-pos/AUX]()-[es-pos/VERB]() (2; 0% instances), [es-pos/DET]()-[es-pos/NOUN]() (2; 0% instances), [es-pos/NOUN]()-[es-pos/DET]() (2; 0% instances), [es-pos/PROPN]()-[es-pos/AUX]() (2; 0% instances), [es-pos/SYM]()-[es-pos/VERB]() (2; 0% instances), [es-pos/ADJ]()-[es-pos/ADJ]() (1; 0% instances), [es-pos/ADJ]()-[es-pos/NOUN]() (1; 0% instances), [es-pos/ADV]()-[es-pos/ADJ]() (1; 0% instances), [es-pos/CONJ]()-[es-pos/VERB]() (1; 0% instances), [es-pos/DET]()-[es-pos/ADJ]() (1; 0% instances), [es-pos/DET]()-[es-pos/PRON]() (1; 0% instances), [es-pos/NOUN]()-[es-pos/CONJ]() (1; 0% instances), [es-pos/PRON]()-[es-pos/ADV]() (1; 0% instances), [es-pos/PRON]()-[es-pos/AUX]() (1; 0% instances), [es-pos/PUNCT]()-[es-pos/VERB]() (1; 0% instances), [es-pos/SCONJ]()-[es-pos/ADJ]() (1; 0% instances), [es-pos/SCONJ]()-[es-pos/VERB]() (1; 0% instances), [es-pos/SYM]()-[es-pos/ADJ]() (1; 0% instances), [es-pos/VERB]()-[es-pos/PRON]() (1; 0% instances), [es-pos/X]()-[es-pos/NOUN]() (1; 0% instances), [es-pos/X]()-[es-pos/PRON]() (1; 0% instances), [es-pos/X]()-[es-pos/PROPN]() (1; 0% instances), [es-pos/X]()-[es-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 acl:relcl	color:blue
1	Es	ser	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	de	de	ADP	_	_	4	case	_	_
3	lo	él	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	4	det	_	_
4	mejorcito	mejorcito	NOUN	_	Gender=Masc|Number=Sing	1	nmod	_	_
5	que	que	SCONJ	_	_	6	mark	_	_
6	hay	haber	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	acl:relcl	_	_
7	en	en	ADP	_	_	9	case	_	_
8	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	sur	sur	NOUN	_	Gender=Masc|Number=Sing	6	nmod	_	_
10	,	,	PUNCT	_	_	1	punct	_	_
11	sino	sino	ADV	_	_	13	advmod	_	_
12	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	mejor	mejor	NOUN	_	Number=Sing	1	parataxis	_	_
14	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 acl:relcl	color:blue
1	El	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	tercero	tercero	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
3	fue	ser	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	cop	_	_
4	Giacomo	giacomo	PROPN	_	_	2	nsubj	_	_
5	,	,	PUNCT	_	_	7	punct	_	_
6	que	que	SCONJ	_	_	7	mark	_	_
7	aprendió	aprender	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	acl:relcl	_	_
8	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	oficio	oficio	NOUN	_	Gender=Masc|Number=Sing	7	dobj	_	_
10	de	de	ADP	_	_	11	case	_	_
11	tejedor	tejedor	NOUN	_	Gender=Masc|Number=Sing	9	nmod	_	_
12	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 acl:relcl	color:blue
1	Tiene	tener	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	todo	todo	DET	_	Gender=Masc|Number=Sing|PronType=Tot	3	det	_	_
3	lo	él	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	1	dobj	_	_
4	que	que	SCONJ	_	_	5	mark	_	_
5	necesitas	necesita	VERB	_	Gender=Fem|Number=Plur|VerbForm=Fin	3	acl:relcl	_	_
6	para	para	ADP	_	_	7	mark	_	_
7	relajar	relajar	VERB	_	VerbForm=Inf	5	acl	_	_
8	te	tú	PRON	_	Case=Acc,Dat|Number=Sing|Person=2|PrepCase=Npr|PronType=Prs	7	iobj	_	_
9	y	y	CONJ	_	_	7	cc	_	_
10	pasar	pasar	VERB	_	VerbForm=Inf	7	conj	_	_
11	un	uno	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
12	buen	buen	ADJ	_	Gender=Masc|Number=Sing	13	amod	_	_
13	rato	rato	NOUN	_	Gender=Masc|Number=Sing	10	dobj	_	_
14	.	.	PUNCT	_	_	1	punct	_	_

~~~


