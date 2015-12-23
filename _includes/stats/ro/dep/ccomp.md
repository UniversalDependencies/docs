

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

134 nodes (1%) are attached to their parents as `ccomp`.

134 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.75373134328358.

The following 5 pairs of parts of speech are connected with `ccomp`: [ro-pos/VERB]()-[ro-pos/VERB]() (129; 96% instances), [ro-pos/VERB]()-[ro-pos/ADJ]() (2; 1% instances), [ro-pos/NOUN]()-[ro-pos/VERB]() (1; 1% instances), [ro-pos/VERB]()-[ro-pos/ADV]() (1; 1% instances), [ro-pos/VERB]()-[ro-pos/PRON]() (1; 1% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 ccomp	color:blue
1	Un	un	DET	Timsr	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	2	det	_	_
2	om	vrea	NOUN	Ncmsrn	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	10	nsubj	_	_
3	ca	ca	ADV	Rc	_	4	case	_	_
4	el	el	PRON	Pp3msr--------s	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Strong	2	nmod	_	_
5	nici	nici	ADV	Rz	PronType=Neg	6	advmod	_	_
6	doi	doi	NUM	Mcmp-l	Gender=Masc|Number=Plur|NumForm=Word|NumType=Card	7	nummod	_	_
7	ani	an	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	10	nmod	_	_
8	n-	nu	PART	Qz	Negative=Neg	10	neg	_	_
9	a	avea	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux	_	_
10	putut	putea	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
11	să	să	PART	Qs	Mood=Sub	12	mark	_	_
12	stea	sta	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	10	ccomp	_	_
13	în	în	ADP	Sp	AdpType=Prep	14	case	_	_
14	Butucani	Butucani	PROPN	Np	_	12	nmod	_	_
15	.	.	PUNCT	PERIOD	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 16 ccomp	color:blue
1	Și	și	CONJ	Crssp	Negative=Pos	10	cc	_	_
2	cum	cum	ADV	Rw	PronType=Int,Rel	7	advmod	_	_
3	războiul	război	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	7	nsubj	_	_
4	de-	de	ADP	Spsay	AdpType=Prep|Case=Acc|Variant=Short	5	case	_	_
5	abia	abia	ADV	Rgp	Degree=Pos	7	advmod	_	_
6	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	7	expl:pv	_	_
7	terminase	termina	VERB	Vmil3s	Mood=Ind|Number=Sing|Person=3|Tense=Pqp|VerbForm=Fin	10	advcl	_	_
8	,	,	PUNCT	COMMA	_	7	punct	_	_
9	am	avea	AUX	Va--1	Person=1	10	aux	_	_
10	socotit	socoti	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
11	că	că	SCONJ	Csssp	Negative=Pos	16	mark	_	_
12	n-	nu	PART	Qz-y	Negative=Neg|Variant=Short	16	neg	_	_
13	ar	avea	AUX	Va--3	Person=3	16	aux	_	_
14	fi	fi	VERB	Vmnp	Tense=Pres|VerbForm=Inf	16	cop	_	_
15	tocmai	tocmai	ADV	Rgp	Degree=Pos	16	advmod	_	_
16	nepotrivit	nepotrivit	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	10	ccomp	_	_
17	să	să	PART	Qs	Mood=Sub	18	mark	_	_
18	povestesc	povesti	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	16	csubjpass	_	_
19	"	"	PUNCT	DBLQ	_	20	punct	_	_
20	Întoarcerea	întoarcere	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	18	dobj	_	_
21	tatii	tată	NOUN	Ncmsoy	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	20	nmod	_	_
22	din	din	ADP	Spsa	AdpType=Prep|Case=Acc	23	case	_	_
23	războiu	războiu	NOUN	Ncmsrn	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	21	nmod	_	_
24	"	"	PUNCT	DBLQ	_	20	punct	_	_
25	.	.	PUNCT	PERIOD	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 ccomp	color:blue
1	Mi-	eu	PRON	Pp1-sd--y-----w	Case=Dat|Number=Sing|Person=1|PronType=Prs|Strength=Weak|Variant=Short	5	iobj	_	_
2	era	fi	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	5	cop	_	_
3	însă	însă	CONJ	Ccssp	Negative=Pos	5	cc	_	_
4	tare	tare	ADV	Rgp	Degree=Pos	5	advmod	_	_
5	teamă	teamă	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	0	root	_	_
6	c-	că	SCONJ	Cssspy	Negative=Pos|Variant=Short	10	mark	_	_
7	am	avea	AUX	Va--1	Person=1	10	aux	_	_
8	s-	să	PART	Qs	Mood=Sub	10	mark	_	_
9	o	el	PRON	Pp3fsa--------w	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs|Strength=Weak	10	mwe	_	_
10	scrântesc	scrânti	VERB	Vmip1s	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	ccomp	_	_
11	și	și	CONJ	Crssp	Negative=Pos	5	cc	_	_
12	așteptam	aștepta	VERB	Vmii1	Mood=Ind|Person=1|Tense=Imp|VerbForm=Fin	5	conj	_	_
13	plin	plin	ADV	Rgp	Degree=Pos	12	advmod	_	_
14	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	15	case	_	_
15	emoție	emoție	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	13	nmod	_	_
16	să	să	PART	Qs	Mood=Sub	18	mark	_	_
17	-mi	eu	PRON	Pp1-sd--y-----w	Case=Dat|Number=Sing|Person=1|PronType=Prs|Strength=Weak|Variant=Short	18	iobj	_	_
18	vină	veni	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	12	ccomp	_	_
19	rândul	rând	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	18	nsubj	_	_
20	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	21	case	_	_
21	ascultat	ascultat	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	18	nmod	_	_
22	.	.	PUNCT	PERIOD	_	5	punct	_	_

~~~


