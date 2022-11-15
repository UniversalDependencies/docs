---
layout: base
title:  'Statistics of acl in UD_Italian-PoSTWITA'
udver: '2'
---

## Treebank Statistics: UD_Italian-PoSTWITA: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="it_postwita-dep-acl-relcl.html">acl:relcl</a></tt>.

595 nodes (0%) are attached to their parents as `acl`.

580 instances of `acl` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.86890756302521.

The following 19 pairs of parts of speech are connected with `acl`: <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (467; 78% instances), <tt><a href="it_postwita-pos-PRON.html">PRON</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (41; 7% instances), <tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (30; 5% instances), <tt><a href="it_postwita-pos-SYM.html">SYM</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (18; 3% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (10; 2% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt> (9; 2% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="it_postwita-pos-ADV.html">ADV</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="it_postwita-pos-INTJ.html">INTJ</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (2; 0% instances), <tt><a href="it_postwita-pos-PRON.html">PRON</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_postwita-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-PRON.html">PRON</a></tt>-<tt><a href="it_postwita-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-PRON.html">PRON</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-X.html">X</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 acl	color:blue
1	DI	DI	PROPN	SP	_	4	nmod	_	_
2	RUSCIO	RUSCIO	PROPN	SP	_	1	flat:name	_	SpaceAfter=No
3	:	:	PUNCT	FC	_	1	punct	_	_
4	ritengo	ritenere	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
5	ingiusto	ingiusto	ADJ	A	Gender=Masc|Number=Sing	4	xcomp	_	_
6	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	decreto	decreto	NOUN	S	Gender=Masc|Number=Sing	4	obj	_	_
8	varato	varare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	7	acl	_	_
9	da	da	ADP	E	_	11	case	_	_
10	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	Governo	governo	NOUN	S	Gender=Masc|Number=Sing	8	obl:agent	_	_
12	Monti	Monti	PROPN	SP	_	11	nmod	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 acl	color:blue
1	Visto	vedere	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	6	acl	_	_
2	che	che	SCONJ	CS	_	4	mark	_	_
3	mi	mi	PRON	PC	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	4	expl	_	_
4	volete	volere	VERB	V	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	1	ccomp	_	_
5	bene	bene	ADV	B	_	4	advmod	_	_
6	chi	chi	PRON	PR	PronType=Rel	0	root	_	_
7	vuole	volere	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	_
8	fare	fare	VERB	V	VerbForm=Inf	6	acl:relcl	_	_
9	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	11	det	_	_
10	miei	mio	DET	AP	Gender=Masc|Number=Plur|Poss=Yes|PronType=Prs	11	det:poss	_	_
11	compiti	compito	NOUN	S	Gender=Masc|Number=Plur	8	obj	_	SpaceAfter=No
12	?	?	PUNCT	FS	_	6	punct	_	_
13	;)	;)	SYM	SYM	_	6	discourse	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 acl	color:blue
1	Mario	mario	PROPN	SP	_	0	root	_	_
2	Monti	Monti	PROPN	SP	_	1	flat:name	_	_
3	appoggiato	appoggiare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	1	acl	_	_
4	da	da	ADP	E	_	5	case	_	_
5	Pdl	Pdl	PROPN	SP	_	3	obl:agent	_	_
6	-	-	PUNCT	FB	_	7	punct	_	_
7	Pd	Pd	PROPN	SP	_	5	conj	_	_
8	e	e	CCONJ	CC	_	10	cc	_	_
9	terzo	terzo	ADJ	NO	Gender=Masc|Number=Sing|NumType=Ord	10	amod	_	_
10	Polo	Polo	PROPN	SP	_	5	conj	_	_
11	#elezioni	#elezioni	SYM	SYM	_	1	parataxis:hashtag	_	_
12	#308	#308	SYM	SYM	_	1	parataxis:hashtag	_	SpaceAfter=No
13	?	?	PUNCT	FS	_	1	punct	_	_

~~~


