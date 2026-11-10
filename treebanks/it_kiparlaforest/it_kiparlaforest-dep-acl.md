---
layout: base
title:  'Statistics of acl in UD_Italian-KIParlaForest'
udver: '2'
---

## Treebank Statistics: UD_Italian-KIParlaForest: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="it_kiparlaforest-dep-acl-relcl.html">acl:relcl</a></tt>.

66 nodes (0%) are attached to their parents as `acl`.

64 instances of `acl` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.04545454545455.

The following 8 pairs of parts of speech are connected with `acl`: <tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt> (40; 61% instances), <tt><a href="it_kiparlaforest-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt> (7; 11% instances), <tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_kiparlaforest-pos-ADJ.html">ADJ</a></tt> (5; 8% instances), <tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt> (4; 6% instances), <tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt>-<tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt> (4; 6% instances), <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt> (3; 5% instances), <tt><a href="it_kiparlaforest-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 acl	color:blue
1	volevo	volere	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	2	aux	_	Begin=737.337|KID=499-0
2	fare	fare	VERB	_	VerbForm=Inf	0	root	_	KID=499-1
3	una	uno	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	4	det	_	KID=499-2
4	battuta	battuta	NOUN	_	Gender=Fem|Number=Sing	2	obj	_	KID=499-3
5	che	che	PRON	_	PronType=Rel	7	obl	_	KID=499-4
6	m'	mi	PRON	_	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	7	obj	_	KID=499-5|SpaceAfter=No
7	ammazzi	ammazzare	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	4	acl	_	End=738.557|KID=499-6

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 acl	color:blue
1	quindi	quindi	CCONJ	_	_	7	cc	_	Begin=1415.206|End=1415.529|KID=533-0
2	o	o	CCONJ	_	_	7	cc	_	Begin=1415.756|KID=534-0
3	qualcuno	qualcuno	PRON	_	Gender=Masc|Number=Sing|PronType=Ind	7	nsubj	_	KID=534-1
4	è	essere	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	KID=534-2
5	stato	essere	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	7	cop	_	KID=534-3
6	abbastanza	abbastanza	ADV	_	_	7	advmod	_	KID=534-4
7	gentile	gentile	ADJ	_	Number=Sing	0	root	_	KID=534-5
8	da	da	ADP	_	_	9	mark	_	KID=534-6
9	scrivere	scrivere	VERB	_	VerbForm=Inf	7	acl	_	KID=534-7
10	la	il	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	KID=534-8
11	data	data	NOUN	_	Gender=Fem|Number=Sing	9	obj	_	End=1418.148|KID=534-9
12	su	su	ADP	_	_	13	reparandum	_	Begin=1419.062|End=1419.356|KID=535-0
13	su	su	ADP	_	_	15	case	_	Begin=1419.762|KID=536-0
14	quel	quello	DET	_	PronType=Dem	15	det	_	KID=536-1
15	pezzo	pezzo	NOUN	_	Gender=Masc|Number=Sing	9	obl	_	KID=536-2
16	di	di	ADP	_	_	17	case	_	KID=536-3
17	pietra	pietra	NOUN	_	Gender=Fem|Number=Sing	15	nmod	_	KID=536-4
18	oppure	oppure	CCONJ	_	_	21	cc	_	KID=536-5
19	non	non	ADV	_	PronType=Neg	21	advmod	_	KID=536-6
20	potete	potere	AUX	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	21	aux	_	KID=536-7
21	sapere	sapere	VERB	_	VerbForm=Inf	7	conj	_	KID=536-8
22	quando	quando	ADV	_	_	25	mark	_	KID=536-9
23	è	essere	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	25	aux	_	KID=536-10
24	stato	essere	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	25	aux:pass	_	KID=536-11
25	scritto	scrivere	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	21	ccomp	_	KID=536-12|PauseAfter=Yes

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 acl	color:blue
1	scusate	scusare	VERB	_	Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	5	discourse	_	Begin=1379.346|End=1379.817|KID=521-0
2	la	il	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	Begin=1379.9|KID=522-0
3	cosa	cosa	NOUN	_	Gender=Fem|Number=Sing	5	nsubj	_	KID=522-1
4	importante	importante	ADJ	_	Number=Sing	3	amod	_	End=1380.937|Intonation=WeaklyRising|KID=522-2
5	è	essere	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Begin=1383.35|KID=523-0
6	che	che	SCONJ	_	_	8	mark	_	KID=523-1
7	c'	ci	PRON	_	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	8	expl	_	KID=523-2|SpaceAfter=No
8	è	essere	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	ccomp	_	KID=523-3
9	la	il	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	KID=523-4
10	data	data	NOUN	_	Gender=Fem|Number=Sing	8	nsubj	_	KID=523-5
11	scritta	scrivere	ADJ	_	_	10	acl	_	End=1384.737|KID=523-6
12	su	su	ADP	_	_	14	case	_	KID=524-0a
13	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	KID=524-0b
14	monolito	monolito	NOUN	_	Gender=Masc|Number=Sing	8	obl	_	End=1386.162|KID=524-1

~~~


