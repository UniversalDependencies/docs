

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Bulgarian)

This relation is universal.

1725 nodes (1%) are attached to their parents as `nummod`.

1580 instances of `nummod` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.18144927536232.

The following 5 pairs of parts of speech are connected with `nummod`: [bg-pos/NOUN]()-[bg-pos/NUM]() (1679; 97% instances), [bg-pos/PROPN]()-[bg-pos/NUM]() (41; 2% instances), [bg-pos/PRON]()-[bg-pos/NUM]() (3; 0% instances), [bg-pos/ADJ]()-[bg-pos/NOUN]() (1; 0% instances), [bg-pos/NOUN]()-[bg-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	Двете	два	NUM	Mcfpd	Definite=Def|Gender=Fem|Number=Plur|NumType=Card	2	nummod	_	_
2	сестри	сестра	NOUN	Ncfpi	Definite=Ind|Gender=Fem|Number=Plur	3	nsubj	_	_
3	започнаха	започна	VERB	Vpptf-o3p	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	да	да	PART	Tx	_	6	aux	_	_
5	си	се	PRON	Ppxtd	Case=Dat|PronType=Prs|Reflex=Yes	6	expl	_	_
6	шепнат	шепна	VERB	Vpitf-r3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	ccomp	_	_
7	още	още	ADV	Dq	_	8	advmod	_	_
8	по-ниско	ниско	ADV	Dm	Degree=Cmp	6	advmod	_	_
9	.	.	PUNCT	punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 nummod	color:blue
1	Вземаме	вземам	VERB	Vpitf-r1p	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	94	94	NUM	Mc-pi	Definite=Ind|Number=Plur|NumType=Card	3	nummod	_	_
3	млн.	милион	NOUN	Ncmt	Gender=Masc|Number=Count	1	dobj	_	_
4	евро	евро	NOUN	Ncnsi	Definite=Ind|Gender=Neut|Number=Sing	3	nmod	_	_
5	заеми	заем	NOUN	Ncmpi	Definite=Ind|Gender=Masc|Number=Plur	3	nmod	_	_
6	за	за	ADP	R	_	7	case	_	_
7	Дунав	дунав	PROPN	Npmsi	Definite=Ind|Gender=Masc|Number=Sing	1	nmod	_	_
8	мост	мост	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	7	nmod	_	_
9	-	-	PUNCT	punct	_	10	punct	_	_
10	2	два	NUM	Mc-pi	Definite=Ind|Number=Plur|NumType=Card	7	nummod	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nummod	color:blue
1	-	-	PUNCT	punct	_	5	punct	_	_
2	Ние	аз	PRON	Ppe-op1	Case=Nom|Number=Plur|Person=1|PronType=Prs	5	nsubj	_	_
3	четиримата	четирима	NUM	Mc--d	_	2	nummod	_	_
4	бихме	съм	AUX	Vxitu-o1p	Aspect=Imp|Mood=Cnd|Number=Plur|Person=1|VerbForm=Fin	5	aux	_	_
5	могли	мога	VERB	Vpiicao-p-i	Aspect=Imp|Definite=Ind|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
6	да	да	PART	Tx	_	9	aux	_	_
7	бъдем	бъда	VERB	Vyptf-r1p	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	_	_
8	чудесен	чудесен	ADJ	Amsi	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	9	amod	_	_
9	екип	екип	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	5	xcomp	_	_

~~~


