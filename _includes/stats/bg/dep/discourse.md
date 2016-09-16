

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Bulgarian)

This relation is universal.

703 nodes (0%) are attached to their parents as `discourse`.

365 instances of `discourse` (52%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.40967283072546.

The following 30 pairs of parts of speech are connected with `discourse`: [bg-pos/VERB]()-[bg-pos/PART]() (422; 60% instances), [bg-pos/NOUN]()-[bg-pos/PART]() (58; 8% instances), [bg-pos/VERB]()-[bg-pos/INTJ]() (57; 8% instances), [bg-pos/ADV]()-[bg-pos/PART]() (32; 5% instances), [bg-pos/NOUN]()-[bg-pos/PROPN]() (22; 3% instances), [bg-pos/ADJ]()-[bg-pos/PART]() (19; 3% instances), [bg-pos/PROPN]()-[bg-pos/PROPN]() (17; 2% instances), [bg-pos/DET]()-[bg-pos/PART]() (11; 2% instances), [bg-pos/CONJ]()-[bg-pos/PART]() (9; 1% instances), [bg-pos/VERB]()-[bg-pos/PRON]() (7; 1% instances), [bg-pos/ADJ]()-[bg-pos/INTJ]() (6; 1% instances), [bg-pos/VERB]()-[bg-pos/PROPN]() (6; 1% instances), [bg-pos/NOUN]()-[bg-pos/INTJ]() (5; 1% instances), [bg-pos/ADV]()-[bg-pos/PROPN]() (4; 1% instances), [bg-pos/PROPN]()-[bg-pos/PART]() (4; 1% instances), [bg-pos/VERB]()-[bg-pos/SCONJ]() (4; 1% instances), [bg-pos/ADJ]()-[bg-pos/PROPN]() (3; 0% instances), [bg-pos/ADV]()-[bg-pos/INTJ]() (2; 0% instances), [bg-pos/NOUN]()-[bg-pos/PRON]() (2; 0% instances), [bg-pos/PRON]()-[bg-pos/PART]() (2; 0% instances), [bg-pos/PROPN]()-[bg-pos/INTJ]() (2; 0% instances), [bg-pos/ADV]()-[bg-pos/PRON]() (1; 0% instances), [bg-pos/NOUN]()-[bg-pos/CONJ]() (1; 0% instances), [bg-pos/NOUN]()-[bg-pos/NOUN]() (1; 0% instances), [bg-pos/NOUN]()-[bg-pos/NUM]() (1; 0% instances), [bg-pos/VERB]()-[bg-pos/CONJ]() (1; 0% instances), [bg-pos/VERB]()-[bg-pos/DET]() (1; 0% instances), [bg-pos/VERB]()-[bg-pos/NUM]() (1; 0% instances), [bg-pos/VERB]()-[bg-pos/X]() (1; 0% instances), [bg-pos/X]()-[bg-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 4 discourse	color:blue
1	Спрях	спра-(се)	VERB	Vpptf-o1s	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
2	го	аз	PRON	Ppetas3m	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	1	dobj	_	_
3	,	,	PUNCT	punct	_	9	punct	_	_
4	да	да	PART	Tx	_	9	discourse	_	_
5	не	не	INTJ	Tn	_	4	mwe	_	_
6	би	съм	VERB	Vxitu-o3s	Aspect=Imp|Mood=Cnd|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	mwe	_	_
7	да	да	PART	Tx	_	9	aux	_	_
8	ме	аз	PRON	Ppetas1	Case=Acc|Number=Sing|Person=1|PronType=Prs	9	dobj	_	_
9	удари	ударя-(се)	VERB	Vpptf-r3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	advcl	_	_
10	.	.	PUNCT	punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 discourse	color:blue
1	Страх	страх	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
2	ли	ли	PART	Ti	_	1	discourse	_	_
3	те	аз	PRON	Ppetas2	Case=Acc|Number=Sing|Person=2|PronType=Prs	1	dobj	_	_
4	е	съм	VERB	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	_	_
5	?	?	PUNCT	punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 discourse	color:blue
1	Да	да	INTJ	Ta	_	7	discourse	_	_
2	,	,	PUNCT	punct	_	1	punct	_	_
3	КУЧЕТО	куче	NOUN	Ncnsd	Definite=Def|Gender=Neut|Number=Sing	7	nsubj	_	_
4	на	на	ADP	R	_	5	case	_	_
5	съседите	съсед	NOUN	Ncmpd	Definite=Def|Gender=Masc|Number=Plur	3	nmod	_	_
6	е	съм	AUX	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux	_	_
7	изчезнало	изчезна	VERB	Vppicao-sni	Aspect=Perf|Definite=Ind|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
8	.	.	PUNCT	punct	_	7	punct	_	_

~~~


