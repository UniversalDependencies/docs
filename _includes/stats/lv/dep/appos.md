

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latvian)

This relation is universal.

6 nodes (0%) are attached to their parents as `appos`.

6 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.5.

The following 3 pairs of parts of speech are connected with `appos`: [lv-pos/NOUN]()-[lv-pos/NOUN]() (4; 67% instances), [lv-pos/NOUN]()-[lv-pos/PROPN]() (1; 17% instances), [lv-pos/NUM]()-[lv-pos/PROPN]() (1; 17% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 appos	color:blue
1	Kāda	kāds	DET	pi0msgn	Case=Gen|Gender=Masc|Number=Sing|PronType=Ind	2	det	_	_
2	formāta	formāts	NOUN	ncmsg1	Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	_
3	grāmatas	grāmata	NOUN	ncfpa4	Case=Acc|Gender=Fem|Number=Plur	7	dobj	_	_
4	jūs	jūs	PRON	pp20pnn	Case=Nom|Number=Plur|Person=2|PronType=Prs	7	nsubj	_	_
5	pats	pats	PRON	pg0msnn	Case=Nom|Gender=Masc|Number=Sing|PronType=Tot	7	acl	_	_
6	šobrīd	šobrīd	ADV	r0t	_	7	advmod	_	_
7	lasāt	lasīt	VERB	vmnipt32pan	Mood=Ind|Negative=Neg|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	-	-	PUNCT	zd	_	9	punct	_	_
9	papīra	papīrs	NOUN	ncmsg1	Case=Gen|Gender=Masc|Number=Sing	2	appos	_	_
10	vai	vai	SCONJ	css	_	9	cc	_	_
11	no	no	ADP	sppdy	_	12	case	_	_
12	planšetēm	planšete	NOUN	ncfpd5	Case=Dat|Gender=Fem|Number=Plur	9	conj	_	SpaceAfter=No
13	?	?	PUNCT	zs	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 appos	color:blue
1	Pillar	Pillar	PROPN	np0sg0	Case=Gen|Number=Sing	7	nsubj	_	_
2	Holding	Holding	X	xf	_	1	name	_	_
3	Company	Company	X	xf	_	1	name	_	SpaceAfter=No
4	,	,	PUNCT	zc	_	5	punct	_	_
5	KS	KS	SYM	xx	_	1	acl	_	SpaceAfter=No
6	,	,	PUNCT	zc	_	5	punct	_	_
7	pieder	piederēt	VERB	vmnipi330an	Mood=Ind|Negative=Neg|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	lielākajai	liela	ADJ	affsdyc	Case=Dat|Degree=Cmp|Gender=Fem|Number=Sing	10	amod	_	_
9	Latvijas	Latvija	PROPN	npfsg4	Case=Gen|Gender=Fem|Number=Sing	10	nmod	_	_
10	privātbankai	privātbanka	NOUN	ncfsd4	Case=Dat|Gender=Fem|Number=Sing	7	iobj	_	_
11	-	-	PUNCT	zd	_	12	punct	_	_
12	ABLV	ABLV	PROPN	y	_	10	appos	_	_
13	Bank	Bank	X	xf	_	12	name	_	SpaceAfter=No
14	,	,	PUNCT	zc	_	15	punct	_	_
15	AS	AS	PROPN	y	_	12	acl	_	SpaceAfter=No
16	,	,	PUNCT	zc	_	15	punct	_	_
17	un	un	CONJ	ccs	_	7	cc	_	_
18	apvieno	apvienot	VERB	vmnipt230an	Mood=Ind|Negative=Neg|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	conj	_	_
19	ABLV	ABLV	PROPN	y	_	20	nmod	_	_
20	grupas	grupa	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	21	nmod	_	_
21	uzņēmumus	uzņēmums	NOUN	ncmpa1	Case=Acc|Gender=Masc|Number=Plur	18	dobj	_	SpaceAfter=No
22	,	,	PUNCT	zc	_	29	mark	_	_
23	kuru	kurš	SCONJ	pr0mpgn	Case=Gen|Gender=Masc|Number=Plur|PronType=Rel	25	det	_	_
24	darbības	darbība	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	25	nmod	_	_
25	virziens	virziens	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	29	nsubj	_	_
26	ir	būt	VERB	vcnipii30an	Mood=Ind|Negative=Neg|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	29	aux	_	_
27	nekustamo	nekustams	ADJ	armpgyp	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	28	amod	_	_
28	īpašumu	īpašums	NOUN	ncmpg1	Case=Gen|Gender=Masc|Number=Plur	29	nmod	_	_
29	attīstīšana	attīstīšana	NOUN	ncfsn4	Case=Nom|Gender=Fem|Number=Sing	21	acl	_	SpaceAfter=No
30	,	,	PUNCT	zc	_	29	punct	_	_
31	pārvaldīšana	pārvaldīšana	NOUN	ncfsn4	Case=Nom|Gender=Fem|Number=Sing	29	conj	_	_
32	un	un	CONJ	ccs	_	29	cc	_	_
33	tirdzniecība	tirdzniecība	NOUN	ncfsn4	Case=Nom|Gender=Fem|Number=Sing	29	conj	_	SpaceAfter=No
34	.	.	PUNCT	zs	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 18 appos	color:blue
1	Savukārt	savukārt	ADV	r0q	_	7	advmod	_	_
2	jau	jau	ADV	r0t	_	3	advmod	_	_
3	tuvākajā	tuvs	ADJ	afmslyc	Case=Loc|Degree=Cmp|Gender=Masc|Number=Sing	4	amod	_	_
4	laikā	laiks	NOUN	ncmsl1	Case=Loc|Gender=Masc|Number=Sing	7	nmod	_	_
5	Pillar	Pillar	PROPN	np0sn0	Case=Nom|Number=Sing	7	nsubj	_	_
6	pilnībā	pilnībā	ADV	r0m	_	7	advmod	_	_
7	pabeigs	pabeigt	VERB	vmnift130an	Mood=Ind|Negative=Neg|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	_
8	vienu	viens	NUM	mcsmsav	Case=Acc|Gender=Masc|Number=Sing|NumType=Card	7	dobj	_	_
9	no	no	ADP	sppdy	_	13	case	_	_
10	ekskluzīvākajiem	ekskluzīvs	ADJ	afmpdyc	Case=Dat|Degree=Cmp|Gender=Masc|Number=Plur	13	amod	_	_
11	nekustamā	nekustams	ADJ	armsgyp	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	12	amod	_	_
12	īpašuma	īpašums	NOUN	ncmsg1	Case=Gen|Gender=Masc|Number=Sing	13	nmod	_	_
13	projektiem	projekts	NOUN	ncmpd1	Case=Dat|Gender=Masc|Number=Plur	8	compound	_	_
14	visā	visa	DET	pg0fsln	Case=Loc|Gender=Fem|Number=Sing|PronType=Tot	15	det	_	_
15	Rīgā	Rīga	PROPN	npfsl4	Case=Loc|Gender=Fem|Number=Sing	13	acl	_	_
16	-	-	PUNCT	zd	_	18	punct	_	_
17	"	"	PUNCT	zq	_	18	punct	_	SpaceAfter=No
18	Elizabetes	Elizabete	PROPN	npfsg5	Case=Gen|Gender=Fem|Number=Sing	8	appos	_	_
19	Park	Park	X	xf	_	18	name	_	_
20	House	House	X	xf	_	18	name	_	SpaceAfter=No
21	"	"	PUNCT	zq	_	18	punct	_	_
22	Rīgas	Rīga	PROPN	npfsg4	Case=Gen|Gender=Fem|Number=Sing	23	nmod	_	_
23	centrā	centrs	NOUN	ncmsl1	Case=Loc|Gender=Masc|Number=Sing	18	acl	_	SpaceAfter=No
24	,	,	PUNCT	zc	_	23	punct	_	_
25	Elizabetes	Elizabete	PROPN	npfsg5	Case=Gen|Gender=Fem|Number=Sing	26	nmod	_	_
26	ielā	iela	NOUN	ncfsl4	Case=Loc|Gender=Fem|Number=Sing	27	nmod	_	_
27	21	21	NUM	xn	NumType=Card	23	conj	_	SpaceAfter=No
28	a	a	SYM	xx	_	27	dep	_	SpaceAfter=No
29	.	.	PUNCT	zs	_	7	punct	_	_

~~~


