---
layout: base
title:  'Statistics of acl in UD_Italian-KIParlaForest'
udver: '2'
---

## Treebank Statistics: UD_Italian-KIParlaForest: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="it_kiparlaforest-dep-acl-relcl.html">acl:relcl</a></tt>.

52 nodes (0%) are attached to their parents as `acl`.

50 instances of `acl` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.01923076923077.

The following 12 pairs of parts of speech are connected with `acl`: <tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt> (25; 48% instances), <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt> (8; 15% instances), <tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_kiparlaforest-pos-ADJ.html">ADJ</a></tt> (4; 8% instances), <tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt>-<tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt> (4; 8% instances), <tt><a href="it_kiparlaforest-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="it_kiparlaforest-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="it_kiparlaforest-pos-ADV.html">ADV</a></tt>-<tt><a href="it_kiparlaforest-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="it_kiparlaforest-pos-ADV.html">ADV</a></tt>-<tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="it_kiparlaforest-pos-AUX.html">AUX</a></tt>-<tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="it_kiparlaforest-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-ADJ.html">ADJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 acl	color:blue
1	non	non	ADV	_	PronType=Neg	2	advmod	_	Begin=1265.263|KID=810-0
2	fare	fare	VERB	_	VerbForm=Inf	0	root	_	KID=810-1
3	quella	quello	DET	_	Gender=Fem|Number=Sing|PronType=Dem	4	det	_	KID=810-2
4	faccia	faccia	NOUN	_	Gender=Fem|Number=Sing	2	obj	_	KID=810-3
5	da	da	ADP	_	_	6	reparandum	_	End=1266.305|KID=810-4
6	che	che	SCONJ	_	_	10	mark	_	Begin=1266.763|KID=811-0
7	non	non	ADV	_	_	10	advmod	_	KID=811-1
8	te	te	PRON	_	PronType=Prs	10	iobj	_	KID=811-2
9	ne	ne	PRON	_	PronType=Prs	10	expl	_	KID=811-3
10	frega	fregare	VERB	_	_	4	acl	_	KID=811-4
11	un	un	DET	_	PronType=Art	12	det	_	KID=811-5
12	cazzo	cazzo	NOUN	_	_	10	obj	_	KID=811-6|OverlappingGroup=143
13	di	di	ADP	_	_	15	case	_	KID=811-7a
14	la	il	DET	_	PronType=Art	15	det	_	KID=811-7b
15	vita	vita	NOUN	_	_	10	dislocated	_	End=1268.849|KID=811-8|OverlappingGroup=143

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 acl	color:blue
1	qualcosa	qualcosa	PRON	_	PronType=Ind	3	nsubj	_	Begin=1404.332|KID=530-0
2	che	che	SCONJ	_	PronType=Rel	3	mark	_	KID=530-1
3	ha	avere	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	18	acl:relcl	_	KID=530-2
4	a	a	ADP	_	_	6	mark	_	KID=530-3
5	che	che	SCONJ	_	PronType=Rel	4	fixed	_	KID=530-4
6	fare	fare	VERB	_	VerbForm=Inf	3	acl	_	KID=530-5
7	con	con	ADP	_	_	9	case	_	KID=530-6
8	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	KID=530-7
9	decadimento	decadimento	NOUN	_	Gender=Masc|Number=Sing	6	obl	_	KID=530-8
10	di	di	ADP	_	_	12	case	_	KID=530-9a
11	gli	il	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	12	det	_	KID=530-9b
12	isotopi	isotopo	NOUN	_	Gender=Masc|Number=Plur	9	nmod	_	KID=530-10
13	di	di	ADP	_	_	15	case	_	KID=530-11a
14	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	KID=530-11b
15	carbonio	carbonio	NOUN	_	Gender=Masc|Number=Sing	12	nmod	_	KID=530-12
16	non	non	ADV	_	PronType=Neg	18	advmod	_	KID=530-13
17	lo	lo	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	18	obj	_	KID=530-14
18	so	sapere	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	End=1407.999|Intonation=Falling|KID=530-15

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 acl	color:blue
1	se	se	SCONJ	_	_	2	mark	_	Begin=286.952|KID=132-0
2	vado	andare	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	advcl	_	KID=132-1
3	a	a	ADP	_	_	4	case	_	KID=132-2
4	pren~	pren~	X	_	_	2	xcomp	_	Interrupted=Yes|KID=132-3
5	comincio	cominciare	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	KID=132-4
6	andare	andare	VERB	_	VerbForm=Inf	5	ccomp	_	KID=132-5
7	a	a	ADP	_	_	8	mark	_	KID=132-6
8	prendere	prendere	VERB	_	VerbForm=Inf	6	xcomp	_	KID=132-7
9	qualche	qualche	DET	_	PronType=Ind	10	det	_	KID=132-8
10	dialetto	dialetto	NOUN	_	Gender=Masc|Number=Sing	8	obj	_	Intonation=WeaklyRising|KID=132-9
11	sperduto	sperdere	ADJ	_	Gender=Masc|Number=Sing	10	acl	_	KID=132-10
12	di	di	ADP	_	_	14	case	_	KID=132-11a
13	le	il	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	14	det	_	KID=132-11b
14	campagne	campagna	NOUN	_	Gender=Fem|Number=Plur	11	obl	_	KID=132-12
15	e	e	CCONJ	_	_	18	cc	_	KID=132-13
16	di	di	ADP	_	_	18	case	_	KID=132-14a
17	le	il	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	18	det	_	KID=132-14b
18	montagne	montagna	NOUN	_	Gender=Fem|Number=Plur	14	conj	_	End=291.511|Intonation=WeaklyRising|KID=132-15

~~~


