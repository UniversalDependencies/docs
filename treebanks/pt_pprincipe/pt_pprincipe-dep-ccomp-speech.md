---
layout: base
title:  'Statistics of ccomp:speech in UD_Portuguese-PPrincipe'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PPrincipe: Relations: `ccomp:speech`

This relation is a language-specific subtype of <tt><a href="pt_pprincipe-dep-ccomp.html">ccomp</a></tt>.

254 nodes (2%) are attached to their parents as `ccomp:speech`.

174 instances of `ccomp:speech` (69%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.77165354330709.

The following 7 pairs of parts of speech are connected with `ccomp:speech`: <tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt> (124; 49% instances), <tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt> (55; 22% instances), <tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pprincipe-pos-ADJ.html">ADJ</a></tt> (33; 13% instances), <tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pprincipe-pos-ADV.html">ADV</a></tt> (17; 7% instances), <tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pprincipe-pos-PRON.html">PRON</a></tt> (13; 5% instances), <tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pprincipe-pos-INTJ.html">INTJ</a></tt> (10; 4% instances), <tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pprincipe-pos-AUX.html">AUX</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 11 ccomp:speech	color:blue
1	Respondera	responder	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
2	me	me	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	1	iobj	_	_
3	:	:	PUNCT	_	_	11	punct	_	_
4	"	"	PUNCT	_	_	11	punct	_	SpaceAfter=No
5	Por	por	ADP	_	_	6	case	_	_
6	que	que	PRON	_	PronType=Rel	11	obl	_	_
7	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	discourse	_	_
8	que	que	SCONJ	_	_	11	discourse	_	_
9	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	chapéu	chapéu	NOUN	_	Gender=Masc|Number=Sing	11	nsubj	_	_
11	faria	fazer	VERB	_	Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin	1	ccomp:speech	_	_
12	medo	medo	NOUN	_	Gender=Masc|Number=Sing	11	obj	_	SpaceAfter=No
13	"	"	PUNCT	_	_	11	punct	_	SpaceAfter=No
14	?	?	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 ccomp:speech	color:blue
1	Mas	mas	CCONJ	_	_	2	cc	_	_
2	respondia	responder	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
3	sempre	sempre	ADV	_	_	2	advmod	_	SpaceAfter=No
4	:	:	PUNCT	_	_	8	punct	_	_
5	'	'	PUNCT	_	_	8	punct	_	SpaceAfter=No
6	É	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
7	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	chapéu	chapéu	NOUN	_	Gender=Masc|Number=Sing	2	ccomp:speech	_	SpaceAfter=No
9	'	'	PUNCT	_	_	8	punct	_	SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 3 ccomp:speech	color:blue
1	-	-	PUNCT	_	_	3	punct	_	_
2	É	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	claro	claro	ADJ	_	Gender=Masc|Number=Sing	9	ccomp:speech	_	_
4	que	que	SCONJ	_	_	7	mark	_	_
5	eu	eu	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	_
6	te	te	PRON	_	Case=Acc|Number=Sing|Person=2|PronType=Prs	7	obj	_	_
7	amo	amar	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	csubj	_	SpaceAfter=No
8	,	,	PUNCT	_	_	3	punct	_	_
9	disse	dizer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
10	lhe	lhe	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs	9	iobj	_	_
11	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	flor	flor	NOUN	_	Gender=Fem|Number=Sing	9	nsubj	_	SpaceAfter=No
13	.	.	PUNCT	_	_	9	punct	_	_

~~~


