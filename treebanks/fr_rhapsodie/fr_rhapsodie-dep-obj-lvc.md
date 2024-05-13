---
layout: base
title:  'Statistics of obj:lvc in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `obj:lvc`

This relation is a language-specific subtype of <tt><a href="fr_rhapsodie-dep-obj.html">obj</a></tt>.

72 nodes (0%) are attached to their parents as `obj:lvc`.

68 instances of `obj:lvc` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.76388888888889.

The following 2 pairs of parts of speech are connected with `obj:lvc`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (66; 92% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt> (6; 8% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 obj:lvc	color:blue
1	vous	vous	PRON	_	Number=Plur|Person=2|PronType=Prs	3	nsubj	_	Overlap=Rhap_D0006-5
2	n'	ne	ADV	_	Polarity=Neg	3	advmod	_	Overlap=Rhap_D0006-5|SpaceAfter=No
3	avez	avoir	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	Overlap=Rhap_D0006-5
4	pas	pas	ADV	_	Polarity=Neg	3	advmod	_	_
5	autour	autour	ADV	_	_	3	advmod	_	_
6	de	de	ADP	_	_	7	case	_	_
7	vous	vous	PRON	_	Number=Plur|Person=2|PronType=Prs	5	obl:arg	_	_
8	cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	9	det	_	_
9	impression	impression	NOUN	_	Gender=Fem|Number=Sing	3	obj:lvc	_	_
10	que	que	SCONJ	_	_	9	dep	_	Scrap=Yes|SpaceAfter=No
11	…	…	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 obj:lvc	color:blue
1	et	et	CCONJ	_	_	6	cc	_	_
2	j'	moi	PRON	_	Number=Sing|Person=1|PronType=Prs	6	nsubj	_	SpaceAfter=No
3	ai	avoir	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	6	aux:tense	_	_
4	vraiment	vraiment	ADV	_	_	5	advmod	_	_
5	mal	mal	ADV	_	_	6	obj:lvc	_	_
6	vécu	vivre	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
7	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	6	obj	_	SpaceAfter=No
8	.	.	PUNCT	_	_	6	punct	_	_

~~~


