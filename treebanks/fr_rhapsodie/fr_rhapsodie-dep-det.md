---
layout: base
title:  'Statistics of det in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `det`

This relation is universal.

4123 nodes (9%) are attached to their parents as `det`.

4120 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.19354838709677.

The following 11 pairs of parts of speech are connected with `det`: <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt> (3756; 91% instances), <tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt> (224; 5% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt> (38; 1% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt> (38; 1% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (21; 1% instances), <tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt> (18; 0% instances), <tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt> (13; 0% instances), <tt><a href="fr_rhapsodie-pos-X.html">X</a></tt>-<tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt> (9; 0% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 det	color:blue
1	vous	il	PRON	_	Number=Plur|Person=2|PronType=Prs	3	nsubj	_	Overlap=Rhap_D0006-5
2	n'	ne	ADV	_	Polarity=Neg	3	advmod	_	Overlap=Rhap_D0006-5|SpaceAfter=No
3	avez	avoir	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	Overlap=Rhap_D0006-5
4	pas	pas	ADV	_	Polarity=Neg	3	advmod	_	_
5	autour	autour	ADV	_	_	3	advmod	_	_
6	de	de	ADP	_	_	7	case	_	_
7	vous	lui	PRON	_	Number=Plur|Person=2|PronType=Prs	5	obl:arg	_	_
8	cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	9	det	_	_
9	impression	impression	NOUN	_	Gender=Fem|Number=Sing	3	obj	_	_
10	que	que	SCONJ	_	_	9	dep	_	Scrap=Yes|SpaceAfter=No
11	…	…	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det	color:blue
1	vous	il	PRON	_	Number=Plur|Person=2|PronType=Prs	3	nsubj	_	_
2	vous	lui	PRON	_	Number=Plur|Person=2|PronType=Prs	3	iobj	_	_
3	trouvez	trouver	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
4	à	à	ADP	_	_	6	case	_	_
5	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	Gosier	Gosier	PROPN	_	_	3	obl:arg	_	SpaceAfter=No
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 det	color:blue
1	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	Overlap=Rhap_D0009-53ter|SpaceAfter=No
2	-ce	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	8	expl:subj	_	Overlap=Rhap_D0009-53ter
3	que	que	SCONJ	_	_	8	mark	_	Overlap=Rhap_D0009-53ter
4	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	8	nsubj	_	Overlap=Rhap_D0009-53ter|SpaceAfter=No
5	en	en	PRON	_	Person=3|PronType=Prs	8	nmod	_	Overlap=Rhap_D0009-53ter
6	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	Overlap=Rhap_D0009-53ter
7	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	8	det	_	Overlap=Rhap_D0009-53ter
8	vrai	vrai	ADJ	_	Gender=Masc|Number=Sing	0	root	_	Overlap=Rhap_D0009-53ter
9	?	?	PUNCT	_	_	8	punct	_	Overlap=Rhap_D0009-53ter

~~~


