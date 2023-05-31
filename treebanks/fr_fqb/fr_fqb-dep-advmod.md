---
layout: base
title:  'Statistics of advmod in UD_French-FQB'
udver: '2'
---

## Treebank Statistics: UD_French-FQB: Relations: `advmod`

This relation is universal.

530 nodes (2%) are attached to their parents as `advmod`.

481 instances of `advmod` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.83396226415094.

The following 10 pairs of parts of speech are connected with `advmod`: <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt> (369; 70% instances), <tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt> (123; 23% instances), <tt><a href="fr_fqb-pos-DET.html">DET</a></tt>-<tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt> (15; 3% instances), <tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt> (11; 2% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-ADP.html">ADP</a></tt> (5; 1% instances), <tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="fr_fqb-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_fqb-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="fr_fqb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 advmod	color:blue
1	Comment	comment	ADV	_	PronType=Int	7	advmod	_	_
2	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	Caf	Caf	NOUN	_	_	4	nsubj	_	_
4	peut	pouvoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
5	-elle	il	PRON	_	Gender=Fem|Number=Sing|Person=3	4	expl:subj	_	_
6	m'	le/lui	PRON	_	Number=Sing|Person=1	7	obj	_	SpaceAfter=No
7	aider	aider	VERB	_	VerbForm=Inf	4	xcomp	_	_
8	?	?	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod	color:blue
1	Quel	quel	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	_
3	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
4	plus	plus	ADV	_	_	5	advmod	_	_
5	grand	grand	ADJ	_	Gender=Masc|Number=Sing	6	amod	_	_
6	pays	pays	NOUN	_	Gender=Masc	1	nsubj	_	_
7	exportateur	exportateur	NOUN	_	Gender=Fem|Number=Sing	6	nmod	_	_
8	de	de	ADP	_	_	9	case	_	_
9	pétrole	pétrole	NOUN	_	Gender=Masc|Number=Sing	7	nmod	_	_
10	brut	brut	ADJ	_	Gender=Masc|Number=Sing	9	amod	_	_
11	?	?	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 advmod	color:blue
1	Quel	quel	DET	_	Gender=Masc|Number=Sing|PronType=Int	2	det	_	_
2	État	état	NOUN	_	Gender=Masc|Number=Sing	3	nsubj	_	_
3	compte	compter	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
5	plus	plus	ADV	_	_	4	advmod	_	_
6	d'	de	ADP	_	_	5	fixed	_	SpaceAfter=No
7	Indiens	indien	NOUN	_	Gender=Fem|Number=Plur	3	obj	_	_
8	?	?	PUNCT	_	_	3	punct	_	_

~~~


