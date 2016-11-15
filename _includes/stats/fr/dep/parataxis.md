

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is universal.

603 nodes (0%) are attached to their parents as `parataxis`.

548 instances of `parataxis` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 13.8507462686567.

The following 26 pairs of parts of speech are connected with `parataxis`: [fr-pos/VERB]()-[fr-pos/VERB]() (328; 54% instances), [fr-pos/NOUN]()-[fr-pos/VERB]() (98; 16% instances), [fr-pos/ADJ]()-[fr-pos/VERB]() (51; 8% instances), [fr-pos/VERB]()-[fr-pos/NOUN]() (39; 6% instances), [fr-pos/VERB]()-[fr-pos/ADJ]() (23; 4% instances), [fr-pos/NOUN]()-[fr-pos/ADJ]() (14; 2% instances), [fr-pos/ADJ]()-[fr-pos/NOUN]() (9; 1% instances), [fr-pos/ADJ]()-[fr-pos/ADJ]() (7; 1% instances), [fr-pos/NOUN]()-[fr-pos/NOUN]() (6; 1% instances), [fr-pos/PROPN]()-[fr-pos/VERB]() (5; 1% instances), [fr-pos/VERB]()-[fr-pos/PROPN]() (4; 1% instances), [fr-pos/PRON]()-[fr-pos/VERB]() (3; 0% instances), [fr-pos/ADJ]()-[fr-pos/PRON]() (2; 0% instances), [fr-pos/PROPN]()-[fr-pos/NOUN]() (2; 0% instances), [fr-pos/ADP]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/ADV]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/INTJ]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/ADV]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/NUM]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/PRON]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/PROPN]() (1; 0% instances), [fr-pos/NUM]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/PROPN]()-[fr-pos/PROPN]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/PART]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/PRON]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 4 parataxis	color:blue
1	La	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	question	question	NOUN	_	Gender=Fem|Number=Sing	4	nsubj	_	_
3	suivante	suivant	ADJ	_	Gender=Fem|Number=Sing	2	amod	_	_
4	est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	parataxis	_	_
5	:	:	PUNCT	_	_	4	punct	_	_
6	Peut	pouvoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	aux	_	_
7	-on	on	PRON	_	Gender=Masc|Number=Sing|Person=3	9	nsubj	_	_
8	y	y	ADV	_	_	9	advmod	_	_
9	prendre	prendre	VERB	_	VerbForm=Inf	0	root	_	_
10	épouse	épouse	NOUN	_	Gender=Fem|Number=Sing	9	dobj	_	_
11	?	?	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 2 parataxis	color:blue
1	Comme	comme	ADV	_	_	2	mark	_	_
2	dirait	dire	VERB	_	Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	parataxis	_	_
3	quelqu'un	quelqu'un	PRON	_	Gender=Masc|Number=Sing	2	nsubj	_	_
4	,	,	PUNCT	_	_	10	punct	_	_
5	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	10	nsubj	_	_
6	ne	ne	PART	_	_	10	neg	_	_
7	suis	être	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	10	cop	_	_
8	pas	pas	ADV	_	_	10	neg	_	_
9	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	girouette	girouette	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
11	!	!	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 parataxis	color:blue
1	En	en	ADP	_	_	7	advmod	_	_
2	outre	outre	ADV	_	_	1	mwe	_	_
3	les	le	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	4	det	_	_
4	salles	salle	NOUN	_	Gender=Fem|Number=Plur	7	nsubj	_	_
5	sont	être	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
6	très	très	ADV	_	_	7	advmod	_	_
7	belles	beau	ADJ	_	Gender=Fem|Number=Plur	0	root	_	_
8	ce	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	11	nsubj	_	_
9	qui	qui	PRON	_	_	8	mwe	_	_
10	ne	ne	PART	_	_	11	neg	_	_
11	gâte	gâter	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	parataxis	_	_
12	rien	rien	PRON	_	Number=Sing	11	dobj	_	_
13	.	.	PUNCT	_	_	7	punct	_	_

~~~


