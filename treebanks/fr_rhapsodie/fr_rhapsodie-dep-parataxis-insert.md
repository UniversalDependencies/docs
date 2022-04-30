---
layout: base
title:  'Statistics of parataxis:insert in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `parataxis:insert`

This relation is a language-specific subtype of <tt><a href="fr_rhapsodie-dep-parataxis.html">parataxis</a></tt>.
There are also 1 other language-specific subtypes of `parataxis`: <tt><a href="fr_rhapsodie-dep-parataxis-parenth.html">parataxis:parenth</a></tt>.

15 nodes (0%) are attached to their parents as `parataxis:insert`.

10 instances of `parataxis:insert` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.73333333333333.

The following 3 pairs of parts of speech are connected with `parataxis:insert`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (10; 67% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (4; 27% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 parataxis:insert	color:blue
1	sois	être	AUX	CCOMP	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	2	aux	_	Reported=Yes
2	purifié	purifier	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	_
4	entend	entendre	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	parataxis:insert	_	SpaceAfter=No
5	-on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	4	nsubj	_	_
6	dans	dans	ADP	_	_	8	case	_	_
7	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	8	det	_	SpaceAfter=No
8	évangile	évangile	NOUN	_	Gender=Masc|Number=Sing	4	obl:mod	_	SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 3 parataxis:insert	color:blue
1	vraiment	vraiment	ADV	_	_	15	advmod	_	SpaceAfter=No
2	,	,	PUNCT	_	_	3	punct	_	_
3	dit	dire	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	parataxis:insert	_	_
4	Job	Job	PROPN	_	_	3	nsubj	_	SpaceAfter=No
5	,	,	PUNCT	_	_	3	punct	_	_
6	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	vie	vie	NOUN	_	Gender=Fem|Number=Sing	15	nsubj	_	_
8	de	de	ADP	_	_	10	case	_	_
9	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	10	det	_	SpaceAfter=No
10	homme	homme	NOUN	_	Gender=Masc|Number=Sing	7	nmod	_	_
11	sur	sur	ADP	_	_	12	case	_	_
12	terre	terre	NOUN	_	Gender=Fem|Number=Sing	10	nmod	_	_
13	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	cop	_	Reported=Yes
14	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	15	det	_	_
15	corvée	corvée	NOUN	_	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
16	.	.	PUNCT	_	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 parataxis:insert	color:blue
1	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	France	France	PROPN	_	_	4	nsubj	_	_
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	Reported=Yes
4	rose	rose	ADJ	_	Number=Sing	0	root	_	SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	_
6	constate	constater	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	parataxis:insert	_	_
7	La	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	Voix	Voix	PROPN	_	Gender=Fem|Number=Sing	6	nsubj	_	ExtPos=PROPN
9	de	de	ADP	_	_	11	case	_	_
10	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	Nord	Nord	PROPN	_	_	8	nmod	_	SpaceAfter=No
12	.	.	PUNCT	_	_	4	punct	_	_

~~~


