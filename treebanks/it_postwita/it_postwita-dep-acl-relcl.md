---
layout: base
title:  'Statistics of acl:relcl in UD_Italian-PoSTWITA'
udver: '2'
---

## Treebank Statistics: UD_Italian-PoSTWITA: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="it_postwita-dep-acl.html">acl</a></tt>.

451 nodes (1%) are attached to their parents as `acl:relcl`.

451 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.37915742793792.

The following 20 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (219; 49% instances), <tt><a href="it_postwita-pos-PRON.html">PRON</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (168; 37% instances), <tt><a href="it_postwita-pos-SYM.html">SYM</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (18; 4% instances), <tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (16; 4% instances), <tt><a href="it_postwita-pos-PRON.html">PRON</a></tt>-<tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt> (4; 1% instances), <tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="it_postwita-pos-PRON.html">PRON</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="it_postwita-pos-PRON.html">PRON</a></tt>-<tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="it_postwita-pos-PRON.html">PRON</a></tt>-<tt><a href="it_postwita-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="it_postwita-pos-PRON.html">PRON</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (2; 0% instances), <tt><a href="it_postwita-pos-PRON.html">PRON</a></tt>-<tt><a href="it_postwita-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="it_postwita-pos-X.html">X</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_postwita-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-PRON.html">PRON</a></tt>-<tt><a href="it_postwita-pos-INTJ.html">INTJ</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_postwita-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-SYM.html">SYM</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 acl:relcl	color:blue
1	MARIO	mario	PROPN	SP	_	4	nsubj	_	_
2	MONTI	MONTI	PROPN	SP	_	1	flat:name	_	_
3	STA	stare	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	_
4	FREGANDO	fregare	VERB	V	VerbForm=Inf	0	root	_	_
5	LA	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	GENTE	gente	NOUN	S	Gender=Fem|Number=Sing	4	obj	_	_
7	CHE	che	PRON	PR	PronType=Rel	9	nsubj	_	_
8	GIÀ	GIÀ	ADV	B	_	9	advmod	_	_
9	HA	avere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	acl:relcl	_	_
10	LE	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	11	det	_	_
11	TASCHE	tasca	NOUN	S	Gender=Fem|Number=Plur	9	obj	_	_
12	VUOTE	vuoto	ADJ	A	Gender=Fem|Number=Plur	11	amod	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 acl:relcl	color:blue
1	Visto	vistare	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	6	acl	_	_
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
13	;)	;)	SYM	SYM	_	6	discourse:emo	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 acl:relcl	color:blue
1	#BrigaAMICI	#BrigaAMICI	SYM	SYM	_	8	nsubj	_	_
2	che	che	PRON	PR	PronType=Rel	3	nsubj	_	_
3	difendeva	difendere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	1	acl:relcl	_	_
4	Gabriele	gabriele	PROPN	SP	_	3	obj	_	SpaceAfter=No
5	,	,	PUNCT	FF	_	1	punct	_	_
6	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
7	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	8	det	_	SpaceAfter=No
8	amore	amore	NOUN	S	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	8	punct	_	_
10	❤	❤	SYM	SYM	_	8	discourse:emo	_	_
11	😍	😍	SYM	SYM	_	8	discourse:emo	_	_

~~~


