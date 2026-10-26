---
layout: base
title:  'Statistics of obl:arg in UD_French-FQB'
udver: '2'
---

## Treebank Statistics: UD_French-FQB: Relations: `obl:arg`

This relation is a language-specific subtype of .
There are also 2 other language-specific subtypes of `obl`: <tt><a href="fr_fqb-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="fr_fqb-dep-obl-mod.html">obl:mod</a></tt>.

580 nodes (2%) are attached to their parents as `obl:arg`.

308 instances of `obl:arg` (53%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.63620689655172.

The following 13 pairs of parts of speech are connected with `obl:arg`: <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt> (218; 38% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt> (155; 27% instances), <tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt> (106; 18% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-PROPN.html">PROPN</a></tt> (33; 6% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt> (28; 5% instances), <tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt> (15; 3% instances), <tt><a href="fr_fqb-pos-DET.html">DET</a></tt>-<tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt> (15; 3% instances), <tt><a href="fr_fqb-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="fr_fqb-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_fqb-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_fqb-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 obl:arg	color:blue
1	à	à	ADP	_	ExtPos=ADV	7	advmod	_	_
2	partir	partir	VERB	_	VerbForm=Inf	1	fixed	_	_
3	de	de	ADP	_	_	4	case	_	_
4	quand	quand	ADV	_	PronType=Int	1	obl:arg	_	_
5	puis	pouvoir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
6	-je	moi	PRON	_	Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
7	bénéficier	bénéficier	VERB	_	VerbForm=Inf	5	xcomp	_	_
8	d'	de	ADP	_	_	10	case	_	SpaceAfter=No
9	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	aide	aide	NOUN	_	Number=Sing	7	obl:arg	_	_
11	à	à	ADP	_	_	13	case	_	_
12	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	logement	logement	NOUN	_	Gender=Masc|Number=Sing	10	nmod	_	_
14	?	?	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 obl:arg	color:blue
1	à	à	ADP	_	_	2	case	_	_
2	combien	combien	ADV	_	PronType=Int	4	obl:arg	_	_
3	s'	soi	PRON	_	Person=3|PronType=Prs|Reflex=Yes	4	expl:pv	_	SpaceAfter=No
4	élève	élever	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	mon	son	DET	_	Number=Sing|Poss=Yes|PronType=Prs	6	det	_	_
6	aide	aide	NOUN	_	Number=Sing	4	nsubj	_	_
7	à	à	ADP	_	_	9	case	_	_
8	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	logement	logement	NOUN	_	Gender=Masc|Number=Sing	6	nmod	_	_
10	?	?	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 obl:arg	color:blue
1	Quelles	quel	DET	_	Gender=Fem|Number=Plur|PronType=Int	2	det	_	_
2	pièces	pièce	NOUN	_	Gender=Fem|Number=Plur	4	nsubj	_	_
3	justificatives	justificatif	ADJ	_	Gender=Fem|Number=Plur	2	amod	_	_
4	adresser	adresser	VERB	_	VerbForm=Inf	0	root	_	_
5	lord	lors	ADV	_	Typo=Yes	4	advmod	_	CorrectForm=lors
6	de	de	ADP	_	_	8	case	_	_
7	ma	son	DET	_	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	8	det	_	_
8	demande	demande	NOUN	_	Gender=Fem|Number=Sing	5	obl:arg	_	_
9	?	?	PUNCT	_	_	4	punct	_	_

~~~


