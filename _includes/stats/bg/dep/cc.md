

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Bulgarian)

This relation is universal.

4866 nodes (3%) are attached to their parents as `cc`.

3823 instances of `cc` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.62083847102343.

The following 21 pairs of parts of speech are connected with `cc`: [bg-pos/NOUN]()-[bg-pos/CONJ]() (2125; 44% instances), [bg-pos/VERB]()-[bg-pos/CONJ]() (1676; 34% instances), [bg-pos/PROPN]()-[bg-pos/CONJ]() (404; 8% instances), [bg-pos/ADJ]()-[bg-pos/CONJ]() (365; 8% instances), [bg-pos/ADV]()-[bg-pos/CONJ]() (105; 2% instances), [bg-pos/NOUN]()-[bg-pos/ADV]() (54; 1% instances), [bg-pos/PRON]()-[bg-pos/CONJ]() (54; 1% instances), [bg-pos/NUM]()-[bg-pos/CONJ]() (31; 1% instances), [bg-pos/DET]()-[bg-pos/CONJ]() (16; 0% instances), [bg-pos/PART]()-[bg-pos/CONJ]() (8; 0% instances), [bg-pos/ADP]()-[bg-pos/CONJ]() (7; 0% instances), [bg-pos/VERB]()-[bg-pos/ADV]() (4; 0% instances), [bg-pos/ADJ]()-[bg-pos/ADV]() (3; 0% instances), [bg-pos/ADV]()-[bg-pos/ADV]() (3; 0% instances), [bg-pos/VERB]()-[bg-pos/PART]() (3; 0% instances), [bg-pos/NOUN]()-[bg-pos/PART]() (2; 0% instances), [bg-pos/VERB]()-[bg-pos/SCONJ]() (2; 0% instances), [bg-pos/ADJ]()-[bg-pos/SCONJ]() (1; 0% instances), [bg-pos/CONJ]()-[bg-pos/CONJ]() (1; 0% instances), [bg-pos/INTJ]()-[bg-pos/CONJ]() (1; 0% instances), [bg-pos/PART]()-[bg-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 9 cc	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 cc	color:blue
1	Но	но	CONJ	Cc	_	7	cc	_	_
2	ти	аз	PRON	Ppe-os2	Case=Nom|Number=Sing|Person=2|PronType=Prs	7	nsubj	_	_
3	,	,	PUNCT	punct	_	4	punct	_	_
4	малкият	малък	ADJ	Amsf	Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	7	amod	_	_
5	,	,	PUNCT	punct	_	4	punct	_	_
6	не	не	INTJ	Tn	_	7	neg	_	_
7	мисли	мисля	VERB	Vpitz--2s	Aspect=Imp|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	0	root	_	_
8	,	,	PUNCT	punct	_	12	punct	_	_
9	че	че	SCONJ	Cs	_	12	mark	_	_
10	се	се	PRON	Ppxta	Case=Acc|PronType=Prs|Reflex=Yes	12	expl	_	_
11	е	съм	AUX	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	aux	_	_
12	свършило	свърша-(се)	VERB	Vpptcao-sni	Aspect=Perf|Definite=Ind|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	7	ccomp	_	_
13	.	.	PUNCT	punct	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 cc	color:blue
1	Небесното	небесен	ADJ	Ansd	Definite=Def|Degree=Pos|Gender=Neut|Number=Sing	2	amod	_	_
2	тяло	тяло	NOUN	Ncnsi	Definite=Ind|Gender=Neut|Number=Sing	4	nsubj	_	_
3	се	се	PRON	Ppxta	Case=Acc|PronType=Prs|Reflex=Yes	4	expl	_	_
4	намира	намирам-(се)	VERB	Vpitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	между	между	ADP	R	_	6	case	_	_
6	Уран	уран	PROPN	Npmsi	Definite=Ind|Gender=Masc|Number=Sing	4	iobj	_	_
7	и	и	CONJ	Cp	_	6	cc	_	_
8	Плутон	плутон	PROPN	Npmsi	Definite=Ind|Gender=Masc|Number=Sing	6	conj	_	_

~~~


