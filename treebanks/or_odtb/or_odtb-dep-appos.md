---
layout: base
title:  'Statistics of appos in UD_Odia-ODTB'
udver: '2'
---

## Treebank Statistics: UD_Odia-ODTB: Relations: `appos`

This relation is universal.

52 nodes (1%) are attached to their parents as `appos`.

52 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.96153846153846.

The following 10 pairs of parts of speech are connected with `appos`: <tt><a href="or_odtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="or_odtb-pos-PROPN.html">PROPN</a></tt> (14; 27% instances), <tt><a href="or_odtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="or_odtb-pos-NUM.html">NUM</a></tt> (14; 27% instances), <tt><a href="or_odtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="or_odtb-pos-NOUN.html">NOUN</a></tt> (8; 15% instances), <tt><a href="or_odtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="or_odtb-pos-NUM.html">NUM</a></tt> (4; 8% instances), <tt><a href="or_odtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="or_odtb-pos-PROPN.html">PROPN</a></tt> (4; 8% instances), <tt><a href="or_odtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="or_odtb-pos-NOUN.html">NOUN</a></tt> (3; 6% instances), <tt><a href="or_odtb-pos-PRON.html">PRON</a></tt>-<tt><a href="or_odtb-pos-PRON.html">PRON</a></tt> (2; 4% instances), <tt><a href="or_odtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="or_odtb-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="or_odtb-pos-PRON.html">PRON</a></tt>-<tt><a href="or_odtb-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="or_odtb-pos-VERB.html">VERB</a></tt>-<tt><a href="or_odtb-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 appos	color:blue
1	ଖୁବ୍	_	ADV	RB	_	2	advmod	_	Translit=khub
2	ଶୀଘ୍ର	_	ADV	RB	_	4	advmod	_	Translit=śīghra
3	ଦୋଷୀଙ୍କୁ	_	NOUN	N_NN	Case=Acc|Number=Sing|Person=3	4	obj	_	Translit=doṣīṅku
4	ଧରାଯିବ	_	VERB	V_VM_VNF	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Pass	10	ccomp	_	Translit=dharāyiba
5	ବୋଲି	_	SCONJ	CC_CCS	_	4	mark	_	Translit=boli
6	ଏସ୍ପି	_	NOUN	N_NN	Case=Nom|Number=Sing	10	nsubj	_	Entity=(e102-person-6,7,8-new-sgl|Translit=espi
7	ବି	_	PART	RP_RPD	Number=Sing	6	discourse	_	Translit=bi
8	ଯୁଗଳ	_	PROPN	N_NNP	Case=Nom|Number=Sing	9	compound	_	Entity=e102)Translit=yugaḷa|Translit=yugaḷa
9	କିଶୋର	_	PROPN	N_NNP	Case=Nom|Number=Sing	6	appos	_	Translit=kiśora
10	କହିଛନ୍ତି	_	VERB	V_VM_VF	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No|Translit=kahichanti
11	।	_	PUNCT	RD_PUNC	_	10	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 appos	color:blue
1	ଟାଗୋର	_	PROPN	N_NNP	Case=Nom|Gender=Masc|Number=Sing	9	nsubj	_	Entity=(e1-person-coref)|Translit=ṭāgora
2	ମାନସୀ	_	PROPN	N_NNP	Case=Nom|Gender=Fem|Number=Sing	8	nmod	_	Entity=(e66-abstract-coref)|Translit=mānasī
3	(	_	PUNCT	RD_PUNC	_	4	punct	_	SpaceAfter=No|Translit=(
4	୧୮୯୦	_	NUM	QT_QTC	_	2	appos	_	SpaceAfter=No|Translit=1890
5	)	_	PUNCT	RD_PUNC	_	4	punct	_	Translit=)
6	ନାମକ	_	ADJ	JJ	Degree=Pos	8	amod	_	Translit=nāmaka
7	ଏକ	_	DET	DM_DMD	PronType=Ind	8	det	_	Translit=eka
8	କବିତା	_	NOUN	N_NN	Case=Nom|Gender=Fem|Number=Sing	9	obj	_	Entity=(e11-abstract-coref)|Translit=kabitā
9	ଲେଖିଥିଲେ	_	VERB	V_VM_VF	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No|Translit=lekhithile
10	,	_	PUNCT	RD_PUNC	_	9	punct	_	Translit=,
11	ଯେତେ	_	PRON	PR_PRQ	PronType=Rel	12	det	_	Translit=yete
12	କାମ	_	NOUN	N_NN	Case=Nom|Gender=Masc|Number=Sing	13	obj	_	Translit=kāma
13	କରିଥିଲେ	_	VERB	V_VM_VF	Mood=Ind|Tense=Past|VerbForm=Fin	19	advcl	_	Translit=karithile
14	ସେ	_	PRON	PR_PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	15	nmod	_	Entity=(e1-person-coref)|Translit=se
15	ମଧ୍ୟରେ	_	NOUN	N_NST	Case=Loc|Gender=Masc|Number=Sing	19	obl	_	Translit=madhŷare
16	ସବୁଠାରୁ	_	ADV	RB	_	17	advmod	_	Translit=sabuṭhāru
17	ଭଲ	_	ADJ	JJ	Degree=Pos	18	amod	_	Translit=bhala
18	କାମ	_	NOUN	N_NN	Case=Nom|Gender=Masc|Number=Sing	19	nsubj	_	Translit=kāma
19	ଥିଲା	_	VERB	V_VM_VF	Mood=Ind|Tense=Past|VerbForm=Fin	9	parataxis	_	Translit=thilā
20	।	_	PUNCT	RD_PUNC	_	19	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 appos	color:blue
1	ସେ	_	PRON	PR_PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	14	nsubj	_	Entity=(e1-person-1,2,5-coref)|Translit=se
2	ତାଙ୍କ	_	PRON	PR_PRP	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nmod	_	Translit=tāṅka
3	ସାଙ୍ଗ	_	NOUN	N_NN	Case=Nom|Number=Sing	14	obj	_	SpaceAfter=No|Translit=sāṅga
4	,	_	PUNCT	RD_PUNC	_	3	punct	_	Translit=,
5	ତାଙ୍କ	_	PRON	PR_PRP	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nmod	_	Entity=e1|Translit=tāṅka
6	ସ୍ପର୍ଶ	_	NOUN	N_NN	Case=Nom|Number=Sing	3	conj	_	SpaceAfter=No|Translit=sparśa
7	,	_	PUNCT	RD_PUNC	_	6	punct	_	Translit=,
8	ଏବଂ	_	CCONJ	CC_CCD	_	9	cc	_	Translit=ebaṁ
9	ପୃଥିବୀ	_	NOUN	N_NN	Case=Nom|Number=Sing	3	conj	_	Translit=pr̥thibī
10	ପୃଷ୍ଟ	_	NOUN	N_NN	Case=Nom|Number=Sing	9	appos	_	Translit=pr̥ṣṭa
11	ଶେଷ	_	ADJ	JJ	Degree=Pos	13	amod	_	Translit=śeṣa
12	ଭଲ	_	ADJ	JJ	Degree=Pos	13	compound	_	Translit=bhala
13	ପାଇବା	_	VERB	V_VM_VNF	Aspect=Imp|Tense=Pres	14	xcomp	_	Translit=pāibā
14	ଚାହୁଁଥିଲେ	_	VERB	V_VM_VF	Aspect=Perf|Mood=Ind|Tense=Past	0	root	_	SpaceAfter=No|Translit=cāhum̃thile
15	।	_	PUNCT	RD_PUNC	_	14	punct	_	Translit=.

~~~


