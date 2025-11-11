---
layout: base
title:  'Statistics of fixed in UD_French-FQB'
udver: '2'
---

## Treebank Statistics: UD_French-FQB: Relations: `fixed`

This relation is universal.

121 nodes (1%) are attached to their parents as `fixed`.

121 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.38842975206612.

The following 19 pairs of parts of speech are connected with `fixed`: <tt><a href="fr_fqb-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_fqb-pos-ADP.html">ADP</a></tt> (23; 19% instances), <tt><a href="fr_fqb-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt> (20; 17% instances), <tt><a href="fr_fqb-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_fqb-pos-DET.html">DET</a></tt> (16; 13% instances), <tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_fqb-pos-ADP.html">ADP</a></tt> (15; 12% instances), <tt><a href="fr_fqb-pos-DET.html">DET</a></tt>-<tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt> (15; 12% instances), <tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_fqb-pos-SCONJ.html">SCONJ</a></tt> (6; 5% instances), <tt><a href="fr_fqb-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt> (5; 4% instances), <tt><a href="fr_fqb-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_fqb-pos-SCONJ.html">SCONJ</a></tt> (4; 3% instances), <tt><a href="fr_fqb-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt> (4; 3% instances), <tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt> (3; 2% instances), <tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="fr_fqb-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fr_fqb-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fr_fqb-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="fr_fqb-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="fr_fqb-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="fr_fqb-pos-SYM.html">SYM</a></tt> (1; 1% instances), <tt><a href="fr_fqb-pos-DET.html">DET</a></tt>-<tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_fqb-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 fixed	color:blue
1	à	à_partir_de	ADP	_	ExtPos=ADP	4	case	_	_
2	partir	_	VERB	_	VerbForm=Inf	1	fixed	_	_
3	de	_	ADP	_	_	1	fixed	_	_
4	quand	quand	ADV	_	PronType=Int	7	obl:mod	_	_
5	puis	pouvoir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
6	-je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 fixed	color:blue
1	Quel	quel	DET	_	Gender=Masc|Number=Sing|PronType=Int	2	det	_	_
2	âge	âge	NOUN	_	Gender=Masc|Number=Sing	5	obj	_	_
3	Burt	Burt	PROPN	_	Gender=Masc|Number=Sing	5	nsubj	_	_
4	Lancaster	Lancaster	PROPN	_	_	3	flat:name	_	_
5	avait	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	SpaceAfter=No
6	-il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	expl:subj	_	_
7	à	à	ADP	_	ExtPos=ADP	12	case	_	_
8	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	fixed	_	_
9	moment	_	NOUN	_	_	7	fixed	_	_
10	de	_	ADP	_	_	7	fixed	_	_
11	sa	son	DET	_	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	12	det	_	_
12	mort	mort	NOUN	_	Gender=Masc|Number=Sing	5	obl:mod	_	_
13	?	?	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 fixed	color:blue
1	Quel	quel	DET	_	Gender=Masc|Number=Sing|PronType=Int	2	det	_	_
2	âge	âge	NOUN	_	Gender=Masc|Number=Sing	5	obj	_	_
3	Burt	Burt	PROPN	_	Gender=Masc|Number=Sing	5	nsubj	_	_
4	Lancaster	Lancaster	PROPN	_	_	3	flat:name	_	_
5	avait	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	SpaceAfter=No
6	-il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	expl:subj	_	_
7	à	à	ADP	_	ExtPos=ADP	12	case	_	_
8	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	fixed	_	_
9	moment	_	NOUN	_	_	7	fixed	_	_
10	de	_	ADP	_	_	7	fixed	_	_
11	sa	son	DET	_	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	12	det	_	_
12	mort	mort	NOUN	_	Gender=Masc|Number=Sing	5	obl:mod	_	_
13	?	?	PUNCT	_	_	5	punct	_	_

~~~


