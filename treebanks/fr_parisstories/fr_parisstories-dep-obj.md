---
layout: base
title:  'Statistics of obj in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `obj`

This relation is universal.
There are 2 language-specific subtypes of `obj`: <tt><a href="fr_parisstories-dep-obj-agent.html">obj:agent</a></tt>, <tt><a href="fr_parisstories-dep-obj-lvc.html">obj:lvc</a></tt>.

1810 nodes (4%) are attached to their parents as `obj`.

1245 instances of `obj` (69%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.29834254143646.

The following 21 pairs of parts of speech are connected with `obj`: <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (946; 52% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (666; 37% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt> (77; 4% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt> (44; 2% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt> (15; 1% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (7; 0% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-X.html">X</a></tt> (7; 0% instances), <tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (6; 0% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (6; 0% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt> (6; 0% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-DET.html">DET</a></tt> (6; 0% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-INTJ.html">INTJ</a></tt> (6; 0% instances), <tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (5; 0% instances), <tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fr_parisstories-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_parisstories-pos-INTJ.html">INTJ</a></tt> (1; 0% instances), <tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_parisstories-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obj	color:blue
1	donc	donc	ADV	_	_	4	advmod	_	_
2	comment	comment	ADV	_	_	4	advmod	_	_
3	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
4	fais	faire	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
5	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	6	det	_	_
6	gougères	gougère	NOUN	_	Gender=Fem|Number=Plur	4	obj	_	_
7	?	?	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 obj	color:blue
1	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
2	me	se	PRON	_	_	4	expl:comp	_	_
3	suis	être	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
4	aperçue	apercevoir	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
5	que	que	SCONJ	_	_	8	mark	_	_
6	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	8	nsubj	_	SpaceAfter=No
7	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	cop	_	_
8	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	4	ccomp	_	_
9	qui	qui	PRON	_	_	11	nsubj	_	_
10	les	le	PRON	_	Number=Plur|Person=3|PronType=Prs	11	obj	_	_
11	empêchait	empêcher	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	advcl:cleft	_	_
12	de	de	ADP	_	_	13	mark	_	_
13	gonfler	gonfler	VERB	_	VerbForm=Inf	11	xcomp	_	SpaceAfter=No|Subject=ObjRaising
14	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 obj	color:blue
1	il	_	PRON	_	_	3	expl:subj	_	_
2	y	y	PRON	_	Person=3|PronType=Prs	3	expl:comp	_	_
3	avait	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
4	beaucoup	beaucoup	ADV	_	_	3	obj	_	_
5	de	de	ADP	_	_	6	case	_	_
6	violences	violence	NOUN	_	Gender=Fem|Number=Plur	4	nmod	_	_
7	sexuelles	sexuel	ADJ	_	Gender=Fem|Number=Plur	6	amod	_	_
8	là-bas	là-bas	ADV	_	_	3	advmod	_	SpaceAfter=No
9	,	,	PUNCT	_	_	11	punct	_	_
10	en	en	ADP	_	_	11	case	_	_
11	fait	fait	NOUN	_	Gender=Masc|Number=Sing	3	discourse	_	SpaceAfter=No
12	.	.	PUNCT	_	_	3	punct	_	_

~~~


