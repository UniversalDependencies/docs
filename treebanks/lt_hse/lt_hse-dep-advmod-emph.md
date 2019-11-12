---
layout: base
title:  'Statistics of advmod:emph in UD_Lithuanian-HSE'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian-HSE: Relations: `advmod:emph`

This relation is a language-specific subtype of <tt><a href="lt_hse-dep-advmod.html">advmod</a></tt>.

81 nodes (2%) are attached to their parents as `advmod:emph`.

79 instances of `advmod:emph` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.09876543209877.

The following 8 pairs of parts of speech are connected with `advmod:emph`: <tt><a href="lt_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_hse-pos-PART.html">PART</a></tt> (25; 31% instances), <tt><a href="lt_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_hse-pos-PART.html">PART</a></tt> (24; 30% instances), <tt><a href="lt_hse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lt_hse-pos-PART.html">PART</a></tt> (10; 12% instances), <tt><a href="lt_hse-pos-ADV.html">ADV</a></tt>-<tt><a href="lt_hse-pos-PART.html">PART</a></tt> (10; 12% instances), <tt><a href="lt_hse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lt_hse-pos-PART.html">PART</a></tt> (7; 9% instances), <tt><a href="lt_hse-pos-PRON.html">PRON</a></tt>-<tt><a href="lt_hse-pos-PART.html">PART</a></tt> (3; 4% instances), <tt><a href="lt_hse-pos-DET.html">DET</a></tt>-<tt><a href="lt_hse-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="lt_hse-pos-NUM.html">NUM</a></tt>-<tt><a href="lt_hse-pos-PART.html">PART</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod:emph	color:blue
1	Ką	kas	PRON	WP	Case=Acc	5	obj	_	En=what
2	tas	tas	DET	DT	Case=Nom|Gender=Masc|Number=Sing	3	det	_	En=that
3	Putinas	Putinas	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	En=Putin
4	dar	dar	PART	UH	_	5	advmod:emph	_	En=even
5	prasimanys	prasimanyti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=Yes|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	En=invention|SpaceAfter=No
6	“	“	PUNCT	PUNCT	_	5	punct	_	En=“|SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	5	punct	_	En=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 advmod:emph	color:blue
1	Bet	bet	CCONJ	CC	_	2	cc	_	En=but
2	šiandien	šiandien	ADV	RB	Degree=Pos	3	advmod	_	En=today
3	regime	regėti	VERB	VBC	Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	En=see
4	ir	ir	PART	UH	_	8	advmod:emph	_	En=even
5	tautinių	tautinis	ADJ	JJL	Case=Gen|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	6	amod	_	En=national
6	šūkių	šūkis	NOUN	NN	Case=Gen|Gender=Masc|Number=Plur	7	nmod	_	En=slogan
7	išvirkščiąją	išvirkščias	ADJ	JJL	Case=Acc|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	En=internal
8	pusę	pusė	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	3	obj	_	En=side|SpaceAfter=No
9	.	.	PUNCT	PUNCT	_	3	punct	_	En=.

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 advmod:emph	color:blue
1	Italų	italas	NOUN	NN	Case=Gen|Gender=Masc|Number=Plur	6	nmod	_	En=Italian|SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	3	punct	_	En=,
3	graikų	graikas	NOUN	NN	Case=Gen|Gender=Masc|Number=Plur	1	conj	_	En=Greek
4	ir	ir	CCONJ	CC	_	5	cc	_	En=and
5	kitos	kitas	ADJ	JJL	Case=Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	1	conj	_	En=other
6	diasporos	diaspora	NOUN	NN	Case=Nom|Gender=Fem|Number=Plur	9	nsubj	_	En=diaspora
7	taip	taip	PART	UH	_	9	advmod:emph	_	En=as
8	pat	pat	PART	UH	_	7	fixed	_	En=well
9	didžiulės	didžiulis	ADJ	JJL	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	0	root	_	En=great|SpaceAfter=No
10	,	,	PUNCT	PUNCT	_	17	punct	_	En=,
11	bet	bet	CCONJ	CC	_	17	cc	_	En=but
12	Italija	Italija	PROPN	NNP	Case=Nom|Gender=Fem|Number=Sing	17	nsubj	_	En=Italy
13	ir	ir	CCONJ	CC	_	14	cc	_	En=and
14	Graikija	Graikija	PROPN	NNP	Case=Nom|Gender=Fem|Number=Sing	12	conj	_	En=Greece
15	dėl	dėl	ADP	UH	_	17	advmod	_	En=due_to
16	to	tas	PRON	DT	Case=Gen|Gender=Masc|Number=Sing	15	fixed	_	En=that
17	nežuvo	žūti	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Reflex=No|Tense=Past|VerbForm=Fin|Voice=Act	9	nmod	_	En=die_out|SpaceAfter=No
18	.	.	PUNCT	PUNCT	_	9	punct	_	En=.

~~~


