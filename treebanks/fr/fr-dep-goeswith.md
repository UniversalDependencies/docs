---
layout: base
title:  'Statistics of goeswith in UD_French'
udver: '2'
---

## Treebank Statistics: UD_French: Relations: `goeswith`

This relation is universal.

22 nodes (0%) are attached to their parents as `goeswith`.

20 instances of `goeswith` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.04545454545455.

The following 13 pairs of parts of speech are connected with `goeswith`: <tt><a href="fr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr-pos-NOUN.html">NOUN</a></tt> (4; 18% instances), <tt><a href="fr-pos-PRON.html">PRON</a></tt>-<tt><a href="fr-pos-PART.html">PART</a></tt> (3; 14% instances), <tt><a href="fr-pos-VERB.html">VERB</a></tt>-<tt><a href="fr-pos-NOUN.html">NOUN</a></tt> (3; 14% instances), <tt><a href="fr-pos-ADV.html">ADV</a></tt>-<tt><a href="fr-pos-ADJ.html">ADJ</a></tt> (2; 9% instances), <tt><a href="fr-pos-VERB.html">VERB</a></tt>-<tt><a href="fr-pos-VERB.html">VERB</a></tt> (2; 9% instances), <tt><a href="fr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="fr-pos-DET.html">DET</a></tt>-<tt><a href="fr-pos-ADP.html">ADP</a></tt> (1; 5% instances), <tt><a href="fr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr-pos-PRON.html">PRON</a></tt> (1; 5% instances), <tt><a href="fr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr-pos-X.html">X</a></tt> (1; 5% instances), <tt><a href="fr-pos-PRON.html">PRON</a></tt>-<tt><a href="fr-pos-ADV.html">ADV</a></tt> (1; 5% instances), <tt><a href="fr-pos-VERB.html">VERB</a></tt>-<tt><a href="fr-pos-ADV.html">ADV</a></tt> (1; 5% instances), <tt><a href="fr-pos-VERB.html">VERB</a></tt>-<tt><a href="fr-pos-AUX.html">AUX</a></tt> (1; 5% instances), <tt><a href="fr-pos-VERB.html">VERB</a></tt>-<tt><a href="fr-pos-X.html">X</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 goeswith	color:blue
1	Nous	nous	PRON	_	Number=Plur|Person=1|PronType=Prs	3	nsubj	_	_
2	avons	avoir	AUX	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	testé	tester	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	restaurant	restaurant	NOUN	_	Gender=Masc|Number=Sing	3	obj	_	_
6	ce	ce	DET	_	Gender=Masc|Number=Sing|PronType=Dem	7	det	_	_
7	week	weekend	NOUN	_	Gender=Masc|Number=Sing	3	obl	_	_
8	end	end	NOUN	_	Gender=Fem|Number=Sing	7	goeswith	_	SpaceAfter=No
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 goeswith	color:blue
1	On	on	PRON	_	Gender=Masc|Number=Sing|Person=3	4	nsubj	_	_
2	en	en	PRON	_	Person=3	6	nmod	_	_
3	avait	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	4	aux	_	_
4	vue	voir	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
5	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	dizaine	dizaine	NOUN	_	Gender=Fem|Number=Sing	4	obj	_	_
7	à	à	ADP	_	_	10	case	_	_
8	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
9	premier	premier	NUM	_	_	10	nummod	_	_
10	contrôle	contrôle	NOUN	_	Gender=Masc|Number=Sing	4	obl	_	_
11	mais	mais	CCONJ	_	_	13	cc	_	_
12	pas	pas	ADV	_	Polarity=Neg	13	advmod	_	_
13	celle	celui	PRON	_	Gender=Fem|Number=Sing|PronType=Dem	6	conj	_	_
14	là	là	PART	_	_	13	goeswith	_	SpaceAfter=No
15	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 goeswith	color:blue
1	Pas	pas	ADV	_	Polarity=Neg	3	advmod	_	_
2	de	un	DET	_	Definite=Ind|PronType=Art	3	det	_	_
3	sèche	sécher	VERB	_	_	0	root	_	_
4	cheveux	cheveu	NOUN	_	Gender=Masc|Number=Plur	3	goeswith	_	_
5	ni	ni	CCONJ	_	_	7	cc	_	_
6	de	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	prise	prise	NOUN	_	Gender=Fem|Number=Sing	3	conj	_	_
8	rasoir	rasoir	NOUN	_	Gender=Masc|Number=Sing	7	compound	_	_
9	dans	dans	ADP	_	_	11	case	_	_
10	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	salle	salle	NOUN	_	Gender=Fem|Number=Sing	3	obl	_	_
12	de	de	ADP	_	_	13	case	_	_
13	bains	bain	NOUN	_	Gender=Masc|Number=Plur	11	nmod	_	SpaceAfter=No
14	.	.	PUNCT	_	_	3	punct	_	_

~~~


