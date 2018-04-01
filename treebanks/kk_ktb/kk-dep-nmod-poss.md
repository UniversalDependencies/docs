---
layout: base
title:  'Statistics of nmod:poss in UD_Kazakh'
udver: '2'
---

## Treebank Statistics: UD_Kazakh: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="kk-dep-nmod.html">nmod</a></tt>.

853 nodes (8%) are attached to their parents as `nmod:poss`.

853 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.59906213364596.

The following 19 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="kk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk-pos-NOUN.html">NOUN</a></tt> (524; 61% instances), <tt><a href="kk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk-pos-PROPN.html">PROPN</a></tt> (183; 21% instances), <tt><a href="kk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk-pos-PRON.html">PRON</a></tt> (74; 9% instances), <tt><a href="kk-pos-NUM.html">NUM</a></tt>-<tt><a href="kk-pos-NOUN.html">NOUN</a></tt> (14; 2% instances), <tt><a href="kk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kk-pos-NOUN.html">NOUN</a></tt> (11; 1% instances), <tt><a href="kk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk-pos-ADJ.html">ADJ</a></tt> (8; 1% instances), <tt><a href="kk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk-pos-NUM.html">NUM</a></tt> (7; 1% instances), <tt><a href="kk-pos-PRON.html">PRON</a></tt>-<tt><a href="kk-pos-NOUN.html">NOUN</a></tt> (7; 1% instances), <tt><a href="kk-pos-PRON.html">PRON</a></tt>-<tt><a href="kk-pos-PRON.html">PRON</a></tt> (7; 1% instances), <tt><a href="kk-pos-VERB.html">VERB</a></tt>-<tt><a href="kk-pos-NOUN.html">NOUN</a></tt> (7; 1% instances), <tt><a href="kk-pos-PRON.html">PRON</a></tt>-<tt><a href="kk-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="kk-pos-VERB.html">VERB</a></tt>-<tt><a href="kk-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="kk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kk-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="kk-pos-ADP.html">ADP</a></tt>-<tt><a href="kk-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="kk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="kk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="kk-pos-NUM.html">NUM</a></tt>-<tt><a href="kk-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="kk-pos-PRON.html">PRON</a></tt>-<tt><a href="kk-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="kk-pos-VERB.html">VERB</a></tt>-<tt><a href="kk-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:poss	color:blue
1	Бес	бес	NUM	num	NumType=Card	2	nummod	_	_
2	жылдың	жыл	NOUN	n	Case=Gen	3	nmod:poss	_	_
3	ішінде	іш	NOUN	n	Case=Loc|Number[psor]=Plur,Sing|Person[psor]=3	6	obl	_	_
4	үш	үш	NUM	num	NumType=Card	5	nummod	_	_
5	баласы	бала	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	6	nsubj	_	_
6	бар	бар	ADJ	adj	_	0	root	_	_
7	еді	е	AUX	cop	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	cop	_	SpaceAfter=No
8	:	:	PUNCT	sent	_	6	punct	_	_
9	екеуі	екеу	NUM	num	Case=Nom|Number[psor]=Plur,Sing|NumType=Coll|Person[psor]=3	10	nsubj	_	_
10	ұл	ұл	NOUN	n	Case=Nom	6	parataxis	_	SpaceAfter=No
11	,	,	PUNCT	cm	_	10	punct	_	_
12	біреуі	біреу	NUM	num	Case=Nom|Number[psor]=Plur,Sing|NumType=Coll|Person[psor]=3	13	nsubj	_	_
13	қыз	қыз	NOUN	n	Case=Nom	6	parataxis	_	SpaceAfter=No
14	.	.	PUNCT	sent	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:poss	color:blue
1	II	II	NUM	num	NumType=Ord	6	nsubj	_	_
2	Елизавета	Елизавета	PROPN	np	Case=Nom|Gender=Fem	1	flat:name	_	_
3	ханшайым	ханшайым	NOUN	n	Case=Nom	1	flat:name	_	_
4	Виндзор	Виндзор	PROPN	np	Case=Nom	5	nmod:poss	_	_
5	әулетінен	әулет	NOUN	n	Case=Abl|Number[psor]=Plur,Sing|Person[psor]=3	6	obl	_	_
6	шыққан	шық	VERB	v	Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
7	.	.	PUNCT	sent	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	Біздің	біз	PRON	prn	Case=Gen|Number=Plur|Person=1|PronType=Prs	2	nmod:poss	_	_
2	елде	ел	NOUN	n	Case=Loc	6	obl	_	_
3	сізге	сіз	PRON	prn	Case=Dat|Number=Sing|Person=2|Polite=Form|PronType=Prs	6	obl	_	_
4	ерекше	ерекше	ADJ	adj	_	5	amod	_	_
5	құрметпен	құрмет	NOUN	n	Case=Ins	6	obl	_	_
6	қарайды	қара	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Aor|VerbForm=Fin	0	root	_	SpaceAfter=No
7	.	.	PUNCT	sent	_	6	punct	_	_

~~~


