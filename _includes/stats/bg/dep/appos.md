

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Bulgarian)

This relation is universal.

13 nodes (0%) are attached to their parents as `appos`.

13 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.46153846153846.

The following 5 pairs of parts of speech are connected with `appos`: [bg-pos/NOUN]()-[bg-pos/NOUN]() (6; 46% instances), [bg-pos/PRON]()-[bg-pos/NOUN]() (3; 23% instances), [bg-pos/ADV]()-[bg-pos/NOUN]() (2; 15% instances), [bg-pos/PROPN]()-[bg-pos/NOUN]() (1; 8% instances), [bg-pos/PROPN]()-[bg-pos/PROPN]() (1; 8% instances).


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
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 17 appos	color:blue
1	Колкото	колкото	ADV	Prq	NumType=Card|PronType=Rel	4	advmod	_	_
2	и	и	CONJ	Cp	_	4	cc	_	_
3	да	да	PART	Tx	_	4	aux	_	_
4	изглежда	изглежда	VERB	Vniif-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	26	advcl	_	_
5	близо	близо	ADV	Dl	_	4	dobj	_	_
6	(	(	PUNCT	punct	_	8	punct	_	_
7	6-7	6-7	NUM	Mc-pi	Definite=Ind|Number=Plur|NumType=Card	8	nummod	_	_
8	години	година	NOUN	Ncfpi	Definite=Ind|Gender=Fem|Number=Plur	5	appos	_	_
9	за	за	ADP	R	_	10	case	_	_
10	политиците	политик	NOUN	Ncmpd	Definite=Def|Gender=Masc|Number=Plur	8	nmod	_	_
11	)	)	PUNCT	punct	_	8	punct	_	_
12	или	или	CONJ	Cp	_	5	cc	_	_
13	далеч	далеч	ADV	Dl	_	5	conj	_	_
14	(	(	PUNCT	punct	_	17	punct	_	_
15	поне	поне	ADV	Dd	_	17	advmod	_	_
16	едно	един	NUM	Mcnsi	Definite=Ind|Gender=Neut|Number=Sing|NumType=Card	17	nummod	_	_
17	десетилетие	десетилетие	NOUN	Ncnsi	Definite=Ind|Gender=Neut|Number=Sing	13	appos	_	_
18	за	за	ADP	R	_	19	case	_	_
19	реалистите	реалист	NOUN	Ncmpd	Definite=Def|Gender=Masc|Number=Plur	17	nmod	_	_
20	)	)	PUNCT	punct	_	17	punct	_	_
21	,	,	PUNCT	punct	_	4	punct	_	_
22	един	един	DET	Pfe-os-mi	Definite=Ind|Gender=Masc|Number=Sing|PronType=Ind	23	det	_	_
23	ден	ден	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	26	nmod	_	_
24	българинът	българин	NOUN	Ncmsf	Definite=Def|Gender=Masc|Number=Sing	26	nsubj	_	_
25	ще	ще	PART	Tx	_	26	aux	_	_
26	стане	стана	VERB	Vppif-r3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
27	част	част	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	26	dobj	_	_
28	от	от	ADP	R	_	29	case	_	_
29	Европа	европа	PROPN	Npfsi	Definite=Ind|Gender=Fem|Number=Sing	27	nmod	_	_
30	.	.	PUNCT	punct	_	26	punct	_	_

~~~


