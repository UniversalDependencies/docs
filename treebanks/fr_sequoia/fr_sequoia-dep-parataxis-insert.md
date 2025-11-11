---
layout: base
title:  'Statistics of parataxis:insert in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `parataxis:insert`

This relation is a language-specific subtype of <tt><a href="fr_sequoia-dep-parataxis.html">parataxis</a></tt>.

126 nodes (0%) are attached to their parents as `parataxis:insert`.

116 instances of `parataxis:insert` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 12.5079365079365.

The following 16 pairs of parts of speech are connected with `parataxis:insert`: <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (45; 36% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (20; 16% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt> (17; 13% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (16; 13% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (7; 6% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt> (5; 4% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (3; 2% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt> (2; 2% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-SYM.html">SYM</a></tt> (2; 2% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 parataxis:insert	color:blue
1	Imposé	imposer	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	Tense[denom]=Past
2	à	à	ADP	_	_	4	case	_	_
3	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	peuple	peuple	NOUN	_	Number=Sing	1	obl:arg	_	Gender[lex]=Masc
5	irakien	irakien	ADJ	_	Gender=Masc|Number=Sing	4	amod	_	SpaceAfter=No
6	,	,	PUNCT	_	_	1	punct	_	_
7	devrais	devoir	VERB	_	Mood=Cnd|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	1	parataxis:insert	_	SpaceAfter=No
8	-je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	_
9	dire	dire	VERB	_	VerbForm=Inf	7	xcomp	_	SpaceAfter=No|Subject=SubjRaising
10	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 parataxis:insert	color:blue
1	À	à	ADP	_	ExtPos=ADV	6	advmod	_	Idiom=Yes
2	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	1	fixed	_	InIdiom=Yes
3	moins	moins	ADV	_	_	1	fixed	_	InIdiom=Yes
4	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
5	nouvelle	nouveau	ADJ	_	Gender=Fem|Number=Sing	6	amod	_	_
6	fracture	fracture	NOUN	_	Number=Sing	0	root	_	Gender[lex]=Fem
7	vertébrale	vertébral	ADJ	_	Gender=Fem|Number=Sing	6	amod	_	_
8	(	(	PUNCT	_	_	10	punct	_	SpaceAfter=No
9	0-3	0-3	NUM	_	NumType=Card	10	nummod	_	Number[lex]=Plur
10	ans	an	NOUN	_	Number=Plur	6	parataxis:insert	_	Gender[lex]=Masc|SpaceAfter=No
11	)	)	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 parataxis:insert	color:blue
1	Très	très	ADV	_	_	2	advmod	_	_
2	fréquent	fréquent	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
3	(	(	PUNCT	_	_	4	punct	_	SpaceAfter=No
4	1/10	1/10	NUM	_	NumType=Card	2	parataxis:insert	_	SpaceAfter=No
5	)	)	PUNCT	_	_	4	punct	_	_

~~~


