---
layout: base
title:  'Statistics of advcl in UD_French-FQB'
udver: '2'
---

## Treebank Statistics: UD_French-FQB: Relations: `advcl`

This relation is universal.
There are 1 language-specific subtypes of `advcl`: <tt><a href="fr_fqb-dep-advcl-cleft.html">advcl:cleft</a></tt>.

109 nodes (0%) are attached to their parents as `advcl`.

106 instances of `advcl` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.00917431192661.

The following 9 pairs of parts of speech are connected with `advcl`: <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt> (73; 67% instances), <tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt> (12; 11% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt> (7; 6% instances), <tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt> (6; 6% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt> (5; 5% instances), <tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 11 advcl	color:blue
1	Comment	comment	ADV	_	PronType=Int	3	advmod	_	_
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	_	_
3	calculée	calculer	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
4	mon	son	DET	_	Number=Sing|Poss=Yes	5	det	_	_
5	aide	aide	NOUN	_	Number=Sing	3	nsubj:pass	_	_
6	à	à	ADP	_	_	8	case	_	_
7	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	logement	logement	NOUN	_	Gender=Masc|Number=Sing	5	nmod	_	_
9	si	si	SCONJ	_	_	11	mark	_	_
10	je	il	PRON	_	Number=Sing|Person=1	11	nsubj	_	_
11	vis	vivre	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	3	advcl	_	_
12	en	en	ADP	_	_	13	case	_	_
13	couple	couple	NOUN	_	Number=Sing	11	obl:mod	_	_
14	?	?	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 advcl	color:blue
1	Quelle	quel	DET	_	Gender=Fem|Number=Sing|PronType=Int	2	det	_	_
2	étoile	étoile	NOUN	_	Gender=Fem|Number=Sing	6	nsubj	_	_
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
4	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
5	plus	plus	ADV	_	_	6	advmod	_	_
6	lumineuse	lumineux	ADJ	_	Gender=Fem|Number=Sing	0	root	_	_
7	vue	voir	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	6	advcl	_	_
8	de	de	ADP	_	_	10	case	_	_
9	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	Terre	Terre	PROPN	_	_	7	obl:mod	_	_
11	?	?	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 advcl	color:blue
1	Quelle	quel	DET	_	Gender=Fem|Number=Sing|PronType=Int	2	det	_	_
2	planète	planète	NOUN	_	Gender=Fem|Number=Sing	4	nsubj:pass	_	_
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
4	connue	connaître	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
5	comme	comme	ADP	_	_	8	mark	_	_
6	étant	être	AUX	_	Tense=Pres|VerbForm=Part	8	cop	_	_
7	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	planète	planète	NOUN	_	Gender=Fem|Number=Sing	4	advcl	_	_
9	"	"	PUNCT	_	_	10	punct	_	SpaceAfter=No
10	rouge	rouge	ADJ	_	Number=Sing	8	amod	_	SpaceAfter=No
11	"	"	PUNCT	_	_	10	punct	_	_
12	?	?	PUNCT	_	_	4	punct	_	_

~~~


