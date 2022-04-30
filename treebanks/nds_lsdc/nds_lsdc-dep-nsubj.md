---
layout: base
title:  'Statistics of nsubj in UD_Low_Saxon-LSDC'
udver: '2'
---

## Treebank Statistics: UD_Low_Saxon-LSDC: Relations: `nsubj`

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: <tt><a href="nds_lsdc-dep-nsubj-pass.html">nsubj:pass</a></tt>.

239 nodes (10%) are attached to their parents as `nsubj`.

183 instances of `nsubj` (77%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.03347280334728.

The following 15 pairs of parts of speech are connected with `nsubj`: <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-PRON.html">PRON</a></tt> (139; 58% instances), <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt> (49; 21% instances), <tt><a href="nds_lsdc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nds_lsdc-pos-PRON.html">PRON</a></tt> (13; 5% instances), <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-PROPN.html">PROPN</a></tt> (13; 5% instances), <tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nds_lsdc-pos-PRON.html">PRON</a></tt> (7; 3% instances), <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-ADJ.html">ADJ</a></tt> (5; 2% instances), <tt><a href="nds_lsdc-pos-PRON.html">PRON</a></tt>-<tt><a href="nds_lsdc-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="nds_lsdc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="nds_lsdc-pos-ADV.html">ADV</a></tt>-<tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="nds_lsdc-pos-ADV.html">ADV</a></tt>-<tt><a href="nds_lsdc-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="nds_lsdc-pos-AUX.html">AUX</a></tt>-<tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="nds_lsdc-pos-AUX.html">AUX</a></tt>-<tt><a href="nds_lsdc-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nds_lsdc-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 nsubj	color:blue
1	Wat	wat	PRON	_	_	4	obl	_	lemma[gml]=wat(te)³
2	myn	myn	DET	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	3	det:poss	_	lemma[gml]=mîn²
3	süsterdochter	süsterdochter	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	lemma[gml]=süsterdochter
4	fiks	fiks	ADJ	_	Degree=Pos	0	root	_	_
5	is	weasen	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Cop	4	cop	_	lemma[gml]=wēsen²|SpaceAfter=No
6	:	:	PUNCT	_	_	10	punct	_	_
7	dee	dee	PRON	_	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Dem	10	nsubj	_	lemma[gml]=dê¹
8	kan	künnen	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Aux	10	aux	_	lemma[gml]=künnen
9	gedanken	gedanke	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	10	obj	_	lemma[gml]=gedanke
10	leasen	leasen	VERB	_	VerbForm=Inf	4	parataxis	_	lemma[gml]=lēsen¹|SpaceAfter=No
11	!	!	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj	color:blue
1	Beaden	beaden	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	4	nsubj	_	lemma[gml]=bēden(t)
2	un	un	CCONJ	_	_	3	cc	_	lemma[gml]=unde²
3	vlöken	vloken	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	1	conj	_	lemma[gml]=vlôken(t)
4	wesselde	wesselen	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	lemma[gml]=wes(se)len
5	mid	mid	ADP	_	AdpType=Prep	6	case	_	lemma[gml]=mit
6	enander	enander	PRON	_	Case=Acc,Dat|PronType=Rcp	4	obl	_	lemma[gml]=êⁱnander
7	af	af	ADV	_	_	4	compound	_	lemma[gml]=af²|SpaceAfter=No
8	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj	color:blue
1	Do	do	ADV	_	_	3	advmod	_	lemma[gml]=dô¹
2	ik	ik	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	lemma[gml]=ik
3	jung	jung	ADJ	_	Degree=Pos	0	root	_	lemma[gml]=junc
4	was	weasen	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Past	3	cop	_	lemma[gml]=wēsen²|SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	_
6	heeld	holden	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Past	3	advcl	_	lemma[gml]=hōlden
7	ik	ik	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	lemma[gml]=ik
8	almöägend	almöägend	ADV	_	_	6	advmod	_	lemma[gml]=al(le)mȫgend
9	van	van	ADP	_	AdpType=Prep	10	case	_	lemma[gml]=van¹
10	leyren	leyren	NOUN	_	Case=Acc,Dat|Gender=Neut|Number=Sing	6	obl	_	lemma[gml]=lêren|SpaceAfter=No
11	,	,	PUNCT	_	_	20	punct	_	_
12	en	un	CCONJ	_	_	20	cc	_	lemma[gml]=unde²
13	hebbe	hebben	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres	20	aux	_	lemma[gml]=hebben
14	ouk	ouk	ADV	_	_	20	advmod	_	lemma[gml]=ôk
15	noch	noch	ADV	_	_	20	advmod	_	lemma[gml]=noch²
16	wat	wat	PRON	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Ind,Int	20	obj	_	lemma[gml]=wat(te)³
17	an	an	ADP	_	AdpType=Prep	19	case	_	lemma[gml]=an
18	et	et	DET	_	Definite=Def|Gender=Neut|Number=Sing|PronType=Art	19	det	_	lemma[gml]=et²
19	latyn	latyn	NOUN	_	Gender=Neut|Number=Sing	20	obl	_	lemma[gml]=latîn¹
20	edån	doon	VERB	_	Aspect=Perf|VerbForm=Part	6	conj	_	lemma[gml]=dôn¹|SpaceAfter=No
21	;	;	PUNCT	_	_	3	punct	_	_

~~~


