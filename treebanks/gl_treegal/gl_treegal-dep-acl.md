---
layout: base
title:  'Statistics of acl in UD_Galician-TreeGal'
udver: '2'
---

## Treebank Statistics: UD_Galician-TreeGal: Relations: `acl`

This relation is universal.

650 nodes (3%) are attached to their parents as `acl`.

646 instances of `acl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.63230769230769.

The following 16 pairs of parts of speech are connected with `acl`: <tt><a href="gl_treegal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_treegal-pos-VERB.html">VERB</a></tt> (474; 73% instances), <tt><a href="gl_treegal-pos-PRON.html">PRON</a></tt>-<tt><a href="gl_treegal-pos-VERB.html">VERB</a></tt> (88; 14% instances), <tt><a href="gl_treegal-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gl_treegal-pos-VERB.html">VERB</a></tt> (18; 3% instances), <tt><a href="gl_treegal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_treegal-pos-NOUN.html">NOUN</a></tt> (17; 3% instances), <tt><a href="gl_treegal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_treegal-pos-ADJ.html">ADJ</a></tt> (14; 2% instances), <tt><a href="gl_treegal-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_treegal-pos-VERB.html">VERB</a></tt> (9; 1% instances), <tt><a href="gl_treegal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gl_treegal-pos-VERB.html">VERB</a></tt> (8; 1% instances), <tt><a href="gl_treegal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_treegal-pos-PRON.html">PRON</a></tt> (5; 1% instances), <tt><a href="gl_treegal-pos-DET.html">DET</a></tt>-<tt><a href="gl_treegal-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="gl_treegal-pos-PRON.html">PRON</a></tt>-<tt><a href="gl_treegal-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="gl_treegal-pos-PRON.html">PRON</a></tt>-<tt><a href="gl_treegal-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="gl_treegal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_treegal-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="gl_treegal-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gl_treegal-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="gl_treegal-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_treegal-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="gl_treegal-pos-NUM.html">NUM</a></tt>-<tt><a href="gl_treegal-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="gl_treegal-pos-PRON.html">PRON</a></tt>-<tt><a href="gl_treegal-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 acl	color:blue
1	Son	ser	AUX	Vpi30p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
2	só	só	ADV	Wn	_	3	advmod	_	_
3	consultas	consulta	NOUN	Scfp	Gender=Fem|Number=Plur	0	root	_	_
4	que	que	PRON	Tnfp	Gender=Fem|Number=Plur|PronType=Rel	5	nsubj	_	_
5	responden	responder	VERB	Vpi30p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	acl	_	_
6	a	a	ADP	P	AdpType=Prep	8	case	_	_
7	outras	outro	DET	Idfp	Gender=Fem|Number=Plur|PronType=Ind	8	det	_	_
8	consultas	consulta	NOUN	Scfp	Gender=Fem|Number=Plur	5	obj	_	_
9	previas	previo	ADJ	A0fp	Gender=Fem|Number=Plur	8	amod	_	SpaceAfter=No
10	.	.	PUNCT	Q.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 acl	color:blue
1	Dicía	dicir	VERB	Vii30s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
2	Jean	jean	PROPN	Spm0	Gender=Masc	1	nsubj	_	_
3	Cocteau	cocteau	PROPN	Spm0	Gender=Masc	2	flat:name	_	_
4	que	que	SCONJ	Cs	_	10	mark	_	_
5	a	o	DET	Ddfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	moda	moda	NOUN	Scfs	Gender=Fem|Number=Sing	8	nsubj	_	_
7	é	ser	AUX	Vpi30s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
8	o	o	PRON	Ddms	Gender=Masc|Number=Sing|Person=3|PronType=Art	1	ccomp	_	_
9	que	que	PRON	Tnms	Gender=Masc|Number=Sing|PronType=Rel	10	nsubj	_	_
10	pasa	pasar	VERB	Vpi30s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	acl	_	_
11	de	de	ADP	P	AdpType=Prep	12	case	_	_
12	moda	moda	NOUN	Scfs	Gender=Fem|Number=Sing	10	obl	_	SpaceAfter=No
13	.	.	PUNCT	Q.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 acl	color:blue
1	Agustín	agustín	PROPN	Spm0	Gender=Masc	0	root	_	_
2	Fernández	fernández	PROPN	Spm0	Gender=Masc	1	flat:name	_	_
3	Paz	paz	PROPN	Spm0	Gender=Masc	1	flat:name	_	_
4	visto	ver	VERB	V0p0ms	Gender=Masc|Number=Sing|VerbForm=Part	1	acl	_	_
5	por	por	ADP	P	AdpType=Prep	6	case	_	_
6	Calros	calros	PROPN	Spm0	Gender=Masc	4	obl	_	_
7	Silvar	silvar	PROPN	Spm0	Gender=Masc	6	flat:name	_	SpaceAfter=No
8	.	.	PUNCT	Q.	_	1	punct	_	_

~~~


