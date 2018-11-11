---
layout: base
title:  'Statistics of expl in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `expl`

This relation is universal.
There are 1 language-specific subtypes of `expl`: <tt><a href="fr_gsd-dep-expl-pass.html">expl:pass</a></tt>.

1345 nodes (0%) are attached to their parents as `expl`.

1270 instances of `expl` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.29888475836431.

The following 15 pairs of parts of speech are connected with `expl`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (1169; 87% instances), <tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_gsd-pos-PART.html">PART</a></tt> (84; 6% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-SCONJ.html">SCONJ</a></tt> (41; 3% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (20; 1% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (9; 1% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-SCONJ.html">SCONJ</a></tt> (6; 0% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-SCONJ.html">SCONJ</a></tt> (4; 0% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (3; 0% instances), <tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_gsd-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt> (1; 0% instances).


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
9	matière	matière	NOUN	_	Gender=Fem|Number=Sing	5	obl:arg	_	_
10	?	?	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 expl	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	ne	ne	ADV	_	Polarity=Neg	3	advmod	_	_
3	manque	manquer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	plus	plus	ADV	_	_	3	advmod	_	_
5	que	que	SCONJ	_	_	3	expl	_	_
6	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	soleil	soleil	NOUN	_	Gender=Masc|Number=Sing	3	obj	_	SpaceAfter=No
8	...	...	PUNCT	_	_	3	punct	_	_

~~~


