---
layout: base
title:  'Statistics of acl:relcl in UD_Lithuanian-HSE'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian-HSE: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="lt_hse-dep-acl.html">acl</a></tt>.

46 nodes (1%) are attached to their parents as `acl:relcl`.

43 instances of `acl:relcl` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.32608695652174.

The following 8 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="lt_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_hse-pos-VERB.html">VERB</a></tt> (31; 67% instances), <tt><a href="lt_hse-pos-PRON.html">PRON</a></tt>-<tt><a href="lt_hse-pos-VERB.html">VERB</a></tt> (3; 7% instances), <tt><a href="lt_hse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lt_hse-pos-VERB.html">VERB</a></tt> (3; 7% instances), <tt><a href="lt_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_hse-pos-VERB.html">VERB</a></tt> (3; 7% instances), <tt><a href="lt_hse-pos-DET.html">DET</a></tt>-<tt><a href="lt_hse-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="lt_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_hse-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="lt_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_hse-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="lt_hse-pos-PRON.html">PRON</a></tt>-<tt><a href="lt_hse-pos-ADJ.html">ADJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 acl:relcl	color:blue
1	Visa	visas	DET	DT	Case=Nom|Gender=Fem|Number=Sing	2	det	_	En=all
2	tai	tai	PRON	DT	_	3	nsubj	_	En=this
3	primena	priminti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	En=mention
4	karikatūra	karikatūra	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	3	obj	_	En=cartoon|SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	8	punct	_	En=,
6	kurią	kuris	PRON	WPA	Case=Acc|Gender=Fem|Number=Sing	8	obj	_	En=which
7	neseniai	neseniai	ADV	RB	Degree=Pos|Polarity=Neg	8	advmod	_	En=recently
8	mačiau	matyti	VERB	VBC	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Act	4	acl:relcl	_	En=see
9	lenkų	lenkas	ADJ	JJL	Case=Gen|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	10	amod	_	En=Polish
10	žurnale	žurnalas	NOUN	NN	Case=Loc|Gender=Masc|Number=Sing	8	obl	_	En=magazine|SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	10	punct	_	En=.

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 13 acl:relcl	color:blue
1	Bet	bet	CCONJ	CC	_	2	cc	_	En=but
2	reikia	reikėti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	En=need
3	prie	prie	ADP	UH	_	4	case	_	En=to
4	jos	ji	PRON	PRP	Case=Gen|Gender=Fem|Number=Sing|Person=3	5	obl	_	En=they
5	prisidėti	prisidėti	VERB	VB	Polarity=Pos|VerbForm=Inf|Voice=Act	2	xcomp	_	En=take_part|SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	9	punct	_	En=,
7	o	o	CCONJ	CC	_	9	cc	_	En=and
8	ne	ne	PART	UH	Polarity=Neg	9	advmod	_	En=not
9	pasiduoti	pasiduoti	VERB	VB	Polarity=Pos|VerbForm=Inf|Voice=Act	5	conj	_	En=grasp
10	tiems	tie	PRON	DT	Case=Dat|Gender=Masc|Number=Plur	9	iobj	_	En=that|SpaceAfter=No
11	,	,	PUNCT	PUNCT	_	12	punct	_	En=,
12	kas	kas	PRON	WP	Case=Nom	13	nsubj	_	En=who
13	bando	bandyti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Act	10	acl:relcl	_	En=try
14	įamžinti	įamžinti	VERB	VB	Polarity=Pos|VerbForm=Inf|Voice=Act	13	xcomp	_	En=commemorate
15	prieštvaninį	prieštvaninis	ADJ	JJL	Case=Acc|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	16	amod	_	En=antediluvian
16	mentalitetą	mentalitetas	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	14	obj	_	En=mentality|SpaceAfter=No
17	.	.	PUNCT	PUNCT	_	2	punct	_	En=.

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 22 acl:relcl	color:blue
1	Ir	ir	CCONJ	CC	_	12	cc	_	En=and
2	nors	nors	SCONJ	UH	_	12	mark	_	En=though
3	pilotų	pilotas	NOUN	NN	Case=Gen|Gender=Masc|Number=Plur	4	nmod	_	En=pilot
4	kabinos	kabina	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	5	nmod	_	En=cabin
5	įrašuose	įrašas	NOUN	NN	Case=Loc|Gender=Masc|Number=Plur	12	obl	_	En=record|SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	10	punct	_	En=,
7	anot	anot	ADP	UH	_	10	case	_	En=according_to
8	jų	jie	DET	PRP$	Case=Gen|Gender=Masc|Number=Plur	10	det	_	En=he
9	klausiusių	klausyti	VERB	VBNL	Aspect=Perf|Case=Gen|Definite=Ind|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	10	amod	_	En=listen
10	ekspertų	ekspertas	NOUN	NN	Case=Gen|Gender=Masc|Number=Plur	12	parataxis	_	En=expert|SpaceAfter=No
11	,	,	PUNCT	PUNCT	_	10	punct	_	En=,
12	gausu	gausas	NOUN	NN	Case=Ins|Gender=Masc|Number=Sing	0	root	_	En=plenty
13	pašalinio	pašalinis	NOUN	NN	Case=Gen|Gender=Masc|Number=Sing	14	nmod	_	En=side
14	triukšmo	triukšmas	NOUN	NN	Case=Gen|Gender=Masc|Number=Sing	12	nmod	_	En=noise|SpaceAfter=No
15	,	,	PUNCT	PUNCT	_	17	punct	_	En=,
16	jis	jis	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	17	nsubj	_	En=which
17	įprastas	įprastas	VERB	VBNL	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	14	acl:relcl	_	En=characteristic
18	triukšmingam	triukšmingas	ADJ	JJL	Case=Dat|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	19	amod	_	En=noisy
19	Tu-154	tu-154	PROPN	NNP	Case=Dat|Gender=Masc|Number=Sing	17	obj	_	En=Tu-154|SpaceAfter=No
20	,	,	PUNCT	PUNCT	_	22	punct	_	En=,
21	kuris	kuris	PRON	WPA	Case=Nom|Gender=Masc|Number=Sing	22	nsubj	_	En=which
22	negarsėja	garsėti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	19	acl:relcl	_	En=sound
23	puikia	puikus	ADJ	JJL	Case=Ins|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	24	amod	_	En=good
24	izoliacija	izoliacija	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	22	obj	_	En=izolation|SpaceAfter=No
25	.	.	PUNCT	PUNCT	_	12	punct	_	En=.

~~~


