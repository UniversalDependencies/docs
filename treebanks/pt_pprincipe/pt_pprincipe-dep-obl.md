---
layout: base
title:  'Statistics of obl in UD_Portuguese-PPrincipe'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PPrincipe: Relations: `obl`

This relation is universal.
There are 1 language-specific subtypes of `obl`: <tt><a href="pt_pprincipe-dep-obl-agent.html">obl:agent</a></tt>.

750 nodes (4%) are attached to their parents as `obl`.

615 instances of `obl` (82%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.80933333333333.

The following 16 pairs of parts of speech are connected with `obl`: <tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt> (529; 71% instances), <tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pprincipe-pos-PRON.html">PRON</a></tt> (95; 13% instances), <tt><a href="pt_pprincipe-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt> (60; 8% instances), <tt><a href="pt_pprincipe-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt> (20; 3% instances), <tt><a href="pt_pprincipe-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pprincipe-pos-PRON.html">PRON</a></tt> (14; 2% instances), <tt><a href="pt_pprincipe-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_pprincipe-pos-PRON.html">PRON</a></tt> (7; 1% instances), <tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pprincipe-pos-NUM.html">NUM</a></tt> (7; 1% instances), <tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pprincipe-pos-PROPN.html">PROPN</a></tt> (7; 1% instances), <tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pprincipe-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="pt_pprincipe-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="pt_pprincipe-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pprincipe-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="pt_pprincipe-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pprincipe-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="pt_pprincipe-pos-AUX.html">AUX</a></tt>-<tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pt_pprincipe-pos-AUX.html">AUX</a></tt>-<tt><a href="pt_pprincipe-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pprincipe-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 10 obl	color:blue
1	Voei	voar	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
2	,	,	PUNCT	_	_	5	punct	_	_
3	por	por	ADP	_	_	5	mark	_	_
4	assim	assim	ADV	_	_	5	advmod	_	_
5	dizer	dizer	VERB	_	VerbForm=Inf	1	advcl	_	SpaceAfter=No
6	,	,	PUNCT	_	_	5	punct	_	_
7	por	por	ADP	_	_	10	case	_	_
8	todo	todo	DET	_	Gender=Masc|Number=Sing|PronType=Ind	10	det	_	_
9	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	mundo	mundo	NOUN	_	Gender=Masc|Number=Sing	1	obl	_	SpaceAfter=No
11	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 6 obl	color:blue
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
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 obl	color:blue
1	É	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
2	muito	muito	ADV	_	_	3	advmod	_	_
3	útil	útil	ADJ	_	Number=Sing	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	8	punct	_	_
5	quando	quando	SCONJ	_	_	8	mark	_	_
6	se	se	PRON	_	Case=Nom|Person=3|PronType=Prs	8	expl:impers	_	_
7	está	estar	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
8	perdido	perdido	ADJ	_	Gender=Masc|Number=Sing|VerbForm=Part	3	advcl	_	_
9	em	em	ADP	_	_	11	case	_	_
10	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	noite	noite	NOUN	_	Gender=Fem|Number=Sing	8	obl	_	SpaceAfter=No
12	.	.	PUNCT	_	_	3	punct	_	_

~~~


