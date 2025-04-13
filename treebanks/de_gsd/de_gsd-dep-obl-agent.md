---
layout: base
title:  'Statistics of obl:agent in UD_German-GSD'
udver: '2'
---

## Treebank Statistics: UD_German-GSD: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="de_gsd-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="de_gsd-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="de_gsd-dep-obl-tmod.html">obl:tmod</a></tt>.

491 nodes (0%) are attached to their parents as `obl:agent`.

469 instances of `obl:agent` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.55600814663951.

The following 9 pairs of parts of speech are connected with `obl:agent`: <tt><a href="de_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt> (306; 62% instances), <tt><a href="de_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt> (152; 31% instances), <tt><a href="de_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="de_gsd-pos-DET.html">DET</a></tt> (9; 2% instances), <tt><a href="de_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="de_gsd-pos-PRON.html">PRON</a></tt> (9; 2% instances), <tt><a href="de_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt> (6; 1% instances), <tt><a href="de_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt> (5; 1% instances), <tt><a href="de_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="de_gsd-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="de_gsd-pos-AUX.html">AUX</a></tt>-<tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="de_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="de_gsd-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 obl:agent	color:blue
1	Wurde	werden	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	8	aux:pass	_	_
2	sehr	sehr	ADV	ADV	_	3	advmod	_	_
3	gut	gut	ADJ	ADJD	Degree=Pos	8	advmod	_	_
4	von	von	ADP	APPR	_	6	case	_	_
5	der	der	DET	ART	Case=Dat|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	Kanzlei	Kanzlei	NOUN	NN	Case=Dat|Gender=Fem|Number=Sing	8	obl:agent	_	_
7	Singewald	Singewald	PROPN	NN	Case=Dat|Gender=Fem|Number=Sing	6	appos	_	NamedEntity=Yes
8	verteitigt	verteitigt	VERB	VVPP	VerbForm=Part	0	root	_	_
9	und	und	CCONJ	KON	_	10	cc	_	_
10	gewonnen	gewinnen	VERB	VVPP	VerbForm=Part	8	conj	_	SpaceAfter=No
11	.	.	PUNCT	$.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 obl:agent	color:blue
1	Er	er	PRON	PPER	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nsubj:pass	_	_
2	wird	werden	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	6	aux:pass	_	_
3	von	von	ADP	APPR	_	5	case	_	_
4	dem	der	DET	ART	Case=Dat|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	AKC	AKC	PROPN	NN	Case=Dat|Gender=Masc|Number=Sing	6	obl:agent	_	NamedEntity=Yes
6	anerkannt	anerkennen	VERB	VVPP	VerbForm=Part	0	root	_	SpaceAfter=No
7	.	.	PUNCT	$.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 obl:agent	color:blue
1	Der	der	DET	ART	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	Gutshof	Gutshof	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	7	nsubj:pass	_	_
3	wurde	werden	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	7	aux:pass	_	_
4	von	von	ADP	APPR	_	5	case	_	_
5	dieser	dieser	DET	PDAT	Case=Dat|Gender=Fem|Number=Sing|PronType=Dem	7	obl:agent	_	_
6	1996	1996	NUM	CARD	NumType=Card	7	obl	_	_
7	verkauft	verkaufen	VERB	VVPP	VerbForm=Part	0	root	_	_
8	und	und	CCONJ	KON	_	12	cc	_	_
9	ist	sein	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	_
10	heute	heute	ADV	ADV	_	12	advmod	_	_
11	in	in	ADP	APPR	_	12	case	_	_
12	Privatbesitz	Privatbesitz	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing	7	conj	_	SpaceAfter=No
13	;	;	PUNCT	$.	_	7	punct	_	_

~~~


