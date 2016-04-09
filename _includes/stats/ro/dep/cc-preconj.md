

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is a language-specific subtype of [cc]().

6 nodes (0%) are attached to their parents as `cc:preconj`.

6 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.83333333333333.

The following 5 pairs of parts of speech are connected with `cc:preconj`: [ro-pos/NOUN]()-[ro-pos/ADV]() (2; 33% instances), [ro-pos/ADJ]()-[ro-pos/CONJ]() (1; 17% instances), [ro-pos/NOUN]()-[ro-pos/CONJ]() (1; 17% instances), [ro-pos/NOUN]()-[ro-pos/PRON]() (1; 17% instances), [ro-pos/VERB]()-[ro-pos/CONJ]() (1; 17% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 cc:preconj	color:blue
1	Aspectul	aspect	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	4	nmod	_	_
2	gazetei	gazetă	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	1	nmod	_	_
3	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	4	expl:pass	_	_
4	schimbă	schimba	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	,	,	PUNCT	COMMA	_	4	punct	_	_
6	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	7	expl:pass	_	_
7	modernizează	moderniza	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	4	conj	_	_
8	atât	atât	ADV	Rgp	Degree=Pos	10	cc:preconj	_	_
9	ca	ca	ADV	Rc	_	10	advmod	_	_
10	structură	structură	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	4	nmod	_	_
11	,	,	PUNCT	COMMA	_	10	punct	_	_
12	cât	cât	ADV	Rw	PronType=Int,Rel	15	cc	_	_
13	și	și	CONJ	Crssp	Negative=Pos	12	mwe	_	_
14	din	din	ADP	Spsa	AdpType=Prep|Case=Acc	15	case	_	_
15	punct	punct	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	10	conj	_	_
16	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	17	case	_	_
17	vedere	vedere	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	15	nmod	_	_
18	grafic	grafic	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	15	amod	_	_
19	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 cc:preconj	color:blue
1	Glimepirida	Glimepirida	PROPN	Np	_	2	nsubj	_	_
2	poate	putea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	fie	fie	CONJ	Ccssp	Negative=Pos	5	cc:preconj	_	_
4	să	să	PART	Qs	Mood=Sub	5	mark	_	_
5	potențeze	potența	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	2	ccomp	_	_
6	,	,	PUNCT	COMMA	_	5	punct	_	_
7	fie	fie	CONJ	Ccssp	Negative=Pos	5	cc	_	_
8	să	să	PART	Qs	Mood=Sub	9	mark	_	_
9	diminueze	(0.79)diminua	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	5	conj	_	_
10	efectele	efect	NOUN	Ncfpry	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	5	dobj	_	_
11	derivaților	derivat	NOUN	Ncmpoy	Case=Gen|Definite=Def|Gender=Masc|Number=Plur	10	nmod	_	_
12	cumarinici	(0.89)cumarinic	ADJ	Afpmp-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	11	amod	_	_
13	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 15 cc:preconj	color:blue
1	Vă	tu	PRON	Pp2-pa--------w	Case=Acc|Number=Plur|Person=2|PronType=Prs|Strength=Weak	2	iobj	_	_
2	rugăm	ruga	VERB	Vmip1p	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	să	să	PART	Qs	Mood=Sub	4	mark	_	_
4	rețineți	reține	VERB	Vmip2p	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	2	ccomp	_	_
5	că	că	SCONJ	Csssp	Negative=Pos	7	mark	_	_
6	nu	nu	PART	Qz	Negative=Neg	7	neg	_	_
7	puteți	putea	VERB	Vmip2p	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	4	ccomp	_	_
8	utiliza	utiliza	VERB	Vmnp	Tense=Pres|VerbForm=Inf	7	ccomp	_	_
9	Xigris	Xigris	PROPN	Np	_	8	dobj	_	_
10	din	din	ADP	Spsa	AdpType=Prep|Case=Acc	12	case	_	_
11	proprie	propriu	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	12	amod	_	_
12	inițiativă	inițiativă	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	8	nmod	_	_
13	,	,	PUNCT	COMMA	_	23	punct	_	_
14	pentru_că	pentru_că	SCONJ	Cscsp	Negative=Pos	23	mark	_	_
15	atât	atât	PRON	Pi3msr	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Ind	16	cc:preconj	_	_
16	boala	boală	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	23	nsubj	_	_
17	dumneavoastră	dumneavoastră	PRON	Pp2-----------s	Person=2|PronType=Prs|Strength=Strong	16	nmod	_	_
18	,	,	PUNCT	COMMA	_	16	punct	_	_
19	cât	cât	ADV	Rw	PronType=Int,Rel	16	cc	_	_
20	și	și	CONJ	Crssp	Negative=Pos	19	mwe	_	_
21	utilizarea	utilizare	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	16	conj	_	_
22	medicamentului	medicament	NOUN	Ncmsoy	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	21	nmod	_	_
23	necesită	necesita	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	advcl	_	_
24	îngrijire	îngrijire	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	23	dobj	_	_
25	medicală	medical	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	24	amod	_	_
26	permanentă	permanent	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	24	amod	_	_
27	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


