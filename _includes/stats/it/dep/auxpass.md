

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is universal.

2182 nodes (1%) are attached to their parents as `auxpass`.

2179 instances of `auxpass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.16452795600367.

The following 6 pairs of parts of speech are connected with `auxpass`: [it-pos/VERB]()-[it-pos/AUX]() (2151; 99% instances), [it-pos/VERB]()-[it-pos/VERB]() (18; 1% instances), [it-pos/ADJ]()-[it-pos/AUX]() (7; 0% instances), [it-pos/NOUN]()-[it-pos/AUX]() (4; 0% instances), [it-pos/PRON]()-[it-pos/AUX]() (1; 0% instances), [it-pos/X]()-[it-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 auxpass	color:blue
1	È	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
2	vero	vero	ADJ	A	Gender=Masc|Number=Sing	0	root	_	_
3	,	,	PUNCT	FF	_	2	punct	_	_
4	tutti	tutto	PRON	PI	Gender=Masc|Number=Plur|PronType=Ind	7	nsubjpass	_	_
5	possiamo	potere	AUX	VM	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	7	aux	_	_
6	essere	essere	AUX	VA	VerbForm=Inf	7	auxpass	_	_
7	sostituiti	sostituire	VERB	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	2	parataxis	_	_
8	.	.	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 auxpass	color:blue
1	La	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	soluzione	soluzione	NOUN	S	Gender=Fem|Number=Sing	5	nsubjpass	_	_
3	colloidale	colloidale	ADJ	A	Number=Sing	2	amod	_	_
4	viene	venire	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	auxpass	_	_
5	estrusa	estrusa	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
6	;	;	PUNCT	FC	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 auxpass	color:blue
1	900	900	NUM	N	NumType=Card	0	root	_	_
2	se	se	SCONJ	CS	_	8	mark	_	_
3	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	4	det	_	_
4	ricerche	ricerca	NOUN	S	Gender=Fem|Number=Plur	8	nsubjpass	_	_
5	sono	essere	AUX	VA	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	8	auxpass	_	_
6	state	essere	VERB	V	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	8	cop	_	_
7	molto	molto	ADV	B	_	8	advmod	_	_
8	lunghe	lungo	ADJ	A	Gender=Fem|Number=Plur	1	advcl	_	_
9	.	.	PUNCT	FS	_	1	punct	_	_

~~~


