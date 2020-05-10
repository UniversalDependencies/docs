---
layout: base
title:  'Statistics of compound:prt in UD_Icelandic-PUD'
udver: '2'
---

## Treebank Statistics: UD_Icelandic-PUD: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="is_pud-dep-compound.html">compound</a></tt>.

132 nodes (1%) are attached to their parents as `compound:prt`.

130 instances of `compound:prt` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.57575757575758.

The following 6 pairs of parts of speech are connected with `compound:prt`: <tt><a href="is_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="is_pud-pos-ADV.html">ADV</a></tt> (98; 74% instances), <tt><a href="is_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="is_pud-pos-ADP.html">ADP</a></tt> (28; 21% instances), <tt><a href="is_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="is_pud-pos-ADP.html">ADP</a></tt> (3; 2% instances), <tt><a href="is_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="is_pud-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="is_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="is_pud-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="is_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="is_pud-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 compound:prt	color:blue
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 compound:prt	color:blue
1	Það	það	PRON	fphen	Case=Nom|Gender=Neut|Number=Sing|PronType=Prs	4	expl	_	_
2	er	vera	AUX	sfg3en	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
3	vegna	vegna	ADP	ae	_	4	case	_	_
4	þessa	þessi	PRON	fahee	Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	0	root	_	_
5	sem	sem	SCONJ	ct	_	7	mark	_	_
6	við	ég	PRON	fp1fn	Case=Nom|Number=Plur|Person=1|PronType=Prs	7	nsubj	_	_
7	komum	koma	VERB	sfg1fþ	Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	4	acl:relcl	_	_
8	alltaf	alltaf	ADV	aa	_	7	advmod	_	_
9	aftur	aftur	ADV	aa	_	7	advmod	_	_
10	til	til	ADP	ae	_	7	compound:prt	_	_
11	að	að	PART	cn	_	12	mark	_	_
12	fá	fá	VERB	sng	VerbForm=Inf|Voice=Act	7	xcomp	_	_
13	meira	mikill	ADJ	lheovm	Case=Acc|Definite=Def|Degree=Cmp|Gender=Neut|Number=Sing	12	obj	_	SpaceAfter=No
14	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound:prt	color:blue
1	Bloch	Bloch	PROPN	e	_	3	nsubj	_	_
2	er	vera	AUX	sfg3en	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	umhugað	umhugað	ADJ	lhensf	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
4	um	um	ADP	ao	_	3	compound:prt	_	_
5	að	að	SCONJ	c	_	8	mark	_	_
6	von	von	NOUN	nven	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	8	nsubj	_	_
7	sé	vera	AUX	svg3en	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	_
8	leiðarljós	leiðarljós	NOUN	nhen	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	3	ccomp	_	_
9	marxisma	marxismi	NOUN	nkee	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	8	nmod:poss	_	_
10	síns	sinn	PRON	fekee	Case=Gen|Gender=Masc|Number=Sing|Poss=Yes	9	nmod:poss	_	_
11	og	og	CCONJ	c	_	12	cc	_	_
12	leggur	leggja	VERB	sfg3en	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	_
13	áherslu	áhersla	NOUN	nveo	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	12	obj	_	_
14	á	á	ADP	ao	_	16	case	_	_
15	undirliggjandi	undirliggjandi	ADJ	lkeoof	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	16	amod	_	_
16	húmanismann	húmanismaður	NOUN	nkeo	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	13	nmod	_	_
17	sem	sem	SCONJ	ct	_	18	nsubj	_	_
18	felst	fela	VERB	sfm3en	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	16	acl:relcl	_	_
19	í	í	ADP	aþ	_	20	case	_	_
20	dulspekihefðum	dulspekihefuð	NOUN	nhfþ	Case=Dat|Definite=Ind|Gender=Neut|Number=Plur	18	obl:arg	_	SpaceAfter=No
21	.	.	PUNCT	.	_	3	punct	_	_

~~~


