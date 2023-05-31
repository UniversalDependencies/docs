---
layout: base
title:  'Statistics of flat in UD_German-LIT'
udver: '2'
---

## Treebank Statistics: UD_German-LIT: Relations: `flat`

This relation is universal.

56 nodes (0%) are attached to their parents as `flat`.

56 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.23214285714286.

The following 14 pairs of parts of speech are connected with `flat`: <tt><a href="de_lit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_lit-pos-PROPN.html">PROPN</a></tt> (24; 43% instances), <tt><a href="de_lit-pos-ADP.html">ADP</a></tt>-<tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (7; 13% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-PROPN.html">PROPN</a></tt> (6; 11% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (5; 9% instances), <tt><a href="de_lit-pos-X.html">X</a></tt>-<tt><a href="de_lit-pos-X.html">X</a></tt> (3; 5% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-ADP.html">ADP</a></tt> (2; 4% instances), <tt><a href="de_lit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_lit-pos-ADP.html">ADP</a></tt> (1; 2% instances), <tt><a href="de_lit-pos-ADV.html">ADV</a></tt>-<tt><a href="de_lit-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-X.html">X</a></tt> (1; 2% instances), <tt><a href="de_lit-pos-PRON.html">PRON</a></tt>-<tt><a href="de_lit-pos-AUX.html">AUX</a></tt> (1; 2% instances), <tt><a href="de_lit-pos-PRON.html">PRON</a></tt>-<tt><a href="de_lit-pos-DET.html">DET</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat	color:blue
1	Es	es	PRON	PPER	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
2	ist	sein	AUX	VAFIN	_	5	cop	_	_
3	Don	Don	PROPN	NE	_	5	nmod:poss	_	_
4	Quixotes	Quixot	PROPN	NE	_	3	flat	_	_
5	Luftreise	Luftreise	NOUN	NN	Case=Nom	0	root	_	_
6	auf	auf	ADP	APPR	_	9	case	_	_
7	dem	der	DET	ART	Definite=Def|PronType=Art	9	det	_	_
8	hölzernen	hölzern	ADJ	ADJA	_	9	amod	_	_
9	Pferde	Pferd	NOUN	NN	Case=Dat	5	obl	_	SpaceAfter=No
10	.	.	PUNCT	$.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 flat	color:blue
1	Es	es	PRON	PPER	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	fängt	fangen	VERB	VVFIN	_	0	root	_	_
3	an	an	ADP	PTKVZ	_	2	compound:prt	_	_
4	mit	mit	ADP	APPR	_	10	case	_	_
5	einem	ein	DET	ART	Definite=Ind|NumType=Card|PronType=Art	10	det	_	_
6	beschwerlich	beschwerlich	ADJ	ADJD	_	7	advmod	_	_
7	kitzelnden	kitzelnd	ADJ	ADJA	_	9	amod	_	_
8	en	--	ADP	APPR	_	10	nmod	_	_
9	rapport	rapport	NOUN	NN	_	8	flat	_	_
10	Setzen	Setzen	NOUN	NN	Case=Dat	2	obl	_	SpaceAfter=No
11	,	,	PUNCT	$,	_	12	punct	_	_
12	besteht	bestehen	VERB	VVFIN	_	2	parataxis	_	_
13	in	in	ADP	APPR	_	15	case	_	_
14	einer	ein	DET	ART	Definite=Ind|NumType=Card|PronType=Art	15	det	_	_
15	Desorganisation	Desorganisation	NOUN	NN	_	12	obl	_	_
16	und	und	CCONJ	KON	_	17	cc	_	_
17	endigt	endigen	VERB	VVFIN	_	12	conj	_	_
18	mit	mit	ADP	APPR	_	21	case	_	_
19	einem	ein	DET	ART	Definite=Ind|NumType=Card|PronType=Art	21	det	_	_
20	ekelhaften	ekelhaft	ADJ	ADJA	_	21	amod	_	_
21	Hellsehen	Hellsehen	NOUN	NN	Case=Dat	17	obl	_	_
22	und	und	CCONJ	KON	_	24	cc	_	_
23	viel	viel	DET	ADJA	PronType=Ind	24	det	_	_
24	Ermattung	Ermattung	NOUN	NN	_	21	conj	_	SpaceAfter=No
25	.	.	PUNCT	$.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 flat	color:blue
1	und	und	CCONJ	KON	_	2	cc	_	_
2	das	der	PRON	PDS	PronType=Dem,Rel	0	root	_	_
3	für	für	ADP	APPR	_	6	case	_	_
4	ein	ein	DET	ART	Definite=Ind|NumType=Card|PronType=Art	6	det	_	_
5	lausiges	lausig	ADJ	ADJA	_	6	amod	_	_
6	Da	da	NOUN	NN	Case=Acc	2	nmod	_	_
7	capo	capo	PROPN	NE	_	6	flat	_	_
8	oder	oder	CCONJ	KON	_	10	cc	_	_
9	für	für	ADP	APPR	_	10	case	_	_
10	Friedrichsd'or	Friedrichsd'or	PROPN	NE	Case=Acc	6	conj	_	SpaceAfter=No
11	.	.	PUNCT	$.	_	2	punct	_	_

~~~


