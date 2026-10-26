---
layout: base
title:  'Statistics of expl:impers in UD_Italian-KIParlaForest'
udver: '2'
---

## Treebank Statistics: UD_Italian-KIParlaForest: Relations: `expl:impers`

This relation is a language-specific subtype of <tt><a href="it_kiparlaforest-dep-expl.html">expl</a></tt>.
There are also 1 other language-specific subtypes of `expl`: <tt><a href="it_kiparlaforest-dep-expl-pass.html">expl:pass</a></tt>.

47 nodes (0%) are attached to their parents as `expl:impers`.

45 instances of `expl:impers` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.14893617021277.

The following 2 pairs of parts of speech are connected with `expl:impers`: <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt> (46; 98% instances), <tt><a href="it_kiparlaforest-pos-AUX.html">AUX</a></tt>-<tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 expl:impers	color:blue
1	non	non	ADV	_	PronType=Neg	3	advmod	_	Begin=287.175|KID=71-0
2	si	si	PRON	_	Person=3|PronType=Prs	3	expl:impers	_	Clitic=Yes|KID=71-1
3	fa	fare	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	KID=71-2
4	niente	niente	PRON	_	Gender=Masc|Number=Sing|PronType=Ind	3	obj	_	KID=71-3
5	in	in	ADP	_	_	7	case	_	KID=71-4
6	quella	quello	DET	_	Gender=Fem|Number=Sing|PronType=Dem	7	det	_	KID=71-5
7	zona	zona	NOUN	_	Gender=Fem|Number=Sing	3	obl	_	KID=71-6
8	quindi	quindi	CCONJ	_	_	11	mark	_	KID=71-7
9	per	per	ADP	_	_	10	case	_	KID=71-8|OverlappingGroup=9
10	forza	forza	NOUN	_	Gender=Fem|Number=Sing	11	obl	_	KID=71-9
11	vai	andare	NOUN	_	_	3	advcl	_	KID=71-10
12	in	in	ADP	_	_	13	case	_	KID=71-11|OverlappingGroup=10
13	centro	centro	NOUN	_	Gender=Masc|Number=Sing	11	obl	_	End=290.475|Intonation=Falling|KID=71-12|OverlappingGroup=10

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 18 expl:impers	color:blue
1	che	che	SCONJ	_	PronType=Rel	3	mark	_	Begin=2071.898|KID=811-0
2	si	si	PRON	_	Person=3|PronType=Prs	3	expl	_	KID=811-1
3	stava	stare	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	KID=811-2
4	intorno	intorno	ADV	_	_	3	advmod	_	KID=811-3
5	a	a	ADP	_	_	7	case	_	KID=811-4a
6	le	il	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	7	det	_	KID=811-4b
7	oasi	oasi	NOUN	_	Gender=Fem|Number=Plur	3	obl	_	Intonation=Falling|KID=811-5
8	anche	anche	ADV	_	_	9	advmod	_	KID=811-6
9	lì	lì	ADV	_	_	3	advmod	_	KID=811-7
10	dove	dove	ADV	_	_	12	advmod	_	KID=811-8
11	c'	ci	PRON	_	Number=Plur|Person=1|PronType=Prs	12	expl	_	KID=811-9|Truncated=Yes
12	era	essere	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	9	acl:relcl	_	KID=811-10
13	un	uno	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	14	det	_	KID=811-11
14	po'	poco	ADV	_	_	12	advmod	_	End=2074.456|KID=811-12
15	d'	di	ADP	_	_	16	case	_	Begin=2074.848|KID=812-0|Truncated=Yes
16	acqua	acqua	NOUN	_	Gender=Fem|Number=Sing	14	nmod	_	KID=812-1
17	dove	dove	ADV	_	_	19	advmod	_	KID=812-2
18	si	si	PRON	_	Person=3|PronType=Prs	19	expl:impers	_	KID=812-3
19	poteva	potere	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	16	acl:relcl	_	End=2076.21|KID=812-4

~~~


