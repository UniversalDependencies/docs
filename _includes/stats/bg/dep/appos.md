

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Bulgarian)

This relation is universal.

17 nodes (0%) are attached to their parents as `appos`.

15 instances of `appos` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.35294117647059.

The following 6 pairs of parts of speech are connected with `appos`: [bg-pos/NOUN]()-[bg-pos/NOUN]() (8; 47% instances), [bg-pos/PRON]()-[bg-pos/NOUN]() (4; 24% instances), [bg-pos/PROPN]()-[bg-pos/NOUN]() (2; 12% instances), [bg-pos/NOUN]()-[bg-pos/PROPN]() (1; 6% instances), [bg-pos/PROPN]()-[bg-pos/PROPN]() (1; 6% instances), [bg-pos/VERB]()-[bg-pos/ADJ]() (1; 6% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 appos	color:blue
1	Иначе	така	ADV	Pdm	PronType=Dem	2	advmod	_	_
2	попада	попадам	VERB	Vppif-r3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	в	в	ADP	R	_	4	case	_	_
4	категорията	категория	NOUN	Ncfsd	Definite=Def|Gender=Fem|Number=Sing	2	iobj	_	_
5	"	"	PUNCT	punct	_	6	punct	_	_
6	качак	качак	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	4	nmod	_	_
7	"	"	PUNCT	punct	_	6	punct	_	_
8	(	(	PUNCT	punct	_	9	punct	_	_
9	беглец	беглец	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	4	appos	_	_
10	,	,	PUNCT	punct	_	9	punct	_	_
11	нелегално	нелегално	ADV	Dm	Degree=Pos	12	advmod	_	_
12	пребиваващ	пребивавам	ADJ	Vpiicar-smi	Aspect=Imp|Definite=Ind|Gender=Masc|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	9	conj	_	_
13	)	)	PUNCT	punct	_	9	punct	_	_
14	и	и	CONJ	Cp	_	2	cc	_	_
15	я	аз	PRON	Ppetas3f	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	16	dobj	_	_
16	грози	грозя	VERB	Vpitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	_	_
17	депортиране	депортиране	NOUN	Ncnsi	Definite=Ind|Gender=Neut|Number=Sing	16	nsubj	_	_
18	под	под	ADP	R	_	19	case	_	_
19	конвой	конвой	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	17	nmod	_	_
20	.	.	PUNCT	punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 appos	color:blue
1	Тя	аз	PRON	Ppe-os3f	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
2	[	[	PUNCT	punct	_	4	punct	_	_
3	писателската	писателски	ADJ	Afsd	Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	4	amod	_	_
4	слава	слава	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	1	appos	_	_
5	]	]	PUNCT	punct	_	4	punct	_	_
6	му	аз	PRON	Ppetds3m	Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	iobj	_	_
7	се	се	PRON	Ppxta	Case=Acc|PronType=Prs|Reflex=Yes	8	expl	_	_
8	виждаше	виждам-(се)	VERB	Vpitf-m3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin|Voice=Act	0	root	_	_
9	сега	сега	ADV	Dt	_	8	advmod	_	_
10	най-достъпна	достъпен	ADJ	Afsi	Definite=Ind|Degree=Sup|Gender=Fem|Number=Sing	8	dobj	_	_
11	.	.	PUNCT	punct	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 18 appos	color:blue
1	От	от	ADP	R	_	3	nmod	_	_
2	вчера	вчера	ADV	Dt	_	1	advmod	_	_
3	стартира	стартирам	VERB	Vpptf-o3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	и	и	CONJ	Cp	_	6	cc	_	_
5	автоматизираната	автоматизирам	ADJ	Vpptcv--sfd	Aspect=Perf|Definite=Def|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	6	amod	_	_
6	система	система	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	3	nsubj	_	_
7	за	за	ADP	R	_	8	case	_	_
8	търговия	търговия	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	6	nmod	_	_
9	на	на	ADP	R	_	10	case	_	_
10	борсата	борса	NOUN	Ncfsd	Definite=Def|Gender=Fem|Number=Sing	8	nmod	_	_
11	,	,	PUNCT	punct	_	12	punct	_	_
12	известна	известен	ADJ	Afsi	Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	6	amod	_	_
13	като	като	ADP	R	_	14	case	_	_
14	RTS	rts	PROPN	Npnsi	Definite=Ind|Gender=Neut|Number=Sing	12	nmod	_	_
15	(	(	PUNCT	punct	_	18	punct	_	_
16	Руска	руски	ADJ	Afsi	Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	18	amod	_	_
17	търговска	търговски	ADJ	Afsi	Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	18	amod	_	_
18	система	система	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	14	appos	_	_
19	)	)	PUNCT	punct	_	18	punct	_	_
20	.	.	PUNCT	punct	_	3	punct	_	_

~~~


