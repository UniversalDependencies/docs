

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is a language-specific subtype of [cc]().

13 nodes (0%) are attached to their parents as `cc:preconj`.

13 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.30769230769231.

The following 10 pairs of parts of speech are connected with `cc:preconj`: [et-pos/ADJ]()-[et-pos/ADV]() (2; 15% instances), [et-pos/NOUN]()-[et-pos/ADV]() (2; 15% instances), [et-pos/VERB]()-[et-pos/SCONJ]() (2; 15% instances), [et-pos/CCONJ]()-[et-pos/NOUN]() (1; 8% instances), [et-pos/NOUN]()-[et-pos/ADJ]() (1; 8% instances), [et-pos/NOUN]()-[et-pos/CCONJ]() (1; 8% instances), [et-pos/PROPN]()-[et-pos/CCONJ]() (1; 8% instances), [et-pos/SCONJ]()-[et-pos/ADV]() (1; 8% instances), [et-pos/VERB]()-[et-pos/ADV]() (1; 8% instances), [et-pos/VERB]()-[et-pos/CCONJ]() (1; 8% instances).


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 20 cc:preconj	color:blue
1	Metsa	mets	NOUN	S	Case=Gen|Number=Sing	3	obl	_	_
2	all	all	ADP	K	AdpType=Post	1	case	_	_
3	voolas	voolama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	väike	väike	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	7	amod	_	_
5	puhta	puhas	ADJ	A	Case=Gen|Degree=Pos|Number=Sing	6	amod	_	_
6	veega	vesi	NOUN	S	Case=Com|Number=Sing	7	nmod	_	_
7	oja	oja	NOUN	S	Case=Nom|Number=Sing	3	nsubj	_	SpaceAfter=No
8	,	,	PUNCT	Z	_	16	punct	_	_
9	mille	mis	PRON	P	Case=Gen|Number=Sing|PronType=Rel	10	nmod	_	_
10	kallastel	kallas	NOUN	S	Case=Ade|Number=Plur	16	obl	_	_
11	oli	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	16	aux	_	_
12	paar	paar	NUM	N	Case=Nom|Number=Sing|NumForm=Letter|NumType=Card	14	nummod	_	_
13	kuivanud	kuivanud	ADJ	A	Degree=Pos|Tense=Past|VerbForm=Part|Voice=Act	14	acl	_	_
14	puud	puu	NOUN	S	Case=Par|Number=Sing	16	nsubj	_	_
15	maha	maha	ADV	D	_	16	compound:prt	_	_
16	murdunud	murduma	VERB	V	Tense=Past|VerbForm=Part|Voice=Act	7	acl:relcl	_	SpaceAfter=No
17	,	,	PUNCT	Z	_	25	punct	_	_
18	nii	nii	ADV	D	_	25	advmod	_	_
19	et	et	SCONJ	J	_	25	mark	_	_
20	nii	nii	ADV	D	_	21	cc:preconj	_	_
21	vesi	vesi	NOUN	S	Case=Nom|Number=Sing	25	nsubj:cop	_	_
22	kui	kui	CCONJ	J	_	23	cc	_	_
23	lõkkematerjal	lõkke_materjal	NOUN	S	Case=Nom|Number=Sing	21	conj	_	_
24	olid	olema	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	25	cop	_	_
25	käe-jala	käsi-jalg	NOUN	S	Case=Gen|Number=Sing	16	advcl	_	_
26	juures	juures	ADP	K	AdpType=Post	25	case	_	SpaceAfter=No
27	.	.	PUNCT	Z	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 2 cc:preconj	color:blue
1	Nii	nii	ADV	D	_	2	advmod	_	_
2	nagu	nagu	SCONJ	J	_	12	cc:preconj	_	_
3	ta	tema	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	12	obj	_	_
4	Moskva	Moskva	PROPN	S	Case=Gen|Number=Sing	12	obl	_	_
5	poolt	poolt	ADP	K	AdpType=Post	4	case	_	_
6	mulle	mina	PRON	P	Case=All|Number=Sing|Person=1|PronType=Prs	12	obl	_	_
7	"	"	PUNCT	Z	_	9	punct	_	SpaceAfter=No
8	Tormide	torm	NOUN	S	Case=Gen|Number=Plur	9	nmod	_	_
9	randa	rand	NOUN	S	Case=Add|Number=Sing	12	obl	_	SpaceAfter=No
10	"	"	PUNCT	Z	_	9	punct	_	_
11	sisse	sisse	ADV	D	_	12	compound:prt	_	_
12	topiti	toppima	VERB	V	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	22	advcl	_	SpaceAfter=No
13	,	,	PUNCT	Z	_	22	punct	_	_
14	nii	nii	ADV	D	_	22	advmod	_	_
15	ta	tema	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	22	nsubj	_	_
16	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	22	aux	_	_
17	mulle	mina	PRON	P	Case=All|Number=Sing|Person=1|PronType=Prs	22	obl	_	_
18	sellest	see	DET	P	Case=Ela|Number=Sing|PronType=Dem	19	det	_	_
19	ajaks	aeg	NOUN	S	Case=Tra|Number=Sing	22	obl	_	_
20	kaela	kael	NOUN	S	Case=Gen|Number=Sing	22	obl	_	_
21	peale	peale	ADP	K	AdpType=Post	20	case	_	_
22	jäänud	jääma	VERB	V	Tense=Past|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No
23	!	!	PUNCT	Z	_	22	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc:preconj	color:blue
1	Ent	ent	CCONJ	J	_	3	cc	_	_
2	läbisegi	läbi-segi	ADV	D	_	3	advmod	_	_
3	liikus	liiku	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin|Voice=Act	0	root	_	_
4	nii	nii	ADV	D	_	5	cc:preconj	_	_
5	punast	punane	ADJ	A	Case=Par|Degree=Pos|Number=Sing	9	amod	_	_
6	kui	kui	CCONJ	J	_	8	cc	_	_
7	ka	ka	ADV	D	_	8	advmod	_	_
8	mustavalget	musta-valge	ADJ	A	Case=Par|Degree=Pos|Number=Sing	5	conj	_	_
9	karva	karv	NOUN	S	Case=Par|Number=Sing	10	nmod	_	_
10	veiseid	veis	NOUN	S	Case=Par|Number=Plur	3	nsubj	_	SpaceAfter=No
11	.	.	PUNCT	Z	_	3	punct	_	_

~~~


