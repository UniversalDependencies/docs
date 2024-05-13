---
layout: base
title:  'Statistics of obl:tmod in UD_German-GSD'
udver: '2'
---

## Treebank Statistics: UD_German-GSD: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="de_gsd-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="de_gsd-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="de_gsd-dep-obl-arg.html">obl:arg</a></tt>.

34 nodes (0%) are attached to their parents as `obl:tmod`.

25 instances of `obl:tmod` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.47058823529412.

The following 9 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="de_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt> (9; 26% instances), <tt><a href="de_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="de_gsd-pos-NUM.html">NUM</a></tt> (9; 26% instances), <tt><a href="de_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt> (4; 12% instances), <tt><a href="de_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_gsd-pos-NUM.html">NUM</a></tt> (3; 9% instances), <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-NUM.html">NUM</a></tt> (3; 9% instances), <tt><a href="de_gsd-pos-AUX.html">AUX</a></tt>-<tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt> (2; 6% instances), <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt> (2; 6% instances), <tt><a href="de_gsd-pos-AUX.html">AUX</a></tt>-<tt><a href="de_gsd-pos-NUM.html">NUM</a></tt> (1; 3% instances), <tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_gsd-pos-NUM.html">NUM</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 obl:tmod	color:blue
1	Das	der	PRON	PIS	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem,Rel	2	obj	_	CorrectSpaceAfter=Yes|SpaceAfter=No
2	Fahren	fahren	VERB	VVFIN	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	wir	wir	PRON	PPER	Case=Nom|Number=Plur|Person=1|PronType=Prs	2	nsubj	_	_
4	jetzt	jetzt	ADV	ADV	_	2	advmod	_	_
5	seit	seit	ADP	APPR	_	6	case	_	_
6	Jahren	Jahr	NOUN	NN	Case=Dat|Gender=Neut|Number=Plur	2	obl:tmod	_	_
7	hin	hin	ADV	PTKVZ	_	2	compound:prt	_	SpaceAfter=No
8	.	.	PUNCT	$.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 1 obl:tmod	color:blue
1	1973-1980	1973-1980	NUM	VVPP	NumType=Card	10	obl:tmod	_	_
2	wurde	werden	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	10	aux:pass	_	_
3	das	der	DET	ART	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	7	det	_	_
4	geländegängige	geländegängig	ADJ	ADJA	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	7	amod	_	SpaceAfter=No
5	,	,	PUNCT	$,	_	6	punct	_	_
6	sechsrädrige	sechsrädrig	ADJ	ADJA	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	4	conj	_	_
7	Schwimmauto	Schwimmauto	NOUN	NN	Case=Nom|Gender=Neut|Number=Sing	10	nsubj:pass	_	_
8	Solo	Solo	PROPN	NN	Case=Nom|Gender=Neut|Number=Sing	7	appos	_	NamedEntity=Yes
9	750	750	PROPN	CARD	NumType=Card	8	appos	_	NamedEntity=Yes
10	hergestellt	herstellen	VERB	VVPP	VerbForm=Part	0	root	_	SpaceAfter=No
11	.	.	PUNCT	$.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 obl:tmod	color:blue
1	Bei	bei	ADP	APPR	_	2	case	_	_
2	Tappara	Tappara	PROPN	NE	Case=Dat|Gender=Masc|Number=Sing	3	obl	_	NamedEntity=Yes
3	blieb	bleiben	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	er	er	PRON	PPER	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
5	noch	noch	ADV	ADV	_	6	advmod	_	_
6	weitere	weit	ADJ	ADJA	Case=Acc|Degree=Cmp|Gender=Neut|Number=Plur	8	amod	_	_
7	zwei	zwei	NUM	CARD	NumType=Card	8	nummod	_	_
8	Jahre	Jahr	NOUN	NN	Case=Acc|Gender=Neut|Number=Plur	3	obl	_	SpaceAfter=No
9	,	,	PUNCT	$,	_	19	punct	_	_
10	ehe	ehe	SCONJ	KOUS	_	19	mark	_	_
11	er	er	PRON	PPER	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	19	nsubj	_	_
12	ebenfalls	ebenfalls	ADV	ADV	_	15	advmod	_	_
13	zwei	zwei	NUM	CARD	NumType=Card	14	nummod	_	_
14	Jahre	Jahr	NOUN	NN	Case=Acc|Gender=Neut|Number=Plur	15	obl:tmod	_	_
15	lang	lang	ADJ	ADJD	Degree=Pos	19	advmod	_	_
16	für	für	ADP	APPR	_	17	case	_	_
17	SaiPa	SaiPa	PROPN	NE	Case=Acc|Gender=Masc|Number=Sing	19	obl	_	NamedEntity=Yes
18	Lappeenranta	Lappeenranta	PROPN	NE	Case=Acc|Gender=Masc|Number=Sing	17	flat	_	NamedEntity=Yes
19	auflief	auflaufen	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	advcl	_	SpaceAfter=No
20	.	.	PUNCT	$.	_	3	punct	_	_

~~~


