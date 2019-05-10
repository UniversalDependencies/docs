---
layout: base
title:  'Statistics of csubj:pass in UD_German-HDT'
udver: '2'
---

## Treebank Statistics: UD_German-HDT: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="de_hdt-dep-csubj.html">csubj</a></tt>.

19 nodes (0%) are attached to their parents as `csubj:pass`.

13 instances of `csubj:pass` (68%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.7368421052632.

The following 4 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-VERB.html">VERB</a></tt> (15; 79% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (2; 11% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 csubj:pass	color:blue
1	PC	PC	NOUN	NN	Gender=Masc|Number=Plur|Person=3	3	obj	_	_
2	selbst	selbst	ADV	ADV	_	3	advmod	_	_
3	reparieren	reparieren	VERB	VVINF	_	5	csubj:pass	_	_
4	ist	sein	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres	5	aux:pass	_	_
5	erlaubt	erlauben	VERB	VVPP	_	0	root	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 16 csubj:pass	color:blue
1	Ob	Ob	SCONJ	KOUS	_	16	mark	_	_
2	die	die	DET	ART	Case=Nom|Number=Plur	3	det	_	_
3	Mitarbeiter	Mitarbeiter	NOUN	NN	Gender=Masc|Number=Plur|Person=3	16	nsubj	_	_
4	der	der	DET	ART	Case=Gen|Gender=Fem|Number=Sing	6	det:poss	_	_
5	Deutschen	deutsch	ADJ	ADJA	Degree=Pos|Gender=Fem|Number=Sing	6	amod	_	_
6	Messe	Messe	NOUN	NN	Gender=Fem|Number=Sing|Person=3	3	nmod:poss	_	_
7	AG	AG	NOUN	NN	Person=3	6	appos	_	_
8	allerdings	allerdings	ADV	ADV	_	16	advmod	_	_
9	in	in	ADP	APPR	Case=Dat	11	case	_	_
10	jedem	jeder	DET	PIAT	Case=Dat|Gender=Masc|Number=Sing|Person=3	11	det	_	_
11	Fall	Fall	NOUN	NN	Gender=Masc|Number=Sing|Person=3	16	obl	_	_
12	den	den	DET	ART	Case=Acc|Gender=Masc|Number=Sing	14	det	_	_
13	richtigen	richtig	ADJ	ADJA	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	14	amod	_	_
14	Blick	Blick	NOUN	NN	Gender=Masc|Number=Sing|Person=3	16	obj	_	_
15	dafür	dafür	ADV	PROAV	_	14	advmod	_	_
16	haben	haben	AUX	VAFIN	Mood=Sub|Number=Plur|Person=3|Tense=Pres	26	csubj:pass	_	_
17	,	,	PUNCT	$,	_	22	punct	_	_
18	welche	welche	DET	PWAT	Case=Nom|Number=Plur	19	det	_	_
19	News-Dienste	Dienst	NOUN	NN	Gender=Masc|Number=Plur|Person=3	22	nsubj	_	_
20	im	im	ADP	APPRART	Case=Dat	21	case	_	_
21	Internet	Internet	NOUN	NN	Gender=Neut|Number=Sing|Person=3	22	obl	_	_
22	aktiv	aktiv	ADJ	ADJD	Degree=Pos	16	acl	_	_
23	sind	sein	AUX	VAFIN	Mood=Ind|Number=Plur|Person=3|Tense=Pres	22	cop	_	_
24	,	,	PUNCT	$,	_	22	punct	_	_
25	sei	sein	AUX	VAFIN	Mood=Sub|Number=Sing|Person=3|Tense=Pres	26	aux:pass	_	_
26	dahingestellt	dahinstellen	VERB	VVPP	_	0	root	_	_
27	.	.	PUNCT	$.	_	26	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 6 csubj:pass	color:blue
1	Ob	Ob	SCONJ	KOUS	_	6	mark	_	_
2	allerdings	allerdings	ADV	ADV	_	6	advmod	_	_
3	seine	seine	PRON	PPOSAT	Case=Nom|Gender=Fem|Number=Sing|Person=3	4	det:poss	_	_
4	Idee	Idee	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	6	nsubj	_	_
5	so	so	ADV	ADV	Degree=Pos	6	advmod	_	_
6	gut	gut	ADJ	ADJD	Degree=Pos	18	csubj:pass	_	_
7	ist	sein	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres	6	cop	_	_
8	,	,	PUNCT	$,	_	15	punct	_	_
9	allen	all	DET	PIDAT	Case=Dat|Number=Plur|Person=3	10	det	_	_
10	Betroffenen	Betroffener	NOUN	NN	Case=Dat|Number=Plur|Person=3	15	iobj	_	_
11	eine	eine	DET	ART	Case=Acc|Gender=Fem|Number=Sing	12	det	_	_
12	Entschuldigung	Entschuldigung	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	15	obj	_	_
13	per	per	ADP	APPR	_	14	case	_	_
14	EMail	EMail	NOUN	NN	Person=3	15	obl	_	_
15	zuzusenden	zusenden	VERB	VVIZU	_	6	xcomp	_	_
16	,	,	PUNCT	$,	_	15	punct	_	_
17	sei	sein	AUX	VAFIN	Mood=Sub|Number=Sing|Person=3|Tense=Pres	18	aux:pass	_	_
18	dahingestellt	dahinstellen	VERB	VVPP	_	0	root	_	_
19	...	...	PUNCT	$.	_	18	punct	_	_

~~~


