---
layout: base
title:  'Statistics of det:poss in UD_German-LIT'
udver: '2'
---

## Treebank Statistics: UD_German-LIT: Relations: `det:poss`

This relation is a language-specific subtype of <tt><a href="de_lit-dep-det.html">det</a></tt>.

391 nodes (1%) are attached to their parents as `det:poss`.

391 instances of `det:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.37340153452685.

The following 8 pairs of parts of speech are connected with `det:poss`: <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-DET.html">DET</a></tt> (377; 96% instances), <tt><a href="de_lit-pos-ADV.html">ADV</a></tt>-<tt><a href="de_lit-pos-DET.html">DET</a></tt> (4; 1% instances), <tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_lit-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="de_lit-pos-NUM.html">NUM</a></tt>-<tt><a href="de_lit-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="de_lit-pos-PRON.html">PRON</a></tt>-<tt><a href="de_lit-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="de_lit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_lit-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="de_lit-pos-AUX.html">AUX</a></tt>-<tt><a href="de_lit-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="de_lit-pos-DET.html">DET</a></tt>-<tt><a href="de_lit-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det:poss	color:blue
1	besonders	besonders	ADV	ADV	_	4	advmod	_	_
2	wider	wider	ADV	ADV	_	4	advmod	_	_
3	ihre	ihr	DET	PPOSAT	Person=3|Poss=Yes|PronType=Prs	4	det:poss	_	_
4	Poesie	Poesie	NOUN	NN	_	0	root	_	SpaceAfter=No
5	.	.	PUNCT	$.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 det:poss	color:blue
1	Wie	wie	ADV	PWAV	_	8	advmod	_	_
2	konnte	können	AUX	VMFIN	_	8	aux	_	_
3	er	er	PRON	PPER	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
4	besser	gut	ADJ	ADJD	_	8	advmod	_	_
5	an	an	ADP	APPR	_	7	case	_	_
6	die	der	DET	ART	Definite=Def|PronType=Art	7	det	_	_
7	Nachwelt	Nachwelt	NOUN	NN	_	8	obl	_	_
8	appellieren	appellieren	VERB	VVINF	_	0	root	_	SpaceAfter=No
9	,	,	PUNCT	$,	_	8	punct	_	_
10	als	als	CCONJ	KOKOM	_	13	case	_	_
11	durch	durch	ADP	APPR	_	13	case	_	_
12	das	der	DET	ART	Definite=Def|PronType=Art	13	det	_	_
13	Vergessen	vergessen	NOUN	NN	Case=Acc	8	nmod	_	_
14	seiner	sein	DET	PPOSAT	Gender[psor]=Masc,Neut|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	15	det:poss	_	_
15	selbst	selbst	ADV	ADV	_	13	advmod	_	_
16	im	in	ADP	APPRART	_	17	case	_	_
17	Umgange	Umgange	NOUN	NN	_	13	nmod	_	_
18	mit	mit	ADP	APPR	_	19	case	_	_
19	ihr	ihr	DET	PPER	Case=Dat|Person=3|Poss=Yes|PronType=Prs	17	nmod	_	SpaceAfter=No
20	?	?	PUNCT	$.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 25 det:poss	color:blue
1	Dieser	dieser	DET	PDS	PronType=Dem	4	det	_	_
2	ist	sein	AUX	VAFIN	_	4	cop	_	_
3	ein	ein	DET	ART	Definite=Ind|NumType=Card|PronType=Art	4	det	_	_
4	Philosoph	Philosoph	NOUN	NN	Case=Nom	0	root	_	SpaceAfter=No
5	,	,	PUNCT	$,	_	4	punct	_	_
6	und	und	CCONJ	KON	_	7	cc	_	_
7	wird	werden	AUX	VAFIN	_	4	conj	_	_
8	wie	wie	CCONJ	KOKOM	_	10	case	_	_
9	der	der	DET	ART	Definite=Def|PronType=Art	10	det	_	_
10	Gesunde	Gesunde	NOUN	NN	_	7	nmod	_	_
11	von	von	ADP	APPR	_	13	case	_	_
12	der	der	DET	ART	Definite=Def|PronType=Art	13	det	_	_
13	Gesundheit	Gesundheit	NOUN	NN	Case=Dat	7	nmod	_	SpaceAfter=No
14	,	,	PUNCT	$,	_	20	punct	_	_
15	nicht	nicht	PART	PTKNEG	_	20	advmod	_	_
16	viel	viel	ADV	ADV	_	20	advmod	_	_
17	von	von	ADP	APPR	_	19	case	_	_
18	der	der	DET	ART	Definite=Def|PronType=Art	19	det	_	_
19	Religion	Religion	NOUN	NN	Case=Dat	20	obl	_	_
20	reden	reden	VERB	VVINF	_	7	conj	_	SpaceAfter=No
21	,	,	PUNCT	$,	_	20	punct	_	_
22	am	an	ADP	APPRART	_	23	case	_	_
23	wenigsten	wenig	DET	PIAT	PronType=Ind	20	advmod	_	_
24	von	von	ADP	APPR	_	26	case	_	_
25	seiner	sein	DET	PPOSAT	Gender[psor]=Masc,Neut|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	26	det:poss	_	_
26	eignen	eigen	ADJ	PPOSS	Case=Dat|Degree=Pos	20	parataxis	_	SpaceAfter=No
27	.	.	PUNCT	$.	_	4	punct	_	_

~~~


