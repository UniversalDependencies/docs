

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Bulgarian)

This relation is universal.

3058 nodes (2%) are attached to their parents as `ccomp`.

2459 instances of `ccomp` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.07226945716154.

The following 4 pairs of parts of speech are connected with `ccomp`: [bg-pos/VERB]()-[bg-pos/VERB]() (3014; 99% instances), [bg-pos/PART]()-[bg-pos/VERB]() (42; 1% instances), [bg-pos/VERB]()-[bg-pos/INTJ]() (1; 0% instances), [bg-pos/VERB]()-[bg-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 ccomp	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 ccomp	color:blue
1	Ето	ето	PART	Tv	_	0	root	_	_
2	така	така	ADV	Pdm	PronType=Dem	5	advmod	_	_
3	Циана	циана	PROPN	Npfsi	Definite=Ind|Gender=Fem|Number=Sing	5	nsubj	_	_
4	се	се	PRON	Ppxta	Case=Acc|PronType=Prs|Reflex=Yes	5	expl	_	_
5	раздели	разделя-(се)	VERB	Vpptf-o3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	1	ccomp	_	_
6	и	и	CONJ	Cp	_	10	cc	_	_
7	със	със	ADP	R	_	10	case	_	_
8	своя	свой	DET	Psxlos-mh	Definite=Def|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	10	det	_	_
9	бивш	бивш	ADJ	Amsi	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	10	amod	_	_
10	колега	колега	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	5	dobj	_	_
11	.	.	PUNCT	punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 57	bgColor:blue
# visual-style 57	fgColor:white
# visual-style 57 1 ccomp	color:blue
1	Нека	нека	PART	Tv	_	57	ccomp	_	_
2	не	не	INTJ	Tn	_	3	neg	_	_
3	забравяме	забравям-(се)	VERB	Vpitf-r1p	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	1	ccomp	_	_
4	,	,	PUNCT	punct	_	20	punct	_	_
5	че	че	SCONJ	Cs	_	20	mark	_	_
6	когато	когато	ADV	Prt	PronType=Rel	7	advmod	_	_
7	искаме	искам	VERB	Vpitf-r1p	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	20	advcl	_	_
8	да	да	PART	Tx	_	10	aux	_	_
9	се	се	PRON	Ppxta	Case=Acc|PronType=Prs|Reflex=Yes	10	expl	_	_
10	борим	боря-(се)	VERB	Vpitf-r1p	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	7	ccomp	_	_
11	със	със	ADP	R	_	13	case	_	_
12	сенчестата	сенчест	ADJ	Afsd	Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	13	amod	_	_
13	икономика	икономика	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	10	iobj	_	_
14	и	и	CONJ	Cp	_	13	cc	_	_
15	мафиотския	мафиотски	ADJ	Amsh	Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	16	amod	_	_
16	капитал	капитал	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	13	conj	_	_
17	,	,	PUNCT	punct	_	7	punct	_	_
18	най-прекият	пряк	ADJ	Amsf	Definite=Def|Degree=Sup|Gender=Masc|Number=Sing	19	amod	_	_
19	път	път	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	20	nsubj	_	_
20	е	съм	VERB	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	dobj	_	_
21	да	да	PART	Tx	_	23	aux	_	_
22	се	се	PRON	Ppxta	Case=Acc|PronType=Prs|Reflex=Yes	23	expl	_	_
23	привличат	привличам	VERB	Vpitf-r3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	20	ccomp	_	_
24	солидни	солиден	ADJ	A-pi	Definite=Ind|Degree=Pos|Number=Plur	27	amod	_	_
25	,	,	PUNCT	punct	_	24	punct	_	_
26	стратегически	стратегически	ADJ	A-pi	Definite=Ind|Degree=Pos|Number=Plur	24	conj	_	_
27	инвеститори	инвеститор	NOUN	Ncmpi	Definite=Ind|Gender=Masc|Number=Plur	23	nsubj	_	_
28	,	,	PUNCT	punct	_	30	punct	_	_
29	които	който	PRON	Pre-op	Case=Nom|Number=Plur|PronType=Rel	30	nsubj	_	_
30	имат	имам	VERB	Vpitf-r3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	27	acl	_	_
31	наложена	наложен	ADJ	Afsi	Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	32	amod	_	_
32	физиономия	физиономия	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	30	dobj	_	_
33	в	в	ADP	R	_	34	case	_	_
34	света	свят	NOUN	Ncmsh	Definite=Def|Gender=Masc|Number=Sing	30	nmod	_	_
35	и	и	CONJ	Cp	_	30	cc	_	_
36	които	който	PRON	Pre-op	Case=Nom|Number=Plur|PronType=Rel	37	nsubj	_	_
37	идват	идвам	VERB	Vpiif-r3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	30	conj	_	_
38	тук	там	ADV	Pdl	PronType=Dem	37	dobj	_	_
39	със	със	ADP	R	_	41	case	_	_
40	своето	свой	DET	Psxlos-nd	Definite=Def|Gender=Neut|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	41	det	_	_
41	реноме	реноме	NOUN	Ncnsi	Definite=Ind|Gender=Neut|Number=Sing	37	nmod	_	_
42	и	и	CONJ	Cp	_	41	cc	_	_
43	главно	главно	ADV	Dd	Degree=Pos	49	advmod	_	_
44	-	-	PUNCT	punct	_	49	punct	_	_
45	със	със	ADP	R	_	49	case	_	_
46	своите	свой	DET	Psxlop--d	Definite=Def|Number=Plur|Poss=Yes|PronType=Prs|Reflex=Yes	49	det	_	_
47	големи	голям	ADJ	A-pi	Definite=Ind|Degree=Pos|Number=Plur	49	amod	_	_
48	икономически	икономически	ADJ	A-pi	Definite=Ind|Degree=Pos|Number=Plur	49	amod	_	_
49	способности	способност	NOUN	Ncfpi	Definite=Ind|Gender=Fem|Number=Plur	41	conj	_	_
50	,	,	PUNCT	punct	_	52	punct	_	_
51	които	който	PRON	Pre-op	Case=Nom|Number=Plur|PronType=Rel	52	nsubj	_	_
52	са	съм	VERB	Vxitf-r3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	49	acl	_	_
53	зад	зад	ADP	R	_	54	case	_	_
54	гърба	гръб	NOUN	Ncmsh	Definite=Def|Gender=Masc|Number=Sing	52	iobj	_	_
55	им	техен	PRON	Pszt--3	Person=3|Poss=Yes|PronType=Prs	54	case	_	_
56	,	,	PUNCT	punct	_	1	punct	_	_
57	допълни	допълня	VERB	Vpptf-o3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
58	президентът	президент	NOUN	Ncmsf	Definite=Def|Gender=Masc|Number=Sing	57	nsubj	_	_
59	Стоянов	стоянов	PROPN	Hmsi	Definite=Ind|Gender=Masc|Number=Sing	58	nmod	_	_
60	.	.	PUNCT	punct	_	57	punct	_	_

~~~


