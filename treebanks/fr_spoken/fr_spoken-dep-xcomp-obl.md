---
layout: base
title:  'Statistics of xcomp:obl in UD_French-Spoken'
udver: '2'
---

## Treebank Statistics: UD_French-Spoken: Relations: `xcomp:obl`

This relation is a language-specific subtype of .
There are also 2 other language-specific subtypes of `xcomp`: <tt><a href="fr_spoken-dep-xcomp-obj.html">xcomp:obj</a></tt>, <tt><a href="fr_spoken-dep-xcomp-pred.html">xcomp:pred</a></tt>.

104 nodes (0%) are attached to their parents as `xcomp:obl`.

104 instances of `xcomp:obl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.76923076923077.

The following 9 pairs of parts of speech are connected with `xcomp:obl`: <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (89; 86% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-ADP.html">ADP</a></tt> (4; 4% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (3; 3% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fr_spoken-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp:obl	color:blue
1	là	là	ADV	_	_	3	advmod	_	_
2	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	viens	venir	VERB	_	Number=Sing|Person=1	0	root	_	_
4	de	de	ADP	_	_	5	mark	_	_
5	faire	faire	VERB	_	VerbForm=Inf	3	xcomp:obl	_	_
6	mes	son	DET	_	Number=Plur|Person=3|PossNumber=Sing|PossPerson=1|PronType=Prs	8	det	_	_
7	des	un	DET	de	Definite=Ind|Number=Plur|PronType=Art	6	reparandum	_	_
8	vaccins	vaccin	NOUN	_	_	5	obj	_	_
9	par	par	ADP	_	_	10	case	_	_
10	exemple	exemple	NOUN	_	Gender=Masc|Number=Sing	3	obl:mod	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 xcomp:obl	color:blue
1	et	et	CCONJ	_	_	4	cc	_	_
2	euh	euh	INTJ	_	_	4	discourse	_	_
3	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
4	faut	falloir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	_
6	faut	falloir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	reparandum	_	_
7	apprendre	apprendre	VERB	conj:reform	VerbForm=Inf	6	xcomp:obj	_	_
8	à	à	ADP	_	_	7	xcomp:obl	_	_
9	à	à	ADP	conj:reform	_	15	mark	_	_
10	s~	s~	X	_	_	15	obj	_	_
11	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	12	nsubj	_	_
12	dirais	dire	VERB	DISCOURSE	Mood=Cnd|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	10	discourse	_	_
13	se	se	PRON	_	Person=3|PronType=Prs	10	reparandum	_	_
14	se	se	PRON	conj:reform	Person=3|PronType=Prs	13	reparandum	_	_
15	faire	faire	VERB	_	VerbForm=Inf	8	reparandum	_	_
16	à	à	ADP	_	_	18	case	_	_
17	ces	ce	DET	_	Number=Plur|Person=3|PronType=Dem	18	det	_	_
18	variations	variation	NOUN	_	Gender=Fem|Number=Plur	15	obl:arg	_	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 22 xcomp:obl	color:blue
1	alors	alors	ADV	_	_	3	advmod	_	_
2	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	commencerais	commencer	VERB	_	Number=Sing|Person=1	0	root	_	_
4	par	par	ADP	_	_	7	case	_	_
5	euh	euh	INTJ	_	_	7	discourse	_	_
6	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	remarque	remarque	NOUN	_	Gender=Fem|Number=Sing	3	obl:arg	_	_
8	préalable	préalable	ADJ	_	Number=Sing	7	amod	_	_
9	qui	qui	PRON	_	_	12	nsubj	_	_
10	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	_
11	très	très	ADV	_	_	12	advmod	_	_
12	importante	important	ADJ	_	Gender=Fem|Number=Sing	7	acl:relcl	_	_
13	mais	mais	CCONJ	_	_	17	cc	_	_
14	que	que	PRON	_	_	22	obj	_	_
15	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	16	det	_	_
16	philosophes	philosophe	NOUN	_	Gender=Masc|Number=Plur	17	nsubj	_	_
17	ont	avoir	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	12	conj	_	_
18	beaucoup	beaucoup	PRON	_	_	17	obj:lvc	_	_
19	de	de	ADP	_	_	20	case	_	_
20	mal	mal	NOUN	_	Gender=Masc|Number=Sing	18	dep:comp	_	_
21	à	à	ADP	_	_	22	mark	_	_
22	faire	faire	VERB	_	VerbForm=Inf	20	xcomp:obl	_	_
23	euh	euh	INTJ	_	_	22	discourse	_	_

~~~


