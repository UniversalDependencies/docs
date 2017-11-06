---
layout: base
title:  'Statistics of amod in UD_Galician-TreeGal'
udver: '2'
---

## Treebank Statistics: UD_Galician-TreeGal: Relations: `amod`

This relation is universal.

1389 nodes (5%) are attached to their parents as `amod`.

1072 instances of `amod` (77%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.24982001439885.

The following 13 pairs of parts of speech are connected with `amod`: <tt><a href="gl_treegal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_treegal-pos-ADJ.html">ADJ</a></tt> (1213; 87% instances), <tt><a href="gl_treegal-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gl_treegal-pos-ADJ.html">ADJ</a></tt> (127; 9% instances), <tt><a href="gl_treegal-pos-PRON.html">PRON</a></tt>-<tt><a href="gl_treegal-pos-ADJ.html">ADJ</a></tt> (13; 1% instances), <tt><a href="gl_treegal-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_treegal-pos-ADJ.html">ADJ</a></tt> (10; 1% instances), <tt><a href="gl_treegal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gl_treegal-pos-ADJ.html">ADJ</a></tt> (7; 1% instances), <tt><a href="gl_treegal-pos-NUM.html">NUM</a></tt>-<tt><a href="gl_treegal-pos-ADJ.html">ADJ</a></tt> (7; 1% instances), <tt><a href="gl_treegal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_treegal-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="gl_treegal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_treegal-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="gl_treegal-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gl_treegal-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="gl_treegal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_treegal-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="gl_treegal-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gl_treegal-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="gl_treegal-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gl_treegal-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="gl_treegal-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_treegal-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 amod	color:blue
1	"	"	PUNCT	Q"	_	2	punct	_	SpaceAfter=No
2	Temos	ter	VERB	Vpi10p	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	a	o	DET	Ddfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	xornada	xornada	NOUN	Scfs	Gender=Fem|Number=Sing	2	obj	_	_
5	laboral	laboral	ADJ	A0fs	Gender=Fem|Number=Sing	4	amod	_	_
6	máis	máis	ADV	Wm	_	7	advmod	_	_
7	longa	longo	ADJ	A0fs	Gender=Fem|Number=Sing	4	amod	_	_
8	de	de	ADP	P	AdpType=Prep	9	case	_	_
9	Europa	Europa	PROPN	Sp00	_	7	obl	_	SpaceAfter=No
10	.	.	PUNCT	Q.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 amod	color:blue
1	Citroën	citroën	PROPN	Sp00	_	0	root	_	_
2	-	-	PUNCT	Q-	_	1	punct	_	_
3	Zona	zona	PROPN	Sp00	_	1	flat:name	_	_
4	Franca	franco	ADJ	A0fs	_	3	amod	_	SpaceAfter=No
5	;	;	PUNCT	Q;	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 amod	color:blue
1	Falamos	falar	VERB	Vpi10p	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	de	de	ADP	P	AdpType=Prep	3	case	_	_
3	algo	algo	PRON	Inms	Gender=Masc|Number=Sing|PronType=Ind	1	obl	_	_
4	moi	moito	ADV	Wm	_	5	advmod	_	_
5	particularmente	particularmente	ADV	Wm	_	6	advmod	_	_
6	xaponés	xaponés	ADJ	A0ms	Gender=Masc|Number=Sing	3	amod	_	_
7	ou	ou	CCONJ	Cc	_	11	cc	_	_
8	que	que	PRON	Tnms	Gender=Masc|Number=Sing|PronType=Rel	11	nsubj	_	_
9	xa	xa	ADV	Wn	_	11	advmod	_	_
10	se	se	PRON	Rao3aa	Clitic=Yes|Gender=Com|Person=3|PronType=Prs	11	expl	_	_
11	estendeu	estender	VERB	Vei30s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	conj	_	_
12	por	por	ADP	P	AdpType=Prep	14	case	_	_
13	lo	o	DET	Ddms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	mundo	mundo	NOUN	Scms	Gender=Masc|Number=Sing	11	obl	_	SpaceAfter=No
15	?	?	PUNCT	Q?	_	1	punct	_	_

~~~


