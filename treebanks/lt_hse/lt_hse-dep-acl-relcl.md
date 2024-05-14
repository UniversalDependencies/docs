---
layout: base
title:  'Statistics of acl:relcl in UD_Lithuanian-HSE'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian-HSE: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="lt_hse-dep-acl.html">acl</a></tt>.

46 nodes (1%) are attached to their parents as `acl:relcl`.

43 instances of `acl:relcl` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.3695652173913.

The following 8 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="lt_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_hse-pos-VERB.html">VERB</a></tt> (30; 65% instances), <tt><a href="lt_hse-pos-DET.html">DET</a></tt>-<tt><a href="lt_hse-pos-VERB.html">VERB</a></tt> (3; 7% instances), <tt><a href="lt_hse-pos-PRON.html">PRON</a></tt>-<tt><a href="lt_hse-pos-VERB.html">VERB</a></tt> (3; 7% instances), <tt><a href="lt_hse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lt_hse-pos-VERB.html">VERB</a></tt> (3; 7% instances), <tt><a href="lt_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_hse-pos-VERB.html">VERB</a></tt> (3; 7% instances), <tt><a href="lt_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_hse-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="lt_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_hse-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="lt_hse-pos-PRON.html">PRON</a></tt>-<tt><a href="lt_hse-pos-ADJ.html">ADJ</a></tt> (1; 2% instances).


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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 acl:relcl	color:blue
1	O	o	CCONJ	CC	_	12	cc	_	En=and
2	tie	tas	DET	DT	Case=Nom|Number=Plur|Person=3	12	nsubj	_	En=those|SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	7	punct	_	En=,
4	kurie	kuris	PRON	WPA	Case=Nom|Gender=Masc|Number=Plur	7	nsubj	_	En=which
5	pas	pas	ADP	UH	_	6	case	_	En=to
6	jus	jūs	PRON	PRP	Case=Acc|Number=Plur|Person=2	7	obl	_	En=you
7	vadinami	vadinti	VERB	VBNH	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	2	acl:relcl	_	En=call
8	dešiniaisiais	dešinys	ADJ	JJL	Case=Ins|Definite=Def|Degree=Pos|Gender=Masc|Number=Plur	7	obj	_	En=right-wing|SpaceAfter=No
9	,	,	PUNCT	PUNCT	_	10	punct	_	En=,
10	pas	pas	ADP	UH	_	11	case	_	En=with
11	mus	mes	PRON	PRP	Case=Acc|Number=Plur|Person=1	12	obl	_	En=we
12	vadinami	vadinti	VERB	VBNH	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	0	root	_	En=call
13	pusgalviais	pusgalvis	NOUN	NN	Case=Ins|Gender=Masc|Number=Plur	12	obj	_	En=left-wing|SpaceAfter=No
14	“	“	PUNCT	PUNCT	_	12	punct	_	En=“|SpaceAfter=No
15	.	.	PUNCT	PUNCT	_	12	punct	_	En=.

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


