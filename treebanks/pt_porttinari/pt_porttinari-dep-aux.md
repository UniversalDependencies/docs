---
layout: base
title:  'Statistics of aux in UD_Portuguese-Porttinari'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Porttinari: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="pt_porttinari-dep-aux-pass.html">aux:pass</a></tt>.

808 nodes (0%) are attached to their parents as `aux`.

808 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.27846534653465.

The following 6 pairs of parts of speech are connected with `aux`: <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-AUX.html">AUX</a></tt> (775; 96% instances), <tt><a href="pt_porttinari-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_porttinari-pos-AUX.html">AUX</a></tt> (16; 2% instances), <tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_porttinari-pos-AUX.html">AUX</a></tt> (14; 2% instances), <tt><a href="pt_porttinari-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_porttinari-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="pt_porttinari-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_porttinari-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="pt_porttinari-pos-SYM.html">SYM</a></tt>-<tt><a href="pt_porttinari-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 aux	color:blue
1	São	ser	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	2	cop	2:cop	_
2	muitas	muito	ADJ	_	Gender=Fem|Number=Plur	0	root	0:root	_
3	as	o	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	4	det	4:det	_
4	vozes	voz	NOUN	_	Gender=Fem|Number=Plur	2	nsubj	2:nsubj|9:nsubj	_
5	que	que	PRON	_	PronType=Rel	9	nsubj	4:ref	_
6	não	não	ADV	_	_	9	advmod	9:advmod	_
7	irão	ir	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	9	aux	9:aux	_
8	se	se	PRON	_	Case=Nom|Person=3|PronType=Prs	9	expl	9:expl	_
9	calar	calar	VERB	_	Number=Sing|Person=3|VerbForm=Inf	4	acl:relcl	4:acl:relcl	SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	2:punct	SpaceAfter=No

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 aux	color:blue
1	Seu	seu	DET	_	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	2	det	2:det	_
2	timing	timing	NOUN	_	Gender=Masc|Number=Sing	4	nsubj	4:nsubj|8:nsubj	_
3	não	não	ADV	_	_	4	advmod	4:advmod	_
4	poderia	poder	VERB	_	Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin	0	root	0:root	_
5	ter	ter	AUX	_	VerbForm=Inf	8	aux	8:aux	_
6	sido	ser	AUX	_	Gender=Masc|Number=Sing|VerbForm=Part	8	cop	8:cop	_
7	mais	mais	ADV	_	_	8	advmod	8:advmod	_
8	perfeito	perfeito	ADJ	_	Gender=Masc|Number=Sing|VerbForm=Part	4	xcomp	4:xcomp	SpaceAfter=No
9	.	.	PUNCT	_	_	4	punct	4:punct	SpaceAfter=No

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 aux	color:blue
1	Terá	ter	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	4	aux	4:aux	_
2	sido	ser	AUX	_	Gender=Masc|Number=Sing|VerbForm=Part	4	cop	4:cop	_
3	por	por	ADP	_	_	4	case	4:case	_
4	causa	causa	NOUN	_	Gender=Fem|Number=Sing	0	root	0:root	_
5	de	de	ADP	_	_	7	case	7:case	_
6	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	7:det	_
7	7	7	NUM	_	NumType=Card	4	nmod	4:nmod:de	_
8	a	a	ADP	_	_	9	case	9:case	_
9	1	1	NUM	_	NumType=Card	7	nmod	7:nmod:a	SpaceAfter=No
10	?	?	PUNCT	_	_	4	punct	4:punct	SpaceAfter=No

~~~


