

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian)

This relation is universal.

695 nodes (0%) are attached to their parents as `iobj`.

594 instances of `iobj` (85%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.44892086330935.

The following 7 pairs of parts of speech are connected with `iobj`: [no-pos/VERB]()-[no-pos/PRON]() (482; 69% instances), [no-pos/VERB]()-[no-pos/NOUN]() (145; 21% instances), [no-pos/VERB]()-[no-pos/PROPN]() (48; 7% instances), [no-pos/VERB]()-[no-pos/ADJ]() (12; 2% instances), [no-pos/VERB]()-[no-pos/DET]() (4; 1% instances), [no-pos/VERB]()-[no-pos/SCONJ]() (3; 0% instances), [no-pos/VERB]()-[no-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 iobj	color:blue
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


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 iobj	color:blue
1	Jeg	jeg	PRON	_	Animacy=Anim|Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	håper	håpe	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	du	du	PRON	_	Animacy=Anim|Case=Nom|Number=Sing|Person=2|PronType=Prs	5	nsubj	_	_
4	virkelig	virkelig	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	5	advmod	_	_
5	forteller	fortelle	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	2	ccomp	_	_
6	nordmennene	nordmann	NOUN	_	Definite=Def|Gender=Masc|Number=Plur	5	iobj	_	_
7	hva	hva	PRON	_	PronType=Int	9	dobj	_	_
8	vi	vi	PRON	_	Animacy=Anim|Case=Nom|Number=Plur|Person=1|PronType=Prs	9	nsubj	_	_
9	synes	synes	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	5	ccomp	_	_
10	om	om	ADP	_	_	11	case	_	_
11	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	9	nmod	_	_
12	.	$.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 iobj	color:blue
1	Jeg	jeg	PRON	_	Animacy=Anim|Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
2	skal	skulle	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	aux	_	_
3	ihvertfall	ihvertfall	ADV	_	_	4	advmod	_	_
4	prøve	prøve	VERB	_	VerbForm=Inf	0	root	_	_
5	,	$,	PUNCT	_	_	4	punct	_	_
6	lover	love	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	parataxis	_	_
7	Svindal	Svindal	PROPN	_	_	6	nsubj	_	_
8	Dagbladet.no	Dagbladet.no	PROPN	_	_	6	iobj	_	_
9	.	$.	PUNCT	_	_	4	punct	_	_

~~~


