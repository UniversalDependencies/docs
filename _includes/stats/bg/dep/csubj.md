

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Bulgarian)

This relation is universal.
There are 1 language-specific subtypes of `csubj`: [csubj:pass]().

328 nodes (0%) are attached to their parents as `csubj`.

259 instances of `csubj` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.85060975609756.

The following 19 pairs of parts of speech are connected with `csubj`: [bg-pos/VERB]()-[bg-pos/VERB]() (158; 48% instances), [bg-pos/ADV]()-[bg-pos/VERB]() (110; 34% instances), [bg-pos/NOUN]()-[bg-pos/VERB]() (20; 6% instances), [bg-pos/VERB]()-[bg-pos/NOUN]() (12; 4% instances), [bg-pos/VERB]()-[bg-pos/ADJ]() (8; 2% instances), [bg-pos/ADV]()-[bg-pos/ADJ]() (3; 1% instances), [bg-pos/NOUN]()-[bg-pos/NOUN]() (3; 1% instances), [bg-pos/VERB]()-[bg-pos/ADV]() (3; 1% instances), [bg-pos/ADJ]()-[bg-pos/ADJ]() (1; 0% instances), [bg-pos/ADV]()-[bg-pos/ADV]() (1; 0% instances), [bg-pos/ADV]()-[bg-pos/DET]() (1; 0% instances), [bg-pos/ADV]()-[bg-pos/NOUN]() (1; 0% instances), [bg-pos/ADV]()-[bg-pos/NUM]() (1; 0% instances), [bg-pos/ADV]()-[bg-pos/PRON]() (1; 0% instances), [bg-pos/DET]()-[bg-pos/VERB]() (1; 0% instances), [bg-pos/NOUN]()-[bg-pos/ADJ]() (1; 0% instances), [bg-pos/PRON]()-[bg-pos/VERB]() (1; 0% instances), [bg-pos/VERB]()-[bg-pos/NUM]() (1; 0% instances), [bg-pos/VERB]()-[bg-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 csubj	color:blue
1	На	на	ADP	R	_	2	case	_	_
2	заека	заек	NOUN	Ncmsh	Definite=Def|Gender=Masc|Number=Sing	4	iobj	_	_
3	му	аз	PRON	Ppetds3m	Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	expl	_	_
4	омръзна	омръзне-ми	VERB	Vnpif-o3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	да	да	AUX	Tx	_	6	aux	_	_
6	студува	студувам	VERB	Vpiif-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	csubj	_	SpaceAfter=No
7	.	.	PUNCT	punct	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 csubj	color:blue
1	Не	не	PART	Tn	Polarity=Neg	4	advmod	_	_
2	е	съм	AUX	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
3	много	много	ADV	Md-pi	Definite=Ind|Degree=Pos|Number=Plur|NumType=Card	4	advmod	_	_
4	трудно	трудно	ADV	Dm	Degree=Pos	0	root	_	_
5	да	да	AUX	Tx	_	7	aux	_	_
6	се	се	PRON	Ppxta	Case=Acc|PronType=Prs|Reflex=Yes	7	expl	_	_
7	създаде	създам	VERB	Vpptf-r3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	csubj	_	_
8	такъв	такъв	DET	Pda--s-m	Gender=Masc|Number=Sing|PronType=Dem	9	det	_	_
9	модел	модел	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	7	nsubj:pass	_	_
10	за	за	ADP	R	_	11	case	_	_
11	България	българия	PROPN	Npfsi	Definite=Ind|Gender=Fem|Number=Sing	9	nmod	_	SpaceAfter=No
12	.	.	PUNCT	punct	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 csubj	color:blue
1	Срамота	срамота	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	0	root	_	_
2	е	съм	AUX	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	_	_
3	да	да	AUX	Tx	_	5	aux	_	_
4	се	се	PRON	Ppxta	Case=Acc|PronType=Prs|Reflex=Yes	5	expl	_	_
5	появявате	появявам-се	VERB	Vpiif-r2p	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	1	csubj	_	_
6	в	в	ADP	R	_	9	case	_	_
7	небрежен	небрежен	ADJ	Amsi	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	9	amod	_	_
8	външен	външен	ADJ	Amsi	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	9	amod	_	_
9	вид	вид	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	5	obl	_	_
10	пред	пред	ADP	R	_	11	case	_	_
11	началника	началник	NOUN	Ncmsh	Definite=Def|Gender=Masc|Number=Sing	5	obl	_	SpaceAfter=No
12	.	.	PUNCT	punct	_	1	punct	_	_

~~~


