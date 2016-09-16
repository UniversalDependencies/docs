

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Bulgarian)

This relation is universal.

1946 nodes (1%) are attached to their parents as `cop`.

1556 instances of `cop` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.76156217882837.

The following 9 pairs of parts of speech are connected with `cop`: [bg-pos/NOUN]()-[bg-pos/VERB]() (1005; 52% instances), [bg-pos/ADJ]()-[bg-pos/VERB]() (574; 29% instances), [bg-pos/ADV]()-[bg-pos/VERB]() (258; 13% instances), [bg-pos/PRON]()-[bg-pos/VERB]() (61; 3% instances), [bg-pos/PROPN]()-[bg-pos/VERB]() (34; 2% instances), [bg-pos/DET]()-[bg-pos/VERB]() (6; 0% instances), [bg-pos/ADJ]()-[bg-pos/AUX]() (3; 0% instances), [bg-pos/VERB]()-[bg-pos/VERB]() (3; 0% instances), [bg-pos/NUM]()-[bg-pos/VERB]() (2; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 cop	color:blue
1	Страх	страх	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
2	ли	ли	PART	Ti	_	1	discourse	_	_
3	те	аз	PRON	Ppetas2	Case=Acc|Number=Sing|Person=2|PronType=Prs	1	dobj	_	_
4	е	съм	VERB	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	_	_
5	?	?	PUNCT	punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 cop	color:blue
1	Дете	дете	NOUN	Ncnsi	Definite=Ind|Gender=Neut|Number=Sing	0	root	_	_
2	ли	ли	PART	Ti	_	1	discourse	_	_
3	бях	съм	VERB	Vxitf-t1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|VerbForm=Fin|Voice=Act	1	cop	_	_
4	,	,	PUNCT	punct	_	1	punct	_	_
5	стар	стар	ADJ	Amsi	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	1	conj	_	_
6	ли	ли	PART	Ti	_	5	discourse	_	_
7	бях	съм	VERB	Vxitf-t1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|VerbForm=Fin|Voice=Act	5	cop	_	_
8	,	,	PUNCT	punct	_	9	punct	_	_
9	или	или	CONJ	Cp	_	1	cc	_	_
10	бях	съм	VERB	Vxitf-t1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|VerbForm=Fin|Voice=Act	12	cop	_	_
11	вече	вече	ADV	Dt	_	12	advmod	_	_
12	мъртъв	мъртъв	ADJ	Amsi	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	1	conj	_	_
13	?	?	PUNCT	punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 cop	color:blue
1	Всички	всеки	PRON	Pce-op	Case=Nom|Number=Plur|PronType=Tot	3	nsubj	_	_
2	се	се	PRON	Ppxta	Case=Acc|PronType=Prs|Reflex=Yes	3	expl	_	_
3	чувстват	чувствам-(се)	VERB	Vpitf-r3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	близки	близък	ADJ	A-pi	Definite=Ind|Degree=Pos|Number=Plur	3	dobj	_	_
5	,	,	PUNCT	punct	_	10	punct	_	_
6	сякаш	сякаш	ADV	Dd	_	10	advmod	_	_
7	са	съм	AUX	Vxitf-r3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	aux	_	_
8	били	съм	VERB	Vxitcat-p-i	Aspect=Imp|Definite=Ind|Mood=Ind|Number=Plur|VerbForm=Part|Voice=Act	10	cop	_	_
9	столетия	столетие	NOUN	Ncnpi	Definite=Ind|Gender=Neut|Number=Plur	10	nmod	_	_
10	заедно	заедно	ADV	Dm	Degree=Pos	3	advcl	_	_
11	.	.	PUNCT	punct	_	3	punct	_	_

~~~


