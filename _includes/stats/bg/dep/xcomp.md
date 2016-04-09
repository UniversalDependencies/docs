

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Bulgarian)

This relation is universal.

12 nodes (0%) are attached to their parents as `xcomp`.

11 instances of `xcomp` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5.

The following 3 pairs of parts of speech are connected with `xcomp`: [bg-pos/VERB]()-[bg-pos/NOUN]() (7; 58% instances), [bg-pos/VERB]()-[bg-pos/ADJ]() (4; 33% instances), [bg-pos/VERB]()-[bg-pos/PROPN]() (1; 8% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 xcomp	color:blue
1	Правя	правя-(се)	VERB	Vpitf-r1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	те	аз	PRON	Ppetas2	Case=Acc|Number=Sing|Person=2|PronType=Prs	1	dobj	_	_
3	бан	бан	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	1	xcomp	_	_
4	на	на	ADP	R	_	6	case	_	_
5	Търновската	търновски	ADJ	Afsd	Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	6	amod	_	_
6	област	област	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	3	nmod	_	_
7	.	.	PUNCT	punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 xcomp	color:blue
1	Емоциите	емоция	NOUN	Ncfpd	Definite=Def|Gender=Fem|Number=Plur	2	nsubj	_	_
2	щяха	ща	VERB	Vpitf-m3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin|Voice=Act	0	root	_	_
3	да	да	PART	Tx	_	5	aux	_	_
4	го	аз	PRON	Ppetas3m	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	dobj	_	_
5	правят	правя-(се)	VERB	Vpitf-r3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	ccomp	_	_
6	уязвим	уязвим	ADJ	Amsi	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	5	xcomp	_	_
7	.	.	PUNCT	punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 xcomp	color:blue
1	Прекръстили	прекръстя-(се)	VERB	Vpptcao-p-i	Aspect=Perf|Definite=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
2	ме	аз	PRON	Ppetas1	Case=Acc|Number=Sing|Person=1|PronType=Prs	1	dobj	_	_
3	Пшеничката	пшеничката	PROPN	Npfsi	Definite=Ind|Gender=Fem|Number=Sing	1	xcomp	_	_
4	,	,	PUNCT	punct	_	7	punct	_	_
5	защото	защото	ADV	Prc	_	7	advmod	_	_
6	съм	съм	AUX	Vxitf-r1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux	_	_
7	приличала	приличам	VERB	Vpiicam-sfi	Aspect=Imp|Definite=Ind|Gender=Fem|Number=Sing|Tense=Imp|VerbForm=Fin|Voice=Act	1	advcl	_	_
8	на	на	ADP	R	_	10	case	_	_
9	узрял	узрея	ADJ	Vppicao-smi	Aspect=Perf|Definite=Ind|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	10	amod	_	_
10	клас	клас	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	7	iobj	_	_
11	...	...	PUNCT	punct	_	1	punct	_	_

~~~


