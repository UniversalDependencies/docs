---
layout: base
title:  'Statistics of appos in UD_German-LIT'
udver: '2'
---

## Treebank Statistics: UD_German-LIT: Relations: `appos`

This relation is universal.

88 nodes (0%) are attached to their parents as `appos`.

88 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.76136363636364.

The following 16 pairs of parts of speech are connected with `appos`: <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (54; 61% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-PROPN.html">PROPN</a></tt> (9; 10% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt> (6; 7% instances), <tt><a href="de_lit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (4; 5% instances), <tt><a href="de_lit-pos-PRON.html">PRON</a></tt>-<tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="de_lit-pos-PRON.html">PRON</a></tt>-<tt><a href="de_lit-pos-DET.html">DET</a></tt> (2; 2% instances), <tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-ADP.html">ADP</a></tt>-<tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-PRON.html">PRON</a></tt>-<tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-PRON.html">PRON</a></tt>-<tt><a href="de_lit-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_lit-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 appos	color:blue
1	Ein	ein	DET	ART	Definite=Ind|NumType=Card|PronType=Art	2	det	_	_
2	Kommandowort	Kommandowort	NOUN	NN	Case=Nom	3	nsubj	_	_
3	bewegt	bewegen	VERB	VVFIN	_	0	root	_	_
4	Armeen	Armee	NOUN	NN	Case=Acc	3	obj	_	SpaceAfter=No
5	;	;	PUNCT	$,	_	7	punct	_	_
6	das	der	DET	ART	Definite=Def|PronType=Art	7	det	_	_
7	Wort	Wort	NOUN	NN	_	3	parataxis	_	_
8	Freyheit	Freyheit	NOUN	NN	_	7	appos	_	_
9	Nazionen	Nation	NOUN	NN	_	7	orphan	_	SpaceAfter=No
10	.	.	PUNCT	$.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 appos	color:blue
1	Wenn	wenn	SCONJ	KOUS	_	4	mark	_	_
2	der	der	DET	ART	Definite=Def|PronType=Art	3	det	_	_
3	Geist	Geist	NOUN	NN	Case=Nom	4	nsubj	_	_
4	heiligt	heiligen	VERB	VVFIN	_	10	advcl	_	SpaceAfter=No
5	,	,	PUNCT	$,	_	4	punct	_	_
6	so	so	ADV	ADV	_	10	advmod	_	_
7	ist	sein	AUX	VAFIN	_	10	cop	_	_
8	jedes	jeder	DET	PDS	Number=Sing|PronType=Tot	10	det	_	_
9	ächte	ächen	ADJ	ADJA	_	10	amod	_	_
10	Buch	Buch	NOUN	NN	Case=Nom	0	root	_	_
11	Bibel	Bibel	PROPN	NE	_	10	appos	_	SpaceAfter=No
12	.	.	PUNCT	$.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 appos	color:blue
1	Das	der	DET	ART	Definite=Def|PronType=Art	3	det	_	_
2	ganze	ganz	ADJ	ADJA	_	3	amod	_	_
3	Altertum	Altertum	NOUN	NN	Case=Nom	6	nsubj	_	_
4	ist	sein	AUX	VAFIN	_	6	cop	_	_
5	ein	ein	DET	ART	Definite=Ind|NumType=Card|PronType=Art	6	det	_	_
6	Genius	Genius	NOUN	NN	Case=Nom	0	root	_	SpaceAfter=No
7	,	,	PUNCT	$,	_	9	punct	_	_
8	der	der	DET	ART	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	einzige	einzig	ADJ	PIS	Case=Nom|Degree=Pos	6	appos	_	_
10	den	der	DET	ART	Case=Acc|Definite=Def|PronType=Art	20	obj	_	_
11	man	man	PRON	PIS	Case=Nom|Number=Sing|PronType=Ind	20	nsubj	_	_
12	ohne	ohne	ADP	APPR	_	13	case	_	_
13	Übertreibung	Übertreibung	NOUN	NN	Case=Acc	20	obl	_	_
14	absolut	absolut	ADV	ADV	_	20	advmod	_	_
15	groß	groß	ADJ	ADJD	_	20	xcomp	_	SpaceAfter=No
16	,	,	PUNCT	$,	_	17	punct	_	_
17	einzig	einzig	ADJ	ADJD	Degree=Pos	15	conj	_	_
18	und	und	CCONJ	KON	_	19	cc	_	_
19	unerreichbar	unerreichbar	ADJ	ADJD	_	15	conj	_	_
20	nennen	nennen	VERB	VVINF	_	9	acl:relcl	_	_
21	darf	dürfen	AUX	VMFIN	_	20	aux	_	SpaceAfter=No
22	.	.	PUNCT	$.	_	6	punct	_	_

~~~


