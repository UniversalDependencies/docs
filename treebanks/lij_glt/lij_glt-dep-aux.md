---
layout: base
title:  'Statistics of aux in UD_Ligurian-GLT'
udver: '2'
---

## Treebank Statistics: UD_Ligurian-GLT: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="lij_glt-dep-aux-pass.html">aux:pass</a></tt>.

207 nodes (3%) are attached to their parents as `aux`.

207 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.28502415458937.

The following 5 pairs of parts of speech are connected with `aux`: <tt><a href="lij_glt-pos-VERB.html">VERB</a></tt>-<tt><a href="lij_glt-pos-AUX.html">AUX</a></tt> (197; 95% instances), <tt><a href="lij_glt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lij_glt-pos-AUX.html">AUX</a></tt> (5; 2% instances), <tt><a href="lij_glt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lij_glt-pos-AUX.html">AUX</a></tt> (3; 1% instances), <tt><a href="lij_glt-pos-ADV.html">ADV</a></tt>-<tt><a href="lij_glt-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="lij_glt-pos-VERB.html">VERB</a></tt>-<tt><a href="lij_glt-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 aux	color:blue
1	Ma	ma	CCONJ	_	_	11	cc	_	_
2	Scimon	Scimon	PROPN	_	Gender=Masc|Number=Sing	11	nsubj	_	_
3	e	e	CCONJ	_	_	4	cc	_	_
4	quelli	quello	PRON	_	Gender=Masc|Number=Plur|PronType=Dem	2	conj	_	_
5	che	che	PRON	_	PronType=Rel	8	nsubj	_	_
6	gh'	ghe	PRON	_	Person=3|PronType=Prs	8	iobj	_	SpaceAfter=No
7	ea	ëse	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	cop	_	_
8	insemme	insemme	ADV	_	_	4	acl:relcl	_	_
9	ghe	ghe	PRON	_	Person=3|PronType=Prs	11	iobj	_	_
10	son	ëse	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	11	aux	_	_
11	andæti	andâ	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	0	root	_	_
12	apreuvo	apreuvo	ADV	_	_	11	advmod	_	SpaceAfter=No
13	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 aux	color:blue
1	Sta	sto	PRON	_	Gender=Fem|Number=Sing|PronType=Dem	7	nsubj	_	_
2	chì	chì	ADV	_	_	1	advmod	_	_
3	a	o	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	7	expl	_	_
4	dovieiva	dovei	AUX	_	Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin	7	aux	_	_
5	ëse	ëse	AUX	_	Tense=Pres|VerbForm=Inf	7	cop	_	_
6	unna	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	zöna	zöna	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
8	de	de	ADP	_	_	9	case	_	_
9	restoranti	restorante	NOUN	_	Gender=Masc|Number=Plur	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 aux	color:blue
1	Me	me	PRON	_	Number=Sing|Person=1|PronType=Prs	2	iobj	_	_
2	pâ	pai	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	d'	de	ADP	_	_	6	mark	_	SpaceAfter=No
4	ëse	ëse	AUX	_	Tense=Pres|VerbForm=Inf	6	aux	_	_
5	stæto	ëse	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	6	cop	_	_
6	ciæo	ciæo	ADJ	_	Gender=Masc|Number=Sing	2	ccomp	_	SpaceAfter=No
7	.	.	PUNCT	_	_	2	punct	_	_

~~~


