---
layout: base
title:  'Statistics of csubj in UD_Hausa-EasternAutogramm'
udver: '2'
---

## Treebank Statistics: UD_Hausa-EasternAutogramm: Relations: `csubj`

This relation is universal.

21 nodes (0%) are attached to their parents as `csubj`.

11 instances of `csubj` (52%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.42857142857143.

The following 3 pairs of parts of speech are connected with `csubj`: <tt><a href="ha_easternautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="ha_easternautogramm-pos-VERB.html">VERB</a></tt> (16; 76% instances), <tt><a href="ha_easternautogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ha_easternautogramm-pos-VERB.html">VERB</a></tt> (4; 19% instances), <tt><a href="ha_easternautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="ha_easternautogramm-pos-NOUN.html">NOUN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 csubj	color:blue
1	ya	yaː	AUX	_	Aspect=Perf|Gender=Masc|Person=3	2	aux	_	Gloss=3Masc.Perf.Rel|Relative=Yes
2	cèː	cêː	VERB	_	Gender=Fem	0	root	_	Gloss=be.Fem
3	shiː	shiː	PRON	_	Case=Nom|Gender=Masc|Person=3|PronType=Prs	5	dislocated	_	Gloss=3Masc.Nom
4	yaː	yaː	AUX	_	Aspect=Perf|Gender=Masc|Person=3	5	aux	_	Gloss=3Masc.Perf
5	càncànci	cancant-	VERB	_	_	2	ccomp	_	Gloss=be_appropriate
6	à	yà	AUX	_	Mood=Sub|Person=4	7	aux	_	Gloss=4.Sub
7	ɗàukeː	ɗauk-	VERB	_	_	5	csubj	_	Gloss=take
8	shì	shi	PRON	_	Case=Acc|Gender=Masc|Person=3|PronType=Prs	7	obj	_	Gloss=3Masc.Acc
9	à	à	ADP	_	_	10	case	_	Gloss=at
10	matsayin	matsayiː	NOUN	_	Definite=Cons|Gender=Masc	7	obl:arg	_	Gloss=position.Masc.Cons
11	ɗan	ɗaː	NOUN	_	Definite=Cons|Gender=Masc	10	nmod	_	Gloss=child.Masc.Cons
12	gudùn	gudùː	NOUN	_	Definite=Cons|Gender=Masc	11	compound	_	Gloss=running.Masc.Cons
13	hijir̃aː	hijir̃aː	NOUN	_	Gender=Fem	12	nmod	_	Gloss=refuge.Fem
14	à	à	ADP	_	_	15	case	_	Gloss=at
15	nân	nân	ADV	_	Deixis=ProxS|PronType=Dem	7	advmod	_	Gloss=ProxS
16	Bìr̃taːniyà	Bìr̃taːniyà	PROPN	_	_	15	appos	_	Gloss=Great_Britain|SpaceAfter=No
17	,	,	PUNCT	_	_	2	punct	_	Gloss=PUNCT

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 17 csubj	color:blue
1	tòː	tòː	INTJ	_	_	6	discourse	_	Gloss=well
2	Zambìyà	Zambìyà	PROPN	_	_	6	nsubj	_	Gloss=Zambìyà
3	dà	dà	CCONJ	_	_	4	cc	_	Gloss=and
4	Mazàmbîk	Mazàmbîk	PROPN	_	_	2	conj	_	Gloss=Mazàmbîk
5	sunàː	nàː	AUX	_	Aspect=Prog|Number=Plur|Person=3	6	aux	_	Copula=Yes|Gloss=3Plur.Prog
6	hannun	hannuː	NOUN	_	Definite=Cons|Gender=Masc	0	root	_	Gloss=hand.Masc.Cons
7	rìːgaː	rìːgaː	NOUN	_	Gender=Fem	6	compound	_	Gloss=boubou.Fem
8	nèː	neː	PART	_	PartType=Foc	6	discourse	_	Gloss=Emph
9	dà	dà	CCONJ	_	_	10	case	_	Gloss=and
10	juːnaː	juːnaː	NOUN	_	Gender=Masc	6	xcomp	_	Gloss=each_other.Masc|SpaceAfter=No
11	,	,	PUNCT	_	_	14	punct	_	Gloss=PUNCT
12	àmmaː	àmmaː	CCONJ	_	_	14	cc	_	Gloss=but
13	yaː	yaː	AUX	_	Aspect=Perf|Gender=Masc|Person=3	14	aux	_	Gloss=3Masc.Perf
14	fi	fi	VERB	_	_	6	parataxis	_	Gloss=exceed
15	sauƙiː	sauƙiː	NOUN	_	Gender=Masc	14	xcomp	_	Gloss=easiness.Masc
16	kà	yà	AUX	_	Gender=Masc|Mood=Sub|Person=2	17	aux	_	Gloss=2Masc.Sub
17	yi	yi	VERB	_	_	15	csubj	_	Gloss=do
18	wayàː	wayàː	NOUN	_	Gender=Masc	17	xcomp	_	Gloss=wire.Fem
19	zuwàː	zuwàː	ADP	_	_	20	case	_	Gloss=towards
20	ƙasàːshen	ƙasaː	ADJ	_	Definite=Cons|Number=Plur	18	obl:arg	_	Gloss=country.Plur.Cons
21	Tūr̃ai	Tūr̃ai	PROPN	_	_	20	obl:mod	_	Gloss=Europe
22	màimakon	màimakon	CCONJ	_	_	24	cc	_	Gloss=instead_of
23	kà	yà	AUX	_	Gender=Masc|Mood=Sub|Person=2	24	aux	_	Gloss=2Masc.Sub
24	bugà	bug-	VERB	_	_	17	conj	_	Gloss=beat
25	wayàː	wayàː	NOUN	_	Gender=Masc	24	obj	_	Gloss=wire.Fem
26	zuwàː	zuwàː	ADP	_	_	27	case	_	Gloss=towards
27	Mazàmbîk	Mazàmbîk	PROPN	_	_	24	obl:arg	_	Gloss=Mazàmbîk|SpaceAfter=No
28	.	.	PUNCT	_	_	6	punct	_	Gloss=PUNCT

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 csubj	color:blue
1	à	à	ADP	_	_	2	case	_	Gloss=at
2	wajen	wajeː	NOUN	_	Definite=Cons|Gender=Masc	17	dislocated	_	Gloss=place.Masc.Cons
3	indà	indà	ADV	_	PronType=Rel	2	advmod	_	Gloss=where
4	ya	yaː	AUX	_	Aspect=Perf|Gender=Masc|Person=3	5	aux	_	Gloss=3Masc.Perf.Rel|Relative=Yes
5	kàmaːtà	kamaːt-	VERB	_	_	3	acl:relcl	_	Gloss=be_appropriate
6	à	yà	AUX	_	Mood=Sub|Person=4	7	aux	_	Gloss=4.Sub
7	r̃ubùːtà	r̃ubuːt-	NOUN	_	_	5	csubj	_	Gloss=write
8	wandà	wandà	PRON	_	Gender=Masc|PronType=Rel	7	obj	_	Gloss=REL.Masc
9	ya	yaː	AUX	_	Aspect=Perf|Gender=Masc|Person=3	10	aux	_	Gloss=3Masc.Perf.Rel|Relative=Yes
10	aikàː	aik-	VERB	_	_	8	acl:relcl	_	Gloss=send
11	dà	dà	ADP	_	_	12	case	_	Gloss=with
12	àkwàːtìn	àkwàːtì	NOUN	_	Definite=Def|Gender=Masc	10	obl:arg	_	Gloss=box.Masc.Def
13	kuma	kuma	PART	_	PartType=Top	2	discourse	_	Gloss=also|SpaceAfter=No
14	,	,	PUNCT	_	_	2	punct	_	Gloss=PUNCT
15	sai	sai	ADV	_	_	17	advmod	_	Gloss=then
16	akà	yaː	AUX	_	Aspect=Perf|Person=4	17	aux	_	Gloss=4.Perf.Rel|Relative=Yes
17	r̃ubùːtà	r̃ubuːt-	VERB	_	_	0	root	_	Gloss=write
18	oːfishin	oːfishiː	NOUN	_	Definite=Cons|Gender=Masc	17	obj	_	Gloss=office.Masc.Cons
19	jàkaːdàn	jàkaːdàː	NOUN	_	Definite=Cons|Gender=Masc	18	nmod	_	Gloss=ambassador.Masc.Cons
20	Nàjeːr̃iyàː	Nàjeːr̃iyàː	PROPN	_	Number=Plur	19	nmod	_	Gloss=Nigeria|SpaceAfter=No
21	,	,	PUNCT	_	_	23	punct	_	Gloss=PUNCT
22	"	"	PUNCT	_	_	23	punct	_	Gloss=PUNCT
23	Landàn	Landàn	PROPN	_	_	18	nmod	_	Gloss=London|SpaceAfter=No
24	"	"	PUNCT	_	_	23	punct	_	Gloss=PUNCT|SpaceAfter=No|wordform='
25	.	.	PUNCT	_	_	17	punct	_	Gloss=PUNCT

~~~


