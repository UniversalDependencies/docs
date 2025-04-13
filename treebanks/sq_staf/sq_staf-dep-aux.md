---
layout: base
title:  'Statistics of aux in UD_Albanian-STAF'
udver: '2'
---

## Treebank Statistics: UD_Albanian-STAF: Relations: `aux`

This relation is universal.

80 nodes (2%) are attached to their parents as `aux`.

80 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.2.

The following 4 pairs of parts of speech are connected with `aux`: <tt><a href="sq_staf-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_staf-pos-AUX.html">AUX</a></tt> (76; 95% instances), <tt><a href="sq_staf-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sq_staf-pos-AUX.html">AUX</a></tt> (2; 3% instances), <tt><a href="sq_staf-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_staf-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="sq_staf-pos-PRON.html">PRON</a></tt>-<tt><a href="sq_staf-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
1	Njerëzve	njerëz	NOUN	_	Case=Dat|Definite=Def|Gender=Masc|Number=Plur	4	iobj	_	end_char=8|start_char=0
2	nuk	nuk	PART	_	_	4	advmod	_	end_char=12|start_char=9
3	u	u	AUX	_	_	4	aux	_	end_char=14|start_char=13
4	intereson	interesoj	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	end_char=24|start_char=15
5	më	më	PART	_	_	4	advmod	_	end_char=27|start_char=25
6	asgjë	asgjë	PRON	_	PronType=Ind	4	nsubj	_	SpaceAfter=No
7	.	.	PUNCT	_	_	4	punct	_	end_char=34|start_char=33

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux	color:blue
1	-	-	PUNCT	_	_	3	punct	_	end_char=2689|start_char=2688
2	Është	jam	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	3	aux	_	end_char=2695|start_char=2690
3	vështirë	vështirë	ADJ	_	VerbForm=Part	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	end_char=2705|start_char=2704
5	si	si	SCONJ	_	_	13	mark	_	end_char=2708|start_char=2706
6	gjithmonë	gjithmonë	ADV	_	AdvType=Tim	13	advmod	_	end_char=2718|start_char=2709
7	kur	kur	SCONJ	_	_	13	mark	_	end_char=2722|start_char=2719
8	rrethanat	rrethanë	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	13	nsubj	_	end_char=2732|start_char=2723
9	e	e	DET	_	Gender=Fem|Number=Plur	10	det	_	end_char=2734|start_char=2733
10	zhdukjes	zhdukje	NOUN	_	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	8	nmod	_	end_char=2743|start_char=2735
11	janë	jam	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	13	cop	_	end_char=2748|start_char=2744
12	të	të	DET	_	Case=Nom|Gender=Fem|Number=Plur|PronType=Art	13	det:adj	_	end_char=2751|start_char=2749
13	panjohura	panjohurë	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	3	advcl	_	SpaceAfter=No
14	.	.	PUNCT	_	_	3	punct	_	end_char=2762|start_char=2761

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 13 aux	color:blue
1	Jam	jam	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|Voice=Act	2	aux	_	end_char=527|start_char=524
2	përpjekur	përpjek	VERB	_	VerbForm=Part	0	root	_	end_char=537|start_char=528
3	shpesh	shpesh	ADV	_	AdvType=Deg	2	advmod	_	end_char=544|start_char=538
4	të	të	PART	_	_	6	mark	_	_
5	i	ai	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs	6	iobj	_	_
6	gjej	gjem	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|Voice=Act	2	ccomp	_	end_char=553|start_char=549
7	një	një	DET	_	Definite=Ind	8	det	_	end_char=557|start_char=554
8	domethënie	domethëni	NOUN	_	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	6	obj	_	end_char=568|SpaceAfter=No|start_char=558
9	,	,	PUNCT	_	_	2	punct	_	end_char=569|start_char=568
10	por	por	CCONJ	_	_	15	cc	_	end_char=573|start_char=570
11	askush	askush	PRON	_	PronType=Ind	15	nsubj	_	end_char=580|start_char=574
12	nuk	nuk	PART	_	_	15	advmod	_	end_char=584|start_char=581
13	ishte	jam	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	15	aux	_	end_char=590|start_char=585
14	në	në	ADP	_	_	15	case	_	end_char=593|start_char=591
15	gjendje	gjendje	NOUN	_	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	2	conj	_	end_char=601|start_char=594
16	të	të	PART	_	_	19	mark	_	end_char=604|start_char=602
17	më	unë	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	19	iobj	_	_
18	e	ai	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	19	obj	_	_
19	shpjegonte	shpjegoj	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	15	ccomp	_	end_char=618|SpaceAfter=No|start_char=608
20	.	.	PUNCT	_	_	2	punct	_	end_char=619|start_char=618

~~~


