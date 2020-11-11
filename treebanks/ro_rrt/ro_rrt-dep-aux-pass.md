---
layout: base
title:  'Statistics of aux:pass in UD_Romanian-RRT'
udver: '2'
---

## Treebank Statistics: UD_Romanian-RRT: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="ro_rrt-dep-aux.html">aux</a></tt>.

1599 nodes (1%) are attached to their parents as `aux:pass`.

1596 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.11069418386492.

The following 3 pairs of parts of speech are connected with `aux:pass`: <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-AUX.html">AUX</a></tt> (1556; 97% instances), <tt><a href="ro_rrt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_rrt-pos-AUX.html">AUX</a></tt> (37; 2% instances), <tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_rrt-pos-AUX.html">AUX</a></tt> (6; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 aux:pass	color:blue
1	În	în	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	_
2	dosarele	dosar	NOUN	Ncfpry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur	6	obl	_	_
3	poliției	poliție	NOUN	Ncfsoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Sing	2	nmod	_	_
4	geneveze	genevez	ADJ	Afpfson	Case=Dat,Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	3	amod	_	_
5	era	fi	AUX	Vaii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	6	aux:pass	_	_
6	notat	nota	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
7	ca	ca	ADV	Rc	_	9	advmod	_	_
8	„	„	PUNCT	DBLQ	_	9	punct	_	SpaceAfter=No
9	dangereux	dangereux	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	6	xcomp	_	_
10	”	”	PUNCT	DBLQ	_	9	punct	_	SpaceAfter=No
11	.	.	PUNCT	PERIOD	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 9 aux:pass	color:blue
1	Domnul	domn	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	3	nsubj	_	_
2	a	avea	AUX	Va--3s	Number=Sing|Person=3	3	aux	_	_
3	dat	da	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	SpaceAfter=No
4	,	,	PUNCT	COMMA	_	7	punct	_	_
5	Domnul	domn	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	7	nsubj	_	_
6	a	avea	AUX	Va--3s	Number=Sing|Person=3	7	aux	_	_
7	luat	lua	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	3	conj	_	SpaceAfter=No
8	,	,	PUNCT	COMMA	_	12	punct	_	_
9	fie	fi	AUX	Vasp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	12	aux:pass	_	_
10	numele	nume	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	12	nsubj:pass	_	_
11	Domnului	domn	NOUN	Ncmsoy	Case=Dat,Gen|Definite=Def|Gender=Masc|Number=Sing	10	nmod	_	_
12	binecuvântat	binecuvântat	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	3	conj	_	SpaceAfter=No
13	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 aux:pass	color:blue
1	În	în	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	_
2	dramaturgie	dramaturgie	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	5	iobj	_	SpaceAfter=No
3	,	,	PUNCT	COMMA	_	2	punct	_	_
4	un	un	DET	Timsr	Case=Acc,Nom|Gender=Masc|Number=Sing|PronType=Ind	5	det	_	_
5	talent	talent	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
6	aparte	aparte	ADV	Rgp	Degree=Pos	5	advmod	_	_
7	a	avea	AUX	Va--3s	Number=Sing|Person=3	5	aux	_	_
8	fost	fi	AUX	Vap--sm	Gender=Masc|Number=Sing|VerbForm=Part	5	aux:pass	_	_
9	Mihail	Mihail	PROPN	Np	_	5	nsubj	_	_
10	Sebastian	Sebastian	PROPN	Np	_	9	flat	_	SpaceAfter=No
11	,	,	PUNCT	COMMA	_	18	punct	_	_
12	iar	iar	ADV	Rc	_	18	cc	_	_
13	Lucia	luciu	ADJ	Afpfsry	Case=Acc,Nom|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	18	nsubj	_	_
14	Sturdza	Sturdza	PROPN	Np	_	13	flat	_	_
15	Bulandra	Bulandra	PROPN	Np	_	14	flat	_	_
16	a	avea	AUX	Va--3s	Number=Sing|Person=3	18	aux	_	_
17	fost	fi	AUX	Vap--sm	Gender=Masc|Number=Sing|VerbForm=Part	18	aux:pass	_	_
18	actrița	actriță	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	5	conj	_	_
19	cea	cel	DET	Tdfsr	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Dem	21	det	_	_
20	mai	mai	ADV	Rp	_	21	advmod	_	_
21	reprezentativă	reprezentativ	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	18	amod	_	_
22	pentru	pentru	ADP	Spsa	AdpType=Prep|Case=Acc	24	case	_	_
23	această	acest	DET	Dd3fsr---e	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|Position=Prenom|PronType=Dem	24	det	_	_
24	perioadă	perioadă	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	21	obl	_	SpaceAfter=No
25	.	.	PUNCT	PERIOD	_	5	punct	_	_

~~~


