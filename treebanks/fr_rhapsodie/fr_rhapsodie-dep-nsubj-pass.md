---
layout: base
title:  'Statistics of nsubj:pass in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="fr_rhapsodie-dep-nsubj.html">nsubj</a></tt>.
There are also 2 other language-specific subtypes of `nsubj`: <tt><a href="fr_rhapsodie-dep-nsubj-caus.html">nsubj:caus</a></tt>, <tt><a href="fr_rhapsodie-dep-nsubj-outer.html">nsubj:outer</a></tt>.

123 nodes (0%) are attached to their parents as `nsubj:pass`.

122 instances of `nsubj:pass` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.42276422764228.

The following 4 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (86; 70% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (35; 28% instances), <tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="fr_rhapsodie-pos-X.html">X</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj:pass	color:blue
1	et	et	CCONJ	_	_	5	cc	_	AlignBegin=284832|AlignEnd=284862
2	on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	5	nsubj:pass	_	AlignBegin=284862|AlignEnd=284892
3	sera	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	5	aux:pass	_	AlignBegin=284892|AlignEnd=285062
4	pas	pas	ADV	_	Polarity=Neg	5	advmod	_	AlignBegin=285062|AlignEnd=285172
5	payé	payer	VERB	_	VerbForm=Part|Voice=Pass	0	root	_	AlignBegin=285172|AlignEnd=285382|Gender[ctxt]=Masc|Number[ctxt]=Sing|Tense[denom]=Past
6	en	en	ADP	_	_	7	case	_	AlignBegin=285382|AlignEnd=285442
7	plus	plus	ADV	_	_	5	advmod	_	AlignBegin=285442|AlignEnd=285638|SpaceAfter=No
8	.	.	PUNCT	_	_	5	punct	_	AlignBegin=285638|AlignEnd=285638

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj:pass	color:blue
1	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	AlignBegin=114815|AlignEnd=114947
2	réunion	réunion	NOUN	_	_	5	nsubj:pass	_	AlignBegin=114947|AlignEnd=115533|Gender[lex]=Fem|Number[ctxt]=Sing
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux:pass	_	AlignBegin=115533|AlignEnd=115659
4	savamment	savamment	ADV	_	_	5	advmod	_	AlignBegin=115659|AlignEnd=116243
5	minutée	minuter	VERB	_	VerbForm=Part|Voice=Pass	0	root	_	AlignBegin=116243|AlignEnd=117021|Gender[ctxt]=Fem|Number[ctxt]=Sing|SpaceAfter=No|Tense[denom]=Past
6	.	.	PUNCT	_	_	5	punct	_	AlignBegin=117021|AlignEnd=117021

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nsubj:pass	color:blue
1	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	2	nsubj	_	AlignBegin=128158|AlignEnd=129314|Overlap=Rhap_D2010-63|SpaceAfter=No
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	reparandum	_	AlignBegin=128158|AlignEnd=129314|Overlap=Rhap_D2010-63|SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	AlignBegin=129314|AlignEnd=128158|Overlap=Rhap_D2010-52
4	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	5	nsubj:pass	_	AlignBegin=128158|AlignEnd=129314|Overlap=Rhap_D2010-63|SpaceAfter=No
5	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	AlignBegin=128158|AlignEnd=129314|Overlap=Rhap_D2010-63|Scrap=Yes|SpaceAfter=No
6	…	…	PUNCT	_	_	5	punct	_	AlignBegin=129314|AlignEnd=129314|Overlap=Rhap_D2010-52

~~~


