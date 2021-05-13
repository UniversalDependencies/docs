---
layout: base
title:  'Statistics of nmod in UD_Lithuanian-HSE'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian-HSE: Relations: `nmod`

This relation is universal.

372 nodes (7%) are attached to their parents as `nmod`.

302 instances of `nmod` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.55645161290323.

The following 19 pairs of parts of speech are connected with `nmod`: <tt><a href="lt_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_hse-pos-NOUN.html">NOUN</a></tt> (195; 52% instances), <tt><a href="lt_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_hse-pos-PROPN.html">PROPN</a></tt> (92; 25% instances), <tt><a href="lt_hse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lt_hse-pos-NOUN.html">NOUN</a></tt> (31; 8% instances), <tt><a href="lt_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_hse-pos-PRON.html">PRON</a></tt> (14; 4% instances), <tt><a href="lt_hse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lt_hse-pos-PROPN.html">PROPN</a></tt> (10; 3% instances), <tt><a href="lt_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_hse-pos-ADJ.html">ADJ</a></tt> (7; 2% instances), <tt><a href="lt_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_hse-pos-NOUN.html">NOUN</a></tt> (7; 2% instances), <tt><a href="lt_hse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lt_hse-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="lt_hse-pos-ADV.html">ADV</a></tt>-<tt><a href="lt_hse-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="lt_hse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lt_hse-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="lt_hse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lt_hse-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="lt_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_hse-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="lt_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_hse-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="lt_hse-pos-NUM.html">NUM</a></tt>-<tt><a href="lt_hse-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="lt_hse-pos-PRON.html">PRON</a></tt>-<tt><a href="lt_hse-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="lt_hse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lt_hse-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="lt_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_hse-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="lt_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_hse-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="lt_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_hse-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nmod	color:blue
1	Jis	jis	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	5	nsubj	_	En=he
2	buvo	būti	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Act	5	cop	_	En=be
3	pagal	pagal	ADP	UH	_	4	case	_	En=under
4	išgales	išgalė	NOUN	NN	Case=Acc|Gender=Fem|Number=Plur	5	obl	_	En=possibility
5	tęsiamas	tęsti	VERB	VBNL	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Pass	0	root	_	En=continue
6	nacių	nacis	NOUN	NN	Case=Gen|Gender=Masc|Number=Plur	7	nmod	_	En=Nazi
7	okupacijos	okupacija	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	En=occupation
8	metais	metai	NOUN	NN	Case=Ins|Gender=Masc|Number=Plur	5	obl	_	En=years|SpaceAfter=No
9	.	.	PUNCT	PUNCT	_	5	punct	_	En=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod	color:blue
1	Čia	čia	CCONJ	CC	_	5	cc	_	En=here
2	SSRS	SSRS	PROPN	NNP	_	3	nmod	_	En=SSRS
3	okupacijos	okupacija	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	4	nmod	_	En=0
4	laikais	laikas	NOUN	NN	Case=Ins|Gender=Masc|Number=Plur	5	obl	_	En=time
5	veikė	veikti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	En=function
6	milžiniška	milžiniškas	ADJ	JJL	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	7	amod	_	En=big
7	gamykla	gamykla	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	En=factory
8	„	„	PUNCT	PUNCT	_	9	punct	_	En=„|SpaceAfter=No
9	Vilma	Vilma	PROPN	NNP	Case=Nom|Gender=Fem|Number=Sing	7	appos	_	En=Vilma|SpaceAfter=No
10	“	“	PUNCT	PUNCT	_	9	punct	_	En=“|SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	5	punct	_	En=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod	color:blue
1	Tolerancijos	tolerancija	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	En=tolerance
2	žmogumi	žmogus	NOUN	NN	Case=Ins|Gender=Masc|Number=Sing	3	iobj	_	En=person
3	paskelbta	paskelbti	VERB	VBNL	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	En=announce
4	rašytoja	rašytoja	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	5	nmod	_	En=writer
5	V.	v.	PROPN	NNP	_	3	nsubj	_	En=V.
6	Juknaitė	Juknaitė	PROPN	NNP	Case=Nom|Gender=Fem|Number=Sing	5	flat	_	En=Juknaitė

~~~


