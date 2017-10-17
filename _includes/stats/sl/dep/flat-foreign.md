

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is a language-specific subtype of [flat]().
There are also 1 other language-specific subtypes of `flat`: [flat:name]().

53 nodes (0%) are attached to their parents as `flat:foreign`.

53 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.45283018867925.

The following 1 pairs of parts of speech are connected with `flat:foreign`: [sl-pos/X]()-[sl-pos/X]() (53; 100% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:foreign	color:blue
1	Chamber	chamber	X	Xf	Foreign=Yes	0	root	_	Dep=0|Rel=Root
2	of	of	X	Xf	Foreign=Yes	1	flat:foreign	_	Dep=0|Rel=Root
3	Torture	torture	X	Xf	Foreign=Yes	1	flat:foreign	_	SpaceAfter=No|Dep=0|Rel=Root
4	.	.	PUNCT	Z	_	1	punct	_	Dep=0|Rel=Root

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is a language-specific subtype of [flat]().
There are also 1 other language-specific subtypes of `flat`: [flat:name]().

38 nodes (0%) are attached to their parents as `flat:foreign`.

38 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.18421052631579.

The following 4 pairs of parts of speech are connected with `flat:foreign`: [sl-pos/X]()-[sl-pos/X]() (33; 87% instances), [sl-pos/PROPN]()-[sl-pos/X]() (3; 8% instances), [sl-pos/PART]()-[sl-pos/X]() (1; 3% instances), [sl-pos/PROPN]()-[sl-pos/PROPN]() (1; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:foreign	color:blue
1	genau	genau	X	Xf	Foreign=Yes	0	root	_	word=genau|msd=Nj
2	wo	wo	X	Xf	Foreign=Yes	1	flat:foreign	_	word=vo|msd=Nj
3	ist	ist	X	Xf	Foreign=Yes	1	flat:foreign	_	word=isn[split_1-2]|msd=Nj
4	den	den	X	Xf	Foreign=Yes	1	flat:foreign	_	word=isn[split_2-2]|msd=Nj
5	das	das	X	Xf	Foreign=Yes	1	flat:foreign	_	word=dos|msd=Nj
6	?	?	PUNCT	Z	_	1	punct	_	word=?|msd=U
7	ach	ach	X	Xf	Foreign=Yes	1	parataxis	_	word=a|msd=Nj
8	so	so	X	Xf	Foreign=Yes	7	flat:foreign	_	word=so|msd=Nj
9	da	da	X	Xf	Foreign=Yes	7	flat:foreign	_	word=do|msd=Nj

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 flat:foreign	color:blue
1	aaa	aaa	INTJ	I	_	2	discourse:filler	_	word=aaa|msd=M
2	spreminja	spreminjati	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	word=spreminja|msd=Ggnste
3	pa	pa	CCONJ	Cc	_	2	advmod	_	word=pa|msd=Vp
4	se	se	PRON	Px------y	PronType=Prs|Variant=Short	2	expl	_	word=se|msd=Zp------k
5	vsebina	vsebina	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	2	nsubj	_	word=vsebina|msd=Sozei
6	operacije	operacija	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	5	nmod	_	word=operacije|msd=Sozer
7	nato	Nato	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	6	nmod	_	word=Nejto|msd=Slmei
8	training	Training	X	Xf	Foreign=Yes	7	flat:foreign	_	word=Trejning|msd=Nj
9	mission	Mission	X	Xf	Foreign=Yes	7	flat:foreign	_	word=Mišn|msd=Nj
10	in	in	X	Xf	Foreign=Yes	7	flat:foreign	_	word=in|msd=Nj
11	irak	Irak	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	7	flat:foreign	_	word=Irak|msd=Slmei

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:foreign	color:blue
1	ma	ma	PART	Q	_	5	cc	_	word=me|msd=L
2	para	para	X	Xf	Foreign=Yes	1	flat:foreign	_	word=para|msd=Nj
3	sem	biti	AUX	Va-r1s-n	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	5	cop	_	word=sem|msd=Gp-spe-n
4	skoraj	skoraj	PART	Q	_	5	advmod	_	word=skoro|msd=L
5	sigurna	siguren	ADJ	Agpfsn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	word=sigurna|msd=Ppnzei
6	da	da	SCONJ	Cs	_	8	mark	_	word=d|msd=Vd
7	se	se	PRON	Px------y	PronType=Prs|Variant=Short	8	expl	_	word=se|msd=Zp------k
8	spomniš	spomniti	VERB	Vmer2s	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	5	ccomp	_	word=spovneš|msd=Ggdsde
9	ona	oni	DET	Pd-fsn	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	10	det	_	word=una|msd=Zk-zei
10	mula	mula	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	5	parataxis	_	word=mula|msd=Sozei
11	ki	ki	SCONJ	Cs	_	13	mark	_	word=ki|msd=Vd
12	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	13	aux	_	word=je|msd=Gp-ste-n
13	imela	imeti	VERB	Vmpp-sf	Aspect=Imp|Gender=Fem|Number=Sing|VerbForm=Part	10	acl	_	word=mela|msd=Ggnd-ez
14	en	en	NUM	Mlpmsa	Case=Acc|Gender=Masc|Number=Sing|NumForm=Word|NumType=Card	16	nummod	_	word=en|msd=Kbzmet
15	tipo	tipo	PART	Q	_	16	advmod	_	word=tipo|msd=L
16	džubotin	džubotin	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	13	obj	_	word=džubotin|msd=Sometn
17	rus	rus	ADJ	Agpmsa	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	16	amod	_	word=rus|msd=Ppnmet
18	ki	ki	SCONJ	Cs	_	20	mark	_	word=k|msd=Vd
19	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	20	aux	_	word=je|msd=Gp-ste-n
20	bila	biti	VERB	Va-p-sf	Gender=Fem|Number=Sing|VerbForm=Part	10	conj	_	word=bla|msd=Gp-d-ez
21	pol	pol	ADV	Rgp	Degree=Pos	20	advmod	_	word=pole|msd=Rsn
22	v	v	ADP	Sl	Case=Loc	24	case	_	word=u|msd=Dm
23	eem	eem	INTJ	I	_	24	discourse:filler	_	word=eem|msd=M
24	v	v	ADP	Sl	Case=Loc	25	case	_	word=v|msd=Dm
25	etnoblog	Etnoblog	PROPN	Npmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	20	obl	_	word=Etnoblog|msd=Slmetn
26	ki	ki	SCONJ	Cs	_	28	mark	_	word=k|msd=Vd
27	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	28	aux	_	word=je|msd=Gp-ste-n
28	imela	imeti	VERB	Vmpp-sf	Aspect=Imp|Gender=Fem|Number=Sing|VerbForm=Part	10	conj	_	word=mela|msd=Ggnd-ez
29	boršo	borša	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	28	obj	_	word=boršo|msd=Sozet
30	freitag	Freitag	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	29	nmod	_	word=Frajtag|msd=Slmei

~~~


