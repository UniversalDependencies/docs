---
layout: base
title:  'Statistics of ccomp in UD_Icelandic-PUD'
udver: '2'
---

## Treebank Statistics: UD_Icelandic-PUD: Relations: `ccomp`

This relation is universal.

124 nodes (1%) are attached to their parents as `ccomp`.

124 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.19354838709677.

The following 10 pairs of parts of speech are connected with `ccomp`: <tt><a href="is_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="is_pud-pos-VERB.html">VERB</a></tt> (81; 65% instances), <tt><a href="is_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt> (23; 19% instances), <tt><a href="is_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="is_pud-pos-ADJ.html">ADJ</a></tt> (11; 9% instances), <tt><a href="is_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="is_pud-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="is_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="is_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="is_pud-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="is_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="is_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="is_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="is_pud-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="is_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="is_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 ccomp	color:blue
1	Ég	ég	PRON	fp1en	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	held	halda	VERB	sfg1en	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	að	að	SCONJ	c	_	8	mark	_	_
4	þess	það	PRON	fphee	Case=Gen|Gender=Neut|Number=Sing|PronType=Prs	8	obl	_	_
5	vegna	vegna	ADP	ae	_	4	case	_	_
6	hafi	hafa	AUX	svg3fn	Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	aux	_	_
7	þau	það	PRON	fphfn	Case=Nom|Gender=Neut|Number=Plur|PronType=Prs	8	nsubj	_	_
8	sökkt	sökkva	VERB	ssg	VerbForm=Sup|Voice=Act	2	ccomp	_	_
9	sér	sig	PRON	fphfþ	Case=Dat|Gender=Neut|Number=Plur|PronType=Prs	8	obj	_	_
10	í	í	ADP	ao	_	11	case	_	_
11	mynstur	mynstur	NOUN	nheo	Case=Acc|Definite=Ind|Gender=Neut|Number=Sing	8	obl:arg	_	_
12	og	og	CCONJ	c	_	13	cc	_	_
13	liti	litur	NOUN	nkfo	Case=Acc|Definite=Ind|Gender=Masc|Number=Plur	11	conj	_	SpaceAfter=No
14	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 ccomp	color:blue
1	Nýju	nýr	ADJ	lhfnvf	Case=Nom|Definite=Def|Degree=Pos|Gender=Neut|Number=Plur	2	amod	_	_
2	járnviðmiðin	járnviðmið	NOUN	nhfng	Case=Nom|Definite=Def|Gender=Neut|Number=Plur	3	nsubj	_	_
3	þýða	þýða	VERB	sfg3fn	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	að	að	SCONJ	c	_	9	mark	_	_
5	þörf	þörf	NOUN	nven	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	9	nsubj	_	_
6	er	vera	AUX	sfg3en	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	_	_
7	á	á	ADP	aþ	_	9	case	_	_
8	fleiri	margur	ADJ	lvfþvm	Case=Dat|Definite=Def|Degree=Cmp|Gender=Fem|Number=Plur	9	amod	_	_
9	gjöfum	gjöf	NOUN	nvfþ	Case=Dat|Definite=Ind|Gender=Fem|Number=Plur	3	ccomp	_	SpaceAfter=No
10	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 ccomp	color:blue
1	„	„	PUNCT	„	PunctSide=Ini	4	punct	_	SpaceAfter=No
2	Flestu	margur	ADJ	lheþfe	Case=Dat|Definite=Ind|Degree=Sup|Gender=Neut|Number=Sing	3	amod	_	_
3	fólki	fólk	NOUN	nheþ	Case=Dat|Definite=Ind|Gender=Neut|Number=Sing	4	nsubj	_	_
4	þætti	þykja	VERB	svg3eþ	Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	wi-fi	wi-fi	NOUN	nken	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	8	nsubj	_	_
6	á	á	ADP	aþ	_	7	case	_	_
7	flugvelli	flugvöllur	NOUN	nkeþ	Case=Dat|Definite=Ind|Gender=Masc|Number=Sing	5	nmod	_	_
8	gagnlegra	gagnlegur	ADJ	nkfe	Case=Gen|Definite=Ind|Gender=Masc|Number=Plur	4	ccomp	_	_
9	en	en	CCONJ	c	_	12	mark	_	_
10	að	að	PART	cn	_	12	mark	_	_
11	geta	geta	AUX	sng	VerbForm=Inf|Voice=Act	12	aux	_	_
12	sent	senda	VERB	ssg	VerbForm=Sup|Voice=Act	8	advcl	_	_
13	tölvupóst	tölvupóstur	NOUN	nkeo	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	12	obj	_	_
14	í	í	ADP	ao	_	15	case	_	_
15	flugvél	flugvél	ADP	as	_	12	obl	_	SpaceAfter=No
16	.	.	PUNCT	.	_	4	punct	_	SpaceAfter=No
17	“	“	PUNCT	“	PunctSide=Fin	4	punct	_	_

~~~


