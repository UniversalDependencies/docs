

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian)

This relation is universal.

10721 nodes (3%) are attached to their parents as `cc`.

8943 instances of `cc` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.84618972110811.

The following 19 pairs of parts of speech are connected with `cc`: [no-pos/VERB]()-[no-pos/CONJ]() (3916; 37% instances), [no-pos/NOUN]()-[no-pos/CONJ]() (3799; 35% instances), [no-pos/ADJ]()-[no-pos/CONJ]() (1470; 14% instances), [no-pos/PROPN]()-[no-pos/CONJ]() (946; 9% instances), [no-pos/PRON]()-[no-pos/CONJ]() (185; 2% instances), [no-pos/ADP]()-[no-pos/CONJ]() (141; 1% instances), [no-pos/ADV]()-[no-pos/CONJ]() (107; 1% instances), [no-pos/NUM]()-[no-pos/CONJ]() (80; 1% instances), [no-pos/DET]()-[no-pos/CONJ]() (54; 1% instances), [no-pos/AUX]()-[no-pos/CONJ]() (5; 0% instances), [no-pos/INTJ]()-[no-pos/CONJ]() (5; 0% instances), [no-pos/SYM]()-[no-pos/CONJ]() (4; 0% instances), [no-pos/NOUN]()-[no-pos/ADV]() (2; 0% instances), [no-pos/X]()-[no-pos/CONJ]() (2; 0% instances), [no-pos/ADJ]()-[no-pos/ADP]() (1; 0% instances), [no-pos/ADJ]()-[no-pos/ADV]() (1; 0% instances), [no-pos/NOUN]()-[no-pos/ADP]() (1; 0% instances), [no-pos/PROPN]()-[no-pos/ADV]() (1; 0% instances), [no-pos/SCONJ]()-[no-pos/CONJ]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cc	color:blue
1	Og	og	CONJ	_	_	3	cc	_	_
2	Aftenposten	Aftenposten	PROPN	_	Gender=Masc	3	nsubj	_	_
3	leverer	levere	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
4	,	$,	PUNCT	_	_	3	punct	_	_
5	også	også	ADV	_	_	6	advmod	_	_
6	her	her	ADV	_	_	3	advmod	_	_
7	.	$.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 cc	color:blue
1	Dette	dette	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	rører	røre	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	ved	ved	ADP	_	_	6	case	_	_
4	de	de	DET	_	Number=Plur|PronType=Dem	6	det	_	_
5	dypeste	dyp	ADJ	_	Definite=Def|Degree=Sup	6	amod	_	_
6	verdiene	verdi	NOUN	_	Definite=Def|Gender=Masc|Number=Plur	2	nmod	_	_
7	og	og	CONJ	_	_	6	cc	_	_
8	holdningene	holdning	NOUN	_	Definite=Def|Gender=Fem|Number=Plur	6	conj	_	_
9	vi	vi	PRON	_	Animacy=Anim|Case=Nom|Number=Plur|Person=1|PronType=Prs	10	nsubj	_	_
10	har	ha	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	8	acl:relcl	_	_
11	.	$.	PUNCT	_	_	2	punct	_	_
12	»	$"	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 cc	color:blue
1	Berntsen	Berntsen	PROPN	_	_	3	nsubj	_	_
2	har	ha	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	påtatt	påta	VERB	_	VerbForm=Part	0	root	_	_
4	seg	seg	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	3	iobj	_	_
5	en	en	DET	_	Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
6	både	både	CONJ	_	_	7	cc	_	_
7	viktig	viktig	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	10	amod	_	_
8	og	og	CONJ	_	_	7	cc	_	_
9	vanskelig	vanskelig	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	7	conj	_	_
10	oppgave	oppgave	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	3	dobj	_	_
11	.	$.	PUNCT	_	_	3	punct	_	_

~~~


