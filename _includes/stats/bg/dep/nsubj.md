

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Bulgarian)

This relation is universal.

10209 nodes (7%) are attached to their parents as `nsubj`.

7953 instances of `nsubj` (78%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.87481633852483.

The following 46 pairs of parts of speech are connected with `nsubj`: [bg-pos/VERB]()-[bg-pos/NOUN]() (4999; 49% instances), [bg-pos/VERB]()-[bg-pos/PRON]() (2084; 20% instances), [bg-pos/VERB]()-[bg-pos/PROPN]() (1293; 13% instances), [bg-pos/NOUN]()-[bg-pos/NOUN]() (522; 5% instances), [bg-pos/ADJ]()-[bg-pos/NOUN]() (351; 3% instances), [bg-pos/NOUN]()-[bg-pos/PRON]() (235; 2% instances), [bg-pos/VERB]()-[bg-pos/ADJ]() (127; 1% instances), [bg-pos/ADJ]()-[bg-pos/PRON]() (99; 1% instances), [bg-pos/NOUN]()-[bg-pos/PROPN]() (87; 1% instances), [bg-pos/VERB]()-[bg-pos/DET]() (87; 1% instances), [bg-pos/ADV]()-[bg-pos/NOUN]() (56; 1% instances), [bg-pos/VERB]()-[bg-pos/NUM]() (52; 1% instances), [bg-pos/PRON]()-[bg-pos/NOUN]() (32; 0% instances), [bg-pos/ADV]()-[bg-pos/PRON]() (25; 0% instances), [bg-pos/VERB]()-[bg-pos/ADV]() (22; 0% instances), [bg-pos/PROPN]()-[bg-pos/NOUN]() (20; 0% instances), [bg-pos/PRON]()-[bg-pos/PRON]() (18; 0% instances), [bg-pos/ADJ]()-[bg-pos/PROPN]() (16; 0% instances), [bg-pos/NOUN]()-[bg-pos/DET]() (11; 0% instances), [bg-pos/DET]()-[bg-pos/NOUN]() (6; 0% instances), [bg-pos/NOUN]()-[bg-pos/NUM]() (6; 0% instances), [bg-pos/ADJ]()-[bg-pos/ADJ]() (5; 0% instances), [bg-pos/NOUN]()-[bg-pos/ADJ]() (5; 0% instances), [bg-pos/PRON]()-[bg-pos/PROPN]() (5; 0% instances), [bg-pos/PROPN]()-[bg-pos/PRON]() (5; 0% instances), [bg-pos/ADJ]()-[bg-pos/DET]() (4; 0% instances), [bg-pos/ADV]()-[bg-pos/PROPN]() (4; 0% instances), [bg-pos/ADJ]()-[bg-pos/NUM]() (3; 0% instances), [bg-pos/ADV]()-[bg-pos/ADJ]() (3; 0% instances), [bg-pos/ADV]()-[bg-pos/DET]() (3; 0% instances), [bg-pos/NUM]()-[bg-pos/NOUN]() (3; 0% instances), [bg-pos/VERB]()-[bg-pos/VERB]() (3; 0% instances), [bg-pos/INTJ]()-[bg-pos/PRON]() (2; 0% instances), [bg-pos/PRON]()-[bg-pos/ADJ]() (2; 0% instances), [bg-pos/PRON]()-[bg-pos/DET]() (2; 0% instances), [bg-pos/PROPN]()-[bg-pos/PROPN]() (2; 0% instances), [bg-pos/ADJ]()-[bg-pos/ADV]() (1; 0% instances), [bg-pos/ADP]()-[bg-pos/PRON]() (1; 0% instances), [bg-pos/ADV]()-[bg-pos/ADV]() (1; 0% instances), [bg-pos/ADV]()-[bg-pos/NUM]() (1; 0% instances), [bg-pos/AUX]()-[bg-pos/PRON]() (1; 0% instances), [bg-pos/NOUN]()-[bg-pos/ADV]() (1; 0% instances), [bg-pos/NOUN]()-[bg-pos/CONJ]() (1; 0% instances), [bg-pos/NUM]()-[bg-pos/ADJ]() (1; 0% instances), [bg-pos/PROPN]()-[bg-pos/ADJ]() (1; 0% instances), [bg-pos/VERB]()-[bg-pos/CONJ]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj	color:blue
1	Огрените	огрея	ADJ	Vpptcv--p-d	Aspect=Perf|Definite=Def|Number=Plur|VerbForm=Part|Voice=Pass	2	amod	_	_
2	скали	скала	NOUN	Ncfpi	Definite=Ind|Gender=Fem|Number=Plur	4	nsubj	_	_
3	отсреща	отсреща	ADV	Dl	_	2	advmod	_	_
4	немееха	немея	VERB	Vpiif-m3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin|Voice=Act	0	root	_	_
5	.	.	PUNCT	punct	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 nsubj	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nsubj	color:blue
1	При	при	ADP	R	_	2	case	_	_
2	стареца	старец	NOUN	Ncmsh	Definite=Def|Gender=Masc|Number=Sing	4	iobj	_	_
3	бе	съм	AUX	Vxitf-t3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	aux	_	_
4	останала	остана	VERB	Vppicao-sfi	Aspect=Perf|Definite=Ind|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
5	Христина	христина	PROPN	Npfsi	Definite=Ind|Gender=Fem|Number=Sing	4	nsubj	_	_
6	,	,	PUNCT	punct	_	9	punct	_	_
7	хубавата	хубав	ADJ	Afsd	Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	9	amod	_	_
8	му	мой	PRON	Psot--3--m	Person=3|Poss=Yes|PronType=Prs	7	det	_	_
9	внучка	внучка	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	5	nmod	_	_
10	.	.	PUNCT	punct	_	4	punct	_	_

~~~


