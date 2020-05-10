---
layout: base
title:  'Statistics of csubj in UD_Icelandic-PUD'
udver: '2'
---

## Treebank Statistics: UD_Icelandic-PUD: Relations: `csubj`

This relation is universal.

44 nodes (0%) are attached to their parents as `csubj`.

37 instances of `csubj` (84%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.97727272727273.

The following 8 pairs of parts of speech are connected with `csubj`: <tt><a href="is_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="is_pud-pos-VERB.html">VERB</a></tt> (16; 36% instances), <tt><a href="is_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="is_pud-pos-VERB.html">VERB</a></tt> (14; 32% instances), <tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_pud-pos-VERB.html">VERB</a></tt> (5; 11% instances), <tt><a href="is_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt> (5; 11% instances), <tt><a href="is_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="is_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="is_pud-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="is_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="is_pud-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="is_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="is_pud-pos-SCONJ.html">SCONJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 csubj	color:blue
1	Hér	hér	ADV	aa	_	3	advmod	_	_
2	er	vera	AUX	sfg3en	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	hægt	hægur	ADJ	lhensf	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
4	að	að	PART	cn	_	5	mark	_	_
5	bera	bera	VERB	sng	VerbForm=Inf|Voice=Act	3	csubj	_	_
6	saman	saman	ADV	aa	_	5	compound:prt	_	_
7	leiki	leikur	NOUN	nkfo	Case=Acc|Definite=Ind|Gender=Masc|Number=Plur	5	obj	_	_
8	og	og	CCONJ	c	_	9	cc	_	_
9	hversdagslíf	hversdagslíf	NOUN	nheo	Case=Acc|Definite=Ind|Gender=Neut|Number=Sing	7	conj	_	_
10	okkar	ég	PRON	fp1fe	Case=Gen|Number=Plur|Person=1|PronType=Prs	9	nmod:poss	_	SpaceAfter=No
11	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 csubj	color:blue
1	Þegar	þegar	SCONJ	c	_	3	mark	_	_
2	fólk	fólk	NOUN	nhen	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	3	nsubj	_	_
3	deyr	deyja	VERB	sfg3en	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	csubj	_	_
4	úr	úr	ADP	aþ	_	5	case	_	_
5	elli	elli	NOUN	nveþ	Case=Dat|Definite=Ind|Gender=Fem|Number=Sing	3	obl	_	_
6	á	á	ADP	aþ	_	7	case	_	_
7	Indlandi	Indland	PROPN	nheþ-s	Case=Dat|Gender=Neut|Number=Sing	5	nmod	_	_
8	á	á	VERB	aþ	_	0	root	_	_
9	að	að	PART	cn	_	10	mark	_	_
10	fagna	fagna	VERB	sng	VerbForm=Inf|Voice=Act	8	xcomp	_	SpaceAfter=No
11	.	.	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 csubj	color:blue
1	Það	það	PRON	fphen	Case=Nom|Gender=Neut|Number=Sing|PronType=Prs	3	expl	_	_
2	er	vera	AUX	sfg3en	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	draumur	draumur	NOUN	nken	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
4	hans	hann	PRON	fpkee	Case=Gen|Gender=Masc|Number=Sing|PronType=Prs	3	nmod:poss	_	_
5	að	að	PART	cn	_	6	mark	_	_
6	ljúka	ljúka	VERB	sng	VerbForm=Inf|Voice=Act	3	csubj	_	_
7	ferli	ferill	NOUN	nkeþ	Case=Dat|Definite=Ind|Gender=Masc|Number=Sing	6	obj	_	_
8	sínum	sinn	PRON	fekeþ	Case=Dat|Gender=Masc|Number=Sing|Poss=Yes	7	nmod:poss	_	_
9	hér	hér	ADV	aa	_	6	advmod	_	SpaceAfter=No
10	.	.	PUNCT	.	_	3	punct	_	_

~~~


