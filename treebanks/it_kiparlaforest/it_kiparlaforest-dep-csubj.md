---
layout: base
title:  'Statistics of csubj in UD_Italian-KIParlaForest'
udver: '2'
---

## Treebank Statistics: UD_Italian-KIParlaForest: Relations: `csubj`

This relation is universal.

22 nodes (0%) are attached to their parents as `csubj`.

16 instances of `csubj` (73%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.95454545454545.

The following 5 pairs of parts of speech are connected with `csubj`: <tt><a href="it_kiparlaforest-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt> (10; 45% instances), <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt> (7; 32% instances), <tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt> (2; 9% instances), <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-ADJ.html">ADJ</a></tt> (2; 9% instances), <tt><a href="it_kiparlaforest-pos-X.html">X</a></tt>-<tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 csubj	color:blue
1	è	essere	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	Begin=309.19|KID=76-0|Prolonged=Yes
2	brutto	brutto	ADJ	_	Gender=Masc|Number=Sing	0	root	_	KID=76-1
3	tornare	tornare	VERB	_	VerbForm=Inf	2	csubj	_	KID=76-2
4	a	a	ADP	_	_	5	case	_	KID=76-3
5	piedi	piede	NOUN	_	Gender=Masc|Number=Plur	3	obl	_	End=310.64|Intonation=Falling|KID=76-4
6	e	e	CCONJ	_	_	9	cc	_	Begin=311.545|KID=77-0|Prolonged=Yes
7	quindi	quindi	CCONJ	_	_	9	advmod	_	KID=77-1
8	sì	sì	ADV	_	_	9	discourse	_	KID=77-2
9	prendo	prendere	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	2	conj	_	KID=77-3
10	sempre	sempre	ADV	_	_	9	advmod	_	KID=77-4
11	la	il	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	KID=77-5
12	macchina	macchina	NOUN	_	Gender=Fem|Number=Sing	9	obj	_	End=313.66|Intonation=Falling|KID=77-6

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 csubj	color:blue
1	ne	ne	PRON	_	Clitic=Yes|PronType=Prs	3	iobj	_	Begin=178.81|KID=77-0|OverlappingGroup=40
2	avevo	avere	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	3	aux	_	KID=77-1|OverlappingGroup=40
3	sentito	sentire	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	KID=77-2|OverlappingGroup=40
4	parlare	parlare	VERB	_	VerbForm=Inf	3	xcomp	_	End=180.426|Intonation=Falling|KID=77-3|OverlappingGroup=40
5	ne	ne	PRON	_	Clitic=Yes|PronType=Prs	7	iobj	_	Begin=180.526|KID=78-0
6	ho	avere	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	7	aux	_	KID=78-1
7	sentito	sentire	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	3	conj:reform	_	KID=78-2|OverlappingGroup=41
8	parlare	parlare	VERB	_	VerbForm=Inf	7	csubj	_	KID=78-3|OverlappingGroup=41
9	sì	sì	ADV	_	_	7	advmod	_	End=181.942|Intonation=Falling|KID=78-4|OverlappingGroup=41

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 csubj	color:blue
1	e	e	CCONJ	_	_	3	cc	_	KID=69-23|Prolonged=Yes
2	dove	dove	ADV	_	_	3	advmod	_	KID=69-24
3	abito	abitare	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	8	csubj	_	KID=69-25
4	io	io	PRON	_	Number=Sing|Person=1|PronType=Prs	3	nsubj	_	KID=69-26
5	appunto	appunto	ADV	_	_	3	advmod	_	KID=69-27
6	è	essere	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	KID=69-28|Prolonged=Yes
7	un	uno	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	8	det	_	KID=69-29
8	aggregato	aggregato	NOUN	_	Gender=Masc|Number=Sing	0	root	_	KID=69-30
9	di	di	ADP	_	_	11	case	_	End=283.03|Intonation=WeaklyRising|KID=69-31|Prolonged=Yes
10	cento	cento	NUM	_	NumType=Card	11	nummod	_	Begin=283.45|KID=70-0
11	case	casa	NOUN	_	Gender=Fem|Number=Plur	8	nmod	_	KID=70-1|Prolonged=Yes
12	con	con	ADP	_	_	14	case	_	KID=70-2
13	la	il	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	KID=70-3
14	chiesetta	chiesa	NOUN	_	_	8	nmod	_	KID=70-4
15	così	così	ADV	_	_	8	discourse	_	KID=70-5
16	insomma	insomma	ADV	_	_	8	discourse	_	End=286.84|Intonation=WeaklyRising|KID=70-6|Prolonged=Yes

~~~


