

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish-LinES)

This relation is universal.

3 nodes (0%) are attached to their parents as `reparandum`.

3 instances of `reparandum` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 13.

The following 3 pairs of parts of speech are connected with `reparandum`: [sv-pos/ADJ]()-[sv-pos/ADJ]() (1; 33% instances), [sv-pos/PRON]()-[sv-pos/PRON]() (1; 33% instances), [sv-pos/VERB]()-[sv-pos/VERB]() (1; 33% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 reparandum	color:blue
1	Jag	_	PRON	PERS-P1SG-NOM	_	2	reparandum	_	_
2	jag	_	PRON	PERS-SG-NOM	_	3	nsubj	_	_
3	menar	_	VERB	PRES-ACT	_	0	root	_	SpaceAfter=No
4	"	_	PUNCT	Quote	_	3	punct	_	SpaceAfter=No
5	,	_	PUNCT	Comma	_	6	punct	_	_
6	sade	_	VERB	PAST-ACT	_	3	parataxis	_	_
7	han	_	PRON	PERS-P3SG-NOM	_	6	nsubj	_	_
8	svävande	_	VERB	NDE	_	6	advcl	_	_
9	då	_	SCONJ	_	_	7	mark	_	_
10	mrs	_	NOUN	SG-IND-NOM	_	11	nmod	_	_
11	Weasleys	_	PROPN	SG-GEN	_	12	nmod:poss	_	_
12	ögon	_	NOUN	PL-IND-NOM	_	13	nsubj	_	_
13	sköt	_	VERB	PAST-ACT	_	6	advcl	_	_
14	nya	_	ADJ	POS-PL-IND	_	15	amod	_	_
15	blixtar	_	NOUN	PL-IND-NOM	_	13	obj	_	SpaceAfter=No
16	,	_	PUNCT	Comma	_	6	punct	_	_
17	"	_	PUNCT	Quote	_	23	punct	_	SpaceAfter=No
18	att	_	SCONJ	_	_	23	mark	_	_
19	det	_	PRON	PERS-P3SG	_	23	nsubj	_	_
20	var	_	AUX	PAST-ACT	_	23	cop	_	_
21	väldigt	_	ADV	POS	_	22	advmod	_	_
22	illa	_	ADV	_	_	23	advmod	_	_
23	gjort	_	VERB	AD-SG-IND	_	3	ccomp	_	SpaceAfter=No
24	,	_	PUNCT	Comma	_	25	punct	_	_
25	pojkar	_	NOUN	PL-IND-NOM	_	23	vocative	_	SpaceAfter=No
26	,	_	PUNCT	Comma	_	25	punct	_	_
27	verkligen	_	ADV	_	_	29	advmod	_	_
28	mycket	_	ADV	_	_	29	advmod	_	_
29	illa	_	ADV	_	_	30	advmod	_	_
30	gjort	_	VERB	SUP-ACT	_	23	advcl	_	SpaceAfter=No
31	"	_	PUNCT	Quote	_	23	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 reparandum	color:blue
1	Ni	_	PRON	PERS-P2PL-NOM	_	2	nsubj	_	_
2	anar	_	VERB	PRES-ACT	_	0	root	_	_
3	inte	_	PART	NEG	_	2	advmod	_	_
4	hur	_	ADV	WH	_	5	advmod	_	_
5	effektiv	_	ADJ	POS-SG-IND	_	2	ccomp	_	_
6	en	_	DET	SG-IND	_	7	det	_	_
7	sån	_	ADJ	POS-SG-IND	_	10	reparandum	_	SpaceAfter=No
8	...	_	PUNCT	Dots	_	10	punct	_	_
9	en	_	DET	SG-IND	_	12	det	_	_
10	sån	_	ADJ	POS-SG-IND	_	12	amod	_	SpaceAfter=No
11	...	_	PUNCT	Dots	_	10	punct	_	_
12	förmåga	_	NOUN	SG-IND-NOM	_	5	nsubj	_	_
13	kan	_	AUX	PRES-AUX	_	5	aux	_	_
14	vara	_	AUX	INF-ACT	_	5	cop	_	SpaceAfter=No
15	.	_	PUNCT	Period	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 37	bgColor:blue
# visual-style 37	fgColor:white
# visual-style 37 2 reparandum	color:blue
1	Ni	_	PRON	PERS-P2PL-NOM	_	2	nsubj	_	_
2	förstår	_	VERB	PRES-ACT	_	37	reparandum	_	SpaceAfter=No
3	,	_	PUNCT	Comma	_	2	punct	_	_
4	började	_	VERB	PAST-ACT	_	37	parataxis	_	_
5	han	_	PRON	PERS-P3SG-NOM	_	4	nsubj	_	_
6	igen	_	ADV	_	_	4	advmod	_	_
7	och	_	CCONJ	_	_	8	cc	_	_
8	lyfte	_	VERB	PAST-ACT	_	4	conj	_	_
9	ena	_	ADJ	POS-SG-DEF	_	10	amod	_	_
10	armen	_	NOUN	SG-DEF-NOM	_	8	obj	_	_
11	från	_	ADP	_	_	12	case	_	_
12	armbågen	_	NOUN	SG-DEF-NOM	_	8	obl	_	_
13	med	_	ADP	_	_	14	case	_	_
14	handflatan	_	NOUN	SG-DEF-NOM	_	8	obl	_	_
15	utåt	_	ADV	_	_	14	advmod	_	_
16	så	_	ADV	_	_	23	mark	_	_
17	att	_	SCONJ	_	_	16	fixed	_	_
18	han	_	PRON	PERS-P3SG-NOM	_	23	nsubj	_	_
19	med	_	ADP	_	_	22	case	_	_
20	sina	_	PRON	RFL-PL-GEN	_	22	nmod:poss	_	_
21	korslagda	_	ADJ	AD-PL-IND	_	22	amod	_	_
22	ben	_	NOUN	IND-NOM	_	23	obl	_	_
23	satt	_	VERB	PAST-ACT	_	8	advcl	_	_
24	som	_	ADP	_	_	26	case	_	_
25	en	_	DET	SG-IND	_	26	det	_	_
26	buddha	_	NOUN	SG-IND-NOM	_	23	obl	_	SpaceAfter=No
27	,	_	PUNCT	Comma	_	8	punct	_	_
28	predikande	_	VERB	NDE	_	23	advcl	_	_
29	i	_	ADP	_	_	31	case	_	_
30	europeiska	_	ADJ	POS-PL-IND	_	31	amod	_	_
31	kläder	_	NOUN	PL-IND-NOM	_	28	obl	_	_
32	och	_	CCONJ	_	_	34	cc	_	_
33	utan	_	ADP	_	_	34	case	_	_
34	lotusblomma	_	NOUN	SG-IND-NOM	_	31	conj	_	_
35	–	_	PUNCT	Dash	_	37	punct	_	_
36	ni	_	PRON	PERS-P2PL-NOM	_	37	nsubj	_	_
37	förstår	_	VERB	PRES-ACT	_	0	root	_	_
38	–	_	PUNCT	Dash	_	37	punct	_	_
39	ingen	_	PRON	NEG-SG	_	43	nsubj	_	_
40	av	_	ADP	_	_	41	case	_	_
41	oss	_	PRON	PERS-P1PL-ACC	_	39	nmod	_	_
42	skulle	_	AUX	PAST-AUX	_	43	aux	_	_
43	känna	_	VERB	INF-ACT	_	37	parataxis	_	_
44	riktigt	_	ADV	_	_	45	advmod	_	_
45	så	_	ADV	_	_	43	advmod	_	SpaceAfter=No
46	.	_	PUNCT	Period	_	37	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish_Sign_Language)

