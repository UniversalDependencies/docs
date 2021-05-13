---
layout: base
title:  'Statistics of dep:comp in UD_French-Spoken'
udver: '2'
---

## Treebank Statistics: UD_French-Spoken: Relations: `dep:comp`

This relation is a language-specific subtype of <tt><a href="fr_spoken-dep-dep.html">dep</a></tt>.

280 nodes (1%) are attached to their parents as `dep:comp`.

244 instances of `dep:comp` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.275.

The following 20 pairs of parts of speech are connected with `dep:comp`: <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt> (185; 66% instances), <tt><a href="fr_spoken-pos-DET.html">DET</a></tt>-<tt><a href="fr_spoken-pos-ADP.html">ADP</a></tt> (49; 18% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-DET.html">DET</a></tt> (14; 5% instances), <tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_spoken-pos-ADP.html">ADP</a></tt> (4; 1% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-SCONJ.html">SCONJ</a></tt> (4; 1% instances), <tt><a href="fr_spoken-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_spoken-pos-ADP.html">ADP</a></tt> (3; 1% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-DET.html">DET</a></tt> (3; 1% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-ADP.html">ADP</a></tt> (3; 1% instances), <tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_spoken-pos-ADP.html">ADP</a></tt> (2; 1% instances), <tt><a href="fr_spoken-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_spoken-pos-SCONJ.html">SCONJ</a></tt> (2; 1% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-ADP.html">ADP</a></tt> (2; 1% instances), <tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_spoken-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_spoken-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-DET.html">DET</a></tt>-<tt><a href="fr_spoken-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fr_spoken-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_spoken-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_spoken-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_spoken-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 dep:comp	color:blue
1	Nice	Nice	PROPN	_	_	3	nsubj	_	_
2	s'	se	PRON	_	Person=3|PronType=Prs	3	dep:comp	_	_
3	impose	imposer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	à	à	ADP	_	_	5	case	_	_
5	Nancy	Nancy	PROPN	_	_	3	obl:arg	_	_
6	deux	deux	NUM	_	Number=Plur	3	obl:mod	_	_
7	à	à	ADP	_	_	8	cc	_	_
8	un	un	NUM	_	Number=Sing	6	conj	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 dep:comp	color:blue
1	donc	donc	ADV	_	_	14	advmod	_	_
2	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
3	la	le	DET	conj:reform	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	reparandum	_	_
4	rencontre	rencontre	NOUN	_	Gender=Fem|Number=Sing	14	dislocated	_	_
5	de	de	ADP	de	_	6	dep:comp	_	_
6	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	4	dep	_	_
7	de	de	ADP	conj:reform	_	9	case	_	_
8	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	difficulté	difficulté	NOUN	_	Gender=Fem|Number=Sing	6	reparandum	_	_
10	à	à	ADP	_	_	11	mark	_	_
11	vivre	vivre	VERB	_	VerbForm=Inf	9	acl	_	_
12	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	14	nsubj	_	_
13	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	cop	_	_
14	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	0	root	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 dep:comp	color:blue
1	moi	lui	PRON	_	Number=Sing|Person=1|PronType=Prs	9	dislocated	_	_
2	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	vois	voir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	9	discourse	_	_
4	euh	euh	INTJ	_	_	9	discourse	_	_
5	dans	dans	ADP	_	_	7	case	_	_
6	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	vingtième	vingtième	NOUN	_	_	9	obl:mod	_	_
8	j'	il	PRON	_	Number=Sing|Person=1|PronType=Prs	9	nsubj	_	_
9	ai	avoir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
10	des	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	9	dep:comp	_	_
11	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	expl:subj	_	_
12	y	y	PRON	_	Person=3|PronType=Prs	13	iobj	_	_
13	a	avoir	VERB	conj:reform	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	reparandum	_	_
14	des	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	15	det	_	_
15	enfants	enfant	NOUN	_	Gender=Masc|Number=Plur	13	iobj	_	_

~~~


