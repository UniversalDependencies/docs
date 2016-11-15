

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is universal.

13 nodes (1%) are attached to their parents as `aux`.

11 instances of `aux` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.23076923076923.

The following 2 pairs of parts of speech are connected with `aux`: [uk-pos/VERB]()-[uk-pos/VERB]() (9; 69% instances), [uk-pos/VERB]()-[uk-pos/PART]() (4; 31% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux	color:blue
1	Він	він	PRON	noun:m:v_naz:&pron:pers:3	Case=Nom|Gender=Masc|Person=3|PronType=Prs	3	nsubj	_	_
2	був	бути	VERB	verb:imperf:past:m	Aspect=Imp|Gender=Masc|Mood=Ind|Tense=Past|VerbForm=Fin	3	aux	_	_
3	пішов	піти	VERB	verb:perf:past:m	Aspect=Perf|Gender=Masc|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
4	,	,	PUNCT	punct	_	3	punct	_	_
5	але	але	CONJ	conj:coord	_	3	cc	_	_
6	повернувся	повернутися	VERB	verb:rev:perf:past:m	Aspect=Perf|Gender=Masc|Mood=Ind|Tense=Past|VerbForm=Fin	3	parataxis	_	SpaceAfter=No
7	.	.	PUNCT	punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux	color:blue
1	Вже	вже	ADV	adv:v-u	_	4	advmod	_	_
2	бим	бим	PART	part	_	4	aux	_	_
3	була	бути	VERB	verb:imperf:past:f	Aspect=Imp|Gender=Fem|Mood=Ind|Tense=Past|VerbForm=Fin	4	aux	_	_
4	їхала	їхати	VERB	verb:imperf:past:f	Aspect=Imp|Gender=Fem|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
5	,	,	PUNCT	punct	_	4	punct	_	_
6	вже	вже	ADV	adv:v-u	_	9	advmod	_	_
7	бим	бим	PART	part	_	9	aux	_	_
8	була	бути	VERB	verb:imperf:past:f	Aspect=Imp|Gender=Fem|Mood=Ind|Tense=Past|VerbForm=Fin	9	aux	_	_
9	йшла	йти	VERB	verb:imperf:past:f	Aspect=Imp|Gender=Fem|Mood=Ind|Tense=Past|VerbForm=Fin	4	parataxis	_	SpaceAfter=No
10	.	.	PUNCT	punct	_	4	punct	_	_

~~~


