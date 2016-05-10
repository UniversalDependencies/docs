

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian)

This relation is universal.
There are 1 language-specific subtypes of `compound`: [compound:prt]().

364 nodes (0%) are attached to their parents as `compound`.

306 instances of `compound` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.69230769230769.

The following 25 pairs of parts of speech are connected with `compound`: [no-pos/NOUN]()-[no-pos/PROPN]() (107; 29% instances), [no-pos/NUM]()-[no-pos/NUM]() (53; 15% instances), [no-pos/NOUN]()-[no-pos/NOUN]() (52; 14% instances), [no-pos/NOUN]()-[no-pos/SYM]() (34; 9% instances), [no-pos/PROPN]()-[no-pos/SYM]() (25; 7% instances), [no-pos/NOUN]()-[no-pos/ADJ]() (14; 4% instances), [no-pos/NOUN]()-[no-pos/ADP]() (12; 3% instances), [no-pos/NOUN]()-[no-pos/NUM]() (11; 3% instances), [no-pos/NOUN]()-[no-pos/PRON]() (10; 3% instances), [no-pos/NOUN]()-[no-pos/VERB]() (10; 3% instances), [no-pos/NOUN]()-[no-pos/X]() (7; 2% instances), [no-pos/NOUN]()-[no-pos/CONJ]() (6; 2% instances), [no-pos/CONJ]()-[no-pos/SYM]() (5; 1% instances), [no-pos/ADJ]()-[no-pos/SYM]() (3; 1% instances), [no-pos/ADJ]()-[no-pos/PROPN]() (2; 1% instances), [no-pos/NOUN]()-[no-pos/DET]() (2; 1% instances), [no-pos/NUM]()-[no-pos/SYM]() (2; 1% instances), [no-pos/PROPN]()-[no-pos/X]() (2; 1% instances), [no-pos/ADJ]()-[no-pos/NOUN]() (1; 0% instances), [no-pos/ADV]()-[no-pos/ADV]() (1; 0% instances), [no-pos/NOUN]()-[no-pos/ADV]() (1; 0% instances), [no-pos/PROPN]()-[no-pos/NOUN]() (1; 0% instances), [no-pos/PROPN]()-[no-pos/PROPN]() (1; 0% instances), [no-pos/VERB]()-[no-pos/NOUN]() (1; 0% instances), [no-pos/VERB]()-[no-pos/SYM]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound	color:blue
1	Jan	Jan	PROPN	_	Gender=Masc	2	compound	_	_
2	Mayen-lovens	Mayen-lov	NOUN	_	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	3	det	_	_
3	regler	regel	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur	4	nsubj	_	_
4	gjelder	gjelde	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
5	for	for	ADP	_	_	7	case	_	_
6	øyas	øy	NOUN	_	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	7	det	_	_
7	land-	land-	NOUN	_	_	4	nmod	_	_
8	og	og	CONJ	_	_	7	cc	_	_
9	sjøterritorium	sjøterritorium	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	7	conj	_	_
10	.	$.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 compound	color:blue
1	-	$-	PUNCT	_	_	2	punct	_	_
2	Bedre	god	ADJ	_	Degree=Cmp	0	root	_	_
3	å	å	PART	_	_	4	mark	_	_
4	kjøpe	kjøpe	VERB	_	VerbForm=Inf	2	csubj	_	_
5	veske	veske	NOUN	_	Definite=Ind|Gender=Fem|Number=Sing	4	dobj	_	_
6	til	til	ADP	_	_	8	case	_	_
7	33	33	NUM	_	Number=Plur|NumType=Card	8	compound	_	_
8	000	000	NUM	_	Number=Plur|NumType=Card	5	nmod	_	_
9	enn	enn	ADP	_	_	10	case	_	_
10	aksjer	aksje	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur	2	nmod	_	_
11	|	$|	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 compound	color:blue
1	Han	han	PRON	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
2	var	være	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	4	cop	_	_
3	selv	selv	ADV	_	_	4	advmod	_	_
4	med	med	ADP	_	_	0	root	_	_
5	på	på	ADP	_	_	7	case	_	_
6	jorden	jord	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	7	compound	_	_
7	rundt-reisen	rundt-reise	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	4	nmod	_	_
8	før	før	SCONJ	_	_	10	mark	_	_
9	dette	dette	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	_
10	skjedde	skje	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	4	advcl	_	_
11	.	$.	PUNCT	_	_	4	punct	_	_

~~~