This relation is universal.

4 nodes (1%) are attached to their parents as `reparandum`.

4 instances of `reparandum` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25.

The following 4 pairs of parts of speech are connected with `reparandum`: [sv-pos/NOUN]()-[sv-pos/VERB]() (1; 25% instances), [sv-pos/NOUN]()-[sv-pos/X]() (1; 25% instances), [sv-pos/VERB]()-[sv-pos/VERB]() (1; 25% instances), [sv-pos/VERB]()-[sv-pos/X]() (1; 25% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 reparandum	color:blue
1	TRÖTT	_	VERB	VBS	_	0	root	_	_
2	glosa@&	_	X	?	_	3	reparandum	_	_
3	MÖRK	_	VERB	VBS	_	1	conj	_	_
4	LÅTA-VARA@z	_	X	G	_	1	discourse	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 reparandum	color:blue
1	tp@&	_	X	?	_	2	reparandum	_	_
2	POJKE	_	NOUN	NN	_	3	nsubj	_	_
3	LÄGGA-SIG	_	VERB	VB	_	0	root	_	_
4	HUND	_	NOUN	NN	_	2	conj	_	_
5	VARELSE(VVb)+BEFINNA@p	_	VERB	VBAV	_	3	conj	_	_
6	SOVA(Jv)	_	VERB	VB	_	3	conj	_	_
7	TIDEN-GÅR@z	_	VERB	VB	_	6	advcl	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 reparandum	color:blue
1	HA	_	VERB	VB	_	0	root	_	_
2	form(Yb)@p@&	_	VERB	VBAV	_	4	reparandum	_	_
3	GLAS	_	NOUN	NN	_	4	compound	_	_
4	FORM(YYb)+BESKRIVNING@p	_	VERB	VBAV	_	1	dobj	_	_
5	FORM(Yb)@p@hd	_	VERB	VBAV	_	4	dep	_	_
6	INUTI	_	VERB	VBPP	_	1	acl:relcl	_	_
7	GRODA	_	NOUN	NN	_	6	nsubj	_	_
8	DJUR(JJv)@ca	_	VERB	VBCA	_	6	conj	_	_
9	AVGRÄNS	_	X	BOJ	_	4	dep	_	_
10	INUTI	_	VERB	VBPP	_	6	conj	_	_
11	TITTA-PÅ	_	VERB	VB	_	1	conj	_	_
12	SAMTALA	_	VERB	VB	_	1	conj	_	_
13	GLOSA:(PD)@z	_	X	?	_	1	conj	_	_

~~~


