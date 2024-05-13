---
layout: base
title:  'Statistics of appos in UD_Galician-TreeGal'
udver: '2'
---

## Treebank Statistics: UD_Galician-TreeGal: Relations: `appos`

This relation is universal.

103 nodes (0%) are attached to their parents as `appos`.

103 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.07766990291262.

The following 16 pairs of parts of speech are connected with `appos`: <tt><a href="gl_treegal-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gl_treegal-pos-NOUN.html">NOUN</a></tt> (33; 32% instances), <tt><a href="gl_treegal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_treegal-pos-NOUN.html">NOUN</a></tt> (26; 25% instances), <tt><a href="gl_treegal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_treegal-pos-PROPN.html">PROPN</a></tt> (26; 25% instances), <tt><a href="gl_treegal-pos-NUM.html">NUM</a></tt>-<tt><a href="gl_treegal-pos-NOUN.html">NOUN</a></tt> (4; 4% instances), <tt><a href="gl_treegal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_treegal-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="gl_treegal-pos-PRON.html">PRON</a></tt>-<tt><a href="gl_treegal-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="gl_treegal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gl_treegal-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="gl_treegal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_treegal-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="gl_treegal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_treegal-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="gl_treegal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_treegal-pos-INTJ.html">INTJ</a></tt> (1; 1% instances), <tt><a href="gl_treegal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_treegal-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="gl_treegal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_treegal-pos-SYM.html">SYM</a></tt> (1; 1% instances), <tt><a href="gl_treegal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_treegal-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="gl_treegal-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gl_treegal-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="gl_treegal-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gl_treegal-pos-SYM.html">SYM</a></tt> (1; 1% instances), <tt><a href="gl_treegal-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gl_treegal-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 appos	color:blue
1	Santi	santi	PROPN	Sp00	_	0	root	_	_
2	(	(	PUNCT	Q(	_	4	punct	_	SpaceAfter=No
3	Los	los	DET	Ddmp	PronType=Art	4	det	_	_
4	Limones	limones	NOUN	Scmp	_	1	appos	_	SpaceAfter=No
5	)	)	PUNCT	Q)	_	4	punct	_	SpaceAfter=No
6	,	,	PUNCT	Q,	_	7	punct	_	_
7	Susana	susana	PROPN	Sp00	_	1	conj	_	_
8	Seivane	seivane	PROPN	Sp00	_	7	flat:name	_	_
9	e	e	CCONJ	Cc	_	10	cc	_	_
10	Bieito	bieito	PROPN	Sp00	_	1	conj	_	_
11	Romero	romero	PROPN	Sp00	_	10	flat:name	_	SpaceAfter=No
12	.	.	PUNCT	Q.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 appos	color:blue
1	Coñecín	coñecer	VERB	Vei10s	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	_
2	o	o	PRON	Raa3ms	Case=Acc|Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	1	obj	_	_
3	en	en	ADP	P	AdpType=Prep	4	case	_	_
4	Música	música	NOUN	Scfs	Gender=Fem|Number=Sing	1	obl	_	_
5	en	en	ADP	P	AdpType=Prep	6	case	_	_
6	Compostela	compostela	PROPN	Sp00	_	4	nmod	_	SpaceAfter=No
7	,	,	PUNCT	Q,	_	4	punct	_	_
8	uns	un	DET	Dimp	Definite=Ind|Gender=Masc|Number=Plur|PronType=Art	9	det	_	_
9	cursos	curso	NOUN	Scmp	Gender=Masc|Number=Plur	4	appos	_	_
10	que	que	PRON	Tnmp	Gender=Masc|Number=Plur|PronType=Rel	11	obj	_	_
11	realicei	realizar	VERB	Vei10s	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	9	acl	_	_
12	en	en	ADP	P	AdpType=Prep	14	case	_	_
13	o	o	DET	Ddms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	ano	ano	NOUN	Scms	Gender=Masc|Number=Sing	11	obl	_	_
15	1974	1974	NUM	Ncnms	Gender=Masc|Number=Sing|NumType=Card	14	nummod	_	SpaceAfter=No
16	.	.	PUNCT	Q.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 appos	color:blue
1	Don	don	NOUN	Scms	Gender=Masc|Number=Sing	0	root	_	_
2	Quixote	quixote	PROPN	Sp00	_	1	appos	_	_
3	e	e	CCONJ	Cc	_	4	cc	_	_
4	Breogán	breogán	PROPN	Sp00	_	1	conj	_	_

~~~


