---
layout: base
title:  'Statistics of expl in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `expl`

This relation is universal.
There are 1 language-specific subtypes of `expl`: <tt><a href="fr_gsd-dep-expl-pass.html">expl:pass</a></tt>.

1578 nodes (0%) are attached to their parents as `expl`.

1490 instances of `expl` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.26679340937896.

The following 15 pairs of parts of speech are connected with `expl`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (1183; 75% instances), <tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_gsd-pos-PART.html">PART</a></tt> (245; 16% instances), <tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (55; 3% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-SCONJ.html">SCONJ</a></tt> (44; 3% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (20; 1% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (10; 1% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-SCONJ.html">SCONJ</a></tt> (6; 0% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-SCONJ.html">SCONJ</a></tt> (4; 0% instances), <tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (3; 0% instances), <tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_gsd-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 expl	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	_
2	n'	ne	ADV	_	Polarity=Neg	6	advmod	_	SpaceAfter=No
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
4	pas	pas	ADV	_	Polarity=Neg	6	advmod	_	_
5	aussi	aussi	ADV	_	_	6	advmod	_	_
6	anxieux	anxieux	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
7	qu'	que	SCONJ	_	_	10	mark	_	SpaceAfter=No
8	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	_
9	y	y	PRON	_	_	10	expl	_	_
10	paraît	paraître	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	advcl	_	SpaceAfter=No
11	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 expl	color:blue
1	Va	aller	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
2	-t	t	PART	_	_	3	expl	_	SpaceAfter=No
3	-il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	1	nsubj	_	_
4	se	se	PRON	_	Person=3|PronType=Prs	5	expl:pass	_	_
5	circonscrire	circonscrire	VERB	_	VerbForm=Inf	1	xcomp	_	_
6	à	à	ADP	_	_	9	case	_	_
7	cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	9	det	_	_
8	seule	seul	ADJ	_	Gender=Fem|Number=Sing	9	amod	_	_
9	matière	matière	NOUN	_	Gender=Fem|Number=Sing	5	obl	_	_
10	?	?	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 expl	color:blue
1	Qu'	que	PRON	_	_	0	root	_	SpaceAfter=No
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	SpaceAfter=No
3	-ce	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	1	expl	_	_
4	qui	qui	PRON	_	_	3	fixed	_	_
5	va	aller	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	acl:relcl	_	_
6	augmenter	augmenter	VERB	_	VerbForm=Inf	5	xcomp	_	_
7	?	?	PUNCT	_	_	1	punct	_	_

~~~


